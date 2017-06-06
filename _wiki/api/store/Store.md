---
title: Minecraft Store API
permalink: /wiki/api/store/
---
## Minecraft Store API
Mojang have a private API for interacting with their Minecraft Store servers. Here i will try to work out what all the fields mean so people can make their own API clients.  
Unfortunatly this requires Xbox Live authentication, and i don't know how to do that.

### Base info
Some info used in every GET request on this page **unless specified otherwise**.

|Parameter|Value|
|---------|-----|
|Authorization|**TODO**|
|User-Agent|cpprestsdk/2.8.0|
|Cache-Control|public|
|Content-Type|application/json|
|Charset|utf-8|

### Endpoints
In the future i will add individual pages for each endpoint.  
  
`Host: xforge.xboxlive.com:443`  
   
{:.table}
{:.table-bordered}
|Path|Description|
|----|-----------|
|/v1/catalog/items/search/|**TODO**|
|/v1/catalog/items/{id}|**TODO**|
 
I am not completely sure if any of this information is correct.
