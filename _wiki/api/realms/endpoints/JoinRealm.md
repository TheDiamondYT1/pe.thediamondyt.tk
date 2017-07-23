---
title: Realms API | Join Realm
permalink: /wiki/api/realms/join/
shortname: Join Realm
---
## Join Realm
This endpoint joins the specified realm.

---

|Host|Authentication|
|----|--------------|
|pocket.realms.minecraft.net:443|Yes|
  
### Constructing the request
```
POST /worlds/{id}/join
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
```json
{
    "address":"ec2-54-246-211-112.eu-west-1.compute.amazonaws.com:27178",
    "pendingUpdate":false
}
```
