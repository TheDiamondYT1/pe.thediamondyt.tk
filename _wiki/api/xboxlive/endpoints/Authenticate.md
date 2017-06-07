---
title: Xbox Live API | Authenticate
permalink: /wiki/api/xboxlive/authenticate/
---
## Authenticate

|Method|URL|
|------|---|
|POST|/user/authenticate/|
  
### Example Request

```
POST /user/authenticate HTTP/1.1
Host: user.auth.xboxlive.com:443
Accept-Language:en-GB,en
Content-Length:1363
Content-Type:application/json; charset=utf-8
Signature:AAAAAQHS3xKFQHU2WzCdA4GgdotXMq5U+Pbb7cBZiH1vlnS+rAlOewWb+eDZg67anm4j6GolpJQHLIrpOZ3RbuLJ+79rFsIWfooWLA==
User-Agent:cpprestsdk/2.8.0
x-xbl-contract-version:1
Connection: Keep-Alive

{
    "Properties": {
        "AuthMethod": "RPS",
        "ProofKey": {
            "alg": "ES256",
            "crv": "P-256",
            "kty": "EC",
            "use": "sig",
            "x": "Jik21L7SYQfmz_caoXrVct5di12d-gCxuGkknLktePw",
            "y": "hzVgEfgbIryBPDPds9C5zcCP-urzbWrP2alLFq7zbok"
        },
        "RpsTicket": "(long string of characters)",
        "SiteName": "user.auth.xboxlive.com"
    },
    "RelyingParty": "http://auth.xboxlive.com",
    "TokenType": "JWT"
}
```

### Example Response

```
HTTP/1.1 200 OK
Cache-Control: no-cache, no-store
Content-Length: 1854
Content-Type: application/json
X-Content-Type-Options: nosniff
MS-CV: g5lqy11B30eagxNSM89bFA.0
X-XblCorrelationId: 00000000-0000-0000-0000-000000000000
Date: Tue, 06 Jun 2017 22:16:20 GMT

{
    "IssueInstant": "2017-06-06T22:16:20.2362278Z",
    "NotAfter": "2017-06-20T22:16:20.2362278Z",
    "Token": "(long string of characters)",
    "DisplayClaims": {
        "xui": [
        {
            "uhs": "12278597279218493392"
        }]
    }
}
```

This works, but when i enter the token to authenticate with realms it does not. Help me :(
