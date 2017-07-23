---
title: Realms API | Pending Invites
permalink: /wiki/api/realms/invites/
---
## Pending Invites
This endpoint returns the names of the players you have invited to join your realm.

---

|Host|Authentication|
|----|--------------|
|pocket.realms.minecraft.net:443|Yes|
  
### Constructing the request
```
GET /invites/pending
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

### Example Response
  
```json
{
	"invites": []
}
```

I haven't invited anyone to my realm yet.
