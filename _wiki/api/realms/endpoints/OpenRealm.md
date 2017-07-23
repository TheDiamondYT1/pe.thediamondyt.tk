---
title: Realms API | Open Realm
permalink: /wiki/api/realms/open/
shortname: Open Realm
---
## Open Realm
This endpoint shuts down the realm. This will stop players joining it and you wont be charged while it is not online.

---

|Host|Authentication|
|----|--------------|
|pocket.realms.minecraft.net:443|Yes|
  
### Constructing the request
```
PUT /worlds/{id}/open
```
  
##### Headers
```http
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
