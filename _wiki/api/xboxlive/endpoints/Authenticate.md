---
title: Xbox Live API | Authenticate
permalink: /wiki/api/xboxlive/authenticate/
shortname: Authenticate
---
## Authenticate
This endpoint allows you to authenticate and get an Xbox Live token. It requires you to already have a Microsoft OAuth token (more on that later).

---

|Host|Authentication|
|----|--------------|
|user.auth.xboxlive.com:443|No|
  
### Constructing the request
```
POST /user/authenticate
```
  
##### Payload

```
{
    "Properties": {
        "AuthMethod": "RPS",
        "RpsTicket": "{accessToken}",
        "SiteName": "user.auth.xboxlive.com"
    },
    "RelyingParty": "http://auth.xboxlive.com",
    "TokenType": "JWT"
}
```
  
##### Payload Explained
* `RpsTicket` is the access token obtained from authenticating with OAuth  
* `SiteName` is the site to authenticate with  
* `ReplyingParty` is the site that will reply to the request  
The `{accessToken}` **must** be filled with a valid access token.  
  
<br>
### Example Response
```
{
    "IssueInstant": "2017-06-06T22:16:20.2362278Z",
    "NotAfter": "2017-06-20T22:16:20.2362278Z",
    "Token": "(xboxToken)",
    "DisplayClaims": {
        "xui": [
        {
            "uhs": "12278597279218493392"
        }]
    }
}
```

This tutorial is incomplete.
