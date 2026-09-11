// Arcanum CE Restored - Map Database Manifest (Arcanum: Cities, Quest locations, Other locations)
const ArcanumCitiesMapData = [
  {
    filename: "World Map/ArcanumWorldMap.jpg",
    displayName: "Arcanum World Map",
    modGroup: "World Map",
    typemap: "overworld",
    music: "music/arcanum.flac",
    defaultView: { x: 1000, y: 1000, zoom: 0.6 },
    labels: [

      // ### CITIES ###

      { x: 503, y: 977, text: "Ashbury", description: "A city on the eastern seaboard.", targetMapFilename: "Ashbury" },
        // NEW MAP TO DO
      { x: 1098, y: 1441, text: "Black Root", description: "A border town.", targetMapFilename: "Black Root" }, // MAP OK
      { x: 1604, y: 1828, text: "Caladon", description: "A thriving feudal kingdom.", targetMapFilename: "Caladon" },
        // NEW MAP TO DO
      { x: 1237, y: 1650, text: "Dernholm, capital of Cumbria", description: "Capital of Cumbria - A dying feudal kingdom.", targetMapFilename: "Dernholm" }, // MAP OK
      { x: 323, y: 877, text: "Isle of Despair", description: "A penal colony.", targetMapFilename: "Isle of Despair" }, // MAP OK
        // To do: Pit
      { x: 1545, y: 656, text: "Qintarra", description: "A large elven community.", targetMapFilename: "Qintarra"}, // MAP OK
        // To do: Silver Lady Chambers
      { x: 1752, y: 1514, text: "Roseborough", description: "A small town near the Ring of Brodgar.", targetMapFilename: "Roseborough"},
        // To do: Mannox's Hole
      { x: 1410, y: 1317, text: "Shrouded Hills", description: "A small mining town.", targetMapFilename: "Shrouded Hills" }, // MAP OK
      { x: 1190, y: 753, text: "Stillwater", description: "A small town, famed for its swords.", targetMapFilename: "Stillwater" }, // MAP OK
      { x: 972, y: 1028, text: "Tarant", description: "The biggest, most industrial city in Arcanum", targetMapFilename: "Tarant"},
        // NEW MAP TO DO
      { x: 1179, y: 316, text: "The Bedokaan Village", description: "As small village of reptilian creatures.", targetMapFilename: "The Bedokaan Village" }, // MAP OK
      { x: 1505, y: 297, text: "T’sen-Ang", description: "Home of the Dark Elves.", targetMapFilename: "T’sen-Ang"}, // MAP OK
      { x: 444, y: 489, text: "Tulla", description: "A mysterious city of mages deep in the Vendigroth Wastes.", targetMapFilename: "Tulla"}, // MAP OK
        // To do: Fa'al Kin's Maze
      { x: 868, y: 1191, text: "Vooriden", description: "A small village just south of Tarant.", targetMapFilename: "Vooriden"}, // MAP OK
      { x: 954, y: 667, text: "Wheel Clan", description: "A Dwarven society deep in the Grey Mountains.", targetMapFilename: "Wheel Clan"},
        // NEW MAP TO DO
        // To do: Outside (Open); Replace level 1 with actual map; Loghaire's Chambers; The other mine
      
      // ### QUEST LOCATIONS ###

      { x: 1182, y: 1583, text: "A Lair of Gyr Dolours", description: "The last known location of the tormented Lady Druella.", targetMapFilename: "A Lair of Gyr Dolours"},
      { x: 1586, y: 1816, text: "A mysterious location", description: "Discovered on the wall painting in the Mushroom.", targetMapFilename: "A mysterious location"},
      { x: 776, y: 919, text: "Ancient Temple", description: "A temple rumored to hold treasures untold.", targetMapFilename: "Ancient Temple"},
      { x: 1452, y: 1303, text: "Arbalah’s House", description: "Arbalah’s House.", targetMapFilename: "Arbalah’s House"},
      { x: 629, y: 1593, text: "Boat Landing on Thanatos", description: "Landing for the Isle of Death.", targetMapFilename: "Boat Landing on Thanatos"},
      { x: 1453, y: 1289, text: "Crash Site", description: "The remains of the crashed blimp.", targetMapFilename: "Crash Site"},
      { x: 346, y: 679, text: "Dark Elf Camp", description: "The dark elves’ base camp near the ruins of Vendigroth.", targetMapFilename: "Dark Elf Camp"},
      { x: 993, y: 790, text: "Dungeon of the Dragon Pool", description: "Source of Dragon’s Blood for reviving Torian Kel.", targetMapFilename: "Dungeon of the Dragon Pool" },
      { x: 711, y: 1022, text: "Elven Ruins", description: "A place that may hold untold elven riches.", targetMapFilename: "Elven Ruins"},
      { x: 1627, y: 564, text: "Falcon’s Ache", description: "Elven holy ground, at the edge of the Glimmering Forest.", targetMapFilename: "Falcon’s Ache"},
      { x: 466, y: 741, text: "Gateway to the Wastes", description: "A bridge leading into the Vendigroth Wastes." , targetMapFilename: "Gateway to the Wastes"},
      { x: 1500, y: 1442, text: "Gorgoth Pass", description: "A long forgotten pass joining the kingdoms of Dernholm and Caladon.", targetMapFilename: "Gorgoth Pass"},
      { x: 923, y: 1689, text: "Half Ogre Island", description: "The rumored location of the secret breeding laboratory.", targetMapFilename: "Half Ogre Island"},
      { x: 1288, y: 713, text: "Hardin’s Pass", description: "A treacherous snowy pass leading to the Glimmering Forest.", targetMapFilename: "Hardin’s Pass" },
      { x: 1435, y: 616, text: "K’na Tha", description: "A place of ancient magick rumored to contain Azram’s Star.", targetMapFilename: "K’na Tha"},
        // To do: Level 2; 3; 4; 5; 6
      { x: 635, y: 1204, text: "Kree", description: "The once great city destroyed by the Bane of Kree.", targetMapFilename: "Kree" },
      { x: 720, y: 1886, text: "Land Bridge", description: "Beginning of the trail leading to the god of Thanatos.", targetMapFilename: "Land Bridge", targetX: 1435, targetY: 735},
      { x: 1580, y: 1009, text: "Lethe Wyvern Sighting", description: "Rumored lair of the lethe wyvern.", targetMapFilename: "Lethe Wyvern Sighting" },
      { x: 1179, y: 1465, text: "Liam’s Workshop", description: "Liam Cameron’s Workshop.", targetMapFilename: "Liam’s Workshop"},
      { x: 474, y: 694, text: "Mysterious ruins of the wastes", description: "A location shown to you by Weldo Rubin.", targetMapFilename: "Myserious ruins of the wastes" },
      { x: 721, y: 1890, text: "Nasrudin’s Resting Place", description: "Reputed to be the location of the remains of Nasrudin.", targetMapFilename: "Nasrudin’s Resting Place", targetX: 3144, targetY: 2443},
      { x: 1503, y: 1771, text: "Razor’s Pointe", description: "Ships fear these treacherous waters that must be passed to navigate around the tip of Arcanum.", targetMapFilename: "Razor’s Pointe" },
      { x: 1025, y: 1333, text: "Ruins of Szabo", description: "Some ancient ruins.", targetMapFilename: "Ruins of Szabo"},
      { x: 1514, y: 1184, text: "Secret Entrance to the Iron Clan", description: "The entrance to the legendary dwarven clan.", targetMapFilename: "Secret Entrance to the Iron Clan"},
      { x: 346, y: 827, text: "Shades Beach", description: "A place reputed to be full of strange objects.", targetMapFilename: "Shades Beach"},
      { x: 1450, y: 1325, text: "Simon Fahrkus’ Shack", description: "Simon Fahrkus’ Shack.", targetMapFilename: "Simon Fahrkus’ Shack"},
      { x: 1343, y: 887, text: "Stonecutter Clan", description: "The home of the Stonecutter Clan.", targetMapFilename: "Stonecutter Clan"},
      { x: 682, y: 1339, text: "Stringy Pete’s Cove", description: "A haunted cove.", targetMapFilename: "Stringy Pete’s Cover" },
      { x: 808, y: 1341, text: "Stringy Pete’s Treasure", description: "The final resting place of the infamous pirate’s bounty.", targetMapFilename: "Stringy Pete’s Treasure" },
      { x: 1308, y: 754, text: "The Black Mountain Mines", description: "The abandoned home of the Black Mountain Clan.", targetMapFilename: "The Black Mountain Mines"},
        // To do: checkup
      { x: 1178, y: 289, text: "The Bangellian Deeps", description: "The resting place of the Bangellian Scourge.", targetMapFilename: "The Bangellian Deeps"},
      { x: 1386, y: 640, text: "The Castle S’nel N’fa", description: "A trap filled ruin rumored to contain the staff of K’an Tau.", targetMapFilename: "The Castle S’nel N’fa" },
      { x: 320, y: 838, text: "The Home Of Maximillian", description: "A strange old man on the Isle of Despair.", targetMapFilename: "The Home of Maximillian" },
      { x: 768, y: 838, text: "The Lair of Bellerogrim", description: "A cave where they discovered Arcanum’s last Dragon.", targetMapFilename: "The Lair of Bellerogrim"},
      { x: 642, y: 1765, text: "The Lair Of The Bogaroth", description: "The reputed lair of the monster that slaughtered the entire Ashlag tribe.", targetMapFilename: "The Lair of the Bogaroth"},
      { x: 1364, y: 936, text: "The Pit Of Fires", description: "The location of the Blade Of Xerxes.", targetMapFilename: "The Pit of Fires"},
      { x: 1320, y: 827, text: "The Place Of Lost Voices", description: "A place shown to you by the map in the Iron Clan Chest.", targetMapFilename: "The Place of Lost Voices" },
      { x: 1206, y: 276, text: "The Poachers Camp", description: "The camp of some Bedokaan poachers.", targetMapFilename: "The Poachers Camp" },
      { x: 749, y: 249, text: "The Ruby Glade", description: "An eerie, ancient place.", targetMapFilename: "The Ruby Glade"},
      { x: 509, y: 1113, text: "The Williamson Homestead", description: "A run-down shanty.", targetMapFilename: "TheWilliamsonHomestead" },
      { x: 268, y: 824, text: "The Women’s Camp", description: "A small village comprised solely of nomadic women.", targetMapFilename: "The Women’s Camp"},
      { x: 1529, y: 1534, text: "Thieves Cave", description: "Thieves Cave.", targetMapFilename: "Thieves Cave"},
      { x: 1419, y: 1099, text: "Torin Quarry", description: "An ancient dwarven stone quarry.", targetMapFilename: "Torin Quarry"},
      { x: 307, y: 587, text: "Vendigroth Ruins", description: "The remnants of an ancient city.", targetMapFilename: "Vendigroth Ruins" },
        // To do: checkup
        // Split the level 1 in three separate files + rename the files
      { x: 1230, y: 981, text: "Vollinger’s Meeting Place", description: "Vollinger’s Meeting Place.", targetMapFilename: "Vollinger’s Meeting Place"},

      // ### OTHER LOCATIONS ###

      { x: 1367, y: 1582, text: "Ancient Maze", description: "A mysterious old maze.", targetMapFilename: "Ancient Maze"},
      { x: 1754, y: 1479, text: "Ancient Ruins", description: "Ancient ruins.", targetMapFilename: "Ancient Ruins" },
      { x: 498, y: 892, text: "Ancient Shipwreck", description: "The remains of an ancient pirate ship.", targetMapFilename: "Ancient Shipwreck"},
      { x: 1627, y: 1635, text: "Bolo’s Altar", description: "A weathered stone altar.", targetMapFilename:"Bolo’s Altar" },
      { x: 830, y: 1036, text: "Forbidden Pit", description: "Dangerous looking pit filled with skeletons and widowers.", targetMapFilename: "Forbidden Pit" },
      { x: 882, y: 423, text: "Kerlin’s Altar", description: "An ancient, golden altar.", targetMapFilename:"Kerlin’s Altar"},
      { x: 1320, y: 179, text: "Secret Village", description: "You hear high pitched rejoicing.", targetMapFilename: "Secret Village"},
      { x: 1260, y: 479, text: "Small Camp", description: "A small camp is visible from a distance.", targetMapFilename: "Small Camp" },
      { x: 1595, y: 882, text: "Small Pond", description: "You hear shouts and whip-cracking.", targetMapFilename: "Small Pond" },
      { x: 1373, y: 705, text: "Strange Ceremony", description: "Strange chanting can be heard nearby....", targetMapFilename: "Strange Ceremony"},
      { x: 617, y: 527, text: "Strange Pond", description: "An interesting pond in the middle of nowhere.", targetMapFilename: "Strange Pond"},
      { x: 1076, y: 514, text: "The Bog", description: "An evil looking place.", targetMapFilename: "The Bog"},
      { x: 1629, y: 1205, text: "The Broken Cathedral", description: "A place of old ruins.", targetMapFilename: "The Broken Cathedral"},
      { x: 1613, y: 1413, text: "The Cold Place", description: "An ominous place.", targetMapFilename: "The Cold Place"},
      { x: 1695, y: 1318, text: "The Old Lagoon", description: "A remote lagoon.", targetMapFilename: "The Old Lagoon"},
      { x: 1214, y: 1137, text: "Torg’s Altar", description: "An old, stone altar.", targetMapFilename: "Torg’s Altar"},
      { x: 1046, y: 693, text: "Uncharted Cave", description: "No one knows what mysteries may lie in this unexplored cave.", targetMapFilename: "Uncharted Cave"},
      { x: 745, y: 1700, text: "Village Of the Ashlag Tribe", description: "The home of a primitive tribe that worships a primate deity.", targetMapFilename: "Village of the Ashlag Tribe"},
      { x: 1230, y: 1530, text: "Wolf Cave", description: "Wolf Cave.", targetMapFilename: "Wolf Cave"},
    ]
  },
  {
    filename: "ArcanumBase/Ashburysmall.jpg",
    displayName: "Ashbury",
    modGroup: "Cities",
    typemap: "local",
    defaultView: { x: 4116, y: 3252, zoom: 1 },
    labels: [
      // Followers
      { x: 5663, y: 2388, text: "Worthless Mutt (Dog)", sex: "Male", race: "Dog", level: 1, portrait: "Textures/dog.png", category: "followers" },
      { x: 2947, y: 3240, text: "Geoffrey Tarellond-Ashe", sex: "Male", race: "Human", level: 12, portrait: "Textures/geoffrey.gif", category: ["quest", "followers"],
        linkedLabels: [
          { questName: "", questDescription: "Geoffrey Tarellond-Ashe wants you to help him solve the mystery of the Ashbury Cemetary.", target: "" }
        ]
      },
      
      // Waypoints
      { x: 2041, y: 2737, text: "Ashbury Crematorium - Level 1", description: "", category: "waypoint", targetMapFilename: "Ashbury Crematorium - Level 1" },
      { x: 3707, y: 1325, text: "Haunted Castle - Ground Floor", description: "", category: "waypoint", targetMapFilename: "Haunted Castle - Ground Floor" },
      { x: 3277, y: 2500, text: "Scienticians Underground", description: "", category: "waypoint", targetMapFilename: "Scienticians Underground" },
     
      // Shop (All checked and good)
      { x: 4978, y: 2614, text: "Gun Smith", sex: "male", race: "Human", level: 33, category: "shop", shopType: "Gun store", shopMarkup: 100 },
      { x: 3920, y: 2543, text: "Herbalist", sex: "female", race: "Human", level: 32, category: "shop", shopType: "Herbalist", shopMarkup: 90, inventory: ["Mechanical Dagger"] },
      { x: 3970, y: 3041, text: "General Store Clerk", sex: "female", race: "Human", level: 29, inventory: [{name:"Shocking Dagger", tier:"magick"}], category: "shop", shopType: "General Store", shopMarkup: 100, inventory: [{name: "Shocking Dagger", tier: "magick"}] },
      { x: 4345, y: 2945, text: "Elf Shopkeeper", sex: "female", race: "Elf", level: 28, category: "shop", shopType: "Magic shop", shopMarkup: 100, inventory: [{name:"Divining Staff", tier:"magick"}, {name:"Magick Robes", tier:"magick"}] },
      { x: 4636, y: 2806, text: "Tailor", sex: "male", race: "Half-Elf", level: 23, category: "shop", shopType: "Tailor", shopMarkup: 90, inventory: [{name:"Mage's Dagger", tier:"magick"}] },
      { x: 4450, y: 2711, text: "Blacksmith", sex: "male", race: "Human", level: 34, category: "shop", shopType: "Blacksmith", shopMarkup: 110, inventory: ["Machined Gauntlets"] },
      { x: 5763, y: 2928, text: "Elven Trader", sex: "", race: "Elf", level: 35, category: "shop", shopType: "Elven Trader", shopMarkup: 100, inventory: [{name:"Shaman's Staff", tier: "magick"}, {name:"Scroll of Call Earth Elemental", tier:"magick"}, {name:"Scroll of Teleportation", tier:"magick"}] },
      { x: 5605, y: 2781, text: "Raymond Pierce", sex: "male", race: "Human", level: 28, category: "shop", shopType: "Glasses", shopMarkup: 100 },
      { x: 4650, y: 4618, text: "Wise Woman", sex: "female", race: "Halfling", level: 37, category: "shop", shopType: "Nomad", shopMarkup: 150 },

      // Shop signs
      { x: 4146, y: 3074, text: "Ashbury Sundries", description: "", category: "information" },
      { x: 4511, y: 2979, text: "The Crooked Staff", description: "", category: "information" },
      { x: 4514, y: 2853, text: "Fenwick's Fine Clothing and Accounterments", description: "", category: "information" },
      { x: 4319, y: 2753, text: "Ashbury Premium Armature", description: "", category: "information" },
      { x: 3955, y: 2609, text: "Peony's Fyne Herbs", description: "", category: "information" },
      { x: 5142, y: 2652, text: "Side Arms and Saltpeter", description: "", category: "information" },

      // Quests
      { x: 3305, y: 2623, text: "Theodore", sex: "male", race: "Human", level: 8, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "A fellow named Theodore wants you to retrieve his 'technologically improved' plate from Ashbury's local scientician.", target: "Wood Chest (Plate)" }
        ]
      },
      { x: 4662, y: 2382, text: "Mayor of Ashbury", sex: "male", race: "Human", level: 1, category: ["quest", "npc"],
          linkedLabels: [
          { questName: "", questDescription: "The Mayor of Ashbury will allow you to answer questions at this evenings Town Council meeting. Your answers must please as many people as possible.", target: "" }
        ]
      },
      { x: 3790, y: 3998, text: "Theo Brightstart", sex: "male", race: "Halfling", level: 24, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "Kill the 3 wild pigs that keep eating Theo Brightstart's corn crop.", target: "" },
          { questName: "", questDescription: "Load the 5 large boulders located in Theo Brightstart's field onto his cart.", target: "" }
        ]
      },
      { x: 5486, y: 4176, text: "William Thorndop", sex: "male", race: "Human", level: 48, inventory: ["Looking Glass Rifle"], description: "Firearms Master", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "Kill the entire Willbecker Gang and release their hostage, Mrs. Rolland, unharmed.", target: "Mrs. Rolland" }
        ]
      },

      { x: 3568, y: 2381, text: "Kendrick Wales", sex: "male", race: "Gnome", level: 1, description: "The first time you talk to him, Wales will let you know that he's the author of The Curse of T'sen-Ang, but he won't tell you anything about the book. Later you'll get to read a copy of the book, and learn how Wales picked up the information to write it.", category: ["quest", "npc"] },
      { x: 6972, y: 2286, text: "Captain Edward Teach (Ashbury)", sex: "male", race: "Human", level: 23, description: "He'll take you to the Isle of Despair. If you worked with Gilbert Bates in Tarant then he'll take you for free. Otherwise you'll have to pay 500 gold.", category: ["quest", "npc"], linkedLabels: ["Captain Edward Teach (Isle of Despair)"] },

      // Chests
      { x: 6797, y: 2363, text: "Barrel", inventory: ["The Hand"], category: ["quest", "chest"], linkedLabels: ["Ogdin"] },

      // Other
      { x: 1933, y: 2562, text: "Infernal Hammer", description: "Guarded by two fire elementals.", category: "information" },
    ]
  },
  {
    filename: "ArcanumBase/BlackRoot.jpg",
    displayName: "Black Root",
    modGroup: "Cities",
    typemap: "local",
    labels: [
      // Waypoints
      { x: 4224, y: 1820, text: "Train Conductor (Black Root)", sex: "male", race: "Human", level: 1, description: "Tarant / Ashbury. 75 gold per party member.", category: "waypoint" },

      // Followers
      { x: 5593, y: 2093, text: "Dante", sex: "Male", race: "Human", level: 12, portrait: "Textures/dante.png", category: "followers" },
      { x: 4727, y: 3785, text: "Franklin Payne", sex: "Male", race: "Human", level: 35, portrait: "Textures/franklinpayne.gif", description: "Franklin Payne will only show up after you've visited T'sen-Ang and learned the fate of the Black Mountain Clan . If you ask him the most dangerous place he's ever been, he'll say Thanatos. At that point you can invite him to come along with you to Thanatos, even if you joined the dark elves and thus can't go to Thanatos.", inventory: ["Elephant Gun", "Mithril Chainmail"], category: ["followers", "information"] },
      
      // Shop
      { x: 3912, y: 2885, text: "Garret Almstead", sex: "male", race: "Half-Orc", level: 38, shopType: "Blacksmith", shopMarkup: 110, inventory: ["Dwarven Gauntlets", "Almstead's Axe", "Key to Garret Almstead's Trunk"], category: ["quest", "shop", "key"] },
      { x: 3575, y: 3080, text: "Tailor", sex: "female", race: "Human", level: 24, shopType: "Tailor", shopMarkup: 90, inventory: [{name:"Enchanted Gown", tier:"magick"}], category: ["shop"] },
      { x: 5032, y: 2161, text: "General Store Clerk", sex: "male", race: "Human", level: 34, shopType: "General Store", shopMarkup: 110, category: ["shop"] },
      { x: 4383, y: 3109, text: "Inventor", sex: "male", race: "Human", level: 33, shopType: "Inventor", shopMarkup: 110, category: ["shop"] },
      { x: 5496, y: 2376, text: "Junk Dealer", shopType: "Junk Dealer", sex: "Male", race: "Half-Orc", level: 30, shopMarkup: 200, category: ["shop"] },
      { x: 4360, y: 2355, text: "Herbalist", sex: "female", race: "Elf", level: 27, inventory: [{name:"Staff of Healing", tier:"magick"}], shopType: "Herbalist", shopMarkup: 90, category: ["shop"] },
      { x: 3083, y: 2915, text: "Magick Shop Clerk", sex: "female", race: "Half-Elf", level: 34, shopType: "Magic Shop", shopMarkup: 100, category: ["shop"] },

      // Quests
      // Black Root Taxes
      { x: 7180, y: 2486, text: "Mayor of Black Root", sex: "male", race: "Human", level: 10, inventory: ["Chest of Gold"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Black Root taxes", questDescription: "Black Root Mayor won't give you the taxes unless you retrieve his ceremonial silver dagger.", target: "King Praetor" },
          { questName: "Retrieve the ceremonial silver dagger (Part I)", questDescription: "The Mayor of Black Root wants you to find his badge of office, a ceremonial silver dagger, stolen by a local gang of thieves.", target: "D'ak Taan" }
        ] },
      { x: 3164, y: 1271, text: "D'ak Taan", sex: "male", race: "Elf", level: 21, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Retrieve the ceremonial silver dagger (Part II)", questDescription: "D'ak Taan will give you stolen items if you do a quest for him. You have two options.", target: "Mayor of Black Root" },
          { questName: "", questDescription: "D'ak Taan the thief wants you to rob the Hedgewizard's chest. If successful, he will give you stolen items from Black Root.", target: "Tugal the Hedgewizard" },
          { questName: "", questDescription: "D'ak Taan the thief wants you to obtain poison from Grunwalde. If successful, he will give you stolen items from Black Root.", target: "Grunwalde" }
        ] },
      { x: 2331, y: 3399, text: "Tugal the Hedgewizard", sex: "male", race: "Gnome", level: 14, inventory:[{name:"Scroll of Summon Undead", tier:"magick"}], category: ["quest", "npc"], target: "D'ak Taan" },
      { x: 2213, y: 3361, text: "Wood Chest", inventory: ["Small Statuette"], category: ["quest", "chest"] },
      { x: 4627, y: 3224, text: "Grunwalde", sex: "male", race: "Human", level: 25, inventory: ["Envenomed Sword", "Grunwalde's Poison"], category: ["quest", "npc"], target: "D'ak Taan" },

      // Ancient Game
      { x: 8125, y: 2907, text: "Naked Halfling (1)", sex: "male", race: "Halfling", level: 1, description: "A strange halfling seems to have included you in an ancient game.", category: ["quest", "npc"], 
        linkedLabels: [
          { questName: "Ancient Game (Part I)", questDescription: "A painted face, hands with no bones. My oldest brother was made of stones. What am I? Correct answer: A clock.", target: "Naked Halfling (2)" },
        ]
      },
      { x: 1947, y: 1610, text: "Naked Halfling (2)", sex: "male", race: "Halfling", level: 1, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Ancient Game (Part II)", questDescription: "Death to one, while birthing another - trees begin to shiver around its grandmother. What am I? Correct answer: Spring.", target: "Naked Halfling (3)" }
        ]
      },
      { x: 1783, y: 920, text: "Naked Halfling (3)", sex: "male", race: "Halfling", level: 50, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Ancient Game (Part III)", questDescription: "Causing wounds, and cleansing. History dies from its rinsing. Life or scars is its blessing. What am I? Correct answer: Fire" }
        ]
      },

      // Other quests
      { x: 5458, y: 3392, text: "Mrs. Lydia Cameron", sex: "female", race: "Human", level: 28, inventory: [{name:"Mage’s Dagger", tier:"magick"}, "Chapeau of Magnetic Inversion"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Find Liam Cameron (Part I)", questDescription: "When you talk to Mrs. Cameron, she'll tell you that her son Liam has gone missing from his workshop. Then she'll mark the location of his workshop on your map.", target: "Dresser (Liam’s Workshop)" }
        ]
      },
      { x: 3248, y: 2623, text: "Kietzel Pierce (Black Root)", sex: "male", race: "Half-elf", level: 48, description: "Master Bowman", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Find Dudley Crosston (Part I)", questDescription: "Kietzel ask to find Dudley Crosston, and let him know where Kietzel has gone.", target: "Dudley Crosston" },
          "Kietzel Pierce (Caladon)"
        ]
      },
      { x: 3568, y: 2664, text: "Daniel Hallaway", sex: "male", race: "Human", level: 32, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Retrieve the Strongbox", questDescription: "The innkeeper wants you to bring back his strong box from the blacksmith.", target: "Garret Almstead" }
        ] 
      },
      { x: 3184, y: 2665, text: "Clarissa Shalmo", sex: "female", race: "Half-Orc", level: 47, description: "Master of Throwing", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Retrieve Azram’s Star" , questDescription: "Retrieve Azram’s Star from K’na Tha for Clarissa Shalmo in Black Root.", target: "Chest (Azram’s Star)" }
        ]
      },

      { x: 2028, y: 3570, text: "Tyron's Note", inventory: ["Tyron's Note"], category: "quest" },
    
      // Information
      { x: 5926, y: 1652, text: "Master Shipbuilder", sex: "male", race: "Human", level: 15, description: "At one point in the game you might need to buy a ship. The regular price is 50,000 coins, but a skilled haggler can try to negotiate. The price will be brought down to 35,000 with maximum (rank 20, 5 character points worth) Haggle but no Master status, whereas a Haggle Master can reduce it down to 25,000.", category: ["npc", "information"] },
      { x: 5685, y: 2704, text: "Herkemer Oggdoddler", sex: "male", race: "Human", level: 38, description: "If you let him tell his war stories for long enough, he'll offer to give you expert training in melee , dodge , firearms , and spot traps.", category: "npc" },
      { x: 864, y: 3243, text: "Monster around Black Root (1/3)", description: "", category: "information" },
      { x: 3707, y: 3803, text: "Monster around Black Root (2/3)", description: "", category: "information" },
      { x: 5738, y: 4002, text: "Monster around Black Root (3/3)", description: "", category: "information" },

    ]
  },
  {
    filename: "ArcanumBase/Caladonsmall.jpg",
    displayName: "Caladon",
    modGroup: "Cities",
    typemap: "local",
    music: "music/caladon.flac",
    defaultView: { x: 3596, y: 3305, zoom: 1 },
    labels: [
      // Waypoints
      { x: 4401, y: 1297, text: "Caladon Panarii Temple - Level 1", description: "", category: "waypoint", targetMapFilename: "Caladon Panarii Temple - Level 1" },
      { x: 6613, y: 1768, text: "Caladon Castle - Main Floor", description: "", category: "waypoint", targetMapFilename: "Caladon Castle - Main Floor" },
      { x: 6870, y: 2460, text: "Guardhouse Basement", description: "", category: "waypoint", targetMapFilename: "Guardhouse Basement" },
      { x: 7529, y: 1837, text: "High Security Prison", description: "", category: "waypoint", targetMapFilename: "High Security Prison" },
      { x: 5883, y: 1959, text: "Mafia Underground", description: "", category: "waypoint", targetMapFilename: "Mafia Underground" },
      { x: 5377, y: 1643, text: "Sanders Basement", description: "", category: "waypoint", targetMapFilename: "Sanders Basement" },
      { x: 6878, y: 716, text: "Trap Disarm Dungeon", description: "", category: "waypoint", targetMapFilename: "Trap Disarm Dungeon" },
      { x: 8236, y: 1540, text: "Caladon Sewers", description: "", category: "waypoint", targetMapFilename: "Caladon - Sewers", targetX: 3690, targetY: 819 },
      { x: 4353, y: 1328, text: "Caladon Sewers", description: "", category: "waypoint", targetMapFilename: "Caladon - Sewers", targetX: 2244, targetY: 346 },
      { x: 6300, y: 978, text: "Caladon Sewers", description: "", category: "waypoint", targetMapFilename: "Caladon - Sewers", targetX: 2753, targetY: 356 },
      { x: 7480, y: 2591, text: "Caladon Sewers", description: "", category: "waypoint", targetMapFilename: "Caladon - Sewers", targetX: 3265, targetY: 1347 },
      { x: 5602, y: 2270, text: "Caladon Sewers", description: "", category: "waypoint", targetMapFilename: "Caladon - Sewers", targetX: 2148, targetY: 1103 },
      { x: 5742, y: 3327, text: "Caladon Sewers", description: "", category: "waypoint", targetMapFilename: "Caladon - Sewers", targetX: 2326, targetY: 1784 },
      
      // Shops
      { x: 6488, y: 101, text: "Wise Woman", sex: "female", race: "Human", level: 28, shopType: "Nomad", shopMarkup: 150, category: "shop" },
      { x: 5820, y: 1881, text: "Human Shopkeeper", sex: "male", race: "Human", level: 34, shopType: "Black market", shopMarkup: 100, category: "shop" },
      { x: 5136, y: 2155, text: "Magickal Smith", sex: "male", race: "Half-Elf", level: 37, shopType: "Magickal smith", shopMarkup: 100, category: "shop" },
      { x: 5330, y: 2137, text: "Magick Shop Clerk", sex: "female", race: "Elf", level: 30, shopType: "Magic shop", shopMarkup: 100, category: "shop" },
      { x: 4419, y: 2175, text: "Herbalist", sex: "female", race: "Half-Elf", level: 34, shopType: "Herbalist", shopMarkup: 90, category: "shop" },
      { x: 4797, y: 2365, text: "Dwarven Smith", sex: "male", race: "Dwarf", level: 34, shopType: "Blacksmith", shopMarkup: 105, category: "shop" },

      // Quests
      { x: 4333, y: 2610, text: "Kietzel Pierce (Caladon)", sex: "male", race: "Half-elf", level: 48, description: "Kietzel Pearce will train you as a Bow Master if you can find the Bow of Ecclesiates, said to be hidden in the ancient Ruins of Szabo.", category: ["quest", "npc"] },
      { x: 4836, y: 1928, text: "Lilian Misk", sex: "female", race: "Human", level: 21, description: "Lillian Misk wants an investigation into who disclosed the information concerning the ownership of ''Horror Among the Dark Elves'' by her late husband.", category: ["quest", "npc"] },
      { x: 6384, y: 1799, text: "Edward Willoughsby (Caladon)", sex: "male", description: "Edward Willoughsby wants you to convince King Farad's advisors that Caladon should join the Unified Kingdom.", category: ["quest", "npc"] },
      { x: 7225, y: 1852, text: "Chief Inspector Henderson", sex: "male", race: "Gnome", description: "Chief Inspector Henderson has charged you with the task of finding the Whytechurch Murderer.", category: ["quest", "npc"] },
      { x: 6838, y: 758, text: "Daniel McPherson", sex: "male", race: "Human", level: 47, description: "Daniel McPherson will train you as the Trap Master if you can survive the training maze beneath his house.", category: ["quest", "npc"] },
      { x: 6553, y: 605, text: "Adam Maxwell", sex: "male", race: "Human", level: 29, description: "Adam Maxwell, a member of the Thieves Underground, has asked you to steal the ancient book entitled ''Divinations and Magicks for the Adept Wizard'' from the home of Widower Misk in Caladon. // Adam Maxwell, a member of the Thieves Underground, has asked you to heist the priceless Necklace of Queen K'na S'ea from the museum in Caladon.", category: ["quest", "npc"] },
      { x: 5456, y: 2009, text: "Ryan Sanders", sex: "male", race: "Human", level: 17, description: "Ryan Sanders wants you to kill his father, Jonathan Sanders.  He will pay you 1,000 coin when the job is complete.", category: ["quest", "npc"] },
      { x: 5200, y: 1714, text: "Jonathan Sanders", sex: "male", race: "Human", level: 31, category: ["quest", "npc"], linkedLabels: ["Ryan Sanders"] },
      { x: 2182, y: 3781, text: "David Wit", sex: "male", race: "Human", level: 17, description: "David Wit would like you to discover what is killing his rabbits.", category: ["quest", "npc"] },
      { x: 1229, y: 2891, text: "Hieronymous Maxim", sex: "male", race: "Human", level: 45, description: "Find proof for Hieronymous Maxim that his heavier than air machines actually flew.", category: ["quest", "npc"] },
      { x: 6337, y: 739, text: "Arthur Tyron", sex: "male", race: "Human", level: 1, description: "Arthur Tyron needs you to find proof of half ogre breeding being done on ''Half Ogre Island''.", category: ["quest", "npc"] },
      { x: 3843, y: 1855, text: "Grave of Victor Misk", description: "Book purchased at the Roseborough Gift Shop.", category: ["quest", "chest"] },
      { x: 4732, y: 1870, text: "Locked Case", description: "Divinations and Magicks for the Adept Wizard", category: ["quest", "chest"], linkedLabels: ["Adam Maxwell"] },
      { x: 4743, y: 1964, text: "Display case", description: "The Book of Durin's Truth", category: ["quest", "chest"] },
      { x: 6262, y: 3558, text: "Bullors", sex: "male", race: "Dwarf", level: 20, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Assassinating King Farad (Part II)", questDescription: "Heinrich Jenks wants you to assassinate King Farad of Caladon.", target: "Wooden Crate"}
        ]
      },
      { x: 6238, y: 3508, text: "Wooden Crate", category: "quest",
        linkedLabels: [
          { questName: "Assassinating King Farad (Part III)", questDescription: "Heinrich Jenks wants you to assassinate King Farad of Caladon.", target: "Vernon"}
        ]
      },

      // Thief underground
      { x: 6565, y: 4413, text: "Chest Of Gold", category: "bounty" },
      { x: 3899, y: 2304, text: "Chest", inventory: ["Magick Necklace"], category: ["chest", "bounty"] },
      { x: 5510, y: 3451, text: "Crate", inventory: ["Post Bound For Tarant"], category: ["chest", "bounty"] },
      { x: 7424, y: 1805, text: "Cabinet", inventory: ["Ryan Marshall's Police Record"], category: ["chest", "bounty"] },
      { x: 5513, y: 598, text: "Safe", inventory: ["Necklace of Queen K'na S'ea"], category: ["chest", "quest"] },

      // Information
      { x: 4298, y: 1706, text: "Grave of Lawrence Brummond", category: ["information"] },
    ]
  },
  {
    filename: "ArcanumBase/Dernholm.jpg",
    displayName: "Dernholm",
    modGroup: "Cities",
    typemap: "local",
    defaultView: { x: 3141, y: 2792, zoom: 1 },
    labels: [
      // Waypoints
      { x: 5465, y: 1782, text: "Dernholm Castle", category: "waypoint", targetMapFilename: "Dernholm Castle"},
      { x: 499, y: 573, text: "Dernholm Pits", category: "waypoint", targetMapFilename: "Dernholm Pits", targetX: 341, targetY: 1317},
      { x: 6132, y: 1215, text: "Dernholm Pits", category: "waypoint", targetMapFilename: "Dernholm Pits", targetX: 2399, targetY: 1977},

      // Followers      
      { x: 4851, y: 2182, text: "Vollinger", sex: "male", category: "followers" },
      { x: 4273, y: 2736, text: "Jayna Stiles", sex: "female", race: "Half-elf", level: 6, portrait: "Textures/jaynestiles.gif", category: "followers" },

      // Shops
      { x: 3566, y: 2147, text: "Charles Dolan", shopType: "General Store", shopMarkup: 110, category: ["quest", "shop"],
        linkedLabels: [
          { questName: "Pickup Jongle's Package (Part II)", questDescription: "Jongle Dunne needs a package picked up from a man named Charles Dolan, a merchant in Dernholm.", target: "Jongle Dunne" }
        ]
      },
      { x: 4488, y: 2401, text: "Junk Dealer", sex: "male", shopType: "Junk Dealer", shopMarkup: 200, category: "shop" },
      { x: 4404, y: 1736, text: "Blacksmith", sex: "male", shopType: "Blacksmith", shopMarkup: 110, category: "shop" },

      // Quests
      { x: 3631, y: 1635, text: "Gladys", sex: "female", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Gladys' Ring (Part I)", questDescription: "Gladys wants you to find her ring, an old family heirloom.", target: "Archibald" }
        ]
      },
      { x: 5331, y: 2291, text: "Archibald", sex: "male", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Gladys' Ring (Part II)", questDescription: "Archibald will refuse to give you the ring. You can either steal it from it (or kill him), or ask for help from his son Bernard.", target: "Bernard" }
        ]
      },
      { x: 5608, y: 2574, text: "Bernard", sex: "male", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Gladys' Ring (Part III)", questDescription: "Bernard will explain to you about Gladys ''game''.", target: "Gladys" }
        ]
      },
      { x: 3794, y: 1939, text: "Lianna Pel Dar", sex: "female", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Tell Lianna Pel Dar about Maximillian (Part II)", questDescription: "Find Warren Pel Dar of Cumbria and tell him that Maximillian still lives on the Isle of Despair." },
          { questName: "Tell Lianna Pel Dar about Maximillian (Part II)", questDescription: "Find Warren Lianna Pel Dar of Cumbria and tell her that Maximillian still lives on the Isle of Despair." }
        ]
      },
      { x: 4426, y: 2084, text: "Sarah Toone", sex: "female", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Free the Ghost of Bessie Toone (Part II)", questDescription: "Sarah Toone wants you to help her regain ownership of the Bessie Toone Mine.", target: "Stanton" }
        ]
      },
      { x: 4926, y: 1505, text: "Sir Garrick Stout", sex: "male", description: "Melee Master", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Adkin Chambers and Sir Garrick Stout (Part II)", questDescription: "Find the Lady Druella, get her to agree to marry Sir Garrick Stout, and return her to him.", target: "Lady Druella" },
          { questName: "Adkin Chambers and Sir Garrick Stout (Part IV)", questDescription: "Take the healing potion to Adkin Chambers and restore his sight.  Also, tell him Lady Druella's location.", target: "Adkin Chambers" }       
        ]
      },
      { x: 4902, y: 1463, text: "Dudley Crosston", sex: "male", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Find Dudley Crosston (Part II)", questDescription: "Dudley Crosston doesn't want to go back to Kietzel Pierce. Go and report that to him.", target: "Kietzel Pierce (Caladon)" }
        ]
      },

      // Chests
      { x: 3870, y: 1373, text: "Wood Chest", inventory: ["Shovel"], category: "chest" },

      // Information
      { x: 6244, y: 1057, text: "Guard", description: "The only way to use this entrance is to insult the guards until they toss you in.", category: "information",  },
    ]
  },
  {
    filename: "ArcanumBase/IsleOfDespair.jpg",
    displayName: "Isle of Despair",
    modGroup: "Cities",
    typemap: "local",
    music: "music/isleofdespair.flac",
    defaultView: { x: 3593, y: 4071, zoom: 1 },
    labels: [
      // Followers
      { x: 2559, y: 3446, text: "Cynthia Boggs", sex: "female", race: "Human", level: 20, portrait: "Textures/cynthiaboggs.gif", category: ["quest", "followers"],
        linkedLabels: [
          { questName: "", questDescription: "Cynthia Boggs has asked you to help her escape from the encampment on the Isle of Despair.", target: "" }
        ]
       },
      { x: 1504, y: 3105, text: "Thorvald Two Stones", sex: "Male", race: "Dwarf", level: 23, portrait: "Textures/thorvald.gif", category: ["quest", "followers"],
        linkedLabels: [
          { questName: "", questDescription: "Investigate the Wheel Clan for further information about the Black Mountain Clan.", target: "" },
          { questName: "", questDescription: "Tell The Wheel Clan of Thorvald's incarceration on The Isle of Despair.", target: "" }
        ]
      },

      // Quests
      { x: 3813, y: 4071, text: "Captain Edward Teach (Isle of Despair)", sex: "male", description: "", category: ["quest", "npc"], linkedLabels: ["Captain Edward Teach (Ashbury)"] },
      { x: 2836, y: 3708, text: "Village Guard", sex: "male", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "The village guard on Isle of Despair wants you to kill the Sorcerous Beast.", target: "The Sorcerous Beast" }
        ]
      },
      { x: 2340, y: 3662, text: "Norian", sex: "male", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "Norian, on the Isle of Despair, wants you to deliver some goods to a man named Maximillian.", target: "Maximillian" }
        ]
      },
      { x: 2330, y: 3216, text: "Jones the Collector", sex: "male", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "Jones the Collector wants you to gather some objects from Shades Beach.  If he likes any of them, he will trade you for a strange weapon.", target: "" }
        ]
      },
      { x: 1836, y: 3281, text: "Ogdin", sex: "male", inventory: ["Key"], category: ["quest", "key", "npc"],
        linkedLabels: [
          { questName: "The Hand (Part II)", questDescription: "Ogdin wishes you to bring the book ''The Hand'' to him." }
        ]
      },
      { x: 2054, y: 3320, text: "Gorrin, Master of the Pit", sex: "male", description: "", category: ["quest", "npc"] },
      { x: 1954, y: 605, text: "The Sorcerous Beast", description: "", category: "quest" },

      // Information
      { x: 1121, y: 3570, text: "Window", description: "You can break this window to run away with Cynthia Boggs.", category: "information" },

      // Chests
      { x: 3891, y: 1901, text: "Wooden Chest", inventory: ["1800 coins (???)"], category: "chest" },
      { x: 1934, y: 539, text: "Loot", inventory: ["Baneful Gauntlets", "Charmed Ring"], category: "chest" },
    ]
  },
  {
    filename: "ArcanumBase/Qintarra.png",
    displayName: "Qintarra",
    modGroup: "Cities",
    typemap: "local",
    music: "music/qintarra.flac",
    defaultView: { x: 1938, y: 1431, zoom: 1 },
    labels: [
      // Waypoints
      { x: 3271, y: 1373, text: "Silver Lady Chambers", description: "", category: "waypoint" },

      // Followers
      { x: 2198, y: 1407, text: "Swyft", sex: "female", race: "Elf", level: 9, portrait: "Textures/swyft.gif", description: "Take Swyft to Tarant", category: ["quest", "followers"] },
      { x: 511, y: 1361, text: "Jormund", sex: "male", race: "Dwarf", level: 20, portrait: "Textures/jormund.gif", category: ["quest", "followers"] },
      { x: 3154, y: 1409, text: "Raven", sex: "female", race: "Elf", level: 32, portrait: "Textures/raven.gif", category: ["quest", "followers"], linkedLabels: ["William Bench"]},

      // Quests
      { x: 1717, y: 1360, text: "Winde", sex: "male", description: "Winde is Master of the Hunt. He'll ask you to find a missing hunter, and he'll mark the Bedokaan Village on your world map.", category: ["quest", "npc"] },
      { x: 2204, y: 633, text: "Wrath", description: "", category: ["quest", "npc"] },
      { x: 2135, y: 1905, text: "Fawn (aka Kal-N'driel)", sex: "female", description: "Master Healer.", shopType: "Magic Shop", shopMarkup: 100, category: ["shop", "information"] },
      { x: 1879, y: 2035, text: "Whysper", sex: "female", description: "", category: ["quest", "npc"] },
      { x: 3064, y: 1993, text: "Ellumyn", sex: "male", description: "Ellumyn will ask you to fetch him some mithril, which you can find at the Wheel Clan. When you return the metal to him, he'll give you Ellumyn's Bow (a faster version of the elven hunter's bow), and you'll also receive 1700 experience.", shopType: "Magic Shop", shopMarkup: 300, category: ["quest", "shop"] },

      // Shops
      { x: 3493, y: 1913, text: "Ivory", shopType: "Potions", shopMarkup: 300, description: "", category: ["quest", "shop"] },
      { x: 3455, y: 1878, text: "Sharpe", shopType: "Potions", shopMarkup: 300, description: "", category: "shop" },

    ]
  },
  {
    filename: "ArcanumBase/Roseborough.jpg",
    displayName: "Roseborough",
    modGroup: "Cities",
    typemap: "local",
    defaultView: { x: 5594, y: 2974, zoom: 1 },
    labels: [
      // Waypoints
      { x: 6354, y: 3069, text: "Roseborough Inn", category: "waypoint", targetMapFilename: "Roseborough Inn" },
      { x: 926, y: 658, text: "Mannox's Hole", category: "waypoint" },

      // Shops
      { x: 8431, y: 2866, text: "Gnome Shopkeeper", sex: "male", race: "Gnome", level: 24,  category: "shop", shopType: "General Store", shopMarkup: 110 },
      { x: 8794, y: 2047, text: "Blacksmith", sex: "male", race: "Human", level: 31, category: "shop", shopType: "Blacksmith", shopMarkup: 110, inventory: [{name:"Screaming Shield", tier:"magick"}, "Power Axe"] },

      // Shop signs
      { x: 8537, y: 2953, text: "Roseborough Gift Shoppe", description: "", category: ["information"] },

      // Quests
      { x: 5100, y: 2639, text: "Captain of the Roseborough Guard", sex: "male", description: "", category: ["quest", "npc"] },
      { x: 8123, y: 2049, text: "Mrs. R. L. Morgan", sex: "female", description: "Free Lockpick master quest", category: ["quest", "npc"] },
      { x: 8763, y: 3130, text: "Adkin Chambers (Caladon)", sex: "male", description: "", category: ["quest", "npc"] },
      { x: 8783, y: 3172, text: "Lady Druella (Caladon)", sex: "female", description: "", category: ["quest", "npc"] },
      { x: 4547, y: 1558, text: "Nasrudin (Roseborough)", sex: "male", description: "", category: ["quest", "npc"] },

      // NPCs
      { x: 7129, y: 1298, text: "Doctor Edmund Craig", sex: "male", description: "Backstab Master", category: "npc" },

      // Information
      { x: 4471, y: 1482, text: "Ring of Brodgar", description: "", category: "information" },
      { x: 6144, y: 3086, text: "Ancient stone", description: "This ancient stone is carved with what looks to be old runes and numbers.", category: "information" },

      // Chests
      { x: 6650, y: 1740, text: "A freshly filled grave", description: "", category: ["quest", "chest"], inventory: ["Horror Among the Dark Elves"] },
      { x: 7451, y: 2374, text: "Chest", inventory: ["Ring of Protection"], category: "chest" }
    ]
  },
  {
    filename: "ArcanumBase/ShroudedHills.jpg",
    displayName: "Shrouded Hills",
    modGroup: "Cities",
    typemap: "local",

    music: "music/towns.flac", // Good
    // background: None
    defaultView: { x: 8143, y: 2473, zoom: 1 }, // Good

    labels: [
      // Waypoints
      { x: 8430, y: 2265, text: "Shrouded Hills Panarii Temple", category: "waypoint", targetMapFilename: "Panarii Temple" },
      { x: 4707, y: 2378, text: "Bessie Toone Mine", category: "waypoint", targetMapFilename: "Bessie Toone Mine" },

      // Followers
      { x: 8262, y: 2598, text: "Sogg Mead Mug", sex: "male", race: "Half-ogre", level: 2, portrait: "Textures/soggmeadmug.gif", description: "Sogg can be recruited if you have 9 charisma.", category: "followers" },
      { x: 8013, y: 1883, text: "Doc Roberts", sex: "male", race: "Human", level: 30, portrait: "Textures/docroberts.gif", category: ["quest", "npc", "followers"],
        linkedLabels: [
          { questName: "Stop the bank robbery (Part I)", questDescription: "Doc Roberts wants you to help him stop an impending bank robbery.", target: "Bank robbers" }
        ]
      },

      // Shops
      { x: 7774, y: 2104, text: "Ristezze", sex: "male", race: "Human", level: 12, shopType: "Junk Dealer", shopMarkup: 200, category: ["shop", "quest", "key"], inventory: ["Key to Ristezze’s Bedroom"],
        linkedLabels: [
          { questName: "Get Information from the Schuylers", questDescription: "Get information from P. Schuyler & Sons about owner of strange ring." },
          { questName: "Find a camera or Bessie Toone paraphernalia", questDescription: "Ristezze the Importer wants you to find a camera OR some Bessie Toone paraphenalia. In return, he will give you information about P. Schuyler & Sons.", target: "Ristezze" },
        ]
      },
      { x: 7512, y: 2301, text: "Lloyd Gurloes", sex: "male", race: "Human", level: 22, shopType: "Blacksmith", shopMarkup: 110, category: ["shop", "quest", "key"], inventory: ["Key to Lloyd Gurloes’ backroom"],
        linkedLabels: [
          { questName: "Find some Pure Ore for Lloyd", questDescription: "Lloyd Gurloes wants you to obtain some pure ore for him.", target: "Lloyd Gurloes" }
        ]
      },
      { x: 7083, y: 1515, text: "Gaylin", sex: "female", race: "Elf", level: 24, shopType: "Herbalist", shopMarkup: 90, category: ["shop", "quest"],
        linkedLabels: [
          { questName: "Find the Amulet of N’Tala (Part I)", questDescription: "If, in my travels, I happen across the ancient elven amulet of N’Tala, Gaylin has offered to pay me a handsome reward for its return.", target: "Myrth" }
        ]
      },
      { x: 7089, y: 2359, text: "Gnome Shopkeeper", sex: "male", race: "Gnome", level: 18, shopType: "General Store", shopMarkup: 110, category: "shop" },
      { x: 9693, y: 1666, text: "Wise Woman", sex: "female", race: "Human", level: 22, shopType: "Nomad", shopMarkup: 150, inventory: [{name: "Witch's Dagger", tier: "magick"}], category: "shop" },

      // Quests
      { x: 7241, y: 2765, text: "Jongle Dunne", sex: "male", race: "Halfling", level: 13, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Destroy the Town's Steam Engine", questDescription: "Jongle Dunne wants you to destroy the town’s steam engine.", target: "Steam Machine" },
          { questName: "Pickup Jongle's Package (Part I)", questDescription: "Jongle Dunne needs a package picked up from a man named Charles Dolan, a merchant in Dernholm.", target: "Charles Dolan" }
        ]
      },
      { x: 8172, y: 2352, text: "Constable Owens", sex: "male", race: "Human", level: 5, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "The Thieves and the Bridge (Part I)", questDescription: "Constable Owens needs you to remove the thieves from the bridge.", target: "Lukan the Witless" },
          { questName: "Fix the Town's Steam Engine", questDescription: "Constable Owens wants you to fix the town’s steam engine.", target: "Barrel (Sprocket)" }
        ]
      },
      { x: 10909, y: 1232, text: "Lukan the Witless", sex: "male", race: "Human", level: 3, category: ["quest", "key", "npc"],
        linkedLabels: [
          { questName: "The Thieves and the Bridge (Part II)", questDescription: "In order to join the thieves, you must destroy the construction materials for the new bridge.", target: "Bridge materials" }
        ]
      },
      { x: 10264, y: 2708, text: "Bridge materials", category: "quest", 
        linkedLabels: [
          { questName: "The Thieves and the Bridge (Part III)", questDescription: "Destroy the bridge materials and return to Lukan.", target:"Lukan the Witless" }
        ]
      },
      { x: 8278, y: 2640, text: "Jacob Bens", sex: "male", race: "Half-Orc", level: 5, inventory: ["Note (Safe Combination)"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Rob the Bank (Part I)", questDescription: "Jacob Bens in Shrouded Hills wants you to steal the local mining company’s payroll from the bank’s safe.", target: "Combination safe" }
        ]
      },
      { x: 7768, y: 2508, text: "Bank robbers", category: "quest",
        linkedLabels: [
          { questName: "Stop the bank robbery (Part II)", questDescription: "Kill the three bank robbers and return to Doc Roberts for your reward.", target: "Doc Roberts" }
        ]
      },
      { x: 5022, y: 2892, text: "Percival Toone", sex: "male", race: "Human", level: 12, category: ["quest", "npc"], 
        linkedLabels: [
          { questName: "Free the Ghost of Bessie Toone", questDescription: "Percival Toone wants you to find a way to free the ghost of his mother.", target: "Bessie Toone" }
        ]
      },
      { x: 8851, y: 2680, text: "Joachim’s Note to Virgil", category: "quest",
        linkedLabels: [
          { questName: "Elder Joachim’s paper trail (Part II)", questDescription: "", target: "Telegraph Operator" }
        ]
      },
      { x: 7733, y: 2386, text: "Combination safe", description: "This looks to be a combination safe. There is no keyhole.", category: ["quest", "chest"],
        linkedLabels: [
          { questName: "Rob the Bank (Part II)", questDescription: "Return to Jacob Bens.", target: "Jacob Bens" }
        ]
      },

      // Chests
      { x: 7732, y: 2228, text: "Barrel", portrait: "Textures/chest.png", inventory: ["Ristezze's File Cabinet Key"], category: "chest" },
      { x: 7611, y: 2040, text: "Cabinet", portrait: "Textures/chest.png", inventory: ["Telegram", "Ristezze's Map"], category: "chest" },

      // Information
      { x: 1431, y: 2662, text: "Mysterious barrels", description: "These barrels are not the fruit of a random terrain generation: they were deliberately placed here. None can be open, and no script are attached to them in WorldEd.", category: "information" },
      { x: 4139, y: 1985, text: "Four wolves and a bunny", description: "Behind the Bessie Toone Mine are four wolves and a bunny.", category: "information" },
      { x: 7908, y: 903, text: "Three wolves", category: "information" },
      { x: 7757, y: 2465, text: "Bank Teller", sex: "female", race: "human", level: 8, inventory: ["Shrouded Hills Bank Key"], category: ["key", "npc"] },
    ]
  },
  {
    filename: "ArcanumBase/Stillwater.jpg",
    displayName: "Stillwater",
    modGroup: "Cities",
    typemap: "local",
    music: "music/villages.flac",
    defaultView: { x: 2816, y: 2407, zoom: 1 },
    labels: [
      // Waypoints
      { x: 1681, y: 633, text: "Drogs Cave", category: "waypoint", targetMapFilename: "Drogs Cave" },
      { x: 4211, y: 1759, text: "Stillwater Giants Cave", category: "waypoint", targetMapFilename: "Stillwater Giants Cave" },

      // Shops
      { x: 1978, y: 3831, text: "General Store Clerk", sex: "male", race: "Gnome", level: 29, category: "shop", shopType: "General Store", shopMarkup: 110 },
      { x: 2278, y: 3130, text: "Richard Leeks", sex: "male", race: "Human", level: 35, category: ["shop", "quest"], shopType: "Blacksmith", shopMarkup: 110, inventory: [{name:"2x Stillwater Blade", tier:"magick"}, "Tempered Shield"],
        linkedLabels: [
          { questName: "Rescue Cyrus (Part I)", questDescription: "Richard Leeks, the blacksmith in Stillwater, wants you to find his friend Cyrus.", target: "Puddles of blood and footprints" }
        ]
      },

      // Quests
      //// Find the Stolen Idol
      { x: 1298, y: 2918, text: "Brigitte", sex: "female", race: "Human", level: 25, description: "", category: ["npc", "quest"],
        linkedLabels: [
          { questName: "Find the Stolen Idol (Part I)", questDescription: "Brigitte, Priestess of Stillwater, has entrusted you with the task of finding the stolen idol of their goddess, Geshtianna.", target: "Marley" }
        ]
      },
      { x: 3777, y: 3372, text: "Marley", sex: "male", race: "Human", level: 35, category: ["npc", "quest", "key"],
        linkedLabels: [
          { questName: "Find the Stolen Idol (Part II)", questDescription: "Brigitte, Priestess of Stillwater, has entrusted you with the task of finding the stolen idol of their goddess, Geshtianna.", target: "Big Wooden Object" }
        ]
      },
      { x: 3769, y: 3316, text: "Big Wooden Object", inventory: ["Statue of the Goddess Geshtianna"], category: ["quest", "chest", "key"],
        linkedLabels: [
          { questName: "Find the Stolen Idol (Part III)", questDescription: "Brigitte, Priestess of Stillwater, has entrusted you with the task of finding the stolen idol of their goddess, Geshtianna.", target: "Big Wooden Object" }
        ]
      },

      //// Rescue Cyrus
      { x: 721, y: 2002, text: "Puddles of blood and footprints", description: "", category: "quest", 
        linkedLabels: [
          { questName: "Rescue Cyrus (Part II)", questDescription: "Richard Leeks, the blacksmith in Stillwater, wants you to find his friend Cyrus.", target: "Cyrus" }
        ]
      },

      { x: 2389, y: 3537, text: "Innkeeper (Stillwater)", sex: "male", race: "Gnome", level: 35, category: ["quest", "npc"], 
        linkedLabels: [
          { questName: "Elder Joachim’s paper trail (III)", questDescription: "Elder Joachim left a telegram at the inn of Stillwater.", target: "" }
        ]
      },
             
      { x: 2271, y: 2586, text: "Myrth", sex: "male", race: "Elf", level: 20, inventory:[{name:"Amulet of N’Tala", tier:"magick"}], category: ["npc", "quest"],
        linkedLabels: [
          { questName: "The Stillwater Giant (Part I)", questDescription: "Myrth, an elf residing in Stillwater, instructs you to perform a rite of passage, killing a Stillwater Giant and bringing its pelt to him. He directs you to Stanley Xavier Hippington, living directly North from his house.", target: "Stanley Xavier Hippington" },
          { questName: "Find the Amulet of N’Tala (Part II)", questDescription: "The amulet can be obtained from Myrth either by stealing it or by taking it from his corpse after killing him.", target: "Gaylin" }
        ]
      },
      { x: 2719, y: 1753, text: "Stanley Xavier Hippington", sex: "male", race: "Human", level: 29, category: ["npc", "quest"],
        linkedLabels: [
          { questName: "The Stillwater Giant (Part II)", questDescription: "Upon talking to Stanley Xavier Hippington, a cryptozoologist, he gives you a Stillwater trap and a bottle of Stillwater Giant scent to use to capture a Stillwater Giant, residing in a cave nearby.", target: "The Stillwater Giant (Part III)" }
        ]
      },
      { x: 2627, y: 2829, text: "Gildor Nightwalk", sex: "male", race: "Halfling", level: 31, inventory: ["Ring of Concealment", "Tannon Wroughtbringer's Journal"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Retrieving the Ruby (Part I)", questDescription: "Gildor Nightwalk will reward you with 1500 coin, if you are able pass the beasts of death and retrieve the great ruby for him.", target: "Altar (Ruby Glade)" }
        ]
      },
      { x: 784, y: 3387, text: "Adkin Chambers", sex: "male", race: "Human", level: 48, description: "Dodge Master", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Adkin & Stout (Part I)", questDescription: "Adkin Chambers, the Dodge Master, wants you to kill Sir Garrick Stout, the Melee Master, and bring his eyes as proof that you have completed the task.", target: "Sir Garrick Stout" }
        ]
      },

      // Others
      { x: 1237, y: 2882, text: "Altar to Geshtianna", category: "altar" },
      { x: 1545, y: 2837, text: "Passion Root", description: "", category: "information", linkedLabels:["Altar to Geshtianna"]}
    ],
  },
  {
    filename: "ArcanumBase/Tarant.png",
    displayName: "Tarant",
    modGroup: "Cities",
    typemap: "local",
    music: "music/tarant.flac",
    defaultView: { x: 3338, y: 2537, zoom: 1 },
    labels: [
      // Waypoints
      { x: 5442, y: 1502, text: "Bates Mansion", description: "", category: "waypoint" },
      { x: 4947, y: 1428, text: "Hall of Records", description: "", category: "waypoint" },
      { x: 3780, y: 1940, text: "P. Schuyler & Sons (Level I)", description: "", category: "waypoint" },
      { x: 1812, y: 2706, text: "Tarant Old Sewers", description: "", category: "waypoint", targetMapFilename: "Tarant Old Sewers" },
      { x: 3081, y: 2970, text: "Tarant Old Sewers", description: "", category: "waypoint", targetMapFilename: "Tarant Old Sewers" },
      { x: 5443, y: 2279, text: "Tarant Old Sewers", description: "", category: "waypoint", targetMapFilename: "Tarant Old Sewers" },
      { x: 5066, y: 3131, text: "Tarant Old Sewers", description: "", category: "waypoint", targetMapFilename: "Tarant Old Sewers", targetX: 3805, targetY: 2237 },
      { x: 3302, y: 2074, text: "Tarant New Sewers", description: "", category: "waypoint" },
      { x: 3846, y: 2298, text: "Tarant New Sewers", description: "", category: "waypoint" },
      { x: 3976, y: 1990, text: "Tarant New Sewers", description: "", category: "waypoint" },
      { x: 3871, y: 1649, text: "Tarant New Sewers", description: "", category: "waypoint" },
      { x: 2949, y: 2014, text: "Bates Tunnel", description: "", category: "waypoint", targetMapFilename: "Bates Tunnel" },
      { x: 3417, y: 2459, text: "Station A: West Garillon Bridge", description: "", category: "waypoint" },
      { x: 3598, y: 1728, text: "Station B: Vermillion Station", description: "", category: "waypoint" },
      { x: 4499, y: 1279, text: "Station C: Tarant University", description: "", category: "waypoint" },
      { x: 6055, y: 2005, text: "Station D: Warehouse District", description: "", category: "waypoint" },
      { x: 5111, y: 2121, text: "Station E: Commercial District", description: "", category: "waypoint" },
      { x: 4350, y: 2624, text: "Station F: Tarantian Docks", description: "", category: "waypoint" },
      { x: 4459, y: 1911, text: "Station G: Kensington Park", description: "", category: "waypoint" },
      { x: 2309, y: 3003, text: "Station H: The Boil", description: "", category: "waypoint" },

      // Followers
      { x: 3800, y: 2093, text: "Magnus", sex: "Male", race: "Dwarf", level: 8, portrait: "Textures/magnus.gif", inventory:["Magnus' Bracelet", "Roan's Almanac of All Things Dwarven", "Mysterious Dwarven Gauntlets"], category: ["quest", "npc", "followers"] },
      { x: 4766, y: 1656, text: "Gar", sex: "Male", race: "Human", level: 10, portrait: "Textures/gar.gif", category: "followers" },
      { x: 3223, y: 2221, text: "Perriman Smythe", sex: "Male", race: "Human", level: 25, portrait: "Textures/perrimansmythe.gif", category: "followers" },
      { x: 2469, y: 2829, text: "Sebastian", sex: "Male", race: "Human", level: 30, portrait: "Textures/sebastian.gif", category: ["quest", "followers"],
        linkedLabels: [
          { questName: "", questDescription: "Sebastian wants you to kill Pollock.  In return, he might aid you in your own quest.", target: "Pollock" },
          { questName: "", questDescription: "Sebastian wants you to kill Darian Maug. In return, he might aid you in your own quest.", target: "Darian Maug" }
        ]
      },

      // Shops
      { x: 3546, y: 2326, text: "General Store Clerk", sex: "male", race: "Human", level: 27, shopType: "General Store", shopMarkup: 100, inventory: ["Helmet of Strength"], category: "shop" },
      { x: 3688, y: 2254, text: "Tailor", sex: "", race: "Elf", level: 17, shopType: "Tailor", shopMarkup: 90, inventory: [{name: "Negociator's Ring", tier: "magick"}], category: "shop" },
      { x: 3985, y: 2094, text: "Inventor", sex: "male", race: "Human", level: 37, shopType: "Inventor", shopMarkup: 100, category: "shop" },
      { x: 4054, y: 2060, text: "Herbalist", sex: "female", race: "Human", level: 23, shopType: "Herbalist", shopMarkup: 90, category: "shop" },
      { x: 3932, y: 2486, text: "Junk Dealer", sex: "male", race: "Human", level: 30, shopType: "Junk Dealer", shopMarkup: 200, category: "shop" },
      { x: 3905, y: 1863, text: "Quality Blacksmith", sex: "male", race: "Dwarf", level: 33, shopType: "Blacksmith", shopMarkup: 100, category: "shop" },
      { x: 3782, y: 1797, text: "Gun Smith", sex: "male", race: "Human", level: 31, shopType: "Gun Store", shopMarkup: 100, category: "shop" },
      { x: 2297, y: 2808, text: "Mellin Bungerton", sex: "male", race: "Halfling", level: 18, shopType: "Junk Dealer", shopMarkup: 300, category: "shop" },
      { x: 4523, y: 1634, text: "Magick Shop Clerk", sex: "male", race: "Elf", level: 38, shopType: "Magick Shop", shopMarkup: 100, inventory: ["Magick Shoppe Key. Tarant", {name: "Blessed Bow", tier: "magick"}, {name: "Magick Robes", tier: "magick"}], category: ["shop", "key"] },
      { x: 4405, y: 1556, text: "Magickal Smith", sex: "male", race: "Human", level: 34, shopType: "Magickal Smith", inventory: [{name: "Screaming Scimtar", tier: "magick"}], shopMarkup: 100, category: ["shop"] },
      { x: 4598, y: 1524, text: "Magick Shop Clerk", sex: "female", race: "Elf", level: 42, shopType: "Magick Shop", shopMarkup: 100, inventory: ["Magick Shoppe Key. Tarant", {name: "Mage's Staff", tier: "magick"}, {name: "Ashen Robes", tier: "magick"}, {name: "Scroll of Teleportation", tier: "magick"}], category: ["shop", "key"] },
      { x: 4570, y: 2347, text: "Black Market", sex: "male", category: "shop" },
      { x: 5783, y: 1666, text: "Factory Foreman", sex: "male", shopType: "Inventor", shopMarkup: 100, category: "shop" },
      { x: 5628, y: 2752, text: "Wise Woman", sex: "female", shopType: "Nomad", shopMarkup: 150, category: "shop" },

      // Shop signs
      // Castleton’s General Store
      // Wallow’s Quality Armour
      // Smythe’s Gun Shoppe


      // Quests
      { x: 5150, y: 1959, text: "Cedric Appleby", sex: "male", race: "Human", inventory:["Dynamite", "Bates Mausoleum Key"], category: ["quest", "npc", "key"],
        linkedLabels: [
          { questName: "Sabotage (Part I)", questDescription: "Cedric Appleby will gain you access into Bates' house if you destroy Bates' new steam engine prototype housed in Bates' factory. The factory is located at the end of Ten Hands Alley.", target: "Metal Object" },
          { questName: "", questDescription: "Steal any incriminating evidence from Bates to help Appleby expose him", target: "" },
        ]
      },
      { x: 6099, y: 1465, text: "Metal Object", category: "quest",
        linkedLabels: [
          { questName: "Sabotage (Part II)", questDescription: "Cedric Appleby will gain you access into Bates' house if you destroy Bates' new steam engine prototype housed in Bates' factory. The factory is located at the end of Ten Hands Alley.", target: "Cedric Appleby" }
        ]
      },
      { x: 5178, y: 1601, text: "Capt. of Bates' Guard", sex: "male", race: "Human", level: 40, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "Devise a solution to Bates' saboteur difficulties at his factory to gain an audience with him. The factory is located at the end of Ten Hands Alley, and the saboteurs are reputed to strike sometime after midnite.", target: "Saboteurs" }
        ]
      },
      { x: 3225, y: 1865, text: "Dark Elf Noble", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "A strange man in the Wellington wants you to deliver a note to 36 Low Dervish Row.", target: "" }
        ]
      },
      { x: 3491, y: 2424, text: "Cassandra Pettibone", sex: "female", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Steal the Elven Funerary Stone (Part I)", questDescription: "Mrs. Cassandra Pettibone wants you to steal the elven funerary stone from the newly unearthed elven catacombs.", target: "" }
        ]
      },
      { x: 3523, y: 2181, text: "Evelyn Garringsburg", sex: "female", race: "Human", level: 7, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Find the Stolen Painting", questDescription: "Mrs. Evelyn Garringsburg wants you to find her stolen painting, the famed ''Kerghan and Persephone'' by Pizarro.", target: "Wood Chest (Kerghan and Persephone)" }
        ]
      },
      { x: 6112, y: 1814, text: "Wood Chest (Kerghan and Persephone)", inventory: ["Kerghan and Persephone"], category: ["key", "quest", "chest"] },
      { x: 4160, y: 1635, text: "Delores Beston", sex: "female", race: "Human", level: 6, category: ["npc", "quest"],
        linkedLabels: [
          { questName: "The Crystal Ball (Part I)", questDescription: "Delores Beston wants you to steal Madame Toussaude's crystal ball.", target: "Madame Toussaude" }
        ]
      },
      { x: 4340, y: 2454, text: "Madame Toussaude", sex: "female", category: ["npc", "quest"],
        linkedLabels: [
          { questName: "The Crystal Ball (Part II)", questDescription: "Madame Toussaude wants you to deliver her crystal ball to Delores Beston.", target: "Delores Beston" }
        ]
      },
      { x: 5380, y: 2563, text: "Thaddeus Mynor", sex: "male", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Thieves Underground (Part II)", questDescription: "Thaddeus Mynor wants you to retrieve the map of the Tarantian Sewers.", target: "" },
          { questName: "Steal the Golden Idol of Kree (Part I)", questDescription: "Thaddeus Mynor wants you to steal the golden idol of the barbarians of Kree.", target: "Chest (Sewers map)" },
        ]
      },
      { x: 4934, y: 1280, text: "Chest", inventory: ["Map of Tarantian Sewers"], category: ["quest", "chest", "key"] },
      { x: 3788, y: 2333, text: "Matthew Jameson", sex: "male", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Retrieve Matthew's Wedding Ring (Part I)", questDescription: "Matthew Jameson wants you to retrieve his wedding ring from the sewers.", target: "" }
        ]
      },
      { x: 5234, y: 1065, text: "Benjamin Gershwin", sex: "male", race: "Gnome", level: 17, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "Benjamin Gershwin, the phrenologist, wants you to bring him the skulls of the Ren'ar siamese twins.", target: "" }
        ]
      },
      { x: 4668, y: 2647, text: "Simon Plough", sex: "male", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Rid Mr. Plough’s Warehouses of Rats", questDescription: "Mr. Plough wants you to rid his warehouses, near the docks in Tarant, of rats.", target: "Warehouse rats" }
        ]
      },
      { x: 4357, y: 2003, text: "Sammie White", sex: "male", race: "Halfling", level: 40, description: "Pickpocket master", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "You are to go the middle of Tarant and make a fool of yourself by running around in your underwear." }
        ]
      },
      { x: 4242, y: 1687, text: "Frederick T. Fitzgerald", sex: "male", race: "Gnome", level: 48, description: "Master of Spotting Traps", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "F. Fitzgerald, the master of Spotting Traps, wants you to get the staff of K'an T'au from the castle of S'nel N'fa. In exchange, he will give you master training.", target: "" }
        ]
      },
      { x: 3814, y: 2170, text: "J. M. Morat", sex: "male", description: "Haggle master", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "J. M. Morat, the Haggle Master, wants 10,000 coin in exchange for Master training."}
        ]
      },
      { x: 3194, y: 1930, text: "Gurin Rockharrow", sex: "male", description: "Master of Gambling", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "Gurin Rockharrow has agreed to tutor you in the skills of gambling."}
        ]
      },
      { x: 4199, y: 2406, text: "Madam Lil", sex: "female", category: ["quest", "npc", "bounty"],
        linkedLabels: [
          { questName: "Retrieve Cassie's necklace (Part I)", questDescription: "Madam Lil would like you to retrieve Cassie's necklace from Mr. Mooreland's house at 46 Devonshire Way.", target: "Laura"},
          { questName: "", questDescription: "Mr. Langley owes 400 coin to Madam Lil.  Collect it and return it to her.  He is the doorman at The Bridesdale Inn.", target: "Mr. Langley"},
          { questName: "", questDescription: "Madam Lil would like you to deliver a gift to Mrs. Halster at 48 Devonshire Way.  You must tell her it is from her husband.", target: "Mrs. Regina Halster"},
          { questName: "", questDescription: "Madam Lil would like you to locate a Medallion of Beauty for her."},
          { questName: "", questDescription: "Madam Lil would like you to ''service'' Mr. Franklin.  He lives at the corner of Vermillion and Grimson.", target: "Mr. Franklin"}
        ]
      },
      { x: 3562, y: 2070, text: "Laura", sex: "female", race: "Human", level: 6, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Retrieve Cassie's necklace (Part II)", questDescription: "Return Cassie's necklace to Madam Lil", target: "Madam Lil"}
        ]
      },



      { x: 3499, y: 1906, text: "Mr. Langley", sex: "male", race: "Halfling", level: 8, category: ["quest", "npc"] },
      { x: 3455, y: 2016, text: "Mrs. Regina Halster", sex: "female", race: "Human", level: 5, category: ["quest", "npc"] },
      { x: 3635, y: 1897, text: "Mr. Franklin", sex: "male", description: "Service Mr. Franklin", inventory: ["Ring Of Virility"], category: ["quest", "npc", "bounty"] },
      { x: 4479, y: 1944, text: "Thom Grak", sex: "male", race: "Half-Orc", level: 7, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "Thom Grak, a rather jovial half orc, has asked me to find Sir Matt de Cesare for him.", target: "Matt de Cesare"}
        ]
      },
      { x: 3746, y: 1663, text: "Jared", sex: "male", race: "Human", level: 28, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Jared & Wilhemina (Part I)", questDescription: "Discover the fate of Wilhemina, girlfriend of Jared the guard", target: "Wilhemina Carpenter"},
          { questName: "Jared & Wilhemina (Part III)", questDescription: "Jared the guard wants you to go to the stonecutter at the corner of Mulligan Bone Alley and East End Ave. in Tarant to commission a tombstone for his beloved Wilhemina.", target: "Dwarf City Dweller (Stonecutter)"}
        ]
      },
      { x: 5980, y: 1917, text: "Dwarf City Dweller (Stonecutter)", sex: "male", race: "Dwarf", level: 42, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Jared & Wilhemina (Part IV)", questDescription: "After you spoke with the stonecutter, return to Jared.", target: "Jared"}
        ]
      },
      { x: 4079, y: 1589, text: "Mr. Victor Wright", sex: "male", race: "Human", level: 15, description: "You can tell Victor Wright about the zeppelin crash, and he'll pay you 500 (or 800) gold for it. Telling your story makes you better known, resulting in gifts from random NPCs, but makes it impossible to talk your way out of fights with assassins on the overworld map.", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "Mr. Wright, Editor of the Tarantian, would like you to deliver a payment note to Mrs. Halster who lives on the corner of Devonshire and Vermillion.", target: "Mrs. Regina Halster"}
        ]
      },
      { x: 5596, y: 1842, text: "Captain Wheeler", sex: "male", race: "Human", level: 45, inventory: ["Key to the factory", "Levered Machine Gun"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "Capt. Wheeler of the Tarantian Guard wants you to kill Donn Throgg to end the orc uprising.", target: "Donn Throgg"},
          { questName: "", questDescription: "Capt. Wheeler of the Tarantian Guard wants you to convince Donn Throgg to surrender to end the orc uprising.", target: "Donn Throgg"}
        ]
      },
      { x: 5499, y: 1805, text: "Mr. Babcock", sex: "male", race: "Gnome", level: 20, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "Mr. Babcock wants you to convince Donn Throgg to slip out of the factory unseen, thereby ending the orc uprising, so that he may become the union representative for the orcs of Tarant.", target: "Donn Throgg"}
        ]
      },
      { x: 5782, y: 1631, text: "Donn Throgg", sex: "male", race: "Half-Orc", level: 35, category: ["quest", "npc"] },
      { x: 3256, y: 2006, text: "Matt de Cesare", sex: "male", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "Sir M. de Cesare wants you to find the skulls of the Ren'ar siamese twins and bring them to him. He believes they may be in a warehouse in Tarant somewhere.", target: ""},
          { questName: "", questDescription: "You need to find Arthur Tyron and bring him the siamese twin skulls as proof of a larger conspiracy. His last known address was in Black Root.", target: "Tyron's Note"}
        ]
      },
      { x: 3264, y: 2193, text: "Edward Willoughsby", sex: "male", race: "Gnome", level: 45, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Negotiations with Caladon (Part I)", questDescription:"Speak to Mr Willoughsby as he leaves his home at 19 Pickwick Alley in Tarant after you have returned from your first visit to Qintarra. He will tell you to meet him at City Hall.", target: "Edward Willoughsby (II)"}
        ]
      },
      { x: 4989, y: 1321, text: "Edward Willoughsby (II)", sex: "male", race: "Gnome", level: 45, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Negotiations with Caladon (Part II)", questDescription:"Edward Willoughsby wants you to convince King Farad's advisors that Caladon should join the Unified Kingdom.", target: ""}
        ]
      },
      { x: 4889, y: 1383, text: "Heinrich Jenks", sex: "male", race: "Human", level: 7, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Assassinating King Farad (Part I)", questDescription: "Heinrich Jenks wants you to assassinate King Farad of Caladon.", target: "Bullors"}
        ]
      },
      { x: 2538, y: 2781, text: "Muggs", sex: "male", race: "Dwarf", level: 25, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Collect from Larrs (Part I)", questDescription: "Muggs would like for you to collect 200 gold from a Mr. Larrs in the Boil. If Larrs is unable to pay, you are to kill him.", target: "Larrs"}
        ]
      },
      { x: 2408, y: 2792, text: "Miranda Tears", sex: "female", race: "Human", level: 30, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Steal a Crate of Ale", questDescription: "Miranda Tears wants you to take a crate of ale from the Clan Maug's warehouse.", target: "Crate of Ale"}
        ]
      },
      { x: 1624, y: 2778, text: "Crate of Ale", category: "quest" },
      { x: 2456, y: 2753, text: "Caleb Malloy", sex: "male", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Caleb Malloy's Whiskey (Part I)", questDescription: "Caleb Malloy wants you to pick up his shipment of whiskey.", target: "Biggs"}
        ]
      },
      { x: 3122, y: 2640, text: "Biggs", sex: "male", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Caleb Malloy's Whiskey (Part II)", questDescription: "As soon as you receive the whiskey, you will be attacked by Malek Nebb and his gang. Give the whiskey to Caleb for your reward.", target: "Caleb Malloy"}
        ]
      },
      { x: 1639, y: 2631, text: "Darian Maug", sex: "male", race: "Human", level: 40, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "Darian Maug has contracted you to kill Pollock.", target: "Pollock"}
        ]
      },
      { x: 3128, y: 3009, text: "Pollock", sex: "male", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "Pollock wants you to kill Darian Maug.", target: "Darian Maug"}
        ]
      },
      { x: 1961, y: 2671, text: "Milo", sex: "male", race: "Gnome", level: 30, description: "", category: ["quest", "npc"],
        linkedLabels: [
          {questName: "Kill Treat (Part I)", questDescription: "Milo wants you to kill Treat, a Pollock gang member, for messing with his girl.", target: "Treat"}
        ]
      },
      { x: 2669, y: 3167, text: "Treat", sex: "male", description: "", category: ["quest", "npc"],
        linkedLabels: [
          {questName: "Kill Treat (Part II)", questDescription: "Milo wants you to kill Treat, a Pollock gang member, for messing with his girl.", target: "Milo"}
        ]
      },
      { x: 1886, y: 2861, text: "Larrs", sex: "male", description: "", category: ["quest", "npc"],
        linkedLabels: [
          {questName: "Collect from Larrs (Part II)", questDescription: "Muggs would like for you to collect 200 gold from a Mr. Larrs in the Boil. If Larrs is unable to pay, you are to kill him.", target: "Muggs"}
        ]
      },
      { x: 3913, y: 2132, text: "Telegraph Operator", sex: "male", category: "quest", inventory: ["Telegram"],
        linkedLabels: [
          {questName: "Elder Joachim’s paper trail (Part III)", target: "Innkeeper (Stillwater)"}
        ]
      },
      { x: 5267, y: 2200, text: "Stanton", sex: "male", description: "", category: ["quest", "npc"],
        linkedLabels: [
          {questName: "", questDescription: "", target: "Sarah Toone"}
        ]
      },

      { x: 6109, y: 1545, text: "Saboteurs", description: "", category: ["quest", "npc"]},
      { x: 3795, y: 2011, text: "James Kingsford", sex: "male", description: "", category: ["quest", "key", "npc"] },
      { x: 4001, y: 1367, text: "Wendell Wellington", sex: "male", race: "Gnome", level: 10, category: ["quest", "npc"] },
      { x: 4870, y: 1664, text: "H. T. Parnell", sex: "male", race: "Human", level: 19, inventory: ["Key for Stillwater Giant Case"], category: ["quest", "npc", "key"] },
      { x: 4821, y: 1615, text: "Stillwater Giant display case", inventory: ["Stillwater Giant Pelt"], category: ["quest", "chest", "key"] },
      { x: 4676, y: 1240, text: "Ancient iron chest", inventory: ["Map: The Place of Lost Voices", "3x Ancient iron drums"], category: ["quest", "chest"] },

      // Thief underground
      { x: 4482, y: 2260, text: "Chest", inventory: ["Cassie's Jewellery"], category: ["chest", "bounty"] },
      { x: 5273, y: 1874, text: "Safe", inventory: ["Derian Ka Sword"], category: ["chest", "bounty"] },
      { x: 3386, y: 2220, text: "Chest", inventory: ["Enchanted Looking Glass"], category: ["chest", "bounty"] },
      { x: 4682, y: 1711, text: "Wood Chest", inventory: ["Will-O-The-Wisp Essence"], category: ["chest", "bounty"] },
      { x: 4275, y: 2987, text: "Barrel", inventory: ["Flawless Dwarven Rubies"], category: ["chest", "bounty"] },
      { x: 6470, y: 1675, text: "Crates", inventory: ["Heron Device"], category: ["chest", "bounty"] },
      { x: 5145, y: 1805, text: "Chest", inventory: ["Jewel Of Hebe"], category: ["chest", "bounty"] },
      { x: 4675, y: 2230, text: "Vagrant", inventory: ["Lucky Medallion"], category: ["npc", "bounty"] },
      { x: 4746, y: 1137, text: "Chest", inventory: ["Lethe Wyvern Venom"], category: ["chest", "bounty"] },
      { x: 3452, y: 1974, text: "Cabinet", inventory: ["Napha Water"], category: ["chest", "bounty"] },
      { x: 6193, y: 1636, text: "Wood Chest", inventory: ["Plans For Schreck's Multi-barrel Pistol"], category: ["chest", "bounty"] },
      { x: 4270, y: 1656, text: "Chest", inventory: ["Potion Of Dark Power"], category: ["chest", "bounty"] },

      // Other labels
      { x: 6156, y: 1855, text: "Half Ogre City Dweller", sex: "male", race: "Half-Ogre", level: 14, inventory: ["Key to the Back Room in 57 Mulligan Bone"], category: ["key", "npc"] },
      { x: 6222, y: 1781, text: "Human Guard", sex: "male", race: "Human", level: 42, inventory: ["Key to the Warehouse of the Small"], category: ["key", "npc"] },
    ]
  },
  {
    filename: "ArcanumBase/TheBedokaanVillage.jpg",
    displayName: "The Bedokaan Village",
    modGroup: "Cities",
    typemap: "local",
    labels: [
      { x: 2154, y: 599, text: "Kan Kerai", description: "", category: ["quest", "npc"] },
      { x: 2226, y: 979, text: "Waromon", description: "", category: "followers", linkedLabels: ["Waromon If you handle Kan Kerai's quest diplomatically", "Waromon might become available to join your group."] },
      { x: 1244, y: 880, text: "Elf", description: "1 - Pit There is an elf villager stuck in the pit. This is the elf Winde at Qintarra might have asked you to rescue.", category: "quest" },
      { x: 1787, y: 1051, text: "Altar to Makaal", description: "", category: "altar" },
      { x: 1723, y: 292, text: "Heartstone (1/5)", description: "", category: "information" },
      { x: 2322, y: 159, text: "Heartstone (2/5)", description: "", category: "information" },
      { x: 2834, y: 299, text: "Heartstone (3/5)", description: "", category: "information" },
      { x: 2570, y: 833, text: "Heartstone (4/5)", description: "", category: "information" },
      { x: 1260, y: 702, text: "Heartstone (5/5)", description: "", category: "information" },
    ]
  },
  {
    filename: "ArcanumBase/TsenAng.png",
    displayName: "T’sen-Ang",
    modGroup: "Cities",
    typemap: "local",
    defaultView: { x: 2294, y: 1344, zoom: 1 },
    labels: [
      { x: 2347, y: 1314, text: "T'sen Ang - Entrance", description: "", category: "waypoint", targetMapFilename: "T’sen-Ang Entrance", targetX: 1072, targetY: 511 },
      { x: 2360, y: 710, text: "M'in Gorad Chamber", description: "", category: "waypoint", targetMapFilename: "M'in Gorad Chamber", targetX: 137, targetY: 316 },

      { x: 1468, y: 979, text: "Z'an Al'urin", sex: "female", race: "Dark Elf", level: 29, portrait: "Textures/zanalurin.gif", description: "Z'an is an evil spellcaster (earth, force, and temporal). If you tell her your name, she might agree to join you.", category: "followers" },
      { x: 888, y: 627, text: "T'val N'or", sex: "male", race: "Dark Elf", level: 33, category: ["quest", "npc"] },
      { x: 1353, y: 488, text: "Half-ogre Slaves", description: "Kill the dark elf mage T'val N'or in order to break the spell holding the half ogre slaves.", category: ["quest", "npc"], linkedLabels: ["T'val N'or"]},
      { x: 2104, y: 790, text: "Gideon Laier", description: "After learning the fate of the BMC and leaving M'in Gorad's residence, you'll run into Gideon Laier, the First Blade of the Molochean Hand. He'll recognize who you are. If you know something of the history of the Molochean Hand, you might be able to convince Laier to leave you alone by telling him that he's essentially working for Arronax. However, since Gideon is wearing some nice equipment, you might want to let him attack you so you can get it. None of the dark elves will come to his aid. Oddly, the conversation with Laier will go the same whether you've joined up with the dark elves or not. If you have read Joachim's book and learned about First Assassin Trellian, then you can confront Gideon about the Hand repeating the mistakes of the past (''The Hand hasn't always been this way...'') . He will promise to call off the attacks on you, and if Vollinger is in your party, he will out him as a Hand assassin and offer him to you as a permanent companion, to make up for the Hand's attempts on your life.", category: ["npc", "information"] },

    ]
  },
  {
    filename: "ArcanumBase/Tulla.jpg",
    displayName: "Tulla",
    modGroup: "Cities",
    typemap: "local",
    music: "music/tulla.flac",
    defaultView: { x: 676, y: 2431, zoom: 1 },
    labels: [
      { x: 743, y: 2388, text: "Teleportation Gate", description: "", category: "waypoint", targetMapFilename: "Tulla", targetX: 1030, targetY: 2242 },
      { x: 1030, y: 2242, text: "Teleportation Gate", description: "", category: "waypoint", targetMapFilename: "Tulla", targetX: 743, targetY: 2388 },
      { x: 2268, y: 1619, text: "Tulla - Inside", description: "", category: "waypoint", targetMapFilename: "Tulla - Main Floor", targetX: 836, targetY: 1410 },
      { x: 1964, y: 2153, text: "Herzod Munk", sex: "male", race: "Human", level: 35, description: "Retrieve the platinum chalice from Fa'al Kin's Maze for Herzod Munk.", category: ["quest", "npc"] },
      { x: 1974, y: 1748, text: "Pelojian", sex: "male", description: "Pelojian will tell you about Vendigroth and the Device, and he'll mark the location of Vendigroth on your world map.", category: ["quest", "npc"], linkedLabels: ["Simeon Tor"] },
      { x: 1837, y: 1775, text: "1 - Star", description: "", category: "information" },
      { x: 2058, y: 1701, text: "2 - Spiral", description: "", category: "information" },
      { x: 2098, y: 1789, text: "3 - Stick Figure", description: "", category: "information" },
      { x: 1918, y: 1692, text: "4 - Cross-circle", description: "", category: "information" },
      { x: 1957, y: 1837, text: "5 - Magic symbol", description: "", category: "information" },
    ]
  },
  {
    filename: "ArcanumBase/Vooriden.png",
    displayName: "Vooriden",
    modGroup: "Cities",
    typemap: "local",
    defaultView: { x: 1031, y: 496, zoom: 1 },
    labels: [
      { x: 1249, y: 314, text: "Edwin Wallows", sex: "male", description: "Edwin Wallows of the Halcyon Order in Vooriden wants you to retrieve a new altar stone from Torin Quarry.", category: ["quest", "npc"] },
      { x: 955, y: 487, text: "Murgo", sex: "male", race: "Half-Ogre", level: 30, portrait: "Textures/sebastian.gif", description: "Half-Ogre helper to the priests of Halcyon. He'll join you group as a temporary follower if you accept a quest to restore the altar. However he will leave the group once you return to Vooriden, or if you deviate from the quest.", category: ["quest", "followers"] },
      { x: 1343, y: 248, text: "Altar of Halcyon", description: "", category: ["altar"] },
    ]
  },
  {
    filename: "ArcanumBase/WheelClan.png",
    displayName: "Wheel Clan",
    altView: {
      icon: "Textures/WheelClanSpectacles.png",
      image: "ArcanumBase/WheelClan.png"
    },
    modGroup: "Cities",
    typemap: "local",
    defaultView: { x: 1111, y: 604 }, // Good
    labels: [
      { x: 1213, y: 487, text: "Reveal the gate", description: "The entrance is hidden until the player stands in a crude square and dons a pair of Wheel Clan Spectacles.", category: "information" },
      { x: 1257, y: 418, text: "Wheel Clan - Level 1", description: "", category: "waypoint", targetMapFilename: "Wheel Clan - Level 1"},
    ]
  },

