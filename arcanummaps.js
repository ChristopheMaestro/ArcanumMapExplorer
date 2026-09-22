// Arcanum CE Restored - Map Database Manifest (Arcanum: Cities, Quest locations, Other locations)
const ArcanumCitiesMapData = [
  {
    filename: "ArcanumBase/ArcanumWorldMap.jpg",
    displayName: "Arcanum World Map",
    modGroup: "World Map",
    typemap: "overworld",
    music: "music/Arcanum.mp3",
    defaultView: { x: 1000, y: 1000, zoom: 0.6 },
    labels: [
      { x: 503, y: 977, text: "Ashbury", textX: 503, textY: 978, description: "A city on the eastern seaboard.", targetMapFilename: "Ashbury" },
      { x: 1098, y: 1441, text: "Black Root", textX: 1096, textY: 1441, description: "A border town.", targetMapFilename: "Black Root" },
      { x: 1604, y: 1828, text: "Caladon", textX: 1605, textY: 1832, description: "A thriving feudal kingdom.", targetMapFilename: "Caladon" },
      { x: 1237, y: 1650, text: "Dernholm, capital of<br>Cumbria", textX: 1235, textY: 1662, description: "Capital of Cumbria - A dying feudal kingdom.", targetMapFilename: "Dernholm" },
      { x: 323, y: 877, text: "Isle of Despair", textX: 321, textY: 877, description: "A penal colony.", targetMapFilename: "Isle of Despair" },
      { x: 1545, y: 656, text: "Qintarra", textX: 1545, textY: 657, description: "A large elven community.", targetMapFilename: "Qintarra" },
      { x: 1752, y: 1514, text: "Roseborough", description: "A small town near the Ring of Brodgar.", targetMapFilename: "Roseborough" },
      { x: 1410, y: 1317, text: "Shrouded Hills", textX: 1408, textY: 1316, description: "A small mining town.", targetMapFilename: "Shrouded Hills" },
      { x: 1190, y: 753, text: "Stillwater", textX: 1188, textY: 743, description: "A small town, famed for its swords.", targetMapFilename: "Stillwater" },
      { x: 972, y: 1028, text: "Tarant", textX: 971, textY: 1028, description: "The biggest, most industrial city in Arcanum", targetMapFilename: "Tarant" },
      { x: 1179, y: 316, text: "The Bedokaan Village", textX: 1178, textY: 320, description: "As small village of reptilian creatures.", targetMapFilename: "The Bedokaan Village" },
      { x: 1505, y: 297, text: "T'sen-Ang", textX: 1507, textY: 296, description: "Home of the Dark Elves.", targetMapFilename: "T’sen-Ang" },
      { x: 444, y: 489, text: "Tulla", textX: 442, textY: 488, description: "A mysterious city of mages deep in the Vendigroth Wastes.", targetMapFilename: "Tulla" },
      { x: 868, y: 1191, text: "Vooriden", textX: 869, textY: 1190, description: "A small village just south of Tarant.", targetMapFilename: "Vooriden" },
      { x: 954, y: 667, text: "Wheel Clan", textX: 952, textY: 665, description: "A Dwarven society deep in the Grey Mountains.", targetMapFilename: "Wheel Clan" },
      
      { x: 1182, y: 1583, text: "A Lair of Gyr Dolours", textX: 1180, textY: 1582, description: "The last known location of the tormented Lady Druella.", targetMapFilename: "A Lair of Gyr Dolours" },
      { x: 1586, y: 1816, text: "A mysterious location", textX: 1584, textY: 1816, description: "Discovered on the wall painting in the Mushroom.", targetMapFilename: "A mysterious location" },
      { x: 776, y: 919, text: "Ancient Temple", textX: 775, textY: 918, description: "A temple rumored to hold treasures untold.", targetMapFilename: "Ancient Temple" },
      { x: 1452, y: 1303, text: "Arbalah's House", textX: 1592, textY: 1303, description: "Arbalah’s House.", targetMapFilename: "Arbalah’s House" },
      { x: 629, y: 1593, text: "Boat Landing on Thanatos", textX: 626, textY: 1593, description: "Landing for the Isle of Death.", targetMapFilename: "Boat Landing on Thanatos" },
      { x: 1453, y: 1289, text: "Crash Site", textX: 1452, textY: 1286, description: "The remains of the crashed blimp.", targetMapFilename: "Crash Site" },
      { x: 345, y: 649, text: "Dark Elf Camp", textX: 344, textY: 649, description: "The dark elves’ base camp near the ruins of Vendigroth.", targetMapFilename: "Dark Elf Camp" },
      { x: 993, y: 790, text: "Dungeon of the Dragon<br>Pool", textX: 991, textY: 799, description: "Source of Dragon’s Blood for reviving Torian Kel.", targetMapFilename: "Dungeon of the Dragon Pool" },
      { x: 711, y: 1022, text: "Elven Ruins", textX: 708, textY: 1033, description: "A place that may hold untold elven riches.", targetMapFilename: "Elven Ruins" },
      { x: 1627, y: 564, text: "Falcon's Ache", textX: 1625, textY: 563, description: "Elven holy ground, at the edge of the Glimmering Forest.", targetMapFilename: "Falcon’s Ache" },
      { x: 466, y: 741, text: "Gateway to the Wastes", textX: 464, textY: 740, description: "A bridge leading into the Vendigroth Wastes.", targetMapFilename: "Gateway to the Wastes" },
      { x: 1500, y: 1442, text: "Gorgoth Pass", textX: 1499, textY: 1442, description: "A long forgotten pass joining the kingdoms of Dernholm and Caladon.", targetMapFilename: "Gorgoth Pass" },
      { x: 922, y: 1699, text: "Half Ogre Island", textX: 921, textY: 1699, description: "The rumored location of the secret breeding laboratory.", targetMapFilename: "Half Ogre Island" },
      { x: 1288, y: 713, text: "Hardin's Pass", textX: 1287, textY: 713, description: "A treacherous snowy pass leading to the Glimmering Forest.", targetMapFilename: "Hardin’s Pass" },
      { x: 1435, y: 616, text: "K'na Tha", textX: 1433, textY: 615, description: "A place of ancient magick rumored to contain Azram’s Star.", targetMapFilename: "K’na Tha" },
      { x: 635, y: 1204, text: "Kree", textX: 633, textY: 1204, description: "The once great city destroyed by the Bane of Kree.", targetMapFilename: "Kree" },
      { x: 718, y: 1884, text: "Land Bridge", textX: 718, textY: 1885, description: "Beginning of the trail leading to the god of Thanatos.", targetMapFilename: "Land Bridge", targetX: 1435, targetY: 735 },
      { x: 1580, y: 1009, text: "Lethe Wyvern Sighting", textX: 1578, textY: 1009, description: "Rumored lair of the lethe wyvern.", targetMapFilename: "Lethe Wyvern Sighting" },
      { x: 1179, y: 1465, text: "Liam's Workshop", textX: 1177, textY: 1465, description: "Liam Cameron’s Workshop.", targetMapFilename: "Liam’s Workshop" },
      { x: 474, y: 694, text: "Mysterious ruins of the<br>wastes", textX: 472, textY: 704, description: "A location shown to you by Weldo Rubin.", targetMapFilename: "Mysterious ruins of the wastes" },
      { x: 720, y: 1890, text: "Nasrudin's Resting Place", textX: 779, textY: 1899, description: "Reputed to be the location of the remains of Nasrudin.", targetMapFilename: "Nasrudin’s Resting Place", targetX: 3144, targetY: 2443 },
      { x: 1503, y: 1771, text: "Razor's Pointe", textX: 1503, textY: 1771, description: "Ships fear these treacherous waters that must be passed to navigate around the tip of Arcanum.", targetMapFilename: "Razor’s Pointe" },
      { x: 1026, y: 1323, text: "Ruins of Szabo", textX: 1026, textY: 1323, description: "Some ancient ruins.", targetMapFilename: "Ruins of Szabo" },
      { x: 1514, y: 1184, text: "Secret Entrance to the Iron<br>Clan", textX: 1514, textY: 1180, description: "The entrance to the legendary dwarven clan.", targetMapFilename: "Secret Entrance to the Iron Clan" },
      { x: 346, y: 827, text: "Shades Beach", textX: 386, textY: 811, description: "A place reputed to be full of strange objects.", targetMapFilename: "Shades Beach" },
      { x: 1450, y: 1325, text: "Simon Fahrkus' Shack", textX: 1449, textY: 1334, description: "Simon Fahrkus’ Shack.", targetMapFilename: "Simon Fahrkus’ Shack" },
      { x: 1343, y: 887, text: "Stonecutter Clan", description: "The home of the Stonecutter Clan.", targetMapFilename: "Stonecutter Clan" },
      { x: 682, y: 1339, text: "Stringy Petes Cove", textX: 681, textY: 1340, description: "A haunted cove.", targetMapFilename: "Stringy Petes Cove" },
      { x: 805, y: 1341, text: "Stringy Pete's Treasure", textX: 885, textY: 1351, description: "The final resting place of the infamous pirate’s bounty.", targetMapFilename: "Stringy Pete’s Treasure" },
      { x: 1308, y: 754, text: "The Black Mountain<br>Mines", textX: 1311, textY: 778, description: "The abandoned home of the Black Mountain Clan.", targetMapFilename: "The Black Mountain Mines" },
      { x: 1178, y: 289, text: "The Bangellian Deeps", textX: 1179, textY: 278, description: "The resting place of the Bangellian Scourge.", targetMapFilename: "The Bangellian Deeps" },
      { x: 1386, y: 640, text: "The Castle S'nel N'fa", textX: 1386, textY: 641, description: "A trap filled ruin rumored to contain the staff of K’an Tau.", targetMapFilename: "The Castle S’nel N’fa" },
      { x: 320, y: 838, text: "The home of Maximillian", textX: 319, textY: 838, description: "A strange old man on the Isle of Despair.", targetMapFilename: "The Home of Maximillian" },
      { x: 768, y: 838, text: "The Lair of Bellerogrim", textX: 767, textY: 837, description: "A cave where they discovered Arcanum’s last Dragon.", targetMapFilename: "The Lair of Bellerogrim" },
      { x: 642, y: 1765, text: "The Lair of the Bogaroth", textX: 639, textY: 1766, description: "The reputed lair of the monster that slaughtered the entire Ashlag tribe.", targetMapFilename: "The Lair of the Bogaroth" },
      { x: 1364, y: 936, text: "The Pit of Fires", textX: 1362, textY: 936, description: "The location of the Blade Of Xerxes.", targetMapFilename: "The Pit of Fires" },
      { x: 1320, y: 827, text: "The Place of Lost Voices", textX: 1320, textY: 829, description: "A place shown to you by the map in the Iron Clan Chest.", targetMapFilename: "The Place of Lost Voices" },
      { x: 1204, y: 276, text: "The Poachers Camp", textX: 1324, textY: 260, description: "The camp of some Bedokaan poachers.", targetMapFilename: "The Poachers Camp" },
      { x: 793, y: 249, text: "The Ruby Glade", textX: 793, textY: 249, description: "An eerie, ancient place.", targetMapFilename: "The Ruby Glade" },
      { x: 509, y: 1113, text: "The Williamson<br>Homestead", textX: 508, textY: 1124, description: "A run-down shanty.", targetMapFilename: "TheWilliamsonHomestead" },
      { x: 268, y: 824, text: "The Women's Camp", textX: 266, textY: 814, description: "A small village comprised solely of nomadic women.", targetMapFilename: "The Women’s Camp" },
      { x: 1548, y: 1535, text: "Thieves Cave", textX: 1550, textY: 1535, description: "Thieves Cave.", targetMapFilename: "Thieves Cave" },
      { x: 1419, y: 1099, text: "Torin Quarry", textX: 1417, textY: 1100, description: "An ancient dwarven stone quarry.", targetMapFilename: "Torin Quarry" },
      { x: 307, y: 587, text: "Vendigroth Ruins", textX: 305, textY: 586, description: "The remnants of an ancient city.", targetMapFilename: "Vendigroth Ruins" },
      { x: 1230, y: 981, text: "Vollinger's Meeting Place", textX: 1229, textY: 981, description: "Vollinger’s Meeting Place.", targetMapFilename: "Vollinger’s Meeting Place" },
      
      { x: 1367, y: 1582, text: "Ancient Maze", textX: 1365, textY: 1584, description: "A mysterious old maze.", targetMapFilename: "Ancient Maze" },
      { x: 1754, y: 1479, text: "Ancient Ruins", description: "Ancient ruins.", targetMapFilename: "Ancient Ruins" },
      { x: 498, y: 892, text: "Ancient Shipwreck", textX: 497, textY: 891, description: "The remains of an ancient pirate ship.", targetMapFilename: "Ancient Shipwreck" },
      { x: 1627, y: 1635, text: "Bolo's Altar", textX: 1627, textY: 1635, description: "A weathered stone altar.", targetMapFilename: "Bolo’s Altar" },
      { x: 830, y: 1036, text: "Forbidden Pit", textX: 831, textY: 1034, description: "Dangerous looking pit filled with skeletons and widowers.", targetMapFilename: "Forbidden Pit" },
      { x: 882, y: 423, text: "Kerlin's Altar", textX: 880, textY: 422, description: "An ancient, golden altar.", targetMapFilename: "Kerlin’s Altar" },
      { x: 1320, y: 179, text: "Secret Village", description: "You hear high pitched rejoicing.", targetMapFilename: "Secret Village" },
      { x: 1260, y: 479, text: "Small Camp", textX: 1261, textY: 477, description: "A small camp is visible from a distance.", targetMapFilename: "Small Camp" },
      { x: 1595, y: 882, text: "Small Pond", description: "You hear shouts and whip-cracking.", targetMapFilename: "Small Pond" },
      { x: 1373, y: 705, text: "Strange Ceremony", textX: 1373, textY: 694, description: "Strange chanting can be heard nearby....", targetMapFilename: "Strange Ceremony" },
      { x: 617, y: 527, text: "Strange Pond", textX: 616, textY: 526, description: "An interesting pond in the middle of nowhere.", targetMapFilename: "Strange Pond" },
      { x: 1076, y: 514, text: "The Bog", description: "An evil looking place.", targetMapFilename: "The Bog" },
      { x: 1629, y: 1205, text: "The Broken Cathedral", textX: 1627, textY: 1205, description: "A place of old ruins.", targetMapFilename: "The Broken Cathedral" },
      { x: 1613, y: 1413, text: "The Cold Place", textX: 1612, textY: 1413, description: "An ominous place.", targetMapFilename: "The Cold Place" },
      { x: 1695, y: 1318, text: "The Old Lagoon", textX: 1695, textY: 1319, description: "A remote lagoon.", targetMapFilename: "The Old Lagoon" },
      { x: 1214, y: 1137, text: "Torg's Altar", textX: 1215, textY: 1138, description: "An old, stone altar.", targetMapFilename: "Torg’s Altar" },
      { x: 1046, y: 693, text: "Uncharted Cave", textX: 1046, textY: 694, description: "No one knows what mysteries may lie in this unexplored cave.", targetMapFilename: "Uncharted Cave" },
      { x: 745, y: 1700, text: "Village of the Ashlag Tribe", textX: 743, textY: 1700, description: "The home of a primitive tribe that worships a primate deity.", targetMapFilename: "Village of the Ashlag Tribe" },
      { x: 1230, y: 1530, text: "Wolf Cave", textX: 1228, textY: 1530, description: "Wolf Cave.", targetMapFilename: "Wolf Cave" },

      /*
      Work to do - Maps
      =================

      Replace Jen's maps:
        - Tarant (integrate)
        - Caladon Castle Main Floor
        - Caladon Castle Upstairs
        - Caladon Castle Vents
        - Wheel Clan - Town
        - Wheel Clan - Dredge
        - Black Mountain Mines - Level 1
        - Black Mountain Mines - Level 2
        - Black Mountain Mines - Level 3
        - Nasrudin's Resting Place

      New map to do:
        - Mannox's Hole

      Fixes:
        - Fix Qintarra (one part of a tree was cut)
        - Stillwater - cursor appears on the east
      */
    ]
  },
  {
    filename: "ArcanumBase/Ashbury",
    chunked: true,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    width: 11073,
    height: 4620,
    displayName: "Ashbury",
    modGroup: "Cities",
    music: "music/Towns.mp3", // Good
    defaultView: { x: 6743, y: 2729 },
    labels: [
      // Followers
      { x: 8479, y: 1801, text: "Worthless Mutt (Dog)", category: "followers", portrait: "Textures/dog.png", level: 12, sex: "Male", race: "Dog" },
      { x: 5800, y: 2627, text: "Geoffrey Tarellond-Ashe", category: ["quest", "followers"], portrait: "Textures/geoffrey.gif", level: 12, sex: "Male", race: "Human", linkedLabels: [{ questName: "The Ashbury Cemetary", questDescription: "Geoffrey Tarellond-Ashe wants you to help him solve the mystery of the Ashbury Cemetary.", target: "Gem of Malachi Rench", part: 1 }] },
    
      // Waypoints
      { x: 4854, y: 2106, text: "Ashbury Crematorium - Level 1", category: "waypoint", targetMapFilename: "Ashbury Crematorium - Level 1" },
      { x: 6538, y: 748, text: "Haunted Castle - Ground Floor", category: "waypoint", targetMapFilename: "Haunted Castle - Ground Floor" },
      { x: 6109, y: 1862, text: "Scienticians Underground", category: "waypoint", targetMapFilename: "Scienticians Underground" },

      // Shop (All checked and good)
      { x: 7825, y: 2050, text: "Gun Smith", category: "shop", shopType: "Gun store", shopMarkup: 100, level: 33, sex: "male", race: "Human" },
      { x: 6702, y: 1979, text: "Peony the Herbalist", category: "shop", shopType: "Herbalist", shopMarkup: 90, level: 32, sex: "female", race: "Human", inventory: ["Mechanical Dagger"] },
      { x: 6757, y: 2500, text: "General Store Clerk", category: "shop", shopType: "General Store", shopMarkup: 100, level: 29, sex: "female", race: "Human", inventory: ["Shocking Dagger"] },
      { x: 7095, y: 2317, text: "Elf Shopkeeper", category: "shop", shopType: "Magic shop", shopMarkup: 100, level: 28, sex: "female", race: "Elf", inventory: ["Divining Staff", "Magick Robes"] },
      { x: 7471, y: 2241, text: "Fenwick the Tailor", category: "shop", shopType: "Tailor", shopMarkup: 90, level: 23, sex: "male", race: "Half-Elf", inventory: ["Mage’s Dagger"] },
      { x: 7278, y: 2142, text: "Blacksmith", category: "shop", shopType: "Blacksmith", shopMarkup: 110, level: 34, sex: "male", race: "Human", inventory: ["Machined Gauntlets"] },
      { x: 8594, y: 2335, text: "Elven Trader", category: "shop", shopType: "Elven Trader", shopMarkup: 100, level: 35, sex: "male", race: "Elf", inventory: ["Shaman's Staff", "Scroll of Call Earth Elemental", "Scroll of Teleportation"] },
      { x: 8437, y: 2215, text: "Raymond Pierce", description: "If you didn't get a pair of Wheel Clan spectacles from Thorvald on the Isle of Despair, you can get Raymond Pierce to make them in his shop. Just ask him what sorts of wares he carries, and then ask him to make you some custom spectacles. He'll charge you 1000 gold and also require a kathorn crystal.", category: "shop", shopType: "Glasses", shopMarkup: 100, level: 28, sex: "male", race: "Human" },
      { x: 7558, y: 4051, text: "Wise Woman", category: "shop", shopType: "Nomad", shopMarkup: 150, level: 37, sex: "female", race: "Halfling" },

      // Shop signs
      { x: 6909, y: 2619, text: "Ashbury Sundries", category: "information" },
      { x: 7231, y: 2462, text: "The Crooked Staff", category: "information" },
      { x: 7350, y: 2291, text: "Fenwick's Fine Clothing and Accounterments", category: "information" },
      { x: 7156, y: 2186, text: "Ashbury Premium Armature", category: "information" },
      { x: 6793, y: 2046, text: "Peony's Fyne Herbs", category: "information" },
      { x: 7983, y: 2090, text: "Side Arms and Saltpeter", category: "information" },
      { x: 7846, y: 1803, text: "Ashbury Hostelry", category: "information" },

      // Quests
      { x: 6116, y: 2062, text: "Theodore", category: ["quest", "npc"], level: 8, sex: "male", race: "Human", 
        linkedLabels: [{ questName: "Retrieve Theodore's Platemail", questDescription: "A fellow named Theodore wants you to retrieve his 'technologically improved' plate from Ashbury's local scientician.", target: "Wood Chest (Plate)", part: 1 }] },
      { x: 7391, y: 1882, text: "Chester Miller, Mayor of Ashbury", category: ["quest", "npc"], level: 1, sex: "male", race: "Human", 
        linkedLabels: [{ questName: "Monument Planning", questDescription: "The Mayor of Ashbury will allow you to answer questions at this evenings Town Council meeting. Your answers must please as many people as possible.", target: "City Hall", part: 1 },
          { questName: "Monument Planning", questDescription: "If the townspeople like all of your answers you'll receive 2300 experience, and you'll earn the reputation as an Orator of Ashbury.", part: "reward" }] },
      { x: 7310, y: 1630, text: "City Hall", category: "quest", 
        linkedLabels: [{ questName: "Monument Planning", questDescription: "Give the following answer to the quests:<br>a) ''It is right and fitting that Ashbury should honor its heroes.'';<br>b) ''Hierarchical design principals require a central location.'';<br>c) ''An issue of municipal bonds would easily raise the funds.'';<br>d) ''We will bid the project competitively and take the lowest bidder.'';<br> e) ''Probably a metal statue of some kind. It will last longer.'';<br>f) ''Take an inch and you have a mile.''<br>Then, return to Chest Miller.", target: "Chester Miller, Mayor of Ashbury", part: 2 }] },
      { x: 6643, y: 3429, text: "Theo Brightstart", category: ["quest", "npc"], level: 24, sex: "male", race: "Halfling", 
        linkedLabels: [
          { questName: "Kill the Wild Pigs", questDescription: "Kill the 3 wild pigs that keep eating Theo Brightstart's corn crop.", part: 1 },
          { questName: "Move the Boulders", questDescription: "Load the 5 large boulders located in Theo Brightstart's field onto his cart.", part: 1 }
        ]
      },
      { x: 5860, y: 3174, text: "Three wild pigs", category: "quest",
        linkedLabels: [
          { questName: "Kill the Wild Pigs", questDescription: "After having killed the pigs, return to Theo and he will reward you 50 coins (or 75 if you negotiate).", target: "Theo Brightstart", part: "reward" }
        ]
      },
      { x: 6789, y: 3701, text: "Five boulders", category: "quest",
        linkedLabels: [
          { questName: "Move the Boulders", questDescription: "Moving the boulders requires at least 12 strength, as they are very heavy. Theo will pay you 50 or 100 coins for your efforts.", target: "Theo Brightstart", part: "reward" }
        ]
      },
      { x: 8294, y: 3609, text: "William Thorndop", master: "Firearms Master", category: ["quest", "npc", "master"], level: 48, sex: "male", race: "Human", inventory: ["Looking Glass Rifle"], 
        linkedLabels: [{ questName: "Rescue Mrs. Rolland Unharmed", questDescription: "Kill the entire Willbecker Gang and release their hostage, Mrs. Rolland, unharmed.", questType: "master", target: "Mrs. Rolland", part: 1 }] },
      { x: 10155, y: 3120, text: "Mrs. Rolland", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Rescue Mrs. Rolland Unharmed", questDescription: "Save Mrs. Rolland. If she dies (and even if you resurrect her afterwards), the quest will be botched and you won't receive your training.", questType: "master", target: "Mrs. Rolland", part: "reward" }
        ]
      },
      { x: 9734, y: 1775, text: "Captain Edward Teach (Ashbury)", category: ["quest", "npc"], level: 23, sex: "male", race: "Human", 
        linkedLabels: [{ questName: "Investigate the Isle of Despair", questDescription: "Edward Teach will take you to the Isle of Despair, for free if you work with Gilbert Bates, or for 500 coins.", questType: "main", target: "Captain Edward Teach (Isle of Despair)", part: 3 }] },
      { x: 9633, y: 1807, text: "Barrel", category: ["quest", "chest"], chestState: "locked", inventory: ["The Hand"], 
        linkedLabels: [{ questName: "The Hand", questDescription: "Get the book ''The Hand'' for Ogdin", target: "Ogdin", part: 1 }] },
      { x: 6409, y: 1806, text: "Kendrick Wales", description: "The first time you talk to him, Wales will let you know that he's the author of The Curse of T'sen-Ang, but he won't tell you anything about the book. Later you'll get to read a copy of the book, and learn how Wales picked up the information to write it.", category: ["quest", "npc"], level: 1, sex: "male", race: "Gnome",
        linkedLabels: [{ questName: "Investigation for Lillian Misk", questDescription: "", target: "", part: "" }] },

      // Other
      { x: 4774, y: 1988, text: "Infernal Hammer", description: "Guarded by two fire elementals.", category: "information", inventory: ["Infernal Hammer"] },
      { x: 4955, y: 1410, text: "Train conductor (Ashbury)", sex: "male", race: "Human", level: 19, category: "npc" },
      { x: 4557, y: 1607, text: "Train conductor (Ashbury)", sex: "male", race: "Human", level: 19, category: "npc" },    
    ]
  },
  {
    filename: "ArcanumBase/BlackRoot",
    chunked: true,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    width: 8624,
    height: 4448,
    displayName: "Black Root",
    modGroup: "Cities",
    music: "music/Towns.mp3", // Good
    labels: [
      // Waypoints
      { x: 4224, y: 1820, text: "Train Conductor (Black Root)", sex: "male", race: "Human", level: 1, description: "Tarant / Ashbury. 75 gold per party member.", category: ["npc"] },
      { x: 4628, y: 1618, text: "Train Conductor (Black Root)", sex: "male", race: "Human", level: 1, description: "Tarant / Ashbury. 75 gold per party member.", category: ["npc"] },

      // Followers
      { x: 5593, y: 2093, text: "Dante", sex: "Male", race: "Human", level: 12, portrait: "Textures/dante.png", category: "followers" },
      { x: 4727, y: 3785, text: "Franklin Payne", sex: "Male", race: "Human", level: 35, portrait: "Textures/franklinpayne.gif", description: "Franklin Payne will only show up after you've visited T'sen-Ang and learned the fate of the Black Mountain Clan . If you ask him the most dangerous place he's ever been, he'll say Thanatos. At that point you can invite him to come along with you to Thanatos, even if you joined the dark elves and thus can't go to Thanatos.", inventory: ["Elephant Gun", "Mithril Chainmail"], category: ["followers", "information"] },
      
      // Shop
      { x: 3912, y: 2885, text: "Garret Almstead", sex: "male", race: "Half-Orc", level: 38, shopType: "Blacksmith", shopMarkup: 110, inventory: ["Dwarven Gauntlets", "Almstead's Axe", "Key to Garret Almstead's Trunk"], category: ["quest", "shop", "key"],
        linkedLabels: [
          { questName: "Retrieve the Strongbox", questDescription: "", target: "Daniel Hallaway", part: 2 }
        ]
      },
      { x: 3575, y: 3080, text: "Tailor", sex: "female", race: "Human", level: 24, shopType: "Tailor", shopMarkup: 90, inventory: ["Enchanted Gown"], category: ["shop"] },
      { x: 5032, y: 2161, text: "General Store Clerk", sex: "male", race: "Human", level: 34, shopType: "General Store", shopMarkup: 110, category: ["shop"] },
      { x: 4383, y: 3109, text: "Inventor", sex: "male", race: "Human", level: 33, shopType: "Inventor", shopMarkup: 110, category: ["shop"] },
      { x: 5496, y: 2376, text: "Junk Dealer", shopType: "Junk Dealer", sex: "Male", race: "Half-Orc", level: 30, shopMarkup: 200, category: ["shop"] },
      { x: 4360, y: 2355, text: "Herbalist", sex: "female", race: "Elf", level: 27, inventory: ["Staff of Healing"], shopType: "Herbalist", shopMarkup: 90, category: ["shop"] },
      { x: 3083, y: 2915, text: "Dierdre, the Magick Shop Clerk", sex: "female", race: "Half-Elf", level: 34, shopType: "Magic Shop", shopMarkup: 100, category: ["shop"] },

      // Quests
      // Black Root Taxes
      { x: 7180, y: 2486, text: "Mayor of Black Root", sex: "male", race: "Human", level: 10, inventory: ["Chest of Gold"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Collect Black Root's Taxes for King Praetor", questDescription: "Black Root Mayor won't give you the taxes unless you retrieve his ceremonial silver dagger.", target: "King Praetor", part: 2 },
          { questName: "Retrieve the ceremonial silver dagger", questDescription: "The Mayor of Black Root wants you to find his badge of office, a ceremonial silver dagger, stolen by a local gang of thieves.", target: "D'ak Taan", part: 1 }
        ] },
      { x: 3164, y: 1271, text: "D'ak Taan", sex: "male", race: "Elf", level: 21, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Retrieve the ceremonial silver dagger", questDescription: "D'ak Taan will give you stolen items if you do a quest for him. You have two options.", target: "Mayor of Black Root", part: 2 },
          { questName: "Retrieve the ceremonial silver dagger", questDescription: "D'ak Taan the thief wants you to rob the Hedgewizard's chest. If successful, he will give you stolen items from Black Root.", target: "Tugal the Hedgewizard", part: 3 },
          { questName: "Retrieve the ceremonial silver dagger", questDescription: "D'ak Taan the thief wants you to obtain poison from Grunwalde. If successful, he will give you stolen items from Black Root.", target: "Grunwalde", part: 3 }
        ] },
      { x: 2331, y: 3399, text: "Tugal the Hedgewizard", sex: "male", race: "Gnome", level: 14, inventory:["Scroll of Summon Undead"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Retrieve the ceremonial silver dagger", questDescription: "Tugal the Hedgewizard is a paranoid little man. He won't let you get his statuette. Take care of him and lockpick or destroy his chest.", target: "Wood Chest (Tugal)", part: 4 }
        ]
      },
      { x: 2213, y: 3361, text: "Wood Chest (Tugal)", inventory: ["Small Statuette"], category: ["quest", "chest"],
        linkedLabels: [
          { questName: "Retrieve the ceremonial silver dagger", questDescription: "After retrieving the small statuette, return to D'ak Taan.", target: "D'ak Taan", part: 5 }
        ]
      },
      { x: 4627, y: 3224, text: "Grunwalde", sex: "male", race: "Human", level: 25, inventory: ["Envenomed Sword", "Grunwalde's Poison"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Retrieve the ceremonial silver dagger", questDescription: "", target: "D'ak Taan", part: 5 }
        ]
      },

      // Ancient Game
      { x: 8125, y: 2907, text: "Naked Halfling (1)", sex: "male", race: "Halfling", level: 1, description: "A strange halfling seems to have included you in an ancient game.", category: ["quest", "npc"], 
        linkedLabels: [
          { questName: "Ancient Game", questDescription: "A painted face, hands with no bones. My oldest brother was made of stones. What am I?<br>Correct answer: A clock.", target: "Naked Halfling (2)", part: 1 },
        ]
      },
      { x: 1947, y: 1610, text: "Naked Halfling (2)", sex: "male", race: "Halfling", level: 1, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Ancient Game", questDescription: "Death to one, while birthing another - trees begin to shiver around its grandmother. What am I?<br>Correct answer: Spring.", target: "Naked Halfling (3)", part: 2 }
        ]
      },
      { x: 1783, y: 920, text: "Naked Halfling (3)", sex: "male", race: "Halfling", level: 50, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Ancient Game", questDescription: "Causing wounds, and cleansing. History dies from its rinsing. Life or scars is its blessing. What am I?<br>Correct answer: Fire", part: "reward" }
        ]
      },

      // Other quests
      { x: 5458, y: 3392, text: "Mrs. Lydia Cameron", sex: "female", race: "Human", level: 28, inventory: ["Mage’s Dagger", "Chapeau of Magnetic Inversion"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Find Liam Cameron", questDescription: "When you talk to Mrs. Cameron, she'll tell you that her son Liam has gone missing from his workshop. Then she'll mark the location of his workshop on your map.", target: "Dresser (Liam’s Workshop)", part: 1 }
        ]
      },
      { x: 3248, y: 2623, text: "Kietzel Pierce (Black Root)", sex: "male", race: "Half-Elf", level: 48, master: "Bow Master", category: ["quest", "npc", "master"],
        linkedLabels: [
          { questName: "Find Dudley Crosston", questDescription: "Kietzel ask to find Dudley Crosston, and let him know where Kietzel has gone.", target: "Dudley Crosston", part: 1 },
          "Kietzel Pierce (Caladon)"
        ]
      },
      { x: 3568, y: 2664, text: "Daniel Hallaway", sex: "male", race: "Human", level: 32, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Retrieve the Strongbox", questDescription: "The innkeeper wants you to bring back his strong box from the blacksmith.", target: "Garret Almstead", part: 1 }
        ] 
      },
      { x: 3184, y: 2665, text: "Clarissa Shalmo", sex: "female", race: "Half-Orc", level: 47, master: "Master of Throwing", category: ["quest", "npc", "master"],
        linkedLabels: [
          { questName: "Retrieve Azram’s Star" , questDescription: "Retrieve Azram’s Star from K’na Tha for Clarissa Shalmo in Black Root.", questType: "master", target: "Altar (Azram’s Star)", part: 1 }
        ]
      },
      { x: 2028, y: 3570, text: "Tyron's Note", inventory: ["Tyron's Note"], category: "quest", linkedLabels: [
          { questName: "The Ren'ar Siamese Twins", questDescription: "Tyron has vanished, leaving behind a mysterious note. Report back to Matt de Cesare.", target: "Matt de Cesare", part: 4}
        ]
      },
      { x: 5575, y: 2040, text: "Killian Drake", sex: "male", race: "Human", level: 45, description: "Killian Drake only appears if you are a Master of Gambling. You can win a boat from him.", category: ["npc"] },

      // Information
      { x: 5926, y: 1652, text: "Master Shipbuilder", sex: "male", race: "Human", level: 15, description: "At one point in the game you might need to buy a ship. The regular price is 50,000 coins, but a skilled haggler can try to negotiate. The price will be brought down to 35,000 with maximum (rank 20, 5 character points worth) Haggle but no Master status, whereas a Haggle Master can reduce it down to 25,000.", category: ["npc", "information"] },
      { x: 5685, y: 2704, text: "Herkemer Oggdoddler", sex: "male", race: "Human", level: 38, description: "If you let him tell his war stories for long enough, he'll offer to give you expert training in melee , dodge , firearms , and spot traps.", category: "npc" },
      { x: 864, y: 3243, text: "Monster around Black Root (1/3)", description: "", category: "information" },
      { x: 3707, y: 3803, text: "Monster around Black Root (2/3)", description: "", category: "information" },
      { x: 5738, y: 4002, text: "Monster around Black Root (3/3)", description: "", category: "information" },
      { x: 5581, y: 2193, text: "The Sour Barnacle", description: "", category: "information" },
      { x: 5496, y: 2438, text: "Seaside Salvage", description: "", category: "information" },
      { x: 4990, y: 2240, text: "Captain's Quarter", description: "", category: "information" },
      { x: 4474, y: 2396, text: "Theriacal Herbs", description: "", category: "information" },
      { x: 3810, y: 2926, text: "The Stedfast Anvil", description: "", category: "information" },
      { x: 3610, y: 3148, text: "The Dancing Needle", description: "", category: "information" },
      { x: 3593, y: 2746, text: "Drop Yer Anchor", description: "", category: "information" },
      { x: 3411, y: 2826, text: "Annabelle's Galley", description: "", category: "information" },
      { x: 3135, y: 2975, text: "Deidre's Charms and Magickal Potions", description: "", category: "information" },
    ]
  },
  {
    filename: "ArcanumBase/Caladon",
    chunked: true,
    width: 10000,
    height: 10000,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "Caladon",
    modGroup: "Cities",
    music: "music/Caladon.mp3",
    defaultView: { x: 3596, y: 3305 },
    labels: [
      { x: 4690, y: 1554, text: "Caladon Panarii Temple - Level 1", category: "waypoint", targetMapFilename: "Caladon Panarii Temple - Level 1" },
      { x: 6902, y: 2025, text: "Caladon Castle - Main Floor", category: "waypoint", targetMapFilename: "Caladon Castle - Main Floor" },
      { x: 7159, y: 2717, text: "Guardhouse Basement", category: "waypoint", targetMapFilename: "Guardhouse Basement" },
      { x: 7818, y: 2094, text: "High Security Prison", category: "waypoint", targetMapFilename: "High Security Prison" },
      { x: 6172, y: 2216, text: "Mafia Underground", category: "waypoint", targetMapFilename: "Mafia Underground" },
      { x: 5666, y: 1900, text: "Sanders Basement", category: "waypoint", targetMapFilename: "Sanders Basement" },
      { x: 7167, y: 973, text: "Trap Disarm Dungeon", category: "waypoint", targetMapFilename: "Trap Disarm Dungeon" },
      { x: 8525, y: 1797, text: "Caladon Sewers", category: "waypoint", targetMapFilename: "Caladon - Sewers", targetX: 3690, targetY: 819 },
      { x: 4642, y: 1585, text: "Caladon Sewers", category: "waypoint", targetMapFilename: "Caladon - Sewers", targetX: 2244, targetY: 346 },
      { x: 6589, y: 1235, text: "Caladon Sewers", category: "waypoint", targetMapFilename: "Caladon - Sewers", targetX: 2753, targetY: 356 },
      { x: 7769, y: 2848, text: "Caladon Sewers", category: "waypoint", targetMapFilename: "Caladon - Sewers", targetX: 3265, targetY: 1347 },
      { x: 5891, y: 2527, text: "Caladon Sewers", category: "waypoint", targetMapFilename: "Caladon - Sewers", targetX: 2148, targetY: 1103 },
      { x: 6031, y: 3584, text: "Caladon Sewers", category: "waypoint", targetMapFilename: "Caladon - Sewers", targetX: 2326, targetY: 1784 },
      { x: 6716, y: 388, text: "Wise Woman", category: "shop", shopType: "Nomad", shopMarkup: 150, level: 28, sex: "female", race: "Human" },
      { x: 6109, y: 2138, text: "Human Shopkeeper", category: "shop", shopType: "Black market", shopMarkup: 100, level: 34, sex: "male", race: "Human" },
      { x: 5425, y: 2412, text: "Magickal Smith", category: "shop", shopType: "Magickal smith", shopMarkup: 100, level: 37, sex: "male", race: "Half-Elf" },
      { x: 5619, y: 2394, text: "Magick Shop Clerk", category: "shop", shopType: "Magic shop", shopMarkup: 100, level: 30, sex: "female", race: "Elf" },
      { x: 4708, y: 2432, text: "Herbalist", category: "shop", shopType: "Herbalist", shopMarkup: 90, level: 34, sex: "female", race: "Half-Elf" },
      { x: 5086, y: 2622, text: "Dwarven Smith", category: "shop", shopType: "Blacksmith", shopMarkup: 105, level: 34, sex: "male", race: "Dwarf" },
      { x: 4622, y: 2867, text: "Kietzel Pierce (Caladon)", master: "Bow Master", category: ["quest", "npc", "master"], level: 48, sex: "male", race: "Half-Elf",
        linkedLabels: [
          { questName: "Find the Bow of Ecclesiates", questDescription: "Kietzel Pearce will train you as a Bow Master if you can find the Bow of Ecclesiates, said to be hidden in the ancient Ruins of Szabo.", questType: "master", part: 1 }
        ]
      },
      { x: 5125, y: 2185, text: "Lillian Misk", category: ["quest", "npc"], level: 21, sex: "female", race: "Human",
        linkedLabels: [
          { questName: "Find Mr. Victor Misk", questDescription: "Victor Misk is dead. He was killed because of his ownership of the book Horror Among the Dark Elves", part: 2 },
          { questName: "Investigation for Lillian Misk", questDescription: "Lillian Misk wants an investigation into who disclosed the information concerning the ownership of ''Horror Among the Dark Elves'' by her late husband.", part: 1 }
        ]
      },
      { x: 5098, y: 2257, text: "Wesley the Butler", category: ["quest", "npc"], level: 18, sex: "male", race: "Human",
        linkedLabels: [
          { questName: "Investigation for Lillian Misk", part: 2 }
        ]
      },
      { x: 5238, y: 2037, text: "Brinda the Maid", category: ["quest", "npc"], level: 19, sex: "female", race: "Half-Orc",
        linkedLabels: [
          { questName: "Investigation for Lillian Misk", part: 3 }
        ]
      },
      { x: 6673, y: 2056, text: "Edward Willoughsby (Caladon)", category: ["quest", "npc"], level: 45, sex: "male", race: "Gnome",
        linkedLabels: [
          { questName: "Negotiations with Caladon", questDescription: "Edward Willoughsby wants you to convince King Farad's advisors that Caladon should join the Unified Kingdom.", questType: "master", part: 3 }
        ]
      },
      { x: 5639, y: 2121, text: "Elite Guard", category: ["quest", "npc"], level: 35, sex: "male", race: "Human",
        linkedLabels: [
          { questName: "Stop the Whytechurch Murderer", questDescription: "The guard told you to talk with Henderson if you want to help in the investigation.", target: "Chief Inspector Henderson", part: 1 }
        ]
      },
      { x: 7514, y: 2109, text: "Chief Inspector Henderson", category: ["quest", "npc"], level: 35, sex: "male", race: "Gnome",
        linkedLabels: [
          { questName: "Stop the Whytechurch Murderer", questDescription: "Chief Inspector Henderson has charged you with the task of finding the Whytechurch Murderer.", part: 2 }
        ]
      },
      { x: 7127, y: 1015, text: "Daniel McPherson", master: "Trap Master", category: ["quest", "npc", "master"], level: 47, sex: "male", race: "Human",
        linkedLabels: [
          { questName: "Survive the Training Maze", questDescription: "Daniel McPherson will train you as the Trap Master if you can survive the training maze beneath his house.", target: "Exit the Maze", questType: "master", part: 1 }
        ]
      },
      { x: 6842, y: 862, text: "Adam Maxwell", category: ["quest", "npc"], level: 29, sex: "male", race: "Human",
        linkedLabels: [
          { questName: "Caladon Thieves Underground", questDescription: "Adam Maxwell, a member of the Thieves Underground, has asked you to steal the ancient book entitled ''Divinations and Magicks for the Adept Wizard'' from the home of Widower Misk in Caladon.", part: 1 },
          { questName: "Caladon Thieves Underground", questDescription: "Adam Maxwell, a member of the Thieves Underground, has asked you to heist the priceless Necklace of Queen K'na S'ea from the museum in Caladon.", part: 3 }
        ]
      },
      { x: 5021, y: 2127, text: "Bookstand", description: "Divinations and Magicks for the Adept Wizard", category: ["quest", "chest"],
        linkedLabels: [
          { questName: "Caladon Thieves Underground", questDescription: "Retrieve the book from its locked case", target: "Adam Maxwell", part: 2 }
        ]
      },
      { x: 5802, y: 855, text: "Safe", category: ["chest", "quest"], chestState: "locked", inventory: ["Necklace of Queen K'na S'ea"],
        linkedLabels: [
          { questName: "Caladon Thieves Underground", questDescription: "Steal the necklace, defeat the Mechanized Arachnids, and return to Adam Maxwell.", target: "Adam Maxwell", part: 4 }
        ]
      },
      { x: 5797, y: 2291, text: "Ryan Sanders", category: ["quest", "npc", "bounty"], level: 17, sex: "male", race: "Human", inventory: ["Ryan Sander's Timepiece", "Decent Gold Ring"],
        linkedLabels: [
          { questName: "Kill Jonathan Sanders", questDescription: "Ryan Sanders wants you to kill his father, Jonathan Sanders. He will pay you 1,000 coin when the job is complete.", target: "Jonathan Sanders", part: 1 }
        ]
      },
      { x: 5489, y: 1971, text: "Jonathan Sanders", category: ["quest", "npc"], level: 31, sex: "male", race: "Human",
        linkedLabels: [
          { questName: "Kill Jonathan Sanders", questDescription: "Kill Jonathan Sanders and return to Ryan Sanders.", target: "Ryan Sanders", part: "reward" }
        ]
      },
      { x: 2471, y: 4038, text: "David Wit", category: ["quest", "npc"], level: 17, sex: "male", race: "Human",
        linkedLabels: [
          { questName: "Discover what is killing David's rabbits", questDescription: "David Wit would like you to discover what is killing his rabbits.", target: "Cynthia Wit", part: 1 },
          { questName: "Discover what is killing David's rabbits", questDescription: "Find a cure for Cynthia Wit's werewolf curse.", target: "S'Btin'ka, Morph Master", part: 3 }
        ]
      },
      { x: 2609, y: 3946, text: "Cynthia Wit", category: ["quest", "npc"], level: 5, sex: "female", race: "Human",
        linkedLabels: [
          { questName: "Discover what is killing David's rabbits", questDescription: "Wait for the night to see Cynthia Wit transform into a werewolf, then report to David Wit.", target: "Cynthia Wit", part: 2 }
        ]
      },
      { x: 1518, y: 3148, text: "Hieronymous Maxim", master: "Master Repair", category: ["quest", "npc", "master"], level: 45, sex: "male", race: "Human",
        linkedLabels: [
          { questName: "Find Proof that Maxim's Air Machines Flew", questDescription: "Find proof for Hieronymous Maxim that his heavier than air machines actually flew.", target: "Isaac Zapruder", questType: "master", part: 1 },
          { questName: "Find Proof that Maxim's Air Machines Flew", questDescription: "To thank you for proving his machines can fly, Hieronymous Maxim will offer you to be trained as a master of repair.", questType: "master", part: "reward" }
        ]
      },
      { x: 6626, y: 996, text: "Arthur Tyron", category: ["quest", "npc"], level: 1, sex: "male", race: "Human",
        linkedLabels: [
          { questName: "The Ren'ar Siamese Twins", questDescription: "Arthur Tyron needs you to find proof of Half-Ogre breeding that was done on the ''Half-Ogre Island''.", target: "Safe (Half Ogre Island)", part: 6 }
        ]
      },
      { x: 6587, y: 953, text: "Gnome City Dweller", category: ["quest", "npc"], level: 45, sex: "male", race: "Gnome",
        linkedLabels: [
          { questName: "The Ren'ar Siamese Twins", questDescription: "Arthur Tyron has disappeared. In his place is a gnome that has been waiting for you, and will tell you all about the Half-Ogre conspiracy.", part: "reward" }
        ]
      },
      { x: 4132, y: 2112, text: "Grave of Victor Misk", description: "Book purchased at the Roseborough Gift Shop.", category: ["quest", "chest"],
        linkedLabels: [
          { questName: "Investigate M'in Gorad", questType: "main" }
        ]
      },
      { x: 5032, y: 2221, text: "Display case", category: ["quest", "chest"], inventory: ["The Book of Durin's Truth"],
        linkedLabels: [
          { questName: "The Iron Clan", questDescription: "Buy or steal the book by pickpocketing Mrs. Misk, but do not damage the display case or it will explode. Reading the book will tell you of the location of the entrance to the clan, and of the Glass Key that opens it.", target: "Glass Key", part: 4 }
        ]
      },
      { x: 6551, y: 3815, text: "Bullors", category: ["quest", "npc"], level: 20, sex: "male", race: "Dwarf",
        linkedLabels: [
          { questName: "Assassinating King Farad", questDescription: "Heinrich Jenks wants you to assassinate King Farad of Caladon.", target: "Wooden Crate", part: 2 }
        ]
      },
      { x: 6527, y: 3765, text: "Wooden Crate", category: "quest",
        linkedLabels: [
          { questName: "Assassinating King Farad", questDescription: "Heinrich Jenks wants you to assassinate King Farad of Caladon.", target: "Vernon", part: 3 }
        ]
      },
      { x: 6033, y: 2091, text: "Mr. Razzia", category: ["quest", "npc"], level: 42, sex: "male", race: "Half-Orc",
        linkedLabels: [
          { questName: "Find the Master of Prowling", questDescription: "Read the Prowling Master Note 1 and follow its directions.", target: "Prowling Master Note 2", questType: "master", part: 1 }
        ]
      },
      { x: 4365, y: 2488, text: "Prowling Master Note 2", category: "quest",
        linkedLabels: [
          { questName: "Find the Master of Prowling", questDescription: "After reading the Prowling Master Note 2, you should equip spectacles found next to the bed and watch the portrait.", target: "Something Mid Sized", questType: "master", part: 2 }
        ]
      },
      { x: 4344, y: 2436, text: "Something Mid Sized", category: "quest",
        linkedLabels: [
          { questName: "Find the Master of Prowling", questDescription: "The portrait revealed the coordinates to a mysterious place.", target: "Hollow Stump", questType: "master", part: 3 }
        ]
      },
      { x: 4522, y: 2901, text: "Mushroom's Fireplace", category: "quest",
        linkedLabels: [
          { questName: "Find the Master of Prowling", questDescription: "Reading the note next to the fire reveals a different message, that informs you that the master is Albert Leek and that he can be found in the Sobbing Onion.", target: "Albert Leek", questType: "master", part: 5 }
        ]
      },
      { x: 5669, y: 2238, text: "Albert Leek", master: "Prowling Master", category: ["quest", "master"], level: 42, sex: "male", race: "Half-Elf",
        linkedLabels: [
          { questName: "Find the Master of Prowling", questDescription: "The man will introduce himself as A.L. Make him drink until he recognizes being Albert Leek and trains you.", questType: "master", part: "reward" }
        ]
      },
      { x: 6055, y: 6626, text: "Chest Of Gold", category: "bounty" },
      { x: 4188, y: 2561, text: "Chest", category: ["chest", "bounty"], inventory: ["Great Aunt Ester's Amulet"] },
      { x: 5799, y: 3708, text: "Crate", category: ["chest", "bounty"], inventory: ["Post Bound For Tarant"] },
      { x: 7713, y: 2062, text: "Cabinet", category: ["chest", "bounty"], chestState: "locked", inventory: ["Ryan Marshall's Police Record"] },
      { x: 4587, y: 1963, text: "Grave of Lawrence Brummond", description: "Virgil, born Virgil Brummond, grew up in Caladon with his brother Lawrence Brummond as a local drifter and criminal-associate. After losing in a gamble, his brother was beaten to death, whereby Virgil fled from Caladon until he was taken in by Elder Joachim, and underwent a complete transformation by embracing the Panarii Religion. He is sent to escort the supposed reincarnation of Nasurdin back Shrouded Hills.", category: ["information"] },
      { x: 7329, y: 2577, text: "L.N. Renford", category: "npc", level: 22, sex: "male", race: "Gnome" },
      { x: 7384, y: 2537, text: "Tarry Thornpick", category: "npc", level: 14, sex: "male", race: "Halfling" },
      { x: 7483, y: 2578, text: "Shoreline Park", category: "information" },
    ]
  },
  {
    filename: "ArcanumBase/Dernholm",
    chunked: true,
    width: 7573,
    height: 3613,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "Dernholm",
    modGroup: "Cities",
    music: "music/Cities.mp3", // Good
    defaultView: { x: 3141, y: 2792 },
    labels: [
      // Waypoints
      { x: 5465, y: 1782, text: "Dernholm Castle", category: "waypoint", targetMapFilename: "Dernholm Castle"},
      { x: 499, y: 573, text: "Dernholm Pits", category: "waypoint", targetMapFilename: "Dernholm Pits", targetX: 341, targetY: 1317},
      { x: 6132, y: 1215, text: "Dernholm Pits", category: "waypoint", targetMapFilename: "Dernholm Pits", targetX: 2399, targetY: 1977},

      // Followers      
      { x: 4851, y: 2182, text: "Vollinger", sex: "male", race: "Gnome", level: 15, portrait: "Textures/vollinger.png", category: "followers" },
      { x: 4273, y: 2736, text: "Jayna Stiles", sex: "female", race: "Half-Elf", level: 6, portrait: "Textures/jaynastiles.gif", description: "Jayna can be recruited if the player is at least level 5 and has a Technical Aptitude of 10 or higher", category: "followers" },

      // Shops
      { x: 3566, y: 2147, text: "Charles Dolan", sex: "male", race: "Human", level: 26, shopType: "General Store", shopMarkup: 110, inventory: ["Package for Jongle Dunne"], category: ["quest", "shop"],
        linkedLabels: [
          { questName: "Pickup Jongle's Package", questDescription: "Jongle Dunne needs a package picked up from a man named Charles Dolan, a merchant in Dernholm.", target: "Jongle Dunne", part: 2 }
        ]
      },
      { x: 4488, y: 2401, text: "Rupert the Junk Dealer", sex: "male", race: "Half-Orc", level: 31, shopType: "Junk Dealer", shopMarkup: 200, category: "shop" },
      { x: 4404, y: 1736, text: "Wallow the Blacksmith", sex: "male", race: "Human", level: 34, shopType: "Blacksmith", shopMarkup: 110, category: "shop" },

      // Quests
      { x: 3631, y: 1635, text: "Gladys", sex: "female", race: "Human", level: 14, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Gladys' Ring", questDescription: "Gladys wants you to find her ring, an old family heirloom.", target: "Archibald", part: 1 }
        ]
      },
      { x: 5331, y: 2291, text: "Archibald", sex: "male", race: "Human", level: 14, inventory: ["Gladys' Ring"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Gladys' Ring", questDescription: "Archibald will refuse to give you the ring. You can either steal it from it (or kill him), or ask for help from his son Bernard.", target: "Bernard", part: 2 }
        ]
      },
      { x: 5608, y: 2574, text: "Bernard", sex: "male", race: "Human", level: 8, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Gladys' Ring", questDescription: "Bernard will explain to you about Gladys ''game''.", target: "Gladys", part: 3 }
        ]
      },
      { x: 3794, y: 1939, text: "Lianna", sex: "female", race: "Human", level: 35, inventory: ["Sword of Baltar"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Tell Lianna Pel Dar about Maximillian", questDescription: "Find Warren Pel Dar of Cumbria and tell him that Maximillian still lives on the Isle of Despair.", part: 2 },
          { questName: "Tell Lianna Pel Dar about Maximillian", questDescription: "Find Warren Lianna Pel Dar of Cumbria and tell her that Maximillian still lives on the Isle of Despair.", part: 2 }
        ]
      },
      { x: 4426, y: 2084, text: "Sarah Toone", sex: "female", race: "Human", level: 8, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Free the Ghost of Bessie Toone", questDescription: "Sarah Toone wants you to help her regain ownership of the Bessie Toone Mine.", target: "Stanton", part: 4 },
          { questName: "Free the Ghost of Bessie Toone", questDescription: "Sarah Toone will reward you with a Magickal Sword for returning the mine to her.", part: "reward" }
        ]
      },
      { x: 4926, y: 1505, text: "Sir Garrick Stout", sex: "male", race: "Human", level: 45, master: "Melee Master", inventory: ["Scroll of Disperse Magick", "Basic Platemail"], category: ["quest", "npc", "master"],
        linkedLabels: [
          { questName: "Adkin Chambers and Sir Garrick Stout", questDescription: "Find the Lady Druella, get her to agree to marry Sir Garrick Stout, and return her to him.", questType: "master", target: "Lady Druella", part: 2 },
          { questName: "Adkin Chambers and Sir Garrick Stout", questDescription: "After bringing Lady Druella to Sir Garrick Stout, ask for your melee training and the potion to restore the sight Adkin Chambers. Then, kill him and take his eyes.", questType: "master", target: "Adkin Chambers", part: 3 }       
        ]
      },
      { x: 4902, y: 1463, text: "Dudley Crosston", sex: "male", race: "Human", level: 19, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Find Dudley Crosston", questDescription: "Dudley Crosston doesn't want to go back to Kietzel Pierce. Go and report that to him.", target: "Kietzel Pierce (Caladon)", part: 2 }
        ]
      },

      // Chests
      { x: 3870, y: 1373, text: "Wood Chest", inventory: ["Shovel"], category: "chest" },

      // Information
      { x: 6244, y: 1057, text: "Human Guard", category: ["quest", "npc"], level: 45, sex: "male", race: "Human", linkedLabels: [{ questName: "Rescue Tollo Underhill", questDescription: "Insult the guards until they throw you in the pit.", target: "Tollo Underhill", part: 2 }] },      { x: 4446, y: 2464, text: "- Rupert's House of Well-Worn Effects -", description: "", category: "information" },
      { x: 3676, y: 2188, text: "Dolan's General Store", description: "", category: "information" },
      { x: 4776, y: 2228, text: "- King's Inn & Pub -", description: "", category: "information" },
      { x: 4548, y: 1768, text: "Wallow's Quality Armour", description: "", category: "information" },
      { x: 4898, y: 2136, text: "Bartender", sex: "male", race: "Human", level: 24, category: "npc" },
      { x: 4964, y: 2195, text: "Innkeeper", sex: "male", race: "Gnome", level: 19, inventory: ["Innkeeper's Key, Dernholm"], category: "npc" },
    ]
  },
  {
    filename: "ArcanumBase/IsleOfDespair",
    chunked: true,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    width: 4923,
    height: 5145,
    displayName: "Isle of Despair",
    modGroup: "Cities",
    music: "music/Isle_of_Despair.mp3",
    defaultView: { x: 3593, y: 4071 },
    labels: [
      // Followers
      { x: 2559, y: 3446, text: "Cynthia Boggs", sex: "female", race: "Human", level: 20, portrait: "Textures/cynthiaboggs.gif", inventory: ["White Scarf", "Cynthia Boggs' Locket"], category: ["quest", "followers"],
        linkedLabels: [
          { questName: "Help Cynthia Boggs Escape the Isle of Despair", questDescription: "Cynthia Boggs has asked you to help her escape from the encampment on the Isle of Despair.", target: "", part: 1 }
        ]
       },
      { x: 1504, y: 3105, text: "Thorvald Two Stones", sex: "Male", race: "Dwarf", level: 23, portrait: "Textures/thorvald.gif", inventory: ["Key to Thorvald's Chest", "Wheel Clan Spectacles"], category: ["quest", "followers", "key"],
        linkedLabels: [
          { questName: "Investigate the Isle of Despair", questDescription: "The Black Mountain Clan was never sent to the Isle of Despair!", questType: "main", part: 5 },          
          { questName: "Investigate the Wheel Clan", questDescription: "Investigate the Wheel Clan for further information about the Black Mountain Clan.", questType: "main", target: "Reveal the Gate", part: 1 },
          { questName: "Contact the Wheel Clan", questDescription: "Tell The Wheel Clan of Thorvald's incarceration on The Isle of Despair.", target: "Reveal the Gate", part: 1 }
        ]
      },

      // Quests
      { x: 3813, y: 4071, text: "Captain Edward Teach (Isle of Despair)", sex: "male", race: "Human", level: 23, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Investigate the Isle of Despair", questDescription: "Now that you are on the Isle of Despair, go and talk with Thorvald.", questType: "main", target: "Thorvald Two Stones", part: 4 },
          "Captain Edward Teach (Ashbury)"
        ]
      },
      { x: 2836, y: 3708, text: "Village Guard", sex: "male", race: "Human", level: 20, inventory: ["Serpentine Necklace", "Key to the Gates of the Isle of Despair"], category: ["quest", "npc", "key"],
        linkedLabels: [
          { questName: "The Sorcerous Beast", questDescription: "The village guard on Isle of Despair wants you to kill the Sorcerous Beast.", target: "The Sorcerous Beast", part: 1 }
        ]
      },
      { x: 2340, y: 3662, text: "Norian", sex: "male", race: "Half-Orc", level: 24, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Deliver Goods to Maximillian", questDescription: "Norian, on the Isle of Despair, wants you to deliver some goods to a man named Maximillian.", target: "Maximillian", part: 1 }
        ]
      },

      { x: 2330, y: 3216, text: "Jones the Collector", category: ["quest", "npc"], level: 23, sex: "male", race: "Human", inventory: ["Ancient Gun Chassis", "Mace", "Guard Armour"], linkedLabels: [{ questName: "Find Some Objects from Shades Beach", questDescription: "Jones the Collector wants you to gather some objects from Shades Beach.  If he likes any of them, he will trade you for a strange weapon.", part: 1 }] },
      { x: 1836, y: 3281, text: "Ogdin", category: ["quest", "key", "npc"], level: 40, sex: "male", race: "Half-Ogre", inventory: ["Key to Thorvald's House", "Leather Gloves", "Axe", "Large Leather Armour", "Helmet"], linkedLabels: [{ questName: "The Hand", questDescription: "Ogdin will let you meet with Thorvald without having to fight in the pit if you bring him the book ''The Hand''.", part: "reward" }] },
      { x: 2054, y: 3320, text: "Gorrin, Master of the Pit", sex: "male", race: "Human", level: 24, category: ["quest", "npc"] },
      { x: 1954, y: 605, text: "The Sorcerous Beast", description: "", category: "quest" },
      { x: 1423, y: 3142, text: "Wood Chest", inventory: ["Thorvald's Journal", "Schematics: Wheel Clan Spectacles"], category: ["quest", "chest"] },

      // Information
      { x: 1121, y: 3570, text: "Window", description: "You can break this window to run away with Cynthia Boggs.", category: "information" },

      // Chests
      { x: 3891, y: 1901, text: "Wooden Chest", inventory: ["1800 coins (???)"], category: "chest" },
          // Find exact amount
      { x: 1934, y: 539, text: "Junk Pile", inventory: ["Baneful Gauntlets", "Charmed Ring"], category: "chest" },
    ]
  },
  {
    filename: "ArcanumBase/Qintarra",
    chunked: true,
    width: 4061,
    height: 2760,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "Qintarra",
    modGroup: "Cities",
    music: "music/Qintarra.mp3",
    defaultView: { x: 1938, y: 1431 },
    labels: [
      // Waypoints
      { x: 1966, y: 1400, text: "Qintarra - Entrance", category: "waypoint" },
      { x: 3271, y: 1373, text: "Silver Lady Chambers", category: "waypoint", targetMapFilename: "Silver Lady Chambers", targetX: 200, targetY: 352 },

      // Followers
      { x: 2198, y: 1407, text: "Swyft", sex: "female", race: "Elf", level: 9, portrait: "Textures/swyft.gif", category: ["quest", "followers"],
        linkedLabels: [
          { questName: "Escort Swyft to Tarant", questDescription: "Swyft wants you to bring her to Tarant safely.", part: 1 },
          { questName: "Escort Swyft to Tarant", questDescription: "As you bring Swyft to Tarant she will reward you of 300 coins (or 450 coins with haggle).", part: "reward" }
        ]
      },
      { x: 511, y: 1361, text: "Jormund", sex: "male", race: "Dwarf", level: 20, portrait: "Textures/jormund.gif", category: ["quest", "followers"],
        linkedLabels: [
          { questName: "Investigate the Murder of Wrath", questDescription: "Secure Jormund's release by finding Wrath's killer.", target: "Ivory", part: 1 }
        ]
      },
      { x: 3154, y: 1409, text: "Raven", sex: "female", race: "Elf", level: 32, portrait: "Textures/raven.gif", category: ["quest", "followers"],
         linkedLabels: [
          { questName: "Remove the Humans from Falcon's Ache", questDescription: "Raven won't let you speak with the Silver Lady unless you remove the humans from Falcon's Ache.", target: "William Bench", part: 1 },
          { questName: "Investigate M'in Gorad", questDescription: "Find out about Renford A. Terwilliger.", questType: "main", target: "Clerk", part: 2 },
          { questName: "Investigate M'in Gorad", questDescription: "Locate the village of the Dark Elves.", questType: "main", target: "Grave of Victor Misk", part: 3 },
          { questName: "Investigate M'in Gorad", questDescription: "Find out about M'in Gorad in the village of the Dark Elves, and report back to Raven.", questType: "main", target: "M'in Gorad", part: 4 },
          { questName: "Find Nasrudin", questDescription: "Find Nasrudin.", questType: "main", target: "Nasrudin", part: 1 },         
        ]
      },

      // Quests
      { x: 1717, y: 1360, text: "Winde", sex: "male", race: "Elf", level: 30, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Free the Elf from the Bedokaan", questDescription: "Mr. Winde wants you to ensure that the lost elven hunter is on his way home.", target: "Lost elven hunter", part: 1 }
        ]
      },
      { x: 2204, y: 633, text: "Wrath", sex: "male", race: "Elf", level: 25, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Investigate the Murder of Wrath", questDescription: "", target: "", part: 0 }
        ]
      },
      { x: 2135, y: 1905, text: "Fawn", sex: "female", race: "Elf", level: 44, master: "Master Healer", shopType: "Magic Shop", shopMarkup: 100, category: ["shop", "master"] },
      { x: 1879, y: 2035, text: "Whysper", sex: "female", race: "Elf", level: 19, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Find a Volar's Wisp Essence for Whysper", questDescription: "Whysper wants you to gather an essence from the rare Vol'ars Wisp.", target: "Volar's Wisp", part: 1 }
        ]
      },
      { x: 3064, y: 1993, text: "Ellumyn", sex: "male", race: "Elf", level: 23, inventory:["Ellumyn's Bow"], shopType: "Magic Shop", shopMarkup: 300, category: ["quest", "shop"],
        linkedLabels: [
          { questName: "Get Mithril Ore from the Wheel Clan", questDescription: "Ellumyn wants you to retrieve some mithril from the caves of the Wheel Clan.", target: "Dwarven Smith", part: 1 },
        ]
       },

      // Shops
      { x: 3493, y: 1913, text: "Ivory", sex: "female", race: "Elf", level: 1, shopType: "Potions", shopMarkup: 300, category: ["quest", "shop"],
        linkedLabels: [
          { questName: "Investigate the Murder of Wrath", questDescription: "Discussing the case with Ivory leads to Sharpe becoming a suspect. Pressing her on the subject leads to an abrupt end of the discussion. Taking this information to the Guards watching Jormund will be enough to facilitate his release and indict Sharpe as the killer.", target: "", part: 2 },
          { questName: "Investigate the Murder of Wrath", questDescription: "If Ivory is not pressed, then the conversation with her can end peacefully. Further investigating the shop reveals a locked chest containing an empty vial with remnants of the same poison that killed Wrath.", target: "", part: 3 }
        ]
      },
      { x: 3455, y: 1878, text: "Sharpe", sex: "male", race: "Elf", shopType: "Potions", shopMarkup: 300, category: "shop" },

    ]
  },
  {
    filename: "ArcanumBase/Roseborough",
    chunked: true,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    width: 12370,
    height: 4200,
    displayName: "Roseborough",
    modGroup: "Cities",
    music: "music/Villages.mp3",
    defaultView: { x: 5594, y: 2974 },
    labels: [
      // Waypoints
      { x: 6354, y: 3069, text: "Roseborough Inn", category: "waypoint", targetMapFilename: "Roseborough Inn", targetX: 562, targetY: 858 },
      { x: 926, y: 658, text: "Mannox's Hole", category: "waypoint" },

      // Shops
      { x: 8431, y: 2866, text: "Gnome Shopkeeper", sex: "male", race: "Gnome", level: 24,  category: "shop", shopType: "General Store", shopMarkup: 110 },
      { x: 8794, y: 2047, text: "Blacksmith", sex: "male", race: "Human", level: 31, category: "shop", shopType: "Blacksmith", shopMarkup: 110, inventory: ["Screaming Shield", "Power Axe"] },

      // Shop signs
      { x: 8537, y: 2953, text: "Roseborough Gift Shoppe", category: ["information"] },

      // Main Quest
      { x: 6650, y: 1740, text: "A freshly filled grave", description: "", category: ["quest", "chest"], inventory: ["Horror Among the Dark Elves"],
        linkedLabels: [
          { questName: "Investigate M'in Gorad", questDescription: "Now that you know its location, go to T'sen-Ang.", questType: "main", target: "T’sen-Ang Guards" }
        ]
      },

      // Side quests
      { x: 5100, y: 2639, text: "Captain of the Roseborough Guard", sex: "male", race: "Human", level: 40, category: ["quest", "npc"],
        linkedLabels: [  
          { questName: "Clear the Halfling Gang", questDescription: "", target: "", part: "" },
        ] 
      },
      { x: 8123, y: 2049, text: "Mrs. R.L. Morgan", sex: "female", race: "Gnome", level: 26, inventory: ["Ring of Silence", "J.T. Morgan's Master Locksmith Tools"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Free J.T. Morgan", questDescription: "The mother of J.T. Morgan, the Pick Lock Master, wants you to help him to escape from prison. In exchange, Morgan will give you master training.", questType: "master", target: "J.T. Morgan", part: 1 }
        ]
      },
      { x: 8763, y: 3130, text: "Adkin Chambers (Roseborough)", sex: "male",  race: "Human", level: 48, category: ["npc"] },
      { x: 8783, y: 3172, text: "Lady Druella (Roseborough)", sex: "female", race: "Half-Elf", level: 17, category: ["npc"] },
      { x: 4547, y: 1558, text: "Nasrudin (Roseborough)", sex: "male", race: "Elf", level: 50, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Stop Arronax", questDescription: "Stop Arronax.", questType: "main", target: "Arronax", part: 1 }
        ]
      },
      { x: 4383, y: 1559, text: "K'an Hua", sex: "male", race: "Dark Elf", level: 50, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Find Arronax", questDescription: "Find Arronax.", questType: "main", target: "", part: 1 }
        ]
      },

      // NPCs
      { x: 7129, y: 1298, text: "Doctor Edmund Craig", sex: "male", race: "Half-Orc", level: 48, master: "Backstab Master", category: ["npc", "master"] },

      // Information
      { x: 4471, y: 1482, text: "Ring of Brodgar", category: "information" },
      { x: 6144, y: 3086, text: "Ancient stone", description: "This ancient stone is carved with what looks to be old runes and numbers.", category: "information" },
      { x: 6605, y: 1705, text: "Grave of Phillip Misk", category: "information" },

      // Chests
      { x: 7451, y: 2374, text: "Chest", inventory: ["Ring of Protection"], category: "chest" },
      { x: 8286, y: 1947, text: "Wood Chest", inventory: ["Magick Robes"], category: "chest" }
    ]
  },
  {
    filename: "ArcanumBase/ShroudedHills",
    chunked: true,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    width: 13708,
    height: 4958,
    displayName: "Shrouded Hills",
    modGroup: "Cities",
    music: "music/Towns.mp3", // Good
    defaultView: { x: 8143, y: 2473 }, // Good

    labels: [
      // Waypoints
      { x: 8430, y: 2265, text: "Shrouded Hills Panarii Temple", category: "waypoint", targetMapFilename: "Panarii Temple" },
      { x: 4707, y: 2378, text: "Bessie Toone Mine", category: "waypoint", targetMapFilename: "Bessie Toone Mine", targetX: 1697, targetY: 805 },

      // Followers
      { x: 8262, y: 2598, text: "Sogg Mead Mug", sex: "male", race: "Half-Ogre", level: 2, portrait: "Textures/soggmeadmug.gif", description: "Sogg can be recruited if you have 9 charisma.", category: "followers" },
      { x: 8013, y: 1883, text: "Doc Roberts", sex: "male", race: "Human", level: 30, portrait: "Textures/docroberts.gif", category: ["quest", "followers"],
        linkedLabels: [
          { questName: "Stop the bank robbery", questDescription: "Doc Roberts wants you to help him stop an impending bank robbery.", target: "Bank robber", part: 1 },
          { questName: "Stop the bank robbery", questDescription: "Doc Roberts will give you an Enchanted Sword, a Revolver or an Axe as a reward.", part: "reward" }
        ]
      },

      // Shops
      { x: 7774, y: 2104, text: "Ristezze", sex: "male", race: "Human", level: 12, shopType: "Junk Dealer", shopMarkup: 200, inventory: ["Charming Medallion"], category: ["shop", "quest", "key"], inventory: ["Key to Ristezze’s Bedroom"],
        linkedLabels: [
          { questName: "Origins of the Strange Ring", questDescription: "Get information from P. Schuyler & Sons about owner of strange ring.", questType: "main", target: "Winston Schuyler", part: 2 },
          { questName: "Find a camera or Bessie Toone paraphernalia", questDescription: "Ristezze the Importer wants you to find a camera OR some Bessie Toone paraphenalia. In return, he will give you information about P. Schuyler & Sons.", target: "Isaac Zapruder", part: 1 },
        ]
      },
      { x: 7512, y: 2301, text: "Lloyd Gurloes", sex: "male", race: "Human", level: 22, shopType: "Blacksmith", shopMarkup: 110, inventory: ["Lloyd' Hammer"], category: ["shop", "quest", "key"], inventory: ["Key to Lloyd Gurloes’ backroom"],
        linkedLabels: [
          { questName: "Find some Pure Ore for Lloyd", questDescription: "Lloyd Gurloes wants you to obtain some pure ore for him.", target: "Lloyd Gurloes", part: 1 },
          { questName: "Find some Pure Ore for Lloyd", questDescription: "You can craft pure ore with a piece of iron and a piece of steel. Llyod will reward you with a Fine Steel Dagger one day after you give him the pure ore.", part: "reward" }
        ]
      },
      { x: 7083, y: 1515, text: "Gaylin", sex: "female", race: "Elf", level: 24, shopType: "Herbalist", shopMarkup: 90, category: ["shop", "quest"],
        linkedLabels: [
          { questName: "Find the Amulet of N’Tala", questDescription: "If, in my travels, I happen across the ancient elven amulet of N’Tala, Gaylin has offered to pay me a handsome reward for its return.", target: "Myrth", part: 1 },
          { questName: "Find the Amulet of N’Tala", questDescription: "Gaylin will reward you 1000 coins for finding the amulet of N’Tala.", part: 3 },
          { questName: "Find Qintarra", questDescription: "If you are searching for Qintarra, completing the Amulet of N’Tala quest will also make Gaylin tell you where the city is.", questType: "main", target: "Raven", part: 2 }
        ]
      },
      { x: 7089, y: 2359, text: "Gnome Shopkeeper", sex: "male", race: "Gnome", level: 18, shopType: "General Store", shopMarkup: 110, category: "shop" },
      { x: 9693, y: 1666, text: "Wise Woman", sex: "female", race: "Human", level: 22, shopType: "Nomad", shopMarkup: 150, inventory: ["Witch's Dagger"], category: "shop" },

      // Quests
      { x: 7241, y: 2765, text: "Jongle Dunne", sex: "male", race: "Halfling", level: 13, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Destroy the Town's Steam Engine", questDescription: "Jongle Dunne wants you to destroy the town’s steam engine.", target: "Control Box", part: 1 },
          { questName: "Pickup Jongle's Package", questDescription: "Jongle Dunne needs a package picked up from a man named Charles Dolan, a merchant in Dernholm.", target: "Charles Dolan", part: 1 }
        ]
      },
      { x: 8172, y: 2352, text: "Constable Owens", sex: "male", race: "Human", level: 5, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "The Thieves and the Bridge", questDescription: "Constable Owens needs you to remove the thieves from the bridge.", target: "Lukan the Witless", part: 1 },
          { questName: "Fix the Town's Steam Engine", questDescription: "Constable Owens wants you to fix the town’s steam engine.", target: "Barrel (Sprocket)", part: 1 }
        ]
      },
      { x: 10909, y: 1232, text: "Lukan the Witless", sex: "male", race: "Human", level: 3, inventory: ["Key to the Shrouded Hills Bridge Gate"], category: ["quest", "key", "npc"],
        linkedLabels: [
          { questName: "The Thieves and the Bridge", questDescription: "In order to join the thieves, you must destroy the construction materials for the new bridge.", target: "Bridge materials", part: 2 }
        ]
      },
      { x: 10264, y: 2708, text: "Bridge materials", category: "quest", 
        linkedLabels: [
          { questName: "The Thieves and the Bridge", questDescription: "Destroy the bridge materials and return to Lukan.", target:"Lukan the Witless" , part: 3 }
        ]
      },
      { x: 8278, y: 2640, text: "Jacob Bens", sex: "male", race: "Half-Orc", level: 5, inventory: ["Note (Safe Combination)"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Rob the Bank", questDescription: "Jacob Bens in Shrouded Hills wants you to steal the local mining company’s payroll from the bank’s safe.", target: "Combination safe", part: 1 },
          { questName: "Rob the Bank", questDescription: "Give Jacob Bens his share of 250 gold or else he will rat you out.", part: 3 }
        ]
      },
      { x: 7768, y: 2508, text: "Bank robber", sex: "male", race: "Human", level: 3, category: "quest",
        linkedLabels: [
          { questName: "Stop the bank robbery", questDescription: "Kill the three bank robbers and return to Doc Roberts for your reward.", target: "Doc Roberts", part: 2 }
        ]
      },
      { x: 5022, y: 2892, text: "Percival Toone", sex: "male", race: "Human", level: 12, category: ["quest", "npc"], 
        linkedLabels: [
          { questName: "Free the Ghost of Bessie Toone", questDescription: "Percival Toone wants you to find a way to free the ghost of his mother.", target: "Bessie Toone", part: 1 },
          { questName: "Free the Ghost of Bessie Toone", questDescription: "After returning from the mines, Percival will mention that Sarah is his sister who has run away to Dernholm.", target: "Sarah Toone", part: 3 },
          { questName: "Free the Ghost of Bessie Toone", questDescription: "Percival Toone will reward you 500 coins for returning him the deed. However, he will mention plans to sell the mine again.", part: "reward" }
        ]
      },
      { x: 8851, y: 2680, text: "Joachim’s Note to Virgil", inventory: ["Joachim’s Note to Virgil"], category: "quest",
        linkedLabels: [
          { questName: "Elder Joachim’s paper trail", questDescription: "", target: "Telegraph Operator", part: 3 }
        ]
      },
      { x: 7733, y: 2386, text: "Combination safe", chestState: "locked", description: "This looks to be a combination safe. There is no keyhole.", category: ["quest", "chest"],
        linkedLabels: [
          { questName: "Rob the Bank", questDescription: "Steal the 500 coins and return to Jacob Bens.", target: "Jacob Bens", part: 2 }
        ]
      },

      // Chests
      { x: 7732, y: 2228, text: "Barrel", chestState: "locked", inventory: ["Ristezze's File Cabinet Key"], category: "chest" },
      { x: 7611, y: 2040, text: "Cabinet", chestState: "locked", chestKey: "Key to Ristezze’s Bedroom", inventory: ["Telegram", "Ristezze's Map"], category: "chest" },
      { x: 7283, y: 2722, text: "Chest", chestState: "locked", inventory: ["Hexed Leather Armour"], category: "chest" },

      // Information
      { x: 1431, y: 2662, text: "Mysterious barrels", description: "These barrels are not the fruit of a random terrain generation: they were deliberately placed here. None can be open, and no script are attached to them in WorldEd.", category: "information" },
      { x: 4139, y: 1985, text: "Four wolves and a bunny", description: "Behind the Bessie Toone Mine are four wolves and a bunny.", category: "information" },
      { x: 7908, y: 903, text: "Three wolves", category: "information" },
      { x: 7757, y: 2465, text: "Bank Teller", sex: "female", race: "Human", level: 8, inventory: ["Shrouded Hills Bank Key"], category: ["key", "npc"] },
      { x: 8220, y: 2666, text: "Innkeeper", sex: "male", race: "Human", level: 1, category: "npc" },
      { x: 8151, y: 2160, text: "William Radclife", sex: "male", race: "Gnome", level: 3, category: "npc" },
      { x: 11664, y: 853, text: "William Radclife (Bridge)", sex: "male", race: "Gnome", level: 3, inventory: ["Note: The IFS Zephyr has crashed"], category: "npc" },
      { x: 8345, y: 2567, text: "Bartender", sex: "male", race: "Human", level: 18, category: "npc" },
    ]
  },
  {
    filename: "ArcanumBase/Stillwater",
    chunked: true,
    width: 5551,
    height: 4370,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "Stillwater",
    modGroup: "Cities",
    music: "music/Villages.mp3", // Good
    defaultView: { x: 2197, y: 3351 },
    labels: [
      // Waypoints
      { x: 1681, y: 633, text: "Drogs Cave", category: "waypoint", targetMapFilename: "Drogs Cave" },
      { x: 4211, y: 1759, text: "Stillwater Giants Cave", category: "waypoint", targetMapFilename: "Stillwater Giants Cave" },

      // Shops
      { x: 1978, y: 3831, text: "General Store Clerk", category: "shop", shopType: "General Store", shopMarkup: 110, level: 29, sex: "male", race: "Gnome", inventory: ["Finely Honed Dagger", "Dagger", "Small Rustic Finery"] },
      { x: 2278, y: 3130, text: "Richard Leeks", category: ["quest", "shop"], shopType: "Blacksmith", shopMarkup: 110, level: 35, sex: "male", race: "Human", inventory: [{ name: "Stillwater Blade", count: 2 }, "Tempered Shield"], linkedLabels: [{ questName: "Rescue Cyrus", questDescription: "Richard Leeks, the blacksmith in Stillwater, wants you to find his friend Cyrus.", target: "Puddles of blood and footprints", part: 1 }] },

      // Quests
      //// Find the Stolen Idol
      { x: 1298, y: 2918, text: "Brigitte", category: ["quest", "npc"], level: 25, sex: "female", race: "Human", inventory: ["Mage's Staff", { name: "Heal Lesser Wounds", count: 3 }, { name: "Fatigue Restorer", count: 2 }], linkedLabels: [{ questName: "Find the Stolen Idol", questDescription: "Brigitte, Priestess of Stillwater, has entrusted you with the task of finding the stolen idol of their goddess, Geshtianna.", target: "Marley", part: 1 }] },
      { x: 3777, y: 3372, text: "Marley", sex: "male", race: "Human", level: 35, category: ["npc", "quest", "key"],
        linkedLabels: [
          { questName: "Find the Stolen Idol", questDescription: "Brigitte, Priestess of Stillwater, has entrusted you with the task of finding the stolen idol of their goddess, Geshtianna.", target: "Big Wooden Object", part: 2 }
        ]
      },
      { x: 3769, y: 3316, text: "Big Wooden Object", inventory: ["Statue of the Goddess Geshtianna"], category: ["quest", "chest", "key"],
        linkedLabels: [
          { questName: "Find the Stolen Idol", questDescription: "Brigitte, Priestess of Stillwater, has entrusted you with the task of finding the stolen idol of their goddess, Geshtianna.", target: "Big Wooden Object", part: 3 }
        ]
      },

      //// Rescue Cyrus
      { x: 721, y: 2002, text: "Puddles of blood and footprints", category: "quest", 
        linkedLabels: [
          { questName: "Rescue Cyrus", questDescription: "Cyrus house shows signs of a fight. Follow the tracks to the cave in the North.", target: "Cyrus", part: 2 }
        ]
      },

      { x: 2389, y: 3537, text: "Innkeeper (Stillwater)", category: ["quest", "npc"], level: 35, sex: "male", race: "Gnome", inventory: ["Joachim's Stillwater Book", "Bread", "Healing Salve", "Dagger", "Small Rustic Finery"], linkedLabels: [{ questName: "Elder Joachim’s paper trail", questDescription: "Elder Joachim left a telegram at the inn of Stillwater.", part: 4 }] },
      { x: 2271, y: 2586, text: "Myrth", sex: "male", race: "Elf", level: 20, inventory:["Amulet of N'Tala", "Elven Hunter's Bow", "Smoking Jacket", { name: "Arrow", count: 35 }], category: ["npc", "quest"],
        linkedLabels: [
          { questName: "The Stillwater Giant", questDescription: "Myrth, an elf residing in Stillwater, instructs you to perform a rite of passage, killing a Stillwater Giant and bringing its pelt to him. He directs you to Stanley Xavier Hippington, living directly North from his house.", target: "Stanley Xavier Hippington", part: 1 },
          { questName: "Find Qintarra", questDescription: "For bringing a fake pelt of the Stillwater Giant to Myrth, you will make him laugh and he will reveal where Qintarra is located", questType: "main", target: "Raven", part: "reward"},
          { questName: "Find the Amulet of N’Tala", questDescription: "The amulet can be obtained from Myrth either by stealing it or by taking it from his corpse after killing him.", target: "Gaylin", part: 2 }
        ]
      },
      { x: 2719, y: 1753, text: "Stanley Xavier Hippington", category: ["quest", "npc"], level: 29, sex: "male", race: "Human", inventory: ["Stillwater Trap (Empty)", "Stillwater Giant Scent"], linkedLabels: [{ questName: "The Stillwater Giant", questDescription: "Upon talking to Stanley Xavier Hippington, a cryptozoologist, he gives you a Stillwater trap and a bottle of Stillwater Giant scent to use to capture a Stillwater Giant, residing in a cave nearby.", target: "Bunny", part: 2 }] },
      { x: 2627, y: 2829, text: "Gildor Nightwalk", sex: "male", race: "Halfling", level: 31, inventory: ["Ring of Concealment", "Tannon Wroughtbringer's Journal"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Retrieving the Ruby", questDescription: "Gildor Nightwalk will reward you with 1500 coin, if you are able pass the beasts of death and retrieve the great ruby for him.", target: "Altar (Ruby Glade)", part: 1 }
        ]
      },
      { x: 784, y: 3387, text: "Adkin Chambers", sex: "male", race: "Human", level: 48, master: "Dodge Master", inventory: ["Heavy Wool Clothes"], category: ["quest", "npc", "master"],
        linkedLabels: [
          { questName: "Adkin Chambers and Sir Garrick Stout", questDescription: "Adkin Chambers, the Dodge Master, wants you to kill Sir Garrick Stout, the Melee Master, and bring his eyes as proof that you have completed the task.", questType: "master", target: "Sir Garrick Stout", part: 1 },
          { questName: "Adkin Chambers and Sir Garrick Stout", questDescription: "To thank you for killing Garrick Stout, Adking Chambers will train you to be a dodge master.", questType: "master", part: "reward" }

        ]
      },

      // Others
      { x: 1237, y: 2882, text: "Geshtianna's Altar", category: "altar",
        godType: "Noble Lesser God",
        inscription: "Textures/Altar/Geshtianna.png",
        offering: ["Passion Root"],
        blessing: ["+1 Beauty"] },
      { x: 1545, y: 2837, text: "Passion Root", description: "", category: "information", linkedLabels:["Geshtianna's Altar"]},
      { x: 1620, y: 3915, text: "Dresser", category: "chest", chestState: "locked", inventory: ["Leather Gloves", "Small Wool Jacket", "Dragon's Cologne", "Rheumatism Cure", "Cure Poison", "Heal Lesser Wounds"] },
    ],
  },
  {
    filename: "ArcanumBase/Tarant",
    chunked: true,
    width: 22752,
    height: 10332,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "Tarant",
    modGroup: "Cities",
    music: "music/Tarant.mp3",
    defaultView: { x: 3338, y: 2537 },
    labels: [
      { x: 13730, y: 3956, text: "Bates Mansion", category: "waypoint", targetMapFilename: "Bates Mansion Level 1" },
      { x: 12703, y: 3707, text: "Hall of Records", category: "waypoint", targetMapFilename: "Hall of Records" },
      { x: 10426, y: 4830, text: "P. Schuyler & Sons", category: "waypoint", targetMapFilename: "P. Schuyler & Sons - Level 1" },
      { x: 6372, y: 6256, text: "Tarant Old Sewers", category: "waypoint", targetMapFilename: "Tarant Old Sewers" },
      { x: 9058, y: 6863, text: "Tarant Old Sewers", category: "waypoint", targetMapFilename: "Tarant Old Sewers" },
      { x: 13677, y: 5465, text: "Tarant Old Sewers", category: "waypoint", targetMapFilename: "Tarant Old Sewers" },
      { x: 12964, y: 7182, text: "Tarant Old Sewers", category: "waypoint", targetMapFilename: "Tarant Old Sewers", targetX: 3805, targetY: 2237 },
      { x: 9450, y: 5059, text: "Tarant New Sewers", category: "waypoint" },
      { x: 10529, y: 5574, text: "Tarant New Sewers", category: "waypoint" },
      { x: 10791, y: 4913, text: "Tarant New Sewers", category: "waypoint" },
      { x: 10581, y: 4233, text: "Tarant New Sewers", category: "waypoint" },
      { x: 8733, y: 4939, text: "Bates Tunnel", category: "waypoint", targetMapFilename: "Bates Tunnel" },
      { x: 9687, y: 5859, text: "Station A: West Garillon Bridge", category: "waypoint" },
      { x: 10044, y: 4369, text: "Station B: Vermillion Station", category: "waypoint" },
      { x: 11839, y: 3464, text: "Station C: Tarant University", category: "waypoint" },
      { x: 14865, y: 4934, text: "Station D: Warehouse District", category: "waypoint" },
      { x: 13062, y: 5170, text: "Station E: Commercial District", category: "waypoint" },
      { x: 11546, y: 6177, text: "Station F: Tarantian Docks", category: "waypoint" },
      { x: 11766, y: 4795, text: "Station G: Kensington Park", category: "waypoint" },
      { x: 7458, y: 6901, text: "Station H: The Boil", category: "waypoint" },


      { x: 10449, y: 5117, text: "Magnus", category: ["quest", "followers"], portrait: "Textures/magnus.gif", level: 8, sex: "Male", race: "Dwarf", inventory: ["Magnus' Bracelet", "Roan's Almanac of All Things Dwarven", "Mysterious Dwarven Gauntlets"] },
      { x: 12390, y: 4246, text: "Gar", category: "followers", portrait: "Textures/gar.gif", level: 10, sex: "Male", race: "Human" },
      { x: 9300, y: 5359, text: "Perriman Smythe", category: "followers", portrait: "Textures/perrimansmythe.gif", level: 25, sex: "Male", race: "Human" },
      { x: 7763, y: 6603, text: "Sebastian", category: ["quest", "followers"], portrait: "Textures/sebastian.gif", level: 30, sex: "Male", race: "Human",
        linkedLabels: [
          { questName: "Clean Up the Boil", questDescription: "Sebastian wants you to kill Pollock.  In return, he might aid you in your own quest.", target: "Pollock", part: 1 },
          { questName: "Clean Up the Boil", questDescription: "Sebastian wants you to kill Darian Maug. In return, he might aid you in your own quest.", target: "Darian Maug", part: 2 }
        ]
      },
      { x: 9958, y: 5581, text: "Castleton the General Store Clerk", category: "shop", shopType: "General Store", shopMarkup: 100, level: 27, sex: "male", race: "Human", inventory: ["Helmet of Strength"] },
      { x: 10195, y: 5469, text: "Thurston the Tailor", category: "shop", shopType: "Tailor", shopMarkup: 90, level: 17, sex: "male", race: "Elf", inventory: ["Negociator's Ring", "Eye Glasses", "Dagger"] },
      { x: 10835, y: 5114, text: "Geoffrey the Inventor", category: "shop", shopType: "Inventor", shopMarkup: 100, level: 37, sex: "male", race: "Human" },
      { x: 10886, y: 5056, text: "Anna the Herbalist", category: "shop", shopType: "Herbalist", shopMarkup: 90, level: 23, sex: "female", race: "Human" },
      { x: 10721, y: 5890, text: "Junk Dealer", category: "shop", shopType: "Junk Dealer", shopMarkup: 200, level: 30, sex: "male", race: "Human" },
      { x: 10724, y: 4597, text: "Wallow the Quality Blacksmith", category: "shop", shopType: "Blacksmith", shopMarkup: 100, level: 33, sex: "male", race: "Dwarf" },
      { x: 10451, y: 4485, text: "Smythe the Gun Smith", category: "shop", shopType: "Gun Store", shopMarkup: 100, level: 31, sex: "male", race: "Human" },
      { x: 7413, y: 6587, text: "Mellin Bungerton", category: "shop", shopType: "Junk Dealer", shopMarkup: 300, level: 18, sex: "male", race: "Halfling" },
      { x: 11979, y: 4139, text: "Magick Shop Clerk", category: ["shop", "key"], shopType: "Magick Shop", shopMarkup: 100, level: 38, sex: "male", race: "Elf", inventory: ["Magick Shoppe Key. Tarant", "Blessed Bow", "Magick Robes"] },
      { x: 11695, y: 4040, text: "Xe'rad the Magickal Smith", category: ["shop"], shopType: "Magickal Smith", shopMarkup: 100, level: 34, sex: "male", race: "Human", inventory: ["Screaming Scimtar"] },
      { x: 12008, y: 3976, text: "Zeramin the Magick Shop Clerk", category: ["shop", "key"], shopType: "Magick Shop", shopMarkup: 100, level: 42, sex: "female", race: "Elf", inventory: ["Magick Shoppe Key. Tarant", "Mage's Staff", "Ashen Robes", "Scroll of Teleportation"] },
      { x: 12026, y: 5624, text: "Halfling Shopkeeper", category: "shop", shopType: "Black Market", shopMarkup: 100, level: 20, sex: "male", race: "Halfling" },
      { x: 14412, y: 4234, text: "Factory Foreman", category: "shop", shopType: "Inventor", shopMarkup: 100, level: 30, sex: "male", race: "Human" },
      { x: 14092, y: 6477, text: "Wise Woman", category: "shop", shopType: "Nomad", shopMarkup: 150, level: 31, sex: "female", race: "Gnome" },
      { x: 13194, y: 4835, text: "Cedric Appleby", category: ["quest", "npc", "key"], level: 12, sex: "male", race: "Human", inventory: ["Dynamite", "Bates Mausoleum Key"],
        linkedLabels: [
          { questName: "Sabotage", questDescription: "Cedric Appleby will gain you access into Bates' house if you destroy Bates' new steam engine prototype housed in Bates' factory. The factory is located at the end of Ten Hands Alley.", target: "Metal Object", part: 1 },
          { questName: "Expose Gilbert Bates", questDescription: "Steal any incriminating evidence from Bates to help Appleby expose him", target: "Chest (Gilbert Bates)", part: 1 }
        ]
      },
      { x: 15049, y: 3901, text: "Metal Object", category: "quest",
        linkedLabels: [
          { questName: "Sabotage", questDescription: "Cedric Appleby will gain you access into Bates' house if you destroy Bates' new steam engine prototype housed in Bates' factory. The factory is located at the end of Ten Hands Alley.", target: "Cedric Appleby", part: 2 }
        ]
      },
      { x: 13192, y: 4148, text: "Capt. of Bates' Guard", category: ["quest", "npc"], level: 40, sex: "male", race: "Human",
        linkedLabels: [
          { questDescription: "Devise a solution to Bates' saboteur difficulties at his factory to gain an audience with him. The factory is located at the end of Ten Hands Alley, and the saboteurs are reputed to strike sometime after midnite.", target: "Saboteurs" }
        ]
      },
      { x: 9291, y: 4657, text: "Dark Elf Noble", category: ["quest", "npc"], level: 12, sex: "male", race: "Elf",
        linkedLabels: [
          { questDescription: "A strange man in the Wellington wants you to deliver a note to 36 Low Dervish Row.", target: "Half Orc City Dweller" }
        ]
      },
      { x: 12689, y: 5658, text: "Half Orc City Dweller", category: ["quest", "npc"], level: 7, sex: "male", race: "Half-Orc" },
      { x: 9826, y: 5819, text: "Cassandra Pettibone", category: ["quest", "npc"], level: 10, sex: "female", race: "Human",
        linkedLabels: [
          { questName: "Steal the Elven Funerary Stone", questDescription: "Mrs. Cassandra Pettibone wants you to steal the elven funerary stone from the newly unearthed elven catacombs.", target: "Funeral Stone", part: 1 }
        ]
      },
      { x: 9857, y: 5300, text: "Evelyn Garringsburg", category: ["quest", "npc"], level: 7, sex: "female", race: "Human",
        linkedLabels: [
          { questName: "The Garringsburg Heist", questDescription: "Mrs. Evelyn Garringsburg wants you to find her stolen painting, the famed ''Kerghan and Persephone'' by Pizarro.", target: "Wellington's Guard", part: 1 }
        ]
      },
      { x: 9545, y: 4883, text: "Wellington's Guard", category: ["quest", "npc"], level: 32, sex: "male", race: "Human",
        linkedLabels: [
          { questName: "The Garringsburg Heist", questDescription: "The guard will inform you that Mr. Garringsburg was bragging few days ago about his expensive painting. You can get from the guard a list of patrons that were present when that happened. One name isn't a regular member: Rorry Limes. The guard doesn't know him and recommend you to check at the Hall of Records.", target: "Clerk", part: 2 }
        ]
      },
      { x: 15072, y: 4604, text: "Wood Chest (Kerghan and Persephone)", category: ["key", "quest", "chest"], inventory: ["Kerghan and Persephone"],
        linkedLabels: [
          { questName: "The Garringsburg Heist", questDescription: "Kill the guard or steal his key, and recover the painting from the chest. Return it to Evelyn Garringsburg for a reward.", target: "Evelyn Garringsburg", part: 4 }
        ]
      },
      { x: 11224, y: 4202, text: "Delores Beston", category: ["npc", "quest"], level: 6, sex: "female", race: "Human",
        linkedLabels: [
          { questName: "The Crystal Ball", questDescription: "Delores Beston wants you to steal Madame Toussaude's crystal ball.", target: "Madame Toussaude", part: 1 }
        ]
      },
      { x: 11534, y: 5823, text: "Madame Toussaude", category: ["npc", "quest"], level: 1, sex: "female", race: "Human",
        linkedLabels: [
          { questName: "The Crystal Ball", questDescription: "Madame Toussaude wants you to deliver her crystal ball to Delores Beston.", target: "Delores Beston", part: 2 }
        ]
      },
      { x: 9648, y: 5549, text: "Human City Dweller", category: ["npc", "quest"], level: 1, sex: "male", race: "Human",
        linkedLabels: [
          { questName: "Thieves Underground", questDescription: "If you have tricked Lukan or have completed Cassandra Pettibone quest, he can introduce you to the Thieves Underground.", target: "Thaddeus Mynor", part: 1 }
        ]
      },
      { x: 13547, y: 6031, text: "Thaddeus Mynor", description: "The quest for the Golden Idol of Kree will become available only if you are at least level 20.", category: ["quest", "npc"], level: 45, sex: "male", race: "Human",
        linkedLabels: [
          { questName: "Thieves Underground", questDescription: "Thaddeus Mynor wants you to retrieve the map of the Tarantian Sewers.", target: "Chest (Sewers map)", part: 2 },
          { questName: "Steal the Golden Idol of Kree", questDescription: "Thaddeus Mynor wants you to steal the golden idol of the barbarians of Kree.", target: "Altar (Kree)", part: 1 }
        ]
      },
      { x: 12684, y: 3507, text: "Chest (Sewers map)", category: ["quest", "chest", "key"], inventory: ["Map of Tarantian Sewers"],
        linkedLabels: [
          { questName: "Thieves Underground", questDescription: "Retrieve the map of the Tarantian Sewers from the chest and return to Thaddeus Mynor to be accepted in the Thieves Underground.", target: "Thaddeus Mynor", part: 3 }
        ]
      },
      { x: 10447, y: 5535, text: "Matthew Jameson", category: ["quest", "npc"], level: 12, sex: "male", race: "Human",
        linkedLabels: [
          { questName: "Retrieve Matthew's Wedding Ring", questDescription: "Matthew Jameson wants you to retrieve his wedding ring from the sewers.", target: "Fancy Ring (Quest)", part: 1 }
        ]
      },
      { x: 13352, y: 3055, text: "Benjamin Gershwin", category: ["quest", "npc"], level: 17, sex: "male", race: "Gnome",
        linkedLabels: [
          { questName: "The Ren'ar Siamese Twins", questDescription: "Benjamin Gershwin, the phrenologist, wants you to bring him the skulls of the Ren'ar siamese twins." }
        ]
      },
      { x: 12167, y: 6219, text: "Simon Plough", category: ["quest", "npc"], level: 8, sex: "male", race: "Gnome",
        linkedLabels: [
          { questName: "Rid Mr. Plough’s Warehouses of Rats", questDescription: "Mr. Plough wants you to rid his warehouses, near the docks in Tarant, of rats.", target: "Warehouse rats" }
        ]
      },
      { x: 11591, y: 4936, text: "Sammie White", master: "Pickpocket master", category: ["quest", "npc", "master"], level: 40, sex: "male", race: "Halfling",
        linkedLabels: [
          { questName: "Run around Tarant in your Underwear", questDescription: "You are to go the middle of Tarant and make a fool of yourself by running around in your underwear.", questType: "master", part: 1 },
          { questName: "Run around Tarant in your Underwear", questDescription: "After you ran naked for a good minute or two, go back to Sammie White and he let you know that this was your actual training.", questType: "master", part: "reward" }
        ]
      },
      { x: 11362, y: 4303, text: "Frederick T. Fitzgerald", master: "Master of Spotting Traps", category: ["quest", "npc", "master"], level: 48, sex: "male", race: "Gnome",
        linkedLabels: [
          { questName: "Get the staff of K’an T’au", questDescription: "F. Fitzgerald, the master of Spotting Traps, wants you to get the staff of K'an T'au from the castle of S'nel N'fa. In exchange, he will give you master training.", target: "Chest (Staff of K'an T'au)", questType: "master", part: 1 }
        ]
      },
      { x: 10451, y: 5303, text: "J.M. Morat", master: "Haggle master", category: ["quest", "npc", "master"], level: 32, sex: "male", race: "Gnome",
        linkedLabels: [
          { questName: "Acquire Ten Thousand Gold Pieces", questDescription: "J. M. Morat, the Haggle Master, wants 10,000 coin in exchange for Master training.", questType: "master", part: 1 },
          { questName: "Acquire Ten Thousand Gold Pieces", questDescription: "One you gathered the 10,000 coins, J. M. Morat will train you.", questType: "master", part: "reward" }
        ]
      },
      { x: 9286, y: 4783, text: "Gurin Rockharrow", master: "Master of Gambling", category: ["quest", "npc", "master"], level: 45, sex: "male", race: "Dwarf",
        linkedLabels: [
          { questName: "Gamble with Gurin Rockharrow", questDescription: "Gurin Rockharrow has agreed to tutor you in the skills of gambling.", target: "Gurin Rockharrow", questType: "master", part: 1 },
          { questName: "Gamble with Gurin Rockharrow", questDescription: "After you won a certain number of times, Gurin will accepts to train you.", target: "Gurin Rockharrow", questType: "master", part: 2 }
        ]
      },
      { x: 11285, y: 5706, text: "Madam Lil", description: "Some quests of Madam Lil are available to men or women only.", category: ["quest", "npc", "bounty"], level: 30, sex: "female", race: "Human", inventory: ["Gift for Mrs. Regina Halster", "Madam Lil's Music Box"],
        linkedLabels: [
          { questName: "Retrieve Cassie's necklace", questDescription: "Madam Lil would like you to retrieve Cassie's necklace from Mr. Mooreland's house at 46 Devonshire Way.", target: "Laura", part: 1 },
          { questName: "Get Mr. Langley to Pay", questDescription: "Mr. Langley owes 400 coin to Madam Lil.  Collect it and return it to her.  He is the doorman at The Bridesdale Inn.", target: "Mr. Langley", part: 1 },
          { questName: "[Males only] Deliver Package to Mrs. Halster", questDescription: "Madam Lil would like you to deliver a gift to Mrs. Halster at 48 Devonshire Way.  You must tell her it is from her husband.", target: "Mrs. Regina Halster", part: 1 },
          { questName: "[Females only] ''Service'' Mr. Franklin", questDescription: "Madam Lil would like you to ''service'' Mr. Franklin.  He lives at the corner of Vermillion and Grimson.", target: "Mr. Franklin", part: 1 },
          { questName: "Get Madam Lil a Medallion of Beauty", questDescription: "Madam Lil would like you to locate a Medallion of Beauty for her.", target: "Madam Lil", part: 1 },
          { questName: "Get Madam Lil a Medallion of Beauty", questDescription: "The Medallion of Beauty can be bought from the Black Market, or found in the random loots of Magick Chests. Then, return to Madam Lil for a reward.", part: 2 }
        ]
      },
      { x: 9953, y: 5070, text: "Laura", category: ["quest", "npc"], level: 6, sex: "female", race: "Human",
        linkedLabels: [
          { questName: "Retrieve Cassie's necklace", questDescription: "Return Cassie's necklace to Madam Lil.", target: "Madam Lil", part: 2 }
        ]
      },
      { x: 9906, y: 4712, text: "Mr. Langley", category: ["quest", "npc"], level: 8, sex: "male", race: "Halfling",
        linkedLabels: [
          { questName: "Get Mr. Langley to Pay", questDescription: "Mr. Langley will ask you to come back after 5 days to pay his debt. You can convince him to pay half immediately. Afterwards, return to Madam Lil.", target: "Madam Lil", part: 2 }
        ]
      },
      { x: 9740, y: 4958, text: "Mrs. Regina Halster", category: ["quest", "npc"], level: 5, sex: "female", race: "Human",
        linkedLabels: [
          { questName: "[Males only] Deliver Package to Mrs. Halster", questDescription: "Pretend you are a delivery boy and make Mrs. Halster happy of the package she received from her ''husband''. Return to Madam Lil after that.", target: "Madam Lil", part: 2 },
          { questName: "Deliver Payment Notice to Mrs. Halster", questDescription: "Return to Mr. Wright and you will receive 75 coins and 1200 experience.", target: "Mr. Victor Wright", part: 2 }
        ]
      },
      { x: 10067, y: 4780, text: "Mr. Franklin", category: ["quest", "npc", "bounty"], level: 12, sex: "male", race: "Halfling", inventory: ["Ring Of Virility"],
        linkedLabels: [
          { questName: "[Females only] ''Service'' Mr. Franklin", questDescription: "Mr. Franklin lives at corner of Vermillion and Grimson. ''Service'' him and return to Madam Lil.", target: "Madam Lil", part: 2 }
        ]
      },
      { x: 11810, y: 4836, text: "Thom Grak", category: ["quest", "npc"], level: 7, sex: "male", race: "Half-Orc",
        linkedLabels: [
          { questName: "Find Matt de Cesare", questDescription: "Thom Grak, a rather jovial half orc, has asked me to find Sir Matt de Cesare for him.", target: "Matt de Cesare" }
        ]
      },
      { x: 10448, y: 4183, text: "Jared", category: ["quest", "npc"], level: 28, sex: "male", race: "Human",
        linkedLabels: [
          { questName: "Jared & Wilhemina", questDescription: "Discover the fate of Wilhemina, girlfriend of Jared the guard", target: "Wilhemina Carpenter", part: 1 },
          { questName: "Jared & Wilhemina", questDescription: "Jared the guard wants you to go to the stonecutter at the corner of Mulligan Bone Alley and East End Ave. in Tarant to commission a tombstone for his beloved Wilhemina.", target: "Joseph the Stonecutter", part: 3 }
        ]
      },
      { x: 14790, y: 4780, text: "Joseph the Stonecutter", category: ["quest", "npc"], level: 42, sex: "male", race: "Dwarf",
        linkedLabels: [
          { questName: "Jared & Wilhemina", questDescription: "After you spoke with the stonecutter, return to Jared.", target: "Jared", part: 4 }
        ]
      },
      { x: 11055, y: 4110, text: "Mr. Victor Wright", description: "You can tell Victor Wright about the zeppelin crash, and he'll pay you 500 (or 800) gold for it. Telling your story makes you better known, resulting in gifts from random NPCs, but makes it impossible to talk your way out of fights with assassins on the overworld map.", category: ["quest", "npc"], level: 15, sex: "male", race: "Human",
        linkedLabels: [
          { questName: "Deliver Payment Notice to Mrs. Halster", questDescription: "Mr. Wright, Editor of the Tarantian, would like you to deliver a payment note to Mrs. Halster who lives on the corner of Devonshire and Vermillion.", target: "Mrs. Regina Halster" }
        ]
      },
      { x: 14075, y: 4632, text: "Captain Wheeler", category: ["quest", "npc"], level: 45, sex: "male", race: "Human", inventory: ["Key to the factory", "Levered Machine Gun"],
        linkedLabels: [
          { questName: "End the Orc Uprising", questDescription: "Capt. Wheeler of the Tarantian Guard wants you to kill Donn Throgg to end the orc uprising.", target: "Donn Throgg", part: 1 },
          { questName: "End the Orc Uprising", questDescription: "Capt. Wheeler of the Tarantian Guard wants you to convince Donn Throgg to surrender to end the orc uprising.", target: "Donn Throgg", part: 1 }
        ]
      },
      { x: 13913, y: 4581, text: "Mr. Babcock", category: ["quest", "npc"], level: 20, sex: "male", race: "Gnome",
        linkedLabels: [
          { questName: "End the Orc Uprising", questDescription: "Mr. Babcock wants you to convince Donn Throgg to slip out of the factory unseen, thereby ending the orc uprising, so that he may become the union representative for the orcs of Tarant.", target: "Donn Throgg", part: 1 }
        ]
      },
      { x: 14367, y: 4190, text: "Donn Throgg", category: ["quest", "npc"], level: 35, sex: "male", race: "Half-Orc",
        linkedLabels: [
          { questName: "End the Orc Uprising", questDescription: "There are three ways to complete this quest: kill him, convince him to fight, or convince him to run away.", target: "Donn Throgg", part: 2 }
        ]
      },
      { x: 9336, y: 4948, text: "Matt de Cesare", category: ["quest", "npc"], level: 15, sex: "male", race: "Human",
        linkedLabels: [
          { questName: "Find Matt de Cesare", questDescription: "It's a trap! As soon as you talk with M. de Cesare, two men tries to kill him.", part: 2 },
          { questName: "The Ren'ar Siamese Twins", questDescription: "Sir M. de Cesare wants you to find the skulls of the Ren'ar siamese twins and bring them to him. He believes they may be in a warehouse in Tarant somewhere.", target: "Barrel (Ren'ar Twins)", part: 1 },
          { questName: "The Ren'ar Siamese Twins", questDescription: "You need to find Arthur Tyron and bring him the siamese twin skulls as proof of a larger conspiracy. His last known address was in Black Root.", target: "Tyron's Note", part: 3 },
          { questName: "The Ren'ar Siamese Twins", questDescription: "Search for Arthur Tyron in Caladon. He lives on 22 Dragon's Turnabout", target: "Arthur Tyron", part: 5 }
        ]
      },
      { x: 13008, y: 5799, text: "Barrel (Ren'ar Twins)", category: ["quest", "chest"], chestState: "locked", inventory: ["The Skulls of the Ren'ar Siamese Twins"],
        linkedLabels: [
          { questName: "The Ren'ar Siamese Twins", questDescription: "Picklock or destroy the barrel, get the skulls and return to Matt de Cesare.", target: "Matt de Cesare", part: 2 }
        ]
      },
      { x: 9369, y: 5321, text: "Edward Willoughsby", category: ["quest", "npc"], level: 45, sex: "male", race: "Gnome",
        linkedLabels: [
          { questName: "Negotiations with Caladon", questDescription: "Speak to Mr Willoughsby as he leaves his home at 19 Pickwick Alley in Tarant after you have returned from your first visit to Qintarra. He will tell you to meet him at City Hall.", target: "Edward Willoughsby (II)", questType: "master", part: 1 }
        ]
      },
      { x: 12848, y: 3587, text: "Edward Willoughsby (II)", category: ["quest", "npc"], level: 45, sex: "male", race: "Gnome",
        linkedLabels: [
          { questName: "Negotiations with Caladon", questDescription: "Edward Willoughsby wants you to convince King Farad's advisors that Caladon should join the Unified Kingdom.", target: "Edward Willoughsby (Caladon)", questType: "master", part: 2 }
        ]
      },
      { x: 12726, y: 3653, text: "Heinrich Jenks", category: ["quest", "npc"], level: 7, sex: "male", race: "Human",
        linkedLabels: [
          { questName: "Assassinating King Farad", questDescription: "Heinrich Jenks wants you to assassinate King Farad of Caladon.", target: "Bullors", part: 1 }
        ]
      },
      { x: 7898, y: 6542, text: "Muggs", category: ["quest", "npc"], level: 25, sex: "male", race: "Dwarf",
        linkedLabels: [
          { questName: "Collect from Larrs", questDescription: "Muggs would like for you to collect 200 gold from a Mr. Larrs in the Boil. If Larrs is unable to pay, you are to kill him.", target: "Larrs", part: 1 }
        ]
      },
      { x: 7676, y: 6539, text: "Miranda Tears", category: ["quest", "npc"], level: 30, sex: "female", race: "Human",
        linkedLabels: [
          { questName: "Steal a Crate of Ale", questDescription: "Miranda Tears wants you to take a crate of ale from the Clan Maug's warehouse.", target: "Crate of Ale", part: 1 }
        ]
      },
      { x: 6088, y: 6515, text: "Crate of Ale", category: "quest", inventory: ["Crate of Ale"],
        linkedLabels: [
          { questName: "Steal a Crate of Ale", questDescription: "Return to Miranda Tears with the crate for a reward.", target: "Miranda Tears", part: 2 }
        ]
      },
      { x: 7784, y: 6484, text: "Caleb Malloy", category: ["quest", "npc"], level: 35, sex: "male", race: "Human", inventory: ["Malloy's Peacemaker"],
        linkedLabels: [
          { questName: "Caleb Malloy's Whiskey", questDescription: "Caleb Malloy wants you to pick up his shipment of whiskey.", target: "Biggs", part: 1 }
        ]
      },
      { x: 9143, y: 6179, text: "Biggs", category: ["quest", "npc"], level: 1, sex: "male", race: "Dwarf",
        linkedLabels: [
          { questName: "Caleb Malloy's Whiskey", questDescription: "As soon as you receive the whiskey, you will be attacked by Malek Nebb and his gang. Give the whiskey to Caleb for your reward.", target: "Caleb Malloy", part: 2 }
        ]
      },
      { x: 6135, y: 6203, text: "Darian Maug", category: ["quest", "npc"], level: 40, sex: "male", race: "Human",
        linkedLabels: [
          { questName: "Kill Pollock", questDescription: "Darian Maug has contracted you to kill Pollock.", target: "Pollock", part: 1 },
          { questName: "Kill Darian Maug", questDescription: "Return to Pollock for a reward.", target: "Pollock", part: 2 }
        ]
      },
      { x: 9063, y: 6981, text: "Pollock", category: ["quest", "npc"], level: 40, sex: "male", race: "Half-Ogre",
        linkedLabels: [
          { questName: "Kill Darian Maug", questDescription: "Pollock wants you to kill Darian Maug.", target: "Darian Maug", part: 1 },
          { questName: "Kill Pollock", questDescription: "Return to Darian Maug for a reward.", target: "Darian Maug", part: 2 }
        ]
      },
      { x: 6787, y: 6280, text: "Milo", category: ["quest", "npc"], level: 30, sex: "male", race: "Gnome",
        linkedLabels: [
          { questName: "Kill Treat", questDescription: "Milo wants you to kill Treat, a Pollock gang member, for messing with his girl.", target: "Treat", part: 1 }
        ]
      },
      { x: 8186, y: 7274, text: "Treat", category: ["quest", "npc"], level: 17, sex: "male", race: "Half-Orc",
        linkedLabels: [
          { questName: "Kill Treat", questDescription: "Once you killed Treat, return to Milo for a reward.", target: "Milo", part: 2 }
        ]
      },
      { x: 6646, y: 6677, text: "Larrs", category: ["quest", "npc"], level: 1, sex: "male", race: "Half-Orc",
        linkedLabels: [
          { questName: "Collect from Larrs", questDescription: "Muggs would like for you to collect 200 gold from a Mr. Larrs in the Boil. If Larrs is unable to pay, you are to kill him.", target: "Muggs", part: 2 }
        ]
      },
      { x: 10667, y: 5193, text: "Telegraph Operator", category: "quest", level: 5, sex: "male", race: "Human", inventory: ["Telegram"],
        linkedLabels: [
          { questName: "Elder Joachim’s paper trail", target: "Innkeeper (Stillwater)", part: 3 }
        ]
      },
      { x: 13408, y: 5334, text: "Stanton", description: "You can get the deed by either killing Stanton or buying it from him. If your persuasion skill is at least of 1 point, you can convince him that you are a representative of the Industrial Council and scare him into handing over the deed.", category: ["quest", "npc"], level: 20, sex: "male", race: "Human",
        linkedLabels: [
          { questName: "Free the Ghost of Bessie Toone", questDescription: "Good ending - you can return the deed to Sarah Toone.", target: "Sarah Toone", part: 5 },
          { questName: "Free the Ghost of Bessie Toone", questDescription: "Bad ending - you can return the deed to Percival Toone.", target: "Percival Toone", part: 5 }
        ]
      },
      { x: 12785, y: 3206, text: "Librarian", category: ["npc", "quest"], level: 13, sex: "female", race: "Gnome", inventory: ["The Curse of T'sen-Ang"],
        linkedLabels: [
          { questName: "Find Mr. Victor Misk", questDescription: "Find Mr. Victor Misk", target: "Lillian Misk", part: 1 }
        ]
      },
      { x: 12942, y: 2920, text: "Professor Eakins", category: ["quest", "npc"], level: 14, sex: "male", race: "Human",
        linkedLabels: [
          { questName: "Stop the Whytechurch Murderer", questDescription: "You need to retrieve the Blade of Xerxes to enable you to slay the demon L'anamelach.", part: 4 }
        ]
      },
      { x: 15104, y: 4025, text: "Saboteurs", description: "3 NPCs spawns at midnite (nothing valuable in inventory): Half Orc Bandit / Male / 8 - Human Bandit / Female / 7 - Human Bandit / Male / 6", category: ["quest"] },
      { x: 10471, y: 4990, text: "James Kingsford", category: ["quest", "key", "npc"], level: 6, sex: "male", race: "Human",
        linkedLabels: [
          { questName: "Origins of the Strange Ring", questDescription: "James Kingsford doesn't want to let you see Winston Schuyler. Take care of him, get his key and proceed to the underground.", target: "Winston Schuyler", questType: "main", part: 3 }
        ]
      },
      { x: 10875, y: 3670, text: "Wendell Wellington", category: ["quest", "npc"], level: 10, sex: "male", race: "Gnome" },
      { x: 12560, y: 4310, text: "H. T. Parnell", category: ["quest", "npc", "key"], level: 19, sex: "male", race: "Human", inventory: ["Key for Stillwater Giant Case"],
        linkedLabels: [
          { questName: "The Stillwater Giant" }
        ]
      },
      { x: 12510, y: 4200, text: "Stillwater Giant display case", category: ["quest", "chest", "key"], inventory: ["Stillwater Giant Pelt"],
        linkedLabels: [
          { questName: "The Stillwater Giant" }
        ]
      },
      { x: 12202, y: 3427, text: "Ancient Iron Chest", category: ["quest", "chest"], inventory: ["Map: The Place of Lost Voices", "Ancient Iron Drums", "Ancient Iron Drums", "Ancient Iron Drums"],
        linkedLabels: [
          { questName: "The Iron Clan", questDescription: "Craft the Key to the Iron Clan Chest, open it and get what the chest contains. Then, go to the Place of Lost Voices.", target: "Music Box of the Iron Clan", part: 2 }
        ]
      },
      { x: 12321, y: 3253, text: "Dr. Tristan Fenwick", category: ["quest", "npc"], level: 24, sex: "male", race: "Gnome",
        linkedLabels: [
          { questName: "The Stillwater Giant" }
        ]
      },
      { x: 11792, y: 5493, text: "Chest", category: ["chest", "bounty"], inventory: ["Cassie's Jewellery"] },
      { x: 13344, y: 4713, text: "Safe", category: ["chest", "bounty"], inventory: ["Derian Ka Sword"] },
      { x: 9585, y: 5361, text: "Chest", category: ["chest", "bounty"], inventory: ["Enchanted Looking Glass"] },
      { x: 12231, y: 4334, text: "Wood Chest", category: ["chest", "bounty"], inventory: ["Will-O-The-Wisp Essence"] },
      { x: 11392, y: 6928, text: "Barrel", category: ["chest", "bounty"], inventory: ["Flawless Dwarven Rubies"] },
      { x: 15765, y: 4264, text: "Crates", category: ["chest", "bounty"], inventory: ["Heron Device"] },
      { x: 13104, y: 4574, text: "Chest", category: ["chest", "bounty"], inventory: ["Jewel Of Hebe"] },
      { x: 12163, y: 5420, text: "Human City Dweller", category: ["npc", "bounty"], level: 14, sex: "male", race: "Human", inventory: ["Lucky Medallion"] },
      { x: 12309, y: 3219, text: "Chest", category: ["chest", "bounty"], inventory: ["Lethe Wyvern Venom"] },
      { x: 9762, y: 4888, text: "Cabinet", category: ["chest", "bounty"], inventory: ["Napha Water"] },
      { x: 15167, y: 4241, text: "Wood Chest", category: ["chest", "bounty"], inventory: ["Plans For Schreck's Multi-barrel Pistol"] },
      { x: 11405, y: 4261, text: "Chest", category: ["chest", "bounty"], inventory: ["Potion Of Dark Power"] },
      { x: 15091, y: 4671, text: "Half Ogre City Dweller", category: ["key", "npc"], level: 14, sex: "male", race: "Half-Ogre", inventory: ["Key to the Back Room in 57 Mulligan Bone"] },
      { x: 15283, y: 4569, text: "Human Guard", category: ["key", "npc"], level: 42, sex: "male", race: "Human", inventory: ["Key to the Warehouse of the Small"] },
      { x: 11907, y: 5601, text: "Mr. Black", category: "npc", level: 38, sex: "male", race: "Half-Orc" },
      { x: 13168, y: 2945, text: "Aldous T. Buxington", category: "npc", level: 18, sex: "male", race: "Elf" },
      { x: 13054, y: 2866, text: "University Bookseller", category: "npc", level: 17, sex: "male", race: "Dwarf" },
      { x: 12368, y: 5432, text: "Poone", category: "npc", level: 23, sex: "male", race: "Human" },
      { x: 11155, y: 5626, text: "Nicholas Longfoot", category: "npc", level: 31, sex: "male", race: "Half-Ogre" },
      { x: 10528, y: 5248, text: "Grant the Bartender", category: "npc", level: 31, sex: "male", race: "Human" },
      { x: 9764, y: 4616, text: "Innkeeper", category: "npc", level: 21, sex: "female", race: "Human" },
      { x: 13113, y: 4636, text: "Human Priest", category: "npc", level: 20, sex: "male", race: "Human" },
      { x: 12486, y: 3335, text: "Half Orc City Dweller", category: "npc", level: 10, sex: "female", race: "Half-Orc" },
      { x: 9891, y: 3869, text: "Train Conductor (Tarant)", category: "npc", level: 20, sex: "male", race: "Human" },
      { x: 9370, y: 4101, text: "Train Conductor (Tarant)", category: "npc", level: 22, sex: "male", race: "Human" },
      { x: 9386, y: 5098, text: "Wood Chest", category: "chest", chestState: "locked", inventory: ["3600 gold"] },
      { x: 8480, y: 5055, text: "Coffin", description: "inventory: Gentleman's club Matchbook", category: "chest" },
    ]
  },
  {
    filename: "ArcanumBase/TheBedokaanVillage.jpg",
    displayName: "The Bedokaan Village",
    modGroup: "Cities",
    music: "", // CONFIRMED - No music.
    labels: [
      { x: 2154, y: 599, text: "Kan Kerai", sex: "male", race: "Bedokaan", level: 45, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Free the Elf from the Bedokaan", questDescription: "Kill the Poachers for Kan Kerai.", target: "", part: 3 }
        ]
      },
      { x: 2226, y: 979, text: "Waromon", sex: "male", race: "Bedokaan", level: 20, description: "If you handle Kan Kerai's quest diplomatically, Waromon might become available to join your group", category: "followers" },
      { x: 1244, y: 880, text: "Elf Villager", sex: "male", race: "Elf", level: 18, category: ["npc", "quest"],
        linkedLabels: [
          { questName: "Free the Elf from the Bedokaan", questDescription: "You have to negotiate the release of the elf with Kan Kerai.", target: "Kan Kerai", part: 2 }
        ]
      },
      { x: 1787, y: 1051, text: "Makaal's Altar", category: "altar",
        godType: "Neutral Lesser God",
        inscription: "Textures/Altar/Makaal.png",
        offering: ["Heartstone"],
        blessing: ["+1 Dexterity"]
      },
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
    music: "", // CONFIRMED - No music.
    defaultView: { x: 2294, y: 1344 },
    labels: [
      { x: 2347, y: 1314, text: "T'sen-Ang - Entrance", description: "", category: "waypoint", targetMapFilename: "T’sen-Ang Entrance", targetX: 1072, targetY: 511 },
      { x: 2360, y: 710, text: "M'in Gorad Chamber", description: "", category: "waypoint", targetMapFilename: "M'in Gorad Chamber", targetX: 137, targetY: 316 },

      { x: 1468, y: 979, text: "Z'an Al'urin", sex: "female", race: "Dark Elf", level: 29, portrait: "Textures/zanalurin.gif", description: "Z'an is an evil spellcaster (earth, force, and temporal). If you tell her your name, she might agree to join you.", inventory: ["Magick Robes"], category: "followers" },
      { x: 1305, y: 472, text: "Maug Maulman", sex: "male", race: "Half-Ogre", level: 31, category: ["quest", "npc"], linkedLabels: ["T'val N'or"],
        linkedLabels: [
          { questName: "Free the Half-Ogre Slaves", questDescription: "Kill the dark elf mage T'val N'or in order to break the spell holding the half ogre slaves.", target: "T'val N'or", part: 1 }
        ]
      },
      { x: 888, y: 627, text: "T'val N'or", sex: "male", race: "Dark Elf", level: 33, inventory: ["Mystic Traveler's Cloak", "Scroll of Sense Invisible/Traps", "Scroll of Call Earth Elemental", "Scroll of Disarm"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Free the Half-Ogre Slaves", questDescription: "Kill the dark elf mage T'val N'or in order to break the spell holding the half ogre slaves.", target: "T'val N'or", part: 2 }
        ]
      },
      { x: 2104, y: 790, text: "Gideon Laier", sex: "male", race: "Human", level: 45, description: "After learning the fate of the BMC and leaving M'in Gorad's residence, you'll run into Gideon Laier, the First Blade of the Molochean Hand. He'll recognize who you are. If you know something of the history of the Molochean Hand, you might be able to convince Laier to leave you alone by telling him that he's essentially working for Arronax. However, since Gideon is wearing some nice equipment, you might want to let him attack you so you can get it. None of the dark elves will come to his aid. Oddly, the conversation with Laier will go the same whether you've joined up with the dark elves or not. If you have read Joachim's book and learned about First Assassin Trellian, then you can confront Gideon about the Hand repeating the mistakes of the past (''The Hand hasn't always been this way...'') . He will promise to call off the attacks on you, and if Vollinger is in your party, he will out him as a Hand assassin and offer him to you as a permanent companion, to make up for the Hand's attempts on your life.", category: ["npc", "information"] },
      { x: 1875, y: 1478, text: "Dark Elf Villager", sex: "female", race: "Dark Elf", level: 22, inventory: ["Dorian Amulet", "Elven Hunter's Bow"], category: "npc" },
      { x: 818, y: 590, text: "Chest", inventory: ["Blade of Vicious Haste"], category: "chest" },

    ]
  },
  {
    filename: "ArcanumBase/Tulla",
    chunked: true,
    width: 4904,
    height: 2664,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "Tulla",
    modGroup: "Cities",
    music: "music/Tulla.mp3",
    defaultView: { x: 676, y: 2431 },
    labels: [
      // Waypoints
      { x: 743, y: 2388, text: "Teleportation Gate", description: "", category: "waypoint", targetMapFilename: "Tulla", targetX: 1030, targetY: 2242 },
      { x: 1030, y: 2242, text: "Teleportation Gate", description: "", category: "waypoint", targetMapFilename: "Tulla", targetX: 743, targetY: 2388 },
      { x: 2268, y: 1619, text: "Tulla - Inside", description: "", category: "waypoint", targetMapFilename: "Tulla - Main Floor", targetX: 836, targetY: 1410 },

      // Quests
      { x: 1964, y: 2153, text: "Herzod Munk", sex: "male", race: "Human", level: 35, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Retrieve the Platinum Chalice", questDescription: "Retrieve the platinum chalice from Fa'al Kin's Maze for Herzod Munk.", target: "" }
        ]
      },
      { x: 1974, y: 1748, text: "Pelojian", sex: "male", race: "Human", level: 45, description: "Pelojian will tell you about Vendigroth and the Device, and he'll mark the location of Vendigroth on your world map.", category: ["quest", "npc"], linkedLabels: ["Simeon Tor"] },
      { x: 675, y: 2428, text: "Albert", sex: "male", race: "Human", level: 40, inventory: ["Gem of Water Purity", "Machined Plate"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "The Gem of Water Purification", questDescription: "Kill Albert, or steal the Gem from him, then return to V'ed Eckesx for a reward.", target: "V'ed Eckes, Master of Water Magick", part: 2 }
        ]
      },

      // NPCs
      { x: 662, y: 2350, text: "Elf Guard", sex: "Male", race: "Elf", level: 50, inventory:["Magick Robes"], category: "npc" },

      // Information
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
    music: "music/Villages.mp3", // Good
    defaultView: { x: 1031, y: 496 },
    labels: [
      { x: 1249, y: 314, text: "Edwin Wallows", sex: "male", race: "Gnome", level: 1, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "A new stone for Halcyon's Altar", questDescription: "Edwin Wallows of the Halcyon Order in Vooriden wants you to retrieve a new altar stone from Torin Quarry.", target: "Murgo", part: 1 }
        ]
      },
      { x: 955, y: 487, text: "Murgo", sex: "male", race: "Half-Ogre", level: 30, portrait: "Textures/murgo.gif", category: ["quest", "followers"],
        linkedLabels: [
          { questName: "A new stone for Halcyon's Altar", questDescription: "For this quest, you can recruit Murgo as a temporary follower. Murgo will leave the group once you return to Vooriden, or if you deviate from the quest.", target: "Stone", part: 2 }
        ]
      },
      { x: 1343, y: 248, text: "Halcyon's Altar", description: "", category: ["altar"],
        godType: "Greater God",
        inscription: "Textures/Altar/Halcyon.png",
        offering: ["Olive Tree Branch"],
        blessing: ["+2 Willpower", "+2 Perception", "+4/20 Heal", "+4/20 Spot Trap"]
      },
    ]
  },
  {
    filename: "ArcanumBase/WheelClan.png",
    displayName: "Wheel Clan",
    altView: {
      icon: "Textures/itemimg/Helmets/WheelClanSpectacles.png",
      image: "ArcanumBase/WheelClan-Open.png"
    },
    music: "", // CONFIRMED - No music outside.
    modGroup: "Cities",
    defaultView: { x: 1111, y: 604 }, // Good
    labels: [
      { x: 1213, y: 487, text: "Reveal the gate", description: "The entrance is hidden until the player stands in a crude square and dons a pair of Wheel Clan Spectacles.", category: ["quest", "information"],
        linkedLabels: [
          { questName: "Investigate the Wheel Clan", questDescription: "Equip the Wheel Clan Spectacles and pass through the ruins to reveal the gate.", questType: "main", target: "Randver Thunder Stone", part: 2 },
          { questName: "Contact the Wheel Clan", questDescription: "As soon as you will pass the gate, Thorvald will leave your group. If you don't want that to happen, make him wait while you talk about him to the guards. This will make him be a permanent follower.", part: 2 },
        ],
      },
      { x: 1257, y: 418, text: "Wheel Clan - Level 1", description: "", category: "waypoint", targetMapFilename: "Wheel Clan - Level 1", targetX: 238, targetY: 858},
    ]
  },

