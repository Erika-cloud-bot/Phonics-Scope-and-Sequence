/* Word bank, keyed by pattern. Each pattern has three tiers so the same
   weekly focus can be pitched at different readers — the differentiation
   approach from the scope and sequence: hold the pattern constant, vary
   the word complexity.

     easy      — mostly one syllable, straightforward
     core      — grade-level target
     challenge — multisyllabic, or the pattern in a less obvious position

   Canadian spellings throughout (colour, neighbour, favourite).
   `note` flags anything worth knowing before you hand the list to a child.

   These lists are a starting point, not gospel. Edit freely — you know your
   readers. Adding a word is just typing it inside the brackets, in quotes. */

window.WORDBANK = {

  // ---------- Term 1 ----------
  "short-vowels": { label: "Short vowels / closed syllables",
    easy:      ["cat", "bed", "pig", "hop", "sun", "map", "net", "fix", "dot", "cup"],
    core:      ["hand", "desk", "milk", "jump", "lamp", "nest", "pond", "sock", "bump", "gift"],
    challenge: ["napkin", "basket", "sudden", "picnic", "rabbit", "contest", "insect", "mitten"] },

  "ai": { label: "Vowel team ai",
    easy:      ["aim", "aid", "mail", "pail", "rain", "sail", "tail", "wait"],
    core:      ["brain", "chain", "paint", "plain", "snail", "trail", "train", "faint"],
    challenge: ["afraid", "explain", "complain", "remain", "contain", "raincoat", "mainland", "painter"] },

  "ay": { label: "Vowel team ay",
    easy:      ["day", "hay", "may", "pay", "ray", "say", "way", "lay"],
    core:      ["play", "stay", "tray", "clay", "gray", "spray", "today", "away"],
    challenge: ["birthday", "holiday", "yesterday", "hallway", "driveway", "crayon", "playground", "subway"],
    note: "ai and ay are the same sound in different jobs — ai inside a word, ay at the end. Worth sorting side by side." },

  "ee": { label: "Vowel team ee",
    easy:      ["bee", "see", "feet", "meet", "need", "seed", "feel", "keep"],
    core:      ["green", "sleep", "sweet", "three", "wheel", "cheek", "freeze", "street"],
    challenge: ["between", "seventeen", "agree", "degree", "indeed", "freedom", "engineer", "sweeping"] },

  "ea": { label: "Vowel team ea (long e)",
    easy:      ["eat", "sea", "tea", "bean", "heat", "leaf", "meat", "seat"],
    core:      ["beach", "clean", "cream", "dream", "speak", "teach", "team", "wheat"],
    challenge: ["repeat", "defeat", "increase", "meaning", "peaceful", "seasons", "beneath", "reason"],
    note: "These are all long-e ea. Short-e ea (head, bread, weather) is a separate sound — introduce it deliberately, not mixed in." },

  "oa": { label: "Vowel team oa",
    easy:      ["oak", "oat", "boat", "coat", "goat", "load", "road", "soap"],
    core:      ["cloak", "coach", "float", "groan", "roast", "toast", "throat", "coast"],
    challenge: ["railroad", "oatmeal", "overload", "floating", "approach", "charcoal", "cockroach", "boastful"] },

  "ow-long-o": { label: "ow saying long o",
    easy:      ["bow", "low", "mow", "row", "tow", "glow", "grow", "show"],
    core:      ["blow", "flow", "slow", "snow", "throw", "arrow", "elbow", "shallow"],
    challenge: ["rainbow", "window", "yellow", "pillow", "shadow", "borrow", "tomorrow", "marshmallow"] },

  "oo-long": { label: "oo as in moon",
    easy:      ["boot", "cool", "food", "moon", "pool", "room", "soon", "zoo"],
    core:      ["broom", "groom", "scoop", "smooth", "spoon", "tooth", "school", "bloom"],
    challenge: ["afternoon", "balloon", "cartoon", "raccoon", "bathroom", "classroom", "toothbrush", "shampoo"] },

  "oo-short": { label: "oo as in book",
    easy:      ["book", "cook", "foot", "good", "hook", "look", "took", "wood"],
    core:      ["brook", "crook", "shook", "stood", "wool", "hood", "soot", "nook"],
    challenge: ["cookbook", "notebook", "understood", "childhood", "footprint", "woodpecker", "neighbourhood"],
    note: "The two oo sounds are the whole point of this week — sort them into two columns rather than teaching them apart." },

  "ar": { label: "R-controlled ar",
    easy:      ["arm", "art", "bar", "car", "far", "jar", "star", "yard"],
    core:      ["card", "dark", "farm", "hard", "park", "part", "sharp", "smart"],
    challenge: ["garden", "market", "harvest", "partner", "apartment", "carpenter", "marbles", "argument"] },

  "or": { label: "R-controlled or",
    easy:      ["for", "corn", "fork", "horn", "born", "port", "sort", "torn"],
    core:      ["north", "short", "sport", "storm", "story", "thorn", "worn", "force"],
    challenge: ["morning", "forest", "important", "orchard", "popcorn", "corner", "performance", "shortcut"] },

  "er-r": { label: "R-controlled er",
    easy:      ["her", "herd", "fern", "term", "verb", "perch", "clerk", "germ"],
    core:      ["after", "over", "under", "water", "sister", "winter", "letter", "number"],
    challenge: ["yesterday", "remember", "together", "difference", "wonderful", "September", "temperature"] },

  "ir": { label: "R-controlled ir",
    easy:      ["bird", "dirt", "fir", "firm", "girl", "sir", "stir", "third"],
    core:      ["shirt", "skirt", "birth", "first", "thirst", "twirl", "swirl", "chirp"],
    challenge: ["circle", "thirteen", "thirsty", "birthday", "confirm", "squirrel", "circus", "thirtieth"] },

  "ur": { label: "R-controlled ur",
    easy:      ["burn", "curl", "fur", "hurt", "turn", "blur", "curb", "surf"],
    core:      ["burst", "church", "nurse", "purse", "curve", "purr", "turf", "spurt"],
    challenge: ["purple", "turtle", "Thursday", "furniture", "curtain", "surprise", "disturb", "furthest"],
    note: "er, ir, and ur all land on the same sound — which is exactly why spelling them is hard. Sorting by spelling, not sound, is the useful drill here." },

  "oi": { label: "Diphthong oi",
    easy:      ["oil", "boil", "coil", "coin", "join", "soil", "toil", "foil"],
    core:      ["point", "voice", "choice", "noise", "moist", "spoil", "joint", "broil"],
    challenge: ["avoid", "poison", "appoint", "rejoice", "moisture", "disappoint", "ointment", "boiling"] },

  "oy": { label: "Diphthong oy",
    easy:      ["boy", "joy", "toy", "soy", "coy", "ploy"],
    core:      ["enjoy", "annoy", "royal", "loyal", "decoy", "cowboy", "convoy", "employ"],
    challenge: ["oyster", "voyage", "destroy", "loyalty", "employer", "enjoyment", "corduroy"],
    note: "Same pairing logic as ai/ay — oi inside a word, oy at the end." },

  "ou": { label: "Diphthong ou",
    easy:      ["out", "our", "loud", "ouch", "pout", "shout", "count", "found"],
    core:      ["cloud", "ground", "house", "mouse", "mouth", "round", "sound", "south"],
    challenge: ["about", "around", "mountain", "thousand", "announce", "counter", "playground", "surround"] },

  "ow-loud": { label: "ow as in cow",
    easy:      ["cow", "how", "now", "owl", "plow", "wow", "down", "town"],
    core:      ["brown", "clown", "crowd", "crown", "frown", "growl", "howl", "gown"],
    challenge: ["flower", "power", "shower", "tower", "towel", "allow", "sunflower", "powerful"],
    note: "ow appears in Week 5 as long o and again here as the loud sound. Pulling both lists up together makes the double job visible." },

  "consonant-le": { label: "Consonant-le syllables",
    easy:      ["able", "apple", "table", "cable", "bubble", "candle", "handle", "little"],
    core:      ["middle", "puddle", "purple", "simple", "turtle", "gentle", "jungle", "marble"],
    challenge: ["needle", "saddle", "settle", "sparkle", "tremble", "wrinkle", "assemble", "vegetable"] },

  "soft-c": { label: "Soft c (before e, i, y)",
    easy:      ["ice", "ace", "cell", "cent", "city", "face", "mice", "nice"],
    core:      ["race", "rice", "place", "space", "price", "dance", "fence", "since"],
    challenge: ["circle", "circus", "pencil", "decide", "princess", "celebrate", "ceiling", "medicine"] },

  "soft-g": { label: "Soft g (before e, i, y)",
    easy:      ["age", "cage", "page", "rage", "gem", "gel", "huge", "edge"],
    core:      ["germ", "gentle", "giant", "magic", "danger", "change", "stage", "large"],
    challenge: ["ginger", "orange", "village", "message", "energy", "imagine", "gigantic", "engineer"],
    note: "The rule holds for c far more reliably than for g — get, girl, give, and gift all break it. Worth naming as exceptions rather than letting them ambush a reader." },

  // ---------- Term 2 ----------
  "spl": { label: "Cluster spl",
    easy:      ["split", "splat", "splash"],
    core:      ["splint", "splice", "splurge", "splendid"],
    challenge: ["splinter", "splatter", "splashing", "splendour"] },

  "spr": { label: "Cluster spr",
    easy:      ["spray", "spry", "sprig"],
    core:      ["spring", "sprint", "sprout", "spread", "sprain", "sprawl"],
    challenge: ["sprinkle", "sprinter", "springtime", "sprinkler"] },

  "str": { label: "Cluster str",
    easy:      ["strap", "straw", "strip", "stray"],
    core:      ["string", "stream", "street", "strong", "stripe", "strike", "stress", "strict"],
    challenge: ["strange", "stretch", "struggle", "strawberry", "strengthen", "structure"] },

  "scr": { label: "Cluster scr",
    easy:      ["scrap", "scrub", "screw"],
    core:      ["scrape", "scratch", "scream", "screen", "script", "scroll"],
    challenge: ["scribble", "scramble", "scrapbook", "screwdriver"] },

  "squ": { label: "Cluster squ",
    easy:      ["squid", "squad", "squat"],
    core:      ["square", "squash", "squeak", "squeal", "squeeze", "squint", "squirt"],
    challenge: ["squirrel", "squabble", "squeaky", "squirming"] },

  "thr": { label: "Cluster thr",
    easy:      ["three", "threw", "throw"],
    core:      ["throat", "thread", "thrill", "throne", "thrust", "thrive"],
    challenge: ["through", "thriller", "threaten", "throughout"] },

  "kn": { label: "Silent letters kn",
    easy:      ["knee", "knew", "knit", "knob", "knot", "know"],
    core:      ["knife", "knight", "knock", "kneel", "knack", "knead"],
    challenge: ["knuckle", "knapsack", "knowledge", "knitting"] },

  "wr": { label: "Silent letters wr",
    easy:      ["wrap", "wren", "wrist", "wrong", "wrote"],
    core:      ["wreck", "write", "wring", "wreath", "wrath"],
    challenge: ["wrinkle", "wrestle", "wriggle", "wrapping", "wristwatch"] },

  "gh": { label: "Silent letters gh",
    easy:      ["high", "sigh", "light", "night", "right", "might"],
    core:      ["bright", "fight", "sight", "tight", "thigh", "though", "dough"],
    challenge: ["caught", "taught", "daughter", "thoughtful", "brightness", "neighbour"],
    note: "gh is the least rule-governed of the three — these are closer to sight words than decodable ones. Reasonable to treat as a spelling pattern to memorise." },

  "mb": { label: "Silent letters mb",
    easy:      ["lamb", "limb", "comb", "numb", "bomb", "thumb"],
    core:      ["climb", "crumb", "tomb", "dumb", "jamb"],
    challenge: ["plumber", "crumble", "climbing", "thumbprint"] },

  "gn": { label: "Silent letters gn",
    easy:      ["gnat", "gnaw", "sign", "gnu"],
    core:      ["gnome", "design", "align", "resign", "reign"],
    challenge: ["campaign", "foreign", "assignment", "signature"] },

  "open-syllable": { label: "Open syllables",
    easy:      ["he", "she", "we", "be", "go", "no", "so", "hi"],
    core:      ["baby", "tiger", "paper", "music", "robot", "hotel", "pilot", "spider"],
    challenge: ["silent", "human", "moment", "begin", "protect", "student", "unit", "even"] },

  "syllable-division": { label: "Syllable division",
    easy:      ["rabbit", "napkin", "basket", "picnic", "muffin", "sudden"],
    core:      ["tennis", "contest", "invent", "problem", "magnet", "insect", "mitten", "until"],
    challenge: ["fantastic", "September", "understand", "wonderful", "celebrate", "information"] },

  "homophones-1": { label: "Homophones: their / there / they're",
    easy:      ["there", "their", "they're"],
    core:      ["here", "hear", "herd", "heard"],
    challenge: ["theirs", "there's", "they've", "weather", "whether"],
    note: "Homophones can't be decoded — only meaning tells them apart. Sentence context beats word lists here; use these as the words inside sentences you write." },

  "homophones-2": { label: "Homophones: to / too / two, your / you're",
    easy:      ["to", "too", "two", "your", "you're"],
    core:      ["its", "it's", "our", "hour", "buy", "by", "bye"],
    challenge: ["who's", "whose", "week", "weak", "right", "write", "knew", "new"] },

  "compound": { label: "Compound words",
    easy:      ["sunset", "bedroom", "cupcake", "football", "backpack", "raincoat", "snowman", "bathtub"],
    core:      ["sunshine", "rainbow", "notebook", "popcorn", "sidewalk", "birthday", "doorbell", "moonlight"],
    challenge: ["playground", "butterfly", "grandmother", "everything", "somewhere", "thunderstorm", "wheelbarrow"] },

  "plural-s": { label: "Plurals: add -s",
    easy:      ["cats", "dogs", "books", "cups", "hats", "pens", "beds", "cars"],
    core:      ["trees", "hands", "birds", "games", "rooms", "friends", "tables", "chairs"],
    challenge: ["mountains", "instruments", "computers", "adventures", "vegetables"] },

  "plural-es": { label: "Plurals: add -es",
    easy:      ["boxes", "buses", "foxes", "dishes", "wishes", "glasses"],
    core:      ["benches", "brushes", "watches", "beaches", "churches", "lunches", "branches", "dresses"],
    challenge: ["sandwiches", "tomatoes", "potatoes", "mattresses", "addresses"] },

  "plural-ies": { label: "Plurals: y to -ies",
    easy:      ["babies", "ladies", "ponies", "puppies", "bunnies", "pennies"],
    core:      ["cities", "parties", "stories", "berries", "candies", "hobbies", "cherries", "daisies"],
    challenge: ["families", "countries", "butterflies", "libraries", "groceries", "dictionaries"] },

  "plural-irregular": { label: "Plurals: irregular",
    easy:      ["feet", "teeth", "men", "mice", "geese", "sheep"],
    core:      ["children", "women", "people", "deer", "fish", "oxen"],
    challenge: ["knives", "leaves", "wolves", "loaves", "shelves", "thieves", "halves"] },

  // ---------- Term 3 ----------
  "ei": { label: "Vowel team ei",
    easy:      ["eight", "vein", "rein", "veil"],
    core:      ["weight", "sleigh", "neighbour", "ceiling", "receive"],
    challenge: ["either", "neither", "seize", "protein", "foreign", "leisure"] },

  "ey": { label: "Vowel team ey",
    easy:      ["key", "they", "grey", "prey", "obey"],
    core:      ["money", "honey", "valley", "monkey", "donkey", "turkey", "hockey"],
    challenge: ["chimney", "journey", "kidney", "attorney", "volleyball"] },

  "ui": { label: "Vowel team ui",
    easy:      ["fruit", "juice", "suit", "built", "build"],
    core:      ["bruise", "cruise", "guilt", "guide", "guitar"],
    challenge: ["biscuit", "recruit", "pursuit", "building", "nuisance"],
    note: "ui does three different jobs here — /oo/ in fruit, short i in build, and silent u in guitar. Sorting by sound is more honest than treating it as one pattern." },

  "schwa": { label: "Schwa in unstressed syllables",
    easy:      ["about", "above", "again", "alone", "sofa", "zebra", "comma"],
    core:      ["banana", "camera", "pencil", "ribbon", "seven", "wagon", "lemon", "dragon"],
    challenge: ["elephant", "chocolate", "family", "memory", "president", "celebrate", "separate"],
    note: "Schwa is why so much spelling feels arbitrary — the vowel gives no clue. Saying the word the 'spelling way' (choc-o-late) is the usual workaround." },

  "contractions": { label: "Contractions",
    easy:      ["I'm", "it's", "he's", "she's", "can't", "don't", "isn't", "we're"],
    core:      ["won't", "they're", "you're", "I'll", "we'll", "didn't", "hasn't", "aren't"],
    challenge: ["couldn't", "shouldn't", "wouldn't", "mustn't", "they've", "we've", "there's", "that's"] },

  "etymology": { label: "Word origins",
    easy:      ["photo", "auto", "video", "audio", "solo"],
    core:      ["telephone", "telescope", "autograph", "bicycle", "tricycle", "dinosaur", "October"],
    challenge: ["photograph", "microscope", "thermometer", "democracy", "geography", "astronaut"],
    note: "October is a good hook — it means eighth month, from when the Roman year started in March." },

  "irregular": { label: "Tricky / irregular spellings",
    easy:      ["said", "was", "were", "come", "some", "done", "one", "two"],
    core:      ["who", "what", "where", "been", "friend", "buy", "eye", "sure"],
    challenge: ["because", "people", "again", "could", "would", "should", "enough", "though"] },

  // ---------- Morphology ----------
  "un":        { label: "Prefix un-",        easy: ["undo", "unfit", "unpack", "untie"], core: ["unhappy", "unfair", "unkind", "unlock", "unwrap", "unable"], challenge: ["unusual", "unfriendly", "uncomfortable", "unbelievable"] },
  "re":        { label: "Prefix re-",        easy: ["redo", "refill", "reuse", "replay"], core: ["return", "rewrite", "remake", "repaint", "rebuild", "recycle"], challenge: ["remember", "rearrange", "reappear", "reconsider"] },
  "dis":       { label: "Prefix dis-",       easy: ["dislike", "disobey", "disarm"], core: ["disagree", "disappear", "dishonest", "discover", "disorder"], challenge: ["disconnect", "discomfort", "disappoint", "disadvantage"] },
  "pre":       { label: "Prefix pre-",       easy: ["preview", "prepay", "preheat", "prefix"], core: ["prepare", "prevent", "predict", "preschool", "precook"], challenge: ["prehistoric", "prediction", "preparation", "precaution"] },
  "mis":       { label: "Prefix mis-",       easy: ["misfit", "misprint", "mislead"], core: ["misplace", "misspell", "mistake", "misbehave", "misjudge"], challenge: ["misunderstand", "misfortune", "mismanage", "misinform"] },
  "non":       { label: "Prefix non-",       easy: ["nonstop", "nonsense"], core: ["nonfiction", "nonliving", "nonprofit", "nonverbal"], challenge: ["nonrenewable", "nonessential"] },
  "over":      { label: "Prefix over-",      easy: ["overflow", "overhead", "overnight"], core: ["overlook", "overcome", "overtime", "overboard", "overreact"], challenge: ["overwhelming", "overprotective", "overestimate"] },

  "ful":       { label: "Suffix -ful",       easy: ["helpful", "useful", "careful", "playful"], core: ["thankful", "hopeful", "colourful", "peaceful", "cheerful"], challenge: ["wonderful", "beautiful", "powerful", "successful"] },
  "less":      { label: "Suffix -less",      easy: ["helpless", "useless", "endless", "homeless"], core: ["careless", "painless", "fearless", "hopeless", "restless"], challenge: ["thoughtless", "effortless", "motionless", "regardless"] },
  "ly":        { label: "Suffix -ly",        easy: ["quickly", "slowly", "badly", "sadly"], core: ["kindly", "loudly", "safely", "quietly", "brightly"], challenge: ["carefully", "suddenly", "beautifully", "immediately"] },
  "ness":      { label: "Suffix -ness",      easy: ["kindness", "darkness", "sadness", "illness"], core: ["fitness", "weakness", "happiness", "brightness", "thickness"], challenge: ["willingness", "carelessness", "forgiveness"] },
  "tion":      { label: "Suffix -tion",      easy: ["action", "nation", "station", "motion"], core: ["section", "question", "direction", "vacation", "invention"], challenge: ["education", "information", "celebration", "imagination"] },
  "sion":      { label: "Suffix -sion",      easy: ["vision", "mission", "session"], core: ["decision", "division", "explosion", "confusion"], challenge: ["television", "discussion", "conclusion", "expression"] },
  "able":      { label: "Suffix -able",      easy: ["readable", "washable", "breakable"], core: ["enjoyable", "reasonable", "valuable", "adorable"], challenge: ["comfortable", "remarkable", "unbelievable", "responsible"] },
  "er-agent":  { label: "Suffix -er / -or (agent nouns)", easy: ["teacher", "farmer", "singer", "baker"], core: ["painter", "dancer", "writer", "worker", "builder", "actor", "doctor", "sailor"], challenge: ["reporter", "inventor", "visitor", "editor", "photographer"] },
  "ment":      { label: "Suffix -ment",      easy: ["payment", "movement", "shipment"], core: ["treatment", "agreement", "equipment", "argument", "statement"], challenge: ["excitement", "government", "entertainment", "measurement"] },
  "ous":       { label: "Suffix -ous / -ious", easy: ["famous", "nervous", "jealous"], core: ["dangerous", "generous", "enormous", "poisonous", "curious"], challenge: ["mysterious", "delicious", "adventurous", "tremendous"] },

  "port":      { label: "Root port (carry)",     easy: ["import", "export", "report"], core: ["support", "transport", "portable", "porter"], challenge: ["passport", "important", "transportation"] },
  "dict":      { label: "Root dict (say)",       easy: ["predict", "verdict"], core: ["dictate", "dictator", "contradict"], challenge: ["dictionary", "prediction", "contradiction"] },
  "spect":     { label: "Root spect (look)",     easy: ["inspect", "respect", "suspect"], core: ["spectacle", "spectator", "inspector"], challenge: ["perspective", "spectacular", "inspection"] },
  "struct":    { label: "Root struct (build)",   easy: ["construct", "instruct"], core: ["structure", "destruct", "instruction"], challenge: ["construction", "destructive", "reconstruct"] },
  "tract":     { label: "Root tract (pull)",     easy: ["attract", "subtract", "tractor"], core: ["extract", "contract", "distract", "traction"], challenge: ["attraction", "distraction", "subtraction"] },
  "ject":      { label: "Root ject (throw)",     easy: ["eject", "inject", "reject"], core: ["project", "object", "subject", "dejected"], challenge: ["injection", "projector", "rejection"] },
  "graph":     { label: "Root graph (write)",    easy: ["graph", "autograph"], core: ["photograph", "paragraph", "telegraph", "graphic"], challenge: ["biography", "geography", "photographer", "calligraphy"] },
  "scope":     { label: "Root scope (see)",      easy: ["scope"], core: ["telescope", "microscope", "periscope"], challenge: ["stethoscope", "kaleidoscope"] },
  "form":      { label: "Root form (shape)",     easy: ["form", "inform", "formal"], core: ["uniform", "transform", "perform", "reform"], challenge: ["formation", "information", "performance", "transformation"] },
  "vis":       { label: "Root vis (see)",        easy: ["visit", "vision", "visual"], core: ["visible", "revise", "advise"], challenge: ["television", "supervise", "invisible", "visibility"] }
};
