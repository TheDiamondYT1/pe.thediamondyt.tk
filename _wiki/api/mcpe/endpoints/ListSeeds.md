---
title: MCPE API | List Seeds
permalink: /wiki/api/mcpe/list-seeds/
shortname: List Seeds
---
## List Seeds

---

|Host|Authentication|
|----|--------------|
|xforge.xboxlive.com:443|No|
  
### Constructing the request

```
POST /v1/catalog/items/search
```

##### Headers
```
Content-Type: application/json
```

##### Payload
```
{
    "count": true,
    "filter": {
        "contentType": "WorldSeed",
        "titleId": "896928775"
    }
}
```
  
then you will get a long response like the following:

```

```

###### This tutorial is incomplete