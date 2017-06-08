---
title: Realms API | List Worlds
permalink: /wiki/api/realms/list-worlds/
shortname: List Worlds
---
## List Worlds

|Method|URL|
|------|---|
|GET|/worlds|
  
### Constructing the request
<br>
```
GET /worlds 
```
<br>
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
    "servers": [
    {
        "id": 218350,
        "remoteSubscriptionId": "96f47dc6774640f1834f7feb21f4d133",
        "owner": "",
        "ownerUUID": "2535430636236042",
        "name": "TheDiamondYT7's Realm",
        "motd": "Welcome to my test realm",
        "state": "CLOSED",
        "daysLeft": -1,
        "expired": true,
        "expiredTrial": false,
        "worldType": "NORMAL",
        "players": null,
        "maxPlayers": 10,
        "minigameName": null,
        "minigameId": null,
        "minigameImage": null,
        "activeSlot": 1,
        "slots": null,
        "member": false
    }]
}
```

**Explained**  
* `id` is the id of the realms server.  
* `ownerUUID` is the unique id of the realms owner.  
* `name` is the name of the realms owmer.  
* `motd` is the description of the realm.
* `state` is the open state of the realm. 
  * `CLOSED` the realm is offline  
  * `OPEN` the realm is online  
  
I did not pay for my realm and used the free trial, that's why some things are `null`. I will update this data some other time.
