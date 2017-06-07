---
title: Realms API | Pending Invites Count
permalink: /wiki/api/realms/invites-count/
---
## Pending Invites Count
This endpoint returns the amount of players invitied to join your realm.

---

**Host:** pocket.realms.minecraft.net:443

{:.table}
{:.table-bordered}
|Method|URL|
|------|---|
|GET|/invities/count/pending|
  
### Example Request

```
GET /invites/count/pending HTTP/1.1
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
Date: Tue, 06 Jun 2017 16:07:42 GMT
Content-Length: 1
Connection: keep-alive

0
```
