---
title: Realms API | Client Compatible
permalink: /wiki/api/realms/client-compatible/
---
## Client Compatible

{:.table}
{:.table-bordered}
|Method|URL|
|------|---|
|GET|/mco/client/compatible/|
  
### Example Request

```
GET /mco/client/compatible HTTP/1.1
Host: pocket.realms.minecraft.net:443
Authorization: (long xbox live token)
Cache-Control:no-cache
Charset:utf-8
Client-Version:1.0.6
User-Agent:MCPE/Android
Connection: Keep-Alive
```

### Example Response

```
HTTP/1.1 200 OK
Content-Type: text/plain
Date: Tue, 06 Jun 2017 16:07:21 GMT
Content-Length: 8
Connection: keep-alive

OUTDATED
```

I tested this on 1.0.6, and the current version is 1.1.0.51, so it says outdated.