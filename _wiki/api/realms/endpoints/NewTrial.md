---
title: Realms API | New Trial
permalink: /wiki/api/realms/new-trial/
shortname: New Trial
---
## New Trial

---

|Host|Authentication|
|----|--------------|
|pocket.realms.minecraft.net:443|Yes|

### Constructing the request
```
GET /trial/new
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

### Example Response

##### Response Code
```
403 Forbidden
```

##### Example 
```
{
    "errorCode":403, 
    "errorMsg":"Trial is not available"
}
```

My trial is not available. I'm guessing i already used it.
