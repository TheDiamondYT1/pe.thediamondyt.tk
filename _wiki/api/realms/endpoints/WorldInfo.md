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
```
{
    "id": 218350,
    "remoteSubscriptionId": "96f47dc6774640f1834f7feb21f4d133",
    "owner": null,
    "ownerUUID": "2535430636236042",
    "name": "TheDiamondYT7's Realm",
    "motd": "Welcome to my realm!",
    "state": "CLOSED",
    "daysLeft": -1,
    "expired": true,
    "expiredTrial": false,
    "worldType": "NORMAL",
    "players": [],
    "maxPlayers": 10,
    "minigameName": null,
    "minigameId": null,
    "minigameImage": null,
    "activeSlot": 1,
    "slots": [{
        "options": "{\"difficulty\":0,\"versionRef\":\"2f4f297297cc24be0213b4bc366757fb28712ef8\"}",
        "slotId": 1
    }],
    "member": false
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
* `maxPlayers` is the maximum amount of players who can join the realm.  
  
I did not pay for my realm and used the free trial, that's why some things are `null`. I will update this data some other time.
