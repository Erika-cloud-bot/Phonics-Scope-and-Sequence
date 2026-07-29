/* The 36-week Grade 3 sequence, in a form the app can read.
   Mirrors Grade3_Phonics_Grammar_Scope_and_Sequence.md — if you change the
   sequence there, change it here too, or the app will drift from your plan.

   patterns[] and morphology[] are keys into WORDBANK (data/wordbank.js).
   A week with no patterns is a review/routines week and generates no words. */

window.SEQUENCE = [
  // ---- Term 1: September–December ----
  { week: 1,  term: 1, focus: "Routines & diagnostic spelling check",      patterns: [],                     morphology: [],              grammar: "Review: nouns, verbs, adjectives" },
  { week: 2,  term: 1, focus: "Closed syllables; short vowel patterns",    patterns: ["short-vowels"],       morphology: [],              grammar: "Common vs. proper nouns" },
  { week: 3,  term: 1, focus: "Vowel teams: ai, ay",                       patterns: ["ai", "ay"],           morphology: [],              grammar: "Collective nouns" },
  { week: 4,  term: 1, focus: "Vowel teams: ee, ea",                       patterns: ["ee", "ea"],           morphology: [],              grammar: "Abstract nouns" },
  { week: 5,  term: 1, focus: "Vowel teams: oa, ow (long o)",              patterns: ["oa", "ow-long-o"],    morphology: ["un"],          grammar: "Personal pronouns: subject" },
  { week: 6,  term: 1, focus: "Vowel team: oo (two sounds)",               patterns: ["oo-long", "oo-short"],morphology: ["re"],          grammar: "Personal pronouns: object" },
  { week: 7,  term: 1, focus: "R-controlled vowels: ar, or",               patterns: ["ar", "or"],           morphology: ["ful"],         grammar: "Forms of 'to be': am, is, are" },
  { week: 8,  term: 1, focus: "R-controlled vowels: er, ir, ur",           patterns: ["er-r", "ir", "ur"],   morphology: ["less"],        grammar: "Forms of 'to be': was, were" },
  { week: 9,  term: 1, focus: "Diphthongs: oi, oy",                        patterns: ["oi", "oy"],           morphology: ["ly"],          grammar: "Adjectives + comparative (-er)" },
  { week: 10, term: 1, focus: "Diphthongs: ou, ow (loud sound)",           patterns: ["ou", "ow-loud"],      morphology: ["ness"],        grammar: "Superlative adjectives (-est)" },
  { week: 11, term: 1, focus: "Consonant-le syllables",                    patterns: ["consonant-le"],       morphology: ["tion"],        grammar: "Irregular comparatives" },
  { week: 12, term: 1, focus: "Review & consolidation",                    patterns: [],                     morphology: [],              grammar: "Capitalization" },
  { week: 13, term: 1, focus: "Hard/soft c and g",                         patterns: ["soft-c", "soft-g"],   morphology: ["dis"],         grammar: "End punctuation" },
  { week: 14, term: 1, focus: "Term 1 review & assessment",                patterns: [],                     morphology: [],              grammar: "Term 1 review" },

  // ---- Term 2: January–March ----
  { week: 15, term: 2, focus: "Consonant clusters: spl, spr, str",         patterns: ["spl", "spr", "str"],  morphology: ["pre"],         grammar: "Conjunctions: and, but, or" },
  { week: 16, term: 2, focus: "Consonant clusters: scr, squ, thr",         patterns: ["scr", "squ", "thr"],  morphology: ["mis"],         grammar: "Conjunctions: because, so" },
  { week: 17, term: 2, focus: "Silent letters: kn, wr, gh",                patterns: ["kn", "wr", "gh"],     morphology: ["able"],        grammar: "Adverbs: which verb they modify" },
  { week: 18, term: 2, focus: "Silent letters: mb, gn",                    patterns: ["mb", "gn"],           morphology: ["er-agent"],    grammar: "Adverbs of manner" },
  { week: 19, term: 2, focus: "Multisyllabic words: open syllables",       patterns: ["open-syllable"],      morphology: ["ment"],        grammar: "Adverbs of time and place" },
  { week: 20, term: 2, focus: "Multisyllabic words: syllable division",    patterns: ["syllable-division"],  morphology: ["port", "dict"],grammar: "Quotation marks for dialogue" },
  { week: 21, term: 2, focus: "Homophones: their/there/they're",           patterns: ["homophones-1"],       morphology: ["spect","struct"],grammar: "Commas in a series" },
  { week: 22, term: 2, focus: "Homophones: to/too/two, your/you're",       patterns: ["homophones-2"],       morphology: ["tract","ject"],grammar: "Commas after introductory words" },
  { week: 23, term: 2, focus: "Compound words",                            patterns: ["compound"],           morphology: [],              grammar: "Apostrophes: contractions" },
  { week: 24, term: 2, focus: "Plural rules (-s, -es, -ies, irregular)",   patterns: ["plural-s","plural-es","plural-ies","plural-irregular"], morphology: [], grammar: "Apostrophes: possessives" },
  { week: 25, term: 2, focus: "Review & consolidation",                    patterns: [],                     morphology: [],              grammar: "Simple vs. compound sentences" },
  { week: 26, term: 2, focus: "Term 2 review & assessment",                patterns: [],                     morphology: [],              grammar: "Term 2 review" },

  // ---- Term 3: April–June ----
  { week: 27, term: 3, focus: "Less common vowel teams (ei, ey, ui)",      patterns: ["ei", "ey", "ui"],     morphology: ["non", "over"], grammar: "Complex sentences: adverbial clauses" },
  { week: 28, term: 3, focus: "Schwa in unstressed syllables",             patterns: ["schwa"],              morphology: ["ous"],         grammar: "Subordinating conjunctions" },
  { week: 29, term: 3, focus: "Soft c/g and tricky spellings review",      patterns: ["soft-c", "soft-g"],   morphology: ["graph","scope"],grammar: "Pronoun-antecedent agreement" },
  { week: 30, term: 3, focus: "Contractions and apostrophe review",        patterns: ["contractions"],       morphology: ["tion", "sion"],grammar: "Parts of speech integration" },
  { week: 31, term: 3, focus: "Multisyllabic word decoding strategies",    patterns: ["syllable-division"],  morphology: ["form", "vis"], grammar: "Punctuation integration" },
  { week: 32, term: 3, focus: "Etymology mini-study (word origins)",       patterns: ["etymology"],          morphology: [],              grammar: "Editing for clarity" },
  { week: 33, term: 3, focus: "Spelling strategies for irregular words",   patterns: ["irregular"],          morphology: [],              grammar: "Comparative/superlative review" },
  { week: 34, term: 3, focus: "Cumulative phonics review",                 patterns: [],                     morphology: [],              grammar: "Cumulative grammar review" },
  { week: 35, term: 3, focus: "Application week — independent word work",  patterns: [],                     morphology: [],              grammar: "Independent editing practice" },
  { week: 36, term: 3, focus: "Year-end review & assessment",              patterns: [],                     morphology: [],              grammar: "Year-end review" }
];

window.TERMS = {
  1: { name: "Term 1", months: "September–December", weeks: "1–14" },
  2: { name: "Term 2", months: "January–March",      weeks: "15–26" },
  3: { name: "Term 3", months: "April–June",         weeks: "27–36" }
};
