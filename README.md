# Grade 3 Phonics, Word Study & Grammar Scope and Sequence

A 36-week planning sequence for Grade 3 word study, morphology, and grammar, aligned to the **Ontario Language curriculum (2023)**.

Each week pairs a phonics/word-study focus with a morphology focus and a grammar focus, plus a suggested application activity — so decoding, spelling, and sentence-level conventions reinforce each other rather than being taught in isolation.

## What's here

| File | Contents |
|---|---|
| [`Grade3_Phonics_Grammar_Scope_and_Sequence.md`](Grade3_Phonics_Grammar_Scope_and_Sequence.md) | The full 36-week sequence, in three term tables |
| [`index.html`](index.html) | Word list generator — pick a week, get practice words |
| [`student.html`](student.html) | Student practice app — four activities per week |
| [`progress.html`](progress.html) | Progress view — what students did, and what to work on |
| [`data/sequence.js`](data/sequence.js) | The 36 weeks in a form the app can read |
| [`data/wordbank.js`](data/wordbank.js) | The words, grouped by pattern and difficulty tier |
| [`data/meanings.js`](data/meanings.js) | Picture (emoji) meanings for concrete words |

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

Open `student.html` — or click **Student practice app** from the word list generator. No install, no internet, no sign-in.

Built for a student to use **independently while you're teaching the whole class**, and to leave you a record of what happened.

A child types their name, picks a world, picks a week, then chooses an activity. The app only offers activities that week's pattern can actually support, so nothing broken is ever put in front of them:

| Activity | What the child does | Offered when |
|---|---|---|
| **Read It** | Word appears large; they read it aloud and mark it *read* or *tricky* | Any week with words |
| **Picture Match** | A picture appears; they choose the word that matches | 4+ words that week have pictures |
| **Sort It** | They choose which pattern group a word belongs to | The week has 2+ patterns |
| **Missing Piece** | The pattern is blanked (`rem__n`); they choose the letters | The pattern is a findable letter chunk |

Ten questions a round, then a score with stars. **Keep going →** rotates to a different activity on the same week, so an open-ended session doesn't become the same thing ten times over.

### Word levels

Each reader can be set to **easy**, **core**, **challenging**, or **a mix**, and only gets words at that level. Set it on `progress.html` under **Class list** — either when adding a reader, or from the dropdown on their card afterwards. It takes effect the next round they start.

**The child never sees their level.** A Grade 3 student who reads "Easy" on their screen knows exactly what it means, so the app just quietly serves the right words. The level does show on your progress page, in the class list and against each round.

A few weeks don't have ten words at every level — Week 32 (word origins) has only five easy ones. Rather than run a short round, the app fills up from the neighbouring tier, leading with the reader's own level. Across all 36 weeks that leaves 73 of 84 week-and-level combinations fully on level, and no round is ever short.

Readers who type their own name into the app start on **core**; you can change it afterwards.

### Meaning support for ESL readers

Phonics drills assume the child already knows what the word means. That's usually safe for a native speaker and often isn't for an ESL student — decoding *thorn* correctly is no use if *thorn* means nothing.

So concrete words carry a picture, shown alongside the word in every activity, and **Picture Match** drills meaning directly. Pictures are emoji, held in `data/meanings.js` — no image files, nothing to download, works offline.

Only concrete nouns have one. Abstract words (*joy*, *remain*, *because*) are deliberately left blank, because a vague picture is worse than none. To add one, put `"word": "emoji",` on its own line in that file.

### Hearing the words

Every word has a **Hear it** button, using the voice built into the browser. Three things make it as clear as it can be:

- It picks the **best English voice installed**, rather than accepting the default — preferring Google voices (clearest on a Chromebook) and Canadian English over American.
- **Pressing again says it more slowly.** Three presses go from normal, to slow, to very slow. A child who didn't catch it just presses again — there's no extra button to find.
- Words the voice says wrongly can be **respelled** for the voice only.

That last one matters for phonics specifically. Text-to-speech guesses at words that have two pronunciations, and it can guess the one that contradicts the lesson. `SAY_AS` near the top of `student.html` fixes those:

```js
var SAY_AS = {
  "bow": "boe",   // force the long-o bow, not /baʊ/
  "jamb": "jam",
  "gnu": "noo"
};
```

Only the sound changes — the child still sees the real word on screen. **If you hear a word come out wrong, note what it said** and it can be added as one line. This needs your ear; it can't be checked by reading the code.

Two words were also removed from the word bank for this reason: *bow* no longer appears in the loud-`ow` list (it stays in the long-`o` list, matching its 🎀 picture), because the same word can't be pronounced two ways, and *wind* left the short-vowel list because the voice may say /waɪnd/ when the lesson wants /wɪnd/.

