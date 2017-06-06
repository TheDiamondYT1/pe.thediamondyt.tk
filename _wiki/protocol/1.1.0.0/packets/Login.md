---
title: MCPE 1.1.0.0 LoginPacket
permalink: /wiki/protocol/1.1.0.0/packets/login/
---
## Login Packet
The login packet is encoded with json encoded base64.

> As far as i can tell, these fields are the same as the [1.0.5 Login Packet](/wiki/1.0.5/).

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
|[DeviceModel](#){:data-toggle="modal"}{:data-target="#modalDeviceModel"} |string|The model of the device|
|[DeviceOS](#){:data-toggle="modal"}{:data-target="#modalDeviceOS"} |int|**TODO**|
|[GameVersion](#){:data-toggle="modal"}{:data-target="#modalGameVersion"} |string|The network game version|
|GuiScale|int|**TODO**|
|[ServerAddress](#){:data-toggle="modal"}{:data-target="#modalServerAddress"} |string|The server address and port|
|[SkinId](#){:data-toggle="modal"}{:data-target="#modalSkinId"} |string|The name of the players skin|
|TenantId|string|**TODO**|
|UIProfile|int|**TODO**|
  
  
#### Example
Here is an example of what data is sent in this packet. Generated using safe_var_dump() and json_encode() in PocketMine-MP.

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
