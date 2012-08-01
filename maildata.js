// Auxiliary verbs (the first word in the sentence)
auxiliary_verbs = [
	new Verb("will", "will", "present"), 
	new Verb("could", "could", "present"),
	new Verb("are", "is", "active"),
	new Verb("have", "has", "past"),
	new Verb("do", "does", "present"),
	new Verb("can", "can", "present")
];


// Subjects (i.e. bad things)
subjects = [
	new Noun("the labour party",3,1),
	new Noun("brussels",3,1),
	new Noun("the bbc",3,1),
	new Noun("the e.u.",3,1),
	new Noun("the euro",3,1),
	new Noun("the loony left",3,1),
	new Noun("the unions",3,2),       // May be a bit quaint this one
	new Noun("channel 4",3,1),
	new Noun("your local council",3,1),


	new Noun("the french",3,2),
	new Noun("the germans",3,2),
	new Noun("the poles",3,2),
	new Noun("brussels bureaucrats",3,2),
	new Noun("muslims",3,2),
	new Noun("immigrants",3,2),        // Except those from the UK to Spain & the Algarve of course
	new Noun("teachers",3,2),
	new Noun("the unemployed",3,2),
	new Noun("gypsies",3,2),
	new Noun("yobs",3,2),
	new Noun("hoodies",3,2),
	new Noun("feral children",3,2),    // They hate children *and* paedophiles FFS, make your minds up
	new Noun("chavs",3,2),
	new Noun("the p.c. brigade",3,2),
	new Noun("cyclists",3,2),          // Thanks to Chris Richards for this suggestion
	new Noun("foxes",3,2),

	
	new Noun("asylum seekers",3,2),    // Nicer way of saying 'brown people'
	new Noun("gays",3,2),
	new Noun("lesbians",3,2),
	new Noun("single mothers",3,2),
	new Noun("paedophiles",3,2),
	
	new Noun("working mothers",3,2),   // Thanks to Maggie A for this suggestion
	
	new Noun("teenage sex",3,1),
	new Noun("political correctness",3,1),
	new Noun("health &amp; safety",3,1),
	new Noun("feminism",3,1),
	new Noun("the metric system",3,1),    // For fuck's sake
	new Noun("dumbing-down",3,1),
	new Noun("rip-off britain",3,1),
	new Noun("the internet",3,1),
	new Noun("facebook",3,1),             // I CAN'T BELIEVE THE MAIL ACTUALLY SAID FACEBOOK COULD GIVE YOU CANCER, FOR REAL
	new Noun("twitter",3,1),             
	new Noun("filth on television",3,1),
	new Noun("the human rights act",3,1),
	new Noun("the nanny state",3,1),
	new Noun("cancer",3,1),               // Could cancer give you cancer?
	new Noun("binge drinking",3,1),
	new Noun("the MMR jab",3,1),          // Murdering cunts
	new Noun("the house price crash",3,1), // Hahahaha
	
	/*BOTB time*/
	new Noun("barrel rolls",3,2),
	new Noun("Barack Obama",3,1),
	new Noun("Scientology",3,1),
	new Noun("Apple",3,1),
	new Noun("hackers",3,2),
	new Noun("Richard Stallman",3,1),
	new Noun("the dream police",3,1),
	new Noun("breastfeeding",3,1),
	new Noun("squirrles",3,2),
	new Noun("turds",3,2),
	new Noun("tincans",3,2),
	new Noun("Windows ME",3,1),
	new Noun("professional wrestling",3,1),
	new Noun("#mod_shrine",3,1),
	new Noun("drugs",3,2), // Drugs are bad, 'mmmkay?
	new Noun("rabies",3,1),
	new Noun("geese",3,2),
	new Noun("a goose",3,1),
	new Noun("pop culture",3,1),
	new Noun("dubstep",3,1),
	new Noun("haters",3,2),
	new Noun("weed",3,1),
	new Noun("male compassion",3,1),
	new Noun("fizzy drinks",3,2),
	new Noun("the Twilight craze",3,1),
	new Noun("racism",3,1),
	new Noun("pornographic tatoos",3,2),
	new Noun("Kim Jong-un",3,1),
	new Noun("Tom Cruise",3,1),
	new Noun("data mining",3,1),
	new Noun("the recent healthcare mandate",3,1),
	new Noun("recent Supreme Court rulings",3,2),
	new Noun("the middle eastern crisis",3,1),
	new Noun("strange bodily odors",3,2),
	new Noun("fan fiction",3,1),
	new Noun("the polls",3,2),
	new Noun("the Polish",3,2),
	new Noun("butthurt",3,1),
	new Noun("slang",3,1),
	new Noun("poor management",3,1),
	new Noun("fish",3,2),
	new Noun("durgs",3,2),
	new Noun("Internet Explorer 6",3,1),
	new Noun("Walmart",3,1),
	new Noun("con artists",3,2),
	new Noun("spies",3,2),
	new Noun("angry Russians",3,2),
	new Noun("drunken Germans",3,2),
	new Noun("mainstream media",3,1),
	new Noun("Windows XP",3,1),
	new Noun("Windows Vista",3,1),
	new Noun("telemarketers",3,2),
	new Noun("the green party",3,1), //That's right! No capitalization!
	new Noun("VEVO",3,1),
	new Noun("8bc",3,1),
	new Noun("dubmood",3,1),
	new Noun("those mean rich people",3,1),
	new Noun("heat wave",3,1)
];

