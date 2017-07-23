---
title: Realms API | World Info
permalink: /wiki/api/realms/world-info/
shortname: World Info
---
## World Info

---

|Host|Authentication|
|----|--------------|
|pocket.realms.minecraft.net:443|Yes|
  
### Constructing the request
```
GET /worlds/{id} 
```
  
##### Headers
```
Authorization: {xboxToken}
Client-Version: {clientVersion}
User-Agent: MCPE/Android
```
  
##### Headers Explained
* `{xboxToken}` is an xbox live token  
* `{clientVersion}` is the version of the client (e.g. 1.0.6)  
  
<br>
### Response
```json
{
    "id":686765,
    "remoteSubscriptionId":"7a7bc42fb9ae4da5b51efa755fbd7dc3",
    "owner":null,
    "ownerUUID":"2535451711971661",
    "name":"TheDiamondYT's Realm",
    "motd":"",
    "state":"CLOSED",
    "daysLeft":28,
    "expired":false,
    "expiredTrial":false,
    "worldType":"NORMAL",
    "players":[
        {
            "uuid":"2535405917539341",
            "name":null,
            "operator":false,
            "accepted":false,
            "online":false
        },
        {
            "uuid":"2535430636236042",
            "name":null,
            "operator":true,
            "accepted":false,
            "online":false
        }
    ],
    "maxPlayers":10,
    "minigameName":null,
    "minigameId":null,
    "minigameImage":null,
    "activeSlot":1,
    "slots":[
        {
            "options":"{\"slotName\":null,\"pvp\":true,\"spawnAnimals\":true,\"spawnMonsters\":true,\"spawnNPCs\":true,\"spawnProtection\":0,\"commandBlocks\":false,\"forceGameMode\":false,\"gameMode\":2,\"difficulty\":2,\"worldTemplateId\":-1,\"worldTemplateImage\":null,\"adventureMap\":false,\"resourcePackHash\":null,\"versionRef\":\"6a17fb20b03d09b222ccf37e6dd4501624849f4a\",\"versionLock\":false,\"cheatsAllowed\":true,\"texturePacksRequired\":false,\"enabledPacks\":{\"resourcePacks\":[],\"behaviorPacks\":[]},\"availablePacks\":{\"resourcePacks\":[],\"behaviorPacks\":[]}}",
            "slotId":1
        }
    ],
    "member":false
}
```
  
##### Response Explained 
* `id` is the id of the realms server.  
* `ownerUUID` is the unique id of the realms owner.  
* `name` is the name of the realms owmer.  
* `motd` is the description of the realm.
* `state` is the open state of the realm. 
  * `CLOSED` the realm is offline  
  * `OPEN` the realm is online  
* `daysLeft` is the amount of days before your realm expires  
* `maxPlayers` is the maximum amount of players who can join the realm.  
  
I did not pay for my realm and used the free trial, that's why some things are `null`. I will update this data some other time.
