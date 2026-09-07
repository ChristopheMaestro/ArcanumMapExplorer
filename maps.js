// Arcanum CE Restored - Map Database Manifest (Organized by Subfolders)
const ArcanumMapData = [
  {
    filename: "World Map/ArcanumWorldMap.jpg",
    displayName: "Arcanum World Map",
    modGroup: "World Map",
    typemap: "overworld",
    music: "music/arcanum.flac",
    defaultView: { x: 1000, y: 1000, zoom: 0.6 },
    labels: [
      { x: 503, y: 977, text: "Ashbury", description: "A city on the eastern seaboard.", targetMapFilename: "Ashbury" },
        // NEW MAP
        // Maps to do: Castle level 2; level 3
      { x: 1098, y: 1441, text: "Black Root", description: "A border town.", targetMapFilename: "Black Root" },
        // NEW MAP
      { x: 1604, y: 1828, text: "Caladon", description: "A thriving feudal kingdom.", targetMapFilename: "Caladon" },
        // NEW MAP
      { x: 1237, y: 1650, text: "Dernholm", description: "Capital of Cumbria - A dying feudal kingdom.", targetMapFilename: "Dernholm" },
      { x: 323, y: 877, text: "Isle of Despair", description: "A penal colony.", targetMapFilename: "Isle of Despair" },
        // NEW MAP
      { x: 1545, y: 656, text: "Qintarra", description: "A large elven community.", targetMapFilename: "Qintarra"},
        // NEW MAP
        // To do: Queens chambers
      { x: 1752, y: 1514, text: "Roseborough", description: "A small town near the Ring of Brodgar.", targetMapFilename: "Roseborough"},
        // NEW MAP
        // To do: Mannox Hole
      { x: 1410, y: 1317, text: "Shrouded Hills", description: "A small mining town.", targetMapFilename: "Shrouded Hills" },
        // NEW MAP
      { x: 1190, y: 753, text: "Stillwater", description: "A small town, famed for its swords.", targetMapFilename: "Stillwater" },
      { x: 972, y: 1028, text: "Tarant", description: "The biggest, most industrial city in Arcanum", targetMapFilename: "Tarant"},
        // NEW MAP :-(
      { x: 1179, y: 316, text: "The Bedokaan Village", description: "As small village of reptilian creatures." },
        // TO DO!!!
      { x: 1505, y: 297, text: "Tsen-Ang", description: "Home of the Dark Elves.", targetMapFilename: "T'sen-Ang"},
      { x: 444, y: 489, text: "Tulla", description: "A mysterious city of mages deep in the Vendigroth Wastes.", targetMapFilename: "Tulla"},
        // To do: Interior; Simeons Hallway
      { x: 868, y: 1191, text: "Vooriden", description: "A small village just south of Tarant.", targetMapFilename: "Vooriden"},
      { x: 954, y: 667, text: "Wheel Clan", description: "A Dwarven society deep in the Grey Mountains.", targetMapFilename: "Wheel Clan"},
        // NEW MAP
      
      { x: 1182, y: 1583, text: "A Lair Of Gyr Dolours", description: "The last known location of the tormented Lady Druella.", targetMapFilename: "A Lair of Gyr Dolours"},
      { x: 1367, y: 1582, text: "Ancient Maze", description: "A mysterious old maze.", targetMapFilename: "Ancient Maze"},
      { x: 498, y: 892, text: "Ancient Shipwreck", description: "The remains of an ancient pirate ship.", targetMapFilename: "Ancient Shipwreck"},
      { x: 1586, y: 1816, text: "A mysterious location", description: "Discovered on the wall painting in the Mushroom." },
      { x: 1754, y: 1479, text: "Ancient Ruins", description: "Ancient ruins.", targetMapFilename: "Ancient Ruins" },
      { x: 776, y: 919, text: "Ancient Temple", description: "A temple rumored to hold treasures untold.", targetMapFilename: "Ancient Temple"},
      { x: 1452, y: 1303, text: "Arbalah's House", description: "Arbalah's House.", targetMapFilename: "Arbalah's House"},
      { x: 629, y: 1593, text: "Boat Landing on Thanatos", description: "Landing for the Isle of Death.", targetMapFilename: "Boat Landing on Thanatos"},
      { x: 1627, y: 1635, text: "Bolo’s Altar", description: "A weathered stone altar.", targetMapFilename:"Bolo's Altar" },
      { x: 1453, y: 1289, text: "Crash Site", description: "The remains of the crashed blimp.", targetMapFilename: "Crash Site"},
      { x: 346, y: 679, text: "Dark Elf Camp", description: "The dark elves' base camp near the ruins of Vendigroth.", targetMapFilename: "Dark Elf Camp"},
      { x: 993, y: 790, text: "Dungeon of the Dragon Pool", description: "Source of Dragon’s Blood for reviving Torian Kel.", targetMapFilename: "Dungeon of the Dragon Pool" },
      { x: 711, y: 1022, text: "Elven Ruins", description: "A place that may hold untold elven riches.", targetMapFilename: "Elven Ruins"},
      { x: 1627, y: 564, text: "Falcon’s Ache", description: "Elven holy ground, at the edge of the Glimmering Forest.", targetMapFilename: "Falcon's Ache"},
      { x: 830, y: 1036, text: "Forbidden Pit", description: "Dangerous looking pit filled with skeletons and widowers.", targetMapFilename: "Forbidden Pit" },
      { x: 923, y: 1689, text: "Half Ogre Island", description: "The rumored location of the secret breeding laboratory.", targetMapFilename: "Half Ogre Island"},
      { x: 882, y: 423, text: "Kerlin’s Altar", description: "An ancient, golden altar.", targetMapFilename:"Kerlin’s Altar"},
      { x: 720, y: 1886, text: "Land Bridge", description: "Beginning of the trail leading to the god of Thanatos.", targetMapFilename: "Land Bridge", targetX: 1435, targetY: 735},
      { x: 474, y: 694, text: "Mysterious ruins of the wastes", description: "A location shown to you by Weldo Rubin.", targetMapFilename: "Myserious ruins of the wastes" },
      { x: 721, y: 1890, text: "Nasrudin's Resting Place", description: "Reputed to be the location of the remains of Nasrudin.", targetMapFilename: "Nasrudin's Resting Place", targetX: 3144, targetY: 2443},
      { x: 1503, y: 1771, text: "Razor’s Pointe", description: "Ships fear these treacherous waters that must be passed to navigate around the tip of Arcanum." },
      { x: 1514, y: 1184, text: "Secret Entrance To The Iron Clan", description: "The entrance to the legendary dwarven clan.", targetMapFilename: "Secret Entrance to the Iron Clan"},
      { x: 346, y: 827, text: "Shades Beach", description: "A place reputed to be full of strange objects.", targetMapFilename: "Shades Beach"},
      { x: 1450, y: 1325, text: "Simon Fahrkus' Shack", description: "Simon Fahrkus' Shack.", targetMapFilename: "Simon Fahrkus' Shack"},
      { x: 1260, y: 479, text: "Small Camp", description: "A small camp is visible from a distance.", targetMapFilename: "Small Camp" },
      { x: 1595, y: 882, text: "Small Pond", description: "You hear shouts and whip-cracking.", targetMapFilename: "Small Pond" },
      { x: 617, y: 527, text: "Strange Pond", description: "An interesting pond in the middle of nowhere.", targetMapFilename: "Strange Pond"},
      { x: 1308, y: 754, text: "The Black Mountain Mines", description: "The abandoned home of the Black Mountain Clan.", targetMapFilename: "The Black Mountain Mines"},
        // To do: checkup
      { x: 1629, y: 1205, text: "The Broken Cathedral", description: "A place of old ruins.", targetMapFilename: "The Broken Cathedral"},
      { x: 1613, y: 1413, text: "The Cold Place", description: "An ominous place.", targetMapFilename: "The Cold Place"},
      { x: 768, y: 838, text: "The Lair of Bellerogrim", description: "A cave where they discovered Arcanum’s last Dragon.", targetMapFilename: "The Lair of Bellerogrim"},
      { x: 642, y: 1765, text: "The Lair Of The Bogaroth", description: "The reputed lair of the monster that slaughtered the entire Ashlag tribe.", targetMapFilename: "The Lair of the Bogaroth"},
      { x: 1695, y: 1318, text: "The Old Lagoon", description: "A remote lagoon.", targetMapFilename: "The Old Lagoon"},
      { x: 1076, y: 514, text: "The Bog", description: "An evil looking place.", targetMapFilename: "The Bog"},
      { x: 1364, y: 936, text: "The Pit Of Fires", description: "The location of the Blade Of Xerxes.", targetMapFilename: "The Pit of Fires"},
        // To do: cave
      { x: 1320, y: 827, text: "The Place Of Lost Voices", description: "A place shown to you by the map in the Iron Clan Chest.", targetMapFilename: "The Place of Lost Voices" },
      { x: 509, y: 1113, text: "The Williamson Homestead", description: "A run-down shanty.", targetMapFilename: "TheWilliamsonHomestead" },
      { x: 1214, y: 1137, text: "Torg’s Altar", description: "An old, stone altar.", targetMapFilename: "Torg'sAltar"},
      { x: 1419, y: 1099, text: "Torin Quarry", description: "An ancient dwarven stone quarry.", targetMapFilename: "Torin Quarry"},
      { x: 1046, y: 693, text: "Uncharted Cave", description: "No one knows what mysteries may lie in this unexplored cave.", targetMapFilename: "Uncharted Cave"},
      { x: 745, y: 1700, text: "Village Of the Ashlag Tribe", description: "The home of a primitive tribe that worships a primate deity.", targetMapFilename: "Village of the Ashlag Tribe"},
      { x: 307, y: 587, text: "Vendigroth Ruins", description: "The remnants of an ancient city.", targetMapFilename: "Vendigroth Ruins" },
        // To do: checkup
      { x: 1230, y: 981, text: "Vollinger’s Meeting Place", description: "Vollinger’s Meeting Place.", targetMapFilename: "Vollinger’s Meeting Place"},
      { x: 1230, y: 1530, text: "Wolf Cave", description: "Wolf Cave.", targetMapFilename: "Wolf Cave"},


      { x: 466, y: 741, text: "Gateway To The Wastes", description: "A bridge leading into the Vendigroth Wastes." },
      { x: 1500, y: 1442, text: "Gorgoth Pass", description: "A long forgotten pass joining the kingdoms of Dernholm and Caladon." },
      { x: 1288, y: 713, text: "Hardin’s Pass", description: "A treacherous snowy pass leading to the Glimmering Forest." },
      { x: 1435, y: 616, text: "K’na Tha", description: "A place of ancient magick rumored to contain Azram’s Star." },
        // To do: 6 different levels
      { x: 635, y: 1204, text: "Kree", description: "The once great city destroyed by the Bane of Kree." },
      { x: 1580, y: 1009, text: "Lethe Wyvern Sighting", description: "Rumored lair of the lethe wyvern." },
      { x: 1179, y: 1465, text: "Liam’s Workshop", description: "Liam Cameron’s Workshop." },
      { x: 1025, y: 1333, text: "Ruins of Szabo", description: "Some ancient ruins." },
        // To do: outside; level 1; level 2
      { x: 1320, y: 179, text: "Secret Village", description: "You hear high pitched rejoicing." },
      { x: 1343, y: 887, text: "Stonecutter Clan", description: "The home of the Stonecutter Clan." },
        // To do: outside; inside; lab
      { x: 1373, y: 705, text: "Strange Ceremony", description: "Strange chanting can be heard nearby...." },
      { x: 682, y: 1339, text: "Stringy Pete’s Cove", description: "A haunted cove." },
      { x: 808, y: 1341, text: "Stringy Pete’s Treasure", description: "The final resting place of the infamous pirate’s bounty." },
      { x: 1178, y: 289, text: "The Bangellian Deeps", description: "The resting place of the Bangellian Scourge." },
        // To do: outside; inside
      { x: 1386, y: 640, text: "The Castle S’nel N’fa", description: "A trap filled ruin rumored to contain the staff of K’an Tau." },
        // To do: outside; inside
      { x: 320, y: 838, text: "The Home Of Maximillan", description: "A strange old man on the Isle of Despair." },
      { x: 1206, y: 276, text: "The Poachers Camp", description: "The camp of some Bedokaan poachers." },
      { x: 749, y: 249, text: "The Ruby Glade", description: "An eerie, ancient place." },
      { x: 268, y: 824, text: "The Women’s Camp", description: "A small village comprised solely of nomadic women." },
      { x: 1529, y: 1534, text: "Thieves Cave", description: "Thieves Cave." },
        // To do: outside; inside
        // MAP OF THE VOID !!!
    ]
  },
  {
    filename: "World Map/ArcanumWorldMap.jpg",
    displayName: "Arcanum Forgotten Places",
    modGroup: "CE Restored World Map",
    typemap: "overworld",
    defaultView: { x: 1000, y: 1000, zoom: 0.6 },
    labels: [
      { x: 1060, y: 809, text: "Fan Graveyard", description: "", targetMapFilename: "Fan Graveyard" },
      { x: 750, y: 556, text: "Old Blind Master", description: "See Quests For More Details.", targetMapFilename: "Old Blind Master" },

      { x: 610, y: 555, text: "Acererak's Tomb", description: "The forbidding entrance leading deep into a legendary dungeon.", targetMapFilename: "Acererak's Tomb" },
      { x: 899, y: 374, text: "Merchant's Faire", description: "A crowded gathering node for nomadic traders.", targetMapFilename: "Merchant's Faire" },
      { x: 418, y: 811, text: "Leahbo", description: "", targetMapFilename: "Leahbo" },
      { x: 615, y: 1013, text: "Well of Lost Souls", description: "", targetMapFilename: "Well of Lost Souls" },
      { x: 923, y: 1024, text: "Vaselan", description: "", targetMapFilename: "Vaselan" },
      { x: 1003, y: 1004, text: "The Tempter of Fate", description: "", targetMapFilename: "The Tempter of Fate" },
      { x: 770, y: 1274, text: "Cotswold", description: "", targetMapFilename: "Cotswold" },
      { x: 1477, y: 1610, text: "The Cavern of Madness", description: "", targetMapFilename: "The Cavern of Madness" },
      { x: 1627, y: 1127, text: "Marsyona", description: "", targetMapFilename: "Marsyona" },
      { x: 1166, y: 894, text: "Lynchbany", description: "", targetMapFilename: "Lynchbany" },
      { x: 1184, y: 879, text: "Big Woods Lodge", description: "", targetMapFilename: "Big Woods Lodge" },

      { x: 1286, y: 1436, text: "Brandybuck", description: ""},
      { x: 732, y: 565, text: "An Old Mine", description: "" },
      { x: 654, y: 664, text: "Mines of Dwarrowdelf", description: "" },
      { x: 654, y: 687, text: "Ancient Trail", description: "" },
      { x: 295, y: 727, text: "Port Ruins", description: "" },
      { x: 336, y: 749, text: "Port Ruins", description: "" },
      { x: 383, y: 767, text: "Port Ruins", description: "" },
      { x: 1297, y: 1753, text: "Plainwicke Plantation", description: "" },

      { x: 1261, y: 1727, text: "Norleigh Seahold", description: "" }, // Empty (Boat)
      { x: 1301, y: 1795, text: "Brookeside Plantation", description: "" }, // Empty (Sign welcome)
      { x: 1317, y: 1802, text: "Freebooter's Pass", description: "" }, // Empty
      { x: 1329, y: 1770, text: "Bone Hill", description: "" }, // Empty    
      { x: 354, y: 871, text: "Secret Landing", description: "" }, // Empty
      { x: 358, y: 908, text: "Veloren Island", description: "" }, // Empty
      { x: 477, y: 1369, text: "Black Rock Lighthouse", description: "" }, // Empty
      { x: 1348, y: 1835, text: "Monaco", description: "" }, // Empty
      { x: 1464, y: 1259, text: "Ivory Lake", description: "" }, // Empty
      { x: 1293, y: 676, text: "Spider Cave", description: "" }, // Empty
    ]
  },
  {
    filename: "ArcanumBase/Ashburysmall.jpg",
    displayName: "Ashbury",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 4116, y: 3252, zoom: 1 },
    labels: [
      { x: 5663, y: 2388, text: "Worthless Mutt (Dog)", description: "", category: "followers" },
      { x: 2947, y: 3240, text: "Geoffrey Tarellond-Ashe", description: "", category: "followers" },

      { x: 2041, y: 2737, text: "Ashbury Crematorium - Level 1", description: "", category: "waypoint", targetMapFilename: "Ashbury Crematorium - Level 1" },
      { x: 3707, y: 1325, text: "Ashbury Castle - Level 1", description: "", category: "waypoint", targetMapFilename: "Ashbury Castle - Level 1" },
      { x: 3277, y: 2500, text: "Scienticians Underground", description: "", category: "waypoint", targetMapFilename: "Scienticians Underground" },

    ]
  },
  {
    filename: "ArcanumBase/BlackRootsmall.jpg",
    displayName: "Black Root",
    modGroup: "Arcanum",
    typemap: "local",
    labels: [
      { x: 5586, y: 1308, text: "Dante", description: "", category: "followers" },
      { x: 4656, y: 3063, text: "Franklin Payne", description: "", category: "followers" },
    ]
  },
  {
    filename: "ArcanumBase/Caladonsmall.jpg",
    displayName: "Caladon",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 3596, y: 3305, zoom: 1 },
    labels: [
      { x: 4401, y: 1297, text: "Caladon - Panarii Temple", description: "", category: "waypoint", targetMapFilename: "Caladon - Panarii Temple Level 1"},
      { x: 6613, y: 1768, text: "Caladon Castle", description: "", category: "waypoint", targetMapFilename: "Caladon - Castle Main Floor"},
      { x: 6870, y: 2460, text: "Caladon Guardhouse Basement", description: "", category: "waypoint", targetMapFilename: "Caladon - Guardhouse Basement"},
      { x: 7529, y: 1837, text: "High Security Prison", description: "", category: "waypoint", targetMapFilename: "High Security Prison"},
      { x: 5883, y: 1959, text: "Caladon Mafia Underground", description: "", category: "waypoint", targetMapFilename: "Caladon - Mafia Underground"},
      { x: 5390, y: 1723, text: "Caladon Sanders Basement", description: "", category: "waypoint", targetMapFilename: "Caladon - Sanders Basement"},
      { x: 6879, y: 782, text: "Caladon Trap Disarm Dungeon", description: "", category: "waypoint" },
      
      { x: 8236, y: 1540, text: "Caladon Sewers", description: "", category: "waypoint", targetMapFilename: "Caladon - Sewers", targetX: 3690, targetY: 819 },
      { x: 4353, y: 1328, text: "Caladon Sewers", description: "", category: "waypoint", targetMapFilename: "Caladon - Sewers", targetX: 2244, targetY: 346 }, //In front of Panarii Temple
      { x: 6300, y: 978, text: "Caladon Sewers", description: "", category: "waypoint", targetMapFilename: "Caladon - Sewers", targetX: 2753, targetY: 356}, // In front of Museum
      { x: 7480, y: 2591, text: "Caladon Sewers", description: "", category: "waypoint", targetMapFilename: "Caladon - Sewers", targetX: 3265, targetY: 1347 },
      { x: 5602, y: 2270, text: "Caladon Sewers", description: "", category: "waypoint", targetMapFilename: "Caladon - Sewers", targetX: 2148, targetY: 1103 },
      { x: 5742, y: 3327, text: "Caladon Sewers", description: "", category: "waypoint", targetMapFilename: "Caladon - Sewers", targetX: 2326, targetY: 1784 },
    ]
  },
  {
    filename: "ArcanumBase/Dernholm.jpg",
    displayName: "Dernholm",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 3141, y: 2792, zoom: 1 },
    labels: [
      { x: 4851, y: 2182, text: "Vollinger", description: "", category: "followers" },
      { x: 4273, y: 2736, text: "Jayna Stiles", description: "", category: "followers" },

      { x: 6132, y: 1215, text: "Dernholm Pits", description: "", category: "waypoint", targetMapFilename: "Dernholm Pits"},
      { x: 5465, y: 1782, text: "Dernholm Castle", description: "", category: "waypoint" },
      { x: 499, y: 573, text: "Dernholm Pits", description: "", category: "waypoint", targetMapFilename: "Dernholm Pits"},
    ]
  },
  {
    filename: "ArcanumBase/IsleofDespairsmall.jpg",
    displayName: "Isle of Despair",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 2976, y: 1409, zoom: 1 },
    labels: []
  },
  {
    filename: "ArcanumBase/Qintarrasmall.jpg",
    displayName: "Qintarra",
    modGroup: "Arcanum",
    typemap: "local",
    music: "music/qintarra.flac",
    defaultView: { x: 1749, y: 1327, zoom: 1 },
    labels: []
  },
  {
    filename: "ArcanumBase/Roseboroughsmall.jpg",
    displayName: "Roseborough",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 3064, y: 2710, zoom: 1 },
    labels: []
  },
  {
    filename: "ArcanumBase/ShroudedHillssmall.jpg",
    displayName: "Shrouded Hills",
    modGroup: "Arcanum",
    typemap: "local",
    music: "music/towns.flac",
    defaultView: { x: 5689, y: 3230, zoom: 1 },
    labels: [
      { x: 5262, y: 2990, text: "Ristezze", shopType: "Junk Dealer", shopMarkup: 200,  inventory: ["Key to Ristezze's Bedroom"], category: ["shop", "quest", "key"],
        linkedLabels: [
          { questName: "Find the Boy (Part II)", questDescription: "Discover the origins of the strange ring.", target: "Ristezze" },
          { questName: "Find a camera or Bessie Toone paraphernalia", questDescription: "Ristezze the Importer wants you to find a camera OR some Bessie Toone paraphenalia. In return, he will give you information about P. Schuyler & Sons.", target: "Ristezze" },
          { questName: "Get Information from the Schuylers", questDescription: "Get information from P. Schuyler & Sons about owner of strange ring.", target: "Ristezze" },
        ],},
      { x: 4725, y: 3619, text: "Jongle Dunne", description: "", category: ["quest", "npc"],
       linkedLabels: [
          { questName: "", questDescription: "Jongle Dunne wants you to destroy the town's steam engine.", target: "" },
          { questName: "", questDescription: "Jongle Dunne needs a package picked up from a man named Charles Dolan, a merchant in Dernholm.", target: "" },
        ],},
      { x: 5619, y: 3254, text: "Constable Owens", description: "", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "Constable Owens needs you to remove the thieves from the bridge.", target: "Lukan the Witless" },
          { questName: "", questDescription: "Constable Owens wants you to fix the town's steam engine.", target: "" },
        ],},
      { x: 4975, y: 3178, text: "Lloyd Gurloes", shopType: "Blacksmith", shopMarkup: 110, inventory: ["Key to Lloyd Gurloes' backroom"], category:  ["shop", "quest", "key"],
        linkedLabels: [
          { questName: "", questDescription: "Lloyd Gurloes wants you to obtain some pure ore for him.", target: "" },
        ],},
      { x: 5701, y: 3465, text: "Jacob Bens", description: "", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "Jacob Bens in Shrouded Hills wants you to steal the local mining company's payroll from the bank's safe.", target: "" },
        ],},
      { x: 5489, y: 2720, text: "Doc Roberts", description: "", category: ["quest", "npc", "followers"],
        linkedLabels: [
          { questName: "Stop the bank robbery (Part I)", questDescription: "Doc Roberts wants you to help him stop an impending bank robbery.", target: "Stop the bank robbery (Part II)" },
        ],},
      { x: 5288, y: 3388, text: "Stop the bank robbery (Part II)", description: "Kill the three bank robbers.", category: "quest", target: "Doc Roberts"},
      { x: 2556, y: 3742, text: "Percival Toone", description: "", category: ["quest", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "Percival Toone wants you to find a way to free the ghost of his mother.", target: "" },
        ],},
      { x: 4561, y: 2421, text: "Gaylin", description: "Herbalist", category: ["shop", "quest"],
        linkedLabels: [
          { questName: "Find the Amulet of N'Tala (Part I)", questDescription: "If, in my travels, I happen across the ancient elven amulet of N'Tala, Gaylin has offered to pay me a handsome reward for its return.", target: "Myrth" },
        ],},
      { x: 8487, y: 2098, text: "Lukan the Witless", description: "", category: ["quest", "key", "npc"],
        linkedLabels: [
          { questName: "", questDescription: "In order to join the thieves, you must destroy the construction materials for the new bridge.", target: "Bridge materials" },
        ],},
      { x: 6361, y: 3567, text: "Elder Joachim's paper trail (Part I)", description: "", category: "quest" },
      { x: 7734, y: 3628, text: "Bridge materials", description: "", category: "quest" },

      { x: 4575, y: 3237, text: "Gnome Shopkeeper", shopType: "General Store", shopMarkup: 110, category: "shop" },
      { x: 7136, y: 2559, text: "Wise Woman", shopType: "Gypsy/Nomad", shopMarkup: 150, description: "", category: "shop" },

      { x: 5914, y: 3147, text: "Shrouded Hills Panarii Temple", description: "", category: "waypoint", targetMapFilename: "Panarii Temple"},
      { x: 2179, y: 3272, text: "Bessie Toone Mine", description: "", category: "waypoint", targetMapFilename: "Bessie Toone Mine", targetX: 1697, targetY: 805},

      { x: 5762, y: 3504, text: "Sogg Mead Mug", description: "", category: "followers" },
    ]
  },
  {
    filename: "ArcanumBase/Stillwater.jpg",
    displayName: "Stillwater",
    modGroup: "Arcanum",
    typemap: "local",
    music: "music/villages.flac",
    defaultView: { x: 2816, y: 2407, zoom: 1 },
    labels: [
      { x: 1293, y: 2938, text: "Find the Stolen Idol (I)", description: "", category: "quest" },
      { x: 3777, y: 3372, text: "Find the Stolen Idol (II)", description: "", category: "quest" },
      { x: 721, y: 2002, text: "Rescue Cyrus (II)", description: "", category: "quest" },
      { x: 2389, y: 3537, text: "Elder Joachim's paper trail (III)", description: "", category: "quest" },
      { x: 2271, y: 2586, text: "Myrth", category: ["npc", "quest"],
        linkedLabels: [
          { questName: "The Stillwater Giant (Part I)", questDescription: "Myrth, an elf residing in Stillwater, instructs you to perform a rite of passage, killing a Stillwater Giant and bringing its pelt to him. He directs you to Stanley Xavier Hippington, living directly North from his house.", target: "Stanley Xavier Hippington" },
          { questName: "Find the Amulet of N'Tala (Part II)", questDescription: "The amulet can be obtained from Myrth either by stealing it or by taking it from his corpse after killing him.", target: "Gaylin" }]
      },
      { x: 2719, y: 1753, text: "Stanley Xavier Hippington", description: "", category: ["npc", "quest"],
        linkedLabels: [
          { questName: "The Stillwater Giant (Part II)", questDescription: "Upon talking to Stanley Xavier Hippington, a cryptozoologist, he gives you a Stillwater trap and a bottle of Stillwater Giant scent to use to capture a Stillwater Giant, residing in a cave nearby.", target: "The Stillwater Giant (Part III)" },
          ]
      },
      { x: 2627, y: 2829, text: "Retrieving the Ruby (I)", description: "", category: "quest" },

      { x: 1978, y: 3831, text: "General Goods", description: "", category: "shop" },
      { x: 2278, y: 3130, text: "The Falling Hammer", description: "Blacksmith / Quest: Rescue Cyrus (I)", category:  ["shop", "quest"]},

      { x: 1681, y: 633, text: "Drogs Cave", description: "", category: "waypoint", targetMapFilename: "Drogs Cave"},
      { x: 4211, y: 1759, text: "Stillwater Giants Cave", description: "", category: "waypoint", targetMapFilename: "Stillwater Giants Cave"},
    ],
  },
  {
    filename: "ArcanumBase/Tarant.png",
    displayName: "Tarant",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 3338, y: 2537, zoom: 1 },
    labels: [
      { x: 3574, y: 2372, text: "Castleton's General Store", description: "", category: "shop" },
      { x: 3710, y: 2304, text: "Tailor", description: "", category: "shop" },
      { x: 4007, y: 2094, text: "Inventor", description: "", category: "shop" },
      { x: 4035, y: 2067, text: "Herbalist", description: "", category: "shop" },
      { x: 3932, y: 2486, text: "Junk Dealer", description: "", category: "shop" },
      { x: 3905, y: 1863, text: "Wallow's Quality Armour", description: "", category: "shop" },
      { x: 3782, y: 1797, text: "Smythe's Gun Shoppe", description: "", category: "shop" },
      { x: 2297, y: 2808, text: "Mellin Bungerton", description: "", category: "shop" },
      { x: 4523, y: 1634, text: "Magick Shop Clerk", description: "", category: "shop" },
      { x: 4410, y: 1558, text: "Magickal Smith", description: "", category: "shop" },
      { x: 4598, y: 1524, text: "Magick Shop Clerk", description: "", category: "shop" },
      { x: 4570, y: 2347, text: "Black Market", description: "", category: "shop" },

      { x: 3800, y: 2093, text: "Magnus", description: "", category: "followers" },
      { x: 4792, y: 1662, text: "Gar", description: "", category: "followers" },
      { x: 3225, y: 2223, text: "Perriman Smythe", description: "", category: "followers" },
      { x: 2463, y: 2798, text: "Sebastian", description: "", category: "followers" },

      { x: 4162, y: 1649, text: "The Crystal Ball (Part I)", description: "", category: "quest", linkedLabels: ["The Crystal Ball (Part II)"] },
      { x: 4340, y: 2454, text: "The Crystal Ball (Part II)", description: "Madame Toussaude wants you to deliver her crystal ball to Delores Beston.", category: "quest" },
      { x: 4668, y: 2647, text: "Rid Mr. Plough's Warehouses of Rats", description: "Mr. Plough wants you to rid his warehouses, near the docks in Tarant, of rats.", category: "quest" },
    
      { x: 5442, y: 1502, text: "Bates Mansion", description: "", category: "waypoint" },
      { x: 4947, y: 1428, text: "City Hall Underground", description: "", category: "waypoint" },
      { x: 3780, y: 1940, text: "P. Schuyler & Sons (Level I)", description: "", category: "waypoint" },
      { x: 1812, y: 2706, text: "Tarant Old Sewers", description: "", category: "waypoint", targetMapFilename: "Tarant Old Sewers" },
      { x: 3081, y: 2970, text: "Tarant Old Sewers", description: "", category: "waypoint", targetMapFilename: "Tarant Old Sewers" },
      { x: 5443, y: 2279, text: "Tarant Old Sewers", description: "", category: "waypoint", targetMapFilename: "Tarant Old Sewers" },
      { x: 5066, y: 3131, text: "Tarant Old Sewers", description: "", category: "waypoint", targetMapFilename: "Tarant Old Sewers", targetX: 3805, targetY: 2237, targetZoom: 1.0},
      { x: 3302, y: 2074, text: "Tarant New Sewers", description: "", category: "waypoint" },
      { x: 3849, y: 2316, text: "Tarant New Sewers", description: "", category: "waypoint" },
      { x: 3976, y: 1990, text: "Tarant New Sewers", description: "", category: "waypoint" },
      { x: 3871, y: 1649, text: "Tarant New Sewers", description: "", category: "waypoint" },
      { x: 2949, y: 2014, text: "Bates Tunnel", description: "", category: "waypoint", targetMapFilename: "Bates Tunnel"},
      { x: 3417, y: 2459, text: "Station A: West Garillon Bridge", description: "", category: "waypoint" },
      { x: 3598, y: 1728, text: "Station B: Vermillion Station", description: "", category: "waypoint" },
      { x: 4499, y: 1279, text: "Station C: Tarant University", description: "", category: "waypoint" },
      { x: 6009, y: 1997, text: "Station D: Warehouse District", description: "", category: "waypoint" },
      { x: 5111, y: 2121, text: "Station E: Commercial District", description: "", category: "waypoint" },
      { x: 4350, y: 2624, text: "Station F: Tarantian Docks", description: "", category: "waypoint" },
      { x: 4462, y: 1939, text: "Station G: Kensington Park", description: "", category: "waypoint" },
      { x: 2309, y: 3003, text: "Station H: The Boil", description: "", category: "waypoint" },
      ]
  },
  {
    filename: "ArcanumBase/TsenAng.png",
    displayName: "T'sen-Ang",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 2294, y: 1344, zoom: 1 },
    labels: []
  },
  {
    filename: "ArcanumBase/Tulla.jpg",
    displayName: "Tulla",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 1910, y: 1655, zoom: 1 },
    labels: []
  },
  {
    filename: "ArcanumBase/Vooriden.png",
    displayName: "Vooriden",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 1031, y: 496, zoom: 1 },
    labels: []
  },
  {
    filename: "ArcanumBase/WheelClan.png",
    displayName: "Wheel Clan",
    modGroup: "Arcanum",
    typemap: "local",
    labels: []
  },

