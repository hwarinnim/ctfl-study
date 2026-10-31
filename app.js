(() => {
  'use strict';

  const QUESTIONS = window.CTFL_QUESTIONS || [];
  const GLOSSARY = window.CTFL_GLOSSARY || [];
  const MATCH_PAIRS_PER_ROUND = 4;

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
  // Prose lines are re-flowed into paragraphs; indented/columnar runs keep their layout in <pre>.
  // Only whitespace is touched, never the words themselves.
  const TABULAR = /^\s{3,}\S|\S\s{3,}\S/;
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
      if (pre.length) {
        const indent = Math.min(...pre.filter(l => l.trim()).map(l => l.match(/^ */)[0].length));
        frag.append(h('pre', null, pre.map(l => l.slice(indent)).join('\n')));
      }
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

  function shuffledIndices(n, avoidFirst) {
    const a = Array.from({ length: n }, (_, i) => i);
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    // Don't let a new pass open with the item that just closed the previous one.
    if (n > 1 && a[0] === avoidFirst) {
      const j = 1 + Math.floor(Math.random() * (n - 1));
      [a[0], a[j]] = [a[j], a[0]];
    }
    return a;
  }

  class Deck {
    constructor(key, size) {
      this.key = key;
      this.size = size;
      const s = store.get('deck.' + key);
      if (s && Array.isArray(s.order) && s.order.length === size && s.pos >= 0 && s.pos < size) {
        this.order = s.order;
        this.pos = s.pos;
        this.pass = s.pass || 1;
        this.extra = s.extra || null;
      } else {
        this.order = shuffledIndices(size);
        this.pos = 0;
        this.pass = 1;
        this.extra = null; // per-mode view state for the current item/round
        this.save();
      }
    }
    get current() { return this.order[this.pos]; }
    save() {
      store.set('deck.' + this.key, { order: this.order, pos: this.pos, pass: this.pass, extra: this.extra });
    }
    // Moves forward by `step`. On exhaustion, reshuffles into a new order and returns true.
    advance(step = 1) {
      this.extra = null;
      this.pos += step;
      let wrapped = false;
      if (this.pos >= this.size) {
        this.order = shuffledIndices(this.size, this.order[this.size - 1]);
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
    if (keyHandler) keyHandler(e);
  });

  function topbar(modeName, counterText) {
    return h('div', { class: 'topbar' },
      h('button', { class: 'home-btn', type: 'button', onclick: () => { location.hash = ''; } }, '← Modes'),
      h('div', { class: 'mode-name' }, modeName),
      h('div', { class: 'counter', 'aria-label': 'Progress' }, counterText));
  }

  function mount(...kids) {
    app.replaceChildren(h('section', { class: 'panel' }, ...kids));
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
      return h('div', { class: 'progress' }, `In progress · ${label}${d.pass > 1 ? ` · pass ${d.pass}` : ''}`);
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
        `${GLOSSARY.length} terms`, progress('matching', 'Pairs', MATCH_PAIRS_PER_ROUND))));
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
      score.answered += 1;
      if (sameSet(st.selection, q.correct)) score.correct += 1;
      store.set('quizScore', score);
      renderQuiz();
    };
    const next = () => {
      if (!st.submitted) return;
      if (deck.advance()) {
        toast(`Deck complete — all ${deck.size} questions done. Reshuffled; pass ${deck.pass} starts now.`);
      }
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
      topbar('Quiz Mode', `Question ${deck.pos + 1} / ${deck.size}`),
      h('div', { class: 'subline' },
        score.answered ? `This pass: ${score.correct} / ${score.answered} correct` : (deck.pass > 1 ? `Pass ${deck.pass}` : ' ')),
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

  function renderFlashcards() {
    const deck = getDeck('flashcards');
    const g = GLOSSARY[deck.current];
    document.title = `Card ${deck.pos + 1} / ${deck.size} · CTFL Study`;

    const flip = () => { flipped = !flipped; renderFlashcards(); };
    const next = () => {
      flipped = false;
      if (deck.advance()) toast(`Deck complete — all ${deck.size} terms done. Reshuffled; pass ${deck.pass} starts now.`);
      renderFlashcards();
    };
    const prev = () => { if (deck.pos > 0) { flipped = false; deck.back(); renderFlashcards(); } };

    keyHandler = e => {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    };

    const metaChips = [
      ['Abbreviation', g.abbreviation],
      ['Synonyms', g.synonyms],
      ['See also', g.see_also],
      ['Reference', g.reference],
    ].filter(([, v]) => v).map(([k, v]) => h('span', { class: 'chip' }, `${k}: ${v}`));

    // Which side faces up first is a viewer preference; the back always shows the full card.
    const defFirst = store.get('flashFront') === 'definition';
    const setFront = side => {
      store.set('flashFront', side);
      flipped = false;
      renderFlashcards();
    };

    const face = flipped
      ? h('div', { class: 'card back', role: 'button', tabindex: '0', 'aria-label': 'Card back, activate to flip back', onclick: flip },
          h('div', { class: 'term' }, g.term),
          h('div', { class: 'def' }, g.definition),
          metaChips.length > 0 && h('div', { class: 'meta-row' }, metaChips),
          h('div', { class: 'flip-hint' }, 'tap card to flip back ↺'))
      : defFirst
        ? h('div', { class: 'card', role: 'button', tabindex: '0', 'aria-label': 'Card front, activate to show term', onclick: flip },
            h('div', { class: 'def prompt' }, g.definition),
            h('div', { class: 'flip-hint' }, 'tap card to see term'))
        : h('div', { class: 'card', role: 'button', tabindex: '0', 'aria-label': 'Card front, activate to show definition', onclick: flip },
            h('div', { class: 'term' }, g.term),
            h('div', { class: 'flip-hint' }, 'tap card to see definition'));

    const segBtn = (side, label) => h('button', {
      type: 'button',
      class: 'seg-btn',
      'aria-pressed': String(defFirst === (side === 'definition')),
      onclick: () => setFront(side),
    }, label);

    mount(
      topbar('Flashcard Mode', `Card ${deck.pos + 1} / ${deck.size}`),
      h('div', { class: 'seg-row' },
        h('span', { class: 'seg-label', id: 'front-label' }, 'Show first'),
        h('div', { class: 'seg', role: 'group', 'aria-labelledby': 'front-label' },
          segBtn('term', 'Term'),
          segBtn('definition', 'Definition'))),
      h('div', { class: 'flash-area' }, face),
      h('div', { class: 'btn-row' },
        h('button', { class: 'btn secondary', type: 'button', disabled: deck.pos === 0, onclick: prev }, '← Prev'),
        h('span', { class: 'kbd-hint' }, 'Space flip · ← → move'),
        h('button', { class: 'btn', type: 'button', onclick: next }, 'Next Card →')));
  }

  // ---------- matching ----------

  let matchPick = null; // { kind: 'term' | 'def', i }
  let matchMiss = null; // [cardKey, cardKey] briefly shown red
  let matchBusy = false;

  function matchRound(deck) {
    const n = Math.min(MATCH_PAIRS_PER_ROUND, deck.size - deck.pos);
    const items = deck.order.slice(deck.pos, deck.pos + n);
    if (!deck.extra || !Array.isArray(deck.extra.layout) || deck.extra.layout.length !== n * 2) {
      const cards = items.flatMap(i => [{ kind: 'term', i }, { kind: 'def', i }]);
      deck.extra = { layout: shuffledIndices(cards.length).map(k => cards[k]), solved: [] };
      deck.save();
    }
    return { n, items, round: deck.extra };
  }

  function renderMatching() {
    const deck = getDeck('matching');
    const { n, round } = matchRound(deck);
    const startPos = deck.pos;
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
      if (matchPick.i === card.i) {
        round.solved.push(card.i);
        matchPick = null;
        deck.save();
        renderMatching();
      } else {
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
      }, c.kind === 'term' ? g.term : g.definition);
    };

    mount(
      topbar('Matching Mode', `Pairs ${deck.pos + 1}–${deck.pos + n} / ${deck.size}`),
      h('div', { class: 'match-grid' }, round.layout.map(cardEl)),
      h('div', { class: 'match-foot' },
        `${round.solved.length} of ${n} matched · tap a term, then its definition (or the other way round)`));

    // Round finished (also covers returning to a finished round): pause briefly, then deal the next batch.
    if (round.solved.length === n && !matchBusy) {
      matchBusy = true;
      setTimeout(() => {
        matchBusy = false;
        if (location.hash !== '#matching' || deck.pos !== startPos) return;
        if (deck.advance(n)) toast(`Deck complete — all ${deck.size} terms matched. Reshuffled; pass ${deck.pass} starts now.`);
        renderMatching();
      }, 650);
    }
  }

  // ---------- router ----------

  const routes = { '': renderHome, quiz: renderQuiz, flashcards: renderFlashcards, matching: renderMatching };
  function route() {
    const name = location.hash.replace(/^#/, '');
    flipped = false;
    matchPick = null;
    matchMiss = null;
    matchBusy = false;
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
