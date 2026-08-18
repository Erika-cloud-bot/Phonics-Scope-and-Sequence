# Grade 3 Phonics, Word Study & Grammar Scope and Sequence

A 36-week planning sequence for Grade 3 word study, morphology, and grammar, aligned to the **Ontario Language curriculum (2023)**.

Each week pairs a phonics/word-study focus with a morphology focus and a grammar focus, plus a suggested application activity — so decoding, spelling, and sentence-level conventions reinforce each other rather than being taught in isolation.

## What's here

| File | Contents |
|---|---|
| [`Grade3_Phonics_Grammar_Scope_and_Sequence.md`](Grade3_Phonics_Grammar_Scope_and_Sequence.md) | The full 36-week sequence, in three term tables |
| [`index.html`](index.html) | Word list generator — pick a week, get practice words and grammar questions |
| [`student.html`](student.html) | Student practice app — word study and grammar activities, week by week |
| [`progress.html`](progress.html) | Progress view — what students did, and what to work on |
| [`data/sequence.js`](data/sequence.js) | The 36 weeks in a form the app can read |
| [`data/wordbank.js`](data/wordbank.js) | The words, grouped by pattern and difficulty tier |
| [`data/meanings.js`](data/meanings.js) | Picture (emoji) meanings for concrete words |
| [`data/grammar.js`](data/grammar.js) | The grammar questions, grouped by week |

## Word list generator

Open `index.html` in any browser — double-click it, or drag it into a browser window. It needs no internet, no install, and no sign-in, so it works on a Chromebook that's offline.

Pick a week and it generates practice words for that week's pattern, in three tiers:

- **easy** — mostly one syllable, straightforward
- **core** — the grade-level target
- **challenge** — multisyllabic, or the pattern somewhere less obvious

That tiering comes from the differentiation note in the sequence itself: hold the weekly pattern constant, vary the word complexity. Untick a tier to hide it, cap how many words each list shows, **Shuffle** for a different draw, then **Print** for a clean sheet with the controls stripped out, or **Copy** to paste into a doc.

Underneath the words is **Grammar practice** — that week's questions from `data/grammar.js`, with the answers marked in bold. It's an answer key rather than a blank worksheet, since you're the one printing it; **Copy** gives you plain text if you'd rather build a student version from it.

Review and assessment weeks have no new pattern, so they generate no words by design. They do have grammar: a review week names the weeks it revisits rather than reprinting the whole year underneath it.

### Changing the words

`data/wordbank.js` is meant to be edited — you know your readers better than any generated list does. Each pattern looks like this:

```js
"ai": { label: "Vowel team ai",
  easy:      ["aim", "aid", "mail", ...],
  core:      ["brain", "chain", "paint", ...],
  challenge: ["afraid", "explain", ...] },
```

To add a word, type it inside the brackets in quotes, with a comma after the previous one. Save, then refresh the browser. Some patterns also have a `note:` line, which shows as a highlighted teaching caution above the words.

Most tiers hold 15–20 words, which is more than any single lesson needs — deliberately. The generator shuffles and takes as many as you ask for, so a week revisited later draws a different set. A few patterns are shorter because English simply has few words in them: there are only so many `spl-` words, and `scope` has exactly one easy one. Those lists are as full as the language allows.

## Student practice app

Open `student.html` — or click **Student practice app** from the word list generator. No install, no internet, no sign-in.

Built for a student to use **independently while you're teaching the whole class**, and to leave you a record of what happened.

A child types their name, picks a world, picks a week, then chooses an activity. The week's activities are split into **Word study** and **Grammar**, which is how the sequence pairs them. The app only offers activities that week can actually support, so nothing broken is ever put in front of them.

### Word study

| Activity | What the child does | Offered when |
|---|---|---|
| **Read It** | Word appears large; they read it aloud and mark it *read* or *tricky* | Any week with words |
| **Hear It** | The word is spoken but never shown; they pick it from three spellings | The browser has a voice |
| **Picture Match** | A picture appears; they choose the word that matches | 4+ words that week have pictures |
| **Spell It** | The word is spoken and pictured; they build it from scrambled letter tiles | A voice or a picture can tell them the word |
| **Sort It** | They choose which pattern group a word belongs to | The week has 2+ patterns |
| **Missing Piece** | The pattern is blanked (`rem__n`); they choose the letters | The pattern is a findable letter chunk |
| **Odd One Out** | Four words, three sharing the week's pattern; they find the intruder | The week's pattern is a findable letter chunk |
| **Real or Not** | A real word, or an invented one built from it; they judge which | 4+ words can be safely altered |

### Grammar

The grammar column of the sequence, as questions a child can answer on their own. Four kinds, in `data/grammar.js`:

| Activity | What the child does | Example |
|---|---|---|
| **Find the Word** | Every word in a sentence is tappable; they tap the one being asked for | *Which word is the adverb?* — The turtle moved **slowly** across the sand. |
| **Which Word?** | A sentence with a gap, and three words to fill it | *My boots ▁ by the door.* — are / is / am |
| **Which Kind?** | A word or phrase, and two to four groups it might belong to | *When, or where?* — **yesterday** |
| **Fix It** | Three versions of a sentence; they pick the one written correctly | *Which sentence is punctuated correctly?* |

