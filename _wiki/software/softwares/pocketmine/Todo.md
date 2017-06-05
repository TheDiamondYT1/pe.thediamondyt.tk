---
name: PocketMine-MP TODO List
permalink: /wiki/software/pocketmine/todo/
---
## PocketMine-MP TODO List
A compiled list of all things that arent currently implemented in PocketMine, but should be.  

---

#### Commands
 * Remove start and stop arguments from [TimeCommand.php](https://github.com/pmmp/PocketMine-MP/blob/api3/blocks/src/pocketmine/command/defaults/TimeCommand.php#L49#L74)
 * Give command overflow handling ([GiveCommand.php#L88](https://github.com/pmmp/PocketMine-MP/blob/api3/blocks/src/pocketmine/command/defaults/GiveCommand.php#L88))
 
##### To implement
 * /clear [player: target] [itemName: string] [data: int] [maxCount: int]
 * /clone \<begin: x y z> \<end: x y z> \<destination: x y z> [maskMode: string] [cloneMode: string] [tileName: string] [tileData: int]
 * /execute 
   * \<origin: target> \<position: x y z> \<command: string>
   * \<origin: target> \<position: x y z> \<detect: string> \<detectPos: x y z> \<detectBlock: string> \<detectData: int> \<command: string>
 * /fill \<from: x y z> \<to: x y z> \<tileName: string> [tileData: int] [oldBlockHandling: string] [replaceTileName: string] [replaceDataValue: int]
 * /gamerule 
   * \<rule: string> \<value: bool>
   * \<rule: string> \<value: int>
   * \<rule: string>
 * /locate \<feature: string>
 * /playsound \<sound: string> \<player: target> [position: x y z] [volume: float] [pitch: float] [minimumVolume: float]
 * /stopsound \<sound: string>
 * /summon \<entityType: string> [spawnPos: x y z]
 * /setblock \<position: x y z> \<tileName: string> [tileData: int] [oldBlockHandling: string]
 * /spreadplayers
 * /testfor \<victim: target>
 * /testforblock \<position: x y z> \<tileName: string> [dataValue: int]
 * /testforblocks
 * /replaceitem 
   * \<block: string> \<position: x y z> \<slotType: string> \<slotId: int> \<itemName: string> [amount: int] [data: int]
   * \<entity: string> \<target: target> \<slotType: string> \<slotId: int> \<itemName: string> [amount: int] [data: int]
 * /xp \<amount: int> \<target: target>
 
---
 
#### Blocks
 * Redstone is not implemented
 * Double plants arent implemented ([#882](https://github.com/pmmp/PocketMine-MP/issues/882))
 * Implement block bounding boxes and collision boxes ([#169](https://github.com/pmmp/PocketMine-MP/issues/169))
 * Add nether portals ([FlintSteel.php#L40](https://github.com/pmmp/PocketMine-MP/blob/api3/blocks/src/pocketmine/item/FlintSteel.php#L40))
 * Farmland doesnt get turned back to dirt when jumped on
 * Dead bush can be placed on any block.
 * Add enchantment table lock

---
 
#### World
 * Add support for limited worlds ([LevelDB.php#L151](https://github.com/pmmp/PocketMine-MP/blob/api3/blocks/src/pocketmine/level/format/io/leveldb/LevelDB.php#L151))
 * Add emerald to mountain biome ([MountainBiome.php#L41](https://github.com/pmmp/PocketMine-MP/blob/api3/blocks/src/pocketmine/level/generator/normal/biome/MountainsBiome.php#L41))
 * Add world height options ([Anvil.php#L160](https://github.com/pmmp/PocketMine-MP/blob/api3/blocks/src/pocketmine/level/format/io/region/Anvil.php#L160))
 * Build height limit messages for custom world heights ([(Level.php#1708](https://github.com/pmmp/PocketMine-MP/blob/api3/blocks/src/pocketmine/level/Level.php#L1708))
 * Decrease light level by time of day ([Level.php#1297](https://github.com/pmmp/PocketMine-MP/blob/api3/blocks/src/pocketmine/level/Level.php#L1297))
 * Implement `LastUpdate` and `InheritedTime` tags in all level providers ([Anvil.php#L47#L48](https://github.com/pmmp/PocketMine-MP/blob/api3/blocks/src/pocketmine/level/format/io/region/Anvil.php#L47#L48)), ([McRegion.php#L61#L62](https://github.com/pmmp/PocketMine-MP/blob/api3/blocks/src/pocketmine/level/format/io/region/McRegion.php#L61#L62))
 * Make light updates asynchronous.
 
---
  
#### Entities
 * Add the ability to sheer sheep ([Sheers.php#L49](https://github.com/pmmp/PocketMine-MP/blob/api3/blocks/src/pocketmine/item/Shears.php#L49))
 * Add lingering potions
 * Add lightning checks to EntityDamageEvent ([EntityDamageEvent.php#L152](https://github.com/pmmp/PocketMine-MP/blob/api3/blocks/src/pocketmine/event/entity/EntityDamageEvent.php#L152))
 * Add power and flame enchantment effects to bows.
 * Implement inverse effects for undead mobs ([Effect.php#L313](https://github.com/pmmp/PocketMine-MP/blob/api3/blocks/src/pocketmine/entity/Effect.php#L313))
 * Add effect particles for witch spell ([#L393](https://github.com/pmmp/PocketMine-MP/blob/api3/blocks/src/pocketmine/entity/Effect.php#L393))
 * Vehicle collision events, when they are implemented ;) ([Entity.php#L1608](https://github.com/pmmp/PocketMine-MP/blob/api3/blocks/src/pocketmine/entity/Entity.php#L1608))
 
---
 
#### Bugs
 * Players in spectater mode can shoot bows ([#852](https://github.com/pmmp/PocketMine-MP/issues/852))
 * Poorly coded NBT library is really slow ([#466](https://github.com/pmmp/PocketMine-MP/issues/466))
 * Command usage output is incorrect on the client ([#236](https://github.com/pmmp/PocketMine-MP/issues/236))
 * Torches cannot be placed on top of some blocks ([#458](https://github.com/pmmp/PocketMine-MP/issues/458))
 * Players can fall up to 5 blocks without taking fall damage ([#891](https://github.com/pmmp/PocketMine-MP/issues/891))
 * Effects can be given to non-living entity classes ([#886](https://github.com/pmmp/PocketMine-MP/issues/886))
 * Players position not updating for others on teleport ([#921](https://github.com/pmmp/PocketMine-MP/issues/921))
 
---
 
#### Other
 * Write documentation for all functions
 * Typehint more functions
 * Add missing fields to RakNet broadcast name 
   * Server ID: long
   * World Name: string
   * Game Type: string
 * Rewrite translation system to use sprintf and support for vanilla language files ([#207 (comment)](https://github.com/pmmp/PocketMine-MP/issues/207#issuecomment-280027871))
 * Check if player is swimming and apply exhaustion ([Player.php#L1597](https://github.com/pmmp/PocketMine-MP/blob/api3/blocks/src/pocketmine/Player.php#L1597))
 * Add eating sounds ([Player.php#L2271](https://github.com/pmmp/PocketMine-MP/blob/api3/blocks/src/pocketmine/Player.php#L2271))
 * Move inventory data to JSON ([InventoryType.php#L64](https://github.com/pmmp/PocketMine-MP/blob/api3/blocks/src/pocketmine/inventory/InventoryType.php#L64))
 * Add JWT encryption for Xbox Live login
 
---
 
#### Work in Progress
 * Weather ([PR #460](https://github.com/pmmp/PocketMine-MP/pull/460))
 
