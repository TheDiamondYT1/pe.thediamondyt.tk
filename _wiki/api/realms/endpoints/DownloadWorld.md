---
title: Realms API | Download World
permalink: /wiki/api/realms/download-world/
shortname: Download World
---
## Download World
This endpoints allows you to download the world used on your realm.

It requires 2 seperate requests to actually obtain the world.

|Host|Authentication|
|----|--------------|
|pocket.realms.minecraft.net:443|Yes|

### Making the requests
Firstly, we make a `GET` request to obtain the download url.

#### Constructing the request

```
GET /archive/download/world/{id}/{world}/latest
```

##### Headers
```
User-Agent: MCPE/Android
```
  
<br>
#### Response
```
{
    "downloadUrl": "https://archive-pocket-production-eu-west-1.realms.minecraft.net/worlds",
    "token": "(long identity public key)"
}
```

Keep hold of the `downloadUrl` field, as we will need it for our next request:
<br><br>
```
GET {downloadUrl}
```

##### Headers
```
Authorization: {xboxToken}
```

##### Headers Explained
* `{xboxToken}` is an xbox live token
  
  
###### This tutorial is incomplete
