import * as React from "react";
import Box from "@mui/material/Box";

import FeatureCard from "../../components/FeatureCard";

export default function MainBar() {
  // const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <FeatureCard
        title="Creating Account"
        sectionText1="To create a new account in our game you need to download our Launcher from website or Discord. It will download the newest version of a game client (based on Otclient). We are not describing RA in terms of Tibia's protocols, this is a custom experience."
        sectionText2="After downloading and installing the client, you can proceed to account creation, please see below. Just remember that we use two different accounts for European and American servers."
        image="/images/create_account1.png"
        image2="/images/create_account2.png"
        imageWidth="600"
      ></FeatureCard>

      <FeatureCard
        title="Ranger's Arcani World"
        sectionText1="There are few key areas in Ranger's Arcani world. Your character was born in Galia, which was raided by barbarians from Skandia. To save yourself from a terrible fate, you decided to flee to the east in search of safety. That's how you discovered Main Continent surrounded by many different islands. You start the game in the Chaeck, part of Cirith Kingdom."
        sectionText2=" Initially you want to get help for your homeland from the people of the Main Continent, but you quickly realize that it's not that simple and you will probably stay here for a long time, starting a new life. It's up to you how it turns out, you can become a lonely wanderer, a polite gentleman who helps people in need or a member of a thriving guild that aims to support its own members whatever the situation. Below you can see what the game world looks like."
        firstFlexValue="3"
        image="/images/ra_map.png"
        imageWidth="500"
      ></FeatureCard>

      <FeatureCard
        title="Gameplay basics"
        sectionText1="In Ranger's Arcani you can choose from 3 different vocations: mage, hunter or mercenary. Mage is a person who is great at controlling the elements, his basic weapons are wands that shoot projectiles at enemies, and of course various magic spells. Mage can become a supportive Druid or an offensive Wizard."
        sectionText2="Hunter on the other hand, specializes in ranged weapons that are not related to his mana, he combines strength and intelligence to solve his problems. Hunter can become a Grenadier, defensive range fighter with spear, grenades and shield or a fully range character Tracker who uses bows, crossbows and set up traps."
        sectionText3="Mercenary is a fearless monster slayer who fights in close combat. Mercenary can become a furious lifestealing Barbarian fighting without a shield, wielding two handed weapons or more careful Paladin hidden behind shield with his one handed weapons and holy spells."
      ></FeatureCard>

      <FeatureCard
        title="Skill and Spell system"
        sectionText1="Regardless of who you choose, you will have to make the next important choices regarding our skill system, which has replaced classic training. From now on, for each gained level you will receive a certain amount of skill points to invest according to your level. The picture above can help you find the most suitable skills for your profession."
        sectionText2="The same thing applies to our fully custom spells system, they can be learned and upgraded by spending special points. And of course you don't have to learn incantations, just simply click on a spell icon or use desired hotkey to cast a spell. To help you manage all spells we've designed a special spellbar (you can display your level, statuses, health and mana points there!)"
        image="/images/spells.png"
        imageWidth="600"
        inverse
      ></FeatureCard>

      <FeatureCard
        title="Runes and Charms"
        sectionText1="Runes in Ranger's Arcani are special stones providing passive bonuses for your character. Once you obtain them, you need to put them in special slots in your equipment. There are many secrets around the map telling you how to combine runes into rune words and those words will grant you even better bonuses! Of course if you're not satisfied with looted or purchased runes, you can grind them into rune powder."
        sectionText2="There is also a Charms system that lets you strengthen yourself against specific monsters, but firstly you need to collect Charms points for killing monsters."
        image="/images/runes1.png"
        image2="/images/runes.png"
        imageWidth="600"
      ></FeatureCard>

      <FeatureCard
        title="Forge, Smelter and Magazine"
        sectionText1="Lot of items gained during your play can be crafted or smelted. To smelt an item you just need to put it into Smelter, to craft an item in the Forge you need a special scroll with blueprint. "
        sectionText2="Smelting and looting give you crafting materials needed for crafting. Items and materials can have 5 different quality types: desolated, damaged, normal, perfect and legendary."
        sectionText3="You can also find unique items with special bonuses to spells but they're not craftable. All crafting materials can be stored in Magazine so they will not waste your space and capacity, but you need to be in protection zone to transfer them from your inventory."
        image="/images/smelt.png"
        image2="/images/smelt1.png"
        imageWidth="600"
      ></FeatureCard>

      <FeatureCard
        title="Chest system"
        sectionText1="You can obtain various chests form monsters, tasks, bosses or quests. Some of them let you roll runes, special backpacks or crafting materials. We've also got Achievements, rewards from them, unlike chests, are known in advance."
        image="/images/chest.png"
        image2="/images/chest1.png"
        imageWidth="600"
      ></FeatureCard>

      <FeatureCard
        title="Additional systems"
        sectionText1="Market system with BUY&SELL offers, few fast travel points, highscores table and functional house buying and management system (without auctions). Everything is integrated with our client ingame, that's why we do not litter our website with such information. During hunt you can also use our loot and damage analyzer and also bestiary tracker."
        image="/images/aditional.png"
        image2="/images/aditional1.png"
        imageWidth="600"
      ></FeatureCard>

      <FeatureCard
        title="Dungeon Generator"
        sectionText1="Apart from basic premade map, there is a dungeon generator. It is accesible after certain quest and it generates random dungeons based on prepared 'tiles'. It's up to you what kind of biome you want to visit, how hard it should be or how many friends you want to take with you!"
        image="/images/dungeon.png"
        imageWidth="500"
      ></FeatureCard>
      <FeatureCard
        title="Encyclopedia, Bestiary and Autoloot"
        sectionText1="To make it easier for you to understand the game, we're offering you an Encyclopedia. There is a lot of useful information. Starting with Bestiary - you can check monsters categories and after killing certain amount of monsters you will learn about their loot, weaknesses and strengths."
        sectionText2="In this section you are able to setup an Auto Loot system. Next part of Encyclopedia is an Item List. Just like Bestiary, items are grouped into categories and you can check all their details (even on different quality types). You can also sort them in many ways to find item that suits you best. At the bottom you will find monsters that drops your desired item and NPCs that will buy or sell it."
        image="/images/encyc1.png"
        image2="/images/encyc.png"
        imageWidth="600"
      ></FeatureCard>

      {/* <div style={{color: "white", marginBottom: 20}}>
        <iframe
          width="672"
          height="378"
          src="https://www.youtube.com/embed/miOPKz5qkLI"
          title="YouTube video player"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div>Explore the world and discover its secrets. </div>
        <div>Find high quality items </div>
        <div>Generate your own dungeon </div>
        <div>Complete daily tasks </div>
        <div>Use the runes to obtain buffs and complete rune words </div>
        <div>Unlock charms </div>
        <div>Complete bestiary </div>
        <div>Browser in game and market </div>
        <div>Smelt and craft items </div>
        <div>Upgrade your items up to +5 </div>
        <div>Collect daily rewards </div>
        <div>Kill daily boosted creatures and obtain more experience </div>
        <div>
          Kill monsters and create randomly dungeons and face their bosses{" "}
        </div>
        <div>Face daily bosses </div>
        <div>Discover quests and complete missions to get rewards </div>
      </div>
      <div style={{color: "white", marginTop: 20, marginBottom: 20}}>
        <div>Choose between 8 different classes:</div>
        <div>Barbarian </div>
        <div>Paladin </div>
        <div>Tracker </div>
        <div>Grenadier </div>
        <div>Wizard </div>
        <div>Druid </div>
        <div>Necromancer </div>
        <div>Engineer </div>
      </div> */}
      {/* <span className="cropped"></span> */}

      {/* <div className="relative">
          <img className="image" alt="logo" src="/images/gui_atlas.png" />
        </div> */}
    </Box>
  );
}
