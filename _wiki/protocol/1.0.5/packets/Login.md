---
title: MCPE 1.0.5 LoginPacket
permalink: /wiki/protocol/1.0.5/packets/login/
---
## Login Packet
The login packet is encoded with json encoded base64.

{:.table}
{:.table-bordered}
|Sent from client|true|
|Sent from server|false|

### Fields  
NOTE: The names of each field is the *exact* field name sent from the client.  
**Not all these fields may be correct.**
  
Click a field name for more info and examples.
    
### Data

{:.table}
{:.table-bordered}
|Name|Type|Description|
|----|----|-----------|
|exp|int|**TODO**|
|identityPublicKey|string|**TODO**|
|nbf|int|**TODO**|
    
#### Extra Data  
  
{:.table}
{:.table-bordered}
|Name|Type|Description|
|----|----|-----------|
|displayName|string|The name of the player|
|identity|string|The UUID of the player?|
    
   
#### Client Data

{:.table}
{:.table-bordered}
|Name|Type|Description|
|----|----|-----------|
|ADRole|int|**TODO**|
|ClientRandomId|float|**TODO**|
|CurrentInputMode|int|**TODO**|
|DefaultInpuutMode|int|**TODO**|
|[DeviceModel](#){:data-target="#DeviceModel"} |string|The model of the device|
|[DeviceOS](#){:data-target="#DeviceOS"} |int|**TODO**|
|[GameVersion](#){:data-target="#GameVersion"} |string|The network game version|
|GuiScale|int|**TODO**|
|[ServerAddress](#){:data-toggle="modal"}{:data-target="#modalServerAddress"} |string|The server address and port|
|[SkinId](#){:data-toggle="modal"}{:data-target="#modalSkinId"} |string|The name of the players skin|
|TenantId|string|**TODO**|
|UIProfile|int|**TODO**|

---

##### DeviceModel
This field contains the model of the clients device. It is the same one as found in the devices' settings app.

{:.table}
{:.table-bordered}
|Example|Device|
|-------|------|
|AMAZON KFGIWI|Kindle Fire HD 8|


#### DeviceOS
This field contains the operating system of the clients device, as an integer.

{:.table}
{:.table-bordered}
|Value|Example|
|----|-------|
|1|Android|
|2|iOS|
|3|OSX|
|4|FireOS|
|5|GearVR|
|6|Hololens|
|7|Windows 10|
|8|Windows 32 (desktop app)|
|9|Dedicated|
  

##### GameVersion
This field contains the game version of the client, as an integer.

{:.table}
{:.table-bordered}
|Example|Readable Version|
|-------|----------------|
|1.0.5|v1.0.5.0 beta|
|1.1.0.0|v1.1 beta|
  
  
#### Example
Here is an example of what data is sent in this packet. Generated using safe_var_dump() and json_encode() in PocketMine-MP.

{:.code-block}
```json
{
    "exp": 1522581510,
    "extraData":
    {
        "displayName": "Steve",
        "identity": "848dd007-023b-352c-a2a6-d02ac083842f"
    },
    "identityPublicKey": "MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEiq2A3rwdATUYeYbTCT6qkhAaec9VrjNOKBQvrZqrs+AZf3ZIyl0hvwstXCv2wXoB+n83zvk\/oixzv0EMDijqgDNcp2XwcZQhFipMuuEooBFEAXUdeEZog+Y5MW61fdg7",
    "nbf": 1491045509
}
{
   "ADRole": 2,
   "ClientRandomId": -1.5525916071778e+18,
   "CurrentInputMode": 2,
   "DefaultInputMode": 2,
   "DeviceModel": "AMAZON KFGIWI",
   "DeviceOS": 1,
   "GameVersion": "1.0.6.0",
   "GuiScale": 0,
   "ServerAddress": "192.168.1.4:19132",
   "SkinData": "(long base64 string)",
   "SkinId": "Standard_Alex",
   "TenantId": "",
   "UIProfile", 1
}
```

Packet Info from [PocketMine-MP](https://github.com/pmmp/PocketMine-MP).
