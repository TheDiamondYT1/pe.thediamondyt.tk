---
title: Realms API | New Trial
permalink: /wiki/api/realms/new-trial/
---
## New Trial

{:.table}
{:.table-bordered}
|Method|URL|
|------|---|
|GET|/trial/new/|
  
### Example Request

```
GET /trial/new HTTP/1.1
Host: pocket.realms.minecraft.net:443
Authorization: (long xbox live token)
Cache-Control:no-cache
Charset:utf-8
Client-Version:1.0.4
User-Agent:MCPE/Android
Connection: Keep-Alive
```

### Example Response

```
HTTP/1.1 403 Forbidden
Content-Type: application/json
Date: Fri, 24 Mar 2017 16:52:34 GMT
Content-Length: 54
Connection: keep-alive

{
    "errorCode": 403, 
    "errorMsg": "Trial is not available"
}
```

My trial is not available. Hmmm.
