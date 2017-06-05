---
title: MCPE 1.0.5 PlayStatusPacket
permalink: /wiki/protocol/1.0.5/packets/playstatus/
---
## Play Status Packet
//TODO: description

{:.table}
{:.table-bordered}
|Sent from client|false|
|Sent from server|true|

### Status

{:.table}
{:.table-bordered}
|Name|ID|Description|
|----|--|-----------|
|Success|0|Everything is good|
|Failed Client|1|The client is outdated|
|Failed Server|2|The server is outdated|
|Player Spawn|3|If the player has spawned|
|Invalid Tenant|4|**TODO**|
|Version Mismatch|5|**TODO**|

### Fields

{:.table}
{:.table-bordered}
|Name|Type|Description|
|----|----|-----------|
|Server Status|int|The server status. Values stated above.|

Packet Info from [PocketMine-MP](https://github.com/pmmp/PocketMine-MP).
