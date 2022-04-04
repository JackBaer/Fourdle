var height = 7; //number of guesses
var width = 4; //length of word

//X and Y indecies for tile grid
var row = 0; //current guess
var column = 0; //current letter

//Keep track of game state
var gameOver = false;

//Array of four letter words to choose from, both for solutions and guesses
var wordList = ["aahs", "abbe", "abbr", "abed", "abet", "able", "ably", "abut", "acct", "aced", "aces", "ache", "achy", "acid", "aclu", "acme", "acne", "acre", "acts", "adam", "adds", "adit", "ados", "advt", "aeon", "aery", "afar", "afro", "agar", "aged", "ages", "agha", "agin", "agog", "ague", "ahem", "ahoy", "aide", "aids", "ails", "aims", "airs", "airy", "ajar", "akin", "alai", "alan", "alar", "alas", "alba", "albs", "alee", "ales", "alfa", "alga", "alii", "alit", "alls", "ally", "alma", "alms", "aloe", "alps", "also", "alto", "alum", "amah", "amen", "amex", "amid", "amis", "ammo", "amok", "amps", "amyl", "anal", "ands", "anew", "anis", "ankh", "anna", "anne", "anno", "anon", "ansi", "ante", "anti", "ants", "anus", "aped", "aper", "apes", "apex", "apse", "aqua", "arab", "arch", "arco", "arcs", "area", "ares", "aria", "arid", "arks", "arms", "army", "arse", "arts", "arty", "arum", "asap", "asea", "ashy", "asia", "asks", "asps", "assn", "asst", "atma", "atom", "atop", "attn", "atty", "auks", "auld", "aunt", "aura", "auto", "avdp", "aver", "aves", "avid", "avis", "avow", "away", "awed", "awes", "awls", "awns", "awol", "awry", "axed", "axel", "axes", "axil", "axis", "axle", "axon", "ayah", "ayes", "baal", "baas", "baba", "babe", "babu", "baby", "bach", "back", "bade", "bads", "bags", "baht", "bail", "bait", "bake", "bald", "bale", "bali", "balk", "ball", "balm", "band", "bane", "bang", "bank", "bans", "barb", "bard", "bare", "barf", "bark", "barn", "bars", "base", "bash", "bask", "bass", "bast", "bate", "bath", "bats", "baud", "bawd", "bawl", "bays", "bdrm", "bead", "beak", "beam", "bean", "bear", "beat", "beau", "beck", "beds", "beef", "been", "beep", "beer", "bees", "beet", "begs", "bell", "belt", "bema", "bend", "bene", "bens", "bent", "berg", "berm", "bess", "best", "beta", "bete", "bets", "bevy", "beys", "bias", "bibs", "bide", "bids", "bier", "biff", "bike", "bile", "bilk", "bill", "bind", "bins", "biol", "bios", "bird", "bite", "bits", "blab", "blah", "blat", "bldg", "bled", "blew", "blip", "blob", "bloc", "blot", "blow", "blue", "blur", "blvd", "boar", "boas", "boat", "bobs", "boca", "bock", "bode", "bods", "body", "boer", "boff", "bogs", "bogy", "boil", "bola", "bold", "bole", "boll", "bolo", "bolt", "bomb", "bona", "bond", "bone", "bong", "bono", "bons", "bony", "boob", "book", "boom", "boon", "boor", "boos", "boot", "bops", "bore", "born", "bort", "bosh", "boss", "both", "bout", "bowl", "bows", "boxy", "boyo", "boys", "bozo", "brad", "brae", "brag", "bran", "bras", "brat", "braw", "bray", "bred", "brew", "brie", "brig", "brim", "brin", "brio", "brit", "bros", "brow", "brut", "bubo", "bubs", "buck", "buds", "buff", "bugs", "bulb", "bulk", "bull", "bump", "bums", "bund", "bung", "bunk", "bunn", "buns", "bunt", "buoy", "burg", "burl", "burn", "burp", "burr", "burs", "bury", "bush", "buss", "bust", "busy", "buts", "butt", "buys", "buzz", "byes", "byre", "byte", "cabs", "cads", "cafe", "cage", "cagy", "cake", "caky", "calc", "calf", "calk", "call", "calm", "calx", "came", "camp", "cams", "cane", "cans", "cant", "cape", "caps", "card", "care", "carl", "carp", "cars", "cart", "casa", "case", "cash", "cask", "cast", "cats", "caul", "cave", "cavy", "caws", "cays", "ceca", "cede", "cees", "ceil", "cell", "celt", "cent", "cert", "cess", "chad", "cham", "chap", "char", "chat", "chaw", "chef", "chem", "chew", "chez", "chia", "chic", "chid", "chin", "chip", "chit", "chop", "chou", "chow", "chub", "chug", "chum", "ciao", "cine", "circ", "cite", "city", "clad", "clam", "clan", "clap", "claw", "clay", "clef", "clew", "clip", "clod", "clog", "clop", "clot", "cloy", "club", "clue", "cmdg", "coal", "coat", "coax", "cobs", "cock", "coco", "coda", "code", "cods", "coed", "cogs", "coho", "coif", "coil", "coin", "coir", "coke", "cola", "cold", "cole", "coll", "colt", "coma", "comb", "come", "comp", "cone", "conf", "conj", "conk", "conn", "cons", "cont", "cony", "cook", "cool", "coon", "coop", "coos", "coot", "cope", "cops", "copy", "cord", "core", "cork", "corm", "corn", "corp", "cosh", "cost", "cosy", "cote", "cots", "coup", "cove", "cowl", "cows", "cozy", "crab", "crag", "cram", "crap", "craw", "cree", "crew", "crib", "crop", "crow", "crud", "crux", "ctrl", "cuba", "cube", "cubs", "cuds", "cued", "cues", "cuff", "cuke", "cull", "cult", "cunt", "cups", "curb", "curd", "cure", "curl", "curs", "curt", "cusp", "cuss", "cute", "cuts", "cyan", "cyme", "cyst", "czar", "dabs", "dace", "dada", "dado", "dads", "daft", "dago", "dais", "dale", "dame", "damn", "damp", "dams", "dana", "dane", "dang", "dank", "dare", "dark", "darn", "dart", "dash", "data", "date", "daub", "dave", "dawn", "days", "daze", "dbms", "dead", "deaf", "deal", "dean", "dear", "debs", "debt", "deck", "deco", "deed", "deem", "deep", "deer", "dees", "deft", "defy", "deja", "dele", "deli", "dell", "demo", "dens", "dent", "deny", "dept", "derm", "desk", "deus", "deux", "deva", "dews", "dewy", "dhow", "diag", "dial", "diam", "dias", "dibs", "dice", "dick", "dict", "dido", "didy", "died", "diem", "dies", "diet", "digs", "dike", "dill", "dime", "dims", "dine", "ding", "dins", "dint", "dips", "dipt", "dire", "dirk", "dirt", "disc", "dish", "disk", "diva", "dive", "djin", "dock", "docs", "dodo", "doer", "does", "doff", "doge", "dogs", "dogy", "dojo", "dole", "doll", "dolt", "dome", "doms", "dona", "done", "dong", "dons", "doom", "door", "dope", "dopy", "dorm", "dorp", "dors", "dory", "dose", "doss", "dost", "dote", "doth", "dots", "doty", "dour", "dove", "down", "dows", "doxy", "doze", "dozy", "drab", "drag", "dram", "drat", "draw", "dray", "dreg", "drek", "drew", "drib", "drip", "drop", "drub", "drug", "drum", "drys", "duad", "dual", "dubs", "duce", "duck", "duct", "dude", "duds", "duel", "dues", "duet", "duff", "dugs", "duke", "dull", "duly", "dumb", "dump", "dune", "dung", "dunk", "duns", "duos", "dupe", "durn", "dusk", "dust", "duty", "dyad", "dyed", "dyer", "dyes", "dyke", "dyne", "each", "earl", "earn", "ears", "ease", "east", "easy", "eats", "eaux", "eave", "ebbs", "ebon", "eccl", "echo", "ecol", "econ", "ecru", "ecus", "edam", "edda", "eddy", "eden", "edge", "edgy", "edit", "eels", "eely", "eery", "effs", "efts", "egad", "eggs", "egis", "egos", "eire", "eked", "ekes", "elan", "elds", "elhi", "elks", "ells", "elms", "elmy", "else", "emir", "emit", "emmy", "emus", "encl", "ends", "engr", "enow", "envy", "eons", "epee", "epic", "eras", "erat", "ergo", "ergs", "erie", "erin", "erne", "erns", "eros", "errs", "erst", "eses", "espy", "esse", "etch", "etna", "etym", "even", "ever", "eves", "evil", "ewer", "ewes", "exam", "exec", "exes", "exit", "expo", "eyed", "eyer", "eyes", "face", "fact", "fade", "fads", "fags", "fail", "fain", "fair", "fait", "fake", "fall", "fame", "fang", "fans", "fare", "farm", "faro", "fart", "fast", "fate", "fats", "faun", "faut", "faux", "fawn", "fays", "faze", "fear", "feat", "feds", "feed", "feel", "fees", "feet", "fell", "felt", "fend", "fens", "fern", "fess", "feta", "fete", "feud", "fiat", "fibs", "fica", "fide", "fido", "fids", "fief", "fife", "figs", "fiji", "file", "fill", "film", "find", "fine", "fink", "finn", "fins", "fire", "firm", "firs", "fish", "fist", "fits", "five", "fixe", "fizz", "flab", "flag", "flak", "flan", "flap", "flat", "flaw", "flax", "flay", "flea", "fled", "flee", "flew", "flex", "flip", "flit", "floe", "flog", "flop", "flow", "flub", "flue", "flus", "flux", "foal", "foam", "fobs", "foci", "foes", "fogs", "fogy", "foil", "fold", "folk", "fond", "font", "food", "fool", "foot", "fops", "fora", "ford", "fore", "fork", "form", "fort", "foul", "four", "fowl", "foxy", "frag", "frat", "frau", "fray", "fred", "free", "fret", "frig", "friz", "frog", "from", "frow", "frug", "fuck", "fuds", "fuel", "fugs", "fuji", "full", "fume", "fumy", "fund", "funk", "furl", "furs", "fury", "fuse", "fuss", "fuze", "fuzz", "gabs", "gads", "gaff", "gaga", "gage", "gags", "gain", "gait", "gala", "gale", "gall", "gals", "game", "gams", "gamy", "gang", "gaol", "gape", "gaps", "gapy", "garb", "gars", "gary", "gash", "gasp", "gate", "gats", "gaud", "gave", "gawk", "gays", "gaze", "gear", "geed", "geek", "gees", "geld", "gels", "gelt", "gems", "gene", "gens", "gent", "geog", "geol", "geom", "germ", "gets", "geum", "ghat", "ghee", "gibe", "gibs", "gift", "gigs", "gila", "gild", "gill", "gilt", "gimp", "gins", "gips", "gird", "girl", "girt", "gist", "give", "glad", "glee", "glen", "glib", "glim", "glob", "glom", "glop", "glow", "glue", "glum", "glut", "gnat", "gnaw", "gnus", "goad", "goal", "goat", "gobs", "goby", "gods", "goer", "goes", "gogo", "gold", "golf", "gone", "gong", "good", "goof", "gook", "goon", "goop", "goos", "gore", "gory", "gosh", "goth", "gout", "govt", "gown", "goys", "grab", "grad", "gram", "gras", "gray", "grew", "grey", "grid", "grim", "grin", "grip", "grit", "grog", "grot", "grow", "grub", "guam", "guar", "guck", "guff", "gulf", "gull", "gulp", "gums", "gung", "gunk", "guns", "guru", "gush", "gust", "guts", "guys", "gyms", "gyps", "gyre", "gyro", "gyve", "hack", "hadj", "haft", "hags", "hahs", "hail", "hair", "haji", "hajj", "hake", "hale", "half", "hall", "halo", "halt", "hams", "hand", "hang", "hank", "haps", "hard", "hare", "hark", "harm", "harp", "hart", "hash", "hasp", "hast", "hate", "hath", "hats", "haul", "have", "hawk", "haws", "hays", "haze", "hazy", "head", "heal", "heap", "hear", "heat", "heck", "heed", "heel", "heft", "heil", "heir", "held", "hell", "helm", "help", "heme", "hemp", "hems", "hens", "herb", "herd", "here", "hero", "herr", "hers", "hest", "hewn", "hews", "hick", "hide", "hied", "hies", "high", "hike", "hill", "hilt", "hind", "hint", "hips", "hire", "hisn", "hiss", "hist", "hits", "hive", "hoar", "hoax", "hobo", "hobs", "hock", "hods", "hoed", "hoer", "hoes", "hogs", "hoke", "hold", "hole", "holt", "holy", "home", "homo", "homy", "hone", "honk", "hood", "hoof", "hook", "hoop", "hoot", "hope", "hopi", "hops", "hora", "horn", "hors", "hose", "hosp", "host", "hots", "hour", "hove", "howe", "howl", "hows", "hubs", "huck", "hued", "hues", "huff", "huge", "hugs", "hula", "hulk", "hull", "hump", "hums", "hung", "hunk", "huns", "hunt", "hurl", "hurt", "hush", "husk", "huts", "hyde", "hymn", "hype", "hypo", "iamb", "ibex", "ibid", "ibis", "icbm", "iced", "ices", "icky", "icon", "idea", "idee", "idem", "ideo", "ides", "idle", "idly", "idol", "idyl", "ieee", "iffy", "ikon", "ilia", "ilks", "ills", "illy", "imam", "imps", "inca", "inch", "info", "inks", "inky", "inly", "inns", "inst", "intl", "into", "intr", "ions", "iota", "iowa", "ipso", "iran", "iraq", "ired", "ires", "iris", "irks", "iron", "isis", "isle", "isms", "ital", "itch", "item", "iuds", "ixia", "izar", "jabs", "jack", "jade", "jags", "jail", "jake", "jamb", "jams", "jane", "jape", "jars", "jato", "java", "jaws", "jays", "jazz", "jean", "jeep", "jeer", "jeez", "jefe", "jell", "jerk", "jess", "jest", "jets", "jeux", "jews", "jibe", "jibs", "jiff", "jigs", "jill", "jilt", "jinn", "jins", "jinx", "jive", "jobs", "jock", "joes", "joey", "jogs", "john", "joie", "join", "joke", "jolt", "jose", "josh", "joss", "jota", "jots", "jour", "jowl", "joys", "juan", "judo", "judy", "jugs", "juju", "juke", "july", "jump", "june", "junk", "juno", "jupe", "jure", "jury", "just", "jute", "juts", "kaka", "kale", "kame", "kart", "kayo", "kays", "keel", "keen", "keep", "kegs", "kelp", "keno", "kens", "kent", "kepi", "kept", "kerb", "kerf", "kern", "keys", "khan", "kick", "kids", "kiev", "kike", "kill", "kiln", "kilo", "kilt", "kind", "kine", "king", "kink", "kins", "kips", "kirk", "kiss", "kist", "kite", "kith", "kits", "kiwi", "knee", "knew", "knit", "knob", "knot", "know", "knox", "koan", "kohl", "kola", "kong", "kook", "koto", "kris", "kudo", "kudu", "kung", "kwhr", "kyat", "labs", "lace", "lack", "lacy", "lade", "lads", "lady", "lags", "laid", "lain", "lair", "lait", "lake", "laky", "lama", "lamb", "lame", "lamp", "lams", "land", "lane", "lank", "laos", "lapp", "laps", "lard", "lark", "lash", "lass", "last", "late", "lath", "laud", "lava", "lave", "lawn", "laws", "lays", "laze", "lazy", "lead", "leaf", "leak", "leal", "lean", "leap", "lear", "leas", "lech", "lect", "leek", "leer", "lees", "left", "legs", "leis", "leks", "lend", "lens", "lent", "leon", "leos", "lese", "less", "lest", "lets", "leva", "levi", "levo", "levy", "lewd", "leys", "liar", "libs", "lice", "lick", "lido", "lids", "lied", "lief", "lien", "lier", "lies", "lieu", "life", "lift", "like", "lilt", "lily", "lima", "limb", "lime", "limn", "limo", "limp", "limy", "line", "ling", "link", "lino", "lins", "lint", "liny", "lion", "lips", "lira", "lire", "lisp", "list", "lite", "lith", "lits", "live", "load", "loaf", "loam", "loan", "lobe", "lobo", "lobs", "loch", "loci", "lock", "loco", "lode", "loft", "loge", "logo", "logs", "logy", "loin", "loll", "lone", "long", "look", "loom", "loon", "loop", "loos", "loot", "lope", "lops", "lord", "lore", "lorn", "lory", "lose", "loss", "lost", "loth", "lots", "loud", "loup", "lour", "lout", "love", "lows", "luau", "lube", "luck", "lucy", "luff", "luge", "lugs", "luke", "lull", "lulu", "lump", "luna", "lune", "lung", "lunk", "luny", "lure", "lurk", "lush", "lust", "lute", "luxe", "lyes", "lynx", "lyre", "mace", "mach", "mack", "macs", "made", "mads", "mage", "magi", "mags", "maid", "mail", "maim", "main", "make", "mala", "male", "mali", "mall", "malt", "mama", "mane", "mans", "manx", "many", "maps", "marc", "mare", "mark", "marl", "mars", "mart", "marx", "mary", "mash", "mask", "mass", "mast", "mate", "math", "mats", "matt", "maul", "maut", "maws", "maxi", "maya", "mayo", "mays", "maze", "mazy", "mead", "meal", "mean", "meas", "meat", "mech", "meed", "meek", "meet", "mein", "meld", "melt", "memo", "mend", "mens", "menu", "meow", "mere", "mesa", "mesh", "mess", "meta", "mete", "mewl", "mews", "mibs", "mica", "mice", "mick", "midi", "mids", "mien", "miff", "migs", "mike", "mild", "mile", "milk", "mill", "mils", "milt", "mime", "mind", "mine", "ming", "mini", "mink", "mins", "mint", "minx", "mire", "mirk", "mirv", "miry", "misc", "mise", "miso", "miss", "mist", "mite", "mitt", "mixt", "mktg", "moan", "moas", "moat", "mobs", "mock", "mode", "modi", "modo", "mods", "moil", "mold", "mole", "moll", "molt", "moly", "moms", "monk", "mono", "mons", "mony", "mood", "moon", "moor", "moos", "moot", "mope", "mops", "mopy", "more", "morn", "mort", "moss", "most", "mote", "moth", "mots", "moue", "move", "mown", "mows", "moxa", "msec", "much", "muck", "muds", "muff", "mugs", "mule", "mull", "mumm", "mump", "mums", "muon", "murk", "muse", "mush", "musk", "muss", "must", "mute", "mutt", "myna", "myth", "nabs", "nags", "naif", "nail", "name", "nape", "naps", "narc", "nard", "nark", "nary", "nasa", "natl", "nato", "naut", "nave", "navy", "nays", "nazi", "neap", "near", "neat", "nebs", "neck", "need", "neon", "nerd", "ness", "nest", "nets", "nevi", "news", "newt", "next", "nibs", "nice", "nick", "nigh", "nile", "nill", "nils", "nims", "nine", "nips", "nisi", "nits", "nixy", "noah", "nobs", "nock", "node", "nods", "noel", "noes", "nogs", "noir", "nolo", "nome", "noms", "none", "nook", "noon", "nope", "norm", "nose", "nosh", "nosy", "nota", "note", "nots", "noun", "nous", "nova", "novo", "nows", "nubs", "nude", "nuke", "null", "numb", "nuns", "nuts", "oafs", "oaks", "oars", "oath", "oats", "obey", "obis", "obit", "oboe", "obol", "odds", "odes", "odic", "odin", "odor", "odyl", "ofay", "offs", "ogee", "ogle", "ogre", "ohed", "ohio", "ohms", "oils", "oily", "oink", "okay", "okie", "okra", "olds", "oleo", "oles", "olio", "olla", "omen", "omit", "once", "ones", "only", "onto", "onus", "onyx", "oohs", "oops", "ooze", "oozy", "opal", "opec", "open", "opes", "opts", "opus", "oral", "orbs", "orca", "orch", "orcs", "ordo", "ores", "orgy", "orig", "orth", "orts", "oryx", "oslo", "otic", "otto", "ouch", "ours", "oust", "outs", "ouzo", "oval", "oven", "over", "ovid", "ovum", "owed", "owes", "owls", "owns", "oxen", "oxes", "oyer", "oyes", "oyez", "pace", "pack", "pacs", "pact", "pads", "page", "paid", "pail", "pain", "pair", "pale", "pall", "palm", "pals", "pane", "pang", "pans", "pant", "papa", "paps", "para", "pard", "pare", "park", "pars", "part", "paso", "pass", "past", "pate", "path", "pats", "paul", "pave", "pawl", "pawn", "paws", "pays", "peak", "peal", "pean", "pear", "peas", "peat", "peck", "peds", "peed", "peek", "peel", "peen", "peep", "peer", "pees", "pegs", "peke", "pelf", "pelt", "pend", "pens", "pent", "peon", "peps", "pere", "perk", "perm", "pert", "peru", "peso", "pest", "pets", "pews", "phew", "phiz", "phys", "pica", "pick", "pics", "pied", "pier", "pies", "pigs", "pike", "pile", "pill", "pima", "pimp", "pine", "ping", "pink", "pins", "pint", "piny", "pion", "pipe", "pips", "pipy", "pisa", "pish", "piss", "pita", "pith", "pits", "pity", "pius", "pixy", "pkwy", "plan", "plat", "play", "plea", "pled", "plod", "plop", "plot", "plow", "ploy", "plug", "plum", "plus", "pock", "poco", "pods", "poem", "poet", "poke", "poky", "pole", "polk", "poll", "polo", "pols", "poly", "pome", "pomp", "pond", "pone", "pong", "pons", "pony", "pooh", "pool", "poop", "poor", "pope", "pops", "pore", "pork", "porn", "port", "pose", "posh", "post", "posy", "pots", "pouf", "pour", "pout", "pows", "pram", "prat", "pray", "prep", "pres", "prey", "prig", "prim", "prix", "proc", "prod", "prof", "prom", "pron", "prop", "pros", "prow", "psst", "pubs", "puce", "puck", "puds", "puff", "pugs", "puke", "pule", "pull", "pulp", "puma", "pump", "punk", "puns", "punt", "puny", "pupa", "pups", "pure", "purl", "purr", "push", "puss", "puts", "putt", "pyre", "qaid", "qoph", "quad", "quae", "quag", "quai", "qual", "quam", "quat", "quay", "quem", "ques", "quey", "quia", "quid", "quip", "quit", "quiz", "quod", "quos", "race", "rack", "racy", "rads", "raft", "raga", "rage", "rags", "raid", "rail", "rain", "raja", "rake", "ramp", "rams", "rand", "rang", "rani", "rank", "rant", "rape", "raps", "rapt", "rara", "rare", "rase", "rash", "rasp", "rata", "rate", "rats", "rave", "raws", "rays", "raze", "razz", "rcpt", "read", "real", "ream", "reap", "rear", "rebs", "recd", "recs", "redo", "reds", "reed", "reef", "reek", "reel", "refs", "reft", "rein", "rely", "rems", "rend", "reno", "rent", "reps", "resp", "rest", "retd", "revs", "rhea", "rial", "ribs", "rice", "rich", "rick", "ride", "rids", "riel", "rife", "riff", "rift", "rigs", "rile", "rill", "rime", "rims", "rimy", "rind", "ring", "rink", "riot", "ripe", "rips", "rise", "risk", "rite", "ritz", "rive", "road", "roam", "roan", "roar", "robe", "robs", "rock", "rocs", "rode", "rods", "roes", "roil", "role", "roll", "rome", "romp", "roms", "rood", "roof", "rook", "room", "root", "rope", "ropy", "rosa", "rose", "rosy", "rote", "roto", "rots", "roue", "rout", "roux", "rove", "rows", "rube", "rubs", "ruby", "ruck", "rude", "rued", "ruer", "rues", "ruff", "rugs", "ruin", "rule", "rump", "rums", "rune", "rung", "runs", "runt", "ruse", "rush", "rusk", "rust", "ruth", "ruts", "ryas", "ryes", "sack", "sacs", "safe", "saga", "sage", "sago", "sags", "sagy", "said", "sail", "sake", "sale", "salt", "same", "sand", "sane", "sang", "sank", "sans", "saps", "sari", "sash", "sass", "sate", "save", "sawn", "saws", "says", "scab", "scad", "scag", "scam", "scan", "scar", "scat", "scil", "scop", "scot", "scow", "scud", "scum", "scut", "seal", "seam", "sear", "seas", "seat", "secs", "sect", "seed", "seek", "seem", "seen", "seep", "seer", "sees", "self", "sell", "semi", "send", "sent", "sept", "sera", "serb", "sere", "serf", "sets", "sewn", "sews", "sexy", "shad", "shag", "shah", "sham", "shat", "shay", "shed", "shes", "shew", "shim", "shin", "ship", "shit", "shiv", "shmo", "shod", "shoe", "shoo", "shop", "shot", "show", "shul", "shun", "shut", "siam", "sibs", "sick", "sics", "side", "sift", "sigh", "sign", "sikh", "silk", "sill", "silo", "silt", "simp", "sine", "sing", "sinh", "sink", "sins", "sips", "sire", "sirs", "site", "sits", "situ", "sitz", "size", "sizy", "skag", "skew", "skid", "skim", "skin", "skip", "skis", "skit", "skys", "slab", "slag", "slam", "slap", "slat", "slav", "slaw", "slay", "sled", "slew", "slid", "slim", "slip", "slit", "slob", "sloe", "slog", "slop", "slot", "slow", "slue", "slug", "slum", "slur", "slut", "smit", "smog", "smug", "smut", "snag", "snap", "snip", "snit", "snob", "snot", "snow", "snub", "snug", "soak", "soap", "soar", "sobs", "sock", "soda", "sods", "sofa", "soft", "soil", "sold", "sole", "soli", "solo", "soma", "some", "song", "sons", "soon", "soot", "soph", "sops", "sore", "sort", "sots", "soul", "soup", "sour", "sown", "sows", "soya", "soys", "span", "spar", "spas", "spat", "spay", "spec", "sped", "spew", "spic", "spin", "spit", "spot", "spry", "spud", "spun", "spur", "stab", "stag", "star", "stat", "stay", "stem", "step", "stet", "stew", "stir", "stoa", "stop", "stow", "stub", "stud", "stun", "stye", "styx", "subs", "such", "suck", "suds", "sued", "suer", "sues", "suet", "suey", "suez", "suit", "sulk", "sumo", "sump", "sums", "sung", "sunk", "suns", "supe", "sups", "supt", "sure", "surf", "swab", "swag", "swam", "swan", "swap", "swat", "sway", "swig", "swim", "swob", "swop", "swum", "sync", "syne", "tabs", "tabu", "tach", "tack", "taco", "tact", "tads", "tags", "tail", "take", "talc", "tale", "talk", "tall", "tame", "tamp", "tams", "tang", "tank", "tans", "taos", "tape", "taps", "tare", "tarn", "taro", "tarp", "tars", "tart", "task", "tass", "tate", "tats", "taut", "taws", "taxi", "tbsp", "teak", "teal", "team", "tear", "teas", "teat", "tech", "teds", "teed", "teem", "teen", "tees", "tell", "temp", "tend", "tens", "tent", "term", "tern", "terr", "test", "text", "thai", "than", "that", "thaw", "thee", "them", "then", "thew", "they", "thin", "this", "thor", "thou", "thro", "thru", "thud", "thug", "thus", "tick", "tics", "tide", "tidy", "tied", "tier", "ties", "tiff", "tike", "tile", "till", "tilt", "time", "tine", "ting", "tins", "tint", "tiny", "tipi", "tips", "tire", "tiro", "tits", "tnpk", "toad", "toed", "toes", "toff", "tofu", "toga", "togo", "togs", "toil", "toke", "told", "tole", "toll", "tomb", "tome", "toms", "tone", "tong", "tons", "tony", "took", "tool", "toot", "tope", "tops", "tora", "torc", "tore", "torn", "toro", "tors", "tort", "tory", "tosh", "toss", "tost", "tote", "toto", "tots", "tour", "tout", "town", "tows", "toys", "tram", "trap", "tray", "tree", "tref", "trek", "trey", "trig", "trim", "trio", "trip", "trod", "trop", "trot", "trow", "troy", "true", "tsar", "tuba", "tube", "tubs", "tuck", "tufa", "tuff", "tuft", "tugs", "tuna", "tune", "tuns", "tups", "turd", "turf", "turk", "turn", "tush", "tusk", "tuts", "tutu", "twas", "twat", "twig", "twin", "twit", "twos", "tyke", "type", "typo", "tyre", "tyro", "tzar", "ufos", "ughs", "ugli", "ugly", "ukes", "ulna", "ulva", "umps", "unco", "undo", "undy", "unit", "univ", "unix", "unto", "unum", "upon", "ural", "urbs", "urds", "urea", "urge", "uric", "urns", "ursa", "used", "usee", "user", "uses", "ussr", "utah", "vade", "vail", "vain", "vale", "vamp", "vane", "vans", "vary", "vase", "vast", "vats", "veal", "veda", "veep", "veer", "vees", "veil", "vein", "vela", "veld", "vend", "vent", "verb", "vers", "vert", "very", "vest", "veto", "vets", "vial", "vias", "vice", "vide", "vied", "vier", "vies", "view", "vile", "vims", "vine", "vino", "vins", "viny", "viol", "vips", "visa", "vise", "vita", "viva", "vive", "vivo", "voce", "void", "vole", "volt", "vote", "vows", "vrow", "vugg", "vugh", "vugs", "wack", "wacs", "wade", "wadi", "wads", "waft", "wage", "wags", "waif", "wail", "wain", "wait", "wake", "wale", "walk", "wall", "walt", "wand", "wane", "wang", "want", "ward", "ware", "wark", "warm", "warn", "warp", "wars", "wart", "wary", "wash", "wasp", "wast", "wats", "watt", "waul", "wave", "wavy", "waxy", "ways", "weak", "weal", "wean", "wear", "webs", "weds", "weed", "week", "ween", "weep", "weft", "weir", "weld", "well", "welt", "wend", "wens", "went", "wept", "were", "wert", "west", "wets", "wham", "whap", "what", "whee", "when", "whet", "whew", "whey", "whig", "whim", "whip", "whir", "whit", "whiz", "whoa", "whom", "whys", "wick", "wide", "wife", "wigs", "wild", "wile", "will", "wilt", "wily", "wind", "wine", "wing", "wink", "wino", "wins", "winy", "wipe", "wire", "wiry", "wise", "wish", "wisp", "with", "wits", "wive", "wkly", "woad", "woes", "woke", "woks", "wold", "wolf", "womb", "wont", "wood", "woof", "wool", "woos", "wops", "word", "wore", "work", "worm", "worn", "wort", "wots", "wove", "wows", "wrap", "wren", "writ", "wyes", "xiii", "xmas", "xvii", "xxii", "xxiv", "yack", "yaks", "yale", "yams", "yang", "yank", "yaps", "yard", "yare", "yarn", "yawl", "yawn", "yawp", "yaws", "yeah", "year", "yeas", "yegg", "yell", "yelp", "yens", "yeti", "yews", "yids", "yins", "yipe", "yips", "ymca", "yoga", "yogi", "yoke", "yolk", "yond", "yoni", "yore", "york", "your", "yowl", "yows", "yuan", "yuks", "yule", "yurt", "ywca", "zags", "zany", "zaps", "zeal", "zebu", "zeds", "zees", "zero", "zest", "zeta", "zeus", "zigs", "zinc", "zing", "zion", "zips", "zone", "zoom", "zoos", "zori", "zulu", "zuni"]

