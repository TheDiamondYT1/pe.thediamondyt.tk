---
title: Realms API | Client Compatible
permalink: /wiki/api/realms/client-compatible/
shortname: Client Compatible
---
## Client Compatible
This endpoint returns whether or not the client is compatible for use with Realms. The latest client version must be used to use the Pocket Realms service.

---

**Host:** pocket.realms.minecraft.net:443

|Method|URL|
|------|---|
|GET|/mco/client/compatible|
  
### Constructing the request
<br>
```
GET /mco/client/compatible
```
<br>
##### Headers
```
Authorization: {xboxToken}
Client-Version: {clientVersion}
User-Agent: MCPE/Android
```
<br>
##### Headers Explained
* `{xboxToken}` is an xbox live token  
* `{clientVersion}` is the version of the client (e.g. 1.0.6)  
  
<br>
### Response

```
OUTDATED
```

I tested this on 1.0.6, and the current version is 1.1.0, so it says outdated.