// Transitive phrases (i.e. bad thing they do)
transitive_phrases = [
	new Phrase("give", "given", "giving", "cancer"),
	new Phrase("give", "given", "giving", "cancer"), // Have it twice as they're so bloody obsessed by it
	new Phrase("infect", "infected", "infecting", "with AIDS"),
	new Phrase("give", "given", "giving", "swine flu"),
	new Phrase("make", "made", "making", "obese"),
	new Phrase("give", "given", "giving", "diabetes"),
	new Phrase("make", "made", "making", "impotent"),

	new Phrase("turn","turned","turning","gay"),    // Cunts

	new Phrase("scrounge off","scrounged off","scrounging off",""),
	new Phrase("tax", "taxed", "taxing", ""),
	new Phrase("cheat", "cheated", "cheating", ""),
	new Phrase("defraud", "defrauded", "defrauding", ""),
	new Phrase("steal from","stolen from","stealing from",""),
	new Phrase("burgle","burgled","burgling",""),
	new Phrase("devalue","devalued","devaluing",""),
	new Phrase("rip off","ripped off","ripping off",""),
	
	new Phrase("molest","molested","molesting",""),
	new Phrase("have sex with","had sex with","having sex with",""),
	new Phrase("impregnate", "impregnated", "impregnating", ""),

	
	new Phrase("steal the identity of","stolen the identity of","stealing the identity of",""),	

	new Phrase("destroy","destroyed","destroying",""),
	new Phrase("kill","killed", "killing",""),
	new Phrase("ruin","ruined","ruining",""),
	new Phrase("hurt","hurt", "hurting",""),
	
	/* BOTB TIME */
	new Phrase("mess with","messed with","messing with",""),
	new Phrase("froon with","frooned with","frooning with",""),
	new Phrase("hack","hacking","hacked",""),
	new Phrase("hack","hacking","hacked","with hacks"),
    new Phrase("hack","hacked","hacking",""),
	new Phrase("hack","hacked","hacking","with hacks"),
	new Phrase("solicit","solicited","soliciting",""),
	new Phrase("give","given","giving","a hard time"),
	//new Phrase("give","given","giving","a run for their money",""),
	new Phrase("troll","trolled","trolling",""),
	new Phrase("refuse to give","refuse to give","refuse to give","a chance"),
	new Phrase("cause","caused","causing","to go mad"),
	new Phrase("beshitify","beshitified","beshitifying",""),
	new Phrase("pitch-shift","pitch-shifted","pitch-shifting",""),
	new Phrase("confuse the hell out of","confused the hell out of",
		"confusing the hell out of",""),
	new Phrase("just leave","ever left","leaving","alone"),
	new Phrase("prove","proven","proving","to be illegal"),
	new Phrase("prove","proven","proving","a threat to the public"),
	new Phrase("accidentally","accidentally","accidentally",""),
	new Phrase("make", "made", "making", "go wild"),
	new Phrase("convince", "convinced", "convincing", "to vote boomlinde"),
	new Phrase("set", "set", "setting", "up the bomb"),
	new Phrase("be in","been in","in",""),
	new Phrase("put","put","putting","in a coma"),
	new Phrase("seduce","seduced","seducing",""),
	new Phrase("condone","condoned","condoning",""),
	new Phrase("soil","soiled","soiling",""),
	new Phrase("give up on","given up on","giving up on",""),
	new Phrase("throw away traditional","thrown away traditional",
		"throwing away traditional","values"),
	new Phrase("poke","poked","poking","to death"),
	new Phrase("tickle","tickled","tickling","to death"),
	new Phrase("totally throw","totally threw","totally throwing","off"),
	new Phrase("make conversations about","made conversations about",
		"making conversations about","awkward"),
	new Phrase("clone","cloned","cloning",""),
	new Phrase("flip-off","flipped-off","flipping-off",""),
	new Phrase("project","projected","projecting","at an all time high")
];

