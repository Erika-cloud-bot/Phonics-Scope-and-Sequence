/* Picture support for concrete words, as emoji — so an ESL student decoding
   "goat" also sees what a goat is. No image files, nothing downloaded, works
   offline, and renders on a Chromebook without any font installed.

   Only concrete nouns get a picture. Abstract words (joy, remain, because)
   are deliberately absent — a wrong or vague picture is worse than none, and
   the app simply skips words with no entry when it needs a picture.

   To add one: "word": "emoji", on its own line. Order doesn't matter. */

window.MEANINGS = {
  // people & animals
  "baby": "👶", "babies": "👶", "boy": "👦", "girl": "👧", "ladies": "👩",
  "children": "🧒", "sister": "👧", "teacher": "🧑‍🏫", "farmer": "🧑‍🌾",
  "singer": "🎤", "baker": "🧑‍🍳", "painter": "🧑‍🎨", "dancer": "💃",
  "doctor": "🧑‍⚕️", "nurse": "🧑‍⚕️", "sailor": "⛵", "knight": "🛡️",
  "princess": "👸", "judge": "🧑‍⚖️", "clown": "🤡", "cowboy": "🤠",
  "giant": "🦣", "gnome": "🧙", "daughter": "👧",

  "cat": "🐈", "cats": "🐈", "dog": "🐕", "dogs": "🐕", "pig": "🐷",
  "goat": "🐐", "bird": "🐦", "birds": "🐦", "fish": "🐟", "sheep": "🐑",
  "lamb": "🐑", "cow": "🐄", "owl": "🦉", "mouse": "🐭", "mice": "🐭",
  "rabbit": "🐰", "bunnies": "🐰", "puppies": "🐶", "snail": "🐌",
  "toad": "🐸", "shark": "🦈", "squid": "🦑", "squirrel": "🐿️",
  "turtle": "🐢", "tiger": "🐯", "spider": "🕷️", "monkey": "🐒",
  "turkey": "🦃", "geese": "🦢", "bee": "🐝", "gnat": "🦟",
  "insect": "🐛", "butterfly": "🦋", "butterflies": "🦋", "dragon": "🐉",
  "zebra": "🦓", "elephant": "🐘", "raccoon": "🦝", "oyster": "🦪",
  "dinosaur": "🦕", "foxes": "🦊", "wolves": "🐺", "deer": "🦌",

  // body
  "arm": "💪", "feet": "🦶", "foot": "🦶", "hand": "✋", "knee": "🦵",
  "teeth": "🦷", "tooth": "🦷", "thumb": "👍", "mouth": "👄", "eye": "👁️",
  "brain": "🧠", "wrist": "⌚", "elbow": "💪", "throat": "🗣️",

  // nature & weather
  "rain": "🌧️", "snow": "❄️", "cloud": "☁️", "storm": "⛈️", "sun": "☀️",
  "moon": "🌙", "star": "⭐", "tree": "🌳", "trees": "🌳", "oak": "🌳",
  "leaf": "🍃", "seed": "🌱", "sprout": "🌱", "flower": "🌸",
  "sunflower": "🌻", "forest": "🌲", "mountain": "⛰️", "sea": "🌊",
  "beach": "🏖️", "beaches": "🏖️", "soil": "🌱", "rainbow": "🌈",
  "shadow": "🌑", "sky": "🌌", "valley": "🏞️", "jungle": "🌴",
  "spring": "🌱", "winter": "❄️", "wood": "🪵", "thorn": "🌹",

  // food
  "eat": "🍽️", "food": "🍔", "meat": "🥩", "bean": "🫘", "corn": "🌽",
  "popcorn": "🍿", "toast": "🍞", "cheese": "🧀", "cream": "🍦",
  "peach": "🍑", "apple": "🍎", "orange": "🍊", "lemon": "🍋",
  "banana": "🍌", "berries": "🍓", "cherries": "🍒", "strawberry": "🍓",
  "fruit": "🍎", "juice": "🧃", "tea": "🍵", "milk": "🥛", "rice": "🍚",
  "cupcake": "🧁", "muffin": "🧁", "chocolate": "🍫", "honey": "🍯",
  "candies": "🍬", "hotdog": "🌭", "oatmeal": "🥣", "wheat": "🌾",
  "hay": "🌾", "tomatoes": "🍅", "potatoes": "🥔", "sandwiches": "🥪",
  "groceries": "🛒", "vegetables": "🥕",

  // home & objects
  "house": "🏠", "bedroom": "🛏️", "bathroom": "🛁", "bathtub": "🛁",
  "table": "🪑", "desk": "🪑", "chairs": "🪑", "sofa": "🛋️",
  "candle": "🕯️", "pillow": "🛏️", "window": "🪟", "door": "🚪",
  "doorbell": "🔔", "soap": "🧼", "broom": "🧹", "spoon": "🥄",
  "fork": "🍴", "dishes": "🍽️", "glasses": "👓", "cup": "☕",
  "jar": "🫙", "box": "📦", "boxes": "📦", "basket": "🧺", "towel": "🧺",
  "wool": "🧶", "thread": "🧵", "string": "🧵", "needle": "🪡",
  "comb": "💈", "knife": "🔪", "hook": "🪝", "screw": "🔩",
  "magnet": "🧲", "key": "🔑", "coin": "🪙", "money": "💰",
  "purse": "👛", "clock": "🕐", "watches": "⌚", "lamp": "💡",
  "light": "💡", "mitten": "🧤", "sock": "🧦", "shirt": "👕",
  "skirt": "👗", "coat": "🧥", "raincoat": "🧥", "suit": "🤵",
  "boot": "👢", "crown": "👑", "throne": "👑", "gem": "💎",
  "ribbon": "🎀", "bow": "🎀", "gift": "🎁", "balloon": "🎈",
  "toy": "🧸", "marble": "🔮", "net": "🥅", "nest": "🪹",
  "camera": "📷", "photo": "📷", "telephone": "☎️", "telescope": "🔭",
  "microscope": "🔬", "screen": "📺", "robot": "🤖", "guitar": "🎸",
  "music": "🎵", "paper": "📄", "page": "📄", "book": "📖",
  "books": "📚", "notebook": "📓", "pencil": "✏️", "crayon": "🖍️",
  "paint": "🎨", "mail": "📬", "letter": "✉️", "sign": "🪧",
  "map": "🗺️", "card": "🃏", "clay": "🧱", "chain": "⛓️",
  "oil": "🛢️", "straw": "🥤", "cage": "🔒", "backpack": "🎒",
  "wreath": "🎄", "sleigh": "🛷", "square": "⬜", "circle": "⭕",
  "bubble": "🫧", "puddle": "💧", "water": "💧", "splash": "💦",

  // places & travel
  "school": "🏫", "church": "⛪", "village": "🏘️", "town": "🏘️",
  "city": "🏙️", "cities": "🏙️", "hotel": "🏨", "building": "🏢",
  "farm": "🚜", "park": "🏞️", "garden": "🌷", "playground": "🛝",
  "zoo": "🦁", "circus": "🎪", "bridge": "🌉", "road": "🛣️",
  "street": "🛣️", "railroad": "🛤️", "sidewalk": "🚶", "subway": "🚇",
  "car": "🚗", "cars": "🚗", "train": "🚂", "boat": "⛵", "sail": "⛵",
  "bicycle": "🚲", "buses": "🚌", "wagon": "🛒", "pilot": "✈️",

  // sports & play
  "football": "🏈", "hockey": "🏒", "tennis": "🎾", "sport": "⚽",
  "swim": "🏊", "pool": "🏊", "shower": "🚿", "picnic": "🧺",
  "birthday": "🎂", "holiday": "🎉", "magic": "✨",

  // colours & numbers
  "green": "🟢", "yellow": "🟡", "purple": "🟣", "brown": "🟤",
  "grey": "⚪", "gray": "⚪", "three": "3️⃣", "seven": "7️⃣",
  "eight": "8️⃣", "thirteen": "1️⃣3️⃣", "count": "🔢", "number": "🔢",

  // actions & feelings with a clear picture
  "sleep": "😴", "dream": "💭", "jump": "🤸", "climb": "🧗",
  "scream": "😱", "growl": "😠", "frown": "😞", "joy": "😊",
  "voice": "🗣️", "noise": "🔊", "sound": "🔊", "burn": "🔥",
  "write": "✍️", "teach": "🧑‍🏫", "point": "👉", "strong": "💪",
  "ice": "🧊", "wheel": "☸️", "arrow": "🏹", "horn": "📯",
  "north": "🧭", "chimney": "🏠", "snowman": "⛄", "sunset": "🌅",
  "moonlight": "🌙", "dance": "💃", "face": "😀"
};
