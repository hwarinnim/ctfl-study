# CTFL Study

A study app for the ISTQB CTFL v4.0 exam: quiz, flashcard, and matching modes built from the
official ISTQB sample exams A–D and the ISTQB glossary. Every question, answer, and rationale is
taken verbatim from the official answer keys.

**Use it:** https://hwarinnim.github.io/ctfl-study/

## Install on iPhone / iPad

1. Open the link above in **Safari**.
2. Tap **Share** → **Add to Home Screen**.
3. Launch it from the home screen. It runs full-screen and works offline after the first load.

Progress in each deck is saved on the device.

## Run locally

Open `index.html` directly, or serve the folder (`python3 -m http.server`) to also test offline
support.

## Data

- `data/questions.json` — 186 questions from sample exams A–D
- `data/glossary.json` — 652 glossary terms
- `data/data.js` — the same two files wrapped as script globals so the app works from `file://`.
  If you change either JSON file, regenerate it.
- `data/diagram_*.png` — diagrams referenced by 5 questions

After changing any app file, bump `CACHE` in `sw.js` so installed copies pick up the update.