// Objects (i.e. saintly, saintly things)
objects = [
	"the british people",
	"the middle class",
	"middle britain", // Cunts
	"england",

	"hard-working families",
	"homeowners",
	"pensioners",
	"drivers",
	"taxpayers",
	"taxpayers' money",

	"house prices",
	"property prices", // Hahahahahahahaa
	
	"britain's farmers",
	"the countryside",

	"british justice",
	"british sovereignty",
	"common sense and decency",

	"the queen",    // God bless 'er
	"the royal family",
	"the church",

	"you",
	"your mortgage",
	"your pension",
	"your daughters",
	"your children",
	"your house",
	"your pets",

	"the conservative party",  // FAIL
	"cliff richard",           // Should this be in here?
	"the memory of diana",
	"Britain's swans",          // This always stays
	
	/* BOTB TIME */
	"Strobe","Svetlana","Jangler","ui","nys","CreepSmash","CreepTD",
	"the BotB IRC Bot",
	"Chip Champion","chunter","Slimeball",
	"Waffle House",
	"waffles",
	"*nix","GNU/Linux",
	"beards","beard",
	"Firefox","Chrome",
	"the average finger",
	"zanzan",
	"video games",
	"furries",
	"Lucille Ball",
	"kfaraday",
	"rainwarrior",
	"Windows",
	"Richard Stallman",
	"KungFuFurby",
	"dw",
	"Americans",
	"Candaians",
	"Germans",
	"gyms",
	"trough",
	"Baron Knoxbury",
	"the world's longest dog",
	"Gabe Newell",
	"Kirby",
	"the Internet",
	"your fridge",
	"cross country races",
	"Jude", //NAAAAAA NAA NAAA NA NA NA NAAA
	"#ducks",
	"tacos",
	"male compassion",
	"America",
	"Canada",
	"Sweden",
	"Japan",
	"Finland",
	"Germany",
	"Linus Torvalds",
	"an OHC",
	"lesbian space dog pilots",
	"modern consumerism",
	"technology",
	"the typical hipster",
	"hipsters","Super Mario Bros",
	"#botb",
	"your privacy",
	"an OHB",
	"Blitz Lunar",
	"your qualifications",
	"your cell phone",
	"privacy",
	"your car",
	"your tincans",
	"your bet", //I meant to type "your pet" but this is better
	"OHB","OHBs",
	"your assets",
	"peace",
	"freedom",
	"capitalism",
	"OHCs","OHC",
	"your pet",
	"gambling",
	"the value of the dollar",
	"a website","a shell script",
	"Windows 2000","MS-DOS",
	"a grilled cheese sandwich","pizza","sandwiches","a sandvich",
	"pasta","fish","a fish",
	"Hank Hill","propane",
	"ramen","ramen prices",
	"RushJet1","Kulor","miau","Warlord","null1024","TristEndo","michu",
	"iamgreaser","MandraSigma","ElHuesudoII","jrlepage","tadpole",
	"Soiled Bargains"
];

//lol CRAMMING
//for (i = 0; i<subjects.length; i++) { objects.push((subjects[i]).word); }