### Worlds and Pip

Three worlds, one per term — the Forest, the Ocean, Deep Space — which change the colours and hold that term's weeks. Pip, the bird who greets the reader, is drawn in code rather than loaded as an image, so there's nothing to download and nothing borrowed from anyone else's app.

## Progress

Open `progress.html` to see what students did. For each reader: rounds completed, overall accuracy, and — most usefully — **Words to work on**, every word they marked tricky or got wrong, counted by how often. That's your small-group list, built while you were busy with the class.

### Where the data lives, and its one real limit

Progress is stored **in the browser on that Chromebook**. Nothing is sent anywhere, there's no account, and no server ever sees a student's name — which is what keeps this simple from a privacy standpoint.

The cost of that: **a student's history doesn't follow them between machines.** If they use a different Chromebook tomorrow, that device starts empty. To deal with it:

- **Download backup** saves a `.json` file from that device. It lands in Downloads. You never need to open it — if Windows asks which app to use, just close that prompt; the file is already saved.
- **Restore from backup** → **Choose backup files…** lets you pick **several at once**, so you can collect from every Chromebook in one go.

Merging is safe to repeat: rounds are matched on date, week, activity and score, so re-merging a file you've already done adds nothing. If a file is corrupt it's named in the message and the others still merge.

Realistically, collect backups occasionally onto one machine rather than daily.

## Seeing the whole class in one place (optional)

Without this, progress stays on each Chromebook and you'd have to visit each one. With it, rounds land in a Google Sheet in **your own Drive** as students go, and one page shows everybody.

This is optional. Skip it and everything else still works exactly as before.

### Why a Sheet rather than a proper service

The data stays in your Google Drive, under the Workspace agreement your board already has, instead of on a new company's servers. That's a much smaller conversation than adopting a third-party tool — but still worth checking with whoever handles software at your board before you roll it out.

### Setting it up — once, about ten minutes

**Make the Sheet and add the script**

1. Create a new Google Sheet in your Drive. Name it something like *Phonics Progress*.
2. **Extensions → Apps Script**. A code editor opens in a new tab.
3. Delete whatever's in the editor, then paste in everything from [`apps-script/Code.gs`](apps-script/Code.gs).
4. Click the save icon.

**Publish it so Chromebooks can reach it**

5. **Deploy → New deployment**.
6. Click the gear next to "Select type" and choose **Web app**.
7. Set **Execute as: Me**, and **Who has access: Anyone**.
8. Click **Deploy**. Google will ask you to authorise it — this is your own script asking for permission to write to your own Sheet. You may see an "unverified app" warning; **Advanced → Go to (your project)** gets past it.
9. Copy the **Web app URL**. It looks like `https://script.google.com/macros/s/AKfy…long…/exec`.

**Point the app at it**

10. Open `progress.html`, paste that address into the **Whole class** box, click **Save**.
11. In Google Classroom, post the student link with the address on the end:

```
https://erika-cloud-bot.github.io/Phonics-Scope-and-Sequence/student.html?sync=PASTE_YOUR_URL_HERE
```

A student clicking that link has their Chromebook set up automatically — there's nothing to configure per device. It's remembered afterwards, so later visits work even from a plain bookmark.

Then click **Load whole class** on the progress page whenever you want to see everyone.

### Things worth knowing

**"Who has access: Anyone" is required.** Students aren't signing in to anything, so the script has to accept unauthenticated writes. The address is long and random, so nobody finds it by guessing — but anyone who *has* it could write rows into your Sheet. That's why the address isn't in this public repository, and why it's passed on the link instead. It's a phonics sheet, so the realistic risk is low, but you should know it rather than find out.

**Nothing depends on wifi.** Rounds always save to the Chromebook first. If the send fails, the round waits in a queue and goes out with the next one, or next time the app opens. Bad wifi delays the Sheet; it never loses a round.

**If you change `Code.gs` later**, you must deploy again — **Deploy → Manage deployments → edit (pencil) → Version: New version → Deploy**. Editing the code alone changes nothing on the live address; this catches everybody out once.

**The Sheet may pick up the odd duplicate row.** Sending is deliberately fire-and-forget, so a round can occasionally be sent twice. The progress page ignores repeats when it reads them back, so your totals stay right.

**The class view is read-only.** Word levels and removing a reader still work on the *This device* view — the Sheet is a report of what happened, not something to edit.

### What it deliberately doesn't do

- **No speech recognition.** It cannot hear a child read. Read It asks them to self-mark, which is honest rather than faked.
- **Nothing leaves the device.** No cloud, no accounts, no analytics.
- **Nothing borrowed.** Pip and the worlds are original. Lalilo's mascot, artwork, and themes are theirs.

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
