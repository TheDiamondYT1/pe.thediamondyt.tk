---
title: MCPE 1.0.5 SetTimePacket
permalink: /wiki/protocol/1.0.5/packets/settime/
---
## Set Time Packet
//TODO: description

{:.table}
{:.table-bordered}
|Sent from client|false|
|Sent from server|true|

### Fields

{:.table}
{:.table-bordered}
|Name|Type|Description|
|----|----|-----------|
|Time|signed varint|The world time|
|Started|bool|If time is frozen or not|

Packet Info from [PocketMine-MP](https://github.com/pmmp/PocketMine-MP).