Not every kind suits every focus. Commas are a Fix It week; collective nouns are a Find the Word week. Across the year there are **83 week-and-activity combinations**: most weeks offer two, the review weeks offer all four, and two weeks (32 and 35) offer one.

**Under every answer, right or wrong, is the rule behind it** — *"Funny ends in y, so the y changes to i before -er"*, *"You're means you are"*. That's where the teaching is, which is why the pause before the next question counts the rule as well as the verdict.

**Every week now opens.** Weeks 1, 12, 14, 25, 26 and 34–36 have no new spelling pattern and used to be greyed out for the whole year. They all have a grammar focus, so they're now live — and on those weeks the empty Word study section is hidden rather than shown full of dead buttons.

Ten questions a round, then a score with stars. **Keep going →** rotates to a different activity on the same week, so an open-ended session doesn't become the same thing ten times over. It **stays in the strand they chose**: a child working on commas isn't dropped into vowel teams because the round happened to end.

### How long the answer stays on screen

Several activities explain themselves after an answer — *"It's splendid, the others are ur words"*, *"Not a word, the real one is brush"* — and that explanation is where the teaching happens. It's no use if it's gone before the child has read it.

The pause therefore scales with how much there is to read, and it's **set for Step 1 ESL readers**, who are the slowest readers in the room and so the ones who should decide the number. Roughly: short confirmations like *"Yes — cat!"* stay under a second, while a full sentence gets four to seven seconds.

A **Next →** button appears with every answer, so a reader who's finished early never has to sit and wait. Waiting does exactly the same thing — the button is a shortcut, not a step, so a child who ignores it loses nothing.

If the pace is still wrong for your class, two numbers near the top of the `<script>` in `student.html` control all of it:

```js
var READ_MS_PER_CHAR = 200;   // higher = longer pauses
var READ_FREE_CHARS  = 12;    // short messages this long aren't slowed at all
```

`200` is about 55 words a minute. Raising it to `280` puts the longest explanation at about ten seconds; dropping it to `70` is roughly a fluent Grade 3 reader.

**One thing to watch now that grammar is in.** A grammar answer shows a verdict *and* the rule under it — usually 90 to 120 characters together, which at 200ms each runs past the 12-second ceiling in `READ_MAX`. So a missed grammar question holds the screen for the full 12 seconds unless the child presses **Next →**. That's the pace you set for Step 1 readers doing exactly what you asked of it, but the word-study feedback never reached the ceiling and grammar reaches it most times. If it feels long in the room, drop `READ_MS_PER_CHAR` to about `120` — that brings a typical grammar explanation back to six or seven seconds and leaves the word-study pauses roughly where they were.

**Read It and Hear It are opposites, and both are needed.** Read It goes print → sound, but the app can't hear the child, so it's self-marked and can't be scored honestly. Hear It goes sound → print, which the app *can* mark. Between them you get both directions and one real score.

Across the 28 weeks that have words, 15 offer all eight activities, and the leanest — Week 33, irregular spellings — offers four. Before these were added it offered one.

### About Real or Not

This one invents its nonsense words rather than storing them: it swaps the consonants a word starts with and keeps the rest, so `brain` becomes `blain` and the week's pattern survives intact. Two-letter beginnings are tried first, because single letters are likelier to produce something that *sounds* real (`lamp` → `kamp` isn't an English spelling, but a child who says "that's camp" isn't wrong).

Before showing an invented word it's checked against the whole word bank, every word with a picture, and a list of common short words held in `COMMON` near the top of `student.html`. If nothing safe can be built, the real word is simply shown instead — a failed check costs variety, never correctness.

**No such list is a dictionary.** If a student is ever shown a real word marked "not a word", add it to `COMMON` and it will never appear again. The likeliest gap is a homophone — an invented spelling that happens to sound like a real word.

### Changing the grammar questions

`data/grammar.js` is keyed by week, because a grammar focus belongs to its week in a way a vowel team doesn't. **The answer is whatever sits in `[brackets]`** — that one convention covers three of the four activities:

```js
5: { name: "Subject pronouns",
  find: { q: "Which word is the subject pronoun?", tag: "the subject pronoun",
          items: ["[We] planted seeds in the garden.", ...] },
  pick: { q: "Which word finishes the sentence?", items: [
          { s: "[She] plays the drums.", o: ["Her", "Hers"],
            why: "She does the action, so it is a subject pronoun." } ] } },
```

`o` holds the wrong choices offered beside the answer. `why` is optional and is the rule shown underneath. `group` lists its groups and their words; `fix` gives `ok` and two `bad` versions.

**Write sentences where only the bracketed word can be the answer.** "Which word is the noun?" needs a sentence holding exactly one noun, or a child who answers correctly is marked wrong. That's the one rule worth being fussy about — three sentences were rewritten during testing for exactly this.