//Randomly select word for puzzle from list
var word = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
console.log(word);

function update() {
    let guess = "";
    document.getElementById("answer").innerText = "";

    //Construct complete guess from letters
    for(let i = 0; i < width; i++) {
        let currentTile = document.getElementById(row.toString() + "-" + i.toString());
        let letter = currentTile.innerText;
        guess += letter;
    }

    //Check if guess is inside of word list
    guess = guess.toLowerCase();
    if(!wordList.includes(guess)) {
        document.getElementById("answer").innerText = "Not in word list";
        return;
    }


    /* START PROCESSING GAME */
    //How many correct tiles are present
    let correct = 0;

    let letterCount = {}; //Ex. FOLLY -> {F: 1, O: 1, L: 2, Y: 1}
    for(let i = 0; i < word.length; i++) {
        letter = word[i];
        if(letterCount[letter]) {
            letterCount[letter]++;
        }
        else {
            letterCount[letter] = 1;
        }
    }

    //First iteration, check for correct letters
    for(let i = 0; i < width; i++) {
        //Construct index
        let currentTile = document.getElementById(row.toString() + "-" + i.toString());
        let letter = currentTile.innerText;

        //Is it in the correct position?
        if(word[i] == letter) {
            currentTile.classList.add("correct");

            //Turn keys from yellow to green when letter is guessed correctly
            let keyTile = document.getElementById("Key" + letter);
            keyTile.classList.remove("present");
            keyTile.classList.add("correct");

            correct++;
            letterCount[letter]--;
        }

        //All tiles are correct
        if(correct == width) {
            gameOver = true;
            document.getElementById("answer").innerText = "Congratulations, you guessed the word!"
        }
    }

    //Second iteration, mark which letters are in the wrong position
    for(let i = 0; i < width; i++) {
        //Construct index
        let currentTile = document.getElementById(row.toString() + "-" + i.toString());
        let letter = currentTile.innerText;

        if(!currentTile.classList.contains("correct")) {
            //Is it in the word?
            if(word.includes(letter) && letterCount[letter] > 0) {
                currentTile.classList.add("present");

                //Color keyboard tiles accordingly
                let keyTile = document.getElementById("Key" + letter);
                if(!keyTile.classList.contains("correct")) {
                    keyTile.classList.add("present");
                }   

                letterCount[letter]--;
            }
            //Not in word
            else {
                currentTile.classList.add("absent");

                let keyTile = document.getElementById("Key" + letter);
                if(!keyTile.classList.contains("correct") && !keyTile.classList.contains("present")) {
                    keyTile.classList.add("absent");
                }
            }
        }
    }
    row++; //start new row
    column = 0; //start at beginning of line
}

