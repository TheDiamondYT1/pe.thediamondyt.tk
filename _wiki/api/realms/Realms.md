---
title: Realms API
permalink: /wiki/api/realms/
---
## Realms API
Mojang have a private API for interacting with their Realms servers. Here i will try to work out what all the fields mean so people can make their own API clients.  
Unfortunatly i cant seem to get this to work and curl returns `No reply from server`.

### Base info
Some info used in every GET request on this page **unless specified otherwise**.

{:.table}
{:.table-bordered}
|Parameter|Value|
|---------|-----|
|Authorization|**TODO**|
|User-Agent|MCPE/Android|
|Client-Version|e.g. 1.0.4|
|Cache-Control|no-cache|
|Charset|utf-8|

### Endpoints
In the future i will add individual pages for each endpoint.  
  
`Host: pocket.realms.minecraft.net:443`  
   
{:.table}
{:.table-bordered}
|Path|Description|
|----|-----------|
|/worlds|**TODO**|
|/worlds/{id}|**TODO**|
|/archive/download/world/{id}/1/latest|**TODO**|
|/trial/new|**TODO**|
|/activities/live/players|**TODO**|
|/mco/client/compatible|**TODO**|
|/invites/pending|**TODO**|
|/invites/count/pending|**TODO**|
  
`Host: payments.realms.minecraft.net:443`  

{:.table}
{:.table-bordered}
|Path|Description|
|----|-----------|
|/status|**TODO**|
 
I am not completely sure if any of this information is correct.
