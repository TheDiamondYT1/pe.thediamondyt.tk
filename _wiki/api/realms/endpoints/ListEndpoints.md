---
title: Realms API | List Endpoints
permalink: /wiki/api/realms/list-endpoints/
shortname: List Endpoints
---
## List Endpoints
This endpoint lists all endpoints related to the pocket realms service.

---

|**Host**|title.mgt.xboxlive.com:443|
|**Authentication**|Yes|
  
### Constructing the request
```
GET /titles/{id}/endpoints
```
I'm not currently sure what `{id}` is, but for now just use `default`.  
  
### Headers
```
Authorization: {xboxToken}
Content-Type: application/json
```
  
##### Headers Explained
* `{xboxToken}` is an xbox live token  
  
<br>
  
### Example Response

```
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
  
##### Response Explained
* `Protocol` is either http or https  
* `Host` is the host url of the endpoint  
* `ReplyingParty` is the url of the host replying to the request  
