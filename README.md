# Grade 3 Phonics, Word Study & Grammar Scope and Sequence

A 36-week planning sequence for Grade 3 word study, morphology, and grammar, aligned to the **Ontario Language curriculum (2023)**.

Each week pairs a phonics/word-study focus with a morphology focus and a grammar focus, plus a suggested application activity — so decoding, spelling, and sentence-level conventions reinforce each other rather than being taught in isolation.

## What's here

| File | Contents |
|---|---|
| [`Grade3_Phonics_Grammar_Scope_and_Sequence.md`](Grade3_Phonics_Grammar_Scope_and_Sequence.md) | The full 36-week sequence, in three term tables |
| [`index.html`](index.html) | Word list generator — pick a week, get practice words |
| [`student.html`](student.html) | Student practice app — three activities per week |
| [`data/sequence.js`](data/sequence.js) | The 36 weeks in a form the app can read |
| [`data/wordbank.js`](data/wordbank.js) | The words, grouped by pattern and difficulty tier |

## Word list generator

Open `index.html` in any browser — double-click it, or drag it into a browser window. It needs no internet, no install, and no sign-in, so it works on a Chromebook that's offline.

Pick a week and it generates practice words for that week's pattern, in three tiers:

- **easy** — mostly one syllable, straightforward
- **core** — the grade-level target
- **challenge** — multisyllabic, or the pattern somewhere less obvious

That tiering comes from the differentiation note in the sequence itself: hold the weekly pattern constant, vary the word complexity. Untick a tier to hide it, cap how many words each tier shows, **Shuffle** for a different draw, then **Print** for a clean sheet with the controls stripped out, or **Copy** to paste into a doc.

Review and assessment weeks have no new pattern, so they generate no words by design.

### Changing the words

`data/wordbank.js` is meant to be edited — you know your readers better than any generated list does. Each pattern looks like this:

```js
"ai": { label: "Vowel team ai",
  easy:      ["aim", "aid", "mail", ...],
  core:      ["brain", "chain", "paint", ...],
  challenge: ["afraid", "explain", ...] },
```

To add a word, type it inside the brackets in quotes, with a comma after the previous one. Save, then refresh the browser. Some patterns also have a `note:` line, which shows as a highlighted teaching caution above the words.

## Student practice app

Open `student.html` — or click **Student practice app** from the word list generator. Same deal: no install, no internet, no sign-in.

A child picks a week, then one of three activities. The app only offers the ones that week's pattern can actually support, so nothing broken is ever presented:

| Activity | What the child does | Available when |
|---|---|---|
| **Read It** | Word appears large; they read it aloud and mark it *read* or *tricky* | Any week with words |
| **Sort It** | A word appears; they choose which pattern group it belongs to | The week has 2+ patterns |
| **Missing Piece** | The pattern is blanked out (`rem__n`); they choose the letters | The pattern is a findable letter chunk |

Ten questions a round, then a score out of ten with stars. **Any word marked tricky is listed on the results screen** — that list is the useful bit for you, and it's why Read It exists at all.

There's a **Hear it** button on every word, using the voice built into the browser. It's ordinary text-to-speech, not a reading teacher — fine for checking a word, not a substitute for you saying it.

### What it deliberately doesn't do

- **No speech recognition.** It cannot hear a child read. Read It asks them to self-mark, which is honest about that limit rather than faking it.
- **No names, no accounts, no saved data.** Nothing persists after the tab closes. That's why it needs no permission from anyone to use.
- **No mascot or themed worlds.** Those are Lalilo's, and they're not ours to copy.

## How the year is structured

| Term | Months | Weeks | Arc |
|---|---|---|---|
| Term 1 | September–December | 1–14 | Vowel teams, r-controlled vowels, diphthongs; parts of speech and end punctuation |
| Term 2 | January–March | 15–26 | Clusters, silent letters, multisyllabic decoding; conjunctions, adverbs, comma and apostrophe use |
| Term 3 | April–June | 27–36 | Schwa, etymology, irregular spellings; complex sentences and integrated mixed review |

## Curriculum alignment

The sequence supports Ontario Language 2023 **Strand B: Foundations of Language** — specifically:

- **B2** — Language Foundations for Reading and Writing
- **B3** — Language Conventions for Reading and Writing

## Using it

**Daily structure:** roughly 10–15 minutes of word study/phonics plus a 5–10 minute grammar mini-lesson, both reinforced during the writing block.

**Pacing:** treat it as a template, not a mandate. Some patterns need two weeks; others combine comfortably. Weeks 1–2 and any post-break weeks are deliberately lighter to leave room for routines and review.

**Differentiation:** hold the weekly focus constant across ability levels and vary the complexity of the words and sentences instead — for example, simpler vowel-team words against multisyllabic versions of the same pattern.

**Assessment touchpoints:** Weeks 12, 14, 25–26, and 34–36 are natural points for quick checks or report card evidence.

## A note on materials

This repository contains only the sequence document and the tools built around it. Commercial and third-party resources used alongside it — Reading A-Z leveled readers, K5 Learning workbooks, Canadian Daily Phonics, the CORE Phonics Survey — are copyrighted and are **not** included here. The `.gitignore` excludes PDF, Word, and archive files so they aren't committed by accident.
