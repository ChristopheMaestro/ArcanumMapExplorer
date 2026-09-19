# Arcanum CE Restored - Map Explorer

An interactive, responsive mapping utility and data visualizer for *Arcanum: Of Steamworks and Magick Obscura*. The Map Explorer does not includes just the base game content: it goes beyond, featuring the Community Edition - Restored version of the game content and a multitude of official and fan-made modules.

## Maps

Currently, the Map Explorer includes all maps of the base game, divided in cities, quest locations and other locations. 18 CE Restored maps are divided in new locations (2 maps) and Forgotten Places (16 maps). 8 maps from 5 modules (that each have their own category) are so far available. Maps are connected between each others with a system of waypoints. Some maps have the option to display alternative versions of the map (See, for example, Wheel Clan map: pressing the Wheel Clan Spectacles on the top right will display the gate).

Coordinates on the overworld map, or sub level maps, have in Arcanum's World Editor an option to "Generate town maps." This function then would hide the NPCs and split the given location into a series of 64x32 BMP images (stored in the /townmap/ folder of a given module) that were then used in the game's "maps" menu. Over the years, different modders have assembled these images to form large maps of locations.

For the Map Explorer, we took the decision to rather use in game screenshots, for the following reasons: 

* The townmap files are bound to what the game considers as being the limits of a location. But some quest/secret places, or little curiosities, are outside of these limits. A good example to observe that is to compare the map of the townmap version of the Isle of Despair (https://turanar.github.io/arcanum_map/townmap/Isle%20of%20Despair.html) against the version we are using (https://christophemaestro.github.io/ArcanumMapExplorer/#map=Isle+of+Despair&x=2744&y=2281&zoom=0.141).

* This also means that NPCs are visible. Obviously, as the screenshots were taken at a given moment of the progression in the game, some might not be visible.

Additionally, the music associated with the map is playing (and can be muted) when opening the said map.

## Labels

Over 1000 labels are displayed on top of the maps to indicate a variety of elements: waypoints, quests, shops, followers, NPC, etc.

* Portraits of NPCs are displayed, either following a specific portait file (used for followers) or according to their race. Sex, race, level are also indicated next to the portrait.

* Shops NPC display the type of shop they are, as well as the default markup they have. A warning precise if the markup is excessive or straight up scammy.

* Quests were given names and divided in multiple parts. Clicking on an NPC that gives a quest will also indicate the follow-up of the quest. A special menu can also be opened by pressing the "Quests" button on the top menu, displaying all the available quests of the currently opened map. If this menu is opened on the world map, it gives a list of all the quests of the game.

* If the inventory of an NPCs contains some magick/hexed, expensive, unique or quest items, it is listed in an "inventory" section of the label. Magick and hexed items are color coded (blue and orange). Clicking on a note, telegram, newspaper, schematic or book opens a display showing their content. 

* Altar labels indicates the God category and offers the possibility to see their plaque. They also displays the proper offering and blessing.

## Statistics

A function to display the statistics and list of NPCs, shops and followers of the currently open map and its submaps is available by pressing the "Statistics" button in the top menu.

This menu displays the name, sex, race, level and location of the said NPC. Pressing on a name sent you to its location.

## Library

A special menu, available with a button from the world map, gives you access to all written documents of Arcanum - books, notes, telegrams, etc.

## Toolkit

There is a bunch of Python scripts I coded to do some stuff for the Map Explorer that I stored in /toolkit/ - it's a bit of a mess, and I didn't clean their code, but basically there is a tool to extract data from .dat files, one to take series of screenshots and stitch them together (to automatically generate maps) and another one to divide large images into 500x500px chunks.

## File Structure & Data Layer Architecture

*   `Index.html` - The document structure containing the high-level tab layouts, control headers, coordinate HUD, editing panels, and sidebar drawers.
*   `styles.css` - Theme styles featuring an aesthetic tailored to the game's theme, absolute positional pins for multi-category overlays, and custom slide-out drawers.
*   `viewer.js` - The reactive core controlling event loop cycles, canvas pan calculations, custom state synchronization hooks, and active data layer filtering.
*   `arcanummaps.js` - Database containing coordinate data structures for the locations and labels of the base game.
*   `cerestoredmaps.js` - Same as arcanumaps.js, but for CE Restored data.
*   `modulesmaps.js` - Same as arcanummaps.js, but for modules.

## Data Scheme Specification

Geographic map registers accept objects matching the following strict JavaScript parameters:

```javascript
{
  filename: "Path/To/ResourceImage.jpg",
  displayName: "Location Name",
  modGroup: "Category Categorization Group",
  typemap: "overworld | local",
  music: "music/track.mp3",          // Optional target theme audio string
  background: "#000000",             // Optional viewport anchor clear color
  defaultView: { x: 1000, y: 1000, zoom: 1 }, 
  altView: {                         // Optional configuration for alterantive view (Wheel Clan, Iron Clan, etc.)
    icon: "Textures/Icon.png",
    image: "Path/To/AlternateImage.jpg"
  },
  labels: [
    {
      x: 500,
      y: 900,
      text: "Character/Object Title",
      description: "Descriptive string details.",
      category: ["npc", "shop", "quest", "followers", "waypoint", "key", "chest", "altar", "bounty"],
      
      // Optional Meta Fields
      sex: "male | female",
      race: "Human | Elf | Dwarf | Half-Orc | Gnome | Halfling",
      level: 30,
      portrait: "Textures/portrait.gif",
      
      // Shop Metadata Specifications
      shopType: "Blacksmith",
      shopMarkup: 110,               // Int values flag warning indicators (150%+, 200%+, 300%+)
      inventory: ["Item Name Simple", { name: "Magick Weapon", tier: "magick | hexed | regular", image: "path.png" }],
      
      // Waypoint Teleportation Parameters
      targetMapFilename: "Destination Display Name Reference",
      targetX: 1200,
      targetY: 450,
      
      // Linked Progression Paths
      linkedLabels: ["Other Label Reference String", { questName: "Quest Title", questDescription: "Details", target: "Label Anchor" }]
    }
  ]
}
```

## How to Add or Modify Labels

1.  Open the application interface and press the **Label Editor** button in the utility menu bar.
2.  Navigate to your target environment and click anywhere on the map to load exact coordinate markers.
3.  Fill out the contextual metadata configuration form within the sidebar editor window (e.g., set specific item tiers, item icons, or destination targets). Note that for the moment, certain options can't be setup directly in the label editor and might require some tinkering in the .js file.
4.  *Optional:* To adjust a marker's positioning, grab the pin directly in **Editor Mode** and drag it dynamically; the engine will update the precise tracking matrix coordinates in real-time.
5.  Click **Save Edits** to update your session layout, then click **Copy Edits** to copy the clean, formatted object structure directly to your clipboard for easy transfer into your source database files.

## Acknowledgments

* TechErrorCode - for all the work on Arcanum Community Edition - Restored, without which this tool could not have been done. Thanks for integrating options in it that allowed to extract the screenshots more easily, and overall for all the support!
* AnInsaneProfessional - for bombarding me with great ideas of functions (portraits, statistics, and many others!) :-) Also, thanks for the work on the Voice Over Project, big support for this project ^_^
* Stellastra - for providing all the notes and other written documents. Visit her project, the Library of Tarant: https://www.tumblr.com/15universitycourt/
* dar_duck - for the suggestion of adding the music function :-) Dar_duck is also developping a very ambitious module for Arcanum (Settlers of Cattan) that is worth to follow.
* Jen the Town Witch - for the full-scale location maps that we used extensively in the beginning of this project (before we replaced them with screenshot maps). 

And in general, a big thanks to the TechErrorCode Modding & Dev Discord community (join us! - https://discord.gg/FcaFpAFzbt) and all the super creative people on it that spend their days chatting on how to mod one of the best game ever released :-)
