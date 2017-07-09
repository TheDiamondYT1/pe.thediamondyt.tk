---
title: Realms API | Update Configuration
permalink: /wiki/api/realms/configuration/
shortname: Update Configuration
---
## Update Configuration

---

|Host|Authentication|
|----|--------------|
|pocket.realms.minecraft.net:443|Yes|
  
### Constructing the request
```
POST /worlds/{id}/configuration
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
### Example Payload
```
{
    "description": {
        "description: "",
        "name": "Example Realm",
    },
    "options": {
        "cheatsAllowed": true,
        "difficulty": 3,
        "gameMode": 1
    }
}
```