/// DUNGEONS MAPS
  {
    filename: "ArcanumBase/ALairOfGyrDolours.jpg",
    displayName: "A Lair of Gyr Dolours",
    modGroup: "Quest locations",
    music: "", // CONFIRMED - No music.
    defaultView: {x: 737, y: 1221},
    labels: [
      { x: 1602, y: 524, text: "Lady Druella", sex: "female", race: "Half-Elf", level: 17, portrait: "Textures/druella.png", description: "", category: ["followers", "quest"] },
    ],
  },
  {
    filename: "ArcanumBase/ArbalahsHouse.png",
    displayName: "Arbalah’s House",
    modGroup: "Quest locations",
    music: "", // CONFIRMED - No music.
    defaultView: { x: 1031, y: 605 },
    labels: [
      { x: 912, y: 477, text: "Arbalah", sex: "male", race: "Half-Elf", level: 10, category: ["quest", "npc"],
        linkedLabels: [{ questName: "Quest: The Priest and the Bandit", questDescription: "Arbalah has refuted the claims of Charles Brehgo, saying Brehgo and his partner Fahrkus killed his family and stole a sacred artifact from him. He would like for me to locate and return this artifact to him.", target: "Charles Brehgo", part: 2 }],
     },
    ],
  },
  {
    filename: "ArcanumBase/AMysteriousLocation.png",
    displayName: "A mysterious location",
    modGroup: "Quest locations",
    music: "", // CONFIRMED - No music.
    defaultView: { x: 796, y: 1211 },
    labels: [
      { x: 1333, y: 838, text: "Hollow Stump", inventory: ["Prowling Master Note 3"], category: ["quest", "chest"],
        linkedLabels: [
          { questName: "Find the Master of Prowling", questDescription: "Read the Prowling Master Note 3 and return to the Mushroom Inn.", questType: "master", target: "Mushroom's Fireplace", part: 4 }
        ]
      }, 
    ],
  },
  {
    filename: "ArcanumBase/AncientMaze.jpg",
    displayName: "Ancient Maze",
    modGroup: "Other locations",
    music: "", // CONFIRMED - No music.
    defaultView: { x: 2662, y: 1730 },
    labels: [
      { x: 2372, y: 1329, text: "Fancy Chest", description: "", category: "chest" },
      { x: 1531, y: 776, text: "Mystic Chest", description: "", category: "chest" },
      { x: 1288, y: 1063, text: "Mystic Chest", description: "", category: "chest" },
      { x: 2206, y: 1073, text: "Mystic Chest", description: "", category: "chest" },
      { x: 1802, y: 577, text: "Mystic Chest", description: "", category: "chest" },
      { x: 956, y: 947, text: "Sarcophagus", description: "", category: "chest" },
      { x: 888, y: 702, text: "Mystic Chest", description: "", category: "chest" },
    ]
  },
  {
    filename: "ArcanumBase/AncientRuins.png",
    displayName: "Ancient Ruins",
    modGroup: "Other locations",
    defaultView: { x: 655, y: 493 },
    labels: [
      { x: 835, y: 390, text: "Mystic Chest", description: "", category: ["chest"] },
    ],
  },
  {
    filename: "ArcanumBase/AncientShipwreck.jpg",
    displayName: "Ancient Shipwreck",
    modGroup: "Other locations",
    music: "", // CONFIRMED - No music.
    defaultView: {}, // Good
    labels: [
      { x: 1428, y: 787, text: "Greater Skeletons", description: "The Shipwreck is notable for being abandoned during the day, and haunted by several Greater Skeletons at night. The skeletons carry a variety of weapons and treasure, including a Kathorn crystal which is used to make Wheel Clan Spectacles.", category: "information" },
    ],
  },
  {
    filename: "ArcanumBase/AncientTemple.png",
    displayName: "Ancient Temple",
    modGroup: "Quest locations",
    defaultView: { x: 1026, y: 849 }, // Good
    labels: [
      { x: 1107, y: 315, text: "Ancient Temple - Underground", description: "", category: "waypoint", targetMapFilename: "Ancient Temple - Underground", targetX: 1798, targetY: 223},
    ],
  },
  {
    filename: "ArcanumBase/BoatLandingOnThanatos.jpg",
    displayName: "Boat Landing on Thanatos",
    modGroup: "Quest locations",
    // music:
    defaultView: { x: 1483, y: 831 },
    labels: [
      { x: 1199, y: 1230, text: "Barrel", category: ["quest", "chest"], 
        linkedLabels: [
          { questName: "Find Nasrudin", questDescription: "Contains a journal from a previous adventurer. Reading the journal will give you the locations of the Village of the Ashlag Tribe and the Thanatos Land Bridge.", target: "Nasrudin", part: 8 }
        ]
      },
    ],
  },
  {
    filename: "ArcanumBase/BolosAltar.png",
    displayName: "Bolo’s Altar",
    modGroup: "Other locations",
    // music: "",
    defaultView: { x: 763, y: 587 },
    // background: "#000000",
    labels: [
      { x: 801, y: 558, text: "Bolo's Altar", godType: "Neutral Lesser God", inscription: "Textures/Altar/Bolo.png", offering: ["Ring"], blessing: ["+4/20 Pick Pocket", "+4/20 Pick Locks"], category: "altar" },
    ]
  }, 
  {
    filename: "ArcanumBase/CrashSite",
    chunked: true,
    width: 20901,
    height: 9834,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "Crash Site",
    modGroup: "Quest locations",
    music: "music/Wilderness.mp3", // Good
    defaultView: { x: 2145, y: 1331 }, // Good
    background: "#000000", // Good
    labels: [
      // Waypoints
      { x: 3239, y: 894, text: "Crash Site - Cave", category: "waypoint", targetMapFilename: "Crash Site - Cave" },

      // Followers
      { x: 2179, y: 1308, text: "Virgil", sex: "Male", race: "Human", level: 1, portrait: "Textures/virgil.gif", followerType: "regular", category: ["followers", "quest"],
        linkedLabels: [
          { questName: "Elder Joachim’s paper trail", questDescription: "Meet with Elder Joachim in Shrouded Hills.", target: "Joachim’s Note to Virgil", part: 1 }
        ]
      },

      // Quests
      { x: 2132, y: 1344, text: "Preston Radcliffe", sex: "male", race: "Gnome", level: 1, inventory: ["Preston Radcliffe's Passport", "Matchbook from Roseborough Inn"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Origins of the Strange Ring", questDescription: "Discover the origins of the strange ring.", questType: "main", target: "Ristezze", part: 1 }
        ]
      },
      { x: 2353, y: 1112, text: "Isaac Zapruder", sex: "male", race: "Human", level: 1, inventory: ["Camera"], category: ["npc", "quest"],
        linkedLabels: [
          { questName: "Find a camera or Bessie Toone paraphernalia", questDescription: "You can bring back Isaac Zapruder's camera to Ristezze, but doing so will prevent you from completing a quest in Caladon.", target: "Ristezze", part: 2 },
          { questName: "Find Proof that Maxim's Air Machines Flew", questDescription: "Isaac Zapruder took a film of the Half-Ogre attacking the attack - this is a good enough proof for Hieronymous Maxim.", questType: "master", target: "Hieronymous Maxim", part: 2 }
        ]
      },
      { x: 2872, y: 1312, text: "Wilhemina Carpenter", sex: "female", race: "Human", level: 1, inventory: ["Wilhemina's Note to Jared"], category: ["npc", "quest"], 
        linkedLabels: [
          { questName: "Jared & Wilhemina", questDescription: "Discover the fate of Wilhemina, girlfriend of Jared the guard.", target: "Jared", part: 2 }
        ]
      },

      // Chest
      { x: 1309, y: 1733, text: "Magick Chest", category: "chest" },

      // Information
      { x: 2137, y: 430, text: "Crashed aeroplane", description: "", category: "information" },
        // Add info
      { x: 3458, y: 2103, text: "Shrine", description: "The Shrine before you is crude, made of rough stone and wood. Carved into one of the stone is this: ''And His spirit shall be reborn on wings of fire in hills shrouded in fog. Archeon 5:16''", category: "information" },
        // Add info
      { x: 3928, y: 2356, text: "City Elf Dweller", sex: "male", race: "Elf", level: 2, description: "When you try to exit the crash site the first time, an assassin will attempt to kill you.", category: ["npc"] },
        // Add proper name + reformulate
      { x: 4026, y: 2557, text: "Wolves", description: "Virgil will recommend you to use the world map to travel to Shrouded Hills. There are, however, 10 wolves beyond this place that gives an interesting boost in exp if you decide to kill them.", category: "information" },
        // Reformulate
    ],
  },
  {
    filename: "ArcanumBase/DarkElfCamp.jpg",
    displayName: "Dark Elf Camp",
    modGroup: "Quest locations",
    // music:
    defaultView: { x: 1269, y: 825 }, // Good
    labels: [
      { x: 1159, y: 660, text: "Body", race: "Dark Elf", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Retrieve the Vendigroth Device (Evil)", questDescription: "A body where you'll find a journal from a previous adventurer. Reading the journal will give you the location of the Vendigroth Ruins.", target: "", part: 2 }
        ]
       },
    ],
  },
  {
    filename: "ArcanumBase/DungeonOfTheDragonPool.jpg",
    displayName: "Dungeon of the Dragon Pool",
    modGroup: "Quest locations",
    music: "", // CONFIRMED - No music.
    defaultView: { x: 1294, y: 1343 }, // Good
    labels: [
      { x: 1276, y: 582, text: "Dungeon of the Dragon Pool - Level 1", description: "", category: "waypoint", targetMapFilename: "Dungeon of the Dragon Pool - Level 1", targetX: 164, targetY: 836 },
    ],
  },
  {
    filename: "ArcanumBase/ElvenRuins.png",
    displayName: "Elven Ruins",
    modGroup: "Quest locations",
    //music: 
    defaultView: { x: 837, y: 611 },
    labels: [
      { x: 812, y: 471, text: "Elven Ruins - Underground", description: "", category: "waypoint", targetMapFilename: "Elven Ruins - Underground", targetX: 1904, targetY: 342},
      { x: 892, y: 428, text: "Dark Elf Noble", category: "npc", level: 8, sex: "male", race: "Dark Elf", inventory: ["Enchanted Sword"] },
      { x: 887, y: 385, text: "Dark Elf Noble", description: "25 arrow", category: "npc", level: 7, sex: "female", race: "Dark Elf", inventory: ["Bow"] },
      { x: 933, y: 399, text: "Dark Elf Noble", description: "25 arrow", category: "npc", level: 7, sex: "male", race: "Dark Elf", inventory: ["Bow"] },
      { x: 930, y: 432, text: "Dark Elf Noble", category: "npc", level: 7, sex: "male", race: "Dark Elf", inventory: ["Scimitar", "Battered Wooden Shield"] },
      { x: 913, y: 400, text: "Professor James", category: "npc", level: 1, sex: "male", race: "Human" },
    ],
  },
  {
    filename: "ArcanumBase/FalconsAche.png",
    displayName: "Falcon’s Ache",
    modGroup: "Quest locations",
    //music: 
    defaultView: { x: 1541, y: 645 },
    //background: "#000000",
    labels: [
      { x: 1636, y: 1011, text: "William Bench", sex: "male", race: "Human", level: 20, description: "", category: ["quest", "npc"], 
        linkedLabels: [
          { questName: "Remove the Humans from Falcon's Ache", questDescription: "With persuasion, you can make William Bench leave by saying that you represent Gilbert Bates and that he is contesting the ownership of the land. Otherwise, let him attack you but don't fight back.", target: "Raven", part: 2 }
        ]
      },
      { x: 1772, y: 996, text: "Black Chest", description: "150 gold", category: "chest", chestState: "locked" },
      { x: 1923, y: 648, text: "Ter'el's Altar", category: "altar",
        godType: "Noble Lesser God",
        inscription: "Textures/Altar/Ter'el.png",
        offering: ["Li'tani"],
        blessing: ["+4/20 Bow", "+1 Perception"]
      },
    ],
  },
  {
    filename: "ArcanumBase/ForbiddenPit.png",
    displayName: "Forbidden Pit",
    modGroup: "Other locations",
    music: "", // CONFIRMED - No music.
    defaultView: { x: 1076, y: 399 },
    labels: [
      { x: 867, y: 559, text: "Junk Pile", description: "350 gold", category: "chest", inventory: ["Ring of Poison Resistance"] },
    ]
  },
  {
    filename: "ArcanumBase/GatewayToTheWastes.png",
    displayName: "Gateway to the Wastes",
    modGroup: "Quest locations",
    //music: 
    defaultView: { x: 438, y: 1357 },
    labels: [
      { x: 605, y: 1304, text: "Weldo Rubin", category: ["quest", "followers"], portrait: "Textures/weldorubin.gif", level: 30, sex: "male", race: "Halfling", inventory: ["Fine Steel Dagger", "Small Wool Jacket", "Metal Shavings", "Metal Clamp", "Lockpicks", "Small Metal Tube", "Metal Casing"],
        linkedLabels: [{ questName: "Find Weldo's Item", questDescription: "Find the part for Weldo's device from the wreckage in the wastes.", part: 1 }] },
    ],
  },
  {
    filename: "ArcanumBase/GorgothPass",
    chunked: true,
    width: 7032,
    height: 4099,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "Gorgoth Pass",
    modGroup: "Quest locations",
    music: "", // CONFIRMED - No music.
    defaultView: { x: 902, y: 3703 },
    labels: [
      { x: 3747, y: 1558, text: "Kai'tan's Altar", category: "altar",
        godType: "Greater God",
        inscription: "Textures/Altar/Kai'tan.png",
        offering: ["Geode"],
        blessing: ["+1 Beauty", "+1 Charisma", "+8/20 Persuasion", "+4/20 Haggle", "+4/20 Bow"]
      },
      { x: 3506, y: 1640, text: "Geode", category: "information", linkedLabels: ["Kai'tan's Altar"] },
      { x: 2835, y: 2774, text: "Human Noble", category: "npc", level: 1, sex: "male", race: "Human", inventory: ["Consuming Plate Mail", "Quality Mace", "Great Helm", "Dented Iron Shield", "Metal Boots"] },
    ],
  },
  {
    filename: "ArcanumBase/HalfOgreIsland",
    chunked: true,
    width: 4118,
    height: 2504,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "Half Ogre Island",
    modGroup: "Quest locations",
    //music: "",
    defaultView: { x: 877, y: 2074 },
    labels: [
      { x: 3094, y: 1041, text: "Safe (Half Ogre Island)", category: ["quest", "chest"], 
        linkedLabels: [
          { questName: "The Ren'ar Siamese Twins", questDescription: "You find in the safe a Laboratory Journal (picking it up make you gain a fate point). Reading it, you discover the attrocities that were commited on the island. Return to Arthur Tyron to report on your discoveries.", target: "Gnome City Dweller", part: 7 },
        ]
      },
    ]
  },
  {
    filename: "ArcanumBase/HardinsPass",
    chunked: true,
    width: 8479,
    height: 4346,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "Hardin’s Pass",
    modGroup: "Quest locations",
    //music: "",
    defaultView: { x: 7098, y: 577 }, // Good
    labels: [],
  },
  {
    filename: "ArcanumBase/KerlinsAltar.png",
    displayName: "Kerlin’s Altar",
    modGroup: "Other locations",
    // music: "",
    defaultView: { x: 863, y: 469 }, // Good
    labels: [
      { x: 1001, y: 387, text: "Kerlin's Altar", category: "altar",
        godType: "Neutral Lesser God",
        inscription: "Textures/Altar/Kerlin.png",
        offering: ["Mnura Coin"],
        blessing: ["+4/20 Haggle", "+4/20 Persuasion"]
      },
      { x: 796, y: 380, text: "2000 coins", category: "information" },
    ],
  },
  {
    filename: "ArcanumBase/KnaThaEntrance.png",
    displayName: "K’na Tha",
    modGroup: "Quest locations",
    // music: "",
    defaultView: { x: 591, y: 517 }, // Good
    labels: [
      { x: 848, y: 552, text: "K’na Tha - Level 1", description: "", category: "waypoint", targetMapFilename: "K’na Tha - Level 1", targetX: 3763, targetY: 2373},
    ],
  },
  {
    filename: "ArcanumBase/Kree",
    chunked: true,
    width: 4673,
    height: 2613,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "Kree",
    modGroup: "Quest locations",
    music: "music/Isle_of_Despair.mp3", // Good
    defaultView: { x: 790, y: 2067 }, // Good
    labels: [
      { x: 2761, y: 553, text: "Shakar's Altar", godType: "Darker Lesser God", inscription: "Textures/Altar/Shakar.png", offering: ["Bone Dagger", "Reaper's Axe"], blessing: ["+4/20 Dodge", "+4/20 Melee"], category: "altar" },
      { x: 3128, y: 682, text: "Altar (Kree)", description: "If you are able to steal the Golden Idol of Kree without killing anyone, you'll earn a fate point.", inventory: ["Golden Idol of Kree"], category: ["quest", "chest"],
        linkedLabels: [
          { questName: "Steal the Golden Idol of Kree", questDescription: "Return the golden idol to Thaddeus Mynor for a reward.", target: "Thaddeus Mynor", part: 2 }
        ]
      },
      { x: 2788, y: 846, text: "Arcane Chest", category: "chest" },
    ],
  },
  {
    filename: "ArcanumBase/LetheWyvernSighting",
    chunked: true,
    width: 4499,
    height: 2366,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "Lethe Wyvern Sighting",
    modGroup: "Quest locations",
    music: "", // CONFIRMED - No music.
    defaultView: { x: 1506, y: 1622 }, // Good
    labels: [
      { x: 2119, y: 1198, text: "Lethe Wyvern", level: 45, category: ["quest"],
        linkedLabels: [
          { questName: "Photograph the Lethe Wyvern", questDescription: "Return to Trevor with the photograph for your reward", target: "Trevor Lynwood", part: 2 }
        ]
      },
    ],
  },
  {
    filename: "ArcanumBase/LiamsWorkshop",
    chunked: true,
    width: 5676,
    height: 2559,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "Liam’s Workshop",
    modGroup: "Quest locations",
    music: "", // CONFIRMED - No music.
    defaultView: { x: 3850, y: 570 }, // Good
    labels: [
      { x: 3299, y: 572, text: "Wood Chest", inventory: ["Magickal trap", "Scroll of Disperse Magick"], category: "chest" },
      { x: 3397, y: 554, text: "Dresser (Liam’s Workshop)", inventory: ["Liam Cameron's Journal"], category: ["quest","chest"],
        linkedLabels: [
          { questName: "Find Liam Cameron", questDescription: "Destroy the portal described in Liam Cameron's journal.", target: "Portal", part: 2 }
        ]
      },
      { x: 1527, y: 1809, text: "Body of Liam Cameron", inventory: ["Magickal trap"], category: "chest" },
      { x: 799, y: 1775, text: "Portal", description: "Use the magickal trap on the portal to destroy it.", category: "quest", linkedLabels: ["Mrs. Lydia Cameron"] },
    ],
  },
  {
    filename: "ArcanumBase/MysteriousRuinsOfTheWastes.jpg",
    displayName: "Mysterious ruins of the wastes",
    modGroup: "Quest locations",
    // music: "",
    defaultView: { x: 799, y: 983 }, // Good
    labels: [
      { x: 1072, y: 811, text: "Items", description: "Sprocket", category: ["quest", "chest"], linkedLabels: ["Weldo Rubin"] },
    ],
  }, 
  {
    filename: "ArcanumBase/NasrudinRestingPlace",
    chunked: true,
    width: 21401,
    height: 9648,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "Nasrudin’s Resting Place",
    modGroup: "Quest locations",
    // music: "",
    defaultView: { x: 13148, y: 4022 }, // Good
    altViews: [
        { displayName: "Land Bridge", defaultView: { x: 9680, y: 581 } } // Good
    ],
    labels: [
      { x: 13336, y: 3868, text: "Nasrudin", sex: "male", race: "Elf", level: 50, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Find Nasrudin", questDescription: "Nasrudin stands in front of you, ready to answer all your questions.", part: "reward" },
          { questName: "Kill Bogaroth", questDescription: "Nasrudin wishes you to kill the Bogaroth. In return, he will tell you what you need to do to kill Arronax.", target: "Bogaroth", part: 1 },
          { questName: "Retrieve the Vendigroth Device", questDescription: "Retrieve the Vendigroth Device and meet Nasrudin in the Ring of Brodgar.", target: "", part: 1 },
          { questName: "Travel to the Ring of Brodgar", questDescription: "Travel to the Ring of Brodgar.", target: "Nasrudin (Roseborough)", part: 1 }
        ]
      }
    ],
  },
  {
    filename: "ArcanumBase/RazorsPointe.png",
    displayName: "Razor’s Pointe",
    modGroup: "Quest locations",
    defaultView: { x: 1615, y: 594 }, // Good
    labels: [
      { x: 1241, y: 1359, text: "Body of Princess Aria", inventory: ["Princess Aria's Amulet"], category: ["quest", "chest"], 
        linkedLabels: [
          { questName: "Find King Praetor's Daughter", questDescription: "Find King Praetor's Daughter", target: "King Praetor", part: 2 },
          { questName: "Find King Praetor's Daughter", questDescription: "Find King Praetor's Daughter", target: "Auguste Farad", part: 2 }
        ]
      },
    ],
  }, 
  {
    filename: "ArcanumBase/RuinsOfSzaboEntrance.png",
    displayName: "Ruins of Szabo",
    modGroup: "Quest locations",
    defaultView: { x: 917, y: 554 }, // Good
    labels: [
      { x: 767, y: 498, text: "Ruins of Szabo - Level 1", category: "waypoint", targetMapFilename: "Ruins of Szabo - Level 1", targetX: 450, targetY: 797},
    ]
  },
  {
    filename: "ArcanumBase/SecretEntranceToTheIronClan.png",
    displayName: "Secret Entrance to the Iron Clan",
    altView: {
        icon: "Textures/itemimg/GlassKey.png",
        image: "ArcanumBase/SecretEntranceToTheIronClan-Open.png"
    },
    modGroup: "Quest locations",
    // music: "", 
    defaultView: { x: 1039, y: 461 }, // Good
    labels: [
      { x: 1296, y: 480, text: "Gate to the Iron Clan", category: "waypoint", targetMapFilename: "Iron Clan - Gate" },
      { x: 1197, y: 429, text: "Ancient Iron Device", description: "Require a Glass Key to open the gate", category: ["quest"] },
    ]
  },
  {
    filename: "ArcanumBase/SecretVillage.png",
    displayName: "Secret Village",
    modGroup: "Other locations",
    // music: "",
    defaultView: { x: 860, y: 984 }, // Good
    labels: [],
  },  
  {
    filename: "ArcanumBase/ShadesBeach.png",
    displayName: "Shades Beach",
    modGroup: "Quest locations",
    // music: "",
    defaultView: { x: 1617, y: 1238 },
    labels: [],
  },
  {
    filename: "ArcanumBase/SimonFahrkusShack.png",
    displayName: "Simon Fahrkus’ Shack",
    modGroup: "Quest locations",
    music: "", // CONFIRMED - No music.
    defaultView: { x: 695, y: 549 }, // Good
    labels: [
      { x: 828, y: 498, text: "Simon Fahrkus", sex: "male", race: "Human", level: 3, inventory: ["Arabalah's Sacred Artifact"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Quest: The Priest and the Bandit", questDescription: "Lie, threaten, steal or kill Fahrkus to retrieve the Sacred Artifact.", target: "Arbalah", part: 4 },
        ],
      },
    ],
  },
  {
    filename: "ArcanumBase/SmallCamp.png",
    displayName: "Small Camp",
    modGroup: "Other locations",
    music: "", // CONFIRMED - No music.
    defaultView: { x: 816, y: 711 }, // Good
    labels: [
      { x: 1170, y: 246, text: "Arcane Chest", description: "", category: "chest" },
    ],
  },
  {
    filename: "ArcanumBase/SmallPond.jpg",
    displayName: "Small Pond",
    modGroup: "Other locations",
    // music: "",
    defaultView: { x: 1132, y: 1123 }, // Good
    labels: [
      { x: 1391, y: 645, text: "Arcane Chest", description: "", category: "chest" },
    ],
  },
  {
    filename: "ArcanumBase/StonecutterClan.png",
    displayName: "Stonecutter Clan",
    modGroup: "Quest locations",
    // music: "",
    defaultView: { x: 923, y: 684 }, // Good
    labels: [
      { x: 990, y: 620, text: "Stonecutter Clan - Level 1", description: "", category: "waypoint", targetMapFilename: "Stonecutter Clan - Level 1", targetX: 2592, targetY: 1503},
    ]
  },
  {
    filename: "ArcanumBase/StrangeCeremony.png",
    displayName: "Strange Ceremony",
    modGroup: "Other locations",
    music: "", // CONFIRMED - No music.
    defaultView: { x: 1137, y: 713 }, // Good
    labels: [
      { x: 697, y: 563, text: "Kite Berserker", inventory: ["Shadow Hand Dagger"], category: "information" },
    ]
  },
  {
    filename: "ArcanumBase/StrangePond.jpg",
    displayName: "Strange Pond",
    modGroup: "Other locations",
    //music: No music here.
    defaultView: { x: 2532, y: 562 },
    labels: [
      { x: 1501, y: 1146, text: "Arcane Chest", description: "Always contains a Ring of Shadows", category: "chest" },
    ],
  },
  {
    filename: "ArcanumBase/StringyPetesCove",
    chunked: true,
    width: 4583,
    height: 2984,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "Stringy Petes Cove",
    modGroup: "Quest locations",
    music: "", // CONFIRMED - No music.
    defaultView: { x: 1957, y: 242 },
    labels: [
      { x: 3932, y: 1734, text: "Stringy Pete", sex: "male", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "Stringy Pete wants you to return his treasure, including the silver boot buckles of Jonas Williamson, to the remaining members of the Williamson family.", target: "" },
          { questName: "", questDescription: "Stringy Pete wants you to repair the desecrated altar of temple in Vooriden.", target: "" },
          { questName: "Destroy the Bangellian Scourge", questDescription: "Stringy Pete wants you to destroy the Bangellian Scourge.", target: "Arcane Chest (Bangellian Scourge)", part: 1 }
        ]
      },
      { x: 1819, y: 742, text: "Boat", description: "", category: "waypoint", targetMapFilename: "Stringy Petes Cove", targetX: 3093, targetY: 1266 },
      { x: 3095, y: 1258, text: "Boat", description: "", category: "waypoint", targetMapFilename: "Stringy Petes Cove", targetX: 1819, targetY: 742 },
    ]
  },
  {
    filename: "ArcanumBase/StringyPetesTreasure.png",
    displayName: "Stringy Pete’s Treasure",
    modGroup: "Quest locations",
    music: "", // CONFIRMED - No music.
    defaultView: { x: 1193, y: 1446 }, // Good
    labels: [
      { x: 1054, y: 862, text: "Pile of Dirt", description: "Need a shovel to be opened.", inventory: ["Stringy Pete's Treasure", "Silver Boot Bucket"], category: ["quest", "chest"] },
    ]
  },
  {
    filename: "ArcanumBase/TheBangellianDeepsOutside.png",
    displayName: "The Bangellian Deeps",
    modGroup: "Quest locations",
    // music: no music here
    defaultView: { x: 977, y: 975 }, // Good
    labels: [
      { x: 1111, y: 896, text: "The Bangellian Deeps - Inside", description: "", category: "waypoint", targetMapFilename: "The Bangellian Deeps - Inside", targetX: 1227, targetY: 1340 },
    ]
  },
  {
    filename: "ArcanumBase/TheBlackMountainMines.png",
    displayName: "The Black Mountain Mines",
    modGroup: "Quest locations",
    background: "#000000",
    defaultView: { x: 1264, y: 925 },
    labels: [
      { x: 1266, y: 922, text: "The Black Mountain Mines - Entrance", category: "waypoint", targetMapFilename: "The Black Mountain Mines - Entrance", targetX: 1270, targetY: 934 },
      { x: 187, y: 679, text: "The Black Moutain Mines - Level 1", category: "waypoint", targetMapFilename: "The Black Mountain Mines - Level 1" },
      { x: 210, y: 344, text: "The Black Mountain Mines - Level 1", category: "waypoint", targetMapFilename: "The Black Mountain Mines - Level 1", targetX: 909, targetY: 139 },
      { x: 327, y: 297, text: "The Black Mountain Mines - Level 3", category: "waypoint", targetMapFilename: "The Black Mountain Mines - Level 3" },
      { x: 446, y: 236, text: "The Black Mountain Mines - Level 2", category: "waypoint", targetMapFilename: "The Black Mountain Mines - Level 2" },
      { x: 1072, y: 239, text: "The Black Mountain Mines - Level 2", category: "waypoint", targetMapFilename: "The Black Mountain Mines - Level 2" },    
    ],
  },
  {
    filename: "ArcanumBase/TheBog.jpg",
    displayName: "The Bog",
    modGroup: "Other locations",
    //music: No music here.
    defaultView: { x: 1396, y: 1442 },
    labels: [
      { x: 1563, y: 789, text: "Wood Chest", description: "Contains an Arcane Great Sword and an Axe of Creeping Death.", category: "chest" },
    ],
  },
  {
    filename: "ArcanumBase/TheBrokenCathedral.png",
    displayName: "The Broken Cathedral",
    modGroup: "Other locations",
    music: "", // CONFIRMED - No music.
    defaultView: { x: 868, y: 598 },
    labels: [
      { x: 1061, y: 524, text: "Arcane Chest", category: "chest" },
    ],
  },
  {
    filename: "ArcanumBase/TheCastleOfSnelNfa.png",
    displayName: "The Castle S’nel N’fa",
    modGroup: "Quest locations",
    // music: No music here.
    defaultView: { x: 659, y: 1615 }, // Good
    labels: [
      { x: 1182, y: 1246, text: "The Castle S’nel N’fa - Inside", category: "waypoint", targetMapFilename: "The Castle S’nel N’fa - Inside", targetX: 693, targetY: 1020 },
    ],
  },
  {
    filename: "ArcanumBase/TheColdPlace.jpg",
    displayName: "The Cold Place",
    modGroup: "Other locations",
    defaultView: { x: 911, y: 1701 },
    labels: [],
  },
  {
    filename: "ArcanumBase/TheHomeOfMaximillian.png",
    displayName: "The Home of Maximillian",
    modGroup: "Quest locations",
    // music: No music here.
    // defaultView: { x: 1396, y: 1442 },
    labels: [
      { x: 1341, y: 917, text: "Maximillian", sex: "male", race: "Human", level: 45, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Deliver Goods to Maximillian", questDescription: "Maximillian will give you a note to return to Norian, who will then give you a jug of moonshine.", target: "Norian", part: 2 },
          { questName: "Tell Lianna Pel Dar about Maximillian", questDescription: "Find Warren Pel Dar of Cumbria and tell him that Maximillian still lives on the Isle of Despair.", target: "Lianna", part: 1 },
          { questName: "Tell Lianna Pel Dar about Maximillian", questDescription: "Find Warren Lianna Pel Dar of Cumbria and tell her that Maximillian still lives on the Isle of Despair.", target: "Lianna", part: 1 }
        ]
      },
    ],
  },
  {
    filename: "ArcanumBase/TheLairofBellerogrim.png",
    displayName: "The Lair of Bellerogrim",
    modGroup: "Quest locations",
    background: "#000000",
    defaultView: { x: 1051, y: 936 },
    labels: [
      { x: 185, y: 564, text: "The Lair of Bellerogrim - Underground", description: "", category: "waypoint", targetMapFilename: "The Lair of Bellerogrim - Underground" },
      { x: 1051, y: 936, text: "The Lair of Bellerogrim - Entrance", description: "", category: "waypoint", targetMapFilename: "The Lair of Bellerogrim - Entrance" },
    ],
  },
  {
    filename: "ArcanumBase/TheLairOfTheBogaroth.png",
    displayName: "The Lair of the Bogaroth",
    modGroup: "Quest locations",
    defaultView: { x: 880, y: 646 },
    labels: [
      { x: 830, y: 354, text: "Bogaroth", category: "quest",
        linkedLabels: [
          { questName: "Kill Bogaroth", questDescription: "", target: "", part: 2 }
        ]
      },
    ],
  },
  {
    filename: "ArcanumBase/TheOldLagoon.jpg",
    displayName: "The Old Lagoon",
    modGroup: "Other locations",
    // music: no music here
    defaultView: { x: 1917, y: 1048 },
    labels: [
      { x: 1299, y: 411, text: "Volar's Wisp", category: "quest",
        linkedLabels: [
          { questName: "Find a Volar's Wisp Essence for Whysper", questDescription: "", target: "", part: 2 }
        ]
      },
    ],
  },
  {
    filename: "ArcanumBase/ThePitOfFires.png",
    displayName: "The Pit of Fires",
    modGroup: "Quest locations",
    music: "music/Villages.mp3", // Good
    defaultView: { x: 1098, y: 606 },
    labels: [
      // WAYPOINTS
      { x: 1114, y: 511, text: "The Pit of Fires - Inside", category: "waypoint", targetMapFilename: "The Pit of Fires - Inside" },

      // NPC
      { x: 955, y: 477, text: "Morrawynd", description: "Red Barbarian Clothes", category: "npc", level: 25, sex: "female", race: "Half-Elf" },
      { x: 918, y: 511, text: "R'yn-Diak", category: "npc", level: 20, sex: "male", race: "Elf", inventory: ["Magick Robes"] },
      { x: 1013, y: 510, text: "Frondo", category: "npc", level: 15, sex: "male", race: "Halfling", inventory: ["Dagger"] },
      { x: 955, y: 543, text: "Jyheirad", category: "npc", level: 30, sex: "male", race: "Human", inventory: ["Basic Platemail", "Broadsword"] },
    ],
  },
  {
    filename: "ArcanumBase/ThePlaceOfLostVoices",
    chunked: true,
    width: 5225,
    height: 2013,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "The Place of Lost Voices",
    modGroup: "Quest locations",
    background: "#000000",
    defaultView: { x: 4793, y: 734 }, // Good
    labels: [
      { x: 1002, y: 818, text: "Music Box of the Iron Clan", category: "quest", linkedLabels: [{ questName: "The Iron Clan", questDescription: "Place the drums in the following order: book, key, symbol, unless you want to be attacked by 5 mechanized arachnids.   The device will tell you to find the Book of Durin's Truth.", target: "Display Case", part: 3 }] },
      { x: 4780, y: 787, text: "The Place of Lost Voices - Entrance", category: "waypoint", targetMapFilename: "The Place of Lost Voices - Entrance", targetX: 865, targetY: 494 },
    ],
  },
  {
    filename: "ArcanumBase/ThePoachersCamp.png",
    displayName: "The Poachers Camp",
    modGroup: "Quest locations",
    // background: "#000000",
    // defaultView: { x: 7612, y: 2443 },
    labels: [],
  },
  {
    filename: "ArcanumBase/TheRubyGlade.png",
    displayName: "The Ruby Glade",
    modGroup: "Quest locations",
    defaultView: { x: 2832, y: 2096 }, // Good
    labels: [
      { x: 1534, y: 1360, text: "Altar (Ruby Glade)", inventory: ["Great Ruby of K'alru"], category: ["quest", "chest"],
        linkedLabels: [
          { questName: "Retrieving the Ruby", questDescription: "", target: "Gildor Nightwalk", part: 2 }
        ]
      },
      { x: 1501, y: 1408, text: "Half Elf Noble", sex: "female", race: "Half-Elf", level: 1, inventory: ["Heavy Barbarian's Blade", "Arcane Gauntlets", "Hero's Weakness Barbarian Armor"], category: "npc" },

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
    music: "", // CONFIRMED - No music.
    defaultView: { x: 1306, y: 323 }, // Good
    labels: [
      { x: 750, y: 568, text: "Molly Williamson", sex: "female", race: "Human", level: 23, description: "Stringy Pete's Treasure quest", category: ["quest", "npc"] },
    ],
  },
  {
    filename: "ArcanumBase/TheWomensCamp.png",
    displayName: "The Women’s Camp",
    modGroup: "Quest locations",
    // music: no music here
    // defaultView: { x: 1306, y: 323 },
    labels: [],
  },
  {
    filename: "ArcanumBase/ThievesCaveOutside.png",
    displayName: "Thieves Cave",
    modGroup: "Quest locations",
    // music: no music here
    defaultView: { x: 1037, y: 418 }, // Good
    labels: [
      { x: 1037, y: 418, text: "Thieves Cave - Inside", category: "waypoint", targetMapFilename: "Thieves Cave - Inside" },
    ],
  },
  {
    filename: "ArcanumBase/TorgsAltar.png",
    displayName: "Torg’s Altar",
    modGroup: "Other locations",
    // music: "",
    defaultView: { x: 763, y: 587 },
    labels: [
      { x: 879, y: 533, text: "Torg's Altar", category: "altar",
        godType: "Darker Lesser God",
        inscription: "Textures/Altar/Torg.png",
        offering: ["Ruby Gem"],
        blessing: ["+1 Constitution"]
      },
    ]
  },
  {
    filename: "ArcanumBase/TorinQuarry.png",
    displayName: "Torin Quarry",
    modGroup: "Quest locations",
    // music: "", // CONFIRMED - No music.
    defaultView: { x: 1470, y: 762 },
    labels: [
      { x: 820, y: 479, text: "Elf Villager", sex: "male", race: "Elf", level: 1, inventory: ["Magick Bow", "Helmet of Yzar's Cost", "Dagger of Speed"], category: "npc" },
      { x: 810, y: 380, text: "Stone", category: "quest",
        linkedLabels: [
          { questName: "A new stone for Halcyon's Altar", questDescription: "Return with the stone to Edwin Wallows.", target: "Edwin Wallows", part: 3 }
        ]
      },
    ]
  },
  {
    filename: "ArcanumBase/UnchartedCave.png",
    displayName: "Uncharted Cave",
    modGroup: "Other locations",
    music: "", // CONFIRMED - No music.
    defaultView: { x: 999, y: 487 }, // Good
    labels: [
      { x: 1187, y: 297, text: "Uncharted Cave - Inside", description: "", category: "waypoint", targetMapFilename: "Uncharted Cave - Inside" },
    ]
  },
  {
    filename: "ArcanumBase/VillageOfTheAshlagTribe.png",
    displayName: "Village of the Ashlag Tribe",
    modGroup: "Other locations",
    defaultView: { x: 868, y: 598 },
    labels: [
      { x: 1232, y: 225, text: "Arcane Chest", description: "", category: "chest" },
      { x: 751, y: 480, text: "Arcane Chest", description: "", category: "chest" },
    ]
  }, 
  {
    filename: "ArcanumBase/VendigrothRuins.png",
    displayName: "Vendigroth Ruins",
    modGroup: "Quest locations",
    defaultView: { x: 291, y: 973 }, // Good
    labels: [
      { x: 1484, y: 1137, text: "Vendigroth Ruins - Level 1", category: "waypoint", targetMapFilename: "Vendigroth Ruins - Level 1" },
    ],
  },
  {
    filename: "ArcanumBase/VoidMainIsland.png",
    displayName: "Void",
    modGroup: "Quest locations",
    background: "#100B07",
    defaultView: { x: 1082, y: 644 }, // Good
    labels: [
      { x: 1681, y: 579, text: "Void - Arronax Prison Island", category: "waypoint", targetMapFilename: "Void - Arronax Prison Island", targetX: 349, targetY: 533 },
    ],
  },
  {
    filename: "ArcanumBase/VollingersMeetingPlace.png",
    displayName: "Vollinger’s Meeting Place",
    modGroup: "Quest locations",
    // music: "", No music here it seems
    defaultView: { x: 852, y: 617 },
    labels: [
      { x: 944, y: 400, text: "Vollinger’s Meeting Place - Basement", category: "waypoint", targetMapFilename: "Vollinger’s Meeting Place - Basement" },
    ],
  },
  {
    filename: "ArcanumBase/WolfCave.png",
    displayName: "Wolf Cave",
    modGroup: "Other locations",
    music: "", // CONFIRMED - No music.
    defaultView: { x: 502, y: 828 }, // Good
    labels: [
      { x: 796, y: 739, text: "Wolf Cave - Inside", category: "waypoint", targetMapFilename: "Wolf Cave - Inside", targetX: 537, targetY: 661 },
    ],
  },

/// SUBMAPS

  {
    filename: "ArcanumBase/AncientTempleLevel1.png",
    parentFilename: "ArcanumBase/AncientTemple.png",
    displayName: "Ancient Temple - Underground",
    defaultView: { x: 1798, y: 223 },
    background: "#000000",
    labels: [
      { x: 1798, y: 223, text: "Ancient Temple", category: "waypoint", targetMapFilename: "Ancient Temple", targetX: 1107, targetY: 315 },
      { x: 218, y: 810, text: "Arcane Chest", description: "Temple of the Derian-Ka, Torian Kel Key", category: ["key", "chest"] },
      { x: 1679, y: 880, text: "Magick Chest", description: "Temple of the Derian-Ka, Library Key", category: ["key", "chest"] },
      { x: 2403, y: 550, text: "Torian Kel", category: ["quest", "followers"], portrait: "Textures/toriankel.gif", level: 20, sex: "Male", race: "Human", linkedLabels: ["Dragon Pool"] },
      { x: 939, y: 1249, text: "Arcane Chest", category: "chest" },

      { x: 218, y: 810, text: "Arcane Chest", description: "Temple of the Derian-Ka, Torian Kel Key", category: ["key", "chest"] },
      { x: 1679, y: 880, text: "Magick Chest", description: "Temple of the Derian-Ka, Library Key", category: ["key", "chest"] },
      { x: 1304, y: 991, text: "Fancy Chest", category: "chest" },
      { x: 940, y: 1252, text: "Arcane Chest", category: "chest", inventory: ["Chill Shield"] },
      { x: 824, y: 1220, text: "Scroll of Create Undead", category: "information" },
      { x: 1059, y: 1195, text: "Scroll of Quench Life", category: "information" },
      { x: 1178, y: 1275, text: "Scroll of Dominate Will", category: "information" },
      { x: 1027, y: 1313, text: "Scroll of Summon Undead", category: "information" },
      { x: 2216, y: 671, text: "Pile of Dust", category: "chest", inventory: ["Quality Axe", "Helmet"] },
      { x: 2472, y: 580, text: "Pile of Dust", category: "chest", inventory: ["Broadsword", "Dread Armour", "Kite Shield"] },

      { x: 515, y: 647, text: "Moorindal's Altar", category: "altar",
        godType: "Greater God",
        inscription: "Textures/Altar/Moorindal.png",
        offering: ["Black Diamond"],
        blessing: ["+8/20 Backstad", "+4/20 Melee", "+10 Critical Hit", "+4/10 Prowling"]
      },
    ],
  },
  {
    filename: "ArcanumBase/Ashbury-Crematorium1.png",
    parentFilename: "ArcanumBase/Ashbury",
    displayName: "Ashbury Crematorium - Level 1",
    defaultView: { x: 623, y: 412 },
    background: "#000000",
    labels: [
      { x: 623, y: 412, text: "Ashbury", category: "waypoint", targetMapFilename: "Ashbury", targetX: 4854, targetY: 2106 },
      { x: 823, y: 513, text: "Ashbury Crematorium - Level 2", category: "waypoint", targetMapFilename: "Ashbury Crematorium - Level 2" },
    ]
  },
  {
    filename: "ArcanumBase/Ashbury-Crematorium2.png",
    parentFilename: "ArcanumBase/Ashbury",
    displayName: "Ashbury Crematorium - Level 2",
    defaultView: { x: 1339, y: 1240 },
    background: "#000000",
    labels: [
      { x: 1345, y: 1230, text: "Ashbury Crematorium - Level 1", description: "", category: "waypoint", targetMapFilename: "Ashbury Crematorium - Level 1", targetX: 823, targetY: 513 },
      { x: 1506, y: 192, text: "Ashbury Crematorium - Level 3", description: "", category: "waypoint", targetMapFilename: "Ashbury Crematorium - Level 3", targetX: 338, targetY: 617 },
    ]
  },
  {
    filename: "ArcanumBase/Ashbury-Crematorium3.png",
    parentFilename: "ArcanumBase/Ashbury",
    displayName: "Ashbury Crematorium - Level 3",
    defaultView: { x: 338, y: 617 },
    background: "#000000",
    labels: [
      { x: 338, y: 617, text: "Ashbury Crematorium - Level 2", description: "", category: "waypoint", targetMapFilename: "Ashbury Crematorium - Level 2", targetX: 1506, targetY: 192 },
      { x: 1339, y: 308, text: "Gem of Malachi Rench", inventory: ["Gem of Malachi Rench"], category: "quest", 
        linkedLabels: [
          { questName: "The Ashbury Cemetary", questDescription: "Return the gem to Geoffrey Tarellond-Ashe for a reward.", target: "Geoffrey Tarellond-Ashe", part: "reward" }
        ]
      },
      { x: 1276, y: 230, text: "Sarcophagus", inventory: ["Mace of the Damned"], category: "chest" }
    ]
  },
  {
    filename: "ArcanumBase/AshburyHauntedCastleGroundfloor.png",
    parentFilename: "ArcanumBase/Ashbury",
    displayName: "Haunted Castle - Ground Floor",
    defaultView: { x: 761, y: 1163 },
    background: "#000000",
    labels: [
      { x: 724, y: 1169, text: "Ashbury", category: "waypoint", targetMapFilename: "Ashbury", targetX: 6538, targetY: 748 },
      { x: 2421, y: 807, text: "Haunted Castle - Basement", category: "waypoint", targetMapFilename: "Haunted Castle - Basement", targetX: 2383, targetY: 648 },
      { x: 283, y: 831, text: "Haunted Castle - Upstairs", category: "waypoint", targetMapFilename: "Haunted Castle - Upstairs", targetX: 137, targetY: 732 },
      { x: 1303, y: 320, text: "Hauntes Castle - Upstairs", category: "waypoint", targetMapFilename: "Haunted Castle - Upstairs", targetX: 1155, targetY: 221 },
    ],
  },
  {
    filename: "ArcanumBase/AshburyHauntedCastleBasement.png",
    displayName: "Haunted Castle - Basement",
    //defaultView: { x: 761, y: 1163 },
    parentFilename: "ArcanumBase/Ashbury",
    background: "#000000",
    labels: [
      { x: 2383, y: 648, text: "Haunted Castle - Ground Floor", category: "waypoint", targetMapFilename: "Haunted Castle - Ground Floor" },
    ],
  },
  {
    filename: "ArcanumBase/AshburyHauntedCastleUpstairs.png",
    displayName: "Haunted Castle - Upstairs",
    //defaultView: { x: 761, y: 1163 },
    parentFilename: "ArcanumBase/Ashbury",
    background: "#000000",
    labels: [
      { x: 137, y: 732, text: "Haunted Castle - Ground Floor", category: "waypoint", targetMapFilename: "Haunted Castle - Ground Floor", targetX: 283, targetY: 831 },
      { x: 1155, y: 221, text: "Haunted Castle - Ground Floor", category: "waypoint", targetMapFilename: "Haunted Castle - Ground Floor", targetX: 1303, targetY: 320 },
    ],
  },
  {
    filename: "ArcanumBase/AshburyScienticiansUnderground.png",
    displayName: "Scienticians Underground",
    defaultView: { x: 655, y: 408 },
    parentFilename: "ArcanumBase/Ashbury",
    background: "#000000",
    labels: [
      { x: 723, y: 405, text: "Ashbury", category: "waypoint", targetMapFilename: "Ashbury", targetX: 6109, targetY: 1862 },
      { x: 376, y: 261, text: "Automaton", description: "", category: "information" },
      { x: 481, y: 218, text: "Wood Chest (Plate)", inventory:["Basic Machined Plate", "Schematics: Automaton"], category: ["quest", "chest"],
        linkedLabels: [
          { questName: "Retrieve Theodore's Platemail", questDescription: "Return the platemail to Theodore for a reward.", target: "Theodore", part: "reward" }
        ]
      }
    ]
  },
  {
    filename: "ArcanumBase/Caladon-CastleDownstairs.jpg",
    displayName: "Caladon Castle - Downstairs",
    background: "#000000",
    defaultView: { x: 636, y: 34 }, // Good
    parentFilename: "ArcanumBase/Caladon",
    labels: [
      // WAYPOINTS
      { x: 237, y: 394, text: "Caladon Castle - Main Floor", category: "waypoint", targetMapFilename: "Caladon Castle - Main Floor", targetX: 636, targetY: 34 },
      { x: 375, y: 552, text: "Caladon Castle - Upstairs", category: "waypoint", targetMapFilename: "Caladon Castle - Upstairs" },
      { x: 71, y: 532, text: "Caladon Castle - Upstairs", category: "waypoint", targetMapFilename: "Caladon Castle - Upstairs" },
      { x: 834, y: 61, text: "Caladon Castle - Upstairs", category: "waypoint", targetMapFilename: "Caladon Castle - Upstairs" },
      { x: 834, y: 61, text: "Caladon Castle - Upstairs", category: "waypoint", targetMapFilename: "Caladon Castle - Upstairs" },
      { x: 883, y: 446, text: "Caladon Castle - Vents", category: "waypoint", targetMapFilename: "Caladon Castle - Vents" },
      { x: 1302, y: 305, text: "Caladon Castle - Vents", category: "waypoint", targetMapFilename: "Caladon Castle - Vents" },
      
      // CHESTS
      { x: 1035, y: 178, text: "Wood Chest", category: "chest", inventory: [{ name: "Coins", count: 3705}] },
      { x: 893, y: 480, text: "Magick Chest", category: "chest" },
    ]
  },
  {
    filename: "ArcanumBase/Caladon-CastleMainFloor.jpg",
    displayName: "Caladon Castle - Main Floor",
    // music: ?
    background: "#000000",
    defaultView: { x: 355, y: 431 }, // Good
    parentFilename: "ArcanumBase/Caladon",
    labels: [
      { x: 355, y: 431, text: "Caladon", category: "waypoint", targetMapFilename: "Caladon", targetX: 6613, targetY: 1768 },
      { x: 161, y: 289, text: "Caladon Castle - Downstairs", category: "waypoint", targetMapFilename: "Caladon Castle - Downstairs" },
      { x: 636, y: 34, text: "Caladon Castle - Upstairs", category: "waypoint", targetMapFilename: "Caladon Castle - Upstairs" },
      { x: 1127, y: 274, text: "Caladon Castle - Upstairs", category: "waypoint", targetMapFilename: "Caladon Castle - Upstairs" },

      { x: 775, y: 323, text: "Vernon", sex: "male", race: "Human", level: 15, inventory:["Vernon's key"], category: ["quest","npc","key"],
        linkedLabels: [
          { questName: "Assassinating King Farad", questDescription: "Heinrich Jenks wants you to assassinate King Farad of Caladon.", target: "King Farad", part: 4}
        ],
      },
      { x: 336, y: 361, text: "Auguste Farad", sex: "male", race: "Human", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Kill Prince Auguste Farad", part: 2 }
        ]
      },
    ],
  },
  {
    filename: "ArcanumBase/Caladon-CastleUpstairs.jpg",
    displayName: "Caladon Castle - Upstairs",
    // music: ?
    background: "#000000",
    // defaultView: {},
    parentFilename: "ArcanumBase/Caladon",
    labels: [
      { x: 855, y: 185, text: "King Farad", sex: "male", race: "Human", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Assassinating King Farad", questDescription: "Congratulations, you are a regicide. Return to Heinrich Jenks to collect your dirty money.", target: "Heinrich Jenks", part: 5 }
        ],
      },
    ]
  },
  {
    filename: "ArcanumBase/Caladon-CastleVents.jpg",
    displayName: "Caladon Castle - Vents",
    // music: ?
    background: "#000000",
    // defaultView: {},
    parentFilename: "ArcanumBase/Caladon",
    labels: [],
  },
  {
    filename: "ArcanumBase/Caladon-PanariiTempleCatacombs.png",
    displayName: "Caladon Panarii Temple - Catacombs",
    // music: ?
    background: "#000000",
    // defaultView: {},
    parentFilename: "ArcanumBase/Caladon",
    labels: [
      { x: 627, y: 479, text: "Caladon Panarii Temple - Level 2", description: "", category: "waypoint", targetMapFilename: "Caladon Panarii Temple - Level 2", targetX: 1188, targetY: 227 },
    ]
  },
  {
    filename: "ArcanumBase/Caladon-PanariiTemple.png",
    displayName: "Caladon Panarii Temple - Level 1",
    // music: ?
    background: "#000000", // Good
    defaultView: { x: 206, y: 964 }, // Good
    parentFilename: "ArcanumBase/Caladon",
    labels: [
      { x: 723, y: 659, text: "Alexander the Acolyte", sex: "male", race: "Human", level: 45, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Find Nasrudin", questDescription: "Alexander is honored to meet the Living One. He will let you ask questions to the other Panarii priests in the temple.", target: "Hadrian the Archaeologist", part: 2 },
        ]
      },
      { x: 888, y: 504, text: "Hadrian the Archaeologist", sex: "male", race: "Gnome", level: 30, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Find Nasrudin", questDescription: "Hadrian the Archaeologist wants you to bring back a piece of Nasrudin's skeleton.", target: "Nasrudin’s Sarcophagus", part: 3 },
          { questName: "Find Nasrudin", questDescription: "Hardian is confused: the supposed skull of Nasrudin belongs to a human, not an elf. A finger is also missing - is that the body of Mannox? He tells you to go ask Gunther for a translation of the writings.", target: "Gunther Willhelm", part: 6 }
        ]
      },
      { x: 1067, y: 626, text: "Gunther Willhelm", sex: "male", race: "Human", level: 30, inventory:["Note discrepensy archaeon"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Find Nasrudin", questDescription: "Gunther considers that the Archeon translation is wrong. For him, Nasrudin would be at the southern point of Arcanum, meaning: Thanatos. He also translates the blood writing as ''Mirror'' or ''Truth''.", target: "", part: 7 }
        ]
      },
      { x: 1795, y: 124, text: "Caladon Panarii Temple - Level 2", description: "", category: "waypoint", targetMapFilename: "Caladon Panarii Temple - Level 2" },
      { x: 1148, y: 112, text: "Caladon Panarii Temple - Level 3", description: "", category: "waypoint", targetMapFilename: "Caladon Panarii Temple - Level 3" },
      { x: 206, y: 964, text: "Caladon", description: "", category: "waypoint", targetMapFilename: "Caladon" },
      { x: 443, y: 924, text: "Archeon", description: "", category: "information" },
    ]
  },
  {
    filename: "ArcanumBase/Caladon-PanariiTempleLevel2.png",
    displayName: "Caladon Panarii Temple - Level 2",
    // music: ?
    background: "#000000", // Good
    defaultView: { x: 99, y: 534 }, // Good
    parentFilename: "ArcanumBase/Caladon",
    labels: [
      // Waypoints
      { x: 1188, y: 227, text: "Caladon Panarii Temple - Catacombs", category: "waypoint", targetMapFilename: "Caladon Panarii Temple - Catacombs", targetX: 633, targetY: 484 },
      { x: 99, y: 534, text: "Caladon Panarii Temple - Level 1", category: "waypoint", targetMapFilename: "Caladon Panarii Temple - Level 1", targetX: 1795, targetY: 124 },

      // Quests
      { x: 1053, y: 193, text: "Nasrudin’s Sarcophagus", inventory: ["Skull from the Tomb of Nasrudin"], category: ["quest", "chest"], 
        linkedLabels: [
          { questName: "Find Nasrudin", questDescription: "", target: "Blood writings", part: 4 }
        ]
      },
      { x: 1071, y: 161, text: "Blood writings", category: "quest",
        linkedLabels: [
          { questName: "Find Nasrudin", questDescription: "", target: "Hadrian", part: 5 }
        ]
      },
    ]
  },
  {
    filename: "ArcanumBase/Caladon-PanariiTempleLevel3.png",
    displayName: "Caladon Panarii Temple - Level 3",
    // music: ?
    background: "#000000", // Good
    defaultView: { x: 174, y: 362 }, // Good
    parentFilename: "ArcanumBase/Caladon",
    labels: [
      { x: 174, y: 362, text: "Caladon Panarii Temple - Level 1", description: "", category: "waypoint", targetMapFilename: "Caladon Panarii Temple - Level 1", targetX: 1148, targetY: 112 },
      { x: 483, y: 191, text: "K'an Hua", sex: "male", race: "Dark Elf", level: 50, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Rescue Tollo Underhill", questDescription: "Rescue Tollo Underhill, the thief, from the pits beneath Praetor's castle.", target: "", part: 1 },
          { questName: "Retrieve the Vendigroth Device (Evil)", questDescription: "Retrieve the Vendigroth Device and meet K'an Hua in the Ring of Brodgar.", target: "", part: 1 }
        ]
      }
    ]
  },
  {
    filename: "ArcanumBase/Caladon-Sewers.jpg",
    displayName: "Caladon - Sewers",
    // music: ?
    background: "#000000",
    // defaultView: {},
    parentFilename: "ArcanumBase/Caladon",
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
      { x: 2584, y: 918, text: "Vincent", sex: "male", race: "Elf", level: 30, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Stop the Whytechurch Murderer", questDescription: "Kill Vincent using the Blade of Xerxes.", target: "Chief Inspector Henderson", part: 5 }
        ]
      },

      // Chests
      { x: 2569, y: 886, text: "Arcane Chest", description: "", category: "chest" },
      { x: 2789, y: 874, text: "Arcane Chest", description: "", category: "chest" },
      { x: 1399, y: 989, text: "Half Ogre Bandit", sex: "male", race: "Half-Ogre", level: 1, inventory: ["Boots of the Dark Toll"], category: ["npc"] },
    ]
  },
  {
    filename: "ArcanumBase/Caladon-GuardhouseBasement.png",
    displayName: "Guardhouse Basement",
    // music: ?
    background: "#000000",
    defaultView: { x: 1081, y: 645 }, // Good
    parentFilename: "ArcanumBase/Caladon",
    labels: [
      { x: 1081, y: 645, text: "Caladon", category: "waypoint", targetMapFilename: "Caladon", targetX: 6870, targetY: 2460 },
      { x: 857, y: 273, text: "Wood Chest", inventory: ["Caladon Crusading Chain (magick)", "Balanced Sword"], category: ["chest", "bounty"] },
    ]
  },
  {
    filename: "ArcanumBase/Caladon-HighSecurityPrison.png",
    displayName: "High Security Prison",
    // music: ?
    background: "#000000",
    defaultView: { x: 2034, y: 957 }, // Good
    parentFilename: "ArcanumBase/Caladon",
    labels: [
      { x: 2034, y: 957, text: "Caladon", category: "waypoint", targetMapFilename: "Caladon" },
      { x: 812, y: 472, text: "J.T. Morgan", sex: "male", race: "Gnome", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Free J.T. Morgan", questDescription: "Take J.T. Morgan, the Master Locksmith, his tools so that he can escape from Caladon's high security prison.", target: "" }
        ]
      },
    ]
  },
  {
    filename: "ArcanumBase/Caladon-MafiaUnderground.png",
    displayName: "Mafia Underground",
    // music: ?
    background: "#000000",
    defaultView: { x: 429, y: 598 }, // Good
    parentFilename: "ArcanumBase/Caladon",
    labels: [
      { x: 429, y: 598, text: "Caladon", category: "waypoint", targetMapFilename: "Caladon", targetX: 5883, targetY: 1959},
    ],
  },
  {
    filename: "ArcanumBase/Caladon-SandersBasement.png",
    displayName: "Sanders Basement",
    // music: ?
    background: "#000000",
    defaultView: { x: 833, y: 349 }, // Good
    parentFilename: "ArcanumBase/Caladon",
    labels: [
      { x: 833, y: 349, text: "Caladon", category: "waypoint", targetMapFilename: "Caladon", targetX: 5377, targetY: 1643 },
      { x: 694, y: 403, text: "Wood Chest", description: "inventory: Staff of Restoration (magick)", category: ["chest", "bounty"] },
    ]
  },
  {
    filename: "ArcanumBase/CaladonTrapDisarmDungeon",
    chunked: true,
    width: 5113,
    height: 2254,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "Trap Disarm Dungeon",
    // music: ?
    background: "#000000",
    defaultView: { x: 2840, y: 1431 }, // Good
    parentFilename: "ArcanumBase/Caladon",
    labels: [
      { x: 2969, y: 1486, text: "Exit the Maze", category: ["quest", "waypoint"], targetMapFilename: "Caladon", targetX: 6878, targetY: 716,
        linkedLabels: [
          { questName: "Survive the Training Maze", questDescription: "Once you pass this door, you will return to Caladon and Daniel McPherson will give you your training.", questType: "master", target: "Daniel McPherson", part: 2 }
        ]
      },
    ],
  },
  {
    filename: "ArcanumBase/CrashSite-Cave.png",
    parentFilename: "ArcanumBase/CrashSite",
    displayName: "Crash Site - Cave",
    defaultView: { x: 266, y: 583 }, // Good
    music: "music/Mines.mp3", // Good
    background: "#000000", // Good
    labels: [
      // Waypoints
      { x: 234, y: 629, text: "Crash Site", category: "waypoint", targetMapFilename: "Crash Site", targetX: 3239, targetY: 894},
      
      // Quests
      { x: 360, y: 191, text: "Charles Brehgo", sex: "male", race: "Human", level: 10, category: ["quest", "npc"],
          linkedLabels: [
            { questName: "Quest: The Priest and the Bandit", questDescription: "The cursed spirit of Charles Brehgo has implored me to kill the priest who cursed him, Arbalah. It is his belief that if I kill Arbalah, he will be released from the curse.", target: "Arbalah", part: 1 },
            { questName: "Quest: The Priest and the Bandit", questDescription: "Return to Brehgo’s spirit in the Crash Site Cave and demand that he tell you where Fahrkus is. Trick him into thinking Arbalah will release the curse if he helps you.", target: "Simon Fahrkus", part: 3 }
          ],
      },
    ],
  },
  {
    filename: "ArcanumBase/DernholmCastle.png",
    displayName: "Dernholm Castle",
    defaultView: { x: 704, y: 956 }, // Good
    music: "", // CONFIRMED - No music.
    background: "#000000", // Good
    parentFilename: "ArcanumBase/Dernholm",
    labels: [
      // Waypoints
      { x: 702, y: 956, text: "Dernholm", description: "", category: "waypoint", targetMapFilename: "Dernholm", targetX: 5465, targetY: 1782 },

      // Quests
      { x: 1683, y: 450, text: "King Praetor", sex: "male", race: "Human", level: 37, category: ["quest", "npc"], 
        linkedLabels: [
          { questName: "Collect Black Root's Taxes for King Praetor", questDescription: "King Praetor would like for you to collect his taxes from Black Root.", target: "Mayor of Black Root", part: 1 },
          { questName: "Find King Praetor's Daughter", questDescription: "King Praetor wants you to find his daughter.", target: "Body of Princess Aria", part: 1 },
          { questName: "Kill Prince Auguste Farad", questDescription: "King Praetor wants you to kill prince Auguste Farad.", target: "Auguste Farad", part: 1 }
        ]
      },

    ],
  },
  {
    filename: "ArcanumBase/DernholmPits",
    chunked: true,
    width: 4458,
    height: 2079,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "Dernholm Pits",
    defaultView: { x: 341, y: 1317 }, // Good
    // music: ?
    background: "#000000",
    parentFilename: "ArcanumBase/Dernholm",
    labels: [
      { x: 2399, y: 1977, text: "Dernholm", category: "waypoint", targetMapFilename: "Dernholm", targetX: 6132, targetY: 1215 },
      { x: 341, y: 1317, text: "Dernholm", category: "waypoint", targetMapFilename: "Dernholm", targetX: 499, targetY: 573 },
      { x: 2310, y: 782, text: "Tollo Underhill", followerType: "special", category: ["quest", "followers"], level: 30, sex: "male", race: "Halfling",
        linkedLabels: [
          { questName: "Rescue Tollo Underhill", questDescription: "Tollo will join your party to escape the Pits.", target: "Tollo Underhill", part: 3 },
          { questName: "Rescue Tollo Underhill", questDescription: "Helping Tollo to escape will earn you 10,900 exp. If your party has an open slot, the player is at least level 29 and an alignment of at least -35, and if you tease him that he is scared, Tollo might join permanently your party.", part: "reward" },
        ]
      },
    ],
  },
  {
    filename: "ArcanumBase/DungeonOfTheDragonPoolLevel1.png",
    displayName: "Dungeon of the Dragon Pool - Level 1",
    defaultView: { x: 164, y: 836 }, // Good
    background: "#000000",
    music: "", // CONFIRMED - No music.
    parentFilename: "ArcanumBase/DungeonOfTheDragonPool.jpg",
    labels: [
      // Waypoints
      { x: 164, y: 836, text: "Dungeon of the Dragon Pool", category: "waypoint", targetMapFilename: "Dungeon of the Dragon Pool", targetX: 1276, targetY: 582 },
      { x: 2234, y: 218, text: "Dungeon of the Dragon Pool - Level 2", category: "waypoint", targetMapFilename: "Dungeon of the Dragon Pool - Level 2", targetX: 807, targetY: 279 },

      // Chest
      { x: 1980, y: 835, text: "Arcane Chest", category: "chest" },
      { x: 1543, y: 392, text: "Magick Chest", category: "chest" },
      { x: 1331, y: 769, text: "Junk Pile", inventory: ["Dragon Pool Key 1","150 gold","2 heal lesser wounds","2 healing salve"], category: ["key", "chest"] },
      { x: 1027, y: 445, text: "Mystic Chest", category: ["key", "chest"], inventory: ["Dragon Pool Key 2"] },

    ],
  },
    {
    filename: "ArcanumBase/DungeonOfTheDragonPoolLevel2.png",
    displayName: "Dungeon of the Dragon Pool - Level 2",
    defaultView: { x: 807, y: 279 }, // Good
    background: "#000000", // Good
    parentFilename: "ArcanumBase/DungeonOfTheDragonPool.jpg",
    labels: [
      { x: 807, y: 279, text: "Dungeon of the Dragon Pool - Level 1", description: "", category: "waypoint", targetMapFilename: "Dungeon of the Dragon Pool - Level 1", targetX: 2234, targetY: 218 },
      { x: 1483, y: 627, text: "Blood", description: "Interacting with the dragon's pool will give you the vial.", inventory: ["Vial of Dragon's Blood"], category: "quest", linkedLabels: ["Torian Kel"] },
    ],
  },
  {
    filename: "ArcanumBase/ElvenRuinsUnderground.png",
    displayName: "Elven Ruins - Underground",
    // music: 
    defaultView: { x: 1870, y: 382 },
    parentFilename: "ArcanumBase/ElvenRuins.png",
    background: "#000000",
    labels: [
      { x: 1904, y: 342, text: "Elven Ruins", description: "", category: "waypoint", targetMapFilename: "Elven Ruins", targetX: 812, targetY: 471 },
      { x: 629, y: 180, text: "Funeral Stone", inventory: ["Funeral Stone"], category: "quest", 
        linkedLabels: [
          { questName: "Steal the Elven Funerary Stone", questDescription: "Bring back the Funeral Stone to Cassandra.", target: "Cassandra Pettibone", part: 2 }
        ]
      },
      { x: 203, y: 297, text: "Barrel", description: "15 arrow", category: "chest", inventory: ["Diseased Leather Armour", "Elven Hunter's Bow"] },
      { x: 349, y: 248, text: "Magick Chest", category: "chest" },
      { x: 514, y: 170, text: "Sarcophagus", category: "chest", inventory: ["Lingering Sword"] },
      { x: 1574, y: 1017, text: "Barrel", inventory: ["Medallion of Silence"], category: "chest", chestState: "locked" },
    ],
  },
  {
    filename: "ArcanumBase/KnaThaLevel1",
    chunked: true,
    width: 6238,
    height: 3388,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "K’na Tha - Level 1",
    //defaultView: { x: ?, y: ?},
    parentFilename: "ArcanumBase/KnaThaEntrance.png",
    //background: "#000000",
    labels: [
      { x: 3763, y: 2373, text: "K’na Tha - Entrance", description: "", category: "waypoint", targetMapFilename: "K’na Tha", targetX: 848, targetY: 552 },
    ],
  },
  {
    filename: "ArcanumBase/KnaThaLevel2",
    chunked: true,
    width: 6672,
    height: 3569,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "K’na Tha - Level 2",
    //defaultView: { x: ?, y: ?},
    parentFilename: "ArcanumBase/KnaThaEntrance.png",
    //background: "#000000",
    labels: [],
  },
    {
    filename: "ArcanumBase/KnaThaLevel3",
    chunked: true,
    width: 5365,
    height: 2473,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "K’na Tha - Level 3",
    //defaultView: { x: ?, y: ?},
    parentFilename: "ArcanumBase/KnaThaEntrance.png",
    background: "#000000",
    labels: [],
  },
    {
    filename: "ArcanumBase/KnaThaLevel4",
    chunked: true,
    width: 5972,
    height: 2104,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "K’na Tha - Level 4",
    //defaultView: { x: ?, y: ?},
    parentFilename: "ArcanumBase/KnaThaEntrance.png",
    background: "#000000",
    labels: [],
  },
    {
    filename: "ArcanumBase/KnaThaLevel5.png",
    displayName: "K’na Tha - Level 5",
    //defaultView: { x: ?, y: ?},
    parentFilename: "ArcanumBase/KnaThaEntrance.png",
    background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/KnaThaLevel6",
    chunked: true,
    width: 4680,
    height: 2327,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "K’na Tha - Level 6",
    //defaultView: { x: ?, y: ?},
    parentFilename: "ArcanumBase/KnaThaEntrance.png",
    //background: "#000000",
    labels: [
      { x: 2091, y: 1209, text: "Altar (Azram’s Star)", category: ["quest", "chest"],
        linkedLabels: [
          { questName: "Retrieve Azram’s Star" , questDescription: "Bring Azram’s Star to Clarissa Shalmo and she will train you.", questType: "master", target: "Altar (Azram’s Star)", part: 2 }
        ]
      },
    ],
  },
  {
    filename: "ArcanumBase/QintarraSilverLadyChambers.png",
    displayName: "Silver Lady Chambers",
    //defaultView: { x: ?, y: ?},
    parentFilename: "ArcanumBase/Qintarra",
    background: "#000000",
    labels: [
      { x: 258, y: 244, text: "Silver Lady", sex: "female", race: "Elf", level: 50, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Investigate M'in Gorad", questDescription: "The Silver Lady will speak in riddles. You need to ask Raven for some interpretation.", questType: "main", target: "Raven", part: 1 }
        ]
      },
      { x: 200, y: 352, text: "Qintarra", category: "waypoint", targetMapFilename: "Qintarra" },
    ],
  },
  {
    filename: "ArcanumBase/RoseboroughInn.png",
    displayName: "Roseborough Inn",
    background: "#000000",
    defaultView: { x: 562, y: 858 }, // Good
    parentFilename: "ArcanumBase/Roseborough",
    labels: [
      // Waypoints
      { x: 554, y: 874, text: "Roseborough", description: "", category: "waypoint", targetMapFilename: "Roseborough", targetX: 6354, targetY: 3069 },
      
      // Quests
      { x: 913, y: 774, text: "Trevor Lynwood", sex: "male", race: "Half-Elf", level: 25, inventory: ["Trevor Lynwood's Camera", "Elven Boots", "Roseborough Inn Room Key"], category: ["quest", "npc", "key"],
        linkedLabels: [  
          { questName: "Photograph the Lethe Wyvern", questDescription: "Trevor Lynwood, a journalist for the Tarantian, needs you to get a photograph of the elusive Lethe Wyvern.", target: "Lethe Wyvern", part: 1 },
        ] 
      },
      { x: 891, y: 807, text: "Jason C. Guy", sex: "male", race: "Half-Elf", level: 22, description: "Specialist on the Ring of Brodgar", inventory: ["Scroll of Major Healing", "Scroll of Call Air Elemental", "Roseborough Inn Room Key"], category: ["quest", "npc", "key"],
        linkedLabels: [  
          { questName: "Technology and Magick", questDescription: "Help Jason C. Guy to prove that technology and magic gain power in cycles.", target: "Jason C. Guys", part: 1 },
          { questName: "Technology and Magick", questDescription: "You can complete this quest after you visited the ruins of Vendigroth. You will receive 1700 experience.", part: 2 },

        ] 
      },
      { x: 261, y: 538, text: "Frederick", sex: "male", race: "Human", level: 15, description: "Quest", category: ["quest", "npc"],
        linkedLabels: [  
          { questName: "Clear the Halfling Gang", questDescription: "", target: "", part: "" },
        ] 
      },

      // NPCs
      { x: 854, y: 705, text: "Innkeeper", sex: "female", race: "Human", level: 24, inventory:["Roseborough Inn Key", "Scroll of Major Healing", "Arcane Ring", "Staff of Healing"], category: "npc" },
      { x: 317, y: 505, text: "Elf Villager", sex: "male", race: "Elf", level: 26, inventory:["Elven Hunter Bow", "Elven Boots"], category: "npc" },
      { x: 252, y: 477, text: "Bartender", sex: "male", race: "Human", level: 28, inventory: ["Magick Ring", "Mage's Staff"], category: "npc" },
      { x: 273, y: 585, text: "Human Villager", sex: "female", race: "Human", level: 17, inventory: ["Medallion of Beauty"], category: "npc" },
      { x: 1439, y: 264, text: "Innkeeper", sex: "male", race: "Half-Elf", level: 29, inventory: ["Ring of Protection", "Mage's Staff"], category: "npc" },

      // Chests
      { x: 1417, y: 305, text: "Chest", inventory: ["Medallion of Beauty"], category: "chest" },
      { x: 1662, y: 689, text: "Bookstand", inventory: ["Creature Compendium by Sir Maxwell III"], category: "chest" },
      { x: 1428, y: 782, text: "Wood Chest", description: "Magick Robes", category: "chest" },
    ]
  },
  {
    filename: "ArcanumBase/RuinsOfSzaboLevel1.png",
    displayName: "Ruins of Szabo - Level 1",
    background: "#000000",
    defaultView: { x: 450, y: 797 }, // Good
    parentFilename: "ArcanumBase/RuinsOfSzaboEntrance.png",
    labels: [
      { x: 450, y: 797, text: "Ruins of Szabo - Entrance", category: "waypoint", targetMapFilename: "Ruins of Szabo", targetX: 767, targetY: 498 },
      { x: 875, y: 98, text: "Ruins of Szabo - Level 2", category: "waypoint", targetMapFilename: "Ruins of Szabo - Level 2" },
    ]
  },
  {
    filename: "ArcanumBase/RuinsOfSzaboLevel2.png",
    displayName: "Ruins of Szabo - Level 2",
    background: "#000000",
    defaultView: { x: 138, y: 362 },
    parentFilename: "ArcanumBase/RuinsOfSzaboEntrance.png",
    labels: [
      { x: 887, y: 195, text: "Chest (Bow of Ecclesiastes)", inventory: ["Bow of Ecclesiastes"], category: ["quest", "chest"],
        linkedLabels: [
          { questName: "Find the Bow of Ecclesiates", questDescription: "Return to Kietzel Pierce with the Bow and receive your master training.", questType: "master", target: "Kietzel Pierce (Caladon)", part: "reward" }
        ]
      },
      { x: 1426, y: 427, text: "Ruins of Szabo - Level 2", category: ["waypoint"], targetMapFilename: "Ruins of Szabo - Level 2", targetX: 838, targetY: 210 },
    ],
  },
  {
    filename: "ArcanumBase/SecretEntranceToTheIronClanGate.jpg",
    displayName: "Iron Clan - Gate",
    background: "#000000",
    //defaultView: {},
    parentFilename: "ArcanumBase/SecretEntranceToTheIronClan.png",
    labels: [],
  },
  {
    filename: "ArcanumBase/SecretEntranceToTheIronClanGateThroneHall.jpg",
    displayName: "Iron Clan - Throne Hall",
    background: "#000000",
    //defaultView: {},
    parentFilename: "ArcanumBase/SecretEntranceToTheIronClan.png",
    labels: [],
  },
  {
    filename: "ArcanumBase/ShroudedHillsTemple.png",
    displayName: "Panarii Temple",
    music: "music/Mines.mp3", // Good
    background: "#000000",
    defaultView: { x: 545, y: 599 }, // Good
    parentFilename: "ArcanumBase/ShroudedHills",
    labels: [
      { x: 545, y: 599, text: "Shrouded Hills", category: "waypoint", targetMapFilename: "Shrouded Hills", targetX: 8430, targetY: 2265 },
      { x: 1085, y: 279, text: "Control Box", category: "quest",
        linkedLabels: [
          { questName: "Destroy the Town's Steam Engine", questDescription: "Return to Jongle Dunne for a reward", target: "Jongle Dunne", part: "reward"}
        ]
      },
      { x: 1104, y: 315, text: "Hervor", sex: "male", race: "Dwarf", level: 5, description: "Herver will rat you out if you destroy the steam machine but leave him alive.", category: "npc" },
    ]
  },
  {
    filename: "ArcanumBase/ShroudedHillsBessieToone.png",
    displayName: "Bessie Toone Mine",
    background: "#000000",
    defaultView: { x: 1697, y: 805 }, // Good
    parentFilename: "ArcanumBase/ShroudedHills",
    labels: [
      { x: 1697, y: 805, text: "Shrouded Hills", category: "waypoint", targetMapFilename: "Shrouded Hills", targetX: 4707, targetY: 2378 },
      { x: 455, y: 655, text: "Bessie Toone", sex: "Female", race: "Ghost", level: 1, description: "Sarah, my dear Sarah...", category: "quest", 
        linkedLabels: [
          {questName: "Free the Ghost of Bessie Toone", questDescription: "Return to Percival and ask him who Sarah is.", target: "Percival Toone", part: 2}
        ]
      },
      { x: 462, y: 578, text: "Metal Can", inventory: ["Bessie Toone's Boot"], category: ["quest", "chest"],
        linkedLabels: [
          { questName: "Find a camera or Bessie Toone paraphernalia", questDescription: "Retrieve the Bessie Toone's Boot and give it to Ristezze.", target: "Ristezze", part: 2 }
        ]
      },
      { x: 2070, y: 469, text: "Barrel (Sprocket)", inventory: ["...groth sprocket", "Dynamite"], category: ["quest", "chest"], 
        linkedLabels: [
          {questName: "Fix the Town's Steam Engine", questDescription: "Return with the sprocket to Constable Owens.", target: "Constable Owens", part: 2}
        ]
      },
      { x: 746, y: 452, text: "Magick Chest", category: "chest" },
      { x: 811, y: 488, text: "Mine Cart", inventory: ["Hexed Dagger"], category: "chest" },
    ]
  },

  {
    filename: "ArcanumBase/StillwaterGiantsCave.png",
    displayName: "Stillwater Giants Cave",
    background: "#000000",
    parentFilename: "ArcanumBase/Stillwater",
    defaultView: { x: 432, y: 719 }, // Good
    labels: [
      { x: 432, y: 719, text: "Stillwater", description: "", category: "waypoint", targetMapFilename: "Stillwater", targetX: 4211, targetY: 1759, targetZoom: 1.0},
      { x: 1264, y: 483, text: "Bunny", description: "", category: "quest", 
        linkedLabels: [
          { questName: "The Stillwater Giant", questDescription: "", target: "", part: 3 }
        ]
      }
    ]
  },
  {
    filename: "ArcanumBase/StillwaterDrogsCave.png",
    displayName: "Drogs Cave",
    background: "#000000",
    parentFilename: "ArcanumBase/Stillwater",
    defaultView: { x: 841, y: 739 }, // Good
    labels: [
      // Waypoints
      { x: 841, y: 739, text: "Stillwater", description: "", category: "waypoint", targetMapFilename: "Stillwater", targetX: 1681, targetY: 633 },

      // Quests
      { x: 394, y: 202, text: "Cyrus", sex: "male", race: "Gnome", level: 1, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Rescue Cyrus", questDescription: "Save Cyrus and return to Richard Leeks.", target: "Richard Leeks", part: 3 }
        ]
      },
      { x: 681, y: 392, text: "Drog Black Tooth", sex: "male", race: "Ogre", level: 30, description: "Drog will spawn after you start talking with Cyrus. It is possible to avoid combat with him by quickly unlocking or destroying the door to Cyruses cell, talking to Cyrus and then leaving before Drog comes back.", category: ["npc", "information"] },
    ]
  },
  {
    filename: "ArcanumBase/StonecutterClanLevel1.png",
    displayName: "Stonecutter Clan - Level 1",
    parentFilename: "ArcanumBase/StonecutterClan.png",
    defaultView: { x : 2592, y: 1503 }, // Good
    background: "#000000",
    labels: [
      { x: 2592, y: 1503, text: "Stonecutter Clan - Entrance", description: "", category: "waypoint", targetMapFilename: "Stonecutter Clan", targetX: 990, targetY: 620 },
      { x: 2519, y: 264, text: "Stonecutter Clan - Level 2", description: "", category: "waypoint", targetMapFilename: "Stonecutter Clan - Level 2", targetX: 328, targetY: 262 },
    
      { x: 1037, y: 270, text: "Erland Iron Heart", sex: "male", race: "Dwarf", level: 25, inventory: ["Erland's key, Stonecutter Clan"], category: ["quest", "key", "npc"], linkedLabels: [{ questName: "Thrayne Wants His Brother to Return Home", part: 2 }] },
      { x: 1717, y: 889, text: "Barrel", category: "chest", inventory: ["Mithril Ore"] },
    ]
  },
  {
    filename: "ArcanumBase/StonecutterClanLevel2.png",
    displayName: "Stonecutter Clan - Level 2",
    parentFilename: "ArcanumBase/StonecutterClan.png",
    defaultView: { x : 328, y: 262 }, // Good
    background: "#000000",
    labels: [
      { x: 328, y: 262, text: "Stonecutter Clan - Level 1", description: "", category: "waypoint", targetMapFilename: "Stonecutter Clan - Level 1", targetX: 2519, targetY: 264 },
      { x: 362, y: 353, text: "Table", inventory: ["Schematics: Necromizer", "Kerghan's Journal", "Medallion of Dark Magicks", "Ring of Dark Magicks"], category: "chest" },
    ]
  },
  {
    filename: "ArcanumBase/Tarant-BatesTunnel",
    chunked: true,
    width: 4017,
    height: 1144,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "Bates Tunnel",
    parentFilename: "ArcanumBase/Tarant",
    background: "#000000",
    defaultView: { x: 251, y: 937 }, // Good
    labels: [
      { x: 251, y: 937, text: "Tarant", description: "", category: "waypoint", targetMapFilename: "Tarant" },
      { x: 3702, y: 145, text: "Bates Mansion - Level 1", description: "", category: "waypoint", targetMapFilename: "Bates Mansion Level 1" },
    ]
  },
  {
    filename: "ArcanumBase/TarantBatesMansionLevel1.png",
    displayName: "Bates Mansion Level 1",
    parentFilename: "ArcanumBase/Tarant",
    background: "#000000",
    defaultView: { x: 415, y: 593 }, // Good
    labels: [
      { x: 419, y: 596, text: "Tarant", category: "waypoint", targetMapFilename: "Tarant", targetX: 5442, targetY: 1502 },
      { x: 613, y: 484, text: "Bates Mansion - Level 2", category: "waypoint", targetMapFilename: "Bates Mansion Level 2" },
      { x: 1230, y: 364, text: "Bates Tunnel", category: "waypoint", targetMapFilename: "Bates Tunnel" },
    ]
  },
  {
    filename: "ArcanumBase/TarantBatesMansionLevel2.png",
    displayName: "Bates Mansion Level 2",
    parentFilename: "ArcanumBase/Tarant",
    defaultView: { x: 639, y: 523 }, // Good
    background: "#000000",
    labels: [
      { x: 639, y: 523, text: "Bates Mansion - Level 1", category: "waypoint", targetMapFilename: "Bates Mansion Level 1", targetX: 613, targetY: 484 },
      { x: 560, y: 327, text: "Chukka", sex: "Male", level: 16, race: "Ogre", portrait: "Textures/chukka.gif", description: "Although Chukka can only join just prior to exploring the Isle of Despair, he can rejoin after waiting or being disbanded anytime after that.", category: "followers" },
      { x: 541, y: 363, text: "Gilbert Bates", sex: "Male", race: "Human", level: 20, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Investigate the Black Mountain Clan", questDescription: "Search the mines of the Black Mountain Clan for clues to their whereabouts, and report back to Bates.", questType: "main", target: "Gudmund Ore Bender", part: 1 },
          { questName: "Investigate the Isle of Despair", questDescription: "Look for the Black Mountain Clan on the Isle of Despair.", questType: "main", target: "Captain Edward Teach (Ashbury)", part: 2},
        ]
      },
      { x: 797, y: 145, text: "Chest (Gilbert Bates)", inventory: ["Gilbert Bates' Journal"], category: ["quest", "chest"],
        linkedLabels: [
          { questName: "Investigate the Black Mountain Clan", questDescription: "Search the mines of the Black Mountain Clan for clues to their whereabouts.", questType: "main", target: "Gudmund Ore Bender", part: 1 },
          { questName: "Expose Gilbert Bates", questDescription: "Bring back the Journal of Gilbert Bates to Cedric Appleby.", target: "Cedric Appleby", part: 2 }
        ]
      },
    ]
  },
  {
    filename: "ArcanumBase/TarantCityHall.png",
    displayName: "Hall of Records",
    modGroup: "Cities",
    parentFilename: "ArcanumBase/Tarant",
    background: "#000000",
    labels: [
      { x: 841, y: 297, text: "Tarant", category: "waypoint", targetMapFilename: "Tarant" },
      { x: 467, y: 287, text: "Clerk", sex: "female", race: "Human", level: 14, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "Obtain a copy of ''Horror Among the Dark Elves'' by Renford A. Terwilliger.", target: "Librarian" },
          { questName: "The Garringsburg Heist", questDescription: "The clerk informs you that Rorry Limes owns a warehouse property on 57 Mulligan Bone Alley.", target: "Wood Chest (Kerghan and Persephone)", part: 3 }
        ]
      },
    ]
  },
  {
    filename: "ArcanumBase/Tarant_02.jpg",
    displayName: "Tarant New Sewers",
    music: "music/Tarant_Sewers.mp3",
    parentFilename: "ArcanumBase/Tarant",
    background: "#000000",
    labels: [
      { x: 80, y: 419, text: "Tarant", description: "", category: "waypoint" },
      { x: 906, y: 664, text: "Tarant", description: "", category: "waypoint" },
      { x: 925, y: 553, text: "Tarant", description: "", category: "waypoint" },
      { x: 1115, y: 91, text: "Tarant", description: "", category: "waypoint" },

      // Quests
      { x: 337, y: 663, text: "Fancy Ring (Quest)", inventory: ["Fancy Ring (Quest)"], category: "quest", 
        linkedLabels: [
          { questName: "Retrieve Matthew's Wedding Ring", questDescription: "Return to Matthew with the ring for a reward.", target: "Matthew Jameson", part: 2 }
        ]
      },
    ]
  },
  {
    filename: "ArcanumBase/Tarant_03",
    chunked: true,
    width: 4955,
    height: 2304,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "Tarant Old Sewers",
    background: "#000000",
    music: "music/Tarant_Sewers.mp3",
    parentFilename: "ArcanumBase/Tarant",
    labels: [
      { x: 564, y: 1778, text: "Tarant", category: "waypoint" },
      { x: 1714, y: 2153, text: "Tarant", category: "waypoint" },
      { x: 3805, y: 2239, text: "Tarant", category: "waypoint" },
      { x: 4273, y: 1436, text: "Tarant", category: "waypoint" },
    ]
  },
  {
    filename: "ArcanumBase/TarantPSchuylersLevel1.png",
    displayName: "P. Schuyler & Sons - Level 1",
    parentFilename: "ArcanumBase/Tarant",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/TarantPSchuylersLevel2.png",
    displayName: "P. Schuyler & Sons - Level 2",
    parentFilename: "ArcanumBase/Tarant",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/TarantPSchuylersLevel3.png",
    displayName: "P. Schuyler & Sons - Level 3",
    parentFilename: "ArcanumBase/Tarant",
    background: "#000000",
    labels: [
      { x: 288, y: 198, text: "Winston Schuyler", sex: "male", race: "Human", level: 10, category: ["key", "quest", "npc"],
        linkedLabels: [
          { questName: "Origins of the Strange Ring", questDescription: "Get information about the strange ring from Gilbert Bates.", questType: "main", target: "Gilbert Bates", part: "reward" }
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
    background: "#000000",
    defaultView: { x: 1227, y: 1340 }, // Good
    parentFilename: "ArcanumBase/TheBangellianDeepsOutside.png",
    labels: [
      { x: 1227, y: 1340, text: "The Bangellian Deeps", category: "waypoint", targetMapFilename: "The Bangellian Deeps", targetX: 1111, targetY: 896 },
      { x: 1959, y: 1233, text: "Fancy Chest", description: "Contains an inventory of a Magick Shop.", category: "chest" },
      { x: 2355, y: 197, text: "Arcane Chest", inventory: ["The Bangellian Scourge"], category: ["quest", "chest"],
        linkedLabels: [
          { questName: "Destroy the Bangellian Scourge", questDescription: "Take the Bangellian Scourge and make a decision: it's a powerful weapon, you could keep it for yourself, or you could destroy it...", part: 2 }
        ]
      },
      { x: 2216, y: 231, text: "Cursed Paladin", category: "information", inventory: ["Arcane Axe"] },
      { x: 2268, y: 156, text: "Bangellian Furnace", category: ["quest", "chest"],
        linkedLabels: [
          { questName: "Destroy the Bangellian Scourge", questDescription: "If you're working on the Stringy Pete quest, this is where you should put the Bangellian Scourge to destroy it. You might want to destroy the sword anyway just to receive the 6800 experience reward.", part: "reward" }
        ]
      },
      { x: 1608, y: 1053, text: "Black Diamond", category: "information" },
      { x: 1152, y: 1069, text: "Fancy Chest", category: "chest" },
      { x: 234, y: 759, text: "Mystic Chest", category: "chest" },
      { x: 1016, y: 530, text: "Black Diamond", category: "information" },
      { x: 1838, y: 520, text: "Mystic Chest", category: "chest" },
      { x: 2312, y: 306, text: "Black Diamond", category: "information" },
    ]
  },
  {
    filename: "ArcanumBase/TheBlackMountainMinesEntrance.jpg",
    displayName: "The Black Mountain Mines - Entrance",
    background: "#000000",
    defaultView: { x: 1203, y: 1004 },
    parentFilename: "ArcanumBase/TheBlackMountainMines.png",
    labels: [
      { x: 1270, y: 934, text: "The Black Mountain Mines", category: "waypoint", targetMapFilename: "The Black Mountain Mines" },
    ],
  },
  {
    filename: "ArcanumBase/TheBlackMountainMinesLevel1.jpg",
    displayName: "The Black Mountain Mines - Level 1",
    background: "#000000",
    defaultView: { x: 108, y: 614 },
    parentFilename: "ArcanumBase/TheBlackMountainMines.png",
    labels: [
      // Waypoints
      { x: 96, y: 545, text: "The Black Mountain Mines", category: "waypoint", targetMapFilename: "The Black Mountain Mines", targetX: 187, targetY: 679 },
      { x: 909, y: 139, text: "The Black Mountain Mines", category: "waypoint", targetMapFilename: "The Black Mountain Mines", targetX: 210, targetY: 344 },

      // Chests
      { x: 540, y: 683, text: "Dwarven Chest", category: "chest" },
      { x: 252, y: 481, text: "Lava Rock", category: "information" },
      { x: 356, y: 428, text: "Dwarven Chest", category: "chest" },
      { x: 473, y: 443, text: "Lava Rock", category: "information" },
      { x: 563, y: 441, text: "Dwarven Chest", category: "chest" },
      { x: 675, y: 343, text: "Dwarven Chest", category: "chest" },
      { x: 1042, y: 375, text: "Dwarven Chest", category: "chest" },
      { x: 811, y: 569, text: "Dwarven Chest", category: "chest" },
      { x: 642, y: 731, text: "Lava Rock", category: "information" },
      { x: 1045, y: 651, text: "Dwarven Chest", category: "chest" },
      { x: 929, y: 579, text: "Wood Chest", category: "chest" },
      { x: 1258, y: 539, text: "Dwarven Chest", category: "chest" },
      { x: 1341, y: 295, text: "Dwarven Chest", category: "chest" },
      { x: 1539, y: 136, text: "Dwarven Chest", category: "chest" },
      { x: 1445, y: 301, text: "Barrel", inventory: ["Schematic: Pyrotechnic Bow", "Rough-Cut Ruby", "121 gold"], category: "chest" },
      { x: 1415, y: 321, text: "Barrel", inventory: ["Eye Gear", "Lantern", "Crushing Hammer"], category: "chest" },
      { x: 1390, y: 339, text: "Barrel", inventory: ["Rough-Cut Emerald"], category: "chest", inventory: ["Machined Gauntlets"] },
      { x: 1115, y: 413, text: "Dwarven Chest", category: "chest" },
      { x: 877, y: 491, text: "Dwarven Chest", category: "chest" },
      { x: 1139, y: 348, text: "Gnome Wizard", description: "Molochian amulet; small guard leather; Note of GL BMC; Scroll of Sense Invisible/Scroll of Exiting", category: "npc", level: 1, sex: "male", race: "Gnome" },
      { x: 989, y: 193, text: "Half Orc Thief", description: "Molochian Amulet / Guard Leather / GL BMC note / Scroll of Sense Invisible", category: "npc", level: 1, sex: "female", race: "Half-Orc" }, 
      { x: 993, y: 160, text: "Elf Thief", description: "GL BMC note / Guard LEather / Molochian amulet", category: "npc", level: 1, sex: "male", race: "Elf" },
      { x: 902, y: 163, text: "Half Ogre Thief", description: "Large Guard Leather / GL BMC Note / Dagger / Molochian Amulet", category: "npc", level: 1, sex: "male", race: "Half-Ogre" },
      { x: 939, y: 129, text: "Dwarven Chest", category: "chest" },
    ],
  },
  {
    filename: "ArcanumBase/TheBlackMountainMinesLevel2.jpg",
    displayName: "The Black Mountain Mines - Level 2",
    background: "#000000",
    defaultView: { x: 773, y: 405 },
    parentFilename: "ArcanumBase/TheBlackMountainMines.png",
    labels: [
      { x: 76, y: 391, text: "The Black Mountain Mines", category: "waypoint", targetMapFilename: "The Black Mountain Mines", targetX: 446, targetY: 236 },
      { x: 440, y: 91, text: "The Black Mountain Mines", category: "waypoint", targetMapFilename: "The Black Mountain Mines", targetX: 1072, targetY: 239 },
    ],
  },
  {
    filename: "ArcanumBase/TheBlackMountainMinesLevel3.jpg",
    displayName: "The Black Mountain Mines - Level 3",
    background: "#000000",
    defaultView: { x: 1254, y: 941 },
    parentFilename: "ArcanumBase/TheBlackMountainMines.png",
    labels: [
      { x: 1309, y: 966, text: "The Black Mountain Mines", category: "waypoint", targetMapFilename: "The Black Mountain Mines", targetX: 327, targetY: 297 },
      { x: 1936, y: 580, text: "Gudmund Ore Bender", sex: "male", race: "Dwarf", level: 15, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Investigate the Black Mountain Clan", questDescription: "You learn from Gudmund Ore Bender that the Black Mountain Clan has been exiled to the Isle of Despair.", questType: "main", part: 2 },
          { questName: "Investigate the Isle of Despair", questDescription: "Look for the Black Mountain Clan on the Isle of Despair.", target: "Gilbert Bates", questType: "main", part: 1 }
        ]
      },
      { x: 1908, y: 544, text: "Pillar of Truth", description: "", category: ["quest"] },
    ]
  },
  {
    filename: "ArcanumBase/TheCastleOfSnelNfaInside.png",
    displayName: "The Castle S’nel N’fa - Inside",
    background: "#000000",
    //defaultView: {},
    parentFilename: "ArcanumBase/TheCastleOfSnelNfa.png",
    labels: [
      { x: 693, y: 1020, text: "The Castle S’nel N’fa", category: "waypoint", targetMapFilename: "The Castle S’nel N’fa", targetX: 1182, targetY: 1246 },
      { x: 1833, y: 407, text: "Chest (Staff of K'an T'au)", inventory: "Staff of K’an T’au", category: ["quest", "chest"],
        linkedLabels: [
          { questName: "Get the staff of K’an T’au", questDescription: "Return the Staff to Frederick to receive your training.", target: "Frederick T. Fitzgerald", questType: "master", part: 2 }
        ]
      },
    ],
  },
  {
    filename: "ArcanumBase/TheLairofBellerogrimEntrance.jpg",
    displayName: "The Lair of Bellerogrim - Entrance",
    parentFilename: "ArcanumBase/TheLairofBellerogrim.png",
    labels: []
  },  
  {
    filename: "ArcanumBase/TheLairofBellerogrimUnderground.png",
    displayName: "The Lair of Bellerogrim - Underground",
    background: "#000000",
    parentFilename: "ArcanumBase/TheLairofBellerogrim.png",
    labels: []
  },
  {
    filename: "ArcanumBase/IsleOfDespair-Pit.png",
    displayName: "The Pit",
    background: "#000000",
    defaultView: { x: 300, y: 300 }, // Good
    parentFilename: "ArcanumBase/IsleOfDespair",
    labels: []
  },
  {
    filename: "ArcanumBase/ThePitOfFiresInside.png",
    displayName: "The Pit of Fires - Inside",
    background: "#000000",
    defaultView: { x: 922, y: 1475 }, // Good
    parentFilename: "ArcanumBase/ThePitOfFires.png",
    labels: [
      // WAYPOINTS
      { x: 922, y: 1475, text: "The Pit of Fires", category: "waypoint", targetMapFilename: "The Pit of Fires", targetX: 1114, targetY: 511 },

      // QUESTS
      { x: 2662, y: 616, text: "Pit of Lava", inventory: ["Blade of Xerxes"], category: ["quest", "chest"],
        linkedLabels: [
          { questName: "Stop the Whytechurch Murderer", questDescription: "Get the Blade of Xerxes from the Pit of Lava and return to Caladon." }
        ]
      },

      // CHESTS
      { x: 373, y: 523, text: "Junk Pile", category: "chest", inventory: ["Dread Armour", "Caladon Elite Sword"] },
      { x: 324, y: 549, text: "Junk Pile", category: "chest", inventory: ["Hellfire Medallion"] },
      { x: 2064, y: 1089, text: "Junk Pile", description: "100 coins", category: "chest", inventory: ["Staff of Healing"] },
    ]
  },
  {
    filename: "ArcanumBase/ThePlaceOfLostVoicesEntrance.png",
    displayName: "The Place of Lost Voices - Entrance",
    background: "#000000",
    parentFilename: "ArcanumBase/ThePlaceOfLostVoices",
    labels: [
      { x: 865, y: 494, text: "The Place of Lost Voices - Inside", category: "waypoint", targetMapFilename: "The Place of Lost Voices", targetX: 4780, targetY: 787 },
    ]
  },
  {
    filename: "ArcanumBase/ThievesCaveInside.png",
    displayName: "Thieves Cave - Inside",
    background: "#000000",
    parentFilename: "ArcanumBase/ThievesCaveOutside.png",
    defaultView: { x: 195, y: 312 }, // Good
    labels: [
      { x: 335, y: 233, text: "Renzo", sex: "male", race: "Halfling", level: 1, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Clear the Halfling Gang", questDescription: "Renzo would like for me to plant the stolen heirloom on Frederick, who can usually be found in the bar of the Roseborough Inn, because he betrayed Renzo and his partners. After I successfully plant eh statue, I am to turn Frederik in to the Captain of the Roseborough Guard.", target: "Frederick", part: 1 }
        ]
      },
      { x: 195, y: 312, text: "Thieves Cave", category: "waypoint", targetMapFilename: "Thieves Cave", targetX: 1037, targetY: 418 },
    ]
  },
  {
    filename: "ArcanumBase/TsenAngEntrance.png",
    displayName: "T’sen-Ang Entrance",
    parentFilename: "ArcanumBase/TsenAng.png",
    labels: [
      // Waypoints
      { x: 1072, y: 511, text: "T’sen Ang", description: "", category: "waypoint", targetMapFilename: "T’sen-Ang", targetX: 2347, targetY: 1314 },

      // NPCs
      { x: 1083, y: 561, text: "Dark Elf Guard", sex: "male", race: "Dark Elf", level: 35, description: "The two guards next to the staircase there won't let you go up unless you have a Molochean Hand amulet. If you don't have one, the easiest place to find one is on Bingham Schulefest at the Caladon cemetery. You can also just wander around the world map until assassins attack you, and then pick up an amulet from them. Finally, if you're a good-aligned character, you can simply attack the guards to go up (you'll probably end up fighting everybody at T'sen-Ang anyway), but be aware that there are about a half dozen guards in the area. Most are hidden behind trees and are difficult to spot.", category: ["npc", "information"],
        linkedLabels: [
          { questName: "", questDescription: "", target: "M’in Gorad" }
        ]
       }
    ]
  },
  {
    filename: "ArcanumBase/TsenAngMinGoradChamber.png",
    displayName: "M'in Gorad Chamber",
    background: "#000000",
    parentFilename: "ArcanumBase/TsenAng.png",
    labels: [
      // Waypoints
      { x: 137, y: 316, text: "T’sen-Ang", description: "", category: "waypoint", targetMapFilename: "T’sen-Ang", targetX: 2360, targetY: 710 },

      // NPCs
      { x: 280, y: 278, text: "M’in Gorad", sex: "female", race: "Dark Elf", level: 40, inventory: ["Note to M'in Gorad from K'an Hua"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Main quest - Evil road", questDescription: "Kill all of the inhabitants of Stillwater."},
          { questName: "Main quest - Evil road", questDescription: "I am meant to travel to Caladon and speak with the high priest of the Panarii, K'an Hua. He is to be found in his office inside the Panarii temple there.", target: "K'an Hua" },
          { questName: "", questDescription: "Return to talk with the Silver Lady.", target: "The Silver Lady"}
        ]
      },
    ]
  },
  {
    filename: "ArcanumBase/TullaInside.png",
    displayName: "Tulla - Main Floor",
    background: "#000000",
    music: "music/Tulla.mp3",
    defaultView: { x: 836, y: 1410 },
    parentFilename: "ArcanumBase/Tulla",
    labels: [
      // Waypoints
      { x: 836, y: 1410, text: "Tulla", category: "waypoint", targetMapFilename: "Tulla", targetX: 2268, targetY: 1619 },
      { x: 2192, y: 604, text: "Simeons Hallway", category: "waypoint", targetMapFilename: "Simeons Hallway", targetX: 92, targetY: 474 },

      // NPCs
      { x: 742, y: 995, text: "Liam Raymond, Meta Master", sex: "male", race: "Human", level: 50, inventory: ["Scroll of Disperse Magick", "Scroll of Bonds of Magic", "Arcane Sword", "Arcane Robes", "Mastery Medallion of Meta"], category: "npc" },
      { x: 413, y: 807, text: "S'Btin'ka, Morph Master", sex: "female", race: "Half-Elf", level: 50, inventory: ["Arcane Robes", "Arcane Bow", "Scroll of Polymorph", "Scroll of Flesh to Stone", "Lycanthrope Restorative"], category: ["quest", "npc"], 
        linkedLabels: [
          { questName: "Discover what is killing David's rabbits", questDescription: "Buy a Lycanthrope Restorative (or steal it) from S'Btin'ka and return to David Wit.", target: "David Wit", part: 4 } 
        ]
      },
      { x: 213, y: 626, text: "Ferko Lydell, Nature Master", sex: "male", race: "Halfling", level: 50, description: "Small Arcane Robes / Scroll of Regenerate / Scroll of Succour Beast", category: "npc" },
      { x: 335, y: 374, text: "D'ary, Necromantic Black Master", sex: "male", race: "Elf", level: 50, description: "Arcane Sword / Arcane Robes / Scroll of Create Undead / Scroll of Quench Life", category: "npc" },
      { x: 495, y: 162, text: "Bilko Gavin, Necromantic White Master", sex: "male", race: "Halfling", level: 50, description: "Small Arcane Robes / Staff of Healing / Scroll of Sanctuary (x2)", category: "npc" },
      { x: 1216, y: 164, text: "Daemon Gardi, Phantasm Master", sex: "male", race: "Gnome", level: 50, description: "Arcane Dagger / Small Arcane Robes / Ring of Protection / Mastery Medallion of Phantasm / Scroll of Phantasmal Fiend / Scroll of Invisibility", category: "npc" },
      { x: 1497, y: 244, text: "Harold Sumner, Summoning Master", sex: "male", race: "Gnome", level: 50, description: "Arcane Dagger / Small Arcane Robes / Mastery Medallion of Summoning / Scroll of Hellgate / Scroll of Familiar", category: "npc" },
      { x: 1836, y: 360, text: "S'yala, Temporal Master", sex: "female", race: "Elf", level: 50, description: "Arcane staff / Arcane Robes / Scroll of Tempus Fugit / Scroll of Hasten", category: "npc" },
      { x: 2298, y: 1693, text: "V'ed Eckes, Master of Water Magick", sex: "male", race: "Elf", level: 50, inventory: ["Mastery Medallion of Water", "Robe of Fire Protection", "Arcane Staff", "Arcane Robes", "Scroll of Call Water Elemental", "Scroll of Squall of Ice"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "The Gem of Water Purification", questDescription: "V'ed Eckes, Master of Water Magick in Tulla, wants you to retrieve the Gem of Water Purification from the acolyte waiting outside the gates of Tulla.", target: "Albert", part: 1 }
        ]
      },
      { x: 1616, y: 1421, text: "Edgar Jerryl, Mental Master", category: "npc", level: 50, sex: "male", race: "Gnome", inventory: ["Arcane Dagger", "Small Arcane Robes", "Mastery Medallion of Mental", "Scroll of Drain Will", "Scroll of Nightmare", "Heal Lesser Wounds"] },
      { x: 1997, y: 1583, text: "Rys'Ard, Force Master", category: "npc", level: 50, sex: "male", race: "Half-Elf", inventory: ["Arcane Robes", "Elven Boots", "Scroll of Teleportation", "Scroll of Disintegrate"] },
      { x: 2958, y: 1655, text: "Naph'Tha, Fire Master", category: "npc", level: 50, sex: "female", race: "Elf", inventory: ["Pyrotechnic Bow", "Arcane Robes", { name: "Arrow", count: 25 }, "Scroll of Fireflash", "Scroll of Body of Fire"] },
      { x: 3455, y: 1365, text: "Addo Terrin, Earth Master", category: "npc", level: 50, sex: "male", race: "Halfling", inventory: ["Arcane Staff", "Small Arcane Robes", "Scroll of Body of Stone", "Scroll of Call Earth Elemental"] },
      { x: 3217, y: 1249, text: "Wel'Kene, Air Master", category: "npc", inventory: ["Arcane Staff", "Scroll of Body of Air", "Scroll of Poison Vapours", "Shadowing Robes"] },    
      { x: 3036, y: 999, text: "Cassandra Johanson, Divination Master", category: "npc", level: 50, sex: "female", race: "Human", inventory: ["Arcane Robes", "Arcane Staff", { name: "Heal Lesser Wounds", count: 2 }] },
      { x: 2915, y: 846, text: "Ve'Tura, Conveyance Master", category: "npc", level: 50, sex: "female", race: "Elf", inventory: ["Arcane Robes", "Arcane Staff", "Scroll of Teleportation", "Scroll of Unseen Force"] },
    ]
  },
  {
    filename: "ArcanumBase/TullaSimeonsHallway.png",
    displayName: "Simeons Hallway",
    background: "#000000",
    parentFilename: "ArcanumBase/Tulla",
    labels: [
      { x: 92, y: 474, text: "Tulla - Main Floor", category: "waypoint", targetMapFilename: "Tulla - Main Floor", targetX: 2192, targetY: 604 },
      { x: 708, y: 200, text: "Simeons Chamber", category: "waypoint", targetMapFilename: "Simeons Chamber", targetX: 535, targetY: 844 },
      { x: 645, y: 237, text: "Jorian", category: "npc", level: 50, sex: "male", race: "Human", inventory: ["Magick Robes"] },
    ]
  },
  {
    filename: "ArcanumBase/TullaSimeonsChamber.jpg",
    displayName: "Simeons Chamber",
    background: "#000000",
    defaultView: { x: 535, y: 844 },
    parentFilename: "ArcanumBase/Tulla",
    labels: [
      { x: 535, y: 844, text: "Simeons Hallway", category: "waypoint", targetMapFilename: "Simeons Hallway", targetX: 708, targetY: 200 },
      { x: 817, y: 683, text: "Simeon Tor", sex: "male", level: 50, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "You need to determine how to get Pelojian's spirit to answer your questions when it appears above Pelojian's pool at midnight.", target: "Pelojian" }
        ]
      }
    ]
  },
  {
    filename: "ArcanumBase/TullaFaalKinsMaze.png",
    displayName: "Fa'al Kin's Maze",
    background: "#000000",
    defaultView: { x: 488, y: 404 }, // Good
    parentFilename: "ArcanumBase/Tulla",
    labels: []
  },
  {
    filename: "ArcanumBase/UnchartedCave-Inside.png",
    displayName: "Uncharted Cave - Inside",
    music: "", // CONFIRMED - No music.
    defaultView: { x: 136 , y: 417  }, // Good
    background: "#000000",
    parentFilename: "ArcanumBase/UnchartedCave.png",
    labels: [
      { x: 622, y: 141, text: "Junk Pile", inventory: ["Magick Ring"], category: "chest" },
      { x: 136, y: 417, text: "Uncharted Cave", description: "", category: "waypoint", targetMapFilename: "Uncharted Cave" },
    ]
  },
  {
    filename: "ArcanumBase/VendigrothRuinsLevel1.png",
    displayName: "Vendigroth Ruins - Level 1",
    parentFilename: "ArcanumBase/VendigrothRuins.png",
    background: "#000000",
    defaultView: { x: 2326, y: 590 },
    labels: [
      { x: 2326, y: 590, text: "Vendigroth Ruins", category: "waypoint", targetMapFilename: "Vendigroth Ruins", targetX: 1484, targetY: 1137 },
    ]
  },
  {
    filename: "ArcanumBase/VendigrothRuinsLevel2.png",
    displayName: "Vendigroth Ruins - Level 2",
    parentFilename: "ArcanumBase/VendigrothRuins.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/VendigrothRuinsLevel3.png",
    displayName: "Vendigroth Ruins - Level 3",
    parentFilename: "ArcanumBase/VendigrothRuins.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/VendigrothRuinsLevel4.png",
    displayName: "Vendigroth Ruins - Level 4",
    parentFilename: "ArcanumBase/VendigrothRuins.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/VendigrothRuinsLevel5.png",
    displayName: "Vendigroth Ruins - Level 5",
    parentFilename: "ArcanumBase/VendigrothRuins.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/VendigrothRuinsLevel6.png",
    displayName: "Vendigroth Ruins - Level 6",
    parentFilename: "ArcanumBase/VendigrothRuins.png",
    background: "#000000",
    labels: [
      { x: 501, y: 866, text: "Vendigroth Ruins - Velorien's Altar", category: "waypoint", targetMapFilename: "Vendigroth Ruins - Velorien’s Altar" },
      { x: 1911, y: 167, text: "Vendigroth Ruins - Laboratory", category: "waypoint", targetMapFilename: "Vendigroth Ruins - Laboratory", targetX: 1202, targetY: 776 },
    ]
  },
  {
    filename: "ArcanumBase/VendigrothRuinsLaboratory.png",
    displayName: "Vendigroth Ruins - Laboratory",
    parentFilename: "ArcanumBase/VendigrothRuins.png",
    background: "#000000",
    defaultView: { x: 1202, y: 776 },
    labels: [
      { x: 1202, y: 776, text: "Vendigroth Ruins - Level 6", category: "waypoint", targetMapFilename: "Vendigroth Ruins - Level 6", targetX: 1911, targetY: 167 },
    ]
  },
  {
    filename: "ArcanumBase/VendigrothRuinsVelorienAltar.png",
    displayName: "Vendigroth Ruins - Velorien’s Altar",
    parentFilename: "ArcanumBase/VendigrothRuins.png",
    background: "#000000",
    labels: [
      { x: 464, y: 360, text: "Velorien's Altar", category: "altar",
        godType: "Greater God",
        inscription: "Textures/Altar/Velorien.png",
        offering: ["Yourself"],
        blessing: ["100 hit points", "+100 Fatigue", "+12/20 melee", "+12/20 dodge", "+12/20 Pick Pocket", "+12/20 firearms", "+12/20 persuasion", "+4 dexterity", "+30 damage resistance", "+30 magic resistance"]
      },
      { x: 1019, y: 473, text: "Vendigroth Ruins - Level 6", category: "waypoint", targetMapFilename: "Vendigroth Ruins - Level 6", targetX: 501, targetY: 866 },
    ]
  },
  {
    filename: "ArcanumBase/VoidHubIsland.png",
    displayName: "Void - Hub Island",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#100B07",
    labels: []
  },
  {
    filename: "ArcanumBase/VoidIslandStairs.png",
    displayName: "Void - Arronax Prison Island",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#100B07",
    defaultView: { x: 348, y: 532 }, // Good
    labels: [
      { x: 526, y: 437, text: "Void", category: "waypoint", targetMapFilename: "Void", targetX: 558, targetY: 642 },
      { x: 1115, y: 694, text: "Arronax Prison", category: "waypoint", targetMapFilename: "Arronax Prison", targetX: 966, targetY: 808 },
    ]
  },
  {
    filename: "ArcanumBase/VoidArayaIsland.png",
    displayName: "Void - Araya Island 1",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#0E0A07",
    defaultView: { x: 1153, y: 408 }, // Good
    labels: [
      { x: 436, y: 492, text: "Void - Araya Island 2", category: "waypoint", targetMapFilename: "Void - Araya Island 2", targetX: 1160, targetY: 156 },
    ]
  },
  {
    filename: "ArcanumBase/VoidArayaIsland2.png",
    displayName: "Void - Araya Island 2",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#0E0A07",
    defaultView: { x: 1160, y: 156 }, // Good
    labels: [
      { x: 382, y: 515, text: "Void - Kraka-tur Island", category: "waypoint", targetMapFilename: "Void - Kraka-tur Island", targetX: 1156, targetY: 425 },
    ]
  },
  {
    filename: "ArcanumBase/VoidBaneOfKreeIsland.png",
    displayName: "Void - Bane of Kree Island",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#0E0A07",
    defaultView: { x: 1158, y: 417 }, // Good
    labels: [
      { x: 907, y: 297, text: "Void", category: "waypoint", targetMapFilename: "Void", targetX: 557, targetY: 641 },
      { x: 519, y: 395, text: "Bane of Kree", followerType: "special", category: "followers", level: 50, sex: "male", race: "Human", inventory: ["Dread Armour", "Torian Kel's Ancestral Sword"] },
    ]
  },
  {
    filename: "ArcanumBase/VoidGorgothIsland.png",
    displayName: "Void - Gorgoth Island",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#100B07",
    defaultView: { x: 377, y: 518 }, // Good
    labels: [
      { x: 1061, y: 825, text: "Void - Kryggyrd's Falchion Island", category: "waypoint", targetMapFilename: "Void - Kryggyrd’s Falchion Island" },
      { x: 1287, y: 266, text: "Gorgoth", followerType: "special", category: "followers", level: 50, race: "Demon", sex: "male", portrait: "Textures/gorgoth.png" },
    ]
  },
  {
    filename: "ArcanumBase/VoidKerghanCastleOutside.png",
    displayName: "Void - Kerghan’s Castle Island",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#100B07",
    defaultView: { x: 1174, y: 957 }, // Good
    labels: [
      { x: 1305, y: 1086, text: "Void - Gorgoth Island", category: "waypoint", targetMapFilename: "Void - Gorgoth Island", targetX: 377, targetY: 518 },
      { x: 1621, y: 634, text: "Kerghan's Castle - Level 1", category: "waypoint", targetMapFilename: "Kerghan’s Castle - Level 1" },
    ]
  },
  {
    filename: "ArcanumBase/VoidKrakaTurIsland.png",
    displayName: "Void - Kraka-tur Island",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#0E0A07",
    defaultView: { x: 1156, y: 425 }, // Good
    labels: [
      { x: 652, y: 313, text: "Kraka-tur", followerType: "special", category: "followers", level: 50, sex: "male" },
      { x: 849, y: 331, text: "Void - Bane of Kree Island", category: "waypoint", targetMapFilename: "Void - Bane of Kree Island", targetX: 1158, targetY: 417 },
    ]
  },
  {
    filename: "ArcanumBase/VoidIslandCave.png",
    displayName: "Void - Kryggyrd’s Falchion Island",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#0E0A07",
    defaultView: { x: 1264, y: 348 },
    labels: [
      { x: 571, y: 801, text: "Cave of the Kryggyrd’s Falchion", category: "waypoint", targetMapFilename: "Cave of the Kryggyrd’s Falchion", targetX: 1260, targetY: 1203 },
      { x: 630, y: 473, text: "Void - Araya Island 1", category: "waypoint", targetMapFilename: "Void - Araya Island 1", targetX: 1153, targetY: 408 },
    ]
  },
  {
    filename: "ArcanumBase/VoidArronax.png",
    displayName: "Arronax Prison",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#000000",
    defaultView: { x: 898, y: 445 }, // Good
    labels: [
      // WAYPOINTS
      { x: 966, y: 808, text: "Void - Arronax Prison Island", category: "waypoint", targetMapFilename: "Void - Arronax Prison Island", targetX: 1115, targetY: 694 },
      { x: 412, y: 249, text: "Void - Kerghan's Castle Island", category: "waypoint", targetMapFilename: "Void - Kerghan’s Castle Island", targetX: 1176, targetY: 957 },

      // QUESTS
      { x: 898, y: 445, text: "Arronax", sex: "Male", race: "Elf", level: 50, portrait: "Textures/arronax.gif", category: ["quest", "followers"],
      linkedLabels: [
          { questName: "Free Arronax", questDescription: "Effect Arronax's release from the magick that binds him.", target: "Spirit Snake", part: 1 },
          { questName: "Free Arronax", questDescription: "Once you freed him, Arronax can join you to defeat Kerghan.", part: "reward" },
          { questName: "Defeat Kerghan", questDescription: "Defeat Kerghan", target: "Kerghan", part: 1 }
        ]
      },
      { x: 1292, y: 636, text: "Spirit Snake", category: "quest",
        linkedLabels: [
          { questName: "Free Arronax", questDescription: "Kill the Spirit Snake to release Arronax, then return to him.", target: "Arronax", part: 2 }
        ]
      },
    ]
  },
  {
    filename: "ArcanumBase/VoidCaveofKryggyrdsFalchion.png",
    displayName: "Cave of the Kryggyrd’s Falchion",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#000000",
    defaultView: { x: 1260, y: 1203 }, // Good
    labels: [
      { x: 1260, y: 1203, text: "Void - Kryggyrd's Falchion Island", category: "waypoint", targetMapFilename: "Void - Kryggyrd’s Falchion Island" },
      { x: 1269, y: 152, text: "Altar", category: "chest", inventory: ["Kryggird's Falchion"] },
    ]
  },
  {
    filename: "ArcanumBase/VoidKerghanCastleLevel1.png",
    displayName: "Kerghan’s Castle - Level 1",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/VoidKerghanCastleLevel2.png",
    displayName: "Kerghan’s Castle - Level 2",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/VoidKerghanCastleLevel3.png",
    displayName: "Kerghan’s Castle - Level 3",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/VoidKerghanCastleFinalLevel.png",
    displayName: "Kerghan’s Chambers",
    parentFilename: "ArcanumBase/VoidMainIsland.png",
    background: "#000000",
    labels: [
      { x: 513, y: 382, text: "Kerghan", sex: "male", race: "Human", level: 50, category: ["quest", "npc"], 
        linkedLabels: [
          { questName: "Kill the Banished", questDescription: "Kill Arronax, The Bane of Kree, Gorgoth and Kraka-Tur to join Kerghan.", target: "Arronax", part: 1 }
        ]
      },
    ]
  },
  {
    filename: "ArcanumBase/VollingersMeetingPlaceBasement.png",
    displayName: "Vollinger’s Meeting Place - Basement",
    //defaultView: { x: 761, y: 1163 },
    parentFilename: "ArcanumBase/VollingersMeetingPlace.png",
    background: "#000000",
    labels: [
      { x: 506, y: 200, text: "Mystic Chest", description: "", category: "chest" },
      { x: 117, y: 162, text: "Vollinger’s Meeting Place", description: "", category: "waypoint", targetMapFilename: "Vollinger’s Meeting Place", targetX: 944, targetY: 400 },
    ],
  },
  {
    filename: "ArcanumBase/WheelClanLevel1.png",
    displayName: "Wheel Clan - Level 1",
    background: "#000000",
    music: "music/DwarvenMusic.mp3", // Good
    parentFilename: "ArcanumBase/WheelClan.png",
    labels: [
      { x: 238, y: 858, text: "Wheel Clan - Entrance", category: "waypoint", targetMapFilename: "Wheel Clan", targetX: 1257, targetY: 418 },
      { x: 1446, y: 242, text: "Wheel Clan - Castle", category: "waypoint", targetMapFilename: "Wheel Clan - Castle", targetX: 319, targetY: 1510 },
      { x: 951, y: 184, text: "Wheel Clan - Town", category: "waypoint", targetMapFilename: "Wheel Clan - Town" },
      { x: 1589, y: 500, text: "Mines", category: "waypoint", targetMapFilename: "Wheel Clan - Mine", targetX: 123, targetY: 798 },
    ]
  },
  {
    filename: "ArcanumBase/WheelClanCastle.png",
    displayName: "Wheel Clan - Castle",
    background: "#000000",
    parentFilename: "ArcanumBase/WheelClan.png",
    defaultView: { x: 319, y: 1510 }, // Good
    labels: [
      { x: 319, y: 1510, text: "Wheel Clan - Level 1", category: "waypoint", targetMapFilename: "Wheel Clan - Level 1", targetX: 1446, targetY: 242 },
      { x: 2636, y: 363, text: "Wheel Clan - Throne Hall", category: "waypoint", targetMapFilename: "Wheel Clan - Throne Hall", targetX: 550, targetY: 762 },

      { x: 527, y: 346, text: "Alberich's Altar", category: "altar",
        godType: "Neutral Lesser God",
        inscription: "Textures/Altar/Alberich.png",
        offering: ["Lava Rock"],
        blessing: ["+1 Strength"]
      },
    ]
  },
  {
    filename: "ArcanumBase/WheelClanTown",
    chunked: true,
    width: 6244,
    height: 4368,
    chunkTiers: { low: { chunkSize: 2500 }, mid: { chunkSize: 833 } },
    displayName: "Wheel Clan - Town",
    parentFilename: "ArcanumBase/WheelClan.png",
    background: "#000000",
    defaultView: { x: 5819, y: 1548 }, // Good
    labels: [
      //Waypoints
      { x: 3805, y: 1556, text: "Castle (a bit below altar)", category: "waypoint" },
      { x: 5890, y: 1487, text: "Level 1", category: "waypoint" },
      { x: 5852, y: 2397, text: "Castle also but other side", category: "waypoint" },
      { x: 771, y: 3714, text: "Mines (to the east of big spider)", category: "waypoint" },

      // Shops
      { x: 2027, y: 2655, text: "Inventor", sex: "male", race: "Dwarf", level: 32, category: "shop", shopType: "Inventor", shopMarkup: 300 },
      { x: 1401, y: 2984, text: "Dwarven Smith", sex: "male", race: "Dwarf", level: 30, category: ["quest","shop"], shopType: "Dwarven Smith", shopMarkup: 300,
        linkedLabels: [
          { questName: "Get Mithril Ore from the Wheel Clan", questDescription: "Return with the Mithril to Ellumyn. She will give you her Bow in exchange.", target: "Ellumyn", part: 2 },
        ]
      },
      { x: 694, y: 3233, text: "Herbalist", sex: "male", race: "Dwarf", level: 30, category: "shop", shopType: "Herbalist", shopMarkup: 300 },

      // Quests
      { x: 1544, y: 1036, text: "Vegard MoltenFlow", sex: "male", race: "Dwarf", level: 20, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Find Vegard's Family Heirloom", questDescription: "Vegard MoltenFlow wants you to retrieve his family heirloom from the depths of the Dredge.", target: "", part: 1 }
        ]
      },
      { x: 1837, y: 700, text: "Erick Obsidian", sex: "male", race: "Dwarf", level: 1, inventory: ["Schematics: Iron Key"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "The Iron Clan", questDescription: "Erick Obsidian wants you to find the lost burial ground of the Iron Clan, and retrieve the Durin Stone.", target: "Ancient Iron Chest", part: 1 }
        ]
      },
      { x: 3235, y: 422, text: "Thrayne Iron Heart", sex: "male", race: "Dwarf", level: 20, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Thrayne Wants His Brother to Return Home", questDescription: "Thrayne Iron Heart wants you to find his brother Erland at the Stonecutter Clan and tell him to return home.", target: "", part: 1 },
        ]
      },

      // Other
      { x: 4474, y: 2849, text: "Innkeeper", sex: "male", race: "Dwarf", level: 30, category: "npc" },
      { x: 2472, y: 3460, text: "Garden", description: "A garden with an olive tree and a lot of loot for herbology. Inventory: 7 Olive Branch; 3 Kaudra Stem; 5 Ginka Root; 1 Witchbane; 2 Passion Root; 1 Poppy Flowers; 1 Mushrooms; 1 Coca Leaves; 1 Tobacco Leaves.", category: "information" },      { x: 2792, y: 3572, text: "New Marker Location", category: "information" },
    ]
  },
  {
    filename: "ArcanumBase/WheelClanThroneHall.jpg",
    displayName: "Wheel Clan - Throne Hall",
    parentFilename: "ArcanumBase/WheelClan.png",
    background: "#000000",
    defaultView: { x: 550, y: 762 },
    labels: [
      { x: 550, y: 762, text: "Wheel Clan - Castle", category: "waypoint", targetMapFilename: "Wheel Clan - Castle", targetX: 2636, targetY: 363 },
      { x: 853, y: 614, text: "Randver Thunder Stone", sex: "male", race: "Dwarf", level: 20, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Investigate the Wheel Clan", questDescription: "Randver informs you that his father, Loghaire, is in exile. If your persuasion is high, you can ask him to reveal a secret entrance to Loghaire's chambers. Otherwise, you will have to go through the dredge.", questType: "main", target: "Loghaire Thunder Stone", part: 3 }
        ]
      },
    ]
  },
  {
    filename: "ArcanumBase/WheelClanLoghairesChamber.png",
    displayName: "Loghaire's Chambers",
    background: "#000000",
    parentFilename: "ArcanumBase/WheelClan.png",
    labels: [
      { x: 269, y: 214, text: "Loghaire Thunder Stone", sex: "male", race: "Dwarf", level: 35, inventory: ["Harrow", "Note from M'in Gorad"], category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Find Qintarra", questDescription: "Find the elven village of Qintarra.", questType: "main", target: "Myrth", part: 1 },
          { questName: "Find out what happened to the Black Mountain Clan", questDescription: "Find out what happened to the Black Mountain Clan.", target: "M'in Gorad" },
        ]
      },
    ]
  },
  {
    filename: "ArcanumBase/WheelClanDredge.jpg",
    displayName: "Wheel Clan - Dredge",
    parentFilename: "ArcanumBase/WheelClan.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/WheelClanMines.png",
    displayName: "Wheel Clan - Mine",
    parentFilename: "ArcanumBase/WheelClan.png",
    background: "#000000",
    labels: [
      // WAYPOINTS
      { x: 123, y: 798, text: "Wheel Clan - Level 1", category: "waypoint", targetMapFilename: "Wheel Clan - Level 1" },
      { x: 1162, y: 200, text: "Wheel Clan - Castle", category: "waypoint", targetMapFilename: "Wheel Clan - Castle" },
      { x: 2510, y: 871, text: "Wheel Clan - Town", category: "waypoint", targetMapFilename: "Wheel Clan - Town" },

      // QUESTS
      { x: 1546, y: 1013, text: "Arvid Millstone", sex: "male", race: "Dwarf", level: 30, category: ["quest", "npc"],
        linkedLabels: [
          { questName: "Clear the Mines", questDescription: "Arvid Millstone wants you to destroy what has been killing all of the miners in the Wheel Clan.", target: "Dread Crystal Spider", part: 1 }
        ]
      },
      { x: 1954, y: 688, text: "Dread Crystal Spider", category: "quest",
        linkedLabels: [
          { questName: "Clear the Mines", questDescription: "Kill the Dread Crystal Spider and return to Arvid for a reward.", target: "Arvid Millstone", part: 2 }
        ]
      },

      // CHESTS
      { x: 594, y: 820, text: "Dwarven Chest", category: "chest" },
      { x: 1097, y: 918, text: "Dwarven Chest", category: "chest" },
      { x: 1806, y: 1103, text: "Dwarven Chest", category: "chest" },
      { x: 1747, y: 758, text: "Dwarven Chest", category: "chest" },
      { x: 2124, y: 961, text: "Dwarven Chest", category: "chest" },
      { x: 592, y: 819, text: "Dwarven Chest", category: "chest" },
      { x: 921, y: 680, text: "Dwarven Chest", category: "chest" },
      { x: 1139, y: 447, text: "Dwarven Chest", category: "chest" },
      { x: 1495, y: 399, text: "Dwarven Chest", category: "chest" },
      { x: 1981, y: 616, text: "Dwarven Chest", category: "chest" },
      { x: 2028, y: 646, text: "Dwarven Chest", category: "chest" },
    ]
  },
  {
    filename: "ArcanumBase/WolfCaveInside.png",
    displayName: "Wolf Cave - Inside",
    //defaultView: { x: 761, y: 1163 },
    parentFilename: "ArcanumBase/WolfCave.png",
    background: "#000000",
    labels: [
      { x: 537, y: 661, text: "Wolf Cave - Outside", description: "", category: "waypoint", targetMapFilename: "Wolf Cave", targetX: 796, targetY: 739 },
    ]
  },
];