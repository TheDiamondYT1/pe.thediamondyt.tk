---
title: Realms API | List Worlds
permalink: /wiki/api/realms/list-worlds/
shortname: List Worlds
---
## List Worlds

---

|Host|Authentication|
|----|--------------|
|pocket.realms.minecraft.net:443|Yes|
  
### Constructing the request
```
GET /worlds 
```
  
##### Headers
```http
Authorization: {xboxToken}
Client-Version: {clientVersion}
User-Agent: MCPE/Android
```
  
##### Headers Explained
* `{xboxToken}` is an xbox live token  
* `{clientVersion}` is the version of the client (e.g. 1.0.6)  
  
<br>
### Response
If you don't own any servers, it will return an empty array
```json
{
    "servers": []
}
```
  
However if you do own a server, it will return something like this
```json
{
    "servers":[
        {
            "id":686765,
            "remoteSubscriptionId":"7a7bc42fb9ae4da5b51efa755fbd7dc3",
            "owner":"",
            "ownerUUID":"2535451711971661",
            "name":"TheDiamondYT's Realm",
            "motd":"",
            "state":"CLOSED",
            "daysLeft":28,
            "expired":false,
            "expiredTrial":false,
            "worldType":"NORMAL",
            "players":null,
            "maxPlayers":10,
            "minigameName":null,
            "minigameId":null,
            "minigameImage":null,
            "activeSlot":1,
            "slots":null,
            "member":false
        }
    ]
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
  
I did not pay for my realm and used the free trial, that's why some things are `null`. I will update this data some other time.
