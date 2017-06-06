---
title: Realms API | List Worlds
permalink: /wiki/api/realms/list-worlds/
---
## List Worlds

{:.table}
{:.table-bordered}
|Method|URL|
|------|---|
|GET|/worlds/|
  
### Example Request

```
GET /worlds HTTP/1.1
Host: pocket.realms.minecraft.net:443
Authorization: (long xbox live token)
Cache-Control:no-cache
Charset:utf-8
Client-Version:1.0.4
User-Agent:MCPE/Android
Connection: Keep-Alive
```

### Example Response

```
HTTP/1.1 200 OK
Content-Type: application/json
Date: Fri, 24 Mar 2017 16:52:35 GMT
Content-Length: 389
Connection: keep-alive

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

I did not pay for my realm and used the free trial, that's why some things are `null`. I will update this data some other time.
