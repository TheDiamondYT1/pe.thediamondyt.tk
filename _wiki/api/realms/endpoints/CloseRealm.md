---
title: Realms API | Close Realm
permalink: /wiki/api/realms/close/
shortname: Close Realm
---
## Close Realm
This endpoint bring the realm online. This will allow players to join it and you will be charged again.

---

|Host|Authentication|
|----|--------------|
|pocket.realms.minecraft.net|Yes|
  
### Constructing the request
```
PUT /worlds/{id}/close
```
  
##### Headers
```
Authorization: {xboxToken}
Client-Version: {clientVersion}
User-Agent: MCPE/Android
```
  
##### Headers Explained
* `{xboxToken}` is an xbox live token  
* `{clientVersion}` is the version of the client (e.g. 1.1.3)  
  
<br>
### Response
```
true
```