/// DUNGEONS MAPS
  {
    filename: "ArcanumBase/Arbalah'sHouse.png",
    displayName: "Arbalah's House",
    modGroup: "Other locations",
    typemap: "local",
    // music: "music/wilderness.flac", No music here it seems
    defaultView: { x: 1031, y: 605, zoom: 1 },
    labels: [
      { x: 912, y: 477, text: "Arbalah", description: "", category: ["quest", "npc"],
        linkedLabels: [{ questName: "Quest: The Priest and the Bandit (Part II)", questDescription: "Arbalah has refuted the claims of Charles Brehgo, saying Brehgo and his partner Fahrkus killed his family and stole a sacred artifact from him. He would like for me to locate and return this artifact to him.", target: "Charles Brehgo" }],
     },
    ],
  },
  {
    filename: "ArcanumBase/ALairOfGyrDolours.jpg",
    displayName: "A Lair of Gyr Dolours",
    modGroup: "Other locations",
    typemap: "local",
    // music:
    defaultView: {},
    labels: [],
  },
  {
    filename: "ArcanumBase/AMysteriousLocation.png",
    displayName: "A mysterious location",
    modGroup: "Other locations",
    typemap: "local",
    // music:
    defaultView: { x: 796, y: 1211, zoom: 1 },
    labels: [],
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
    // music:
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
    // music:
    defaultView: {},
    labels: [],
  },
  {
    filename: "ArcanumBase/AncientTemple.png",
    displayName: "Ancient Temple",
    modGroup: "Other locations",
    typemap: "local",
    // music:
    defaultView: { x: 1026, y: 849, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/BoatLandingOnThanatos.jpg",
    displayName: "Boat Landing on Thanatos",
    modGroup: "Other locations",
    typemap: "local",
    // music:
    defaultView: {},
    labels: [],
  },
  {
    filename: "ArcanumBase/Bolo'sAltar.png",
    displayName: "Bolo's Altar",
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
    modGroup: "Other locations",
    typemap: "local",
    music: "music/wilderness.flac",
    defaultView: { x: 2145, y: 1331, zoom: 1 },
    background: "#000000",
    labels: [
      { x: 2353, y: 1112, text: "Camera", description: "", category: "quest" },
      { x: 2872, y: 1312, text: "Letter", description: "", category: "quest" },
      { x: 3239, y: 894, text: "Crash Site - Cave", description: "", category: "waypoint", targetMapFilename: "Crash Site - Cave" },
      { x: 2179, y: 1308, text: "Virgil", description: "", category: "followers" },
      { x: 1309, y: 1733, text: "Magick Chest", description: "", category: "chest" },
      { x: 2132, y: 1344, text: "Preston Radcliffe", description: "", category: ["quest", "npc"],
          linkedLabels: [{ questName: "Find the Boy (Part I)", questDescription: "Discover the origins of the strange ring.", target: "Ristezze" }],
      }]
  },
  {
    filename: "ArcanumBase/DarkElfCamp.jpg",
    displayName: "Dark Elf Camp",
    modGroup: "Other locations",
    typemap: "local",
    // music:
    defaultView: {},
    labels: [],
  },
  {
    filename: "ArcanumBase/DungeonOfTheDragonPool.jpg",
    displayName: "Dungeon of the Dragon Pool",
    modGroup: "Other locations",
    typemap: "local",
    // music:
    defaultView: {},
    labels: [],
  },
  {
    filename: "ArcanumBase/ElvenRuins.png",
    displayName: "Elven Ruins",
    modGroup: "Other locations",
    typemap: "local",
    //music: 
    defaultView: { x: 837, y: 611, zoom: 1 },
    //background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/FalconsAche.png",
    displayName: "Falcon’s Ache",
    modGroup: "Other locations",
    typemap: "local",
    //music: 
    //defaultView: { x: 1076, y: 399, zoom: 1 },
    //background: "#000000",
    labels: [],
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
    filename: "ArcanumBase/HalfOgreIsland.jpg",
    displayName: "Half Ogre Island",
    modGroup: "Other locations",
    typemap: "local",
    //music: 
    defaultView: { x: 2145, y: 1331, zoom: 1 },
    //background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/Kerlin'sAltar.png",
    displayName: "Kerlin’s Altar",
    modGroup: "Other locations",
    typemap: "local",
    // music: "music/wilderness.flac",
    defaultView: { x: 813, y: 464, zoom: 1 },
    // background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/NasrudinRestingPlace.jpg",
    displayName: "Land Bridge",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 1435, y: 735, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/MysteriousRuinsOfTheWastes.jpg",
    displayName: "Mysterious ruins of the wastes",
    modGroup: "Other locations",
    typemap: "local",
    //defaultView: { x: 1435, y: 735, zoom: 1 },
    labels: [],
  }, 
  {
    filename: "ArcanumBase/NasrudinRestingPlace.jpg",
    displayName: "Nasrudin's Resting Place",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 3144, y: 2443, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/SecretEntranceToTheIronClan.png",
    displayName: "Secret Entrance to the Iron Clan",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 879, y: 466, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/Razor'sPointe.png",
    displayName: "Razor’s Pointe",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 1615, y: 594, zoom: 1 },
    labels: [],
  }, 
  {
    filename: "ArcanumBase/ShadesBeach.png",
    displayName: "Shades Beach",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 1617, y: 1238, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/SimonFahrkusShack.png",
    displayName: "Simon Fahrkus' Shack",
    modGroup: "Other locations",
    typemap: "local",
    // music: "music/wilderness.flac", No music here it seems
    defaultView: { x: 705, y: 555, zoom: 1 },
    labels: [
      { x: 828, y: 498, text: "Simon Fahrkus", description: "", category: ["quest", "npc"],
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
    filename: "ArcanumBase/TheBlackMountainMines.png",
    displayName: "The Black Mountain Mines",
    modGroup: "Other locations",
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
    filename: "ArcanumBase/TheColdPlace.jpg",
    displayName: "The Cold Place",
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 911, y: 1701, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/TheLairofBellerogrim.png",
    displayName: "The Lair of Bellerogrim",
    modGroup: "Other locations",
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
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 880, y: 646, zoom: 1 },
    labels: [],
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
    modGroup: "Other locations",
    music: "music/villages.flac",
    typemap: "local",
    defaultView: { x: 1098, y: 606, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/ThePlaceOfLostVoices.jpg",
    displayName: "The Place of Lost Voices",
    modGroup: "Other locations",
    typemap: "local",
    background: "#000000",
    defaultView: { x: 7612, y: 2443, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/TheWilliamsonHomestead.png",
    displayName: "The Williamson Homestead",
    modGroup: "Other locations",
    // music: no music here
    typemap: "local",
    defaultView: { x: 1306, y: 323, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/Torg'sAltar.png",
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
    modGroup: "Other locations",
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
    modGroup: "Other locations",
    typemap: "local",
    defaultView: { x: 868, y: 598, zoom: 1 },
    labels: [],
  },
  {
    filename: "ArcanumBase/VollingersMeetingPlace.png",
    displayName: "Vollinger’s Meeting Place",
    modGroup: "Other locations",
    typemap: "local",
    // music: "music/wilderness.flac", No music here it seems
    defaultView: { x: 852, y: 617, zoom: 1 },
    labels: [
      { x: 944, y: 400, text: "Vollinger's Meeting Place - Basement", description: "", category: "waypoint", targetMapFilename: "Vollinger’s Meeting Place - Basement" },
    ],
  },
  {
    filename: "ArcanumBase/WolfCave.png",
    displayName: "Wolf Cave",
    modGroup: "Other locations",
    typemap: "local",
    // music: "music/wilderness.flac", No music here it seems
    //defaultView: { x: 852, y: 617, zoom: 1 },
    labels: [],
  },

/// SUBMAPS
  {
    filename: "ArcanumBase/AncientTempleLevel1.png",
    displayName: "Ancient Temple - Underground",
    modGroup: "Arcanum",
    typemap: "local",
    //defaultView: { x: 761, y: 1163, zoom: 1 },
    parentFilename: "ArcanumBase/AncientTemple.png",
    background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/Ashbury-Castle1.png",
    displayName: "Ashbury Castle - Level 1",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 761, y: 1163, zoom: 1 },
    parentFilename: "ArcanumBase/Ashburysmall.jpg",
    background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/Ashbury-Crematorium1.png",
    displayName: "Ashbury Crematorium - Level 1",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 618, y: 419, zoom: 1 },
    parentFilename: "ArcanumBase/Ashburysmall.jpg",
    background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/Ashbury-Crematorium2.png",
    displayName: "Ashbury Crematorium - Level 2",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 1339, y: 1240, zoom: 1 },
    parentFilename: "ArcanumBase/Ashburysmall.jpg",
    background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/Ashbury-Crematorium3.png",
    displayName: "Ashbury Crematorium - Level 3",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 322, y: 641, zoom: 1 },
    parentFilename: "ArcanumBase/Ashburysmall.jpg",
    background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/Ashbury-ScienticiansUnderground.png",
    displayName: "Scienticians Underground",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 655, y: 408, zoom: 1 },
    parentFilename: "ArcanumBase/Ashburysmall.jpg",
    background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/TheBlackMountainMinesEntrance.jpg",
    displayName: "The Black Mountain Mines - Entrance",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    //defaultView: { x: 108, y: 614, zoom: 1 },
    parentFilename: "ArcanumBase/TheBlackMountainMines.png",
    labels: [],
  },
  {
    filename: "ArcanumBase/Black.Mountain.Mines_01.jpg",
    displayName: "The Black Mountain Mines - Level 1",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    defaultView: { x: 108, y: 614, zoom: 1 },
    parentFilename: "ArcanumBase/TheBlackMountainMines.png",
    labels: [],
  },
  {
    filename: "ArcanumBase/Black.Mountain.Mines_02.jpg",
    displayName: "The Black Mountain Mines - Level 2",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    defaultView: { x: 773, y: 405, zoom: 1 },
    parentFilename: "ArcanumBase/TheBlackMountainMines.png",
    labels: [],
  },
  {
    filename: "ArcanumBase/Black.Mountain.Mines_03.jpg",
    displayName: "The Black Mountain Mines - Level 3",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    defaultView: { x: 1254, y: 941, zoom: 1 },
    parentFilename: "ArcanumBase/TheBlackMountainMines.png",
    labels: [],
  },
  {
    filename: "ArcanumBase/Caladon-Sewers.jpg",
    displayName: "Caladon - Sewers",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: {},
    background: "#000000",
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [
      { x: 2245, y: 341, text: "Caladon", description: "", category: "waypoint", targetMapFilename: "Caladon", targetX: 4353, targetY: 1328}, // In front of Panarii
      { x: 3690, y: 819, text: "Caladon", description: "", category: "waypoint", targetMapFilename: "Caladon", targetX: 8236, targetY: 1540},
      { x: 2753, y: 356, text: "Caladon", description: "", category: "waypoint", targetMapFilename: "Caladon", targetX: 6300, targetY: 978}, // In front of Museum
      { x: 3265, y: 1347, text: "Caladon", description: "", category: "waypoint", targetMapFilename: "Caladon", targetX: 7480, targetY: 2591},
      { x: 2326, y: 1784, text: "Caladon", description: "", category: "waypoint", targetMapFilename: "Caladon", targetX: 5742, targetY: 3327},
      { x: 2148, y: 1103, text: "Caladon", description: "", category: "waypoint", targetMapFilename: "Caladon", targetX: 5602, targetY: 2270},

      { x: 2142, y: 333, text: "Panarii Temple Catacombs", description: "", category: "waypoint", targetMapFilename: "Panarii Temple Catacombs"},
      { x: 1860, y: 603, text: "Panarii Temple Catacombs", description: "", category: "waypoint", targetMapFilename: "Panarii Temple Catacombs"},

      { x: 3580, y: 891, text: "Arcane Chest", description: "", category: "chest" },
      { x: 3798, y: 880, text: "Arcane Chest", description: "", category: "chest" },

      { x: 3560, y: 888, text: "Vincent", description: "", category: ["quest", "npc"] },
      { x: 2426, y: 999, text: "Half Ogre Bandit", description: "The corpse contains some Magick loot, notably Boots of the Dark Toll.", category: "information" },
    ],
  },
  {
    filename: "ArcanumBase/Caladon-CastleMainFloor.jpg",
    displayName: "Caladon - Castle Main Floor",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/Caladon-CastleUpstairs.jpg",
    displayName: "Caladon - Castle Upstairs",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/Caladon-CastleDownstairs.jpg",
    displayName: "Caladon - Castle Downstairs",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/Caladon-CastleVents.jpg",
    displayName: "Caladon - Castle Vents",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/Caladon-GuardhouseBasement.png",
    displayName: "Caladon - Guardhouse Basement",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/CaladonHighSecurityPrison.png",
    displayName: "High Security Prison",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/Caladon-MafiaUnderground.png",
    displayName: "Caladon - Mafia Underground",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    defaultView: { x: 429, y: 598},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [
      { x: 429, y: 598, text: "Caladon", description: "", category: "waypoint", targetMapFilename: "Caladon", targetX: 5883, targetY: 1959},
    ],
  },
  {
    filename: "ArcanumBase/Caladon-PanariiTemple.png",
    displayName: "Caladon - Panarii Temple Level 1",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/Caladon-PanariiTempleLevel2.png",
    displayName: "Caladon - Panarii Temple Level 2",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/Caladon-PanariiTempleLevel3.png",
    displayName: "Caladon - Panarii Temple Level 3",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/CaladonTempleCatacombs.png",
    displayName: "Panarii Temple Catacombs",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/Caladon-SandersBasement.png",
    displayName: "Caladon - Sanders Basement",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/CaladonTrapDisarmDungeon.png",
    displayName: "Trap Disarm Dungeon",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    defaultView: {},
    parentFilename: "ArcanumBase/Caladonsmall.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/CrashSite-Cave.png",
    displayName: "Crash Site - Cave",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 266, y: 583, zoom: 1 },
    music: "music/mines.flac",
    parentFilename: "ArcanumBase/CrashSite.jpg",
    background: "#000000",
    labels: [
      { x: 234, y: 629, text: "Crash Site", description: "", category: "waypoint", targetMapFilename: "Crash Site", targetX: 3239, targetY: 894},
      { x: 360, y: 191, text: "Charles Brehgo", description: "", category: ["quest", "npc"],
          linkedLabels: [
            { questName: "Quest: The Priest and the Bandit (Part I)", questDescription: "The cursed spirit of Charles Brehgo has implored me to kill the priest who cursed him, Arbalah. It is his belief that if I kill Arbalah, he will be released from the curse.", target: "Arbalah" },
            { questName: "Quest: The Priest and the Bandit (Part III)", questDescription: "Return to Brehgo's spirit in the Crash Site Cave and demand that he tell you where Fahrkus is. Trick him into thinking Arbalah will release the curse if he helps you.", target: "Simon Fahrkus" }
          ],
      },
    ],
  },
  {
    filename: "ArcanumBase/DernholmCastle.png",
    displayName: "Dernholm Castle",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 704, y: 944, zoom: 1 },
    background: "#000000",
    parentFilename: "ArcanumBase/Dernholm.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/DernholmPits.png",
    displayName: "Dernholm Pits",
    modGroup: "Arcanum",
    typemap: "local",
    defaultView: { x: 338, y: 1307, zoom: 1 },
    background: "#000000",
    parentFilename: "ArcanumBase/Dernholm.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/DungeonOfTheDragonPoolLevel1.png",
    displayName: "Dungeon of the Dragon Pool - Level 1",
    modGroup: "Arcanum",
    typemap: "local",
    //defaultView: { x: 338, y: 1307, zoom: 1 },
    background: "#000000",
    parentFilename: "ArcanumBase/DungeonOfTheDragonPool.jpg",
    labels: [],
  },
    {
    filename: "ArcanumBase/DungeonOfTheDragonPoolLevel2.png",
    displayName: "Dungeon of the Dragon Pool - Level 2",
    modGroup: "Arcanum",
    typemap: "local",
    //defaultView: { x: 338, y: 1307, zoom: 1 },
    background: "#000000",
    parentFilename: "ArcanumBase/DungeonOfTheDragonPool.jpg",
    labels: [],
  },
  {
    filename: "ArcanumBase/ElvenRuinsUnderground.png",
    displayName: "Elven Ruins - Underground",
    modGroup: "Arcanum",
    typemap: "local",
    //defaultView: { x: 761, y: 1163, zoom: 1 },
    parentFilename: "ArcanumBase/ElvenRuins.png",
    background: "#000000",
    labels: [],
  },
  {
    filename: "ArcanumBase/IronClan_Gate.jpg",
    displayName: "Iron Clan - Gate",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    defaultView: { x: 3168, y: 1742, zoom: 1 },
    parentFilename: "ArcanumBase/SecretEntranceToTheIronClan.png",
    labels: [],
  },
  {
    filename: "ArcanumBase/IronClan_ThroneHall.jpg",
    displayName: "Iron Clan - Throne Hall",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    defaultView: { x: 3972, y: 1642, zoom: 1 },
    parentFilename: "ArcanumBase/SecretEntranceToTheIronClan.png",
    labels: [],
  },
  {
    filename: "ArcanumBase/RoseboroughInn.png",
    displayName: "Roseborough Inn",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    //defaultView: { x: 3972, y: 1642, zoom: 1 },
    parentFilename: "ArcanumBase/Roseboroughsmall.jpg",
    labels: [],
  },  
  {
    filename: "ArcanumBase/ShroudedHillsTemple.png",
    displayName: "Panarii Temple",
    modGroup: "Arcanum",
    typemap: "local",
    music: "music/mines.flac",
    background: "#000000",
    defaultView: { x: 545, y: 599, zoom: 1 },
    parentFilename: "ArcanumBase/ShroudedHillssmall.jpg",
    labels: [
      { x: 545, y: 599, text: "Shrouded Hills", description: "", category: "waypoint" , targetMapFilename: "Shrouded Hills", targetX: 5914, targetY: 3147},
    ],
  },
  {
    filename: "ArcanumBase/ShroudedHillsBessieToone.png",
    displayName: "Bessie Toone Mine",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    defaultView: { x: 1697, y: 805, zoom: 1 },
    parentFilename: "ArcanumBase/ShroudedHillssmall.jpg",
    labels: [
      { x: 1697, y: 805, text: "Shrouded Hills", description: "", category: "waypoint" , targetMapFilename: "Shrouded Hills", targetX: 2179, targetY: 3272},
    ],
  },

  {
    filename: "ArcanumBase/StillwaterGiantsCave.png",
    displayName: "Stillwater Giants Cave",
    modGroup: "Arcanum",
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
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    parentFilename: "ArcanumBase/Stillwater.jpg",
    labels: [
      { x: 841, y: 739, text: "Stillwater", description: "", category: "waypoint", targetMapFilename: "Stillwater", targetX: 1681, targetY: 633 },
      { x: 394, y: 202, text: "Rescue Cyrus (Part III)", description: "", category: ["quest", "npc"] },
    ]
  },
  {
    filename: "ArcanumBase/Tarant-BatesTunnel.png",
    displayName: "Bates Tunnel",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/Tarant.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/TarantBatesMansionLevel1.png",
    displayName: "Bates Mansion Level 1",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/Tarant.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/TarantBatesMansionLevel2.png",
    displayName: "Bates Mansion Level 2",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/Tarant.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/TarantCityHall.png",
    displayName: "Tarant City Hall",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/Tarant.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/Tarant_02.jpg",
    displayName: "Tarant New Sewers",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/Tarant.png",
    background: "#000000",
    labels: [
      { x: 1202, y: 863, text: "Tarant", description: "", category: "waypoint" },
      { x: 2023, y: 1108, text: "Tarant", description: "", category: "waypoint" },
      { x: 2044, y: 997, text: "Tarant", description: "", category: "waypoint" },
      { x: 2235, y: 529, text: "Tarant", description: "", category: "waypoint" },
    ]
  },
  {
    filename: "ArcanumBase/Tarant_03.jpg",
    displayName: "Tarant Old Sewers",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
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
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/Tarant.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/TarantPSchuylersLevel2.png",
    displayName: "P. Schuyler & Sons - Level 2",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/Tarant.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/TarantPSchuylersLevel3.png",
    displayName: "P. Schuyler & Sons - Level 3",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/Tarant.png",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/TheLairofBellerogrimEntrance.jpg",
    displayName: "The Lair of Bellerogrim - Entrance",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/TheLairofBellerogrim.png",
    labels: []
  },  
  {
    filename: "ArcanumBase/TheLairofBellerogrimUnderground.png",
    displayName: "The Lair of Bellerogrim - Underground",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    parentFilename: "ArcanumBase/TheLairofBellerogrim.png",
    labels: []
  },
  {
    filename: "ArcanumBase/ThePlaceOfLostVoicesEntrance.png",
    displayName: "The Place of Lost Voices - Entrance",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/ThePlaceOfLostVoices.jpg",
    labels: []
  },
  {
    filename: "ArcanumBase/TsenAngEntrance.png",
    displayName: "T'sen-Ang Entrance",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/TsenAng.png",
    labels: []
  },
  {
    filename: "ArcanumBase/TsenAngMinGoradChamber.png",
    displayName: "Min Gorad Chamber",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    parentFilename: "ArcanumBase/TsenAng.png",
    labels: []
  },
  {
    filename: "ArcanumBase/Tulla_02.jpg",
    displayName: "Simeons Chamber",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    parentFilename: "ArcanumBase/Tullasmall.jpg",
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
    filename: "ArcanumBase/WheelClanMainHall.jpg",
    displayName: "Wheel Clan - Main Hall",
    modGroup: "Arcanum",
    typemap: "local",
    background: "#000000",
    parentFilename: "ArcanumBase/WheelClan.png",
    labels: []
  },
  {
    filename: "ArcanumBase/Vendigroth.Ruins_02.jpg",
    displayName: "Vendigroth Ruins - Level 1",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/VendigrothRuinssmall.jpg",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/Vendigroth.Ruins_04.jpg",
    displayName: "Vendigroth Ruins - Level 2",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/VendigrothRuinssmall.jpg",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/Vendigroth.Ruins_03.jpg",
    displayName: "Vendigroth Ruins - Velorien's Altar",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/VendigrothRuinssmall.jpg",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/Vendigroth.Ruins_05.jpg",
    displayName: "Vendigroth Ruins - Laboratory",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/VendigrothRuinssmall.jpg",
    background: "#000000",
    labels: []
  },
  {
    filename: "ArcanumBase/VollingersMeetingPlaceBasement.png",
    displayName: "Vollinger’s Meeting Place - Basement",
    modGroup: "Arcanum",
    typemap: "local",
    //defaultView: { x: 761, y: 1163, zoom: 1 },
    parentFilename: "ArcanumBase/VollingersMeetingPlace.png",
    background: "#000000",
    labels: [
      { x: 506, y: 200, text: "Mystic Chest", description: "", category: "chest" },
      { x: 117, y: 162, text: "Vollinger's Meeting Place", description: "", category: "waypoint", targetMapFilename: "Vollinger’s Meeting Place", targetX: 944, targetY: 400 },
    ],
  },
  {
    filename: "ArcanumBase/WheelClanCommecialDistrict.jpg",
    displayName: "Wheel Clan - Commercial District",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/WheelClan.png",
    labels: []
  },
  {
    filename: "ArcanumBase/WheelClanMine.jpg",
    displayName: "Wheel Clan - Mine",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/WheelClan.png",
    labels: []
  },
  {
    filename: "ArcanumBase/WheelClanThroneHall.jpg",
    displayName: "Wheel Clan - Throne Hall",
    modGroup: "Arcanum",
    typemap: "local",
    parentFilename: "ArcanumBase/WheelClan.png",
    labels: []
  },
  {
    filename: "ArcanumBase/WolfCaveInside.png",
    displayName: "Wolf Cave - Inside",
    modGroup: "Arcanum",
    typemap: "local",
    //defaultView: { x: 761, y: 1163, zoom: 1 },
    parentFilename: "ArcanumBase/WolfCave.png",
    background: "#000000",
    labels: [],
  },

