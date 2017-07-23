---
title: Realms API | Client Compatible
permalink: /wiki/api/realms/client-compatible/
shortname: Client Compatible
---
## Client Compatible
This endpoint returns whether or not the client is compatible for use with Realms. The latest client version must be used to use the Pocket Realms service.

---

|Host|Authentication|
|----|--------------|
|pocket.realms.minecraft.net:443|Yes|
  
### Constructing the request
```
GET /mco/client/compatible
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
If the client version is **not** compatible with realms, the server will return
```
OUTDATED
```
  
And if the client is **is** compatible, it will return
```
COMPATIBLE
```