/// DUNGEONS MAPS
  {
    filename: "ArcanumBase/ALairOfGyrDolours.jpg",
    displayName: "A Lair of Gyr Dolours",
    modGroup: "Quest locations",
    typemap: "local",
    // music:
    defaultView: {},
    labels: [
      { x: 1602, y: 524, text: "Lady Druella", sex: "female", race: "Half-elf", level: 17, portrait: "Textures/druella.gif", description: "", category: ["quest", "followers"] },
    ],
  },
  {
    filename: "ArcanumBase/ArbalahsHouse.png",
    displayName: "Arbalah’s House",
    modGroup: "Quest locations",
    typemap: "local",
    // music: "music/wilderness.flac", No music here it seems
    defaultView: { x: 1031, y: 605, zoom: 1 },
    labels: [
      { x: 912, y: 477, text: "Arbalah", sex: "male", description: "", category: ["quest", "npc"],
        linkedLabels: [{ questName: "Quest: The Priest and the Bandit (Part II)", questDescription: "Arbalah has refuted the claims of Charles Brehgo, saying Brehgo and his partner Fahrkus killed his family and stole a sacred artifact from him. He would like for me to locate and return this artifact to him.", target: "Charles Brehgo" }],
     },
    ],
  },
  {
    filename: "ArcanumBase/AMysteriousLocation.png",
    displayName: "A mysterious location",
    modGroup: "Quest locations",
    typemap: "local",
    // music:
    defaultView: { x: 796, y: 1211, zoom: 1 },
    labels: [
      { x: 1333, y: 838, text: "Hollow Tree", description: "", inventory: ["Note #3 of the Prowling Mastery quest"], category: ["quest", "chest"] },
    ],
  },
  {
    filename: "ArcanumBase/AncientMaze.jpg",
    displayName: "Ancient Maze",
    modGroup: "Other locations",
    typemap: "local",
    // music:
    defaultView: {},
    labels: [],
  },
  {
    filename: "ArcanumBase/AncientRuins.png",
    displayName: "Ancient Ruins",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 655, y: 493, zoom: 1 },
    labels: [
      { x: 835, y: 390, text: "Mystic Chest", description: "", category: ["chest"] },
    ],
  },
  {
    filename: "ArcanumBase/AncientShipwreck.jpg",
    displayName: "Ancient Shipwreck",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: {}, // Good
    labels: [
      { x: 1428, y: 787, text: "Greater Skeletons", description: "The Shipwreck is notable for being abandoned during the day, and haunted by several Greater Skeletons at night. The skeletons carry a variety of weapons and treasure, including a Kathorn crystal which is used to make Wheel Clan Spectacles.", category: "information" },
    ],
  },
  {
    filename: "ArcanumBase/AncientTemple.png",
    displayName: "Ancient Temple",
    modGroup: "Quest locations",
    typemap: "local",
    defaultView: { x: 1026, y: 849, zoom: 1 }, // Good
    labels: [
      { x: 1107, y: 315, text: "Ancient Temple - Underground", description: "", category: "waypoint", targetMapFilename: "Ancient Temple - Underground", targetX: 1798, targetY: 223},
    ],
  },
  {
    filename: "ArcanumBase/BoatLandingOnThanatos.jpg",
    displayName: "Boat Landing on Thanatos",
    modGroup: "Quest locations",
    typemap: "local",
    // music:
    defaultView: { x: 1483, y: 831, zoom: 1 },
    labels: [
      { x: 1199, y: 1230, text: "Barrel", description: "Contains a journal from a previous adventurer. Reading the journal will give you the locations of the Village of the Ashlag Tribe and the Thanatos Land Bridge.", category: ["quest", "chest"] },
    ],
  },
  {
    filename: "ArcanumBase/BolosAltar.png",
    displayName: "Bolo’s Altar",
    modGroup: "Other locations",
    typemap: "local",
    // music: "music/wilderness.flac",
    defaultView: { x: 763, y: 587, zoom: 1 },
    // background: "#000000",
    labels: [],
  }, 
  {
    filename: "ArcanumBase/CrashSite.jpg",
    displayName: "Crash Site",
    modGroup: "Quest locations",
    typemap: "local",
    music: "music/wilderness.flac", // Good
    defaultView: { x: 2145, y: 1331, zoom: 1 }, // Good
    background: "#000000", // Good
    labels: [
      // Waypoints
      { x: 3239, y: 894, text: "Crash Site - Cave", category: "waypoint", targetMapFilename: "Crash Site - Cave" },

      // Followers
      { x: 2179, y: 1308, text: "Virgil", sex: "Male", race: "Human", portrait: "Textures/virgil.gif", category: "followers",
        linkedLabels: [
          { questName: "Elder Joachim’s paper trail (Part I)", questDescription: "", target: "Note from Joachim" }
        ]
      },

      // Quests
      { x: 2132, y: 1344, text: "Preston Radcliffe", sex: "male", inventory: ["Preston Radcliffe's Passport", "Matchbook from Roseborough Inn"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Origins of the Strange Ring", questDescription: "Discover the origins of the strange ring.", target: "Ristezze" }
        ]
      },
      { x: 2353, y: 1112, text: "Isaac Zapruder", sex: "male", inventory: ["Camera"], category: ["npc", "quest"],
        linkedLabels: [
          { questName: "Find Liam Cameron (Part II)", questDescription: "Ristezze the Importer wants you to find a camera OR some Bessie Toone paraphenalia. In return, he will give you information about P. Schuyler & Sons.", target: "Ristezze" },
          { questName: "Heavier than air machines can fly (Part II)", questDescription: "Find proof for Hieronymous Maxim that his heavier than air machines actually flew.", target: "Hieronymous Maxim" }
        ]
      },
      { x: 2872, y: 1312, text: "Wilhemina Carpenter", sex: "female", race: "Human", inventory: [{ name: "Wilhemina's Note to Jared", image: "Textures/WilheminasNotetoJared.jpg" }], category: ["npc", "quest"], 
        linkedLabels: [
          { questName: "Jared & Wilhemina (Part II)", questDescription: "Discover the fate of Wilhemina, girlfriend of Jared the guard.", target: "Jared" }
        ]
      },

      // Chest
      { x: 1309, y: 1733, text: "Magick Chest", category: "chest" },

      // Information
      { x: 2137, y: 430, text: "Crashed aeroplane", description: "", category: "information" },
        // Add info
      { x: 3458, y: 2103, text: "Altar", description: "", category: "information" },
        // Add info
      { x: 3928, y: 2356, text: "Stranger", description: "When you try to exit the crash site the first time, an assassin will attempt to kill you.", category: "information" },
        // Add proper name + reformulate
      { x: 4026, y: 2557, text: "Wolves", description: "Virgil will recommend you to use the world map to travel to Shrouded Hills. There are, however, 10 wolves beyond this place that gives an interesting boost in exp if you decide to kill them.", category: "information" },
        // Reformulate
    ],
  },
  {
    filename: "ArcanumBase/DarkElfCamp.jpg",
    displayName: "Dark Elf Camp",
    modGroup: "Quest locations",
    typemap: "local",
    // music:
    // defaultView: {},
    labels: [
      { x: 1159, y: 660, text: "Body", description: "A body where you'll find a journal from a previous adventurer. Reading the journal will give you the location of the Vendigroth Ruins. Appears only if you follow the evil path.", category: ["quest", "npc"] },
    ],
  },
  {
    filename: "ArcanumBase/DungeonOfTheDragonPool.jpg",
    displayName: "Dungeon of the Dragon Pool",
    modGroup: "Quest locations",
    typemap: "local",
    // music:
    defaultView: { x: 1294, y: 1343, zoom: 1 },
    labels: [
      { x: 1276, y: 582, text: "Dungeon of the Dragon Pool - Level 1", description: "", category: "waypoint", targetMapFilename: "Dungeon of the Dragon Pool - Level 1", targetX: 164, targetY: 836 },
    ],
  },
  {
    filename: "ArcanumBase/ElvenRuins.png",
    displayName: "Elven Ruins",
    modGroup: "Quest locations",
    typemap: "local",
    //music: 
    defaultView: { x: 837, y: 611, zoom: 1 },
    labels: [
     { x: 812, y: 471, text: "Elven Ruins - Underground", description: "", category: "waypoint", targetMapFilename: "Elven Ruins - Underground", targetX: 1904, targetY: 342},
    ],
  },
  {
    filename: "ArcanumBase/FalconsAche.png",
    displayName: "Falcon’s Ache",
    modGroup: "Quest locations",
    typemap: "local",
    //music: 
    defaultView: { x: 1541, y: 645, zoom: 1 },
    //background: "#000000",
    labels: [
      { x: 1636, y: 1011, text: "William Bench", sex: "male", description: "", category: ["quest", "npc"], linkedLabels: ["Raven"] },
      { x: 1923, y: 648, text: "Altar to Ter'el", description: "", category: "altar" },
    ],
  },
  {
    filename: "ArcanumBase/ForbiddenPit.png",
    displayName: "Forbidden Pit",
    modGroup: "Other locations",
    typemap: "local",
    //music: 
    defaultView: { x: 1076, y: 399, zoom: 1 },
    //background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/GatewayToTheWastes.png",
    displayName: "Gateway to the Wastes",
    modGroup: "Quest locations",
    typemap: "local",
    //music: 
    defaultView: { x: 438, y: 1357, zoom: 1 },
    labels: [
      { x: 605, y: 1304, text: "Weldo Rubin", sex: "Male", race: "Halfling", level: 25, portrait: "Textures/weldorubin.gif", description: "Find the part for Weldo's device from the wreckage in the wastes.", category: ["quest", "followers"] },
    ],
  },
  {
    filename: "ArcanumBase/GorgothPass.jpg",
    displayName: "Gorgoth’s Pass",
    modGroup: "Quest locations",
    typemap: "local",
    //music: 
    defaultView: { x: 902, y: 3703, zoom: 1 },
    labels: [
      { x: 3747, y: 1558, text: "Kaitan's altar", description: "", category: "altar" },
      { x: 3506, y: 1640, text: "Geode", description: "A geode is on the ground. It's the item needed for the altar.", category: "information" },
      { x: 2835, y: 2774, text: "Dead NPC", description: "(hexed) consuming plate mail", category: "npc" },
    ],
  },
  {
    filename: "ArcanumBase/HalfOgreIsland.jpg",
    displayName: "Half Ogre Island",
    modGroup: "Quest locations",
    typemap: "local",
    //music: 
    defaultView: { x: 877, y: 2074, zoom: 1 },
    labels: [
      { x: 3094, y: 1041, text: "Safe", description: "Contains the journal. When you pick it up you'll gain a fate point.", category: ["quest", "chest"], linkedLabels: ["Arthur Tyron"] },
    ],
  },
  {
    filename: "ArcanumBase/HardinsPass.jpg",
    displayName: "Hardin’s Pass",
    modGroup: "Quest locations",
    typemap: "local",
    //music: 
    //defaultView: { x: 2145, y: 1331, zoom: 1 },
    //background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/KerlinsAltar.png",
    displayName: "Kerlin’s Altar",
    modGroup: "Other locations",
    typemap: "local",
    // music: "music/wilderness.flac",
    defaultView: { x: 813, y: 464, zoom: 1 },
    // background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/KnaThaEntrance.png",
    displayName: "K’na Tha",
    modGroup: "Quest locations",
    typemap: "local",
    // music: "music/wilderness.flac",
    defaultView: { x: 511, y: 552, zoom: 1 },
    labels: [
      { x: 848, y: 552, text: "K’na Tha - Level 1", description: "", category: "waypoint", targetMapFilename: "K’na Tha - Level 1", targetX: 3763, targetY: 2373},
    ],
  },
  {
    filename: "ArcanumBase/Kree.jpg",
    displayName: "Kree",
    modGroup: "Quest locations",
    typemap: "local",
    // music: "music/wilderness.flac",
    defaultView: { x: 790, y: 2067, zoom: 1 },
    labels: [
      { x: 2761, y: 553, text: "Altar to Shakar", description: "", category: "altar" },
      { x: 3128, y: 682, text: "Altar", description: "Contains Idol / If you can steal it without killing anybody, then you'll earn a fate point.", category: ["quest", "chest"], linkedLabels: ["Thaddeus Mynor"] },
      { x: 2788, y: 846, text: "Chest", description: "", category: "chest" },
    ],
  },
  {
    filename: "ArcanumBase/NasrudinRestingPlace.jpg",
    displayName: "Land Bridge",
    modGroup: "Quest locations",
    typemap: "local",
    defaultView: { x: 1435, y: 735, zoom: 1 },
    labels: [
      { x: 3210, y: 2374, text: "Nasrudin", sex: "male", description: "Travel to the Ring of Brodgar. / Find Arronax. / Retrieve the Vendigroth Device and meet Nasrudin in the Ring of Brodgar. / Nasrudin wishes you to kill the Bogaroth. In return, he will tell you what you need to do to kill Arronax. / Stop Arronax.", category: ["quest", "npc"], linkedLabels: ["Bogaroth", "Nasrudin (Roseborough)"] },
    ],
  },
  {
    filename: "ArcanumBase/LetheWyvernSighting.jpg",
    displayName: "Lethe Wyvern Sighting",
    modGroup: "Quest locations",
    typemap: "local",
    defaultView: { x: 1506, y: 1622, zoom: 1 }, // Good
    labels: [
      { x: 2119, y: 1198, text: "Lethe Wyvern", description: "Trevor Lynwood, a journalist for the Tarantian, needs you to get a photograph of the elusive Lethe Wyvern.", category: ["quest", "npc"], linkedLabels: ["Trevor Lynwood"] },
    ],
  },
  {
    filename: "ArcanumBase/LiamsWorkshop.jpg",
    displayName: "Liam’s Workshop",
    modGroup: "Quest locations",
    typemap: "local",
    // music: ?
    // background: none
    defaultView: { x: 3850, y: 570, zoom: 1 }, // Good
    labels: [
      { x: 3299, y: 572, text: "Chest", inventory: ["Magickal trap","Scroll of disperse magick"], category: "chest" },
      { x: 3397, y: 554, text: "Dresser (Liam’s Workshop)", inventory: ["Liam Cameron's Journal"], category: ["quest","chest"],
        linkedLabels: [
          { questName: "Find Liam Cameron (Part II)", questDescription: "Destroy the portal described in Liam Cameron's journal.", target: "Portal" }
        ]
      },
      { x: 1527, y: 1809, text: "Liam’s body", inventory: ["Magickal trap"], category: "chest" },
      { x: 799, y: 1775, text: "Portal", description: "Use the magickal trap on the portal to destroy it.", category: "quest", linkedLabels: ["Mrs. Lydia Cameron"] },
    ],
  },
  {
    filename: "ArcanumBase/MysteriousRuinsOfTheWastes.jpg",
    displayName: "Mysterious ruins of the wastes",
    modGroup: "Quest locations",
    typemap: "local",
    defaultView: { x: 799, y: 983, zoom: 1 }, // Good
    labels: [
      { x: 1072, y: 811, text: "Items", description: "Sprocket", category: ["quest", "chest"], linkedLabels: ["Weldo Rubin"] },
    ],
  }, 
  {
    filename: "ArcanumBase/NasrudinRestingPlace.jpg",
    displayName: "Nasrudin’s Resting Place",
    modGroup: "Quest locations",
    typemap: "local",
    defaultView: { x: 3144, y: 2443, zoom: 1 }, // Good
    labels: [
      { x: 3210, y: 2374, text: "Nasrudin", description: "Travel to the Ring of Brodgar. / Find Arronax. / Retrieve the Vendigroth Device and meet Nasrudin in the Ring of Brodgar. / Nasrudin wishes you to kill the Bogaroth. In return, he will tell you what you need to do to kill Arronax. / Stop Arronax.", category: ["quest", "npc"], linkedLabels: ["Bogaroth"] },
    ],
  },
  {
    filename: "ArcanumBase/RazorsPointe.png",
    displayName: "Razor’s Pointe",
    modGroup: "Quest locations",
    typemap: "local",
    defaultView: { x: 1615, y: 594, zoom: 1 },
    labels: [
      { x: 1241, y: 1359, text: "Body of Princess Aria", description: "Contains the amulet", category: ["quest", "chest"], linkedLabels: ["King Praetor"] },
    ],
  }, 
  {
    filename: "ArcanumBase/RuinsOfSzaboEntrance.png",
    displayName: "Ruins of Szabo",
    modGroup: "Quest locations",
    typemap: "local",
    //defaultView: { x: 1615, y: 594, zoom: 1 },
    labels: [
      { x: 767, y: 498, text: "Ruins of Szabo - Level 1", description: "", category: "waypoint", targetMapFilename: "Ruins of Szabo - Level 1", targetX: 450, targetY: 797},
    ]
  },
  {
    filename: "ArcanumBase/SecretEntranceToTheIronClan.png",
    displayName: "Secret Entrance to the Iron Clan",
    altView: {
        icon: "Textures/GlassKey.png",
        image: "ArcanumBase/SecretEntranceToTheIronClan-Open.png"
    },
    modGroup: "Quest locations",
    typemap: "local",
    defaultView: { x: 1039, y: 461, zoom: 1 },
    labels: [
      { x: 1296, y: 480, text: "Gate to the Iron Clan", description: "", category: "waypoint", targetMapFilename: "Iron Clan - Gate" },
      { x: 1197, y: 429, text: "Ancient Iron Device", description: "Require a Glass Key to open the gate", category: ["quest"] },
    ]
  },
  {
    filename: "ArcanumBase/SecretVillage.png",
    displayName: "Secret Village",
    modGroup: "Other locations",
    typemap: "local",
    //defaultView: { x: 1615, y: 594, zoom: 1 },
    labels: [],
  },  
  {
    filename: "ArcanumBase/ShadesBeach.png",
    displayName: "Shades Beach",
    modGroup: "Quest locations",
    typemap: "local",
    defaultView: { x: 1617, y: 1238, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/SimonFahrkusShack.png",
    displayName: "Simon Fahrkus’ Shack",
    modGroup: "Quest locations",
    typemap: "local",
    // music: "music/wilderness.flac", No music here it seems
    defaultView: { x: 705, y: 555, zoom: 1 },
    labels: [
      { x: 828, y: 498, text: "Simon Fahrkus", sex: "male", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Quest: The Priest and the Bandit (Part IV)", questDescription: "Lie, threaten, steal or kill Fahrkus to retrieve the Sacred Artifact.", target: "Arbalah" },
        ],
      },
    ],
  },
  {
    filename: "ArcanumBase/SmallCamp.png",
    displayName: "Small Camp",
    modGroup: "Other locations",
    typemap: "local",
    // music: "music/wilderness.flac",
    defaultView: { x: 816, y: 711, zoom: 1 },
    // background: "#000000",
    labels: [
      { x: 1170, y: 246, text: "Arcane Chest", description: "", category: "chest" },
    ],
  },
  {
    filename: "ArcanumBase/SmallPond.jpg",
    displayName: "Small Pond",
    modGroup: "Other locations",
    typemap: "local",
    // music: "music/wilderness.flac",
    // defaultView: { x: 816, y: 711, zoom: 1 },
    // background: "#000000",
    labels: [
      { x: 1391, y: 645, text: "Arcane Chest", description: "", category: "chest" },
    ],
  },
  {
    filename: "ArcanumBase/StonecutterClan.png",
    displayName: "Stonecutter Clan",
    modGroup: "Quest locations",
    typemap: "local",
    // music: "music/wilderness.flac",
    // defaultView: { x: 816, y: 711, zoom: 1 },
    // background: "#000000",
    labels: [
      { x: 990, y: 620, text: "Stonecutter Clan - Level 1", description: "", category: "waypoint", targetMapFilename: "Stonecutter Clan - Level 1", targetX: 2592, targetY: 1503},
    ]
  },
  {
    filename: "ArcanumBase/StrangeCeremony.png",
    displayName: "Strange Ceremony",
    modGroup: "Other locations",
    typemap: "local",
    // music: No music here.
    // defaultView: { x: 2532, y: 562, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/StrangePond.jpg",
    displayName: "Strange Pond",
    modGroup: "Other locations",
    typemap: "local",
    //music: No music here.
    defaultView: { x: 2532, y: 562, zoom: 1 },
    labels: [
      { x: 1501, y: 1146, text: "Arcane Chest", description: "Always contains a Ring of Shadows", category: "chest" },
    ],
  },
  {
    filename: "ArcanumBase/StringyPetesCove.jpg",
    displayName: "Stringy Pete’s Cove",
    modGroup: "Quest locations",
    typemap: "local",
    // music: No music here.
    defaultView: { x: 1957, y: 242, zoom: 1 },
    labels: [
      { x: 3932, y: 1734, text: "Stringy Pete", sex: "male", description: "Stringy Pete wants you to return his treasure, including the silver boot buckles of Jonas Williamson, to the remaining members of the Williamson family / Stringy Pete wants you to repair the desecrated altar of temple in Vooriden. / Stringy Pete wants you to destroy the Bangellian Scourge.", category: ["quest", "npc"] },
      { x: 1819, y: 742, text: "Boat", description: "", category: "waypoint", targetMapFilename: "Stringy Pete’s Cove", targetX: 3093, targetY: 1266 },
      { x: 3095, y: 1258, text: "Boat", description: "", category: "waypoint", targetMapFilename: "Stringy Pete’s Cove", targetX: 1819, targetY: 742 },
    ]
  },
  {
    filename: "ArcanumBase/StringyPetesTreasure.png",
    displayName: "Stringy Pete’s Treasure",
    modGroup: "Quest locations",
    typemap: "local",
    // music: No music here.
    // defaultView: { x: 2532, y: 562, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/TheBangellianDeepsOutside.png",
    displayName: "The Bangellian Deeps",
    modGroup: "Quest locations",
    // music: no music here
    typemap: "local",
    defaultView: { x: 977, y: 975, zoom: 1 }, // Good
    labels: [
      { x: 1111, y: 896, text: "The Bangellian Deeps - Inside", description: "", category: "waypoint", targetMapFilename: "The Bangellian Deeps - Inside", targetX: 1227, targetY: 1340 },
    ]
  },
  {
    filename: "ArcanumBase/TheBlackMountainMines.png",
    displayName: "The Black Mountain Mines",
    modGroup: "Quest locations",
    typemap: "local",
    background: "#000000",
    defaultView: { x: 1264, y: 925, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/TheBog.jpg",
    displayName: "The Bog",
    modGroup: "Other locations",
    typemap: "local",
    //music: No music here.
    defaultView: { x: 1396, y: 1442, zoom: 1 },
    labels: [
      { x: 1563, y: 789, text: "Wood Chest", description: "Contains an Arcane Great Sword and an Axe of Creeping Death.", category: "chest" },
    ],
  },
  {
    filename: "ArcanumBase/TheBrokenCathedral.png",
    displayName: "The Broken Cathedral",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 868, y: 598, zoom: 1 },
    labels: [
      { x: 1061, y: 524, text: "Arcane Chest", description: "", category: "chest" },
    ],
  },
  {
    filename: "ArcanumBase/TheCastleOfSnelNfa.png",
    displayName: "The Castle of S’nel N’fa",
    modGroup: "Quest locations",
    typemap: "local",
    // music: No music here.
    // defaultView: { x: 1396, y: 1442, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/TheColdPlace.jpg",
    displayName: "The Cold Place",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 911, y: 1701, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/TheHomeOfMaximillian.png",
    displayName: "The Home of Maximillian",
    modGroup: "Quest locations",
    typemap: "local",
    // music: No music here.
    // defaultView: { x: 1396, y: 1442, zoom: 1 },
    labels: [
      { x: 1341, y: 917, text: "Maximillian", sex: "male", race: "human", level: 45, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "Find Warren Pel Dar of Cumbria and tell him that Maximillian still lives on the Isle of Despair.", target: "Lianna Pel Dar" },
          { questName: "", questDescription: "Find Warren Lianna Pel Dar of Cumbria and tell her that Maximillian still lives on the Isle of Despair.", target: "Lianna Pel Dar" }
        ]
      },
    ],
  },
  {
    filename: "ArcanumBase/TheLairofBellerogrim.png",
    displayName: "The Lair of Bellerogrim",
    modGroup: "Quest locations",
    typemap: "local",
    background: "#000000",
    defaultView: { x: 1051, y: 936, zoom: 1 },
    labels: [
      { x: 185, y: 564, text: "The Lair of Bellerogrim - Underground", description: "", category: "waypoint", targetMapFilename: "The Lair of Bellerogrim - Underground" },
      { x: 1051, y: 936, text: "The Lair of Bellerogrim - Entrance", description: "", category: "waypoint", targetMapFilename: "The Lair of Bellerogrim - Entrance" },
    ],
  },
  {
    filename: "ArcanumBase/TheLairOfTheBogaroth.png",
    displayName: "The Lair of the Bogaroth",
    modGroup: "Quest locations",
    typemap: "local",
    defaultView: { x: 880, y: 646, zoom: 1 },
    labels: [
        { x: 830, y: 354, text: "Bogaroth", description: "", category: "quest", linkedLabels: ["Nasrudin"]},
    ],
  },
  {
    filename: "ArcanumBase/TheOldLagoon.jpg",
    displayName: "The Old Lagoon",
    modGroup: "Other locations",
    // music: no music here
    typemap: "local",
    defaultView: { x: 1917, y: 1048, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/ThePitOfFires.png",
    displayName: "The Pit of Fires",
    modGroup: "Quest locations",
    music: "music/villages.flac",
    typemap: "local",
    defaultView: { x: 1098, y: 606, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/ThePlaceOfLostVoices.jpg",
    displayName: "The Place of Lost Voices",
    modGroup: "Quest locations",
    typemap: "local",
    background: "#000000",
    defaultView: { x: 4793, y: 734, zoom: 1 }, // Good
    labels: [],
  },
  {
    filename: "ArcanumBase/ThePoachersCamp.png",
    displayName: "The Poachers Camp",
    modGroup: "Quest locations",
    typemap: "local",
    // background: "#000000",
    // defaultView: { x: 7612, y: 2443, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/TheRubyGlade.png",
    displayName: "The Ruby Glade",
    modGroup: "Quest locations",
    typemap: "local",
    defaultView: { x: 2832, y: 2096, zoom: 1 }, // Good
    labels: [
      { x: 1534, y: 1360, text: "Altar (Ruby Glade)", inventory: ["Great Ruby of K'alru"], category: ["quest", "chest"], linkedLabels: ["Gildor Nightwalk"] },
      { x: 1501, y: 1408, text: "Dead Elf Noble", inventory: ["Heavy Barbarian's Blade", {name: "Arcane Gauntlets", tier: "magick"}, {name: "Hero's Weakness Barbarian Armor", tier: "hexed"}], category: "npc" },

      { x: 1740, y: 1555, text: "Warning Stone", description: "If you walk past the stones without adequate stealth (either invisible or having 5 full ranks (20/20) in Prowling and not wearing any -NP gear), then six greater demons will appear and attack you.", category: ["information"] },
      { x: 1264, y: 1487, text: "Warning Stone", description: "If you walk past the stones without adequate stealth (either invisible or having 5 full ranks (20/20) in Prowling and not wearing any -NP gear), then six greater demons will appear and attack you.", category: ["information"] },
      { x: 1280, y: 1296, text: "Warning Stone", description: "If you walk past the stones without adequate stealth (either invisible or having 5 full ranks (20/20) in Prowling and not wearing any -NP gear), then six greater demons will appear and attack you.", category: ["information"] },
      { x: 1515, y: 1194, text: "Warning Stone", description: "If you walk past the stones without adequate stealth (either invisible or having 5 full ranks (20/20) in Prowling and not wearing any -NP gear), then six greater demons will appear and attack you.", category: ["information"] },
      { x: 1765, y: 1282, text: "Warning Stone", description: "If you walk past the stones without adequate stealth (either invisible or having 5 full ranks (20/20) in Prowling and not wearing any -NP gear), then six greater demons will appear and attack you.", category: ["information"] },
      { x: 1833, y: 1413, text: "Warning Stone", description: "If you walk past the stones without adequate stealth (either invisible or having 5 full ranks (20/20) in Prowling and not wearing any -NP gear), then six greater demons will appear and attack you.", category: ["information"] },
      { x: 1481, y: 1592, text: "Warning Stone", description: "If you walk past the stones without adequate stealth (either invisible or having 5 full ranks (20/20) in Prowling and not wearing any -NP gear), then six greater demons will appear and attack you.", category: ["information"] },
    ],
  },
  {
    filename: "ArcanumBase/TheWilliamsonHomestead.png",
    displayName: "The Williamson Homestead",
    modGroup: "Quest locations",
    typemap: "local",
    defaultView: { x: 1306, y: 323, zoom: 1 }, // Good
    labels: [
      { x: 750, y: 568, text: "Molly Williamson", sex: "female", description: "Stringy Pete's Treasure quest", category: ["quest", "npc"] },
    ],
  },
  {
    filename: "ArcanumBase/TheWomensCamp.png",
    displayName: "The Women’s Camp",
    modGroup: "Quest locations",
    // music: no music here
    typemap: "local",
    // defaultView: { x: 1306, y: 323, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/ThievesCaveOutside.png",
    displayName: "Thieves Cave",
    modGroup: "Quest locations",
    // music: no music here
    typemap: "local",
    // defaultView: { x: 1306, y: 323, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/TorgsAltar.png",
    displayName: "Torg’s Altar",
    modGroup: "Other locations",
    typemap: "local",
    // music: "music/wilderness.flac",
    defaultView: { x: 763, y: 587, zoom: 1 },
    // background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/TorinQuarry.png",
    displayName: "Torin Quarry",
    modGroup: "Quest locations",
    typemap: "local",
    // music: "music/wilderness.flac",
    defaultView: { x: 1470, y: 762, zoom: 1 },
    // background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/UnchartedCave.png",
    displayName: "Uncharted Cave",
    modGroup: "Other locations",
    typemap: "local",
    // music: "music/wilderness.flac",
    //defaultView: { x: 1470, y: 762, zoom: 1 },
    // background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/VillageOfTheAshlagTribe.png",
    displayName: "Village of the Ashlag Tribe",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 868, y: 598, zoom: 1 },
    labels: [],
  }, 
  {
    filename: "ArcanumBase/VendigrothRuinssmall.jpg",
    displayName: "Vendigroth Ruins",
    modGroup: "Quest locations",
    typemap: "local",
    defaultView: { x: 868, y: 598, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/VoidMainIsland.png",
    displayName: "Void",
    modGroup: "Quest locations",
    typemap: "local",
    background: "#100B07",
    // defaultView: { x: 868, y: 598, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/VollingersMeetingPlace.png",
    displayName: "Vollinger’s Meeting Place",
    modGroup: "Quest locations",
    typemap: "local",
    // music: "music/wilderness.flac", No music here it seems
    defaultView: { x: 852, y: 617, zoom: 1 },
    labels: [
      { x: 944, y: 400, text: "Vollinger’s Meeting Place - Basement", description: "", category: "waypoint", targetMapFilename: "Vollinger’s Meeting Place - Basement" },
    ],
  },
  {
    filename: "ArcanumBase/WolfCave.png",
    displayName: "Wolf Cave",
    modGroup: "Other locations",
    typemap: "local",
    // music: No music
    defaultView: { x: 502, y: 828, zoom: 1 }, // Good
    labels: [
      { x: 796, y: 739, text: "Wolf Cave - Inside", description: "", category: "waypoint", targetMapFilename: "Wolf Cave - Inside", targetX: 537, targetY: 661 },
    ],
  },

/// SUBMAPS

  {
    filename: "ArcanumBase/AncientTempleLevel1.png",
    parentFilename: "ArcanumBase/AncientTemple.png",
    displayName: "Ancient Temple - Underground",
    typemap: "local",
    defaultView: { x: 1798, y: 223, zoom: 1 },
    background: "#000000",
    labels: [
      { x: 1798, y: 223, text: "Ancient Temple", category: "waypoint", targetMapFilename: "Ancient Temple", targetX: 1107, targetY: 315 },
      { x: 515, y: 647, text: "Altar to Moorindal", category: "altar" },
      { x: 218, y: 810, text: "Arcane Chest", description: "Torian Kel key", category: ["key", "chest"] },
      { x: 1679, y: 880, text: "Magick Chest", description: "Library Key", category: ["key", "chest"] },
      { x: 2403, y: 550, text: "Torian Kel", sex: "Male", race: "Human", level: 20, portrait: "Textures/toriankel.gif", category: ["quest", "followers"], linkedLabels: ["Dragon Pool"]},
      { x: 939, y: 1249, text: "Arcane Chest", category: "chest" },
    ],
  },
  {
    filename: "ArcanumBase/Ashbury-Crematorium1.png",
    parentFilename: "ArcanumBase/Ashburysmall.jpg",
    displayName: "Ashbury Crematorium - Level 1",
    typemap: "local",
    defaultView: { x: 618, y: 419, zoom: 1 },
    background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/Ashbury-Crematorium2.png",
    parentFilename: "ArcanumBase/Ashburysmall.jpg",
    displayName: "Ashbury Crematorium - Level 2",
    typemap: "local",
    defaultView: { x: 1339, y: 1240, zoom: 1 },
    background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/Ashbury-Crematorium3.png",
    parentFilename: "ArcanumBase/Ashburysmall.jpg",
    displayName: "Ashbury Crematorium - Level 3",
    typemap: "local",
    defaultView: { x: 322, y: 641, zoom: 1 },
    background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/AshburyHauntedCastleGroundfloor.png",
    parentFilename: "ArcanumBase/Ashburysmall.jpg",
    displayName: "Haunted Castle - Ground Floor",
    typemap: "local",
    defaultView: { x: 761, y: 1163, zoom: 1 },
    background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/AshburyHauntedCastleBasement.png",
    displayName: "Haunted Castle - Basement",
    typemap: "local",
    //defaultView: { x: 761, y: 1163, zoom: 1 },
    parentFilename: "ArcanumBase/Ashburysmall.jpg",
    background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/AshburyHauntedCastleUpstairs.png",
    displayName: "Haunted Castle - Upstairs",
    typemap: "local",
    //defaultView: { x: 761, y: 1163, zoom: 1 },
    parentFilename: "ArcanumBase/Ashburysmall.jpg",
    background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/Ashbury-ScienticiansUnderground.png",
    displayName: "Scienticians Underground",
    typemap: "local",
    defaultView: { x: 655, y: 408, zoom: 1 },
    parentFilename: "ArcanumBase/Ashburysmall.jpg",
    background: "#000000",
    labels: [
      { x: 723, y: 405, text: "Ashbury", description: "", category: "waypoint", targetMapFilename: "Ashbury", targetX: 3277, targetY: 2500 },
      { x: 376, y: 261, text: "Automaton", description: "", category: "information" },
      { x: 481, y: 218, text: "Wood Chest (Plate)", inventory:["Basic Machined Plate", "Schematics: Automaton"], category: ["quest", "chest"], linkedLabels: ["Theodore"] },
    ]
  },
  {
    filename: "ArcanumBase/Caladon-CastleDownstairs.jpg",
    displayName: "Caladon Castle - Downstairs",
    typemap: "local",
    background: "#000000",
    defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
  },
  {
    filename: "ArcanumBase/Caladon-CastleMainFloor.jpg",
    displayName: "Caladon Castle - Main Floor",
    typemap: "local",
    // music: ?
    background: "#000000",
    // defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [
      { x: 775, y: 323, text: "Vernon", sex: "male", race: "Human", level: 15, inventory:["Vernon's key"], category: ["quest","npc","key"],
      linkedLabels: [
        { questName: "Assassinating King Farad (Part III)", questDescription: "Heinrich Jenks wants you to assassinate King Farad of Caladon.", target: "Vernon"}
        ],
      },
    ],
  },
  {
    filename: "ArcanumBase/Caladon-CastleUpstairs.jpg",
    displayName: "Caladon Castle - Upstairs",
    typemap: "local",
    // music: ?
    background: "#000000",
    // defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/Caladon-CastleVents.jpg",
    displayName: "Caladon Castle - Vents",
    typemap: "local",
    // music: ?
    background: "#000000",
    // defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/Caladon-PanariiTempleCatacombs.png",
    displayName: "Caladon Panarii Temple - Catacombs",
    typemap: "local",
    // music: ?
    background: "#000000",
    // defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/Caladon-PanariiTemple.png",
    displayName: "Caladon Panarii Temple - Level 1",
    typemap: "local",
    // music: ?
    background: "#000000",
    // defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/Caladon-PanariiTempleLevel2.png",
    displayName: "Caladon Panarii Temple - Level 2",
    typemap: "local",
    // music: ?
    background: "#000000",
    // defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/Caladon-PanariiTempleLevel3.png",
    displayName: "Caladon Panarii Temple - Level 3",
    typemap: "local",
    // music: ?
    background: "#000000",
    // defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/Caladon-Sewers.jpg",
    displayName: "Caladon - Sewers",
    modGroup: "Cities",
    typemap: "local",
    // music: ?
    background: "#000000",
    // defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [
      // Waypoint
      { x: 1247, y: 349, text: "Caladon", category: "waypoint", targetMapFilename: "Caladon", targetX: 4353, targetY: 1328 },
      { x: 2680, y: 801, text: "Caladon", category: "waypoint", targetMapFilename: "Caladon", targetX: 8236, targetY: 1540 },
      { x: 1745, y: 346, text: "Caladon", category: "waypoint", targetMapFilename: "Caladon", targetX: 6300, targetY: 978 },
      { x: 2265, y: 1319, text: "Caladon", category: "waypoint", targetMapFilename: "Caladon", targetX: 7480, targetY: 2591 },
      { x: 1315, y: 1758, text: "Caladon", category: "waypoint", targetMapFilename: "Caladon", targetX: 5742, targetY: 3327 },
      { x: 1137, y: 1088, text: "Caladon", category: "waypoint", targetMapFilename: "Caladon", targetX: 5602, targetY: 2270 },
      { x: 1138, y: 321, text: "Caladon Panarii Temple - Catacombs", category: "waypoint", targetMapFilename: "Caladon Panarii Temple - Catacombs" },
      { x: 850, y: 589, text: "Caladon Panarii Temple - Catacombs", category: "waypoint", targetMapFilename: "Caladon Panarii Temple - Catacombs" },

      // Quests
      { x: 2584, y: 918, text: "Vincent", sex: "male", category: ["quest", "npc"] },

      // Chests
      { x: 2569, y: 886, text: "Arcane Chest", description: "", category: "chest" },
      { x: 2789, y: 874, text: "Arcane Chest", description: "", category: "chest" },
      { x: 1399, y: 989, text: "Half Ogre Bandit", inventory: ["Boots of the Dark Toll"], category: ["npc"] },
    ]
  },
  {
    filename: "ArcanumBase/Caladon-GuardhouseBasement.png",
    displayName: "Guardhouse Basement",
    modGroup: "Cities",
    typemap: "local",
    // music: ?
    background: "#000000",
    // defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/Caladon-HighSecurityPrison.png",
    displayName: "High Security Prison",
    modGroup: "Cities",
    typemap: "local",
    // music: ?
    background: "#000000",
    // defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/Caladon-MafiaUnderground.png",
    displayName: "Mafia Underground",
    modGroup: "Cities",
    typemap: "local",
    // music: ?
    background: "#000000",
    defaultView: { x: 429, y: 598}, // Good
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [
      { x: 429, y: 598, text: "Caladon", description: "", category: "waypoint", targetMapFilename: "Caladon", targetX: 5883, targetY: 1959},
    ],
  },
  {
    filename: "ArcanumBase/Caladon-SandersBasement.png",
    displayName: "Sanders Basement",
    modGroup: "Cities",
    typemap: "local",
    // music: ?
    background: "#000000",
    // defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [
      { x: 833, y: 349, text: "Caladon", description: "", category: "waypoint", targetMapFilename: "Caladon" },
    ]
  },
  {
    filename: "ArcanumBase/CaladonTrapDisarmDungeon.png",
    displayName: "Trap Disarm Dungeon",
    modGroup: "Cities",
    typemap: "local",
    // music: ?
    background: "#000000",
    // defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/CrashSite-Cave.png",
    parentFilename: "ArcanumBase/CrashSite.jpg",
    displayName: "Crash Site - Cave",
    typemap: "local",
    defaultView: { x: 266, y: 583, zoom: 1 }, // Good
    music: "music/mines.flac", // Good
    background: "#000000", // Good
    labels: [
      // Waypoints
      { x: 234, y: 629, text: "Crash Site", description: "", category: "waypoint", targetMapFilename: "Crash Site", targetX: 3239, targetY: 894},
      
      // Quests
      { x: 360, y: 191, text: "Charles Brehgo", sex: "male", description: "", category: ["quest", "npc"],
          linkedLabels: [
            { questName: "Quest: The Priest and the Bandit (Part I)", questDescription: "The cursed spirit of Charles Brehgo has implored me to kill the priest who cursed him, Arbalah. It is his belief that if I kill Arbalah, he will be released from the curse.", target: "Arbalah" },
            { questName: "Quest: The Priest and the Bandit (Part III)", questDescription: "Return to Brehgo’s spirit in the Crash Site Cave and demand that he tell you where Fahrkus is. Trick him into thinking Arbalah will release the curse if he helps you.", target: "Simon Fahrkus" }
          ],
      },

      // Chests
      // Add chests.
    ],
  },
  {
    filename: "ArcanumBase/DernholmCastle.png",
    displayName: "Dernholm Castle",
    typemap: "local",
    defaultView: { x: 704, y: 956 }, // Good
    // music: ?
    background: "#000000", // Good
    parentFilename: "ArcanumBase/Dernholm.jpg",
    labels: [
      // Waypoints
      { x: 702, y: 956, text: "Dernholm", description: "", category: "waypoint", targetMapFilename: "Dernholm", targetX: 5465, targetY: 1782 },

      // Quests
      { x: 1683, y: 450, text: "King Praetor", sex: "male", category: ["quest", "npc"], 
        linkedLabels: [
          { questName: "Collect Black Root's Taxes for King Praetor", questDescription: "King Praetor would like for you to collect his taxes from Black Root.", target: "Mayor of Black Root" },
          { questName: "Find King Praetor's Daughter", questDescription: "King Praetor wants you to find his daughter.", target: "Body of Princess Aria" },
          { questName: "Kill Prince Auguste Farad", questDescription: "King Praetor wants you to kill prince Auguste Farad.", target: "Auguste Farad" }
        ]
      },

    ],
  },
  {
    filename: "ArcanumBase/DernholmPits.png",
    displayName: "Dernholm Pits",
    modGroup: "Cities",
    typemap: "local",
    defaultView: { x: 341, y: 1317 }, // Good
    // music: ?
    background: "#000000",
    parentFilename: "ArcanumBase/Dernholm.jpg",
    labels: [
      { x: 2399, y: 1977, text: "Dernholm", description: "", category: "waypoint", targetMapFilename: "Dernholm", targetX: 6132, targetY: 1215 },
      { x: 341, y: 1317, text: "Dernholm", description: "", category: "waypoint", targetMapFilename: "Dernholm", targetX: 499, targetY: 573 },
    ],
  },
  {
    filename: "ArcanumBase/DungeonOfTheDragonPoolLevel1.png",
    displayName: "Dungeon of the Dragon Pool - Level 1",
    modGroup: "Cities",
    typemap: "local",
    defaultView: { x: 164, y: 836, zoom: 1 },
    background: "#000000",
    parentFilename: "ArcanumBase/DungeonOfTheDragonPool.jpg",
    labels: [
      // Waypoints
      { x: 164, y: 836, text: "Dungeon of the Dragon Pool", description: "", category: "waypoint", targetMapFilename: "Dungeon of the Dragon Pool", targetX: 1276, targetY: 582 },
      { x: 2234, y: 218, text: "Dungeon of the Dragon Pool - Level 2", description: "", category: "waypoint", targetMapFilename: "Dungeon of the Dragon Pool - Level 2", targetX: 807, targetY: 279 },

      // Chest
      { x: 1331, y: 769, text: "Dragon Pool Key 1", description: "", category: "key" },
      { x: 1980, y: 835, text: "Arcane Chest", description: "", category: ["chest"] },
      { x: 1027, y: 445, text: "Chest", inventory: ["Dragon Pool Key 2", "Random Arcane loot"], category: ["key", "chest"] },

    ],
  },
    {
    filename: "ArcanumBase/DungeonOfTheDragonPoolLevel2.png",
    displayName: "Dungeon of the Dragon Pool - Level 2",
    modGroup: "Cities",
    typemap: "local",
    //defaultView: { x: 338, y: 1307, zoom: 1 },
    background: "#000000",
    parentFilename: "ArcanumBase/DungeonOfTheDragonPool.jpg",
    labels: [
      { x: 807, y: 279, text: "Dungeon of the Dragon Pool - Level 1", description: "", category: "waypoint", targetMapFilename: "Dungeon of the Dragon Pool - Level 1", targetX: 2234, targetY: 218 },
      { x: 1483, y: 627, text: "Dragon Pool", description: "When you click on it you'll receive a vial of dragon's blood.", category: "quest", linkedLabels: ["Torian Kel"] },
    ],
  },
  {
    filename: "ArcanumBase/ElvenRuinsUnderground.png",
    displayName: "Elven Ruins - Underground",
    modGroup: "Cities",
    typemap: "local",
    // music: 
    defaultView: { x: 1870, y: 382, zoom: 1 },
    parentFilename: "ArcanumBase/ElvenRuins.png",
    background: "#000000",
    labels: [
      { x: 1904, y: 342, text: "Elven Ruins", description: "", category: "waypoint", targetMapFilename: "Elven Ruins", targetX: 812, targetY: 471 },
      { x: 629, y: 180, text: "Funeral Stone", description: "", category: "quest", linkedLabels: ["Cassandra Pettibone"] },
    ],
  },
  {
    filename: "ArcanumBase/KnaThaLevel1.jpg",
    displayName: "K’na Tha - Level 1",
    modGroup: "Cities",
    typemap: "local",
    //defaultView: { x: ?, y: ?},
    parentFilename: "ArcanumBase/KnaThaEntrance.png",
    //background: "#000000",
    labels: [
      { x: 3763, y: 2373, text: "K’na Tha - Entrance", description: "", category: "waypoint", targetMapFilename: "K’na Tha", targetX: 848, targetY: 552 },
    ],
  },
  {
    filename: "ArcanumBase/RoseboroughInn.png",
    displayName: "Roseborough Inn",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    //defaultView: { x: ?, y: ? },
    parentFilename: "ArcanumBase/Roseborough.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/RuinsOfSzaboLevel1.png",
    displayName: "Ruins of Szabo - Level 1",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    //defaultView: { x: 3972, y: 1642, zoom: 1 },
    parentFilename: "ArcanumBase/RuinsOfSzaboEntrance.png",
    labels: [
      { x: 450, y: 797, text: "Ruins of Szabo - Entrance", description: "", category: "waypoint", targetMapFilename: "Ruins of Szabo", targetX: 767, targetY: 498 },
    ]
  },
  {
    filename: "ArcanumBase/RuinsOfSzaboLevel2.png",
    displayName: "Ruins of Szabo - Level 2",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    //defaultView: { x: 3972, y: 1642, zoom: 1 },
    parentFilename: "ArcanumBase/RuinsOfSzaboEntrance.png",
    labels: [],
  },
  {
    filename: "ArcanumBase/SecretEntranceToTheIronClanGate.jpg",
    displayName: "Iron Clan - Gate",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    //defaultView: { x: 3168, y: 1742, zoom: 1 },
    parentFilename: "ArcanumBase/SecretEntranceToTheIronClan.png",
    labels: [],
  },
  {
    filename: "ArcanumBase/SecretEntranceToTheIronClanGateThroneHall.jpg",
    displayName: "Iron Clan - Throne Hall",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    //defaultView: { x: 3972, y: 1642, zoom: 1 },
    parentFilename: "ArcanumBase/SecretEntranceToTheIronClan.png",
    labels: [],
  },
  {
    filename: "ArcanumBase/ShroudedHillsTemple.png",
    displayName: "Panarii Temple",
    modGroup: "Cities",
    typemap: "local",
    music: "music/mines.flac",
    background: "#000000",
    defaultView: { x: 545, y: 599, zoom: 1 },
    parentFilename: "ArcanumBase/ShroudedHills.jpg",
    labels: [
      { x: 545, y: 599, text: "Shrouded Hills", category: "waypoint", targetMapFilename: "Shrouded Hills", targetX: 5914, targetY: 3147 },
      { x: 1085, y: 279, text: "Control box", category: "quest", linkedLabels: ["Jongle Dunne"] },
      { x: 1104, y: 315, text: "Hervor", sex: "male", race: "dwarf", level: 5, description: "Herver will rat you out if you destroy the steam machine but leave him alive.", category: "npc" },
    ]
  },
  {
    filename: "ArcanumBase/ShroudedHillsBessieToone.png",
    displayName: "Bessie Toone Mine",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    defaultView: { x: 1697, y: 805, zoom: 1 },
    parentFilename: "ArcanumBase/ShroudedHills.jpg",
    labels: [
      { x: 1697, y: 805, text: "Shrouded Hills", category: "waypoint", targetMapFilename: "Shrouded Hills", targetX: 2179, targetY: 3272 },
      { x: 455, y: 655, text: "Bessie Toone", sex: "Female", race: "Ghost", level: 1, description: "Sarah, my dear Sarah...", category: "quest", linkedLabels: ["Percival Toone", "Sarah Toone"] },
      { x: 462, y: 578, text: "Metal Can", inventory: ["Bessie Toone's Boot"], category: ["quest", "chest"], linkedLabels: ["Ristezze"] },
      { x: 2070, y: 469, text: "Barrel (Sprocket)", inventory: ["...groth sprocket", "Dynamite"], category: ["quest", "chest"], linkedLabels: ["Constable Owens"] },
      { x: 746, y: 452, text: "Magick Chest", category: "chest" },
      { x: 811, y: 488, text: "Mine Cart", inventory: [{name:"Hexed Dagger", tier:"hexed"}], category: "chest" },
    ]
  },

  {
    filename: "ArcanumBase/StillwaterGiantsCave.png",
    displayName: "Stillwater Giants Cave",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    parentFilename: "ArcanumBase/Stillwater.jpg",
    labels: [
      { x: 432, y: 719, text: "Stillwater", description: "", category: "waypoint", targetMapFilename: "Stillwater", targetX: 4211, targetY: 1759, targetZoom: 1.0},
      { x: 1264, y: 483, text: "The Stillwater Giant (Part III)", description: "", category: "quest", linkedLabels: ["The Stillwater Giant (Part IV)"] },
    ]
  },
  {
    filename: "ArcanumBase/StillwaterDrogsCave.png",
    displayName: "Drogs Cave",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    parentFilename: "ArcanumBase/Stillwater.jpg",
    labels: [
      { x: 841, y: 739, text: "Stillwater", description: "", category: "waypoint", targetMapFilename: "Stillwater", targetX: 1681, targetY: 633 },
      { x: 394, y: 202, text: "Cyrus", sex: "male", description: "Rescue Cyrus (Part III)", category: ["quest", "npc"], linkedLabels: "Richard Leeks" },
      { x: 681, y: 392, text: "Drog Black Tooth", description: "Drog will spawn after you start talking with Cyrus. It is possible to avoid combat with him by quickly unlocking or destroying the door to Cyruses cell, talking to Cyrus and then leaving before Drog comes back.", category: "information" },
    ]
  },
  {
    filename: "ArcanumBase/StonecutterClanLevel1.png",
    displayName: "Stonecutter Clan - Level 1",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/StonecutterClan.png",
    background: "#000000",
    labels: [
      { x: 2592, y: 1503, text: "Stonecutter Clan - Entrance", description: "", category: "waypoint", targetMapFilename: "Stonecutter Clan", targetX: 990, targetY: 620 },
      { x: 2519, y: 264, text: "Stonecutter Clan - Level 2", description: "", category: "waypoint", targetMapFilename: "Stonecutter Clan - Level 2", targetX: 328, targetY: 262 },
    ]
  },
  {
    filename: "ArcanumBase/StonecutterClanLevel2.png",
    displayName: "Stonecutter Clan - Level 2",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/StonecutterClan.png",
    background: "#000000",
    labels: [
      { x: 328, y: 262, text: "Stonecutter Clan - Level 1", description: "", category: "waypoint", targetMapFilename: "Stonecutter Clan - Level 1", targetX: 2519, targetY: 264 },
    ]
  },
  {
    filename: "ArcanumBase/Tarant-BatesTunnel.png",
    displayName: "Bates Tunnel",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/Tarant.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/TarantBatesMansionLevel1.png",
    displayName: "Bates Mansion Level 1",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/Tarant.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/TarantBatesMansionLevel2.png",
    displayName: "Bates Mansion Level 2",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/Tarant.png",
    background: "#000000",
    labels: [
      { x: 560, y: 327, text: "Chukka", sex: "Male", level: 16, race: "Ogre", portrait: "Textures/chukka.gif", description: "Although Chukka can only join just prior to exploring the Isle of Despair, he can rejoin after waiting or being disbanded anytime after that.", category: "followers" },
      { x: 541, y: 363, text: "Gilbert Bates", sex: "Male", race: "Human", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "Search the mines of the Black Mountain Clan for clues to their whereabouts, and report back to Bates.", target: "" },
          { questName: "", questDescription: "Find out what happened to the Black Mountain Clan.", target: "" }
        ]
      },
      { x: 797, y: 145, text: "Chest", inventory: ["Journal of Gilbert Bates"], category: ["quest", "chest"],
        linkedLabels: [
          { questName: "", questDescription: "Search the mines of the Black Mountain Clan for clues to their whereabouts.", target: "" }
        ]
      },
    ]
  },
  {
    filename: "ArcanumBase/TarantCityHall.png",
    displayName: "Hall of Records",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/Tarant.png",
    background: "#000000",
    labels: [
      { x: 841, y: 297, text: "Tarant", description: "", category: "waypoint", targetMapFilename: "Tarant" },
      { x: 467, y: 287, text: "Clerk", sex: "female",  description: "", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "Obtain a copy of ''Horror Among the Dark Elves'' by Renford A. Terwilliger.", target: "Librarian"}
        ]
      },
    ]
  },
  {
    filename: "ArcanumBase/Tarant_02.jpg",
    displayName: "Tarant New Sewers",
    modGroup: "Cities",
    typemap: "local",
    music: "music/tarantsewers.flac",
    parentFilename: "ArcanumBase/Tarant.png",
    background: "#000000",
    labels: [
      { x: 80, y: 419, text: "Tarant", description: "", category: "waypoint" },
      { x: 906, y: 664, text: "Tarant", description: "", category: "waypoint" },
      { x: 925, y: 553, text: "Tarant", description: "", category: "waypoint" },
      { x: 1115, y: 91, text: "Tarant", description: "", category: "waypoint" },
    ]
  },
  {
    filename: "ArcanumBase/Tarant_03.jpg",
    displayName: "Tarant Old Sewers",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    music: "music/tarantsewers.flac",
    parentFilename: "ArcanumBase/Tarant.png",
    labels: [
      { x: 564, y: 1778, text: "Tarant", description: "", category: "waypoint" },
      { x: 1714, y: 2153, text: "Tarant", description: "", category: "waypoint" },
      { x: 3805, y: 2239, text: "Tarant", description: "", category: "waypoint" },
      { x: 4273, y: 1436, text: "Tarant", description: "", category: "waypoint" },
    ]
  },
  {
    filename: "ArcanumBase/TarantPSchuylersLevel1.png",
    displayName: "P. Schuyler & Sons - Level 1",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/Tarant.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/TarantPSchuylersLevel2.png",
    displayName: "P. Schuyler & Sons - Level 2",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/Tarant.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/TarantPSchuylersLevel3.png",
    displayName: "P. Schuyler & Sons - Level 3",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/Tarant.png",
    background: "#000000",
    labels: [
      { x: 288, y: 198, text: "Winston Schuyler", sex: "male", category: ["key", "quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "Get information about the strange ring from Gilbert Bates.", target: "Gilbert Bates" }
        ]
      },
      { x: 964, y: 369, text: "Magick Chest", category: "chest" },
      { x: 393, y: 434, text: "Magick Chest", category: "chest" },
      { x: 387, y: 146, text: "Wood Chest", inventory: ["Purchase Order"], category: ["quest", "key", "chest"] },
    ]
  },
  {
    filename: "ArcanumBase/TheBangellianDeepsInside.png",
    displayName: "The Bangellian Deeps - Inside",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    defaultView: { x: 1227, y: 1340, zoom: 1 }, // Good
    parentFilename: "ArcanumBase/TheBangellianDeepsOutside.png",
    labels: [
      { x: 1227, y: 1340, text: "The Bangellian Deeps", description: "", category: "waypoint", targetMapFilename: "The Bangellian Deeps", targetX: 1111, targetY: 896 },
      { x: 1959, y: 1233, text: "Chest with a full inventory of a magick shop", description: "", category: "chest" },
      { x: 2355, y: 197, text: "Chest with the Bangellian Scourge", description: "", category: ["quest", "chest"] },
      { x: 2268, y: 156, text: "Bangellian Furnace", description: "If you're working on the Stringy Pete quest, this is where you should put the Bangellian Scourge to destroy it. You might want to destroy the sword anyway just to receive the 6800 experience reward.", category: ["quest", "chest"] },
      { x: 2216, y: 231, text: "Cursed Paladin", description: "Inventory: arcane axe", category: "information" }
    ]
  },
  {
    filename: "ArcanumBase/TheBlackMountainMinesEntrance.jpg",
    displayName: "The Black Mountain Mines - Entrance",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    //defaultView: { x: 108, y: 614, zoom: 1 },
    parentFilename: "ArcanumBase/TheBlackMountainMines.png",
    labels: [],
  },
  {
    filename: "ArcanumBase/TheBlackMountainMinesLevel1.jpg",
    displayName: "The Black Mountain Mines - Level 1",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    defaultView: { x: 108, y: 614, zoom: 1 },
    parentFilename: "ArcanumBase/TheBlackMountainMines.png",
    labels: [],
  },
  {
    filename: "ArcanumBase/TheBlackMountainMinesLevel2.jpg",
    displayName: "The Black Mountain Mines - Level 2",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    defaultView: { x: 773, y: 405, zoom: 1 },
    parentFilename: "ArcanumBase/TheBlackMountainMines.png",
    labels: [],
  },
  {
    filename: "ArcanumBase/TheBlackMountainMinesLevel3.jpg",
    displayName: "The Black Mountain Mines - Level 3",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    defaultView: { x: 1254, y: 941, zoom: 1 },
    parentFilename: "ArcanumBase/TheBlackMountainMines.png",
    labels: [],
  },
  {
    filename: "ArcanumBase/TheCastleOfSnelNfaInside.png",
    displayName: "The Castle of S’nel N’fa - Inside",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    //defaultView: { x: 1254, y: 941, zoom: 1 },
    parentFilename: "ArcanumBase/TheCastleOfSnelNfa.png",
    labels: [],
  },
  {
    filename: "ArcanumBase/TheLairofBellerogrimEntrance.jpg",
    displayName: "The Lair of Bellerogrim - Entrance",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/TheLairofBellerogrim.png",
    labels: []
  },  
  {
    filename: "ArcanumBase/TheLairofBellerogrimUnderground.png",
    displayName: "The Lair of Bellerogrim - Underground",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    parentFilename: "ArcanumBase/TheLairofBellerogrim.png",
    labels: []
  },
  {
    filename: "ArcanumBase/ThePitOfFiresInside.png",
    displayName: "The Pit of Fires - Inside",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    parentFilename: "ArcanumBase/ThePitOfFires.png",
    labels: []
  },
  {
    filename: "ArcanumBase/ThePlaceOfLostVoicesEntrance.png",
    displayName: "The Place of Lost Voices - Entrance",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    parentFilename: "ArcanumBase/ThePlaceOfLostVoices.jpg",
    labels: []
  },
  {
    filename: "ArcanumBase/ThievesCaveInside.png",
    displayName: "Thieves Cave - Inside",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    parentFilename: "ArcanumBase/ThievesCaveOutside.png",
    labels: [
      { x: 335, y: 233, text: "Renzo", sex: "male", description: "Renzo would like for me to plant the stolen heirloom on Frederik, who can usually be found in the bar of the Roseborough Inn, because he betrayed Renzo and his partners. After I successfully plant eh statue, I am to turn Frederik in to the Captain of the Roseborough Guard.", category: ["quest", "npc"] },
    ]
  },
  {
    filename: "ArcanumBase/TsenAngEntrance.png",
    displayName: "T’sen-Ang Entrance",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/TsenAng.png",
    labels: [
      { x: 1083, y: 561, text: "T’sen-Ang Guards", description: "the two guards next to the staircase there won't let you go up unless you have a Molochean Hand amulet. If you don't have one, the easiest place to find one is on Bingham Schulefest at the Caladon cemetery. You can also just wander around the world map until assassins attack you, and then pick up an amulet from them. Finally, if you're a good-aligned character, you can simply attack the guards to go up (you'll probably end up fighting everybody at T'sen-Ang anyway), but be aware that there are about a half dozen guards in the area. Most are hidden behind trees and are difficult to spot.", category: ["npc", "information"] },
      { x: 1072, y: 511, text: "T’sen Ang", description: "", category: "waypoint", targetMapFilename: "T’sen-Ang", targetX: 2347, targetY: 1314 },
    ]
  },
  {
    filename: "ArcanumBase/TsenAngMinGoradChamber.png",
    displayName: "M'in Gorad Chamber",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    parentFilename: "ArcanumBase/TsenAng.png",
    labels: [
      { x: 137, y: 316, text: "T’sen-Ang", description: "", category: "waypoint", targetMapFilename: "T’sen-Ang", targetX: 2360, targetY: 710 },

      { x: 280, y: 278, text: "M’in Gorad", sex: "female", description: "Kill all of the inhabitants of Stillwater. / I am meant to travel to Caladon and speak with the high priest of the Panarii, K'an Hua. He is to be found in his office inside the Panarii temple there.", category: ["quest", "npc"] },
    ]
  },
  {
    filename: "ArcanumBase/TullaInside.png",
    displayName: "Tulla - Main Floor",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    defaultView: { x: 836, y: 1410, zoom: 1 },
    parentFilename: "ArcanumBase/Tulla.jpg",
    labels: [
      { x: 836, y: 1410, text: "Tulla", category: "waypoint", targetMapFilename: "Tulla", targetX: 2268, targetY: 1619 },
      { x: 2192, y: 604, text: "Simeons Hallway", category: "waypoint", targetMapFilename: "Simeons Hallway" }
    ]
  },
  {
    filename: "ArcanumBase/TullaSimeonsHallway.png",
    displayName: "Simeons Hallway",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    parentFilename: "ArcanumBase/Tulla.jpg",
    labels: []
  },
  {
    filename: "ArcanumBase/TullaSimeonsChamber.jpg",
    displayName: "Simeons Chamber",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    parentFilename: "ArcanumBase/Tulla.jpg",
    labels: []
  },

  {
    filename: "ArcanumBase/UnchartedCave-Inside.png",
    displayName: "Uncharted Cave - Inside",
    modGroup: "Other locations",
    typemap: "local",
    // music: "music/wilderness.flac",
    //defaultView: { x: 1470, y: 762, zoom: 1 },
    background: "#000000",
    parentFilename: "ArcanumBase/UnchartedCave.png",
    labels: [],
  },
  {
    filename: "ArcanumBase/WheelClanLevel1.png",
    displayName: "Wheel Clan - Level 1",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    parentFilename: "ArcanumBase/WheelClan.png",
    labels: [
      { x: 203, y: 643, text: "Wheel Clan - Entrance", description: "", category: "waypoint", targetMapFilename: "Wheel Clan", targetX: 1257, targetY: 418 },
      { x: 1041, y: 226, text: "Wheel Clan - Main Hall", description: "", category: "waypoint", targetMapFilename: "Wheel Clan - Main Hall" },
    ]
  },
  {
    filename: "ArcanumBase/WheelClanMainHall.jpg",
    displayName: "Wheel Clan - Main Hall",
    modGroup: "Cities",
    typemap: "local",
    background: "#000000",
    parentFilename: "ArcanumBase/WheelClan.png",
    labels: []
  },
  {
    filename: "ArcanumBase/Vendigroth.Ruins_02.jpg",
    displayName: "Vendigroth Ruins - Level 1",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/VendigrothRuinssmall.jpg",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/Vendigroth.Ruins_04.jpg",
    displayName: "Vendigroth Ruins - Level 2",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/VendigrothRuinssmall.jpg",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/Vendigroth.Ruins_03.jpg",
    displayName: "Vendigroth Ruins - Velorien’s Altar",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/VendigrothRuinssmall.jpg",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/Vendigroth.Ruins_05.jpg",
    displayName: "Vendigroth Ruins - Laboratory",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/VendigrothRuinssmall.jpg",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/VoidHubIsland.png",
    displayName: "Void - Hub Island",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#100B07",
    labels: []
  },
  {
    filename: "ArcanumBase/VoidIslandStairs.png",
    displayName: "Void - Arronax Prison Island",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#100B07",
    labels: []
  },
  {
    filename: "ArcanumBase/VoidArayaIsland.png",
    displayName: "Void - Araya Island 1",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#0E0A07",
    labels: []
  },
  {
    filename: "ArcanumBase/VoidArayaIsland2.png",
    displayName: "Void - Araya Island 2",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#0E0A07",
    labels: []
  },
  {
    filename: "ArcanumBase/VoidBaneOfKreeIsland.png",
    displayName: "Void - Bane of Kree Island",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#0E0A07",
    labels: []
  },
  {
    filename: "ArcanumBase/VoidGorgothIsland.png",
    displayName: "Void - Gorgoth Island",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#100B07",
    labels: []
  },
  {
    filename: "ArcanumBase/VoidKerghanCastleOutside.png",
    displayName: "Void - Kerghan’s Castle Island",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#100B07",
    labels: []
  },
  {
    filename: "ArcanumBase/VoidKrakaTurIsland.png",
    displayName: "Void - Kraka-tur Island",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#0E0A07",
    labels: []
  },
  {
    filename: "ArcanumBase/VoidIslandCave.png",
    displayName: "Void - Kryggyrd’s Falchion Island",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#0E0A07",
    labels: []
  },
  {
    filename: "ArcanumBase/VoidArronax.png",
    displayName: "Arronax Prison",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#000000",
    labels: [
      { x: 898, y: 445, text: "Arronax", sex: "Male", race: "Elf", level: 50, portrait: "Textures/arronax.gif", description: "Effect Arronax's release from the magick that binds him. / Defeat Kerghan.", category: ["quest", "followers"] },
    ]
  },
  {
    filename: "ArcanumBase/VoidCaveofKryggyrdsFalchion.png",
    displayName: "Cave of the Kryggyrd’s Falchion",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/VoidKerghanCastleLevel1.png",
    displayName: "Kerghan’s Castle - Level 1",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/VoidKerghanCastleLevel2.png",
    displayName: "Kerghan’s Castle - Level 2",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/VoidKerghanCastleLevel3.png",
    displayName: "Kerghan’s Castle - Level 3",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/VoidKerghanCastleFinalLevel.png",
    displayName: "Kerghan’s Chambers",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/VollingersMeetingPlaceBasement.png",
    displayName: "Vollinger’s Meeting Place - Basement",
    modGroup: "Cities",
    typemap: "local",
    //defaultView: { x: 761, y: 1163, zoom: 1 },
    parentFilename: "ArcanumBase/VollingersMeetingPlace.png",
    background: "#000000",
    labels: [
      { x: 506, y: 200, text: "Mystic Chest", description: "", category: "chest" },
      { x: 117, y: 162, text: "Vollinger’s Meeting Place", description: "", category: "waypoint", targetMapFilename: "Vollinger’s Meeting Place", targetX: 944, targetY: 400 },
    ],
  },
  {
    filename: "ArcanumBase/WheelClanCommecialDistrict.jpg",
    displayName: "Wheel Clan - Commercial District",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/WheelClan.png",
    labels: []
  },
  {
    filename: "ArcanumBase/WheelClanMine.jpg",
    displayName: "Wheel Clan - Mine",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/WheelClan.png",
    labels: []
  },
  {
    filename: "ArcanumBase/WheelClanThroneHall.jpg",
    displayName: "Wheel Clan - Throne Hall",
    modGroup: "Cities",
    typemap: "local",
    parentFilename: "ArcanumBase/WheelClan.png",
    labels: []
  },
  {
    filename: "ArcanumBase/WolfCaveInside.png",
    displayName: "Wolf Cave - Inside",
    modGroup: "Cities",
    typemap: "local",
    //defaultView: { x: 761, y: 1163, zoom: 1 },
    parentFilename: "ArcanumBase/WolfCave.png",
    background: "#000000",
    labels: [
      { x: 537, y: 661, text: "Wolf Cave - Outside", description: "", category: "waypoint", targetMapFilename: "Wolf Cave", targetX: 796, targetY: 739 },
    ]
  },
];
