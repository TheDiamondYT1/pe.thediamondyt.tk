---
title: MCPE 1.0.5 Protocol
permalink: /wiki/protocol/1.0.5/
---
## MCPE 1.0.5 Protocol  
Tip: Use CTRL+F or your browsers page search feature to easily find the packet you want.  
   
{:.table}
{:.table-bordered}
|Protocol Number|105|
|Version Number|1.0.5.0|
|Version Name|v1.0.5.0 beta|
   
### Whats new?
The following packets are new to this version of Minecraft PE:  

* Block Pick Request
* Command Block Update
* Play Sound
* Stop Sound
* Set Title
   
   
### Packets

{:.table}
{:.table-bordered}
|Name|ID|
|----|--|
|[Login](packets/login)|0x01|
|[Play Status](packets/playstatus)|0x02|
|Server to Client Handshake|0x03|
|Client to Server Handshake|0x04|
|[Disconnect](packets/disconnect)|0x05|
|Batch|0x06|
|Resource Packs Info|0x07|
|Resource Pack Stack|0x08|
|Resource Pack Client Response|0x09|
|Add Item Entity|0x10|
|Add Hanging Entity|0x11|
|Take Item Entity|0x12|
|Move Entity|0x13|
|Move Player|0x14|
|Rider Jump|0x15|
|Remove Block|0x16|
|Update Block|0x17|
|Add Painting|0x18|
|Explode|0x19|
|Mob Equipment|0x20|
|Mob Armor Equipment|0x21|
|Interact|0x22|
|Block Pick Request|0x23|
|Use Item|0x24|
|Player Action|0x25|
|Player Fall|0x26|
|Hurt Armor|0x27|
|Set Entity Data|0x28|
|Set Entity Motion|0x29|
|Inventory Action|0x30|
|Container Open|0x31|
|Container Close|0x32|
|Container Set Slot|0x33|
|Container Set Data|0x34|
|Container Set Content|0x35|
|Crafting Data|0x36|
|Crafting Event|0x37|
|Adventure Settings|0x38|
|Block Entity Data|0x39|
|Player List|0x40|
|Telemetry Event|0x41|
|Spawn Experience Orb|0x42|
|Map Item Data|0x43|
|Map Info Request|0x44|
|Request Chunk Radius|0x45|
|Chunk Radius Updated|0x46|
|Item Frame Drop Item|0x47|
|Replace Selected Item|0x48|
|Game Rules Changed|0x49|
|Command Block Update|0x50|
|Update Trade|0x51|
|Resource Pack Data Info|0x52|
|Resource Pack Chunk Data|0x53|
|Resource Pack Chunk Request|0x54|
|Transfer|0x55|
|Play Sound|0x56|
|Stop Sound|0x57|
|Set Title|0x58|
|[Text](packets/text)|0x0a|
|[Set Time](packets/settime)|0x0b|
|Start Game|0x0c|
|Add Player|0x0d|
|Add Entity|0x0e|
|Remove Entity|0x0f|
|Level Sound Event|0x1a|
|Level Event|0x1b|
|Block Event|0x1c|
|Entity Event|0x1d|
|Mob Effect|0x1e|
|Update Attributes|0x1f|
|Set Entity Link|0x2a|
|Set Health|0x2b|
|Set Spawn Position|0x2c|
|Animate|0x2d|
|Respawn|0x2e|
|Drop Item|0x2f|
|Player Input|0x3a|
|Full Chunk Data|0x3b|
|Set Commands Enabled|0x3c|
|Set Difficulty|0x3d|
|Change Dimension|0x3e|
|Set Player Game Type|0x3f|
|Camera|0x4a|
|Add Item|0x4b|
|Boss Event|0x4c|
|Show Credits|0x4d|
|Available Commands|0x4e|
|Command Step|0x4f|
  
  
Packet IDs from [PocketMine-MP](https://github.com/pmmp/PocketMine-MP).