A malformed question is skipped rather than shown, so a mistyped bracket costs you that question and nothing else.

Review weeks carry `review: [3, 4, 5]` and borrow those weeks' questions, each keeping its own wording — which is what makes a mixed review genuinely mixed. Week 35 adds `only: ["fix"]` to keep independent editing practice to editing.

**Grammar questions are not tiered by reader level.** The word bank has easy/core/challenge tiers and the grammar bank has one level, pitched at Grade 3. A reader set to "easy words" still gets easy words in the word-study activities; their grammar questions are the same ones everyone else gets. Differentiating grammar means writing three versions of every sentence, which is a much bigger job than it sounds — the data shape would take it if you ever wanted to.

### Word levels

Each reader can be set to **easy**, **core**, **challenging**, or **a mix**, and only gets words at that level. Set it on `progress.html` under **Class list** — either when adding a reader, or from the dropdown on their card afterwards. It takes effect the next round they start.

**The child never sees their level.** A Grade 3 student who reads "Easy" on their screen knows exactly what it means, so the app just quietly serves the right words. The level does show on your progress page, in the class list and against each round.

Every week now holds a full ten-word round at every level — all 84 week-and-level combinations, on level, with words to spare. If you cut a tier back far enough that it can't fill a round, the app tops up from the neighbouring tier rather than running short, leading with the reader's own level.

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

Open `progress.html` to see what students did. For each reader: rounds completed, overall accuracy, and — most usefully — **To work on**, everything they marked tricky or got wrong, counted by how often. That's your small-group list, built while you were busy with the class.

A word-study miss records the word. A **grammar miss records the skill**, so the list reads *"Commas in a series ×4"* rather than quoting four sentences back at you — the skill is what you'd reteach anyway.

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

### Watching it during a lesson

Tick **Keep updating** next to that button and the page refreshes itself every 30 seconds — students' rounds appear as they finish them, without you touching anything. A green dot and the time of the last update show while it's live.

- Your scroll position is kept, so a refresh landing while you're reading someone's list doesn't throw you back to the top
- It pauses while the tab is in the background and catches up the moment you return
- If the network drops, the numbers already on screen **stay put** — it says it's still trying rather than emptying the page
- The setting is remembered, so the page comes back live next time you open it

### Things worth knowing

**"Who has access: Anyone" is required.** Students aren't signing in to anything, so the script has to accept unauthenticated writes. The address is long and random, so nobody finds it by guessing — but anyone who *has* it could write rows into your Sheet. That's why the address isn't in this public repository, and why it's passed on the link instead. It's a phonics sheet, so the realistic risk is low, but you should know it rather than find out.

**Nothing depends on wifi.** Rounds always save to the Chromebook first. If the send fails, the round waits in a queue and goes out with the next one, or next time the app opens. A round only leaves the queue once the Sheet has confirmed it holds it — so a send that is turned away, not just a send that times out, is retried rather than lost. Bad wifi delays the Sheet; it never loses a round.

After several unanswered attempts a round stops being re-sent, so a persistently broken connection can't fill the Sheet with copies. It stays in the queue and stays on the Chromebook; nothing is thrown away.

**If you change `Code.gs` later**, you must deploy again — **Deploy → Manage deployments → edit (pencil) → Version: New version → Deploy**. Editing the code alone changes nothing on the live address; this catches everybody out once.

**The Sheet may pick up the odd duplicate row.** A round can occasionally be sent twice. Every round carries an id made on the Chromebook, and a repeat carries the same one, so the progress page ignores it when reading back. Two genuine attempts at the same activity have different ids and are both counted — including when a child does the same activity twice in a day and gets the same mark.

**If your Sheet already has rounds in it**, the `Round id` column is added automatically the next time the script runs; you don't have to touch the spreadsheet. Rows collected before then have no id, and are told apart by the time they arrived instead.

**You can see whether results are getting through.** The sign-in screen on each Chromebook carries a small grey line at the bottom — *Results sent ✓*, or how many rounds are still waiting. It turns red if that Chromebook isn't set up to send at all, or has given up trying. Walking the room and glancing at the bottom of each screen tells you the sync is healthy without opening anything. On your own page, the line beside **Load whole class** now also says when the newest round arrived, so a class view full of last week's numbers can't pass for a live one.

**Capitals and stray spaces in names don't matter.** *Jacob*, *jacob* and *Jacob&nbsp;&nbsp;* are treated as one reader, on the Chromebook and on your page, and the spelling shown is whichever the child used most. What the app can't do is tell two children with the same name apart — if you have two Jacobs, put them on the class list as *Jacob M.* and *Jacob R.* and have them tap their name rather than type it.

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

## Licence

Copyright © 2026 Erika M. Kiss.

The code and the scope and sequence document in this repository are released under the [MIT Licence](LICENSE). You're free to use, adapt, and share them — in your own classroom, school, or board — provided the copyright notice and licence text travel with the copy.

This covers only what's in this repository. The commercial and third-party resources named above remain the copyright of their publishers and are **not** licensed here.
