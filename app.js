(() => {
  'use strict';

  const QUESTIONS = window.CTFL_QUESTIONS || [];
  const GLOSSARY = window.CTFL_GLOSSARY || [];
  const KEYWORDS = window.CTFL_KEYWORDS || {};

  // Syllabus chapters and sections, as tagged on the questions.
  const CHAPTERS = [];
  QUESTIONS.forEach((q, i) => {
    let ch = CHAPTERS.find(c => c.id === q.syllabus_chapter);
    if (!ch) CHAPTERS.push(ch = { id: q.syllabus_chapter, title: q.syllabus_chapter_title, sections: [], qs: [] });
    let sec = ch.sections.find(s => s.id === q.syllabus_section);
    if (!sec) ch.sections.push(sec = { id: q.syllabus_section, title: q.syllabus_section_title, qs: [] });
    ch.qs.push(i);
    sec.qs.push(i);
  });
  const byNumber = (a, b) => a.id.localeCompare(b.id, undefined, { numeric: true });
  CHAPTERS.sort(byNumber).forEach(ch => ch.sections.sort(byNumber));
  const SECTIONS = CHAPTERS.flatMap(ch => ch.sections.map(s => ({ ...s, chapter: ch })));

  // The glossary has no chapter tags, so matching groups terms by the syllabus's per-chapter keyword lists.
  const TERM_INDEX = new Map(GLOSSARY.map((g, i) => [g.term, i]));
  const KEYWORD_CHAPTERS = CHAPTERS.map(ch => ({
    id: ch.id,
    title: ch.title,
    terms: (KEYWORDS[ch.id] || []).map(t => TERM_INDEX.get(t)).filter(i => i != null),
  })).filter(ch => ch.terms.length);
  const KEYWORD_TERMS = [...new Set(KEYWORD_CHAPTERS.flatMap(ch => ch.terms))].sort((a, b) => a - b);

  const app = document.getElementById('app');
  const toastEl = document.getElementById('toast');

  // ---------- helpers ----------

  function h(tag, attrs, ...kids) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === 'class') el.className = v;
      else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? '' : v);
    }
    for (const kid of kids.flat(Infinity)) {
      if (kid == null || kid === false) continue;
      el.append(kid instanceof Node ? kid : String(kid));
    }
    return el;
  }

  // Progress lives in localStorage: iOS often kills home-screen apps in the background,
  // which would wipe sessionStorage. Every access is guarded so private windows still work.
  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem('ctfl.' + k)); } catch { return null; } },
    set(k, v) { try { localStorage.setItem('ctfl.' + k, JSON.stringify(v)); } catch { /* ignore */ } },
  };

  let toastTimer = null;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toastEl.hidden = true; }, 3200);
  }

  // Text from the PDFs mixes hard-wrapped prose with indented lists and tables.
  // Prose lines are re-flowed into paragraphs, indented lists into wrapped list items, and
  // only real columnar tables keep their exact layout in a scrollable <pre>.
  // Only whitespace is touched, never the words themselves.
  const TABULAR = /^\s{3,}\S|\S\s{3,}\S/;
  const LIST_MARKER = /^\s*(?:•|o|[ivx]+\.|\d+\.|\(\d+\)|[A-Za-z]\.|[a-e]\))\s+/;
  const indentOf = l => l.match(/^ */)[0].length;

  function indentedBlock(lines) {
    const body = lines.filter(l => l.trim());
    const hasColumns = body.some(l => /\S\s{3,}\S/.test(l.replace(LIST_MARKER, '')));
    if (hasColumns) {
      const indent = Math.min(...body.map(indentOf));
      return h('pre', null, lines.map(l => l.slice(indent)).join('\n'));
    }
    if (LIST_MARKER.test(body[0])) {
      // Marker lines start items; other lines continue the previous item.
      const base = Math.min(...body.filter(l => LIST_MARKER.test(l)).map(indentOf));
      const items = [];
      for (const l of body) {
        if (LIST_MARKER.test(l) || !items.length) {
          items.push({ text: l.replace(LIST_MARKER, m => m.trim() + ' ').trim(), sub: indentOf(l) > base + 2 });
        } else {
          items[items.length - 1].text += ' ' + l.trim();
        }
      }
      return h('div', { class: 'list' }, items.map(it => h('p', { class: it.sub ? 'sub' : null }, it.text)));
    }
    // Indented text without columns (quoted user stories, defect reports): keep its lines, let them wrap.
    return h('div', { class: 'quote' }, body.map(l => l.trim()).join('\n'));
  }
  function richText(text) {
    const frag = document.createDocumentFragment();
    let prose = [];
    let pre = [];
    const flushProse = () => {
      if (prose.length) frag.append(h('p', null, prose.join(' ')));
      prose = [];
    };
    const flushPre = () => {
      while (pre.length && !pre[pre.length - 1].trim()) pre.pop();
      if (pre.length) frag.append(indentedBlock(pre));
      pre = [];
    };
    for (const raw of String(text).replace(/\r/g, '').split('\n')) {
      const line = raw.replace(/\s+$/, '');
      if (!line) {
        flushProse();
        if (pre.length) pre.push('');
      } else if (TABULAR.test(line) || (pre.length && /^\s/.test(line))) {
        flushProse();
        pre.push(line);
      } else {
        flushPre();
        prose.push(line.trim());
      }
    }
    flushProse();
    flushPre();
    return frag;
  }

  // ---------- decks ----------

  function shuffledIndices(n) {
    const a = Array.from({ length: n }, (_, i) => i);
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function shuffled(items, avoidFirst) {
    const a = shuffledIndices(items.length).map(k => items[k]);
    // Don't let a new pass open with the item that just closed the previous one.
    if (a.length > 1 && a[0] === avoidFirst) {
      const j = 1 + Math.floor(Math.random() * (a.length - 1));
      [a[0], a[j]] = [a[j], a[0]];
    }
    return a;
  }
  const range = n => Array.from({ length: n }, (_, i) => i);

  // ---------- results history ----------

  // One record per question (by id) or glossary term (by name): times seen, times right, last result.
  // Kept apart from the decks, so "Start over" never wipes the progress report.
  const STATS_KEY = { quiz: 'quizStats', matching: 'matchStats' };
  const getStats = mode => store.get(STATS_KEY[mode]) || {};
  function record(mode, id, right) {
    const all = getStats(mode);
    const s = all[id] || { n: 0, r: 0, last: 0 };
    all[id] = { n: s.n + 1, r: s.r + (right ? 1 : 0), last: right ? 1 : 0 };
    store.set(STATS_KEY[mode], all);
  }
  const statId = (mode, i) => mode === 'quiz' ? QUESTIONS[i].id : GLOSSARY[i].term;

  // Totals for a group of items: how many exist, were tried, were ever missed, and are still wrong.
  function summarize(mode, items, stats = getStats(mode)) {
    const t = { total: items.length, seen: 0, tries: 0, right: 0, missed: 0, open: 0 };
    for (const i of items) {
      const s = stats[statId(mode, i)];
      if (!s) continue;
      t.seen += 1;
      t.tries += s.n;
      t.right += s.r;
      if (s.r < s.n) t.missed += 1;
      if (!s.last) t.open += 1;
    }
    t.pct = t.tries ? Math.round((100 * t.right) / t.tries) : null;
    return t;
  }

  // A weak point is a tried group scoring under 70%; worst first.
  const WEAK_PCT = 70;
  function weakGroups(mode, groups, itemsOf) {
    const stats = getStats(mode);
    return groups
      .map(g => ({ g, s: summarize(mode, itemsOf(g), stats) }))
      .filter(x => x.s.tries && x.s.pct < WEAK_PCT)
      .sort((a, b) => a.s.pct - b.s.pct || b.s.open - a.s.open || b.s.tries - a.s.tries);
  }
  const weakSections = () => weakGroups('quiz', SECTIONS, s => s.qs);

  // ---------- practice focus ----------

  // What a deck draws from. Quiz: all | missed | weak | sections(ids). Matching: all | missed | keywords | chapters(ids).
  const ALL = { type: 'all' };
  const MIN_POOL = { quiz: 1, flashcards: 1, matching: 2 };

  function focusPool(mode, focus) {
    const total = mode === 'quiz' ? QUESTIONS.length : GLOSSARY.length;
    const stats = getStats(mode);
    const ids = new Set(focus.ids || []);
    switch (focus.type) {
      case 'missed': return range(total).filter(i => { const s = stats[statId(mode, i)]; return s && !s.last; });
      case 'weak': return weakSections().flatMap(x => x.g.qs).sort((a, b) => a - b);
      case 'sections': return SECTIONS.filter(s => ids.has(s.id)).flatMap(s => s.qs).sort((a, b) => a - b);
      case 'keywords': return KEYWORD_TERMS;
      case 'chapters': return [...new Set(KEYWORD_CHAPTERS.filter(c => ids.has(c.id)).flatMap(c => c.terms))].sort((a, b) => a - b);
      default: return range(total);
    }
  }

  function focusLabel(mode, focus) {
    const noun = mode === 'quiz' ? 'questions' : 'terms';
    const ids = focus.ids || [];
    switch (focus.type) {
      case 'missed': return `Missed ${noun}`;
      case 'weak': return 'Weak points';
      case 'keywords': return 'Syllabus keywords';
      case 'chapters': return `Ch. ${ids.join(', ')} keywords`;
      case 'sections': {
        const whole = CHAPTERS.filter(ch => ch.sections.every(s => ids.includes(s.id)));
        if (whole.length && whole.reduce((n, ch) => n + ch.sections.length, 0) === ids.length) {
          return `Ch. ${whole.map(ch => ch.id).join(', ')}`;
        }
        if (ids.length === 1) {
          const s = SECTIONS.find(x => x.id === ids[0]);
          return s ? `${s.id} ${s.title}` : '1 section';
        }
        const chs = [...new Set(ids.map(id => id.split('.')[0]))];
        return chs.length === 1 ? `Ch. ${chs[0]} · ${ids.length} sections` : `${ids.length} sections`;
      }
      default: return `All ${noun}`;
    }
  }

  class Deck {
    constructor(key, total) {
      this.key = key;
      this.total = total;
      const s = store.get('deck.' + key);
      const valid = s && Array.isArray(s.order) && s.order.length &&
        s.order.every(i => Number.isInteger(i) && i >= 0 && i < total) && s.pos >= 0 && s.pos < s.order.length;
      if (valid) {
        this.order = s.order;
        this.pos = s.pos;
        this.pass = s.pass || 1;
        this.extra = s.extra || null;
        this.focus = s.focus || ALL;
      } else {
        this.focus = ALL;
        this.reset();
      }
    }
    get size() { return this.order.length; }
    get current() { return this.order[this.pos]; }
    save() {
      store.set('deck.' + this.key, { order: this.order, pos: this.pos, pass: this.pass, extra: this.extra, focus: this.focus });
    }
    // The items the focus picks right now (missed and weak sets change as you answer).
    // If too few are left, the deck goes back to everything and remembers that it did.
    pool() {
      const p = focusPool(this.key, this.focus);
      if (p.length >= MIN_POOL[this.key]) return p;
      this.focusEnded = focusLabel(this.key, this.focus);
      this.focus = ALL;
      return range(this.total);
    }
    // Moves forward by `step`. On exhaustion, reshuffles into a new order and returns true.
    advance(step = 1) {
      this.extra = null;
      this.pos += step;
      let wrapped = false;
      if (this.pos >= this.size) {
        this.order = shuffled(this.pool(), this.order[this.size - 1]);
        this.pos = 0;
        this.pass += 1;
        wrapped = true;
      }
      this.save();
      return wrapped;
    }
    back() {
      if (this.pos > 0) {
        this.pos -= 1;
        this.extra = null;
        this.save();
      }
    }
    // Starts the deck over from scratch: new random order, first item, pass 1.
    reset() {
      this.order = shuffled(this.pool());
      this.pos = 0;
      this.pass = 1;
      this.extra = null;
      this.save();
    }
    setFocus(focus) {
      this.focus = focus;
      this.reset();
    }
  }

  // Toast for a finished pass; also says when a "missed"/"weak" focus ran out and the deck widened.
  function deckDoneToast(deck, noun, verb) {
    if (deck.focusEnded) {
      toast(`Nothing left in “${deck.focusEnded}” — nice work! Back to all ${deck.size} ${noun}.`);
      deck.focusEnded = null;
    } else {
      toast(`Deck complete — all ${noun} ${verb}. Reshuffled; pass ${deck.pass} starts now.`);
    }
  }

  const DECK_SIZES = { quiz: QUESTIONS.length, flashcards: GLOSSARY.length, matching: GLOSSARY.length };
  const decks = {};
  // Decks are created (and shuffled) the first time their mode is entered.
  function getDeck(name) {
    return decks[name] || (decks[name] = new Deck(name, DECK_SIZES[name]));
  }
  function startedDeck(name) {
    return decks[name] || (store.get('deck.' + name) ? getDeck(name) : null);
  }

  // ---------- shell ----------

  let keyHandler = null;
  document.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (document.querySelector('dialog[open]')) return; // the confirm dialog handles its own keys
    if (keyHandler) keyHandler(e);
  });

  // Asks before wiping a mode's progress. Resolves true only on an explicit "Start over".
  function confirmDialog({ title, body, confirmLabel }) {
    return new Promise(resolve => {
      const dlg = h('dialog', { class: 'confirm', 'aria-labelledby': 'confirm-title' },
        h('h2', { id: 'confirm-title' }, title),
        h('p', null, body),
        h('div', { class: 'confirm-actions' },
          h('button', { class: 'btn secondary', type: 'button', value: 'cancel', onclick: () => dlg.close('cancel') }, 'Cancel'),
          h('button', { class: 'btn danger', type: 'button', onclick: () => dlg.close('confirm') }, confirmLabel)));
      // Tapping the dimmed backdrop counts as Cancel.
      dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close('cancel'); });
      dlg.addEventListener('close', () => {
        dlg.remove();
        resolve(dlg.returnValue === 'confirm');
      });
      document.body.append(dlg);
      dlg.showModal();
      dlg.querySelector('.btn.secondary').focus(); // the safe choice has focus, so Enter cancels
    });
  }

  function topbar(modeName, counterText, onRestart, back = { label: '← Modes', hash: '' }) {
    return h('div', { class: 'topbar' },
      h('button', { class: 'home-btn', type: 'button', onclick: () => { location.hash = back.hash; } }, back.label),
      h('div', { class: 'mode-name' }, modeName),
      onRestart && h('button', { class: 'home-btn restart-btn', type: 'button', 'aria-label': `Start ${modeName} over`, onclick: onRestart },
        h('span', { 'aria-hidden': 'true' }, '↺'), h('span', { class: 'restart-label' }, ' Start over')),
      counterText && h('div', { class: 'counter', 'aria-label': 'Progress' }, counterText));
  }

  // The "what am I practicing" and "progress report" buttons under the quiz and matching top bars.
  function modeTools(mode, deck, note) {
    return h('div', { class: 'mode-tools' },
      h('button', { class: 'tool-btn focus-btn', type: 'button', onclick: () => { location.hash = mode + '/practice'; } },
        h('span', { class: 'tool-k' }, 'Practice: '), h('span', { class: 'tool-v' }, focusLabel(mode, deck.focus)),
        h('span', { class: 'tool-caret', 'aria-hidden': 'true' }, '▾')),
      h('button', { class: 'tool-btn', type: 'button', onclick: () => { location.hash = mode + '/report'; } }, 'Progress report'),
      note && h('span', { class: 'tool-note' }, note));
  }

  // Shared "start over" flow for every mode: confirm, reset that mode's deck only, re-render.
  async function restartMode(name, modeName, noun, extraReset) {
    const deck = getDeck(name);
    const ok = await confirmDialog({
      title: `Start ${modeName} over?`,
      body: `All ${deck.size} ${noun} will be reshuffled and you'll begin again from the first one. ` +
        `Your place in this mode will be lost. The other modes${name === 'flashcards' ? '' : ' and your progress report'} aren't affected.`,
      confirmLabel: 'Start over',
    });
    if (!ok) return;
    deck.reset();
    if (extraReset) extraReset();
    routes[name]();
    window.scrollTo(0, 0);
    toast(`${modeName} restarted — ${deck.size} ${noun} reshuffled.`);
  }

  function mount(...kids) {
    app.replaceChildren(h('section', { class: 'panel' }, h('div', { class: 'content' }, ...kids)));
  }

  // ---------- mode select ----------

  function renderHome() {
    keyHandler = null;
    document.title = 'CTFL Study';
    const progress = (name, noun, step = 1) => {
      const d = startedDeck(name);
      if (!d) return null;
      const label = step > 1
        ? `Pairs ${d.pos + 1}–${Math.min(d.pos + step, d.size)} / ${d.size}`
        : `${noun} ${d.pos + 1} / ${d.size}`;
      const focus = d.focus.type === 'all' ? '' : ` · ${focusLabel(name, d.focus)}`;
      return h('div', { class: 'progress' }, `In progress · ${label}${d.pass > 1 ? ` · pass ${d.pass}` : ''}${focus}`);
    };
    const card = (hash, title, desc, count, prog) =>
      h('button', { class: 'mode-card', type: 'button', onclick: () => { location.hash = hash; } },
        h('div', null, h('div', { class: 't' }, title), h('div', { class: 'd' }, desc), prog),
        h('div', { class: 'n' }, count));

    mount(h('div', { class: 'mode-select' },
      h('div', null,
        h('h1', { class: 'app-title' }, 'CTFL Study'),
        h('p', { class: 'app-sub' }, 'All questions sourced from the official ISTQB CTFL v4.0 sample exams & glossary')),
      card('quiz', 'Quiz Mode', 'Answer, get scored, see the official rationale on a miss',
        `${QUESTIONS.length} questions`, progress('quiz', 'Question')),
      card('flashcards', 'Flashcard Mode', 'Flip through official glossary terms at your own pace, no scoring',
        `${GLOSSARY.length} terms`, progress('flashcards', 'Card')),
      card('matching', 'Matching Mode', 'Grid matching — pair glossary terms with their definitions',
        `${GLOSSARY.length} terms`, progress('matching', 'Pairs', matchRoundSize()))));
  }

  // ---------- quiz ----------

  function examLabel(q) {
    const letter = q.exam.replace(/^exam/, '');
    return `Sample Exam ${letter} · Question ${q.number}`;
  }

  function quizScore(deck) {
    const s = store.get('quizScore');
    return s && s.pass === deck.pass ? s : { pass: deck.pass, answered: 0, correct: 0 };
  }

  function sameSet(a, b) {
    return a.length === b.length && a.every(x => b.includes(x));
  }

  function renderQuiz() {
    const deck = getDeck('quiz');
    const q = QUESTIONS[deck.current];
    const letters = Object.keys(q.options);
    const need = q.correct.length;
    const multi = need > 1;
    const st = deck.extra || { selection: [], submitted: false };
    const score = quizScore(deck);
    const isRight = st.submitted && sameSet(st.selection, q.correct);
    document.title = `Question ${deck.pos + 1} / ${deck.size} · CTFL Study`;

    const select = letter => {
      if (st.submitted) return;
      if (!multi) st.selection = [letter];
      else if (st.selection.includes(letter)) st.selection = st.selection.filter(l => l !== letter);
      else st.selection = [...st.selection, letter].slice(-need);
      deck.extra = st;
      deck.save();
      renderQuiz();
    };
    const submit = () => {
      if (st.submitted || st.selection.length !== need) return;
      st.submitted = true;
      deck.extra = st;
      deck.save();
      const right = sameSet(st.selection, q.correct);
      score.answered += 1;
      if (right) score.correct += 1;
      store.set('quizScore', score);
      record('quiz', q.id, right);
      renderQuiz();
    };
    const next = () => {
      if (!st.submitted) return;
      if (deck.advance()) deckDoneToast(deck, 'questions', 'done');
      renderQuiz();
      window.scrollTo(0, 0);
    };

    keyHandler = e => {
      const k = e.key.toLowerCase();
      if (e.target.closest && e.target.closest('button') && (k === 'enter' || k === ' ')) return;
      const idx = /^[1-9]$/.test(k) ? Number(k) - 1 : letters.indexOf(k);
      if (!st.submitted && idx >= 0 && idx < letters.length) { e.preventDefault(); select(letters[idx]); }
      else if (k === 'enter') { e.preventDefault(); st.submitted ? next() : submit(); }
    };

    const optionEl = letter => {
      const picked = st.selection.includes(letter);
      const correct = q.correct.includes(letter);
      let cls = 'option';
      let tag = null;
      if (!st.submitted) {
        if (picked) cls += ' sel';
      } else if (correct) {
        cls += ' correct';
        tag = picked ? (isRight ? 'Your answer' : 'Your answer · correct') : 'Correct answer';
      } else if (picked) {
        cls += ' wrong-pick';
        tag = 'Your answer';
      }
      const showRationale = st.submitted && !isRight;
      const rationale = showRationale && q.rationale_by_option && q.rationale_by_option[letter];
      return h('button', {
        class: cls,
        type: 'button',
        role: multi ? 'checkbox' : 'radio',
        'aria-checked': String(picked),
        disabled: st.submitted,
        onclick: () => select(letter),
      },
      h('span', { class: 'box ' + (multi ? 'check' : 'radio'), 'aria-hidden': 'true' }, st.submitted && (correct || picked) ? (correct ? '✓' : '✕') : ''),
      h('span', { class: 'letter' }, letter + ')'),
      h('span', { class: 'body' },
        h('span', null, q.options[letter]),
        tag && h('span', { class: 'tag' }, '· ' + tag),
        rationale && h('div', { class: 'rationale' }, rationale)));
    };

    const hint = st.submitted ? null : h('div', { class: 'select-hint' },
      multi
        ? `${q.select_instruction.toUpperCase().replace(/OPTION$/, 'OPTIONS')} — exactly ${need} required (${st.selection.length}/${need} selected)`
        : q.select_instruction);

    const meta = st.submitted && h('div', { class: 'meta-row' },
      h('span', { class: 'chip' }, `${q.syllabus_section} — ${q.syllabus_section_title}`),
      h('span', { class: 'chip' }, `Ch. ${q.syllabus_chapter} — ${q.syllabus_chapter_title}`),
      h('span', { class: 'chip' }, `${q.lo} · ${q.k_level}`));

    mount(
      topbar('Quiz Mode', `Question ${deck.pos + 1} / ${deck.size}`,
        () => restartMode('quiz', 'Quiz Mode', 'questions', () => store.set('quizScore', null))),
      modeTools('quiz', deck,
        score.answered ? `This pass: ${score.correct} / ${score.answered} correct` : (deck.pass > 1 ? `Pass ${deck.pass}` : null)),
      st.submitted && h('div', { class: 'verdict ' + (isRight ? 'right' : 'wrong') }, isRight ? '✓ Correct' : '✕ Incorrect'),
      h('div', { class: 'qmeta' }, examLabel(q)),
      h('div', { class: 'stem' }, richText(q.stem)),
      q.diagram && h('figure', { class: 'diagram' },
        h('img', { src: 'data/' + q.diagram, alt: `Diagram for ${examLabel(q)}, from the official sample exam` })),
      hint,
      st.submitted && !isRight && q.rationale_preamble && h('div', { class: 'preamble' },
        h('span', { class: 'lbl' }, 'Official explanation'), q.rationale_preamble),
      h('div', { role: multi ? 'group' : 'radiogroup', 'aria-label': 'Answer options' }, letters.map(optionEl)),
      st.submitted && !isRight && h('div', { class: 'verbatim-note' }, 'Rationale text is verbatim from the official ISTQB answer key.'),
      meta,
      h('div', { class: 'btn-row' },
        h('span', { class: 'kbd-hint' }, st.submitted ? 'Enter → next' : `Keys: ${letters.join(' ')} to choose · Enter to submit`),
        st.submitted
          ? h('button', { class: 'btn', type: 'button', onclick: next }, 'Next Question →')
          : h('button', { class: 'btn', type: 'button', disabled: st.selection.length !== need, onclick: submit }, 'Submit Answer')));
  }

  // ---------- flashcards ----------

  let flipped = false;
  let flashQuery = '';    // search box text; while it's set, results replace the deck
  let flashLookup = null; // glossary index opened from the search results

  // Search ignores case and punctuation, so "white box" finds "white-box testing".
  const norm = s => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const SEARCH_INDEX = GLOSSARY.map(g => ({
    term: norm(g.term),
    alt: norm([g.synonyms, g.abbreviation].join(' ')),
    def: norm(g.definition),
  }));

  // Term matches rank above synonym matches, which rank above definition matches.
  function searchGlossary(query) {
    const q = norm(query);
    if (!q) return [];
    const words = q.split(' ');
    const hits = [];
    SEARCH_INDEX.forEach((x, i) => {
      let rank;
      if (x.term === q) rank = 0;
      else if (x.term.startsWith(q)) rank = 1;
      else if ((' ' + x.term).includes(' ' + q)) rank = 2;
      else if (x.term.includes(q)) rank = 3;
      else if (x.alt.includes(q)) rank = 4;
      else if (words.every(w => x.term.includes(w))) rank = 5;
      else if (x.def.includes(q)) rank = 6;
      else if (words.every(w => x.term.includes(w) || x.alt.includes(w) || x.def.includes(w))) rank = 7;
      else return;
      hits.push({ i, rank });
    });
    return hits
      .sort((a, b) => a.rank - b.rank || GLOSSARY[a.i].term.localeCompare(GLOSSARY[b.i].term))
      .map(x => x.i);
  }

  // Marks the first place the query's words appear together, allowing any punctuation between them.
  function highlight(text, query) {
    const words = norm(query).split(' ').filter(Boolean);
    if (!words.length) return text;
    const m = new RegExp(words.join('[^a-z0-9]+'), 'i').exec(text);
    if (!m) return text;
    return [text.slice(0, m.index), h('mark', null, m[0]), text.slice(m.index + m[0].length)];
  }

  function metaChips(g) {
    return [
      ['Abbreviation', g.abbreviation],
      ['Synonyms', g.synonyms],
      ['See also', g.see_also],
      ['Reference', g.reference],
    ].filter(([, v]) => v).map(([k, v]) => h('span', { class: 'chip' }, `${k}: ${v}`));
  }

  const SEARCH_LIMIT = 100;

  function renderFlashcards() {
    const deck = getDeck('flashcards');
    const g = GLOSSARY[deck.current];
    document.title = `Card ${deck.pos + 1} / ${deck.size} · CTFL Study`;

    const flip = () => { flipped = !flipped; renderFlashcards(); };
    const next = () => {
      flipped = false;
      if (deck.advance()) deckDoneToast(deck, 'terms', 'done');
      renderFlashcards();
    };
    const prev = () => { if (deck.pos > 0) { flipped = false; deck.back(); renderFlashcards(); } };

    const search = h('input', {
      type: 'search',
      class: 'search-input',
      placeholder: 'Search terms & definitions',
      'aria-label': 'Search the glossary',
      autocomplete: 'off',
      autocapitalize: 'off',
      autocorrect: 'off',
      spellcheck: 'false',
      enterkeyhint: 'search',
    });
    search.value = flashQuery;
    const clearSearch = () => {
      flashQuery = '';
      flashLookup = null;
      search.value = '';
      fillBody();
    };
    // Typing only redraws the area under the search box, so the box keeps focus.
    search.addEventListener('input', () => {
      flashQuery = search.value;
      flashLookup = null;
      fillBody();
    });

    keyHandler = e => {
      if (e.target === search) {
        if (e.key === 'Escape') { e.preventDefault(); clearSearch(); search.blur(); }
        else if (e.key === 'Enter') search.blur(); // closes the iPhone keyboard so results are visible
        return;
      }
      if (e.key === '/') { e.preventDefault(); search.focus(); return; }
      if (flashLookup != null) {
        if (e.key === 'Escape') { e.preventDefault(); flashLookup = null; fillBody(); }
        return;
      }
      if (flashQuery.trim()) {
        if (e.key === 'Escape') { e.preventDefault(); clearSearch(); }
        return;
      }
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    };

    // Which side faces up first is a viewer preference; the back always shows the full card.
    const defFirst = store.get('flashFront') === 'definition';
    const setFront = side => {
      store.set('flashFront', side);
      flipped = false;
      renderFlashcards();
    };
    const segBtn = (side, label) => h('button', {
      type: 'button',
      class: 'seg-btn',
      'aria-pressed': String(defFirst === (side === 'definition')),
      onclick: () => setFront(side),
    }, label);

    const deckView = () => {
      const chips = metaChips(g);
      const face = flipped
        ? h('div', { class: 'card back', role: 'button', tabindex: '0', 'aria-label': 'Card back, activate to flip back', onclick: flip },
            h('div', { class: 'term' }, g.term),
            h('div', { class: 'def' }, g.definition),
            chips.length > 0 && h('div', { class: 'meta-row' }, chips),
            h('div', { class: 'flip-hint' }, 'tap card to flip back ↺'))
        : defFirst
          ? h('div', { class: 'card', role: 'button', tabindex: '0', 'aria-label': 'Card front, activate to show term', onclick: flip },
              h('div', { class: 'def prompt' }, g.definition),
              h('div', { class: 'flip-hint' }, 'tap card to see term'))
          : h('div', { class: 'card', role: 'button', tabindex: '0', 'aria-label': 'Card front, activate to show definition', onclick: flip },
              h('div', { class: 'term' }, g.term),
              h('div', { class: 'flip-hint' }, 'tap card to see definition'));
      return [
        h('div', { class: 'flash-area' }, face),
        h('div', { class: 'btn-row' },
          h('button', { class: 'btn secondary', type: 'button', disabled: deck.pos === 0, onclick: prev }, '← Prev'),
          h('span', { class: 'kbd-hint' }, 'Space flip · ← → move · / search'),
          h('button', { class: 'btn', type: 'button', onclick: next }, 'Next Card →')),
      ];
    };

    const resultsView = () => {
      const hits = searchGlossary(flashQuery);
      return [
        h('div', { class: 'search-count', role: 'status' },
          hits.length
            ? `${hits.length} matching term${hits.length === 1 ? '' : 's'}` +
              (hits.length > SEARCH_LIMIT ? ` · showing the first ${SEARCH_LIMIT}, keep typing to narrow it down` : '')
            : `No glossary term matches “${flashQuery.trim()}”`),
        h('ul', { class: 'results' }, hits.slice(0, SEARCH_LIMIT).map(i => h('li', null,
          h('button', {
            class: 'result',
            type: 'button',
            onclick: () => { flashLookup = i; fillBody(); window.scrollTo(0, 0); },
          },
          h('span', { class: 'result-term' }, highlight(GLOSSARY[i].term, flashQuery)),
          h('span', { class: 'result-def' }, highlight(GLOSSARY[i].definition, flashQuery)))))),
      ];
    };

    // A term opened from search shows its full card; it doesn't move your place in the deck.
    const lookupView = () => {
      const t = GLOSSARY[flashLookup];
      const chips = metaChips(t);
      return [
        h('div', { class: 'flash-area' },
          h('div', { class: 'card back static' },
            h('div', { class: 'term' }, t.term),
            h('div', { class: 'def' }, t.definition),
            chips.length > 0 && h('div', { class: 'meta-row' }, chips))),
        h('div', { class: 'btn-row' },
          h('button', { class: 'btn secondary', type: 'button', onclick: () => { flashLookup = null; fillBody(); } }, '← Results'),
          h('button', { class: 'btn', type: 'button', onclick: () => { clearSearch(); window.scrollTo(0, 0); } }, 'Back to deck')),
      ];
    };

    const body = h('div', { class: 'flash-body' });
    const fillBody = () => {
      body.replaceChildren(...(flashLookup != null ? lookupView() : flashQuery.trim() ? resultsView() : deckView()));
    };
    fillBody();

    mount(
      topbar('Flashcard Mode', `Card ${deck.pos + 1} / ${deck.size}`,
        () => restartMode('flashcards', 'Flashcard Mode', 'cards', () => { flipped = false; flashQuery = ''; flashLookup = null; })),
      h('div', { class: 'flash-tools' },
        h('div', { class: 'search-wrap' }, search),
        h('div', { class: 'seg-row' },
          h('span', { class: 'seg-label', id: 'front-label' }, 'Show first'),
          h('div', { class: 'seg', role: 'group', 'aria-labelledby': 'front-label' },
            segBtn('term', 'Term'),
            segBtn('definition', 'Definition')))),
      body);
  }

  // ---------- matching ----------

  let matchPick = null; // { kind: 'term' | 'def', i }
  let matchMiss = null; // [cardKey, cardKey] briefly shown red
  let matchBusy = false;

  // Phones get 3 pairs so a round fits on one screen; tablets and desktops get 4.
  function matchPairsPerRound() {
    return Math.min(window.innerWidth, window.innerHeight) >= 600 ? 4 : 3;
  }

  // Size of the round in progress (for the home screen), or of the next one to be dealt.
  function matchRoundSize() {
    const d = startedDeck('matching');
    return d && d.extra && Array.isArray(d.extra.terms) ? d.extra.terms.length : matchPairsPerRound();
  }

  // A round is a slice of the shuffled deck: terms in one column, definitions in the other,
  // each column in its own random order. The round's size is fixed once dealt.
  function matchRound(deck) {
    const saved = deck.extra;
    if (saved && Array.isArray(saved.terms) && Array.isArray(saved.defs) && saved.terms.length === saved.defs.length) {
      return { n: saved.terms.length, round: saved };
    }
    const per = matchPairsPerRound();
    const remaining = deck.size - deck.pos;
    const n = remaining - per < 2 ? remaining : per; // fold a would-be 1-pair last round into this one
    const items = deck.order.slice(deck.pos, deck.pos + n);
    deck.extra = {
      terms: shuffledIndices(n).map(k => items[k]),
      defs: shuffledIndices(n).map(k => items[k]),
      solved: [],
    };
    deck.save();
    return { n, round: deck.extra };
  }

  // Rows size to their content, so a long definition takes room from short ones. Terms always
  // keep their full size (a word too long for the card wraps onto the next line instead); only
  // when the round is taller than the screen do the definitions scale down together to fit.
  const MATCH_MIN_FONT_PX = 11;
  function fitMatchText() {
    const grid = app.querySelector('.match-grid');
    if (!grid) return;
    const defs = [...grid.querySelectorAll('.match-card.def .match-text')];
    defs.forEach(t => { t.style.fontSize = ''; });
    const base = defs.map(t => parseFloat(getComputedStyle(t).fontSize));
    let scale = 1;
    while (grid.scrollHeight > grid.clientHeight + 1 && base.some(b => b * scale > MATCH_MIN_FONT_PX)) {
      scale *= 0.94;
      defs.forEach((t, k) => { t.style.fontSize = Math.max(MATCH_MIN_FONT_PX, base[k] * scale) + 'px'; });
    }
  }
  window.addEventListener('resize', () => {
    if (location.hash === '#matching') fitMatchText();
  });

  function renderMatching() {
    const deck = getDeck('matching');
    const { n, round } = matchRound(deck);
    document.title = `Pairs ${deck.pos + 1}–${deck.pos + n} / ${deck.size} · CTFL Study`;
    keyHandler = null;

    const key = c => c.kind + ':' + c.i;
    const choose = card => {
      if (matchBusy || round.solved.includes(card.i)) return;
      if (!matchPick || matchPick.kind === card.kind) {
        matchPick = matchPick && key(matchPick) === key(card) ? null : card;
        renderMatching();
        return;
      }
      // A pair counts as right only if its first-picked card was never part of a wrong guess.
      round.missed = round.missed || [];
      if (matchPick.i === card.i) {
        round.solved.push(card.i);
        record('matching', GLOSSARY[card.i].term, !round.missed.includes(card.i));
        matchPick = null;
        deck.save();
        renderMatching();
      } else {
        if (!round.missed.includes(matchPick.i)) round.missed.push(matchPick.i);
        deck.save();
        matchMiss = [key(matchPick), key(card)];
        matchPick = null;
        matchBusy = true;
        renderMatching();
        setTimeout(() => {
          matchBusy = false;
          matchMiss = null;
          if (location.hash === '#matching') renderMatching();
        }, 600);
      }
    };

    const cardEl = c => {
      const solved = round.solved.includes(c.i);
      let cls = 'match-card ' + c.kind;
      if (solved) cls += ' solved';
      else if (matchMiss && matchMiss.includes(key(c))) cls += ' miss';
      else if (matchPick && key(matchPick) === key(c)) cls += ' picked';
      const g = GLOSSARY[c.i];
      return h('button', {
        class: cls,
        type: 'button',
        disabled: solved,
        'aria-pressed': String(!!matchPick && key(matchPick) === key(c)),
        onclick: () => choose(c),
      }, h('span', { class: 'match-text' }, c.kind === 'term' ? g.term : g.definition));
    };

    mount(
      topbar('Matching Mode', `Pairs ${deck.pos + 1}–${deck.pos + n} / ${deck.size}`,
        () => restartMode('matching', 'Matching Mode', 'terms', () => { matchPick = null; matchMiss = null; matchBusy = false; })),
      modeTools('matching', deck),
      h('div', { class: 'match-grid' },
        round.terms.map((t, r) => [cardEl({ kind: 'term', i: t }), cardEl({ kind: 'def', i: round.defs[r] })])),
      h('div', { class: 'match-foot' },
        `${round.solved.length} of ${n} matched · tap a term, then its definition`));
    fitMatchText();

    // Round finished (also covers returning to a finished round): pause briefly, then deal the next batch.
    if (round.solved.length === n && !matchBusy) {
      matchBusy = true;
      setTimeout(() => {
        matchBusy = false;
        if (location.hash !== '#matching' || deck.extra !== round) return;
        if (deck.advance(n)) deckDoneToast(deck, 'terms', 'matched');
        renderMatching();
      }, 650);
    }
  }

  // ---------- progress report & practice focus ----------

  const MODE_INFO = {
    quiz: { title: 'Quiz', noun: 'questions', one: 'question', tries: 'answers', try1: 'answer' },
    matching: { title: 'Matching', noun: 'terms', one: 'term', tries: 'matches', try1: 'match' },
  };
  const OTHER_TERMS = { id: 'other', title: 'Other glossary terms', terms: range(GLOSSARY.length).filter(i => !KEYWORD_TERMS.includes(i)) };

  function pctLevel(pct) {
    return pct == null ? 'none' : pct < 50 ? 'low' : pct < WEAK_PCT ? 'mid' : 'high';
  }
  function bar(pct) {
    return h('div', { class: 'bar', 'aria-hidden': 'true' },
      h('span', { class: 'bar-fill ' + pctLevel(pct), style: `width:${pct || 0}%` }));
  }
  function statDetail(mode, s) {
    const m = MODE_INFO[mode];
    if (!s.tries) return `${s.total} ${s.total === 1 ? m.one : m.noun} · not tried yet`;
    return `${s.right} of ${s.tries} ${s.tries === 1 ? m.try1 : m.tries} right · ` +
      `${s.seen} of ${s.total} ${s.total === 1 ? m.one : m.noun} tried` +
      (s.open ? ` · ${s.open} still wrong` : '');
  }
  function statRow(mode, label, s, action) {
    return h('div', { class: 'stat-row' },
      h('div', { class: 'stat-head' },
        h('span', { class: 'stat-label' }, label),
        h('span', { class: 'stat-pct ' + pctLevel(s.pct) }, s.pct == null ? '—' : s.pct + '%')),
      bar(s.pct),
      h('div', { class: 'stat-sub' }, statDetail(mode, s), action));
  }
  function tile(value, label, sub) {
    return h('div', { class: 'tile' },
      h('div', { class: 'tile-v' }, value),
      h('div', { class: 'tile-l' }, label),
      sub && h('div', { class: 'tile-s' }, sub));
  }
  function reportSection(title, intro, ...kids) {
    return h('section', { class: 'report-sec' },
      h('h2', null, title),
      intro && h('p', { class: 'report-intro' }, intro),
      ...kids);
  }

  // Switches a mode to a new practice focus (fresh shuffle) and opens it.
  function practiceNow(mode, focus) {
    const deck = getDeck(mode);
    deck.setFocus(focus);
    if (mode === 'quiz') store.set('quizScore', null);
    location.hash = mode;
    toast(`Practicing ${focusLabel(mode, focus)} · ${deck.size} ${deck.size === 1 ? MODE_INFO[mode].one : MODE_INFO[mode].noun}`);
  }
  const practiceBtn = (mode, focus, label = 'Practice') =>
    h('button', { class: 'link-btn', type: 'button', onclick: () => practiceNow(mode, focus) }, label + ' →');

  function renderReport(mode) {
    keyHandler = null;
    const m = MODE_INFO[mode];
    const quiz = mode === 'quiz';
    const stats = getStats(mode);
    const total = summarize(mode, range(quiz ? QUESTIONS.length : GLOSSARY.length), stats);
    document.title = `${m.title} progress · CTFL Study`;
    const head = topbar(`${m.title} Progress`, null, null, { label: `← ${m.title}`, hash: mode });

    if (!total.seen) {
      mount(head, h('div', { class: 'empty' },
        h('h2', null, 'No results yet'),
        h('p', null, quiz
          ? 'Answer some quiz questions and your report will show up here: your score, what you missed, and which syllabus sections need work.'
          : 'Match some terms and your report will show up here: your first-try accuracy, the terms you mixed up, and which syllabus chapters need work.'),
        h('button', { class: 'btn', type: 'button', onclick: () => { location.hash = mode; } }, `Go to ${m.title} →`)));
      return;
    }

    const tiles = h('div', { class: 'tiles' },
      tile(total.pct + '%', quiz ? 'Answered right' : 'Right on first try', `${total.right} of ${total.tries} ${m.tries}`),
      tile(total.seen, `${m.noun[0].toUpperCase() + m.noun.slice(1)} tried`, `of ${total.total}`),
      tile(total.missed, 'Missed at least once', total.seen ? `${Math.round((100 * total.missed) / total.seen)}% of those tried` : null),
      tile(total.open, 'Still to fix', 'wrong on your last try'));

    let weakSec, breakdown, extra = null;
    if (quiz) {
      const weak = weakSections();
      const weakCount = focusPool('quiz', { type: 'weak' }).length;
      weakSec = reportSection('Weak points',
        weak.length
          ? `Syllabus sections where you're under ${WEAK_PCT}%, worst first.`
          : `No weak spots yet: every section you've tried is at ${WEAK_PCT}% or better.`,
        weak.length > 0 && h('div', { class: 'stat-list' },
          weak.slice(0, 8).map(({ g, s }) => statRow('quiz', `${g.id} ${g.title}`, s,
            practiceBtn('quiz', { type: 'sections', ids: [g.id] })))),
        weak.length > 8 && h('p', { class: 'report-intro' }, `…and ${weak.length - 8} more in the chapter list below.`),
        weak.length > 0 && h('button', { class: 'btn', type: 'button', onclick: () => practiceNow('quiz', { type: 'weak' }) },
          `Practice all weak points (${weakCount} questions)`));

      breakdown = reportSection('By chapter', 'Tap a chapter to see each of its sections.',
        h('div', { class: 'stat-list' }, CHAPTERS.map(ch => {
          const s = summarize('quiz', ch.qs, stats);
          return h('details', { class: 'stat-group' },
            h('summary', null, statRow('quiz', `Ch. ${ch.id} · ${ch.title}`, s)),
            h('div', { class: 'stat-list sub' },
              ch.sections.map(sec => {
                const ss = summarize('quiz', sec.qs, stats);
                return statRow('quiz', `${sec.id} ${sec.title}`, ss, ss.tries ? null : practiceBtn('quiz', { type: 'sections', ids: [sec.id] }, 'Try'));
              }),
              practiceBtn('quiz', { type: 'sections', ids: ch.sections.map(sec => sec.id) }, `Practice all of chapter ${ch.id}`)));
        })));

      const levels = ['K1', 'K2', 'K3'].map(k => ({ k, qs: range(QUESTIONS.length).filter(i => QUESTIONS[i].k_level === k) }));
      const levelName = { K1: 'K1 · Remember', K2: 'K2 · Understand', K3: 'K3 · Apply' };
      extra = reportSection('By question level', 'K-levels from the syllabus: recalling facts, explaining ideas, and applying techniques.',
        h('div', { class: 'stat-list' }, levels.map(l => statRow('quiz', levelName[l.k], summarize('quiz', l.qs, stats)))));
    } else {
      const groups = [...KEYWORD_CHAPTERS, OTHER_TERMS];
      const label = g => g === OTHER_TERMS ? g.title : `Ch. ${g.id} · ${g.title}`;
      const canPractice = g => g !== OTHER_TERMS && g.terms.length >= MIN_POOL.matching;
      const weak = weakGroups('matching', groups, g => g.terms);
      weakSec = reportSection('Weak points',
        weak.length
          ? `Chapters whose syllabus keywords you match right under ${WEAK_PCT}% of the time, worst first.`
          : `No weak spots yet: everything you've tried is at ${WEAK_PCT}% or better.`,
        weak.length > 0 && h('div', { class: 'stat-list' },
          weak.map(({ g, s }) => statRow('matching', label(g), s,
            canPractice(g) && practiceBtn('matching', { type: 'chapters', ids: [g.id] }))))); 
      breakdown = reportSection('By chapter',
        'The syllabus lists key glossary terms for each chapter; terms it doesn\'t list are grouped as “other”.',
        h('div', { class: 'stat-list' }, groups.map(g => statRow('matching', label(g), summarize('matching', g.terms, stats),
          canPractice(g) && practiceBtn('matching', { type: 'chapters', ids: [g.id] })))));
    }

    // Items still wrong, most-missed first.
    const open = range(quiz ? QUESTIONS.length : GLOSSARY.length)
      .map(i => ({ i, s: stats[statId(mode, i)] }))
      .filter(x => x.s && !x.s.last)
      .sort((a, b) => (b.s.n - b.s.r) - (a.s.n - a.s.r) || a.i - b.i);
    const missedLine = s => `Missed ${s.n - s.r} of ${s.n} time${s.n === 1 ? '' : 's'}`;
    const missedSec = reportSection(quiz ? 'Questions to fix' : 'Terms to review',
      open.length
        ? `Wrong on your last try. Each one drops off this list once you get it right.`
        : `Nothing to fix: everything you've tried, you got right last time.`,
      open.length > 0 && h('button', { class: 'btn', type: 'button', onclick: () => practiceNow(mode, { type: 'missed' }),
        disabled: open.length < MIN_POOL[mode] },
      open.length < MIN_POOL[mode] ? 'Miss one more term to practice them' : `Practice these ${open.length} ${m.noun}`),
      open.length > 0 && h('ul', { class: 'miss-list' }, open.map(({ i, s }) => {
        if (quiz) {
          const q = QUESTIONS[i];
          return h('li', null,
            h('div', { class: 'miss-meta' }, `${q.syllabus_section} ${q.syllabus_section_title} · ${examLabel(q).replace('Question', 'Q')}`),
            h('div', { class: 'miss-text' }, q.stem),
            h('div', { class: 'miss-count' }, missedLine(s)));
        }
        const g = GLOSSARY[i];
        return h('li', null,
          h('div', { class: 'miss-term' }, g.term),
          h('div', { class: 'miss-text' }, g.definition),
          h('div', { class: 'miss-count' }, missedLine(s)));
      })));

    const clear = async () => {
      const ok = await confirmDialog({
        title: `Clear ${m.title.toLowerCase()} history?`,
        body: `This erases every ${m.title.toLowerCase()} result this report is built from, so it starts empty. ` +
          `Your place in the deck isn't affected.`,
        confirmLabel: 'Clear history',
      });
      if (!ok) return;
      store.set(STATS_KEY[mode], null);
      renderReport(mode);
      toast(`${m.title} history cleared.`);
    };

    mount(head, tiles, weakSec, missedSec, breakdown, extra,
      h('div', { class: 'report-foot' },
        h('button', { class: 'btn secondary', type: 'button', onclick: () => { location.hash = mode + '/practice'; } }, 'Choose what to practice'),
        h('button', { class: 'link-btn danger', type: 'button', onclick: clear }, 'Clear history')));
  }

  function renderPractice(mode) {
    keyHandler = null;
    const m = MODE_INFO[mode];
    const quiz = mode === 'quiz';
    const deck = getDeck(mode);
    const min = MIN_POOL[mode];
    const stats = getStats(mode);
    document.title = `${m.title} practice · CTFL Study`;
    const count = n => `${n} ${n === 1 ? m.one : m.noun}`;

    const pick = (focus, title, desc, emptyDesc) => {
      const n = focusPool(mode, focus).length;
      const current = deck.focus.type === focus.type;
      return h('button', {
        class: 'mode-card pick' + (current ? ' current' : ''),
        type: 'button',
        disabled: n < min,
        onclick: () => practiceNow(mode, focus),
      },
      h('div', null,
        h('div', { class: 't' }, title, current && h('span', { class: 'cur-tag' }, 'Current')),
        h('div', { class: 'd' }, n < min ? emptyDesc : desc)),
      h('div', { class: 'n' }, count(n)));
    };

    const weakN = quiz ? weakSections().length : 0;
    const quick = quiz
      ? [pick(ALL, 'All questions', 'Every question from sample exams A–D.'),
        pick({ type: 'missed' }, 'Missed questions', 'The ones you got wrong last time. Each drops off once you get it right.', 'Nothing missed yet.'),
        pick({ type: 'weak' }, 'Weak points', `Every question from the ${weakN} section${weakN === 1 ? '' : 's'} where you're under ${WEAK_PCT}%.`,
          `No weak sections yet. Every section you've tried is at ${WEAK_PCT}% or better.`)]
      : [pick(ALL, 'All terms', 'The whole ISTQB glossary.'),
        pick({ type: 'missed' }, 'Missed terms', 'Terms you mixed up last time. Each drops off once you match it right.', 'Fewer than 2 terms missed so far.'),
        pick({ type: 'keywords' }, 'Syllabus keywords', 'Only the key terms the CTFL syllabus lists for its chapters.')];

    // Chapter (and, for the quiz, section) checkboxes build a custom focus.
    const kind = quiz ? 'sections' : 'chapters';
    const selected = new Set(deck.focus.type === kind ? deck.focus.ids : []);
    const startBtn = h('button', { class: 'btn', type: 'button' });
    const chapterBoxes = [];
    const sectionBoxes = [];
    const pctNote = items => {
      const s = summarize(mode, items, stats);
      return h('span', { class: 'pick-meta' }, count(items.length),
        s.pct != null && [' · ', h('span', { class: 'stat-pct ' + pctLevel(s.pct) }, s.pct + '%')]);
    };
    const update = () => {
      if (quiz) {
        chapterBoxes.forEach(({ box, ch }) => {
          const n = ch.sections.filter(s => selected.has(s.id)).length;
          box.checked = n === ch.sections.length;
          box.indeterminate = n > 0 && n < ch.sections.length;
        });
        sectionBoxes.forEach(({ box, sec }) => { box.checked = selected.has(sec.id); });
      } else {
        chapterBoxes.forEach(({ box, ch }) => { box.checked = selected.has(ch.id); });
      }
      const n = focusPool(mode, { type: kind, ids: [...selected] }).length;
      startBtn.disabled = n < min;
      startBtn.textContent = n === 0
        ? (quiz ? 'Pick chapters or sections' : 'Pick one or more chapters')
        : n < min ? `Pick at least ${min} terms` : `Practice ${count(n)} →`;
    };
    startBtn.addEventListener('click', () => {
      const order = (quiz ? SECTIONS : KEYWORD_CHAPTERS).map(x => x.id).filter(id => selected.has(id));
      practiceNow(mode, { type: kind, ids: order });
    });
    const checkbox = onchange => h('input', { type: 'checkbox', onchange });

    const chapterList = quiz
      ? CHAPTERS.map(ch => {
        const box = checkbox(() => {
          ch.sections.forEach(s => (box.checked ? selected.add(s.id) : selected.delete(s.id)));
          update();
        });
        chapterBoxes.push({ box, ch });
        return h('details', { class: 'pick-group', open: ch.sections.some(s => selected.has(s.id)) && !ch.sections.every(s => selected.has(s.id)) },
          h('summary', null,
            h('label', { class: 'check', onclick: e => e.stopPropagation() }, box, h('span', null, `Ch. ${ch.id} · ${ch.title}`)),
            pctNote(ch.qs),
            h('span', { class: 'sec-toggle' }, 'Sections')),
          h('div', { class: 'pick-sections' }, ch.sections.map(sec => {
            const sbox = checkbox(() => { sbox.checked ? selected.add(sec.id) : selected.delete(sec.id); update(); });
            sectionBoxes.push({ box: sbox, sec });
            return h('div', { class: 'pick-row' },
              h('label', { class: 'check' }, sbox, h('span', null, `${sec.id} ${sec.title}`)),
              pctNote(sec.qs));
          })));
      })
      : KEYWORD_CHAPTERS.map(ch => {
        const box = checkbox(() => { box.checked ? selected.add(ch.id) : selected.delete(ch.id); update(); });
        chapterBoxes.push({ box, ch });
        return h('div', { class: 'pick-row' },
          h('label', { class: 'check' }, box, h('span', null, `Ch. ${ch.id} · ${ch.title}`)),
          pctNote(ch.terms));
      });
    update();

    mount(
      topbar('Choose Practice', null, null, { label: `← ${m.title}`, hash: mode }),
      h('p', { class: 'report-intro' },
        `Now practicing: `, h('strong', null, focusLabel(mode, deck.focus)), ` (${count(deck.size)}). Picking something new reshuffles the ${m.title.toLowerCase()} deck; your progress report is kept.`),
      reportSection('Quick picks', null, h('div', { class: 'pick-list' }, quick)),
      reportSection(quiz ? 'By chapter or section' : 'By chapter',
        quiz ? 'Tick whole chapters, or open one to pick single sections. Percentages are your score so far.'
          : 'Each chapter\'s syllabus keywords. Percentages are your first-try score so far.',
        h('div', { class: 'pick-box' }, chapterList)),
      h('div', { class: 'pick-foot' }, startBtn));
  }

  // ---------- router ----------

  const routes = {
    '': renderHome,
    quiz: renderQuiz,
    'quiz/report': () => renderReport('quiz'),
    'quiz/practice': () => renderPractice('quiz'),
    flashcards: renderFlashcards,
    matching: renderMatching,
    'matching/report': () => renderReport('matching'),
    'matching/practice': () => renderPractice('matching'),
  };
  function route() {
    const name = location.hash.replace(/^#/, '');
    flipped = false;
    flashQuery = '';
    flashLookup = null;
    matchPick = null;
    matchMiss = null;
    matchBusy = false;
    // Matching is locked to the screen height; every other mode scrolls normally.
    document.body.classList.toggle('fit-screen', name === 'matching');
    (routes[name] || renderHome)();
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);

  if (!QUESTIONS.length || !GLOSSARY.length) {
    mount(h('p', null, 'Could not load data/data.js — make sure the data folder sits next to index.html.'));
  } else {
    route();
  }

  // Offline/installable support; skipped when opened straight from disk (file://).
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(() => { /* app still works online */ });
    });
  }
})();