/// CE RESTORED

  {
    filename: "Arcanum CE Restored/OldBlindMaster.png",
    displayName: "Old Blind Master",
    modGroup: "Arcanum CE Restored",
    typemap: "local",
    labels: []
  },
  {
    filename: "Arcanum CE Restored/FanGraveyard.png",
    displayName: "Fan Graveyard",
    modGroup: "Arcanum CE Restored",
    typemap: "local",
    defaultView: { x: 1922, y: 280, zoom: 1 },
    labels: []
  },

/// FORGOTTEN PLACES

  {
    filename: "Forgotten Places/ForgottenPlaces-AcereraksTombOutside.png",
    displayName: "Acererak's Tomb",
    modGroup: "Forgotten Places",
    typemap: "local",
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-BigWoodsLodge.png",
    displayName: "Big Woods Lodge",
    modGroup: "Forgotten Places",
    typemap: "local",
    defaultView: { x: 970, y: 1098, zoom: 1},
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-Cotswold.png",
    displayName: "Cotswold",
    modGroup: "Forgotten Places",
    typemap: "local",
    defaultView: { x: 865, y: 1028, zoom: 1},
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-Leahbo.jpg",
    displayName: "Leahbo",
    modGroup: "Forgotten Places",
    typemap: "local",
    defaultView: { x: 865, y: 1028, zoom: 1},
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-Lynchbany.jpg",
    displayName: "Lynchbany",
    modGroup: "Forgotten Places",
    typemap: "local",
    defaultView: { x: 2761, y: 2824, zoom: 1},
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-Marsyona.png",
    displayName: "Marsyona",
    modGroup: "Forgotten Places",
    typemap: "local",
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-MerchantsFair.png",
    displayName: "Merchant's Faire",
    modGroup: "Forgotten Places",
    typemap: "local",
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-TempterOfFate.png",
    displayName: "The Tempter of Fate",
    modGroup: "Forgotten Places",
    typemap: "local",
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-TheCavernOfMadness.png",
    displayName: "The Cavern of Madness",
    modGroup: "Forgotten Places",
    typemap: "local",
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-Vaselan.png",
    displayName: "Vaselan",
    modGroup: "Forgotten Places",
    typemap: "local",
    labels: []
  },
  {
    filename: "Forgotten Places/ForgottenPlaces-WellOfLostSouls.jpg",
    displayName: "Well of Lost Souls",
    modGroup: "Forgotten Places",
    typemap: "local",
    defaultView: { x: 8550, y: 2796, zoom: 1},
    labels: []
  },