//Handle user input from keyboard
function processInput(e) {
    if(gameOver) {
        return;
    }
    //If a letter key is pressed, get the current tile's index and populate it with the pressed key, then move on to next tile
    if("KeyA" <= e.code && e.code <= "KeyZ") {
        if(column < width) {
            //Construct index
            let currentTile = document.getElementById(row.toString() + "-" + column.toString());
            if(currentTile.innerText == "") {
                //Letter component of code 'KeyA'
                currentTile.innerText = e.code[3];
                column++;
            }
        }
    }
    //If the backspace key is pressed, get the current tile's index and populate it with an empty string, then move on to previous tile
    else if(e.code == "Backspace") { 
        if(0 < column && column <= width) {
            column--;
        }
        //Construct index
        let currentTile = document.getElementById(row.toString() + "-" + column.toString());
        currentTile.innerText = "";
    }

    else if(e.code == "Enter") {
        update();
    }

    if(!gameOver && row == height) {
        gameOver = true;
        document.getElementById("answer").innerText = word;
    }
}

//Keyboard button pressing handler
function processKey() {
    let e = {"code": this.id};
    processInput(e);
}

function initialize() {
    //Create tile grid
    for (let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            // Construct tile classes in HTML document and populate them in board div. based on height and width variables
            // Done by creating tags as follows: <span id="0-0" class="tile"> </span>
            let tile = document.createElement("span");
            tile.id = i.toString() + "-" + j.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            //Add finished tag to fourdle.html
            document.getElementById("board").appendChild(tile);
        }
    }

    //Create keyboard
    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", " "],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫" ]
    ];

    //Iterate through each array entry to generate interface elements
    for(let i = 0; i < keyboard.length; i++) {
        let currentRow = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for(let j = 0; j < currentRow.length; j++) {
            let keyTile = document.createElement("div");

            //Create keys and set ID for each
            let key = currentRow[j];
            keyTile.innerText = key;
            if(key == "Enter") {
                keyTile.id = "Enter";
            }
            else if(key == "⌫") {
                keyTile.id = "Backspace";
            }
            else if("A" <= key && key <= "Z") {
                keyTile.id = "Key" + key;
            }

            //Listen for input from pressing key tiles instead of keyboard input
            keyTile.addEventListener("click", processKey);

            //Make enter key larger than letters
            if(key == "Enter") {
                keyTile.classList.add("enter-key-tile");
            }
            else {
                keyTile.classList.add("key-tile");
            }
            //Add finished key tiles to keyboard row
            keyboardRow.appendChild(keyTile);
        }
        //Add finished keyboard row to webpage
        document.body.appendChild(keyboardRow);
    }

    //Listen for key presses
    document.addEventListener("keyup", (e) => {
        processInput(e);
    });    
}

//When the webpage renders, call the initialize function
window.onload = function() {
    initialize();
}

