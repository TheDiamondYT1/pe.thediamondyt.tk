---
title: Realms API | List Endpoints
permalink: /wiki/api/realms/list-endpoints/
---
## List Endpoints
This endpoint lists all endpoints related to the pocket realms service.

{:.table}
{:.table-bordered}
|Method|URL|
|------|---|
|GET|/titles/{id}/endpoints|

I am not sure what `id` is yet, see example below. 
  
### Example Request

```
GET /titles/default/endpoints HTTP/1.1
Host: title.mgt.xboxlive.com:443
Accept-Language:en-GB,en
Authorization: (long xbox live token)
Content-Type:application/json; charset=utf-8
Signature:AAAAAQHS3t7yoBZWMoZTP/pJwvRc4bW/0xN8Ye2NAP/WQEcU5yi7aQCymN0pmTi8CWbgxELC8wySIK9E9ogjVFLSNmJ7EzkkXkCeQA==
User-Agent:cpprestsdk/2.8.0
x-xbl-contract-version:1
Connection: Keep-Alive
```

### Example Response

```
HTTP/1.1 200 OK
Cache-Control: no-cache, no-store
Content-Length: 1626
ETag: "8h/DjXgTlkXb+evmwAH1sDhlGHwipKAJKBk3h+onh6k="
X-Content-Type-Options: nosniff
MS-CV: Ss/YYzlJO0qCqdk3yqL6gQ.0
Date: Tue, 06 Jun 2017 16:07:09 GMT

{
    "EndPoints": [
    {
        "Protocol": "https",
        "Host": "peoapi.minecraft.net",
        "HostType": "fqdn",
        "RelyingParty": "https://peoapi.minecraft.net/",
        "TokenType": "JWT"
    },
    {
        "Protocol": "https",
        "Host": "peoapi-stage.minecraft.net",
        "HostType": "fqdn",
        "RelyingParty": "https://peoapi-stage.minecraft.net/",
        "TokenType": "JWT"
    },
    {
        "Protocol": "https",
        "Host": "pocket-stage.realms.minecraft.net",
        "HostType": "fqdn",
        "RelyingParty": "https://pocket-stage.realms.minecraft.net/",
        "TokenType": "JWT"
    },
    {
        "Protocol": "https",
        "Host": "pocket.realms.minecraft.net",
        "HostType": "fqdn",
        "RelyingParty": "https://pocket.realms.minecraft.net/",
        "TokenType": "JWT"
    },
    {
        "Protocol": "https",
        "Host": "payments.realms.minecraft.net",
        "HostType": "fqdn",
        "RelyingParty": "https://payments.realms.minecraft.net/",
        "TokenType": "JWT"
    },
    {
        "Protocol": "https",
        "Host": "pocket-dev.realms.minecraft.net",
        "HostType": "fqdn",
        "RelyingParty": "https://pocket-dev.realms.minecraft.net/",
        "TokenType": "JWT"
    },
    {
        "Protocol": "https",
        "Host": "payments-dev.realms.minecraft.net",
        "HostType": "fqdn",
        "RelyingParty": "https://payments-dev.realms.minecraft.net/",
        "TokenType": "JWT"
    },
    {
        "Protocol": "https",
        "Host": "payments-stage.realms.minecraft.net",
        "HostType": "fqdn",
        "RelyingParty": "https://payments-stage.realms.minecraft.net/",
        "TokenType": "JWT"
    },
    {
        "Protocol": "https",
        "Host": "multiplayer.minecraft.net",
        "HostType": "fqdn",
        "RelyingParty": "https://multiplayer.minecraft.net/",
        "TokenType": "JWT"
    },
    {
        "Protocol": "https",
        "Host": "multiplayer.mojang.zone",
        "HostType": "fqdn",
        "RelyingParty": "https://multiplayer.mojang.zone/",
        "TokenType": "JWT"
    },
    {
        "Protocol": "http",
        "Host": "*",
        "HostType": "wildcard"
    },
    {
        "Protocol": "https",
        "Host": "*",
        "HostType": "wildcard"
    }]
}
```
