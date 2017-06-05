---
title: MCPE 1.0.5 TextPacket
permalink: /wiki/protocol/1.0.5/packets/text/
---
## Text Packet
//TODO: description

{:.table}
{:.table-bordered}
|Sent from client|true|
|Sent from server|true|

### Fields
//TODO: better descriptions

{:.table}
{:.table-bordered}
|Name|Type|
|----|----|
|type|byte|

### Variants

{:.table}
{:.table-bordered}
|Name|Field|Value|
|----|-----|-----|
|Raw|type|0|
|Chat|type|1|
|Translation|type|2|
|Popup|type|3|
|Tip|type|4|
|System|type|5|
|Whisper|type|6|

* Raw  
    
   A raw message that will be printed in the chat without any modifications.
  
   **Additional Fields:**  
     |Name|Type|
     |----|----|
     |message|string|
  
* Chat   

    A chat message sent by a player to the server. If it was sent from the server it will display as *<sender> message*.
  
**Additional Fields:**  
`sender: string`  
`message: string`
  
  * sender  
  The name of the player who sent the message.
    
  * message  
  The message that the player sent.

Packet Info from [PocketMine-MP](https://github.com/pmmp/PocketMine-MP).