/// MODULES
  {
    filename: "Modules/BuriedSecrets.jpg",
    displayName: "Buried Secrets",
    modGroup: "Buried Secrets",
    typemap: "local",
    //defaultView: { x: 2085, y: 706, zoom: 0.8},
    //background: "url('Textures/Water.png') repeat",
    labels: []
  },
  {
    filename: "Modules/Hellgate.png",
    displayName: "Hellgate",
    modGroup: "Hellgate",
    typemap: "local",
    //defaultView: { x: 2085, y: 706, zoom: 0.8},
    background: "#000000",
    labels: []
  },
  {
    filename: "Modules/Hellgate-Cave.png",
    displayName: "Hellgate - Cave",
    modGroup: "Hellgate",
    typemap: "local",
    //defaultView: { x: 2085, y: 706, zoom: 0.8},
    background: "#000000",
    labels: []
  },
  {
    filename: "Modules/TombTolGurdurCity.jpg",
    displayName: "City",
    modGroup: "Tomb of Tol Gurdur",
    typemap: "local",
    defaultView: { x: 901, y: 531, zoom: 0.8},
    labels: [
      { x: 2691, y: 1761, text: "Teleport to Underground", description: "", category: "waypoint", targetMapFilename: "Underground"},
    ]
  },
  {
    filename: "Modules/TombTolGurdurUnderground.jpg",
    displayName: "Underground",
    modGroup: "Tomb of Tol Gurdur",
    typemap: "local",
    defaultView: { x: 3890, y: 2352, zoom: 0.8},
    background: "#000000",
    labels: []
  },
  {
    filename: "Modules/TreasureIsland.jpg",
    displayName: "Treasure Island",
    modGroup: "Treasure Island",
    typemap: "local",
    background: "url('Textures/Water.png') repeat",
    labels: [
      { x: 5890, y: 595, text: "Shop", description: "", category: "shop" },

      { x: 2440, y: 697, text: "Recruit Henri", description: "Recruit Henri", category: "followers" },

      { x: 5577, y: 1506, text: "Recruit Henri", description: "Chateau de Be'ron Wine", category: "quest" },
      { x: 1743, y: 3160, text: "Treasure note", description: "", category: "quest" },
      { x: 1026, y: 1241, text: "Treasure note - Blue Star", description: "", category: "quest" },
      { x: 7392, y: 2112, text: "Treasure note - Spyglass", description: "", category: "quest" },
      { x: 4185, y: 1039, text: "Treasure note - Shovel", description: "", category: "quest" },
      { x: 2840, y: 2715, text: "Treasure note (I)", description: "The eagle's eye perched in the tree.", category: "quest" },
      { x: 3466, y: 2800, text: "Treasure note (II)", description: "At the foot of the skull...", category: "quest" },
      { x: 4059, y: 2800, text: "Treasure note (III)", description: "...41 paces across of the river.", category: "quest" },
      { x: 4590, y: 2801, text: "Treasure note (IV)", description: "15 paces toward Petra's Twins.", category: "quest" },

      { x: 5262, y: 1424, text: "Treasure Island Underground", description: "", category: "waypoint", targetMapFilename: "Treasure Island Underground", targetX: 2085, targetY: 706}, // A
      { x: 2392, y: 1704, text: "Treasure Island Underground", description: "", category: "waypoint", targetMapFilename: "Treasure Island Underground", targetX: 2327, targetY: 164}, // B
      { x: 1785, y: 3456, text: "Treasure Island Underground", description: "", category: "waypoint", targetMapFilename: "Treasure Island Underground", targetX: 2393, targetY: 1082}, // C      
      { x: 1980, y: 2651, text: "Treasure Island Underground", description: "", category: "waypoint", targetMapFilename: "Treasure Island Underground", targetX: 881, targetY: 891}, // D
      { x: 5604, y: 1559, text: "Treasure Island Underground", description: "", category: "waypoint", targetMapFilename: "Treasure Island Underground", targetX: 2007, targetY: 1355}, // E

      { x: 4113, y: 480, text: "Treasure Island", description: "", category: "waypoint", targetMapFilename: "Treasure Island", targetX: 3030, targetY: 837}, // F
      { x: 3030, y: 837, text: "Treasure Island", description: "", category: "waypoint", targetMapFilename: "Treasure Island", targetX: 4113, targetY: 480}, // F

      { x: 4590, y: 2549, text: "Treasure Location", description: "", category: "waypoint", targetMapFilename: "Treasure Island Underground", targetX: 169, targetY: 1250}, // Treasure

    ]
  },
  {
    filename: "Modules/TreasureUnderground.png",
    displayName: "Treasure Island Underground",
    modGroup: "Treasure Island",
    typemap: "local",
    defaultView: { x: 2085, y: 706, zoom: 0.8},
    background: "#000000",
    labels: [
      { x: 2085, y: 706, text: "Treasure Island", description: "", category: "waypoint", targetMapFilename: "Treasure Island", targetX: 5262, targetY: 1424}, // A
      { x: 2327, y: 164, text: "Treasure Island", description: "", category: "waypoint", targetMapFilename: "Treasure Island", targetX: 2392, targetY: 1704}, // B
      { x: 2393, y: 1082, text: "Treasure Island", description: "", category: "waypoint", targetMapFilename: "Treasure Island", targetX: 1785, targetY: 3456}, // C
      { x: 881, y: 891, text: "Treasure Island", description: "", category: "waypoint", targetMapFilename: "Treasure Island", targetX: 1980, targetY: 2651}, // D
      { x: 2007, y: 1355, text: "Treasure Island", description: "", category: "waypoint", targetMapFilename: "Treasure Island", targetX: 5604, targetY: 1559}, // E      
    ]
  },
  {
    filename: "Modules/Vormantown.jpg",
    displayName: "Vormantown",
    modGroup: "Vormantown",
    typemap: "local",
    //defaultView: { x: 2085, y: 706, zoom: 0.8},
    background: "url('Textures/Water.png') repeat",
    labels: []
  }
];