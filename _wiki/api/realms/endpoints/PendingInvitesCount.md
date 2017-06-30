---
title: Realms API | Pending Invites Count
permalink: /wiki/api/realms/invites-count/
shortname: Pending Invites Count
---
## Pending Invites Count
This endpoint returns the amount of players invitied to join your realm.

---

|**Host**|pocket.realms.minecraft.net:443|
|**Authentication**|Yes|
  
### Constructing the request
```
GET /invites/count/pending
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
The response will be an integer. I have not invited any players so it showns the following:
  
##### Example
```
0
```
