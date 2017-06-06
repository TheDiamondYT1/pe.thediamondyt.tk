---
title: MCPE API | Patch Notes
permalink: /wiki/api/mcpe/patch-notes/
---
## Patch Notes

{:.table}
{:.table-bordered}
|Method|URL|
|------|---|
|POST|/v1/category/items/search/|

### Example Request

```
POST /v1/catalog/items/search/ HTTP/1.1
Host: xforge.xboxlive.com:443
Authorization:
Cache-Control:public
Content-Length:117
Content-Type:application/json
User-Agent:cpprestsdk/2.8.0
Connection: Keep-Alive

{
    "count": true,
    "filter": {
        "contentType": "PatchNotes",
        "platforms": ["minecraft"],
        "tags": ["1.0.6"],
        "titleId": "896928775"
    }
}
```

### Example Response

```
HTTP/1.1 200 OK
Cache-Control: no-cache, no-store
Content-Length: 665
Content-Type: application/json
X-Content-Type-Options: nosniff
MS-CV: IFJbZ/axQE2B6BFna2rSxw.0
Date: Tue, 06 Jun 2017 20:48:00 GMT

{
    "count": 1,
    "facets": null,
    "results": [
    {
        "score": 1.0,
        "document": {
            "documentId": "G009SWL69327_ModSkuId_",
            "productId": "G009SWL69327",
            "title": "1.0.6 Update",
            "description": "",
            "contentType": "PatchNotes",
            "titleIds": [896928775],
            "platforms": ["minecraft"],
            "tags": [
                "1.0.6",
                "1.0.6_development"
            ],
            "version": "1",
            "parentIds": [],
            "visibility": "Public",
            "creatorId": "2535448579972708",
            "creatorGamertag": "DampKeyboard157",
            "thumbnailUrl": "https://ugcorigin.s-microsoft.com/12/67f58e36-06ab-4639-97dd-4a51ac1df0d7/550/profile.jpg",
            "creationDate": "2017-04-06T17:36:18.257+00:00",
            "lastModifiedDate": "2017-04-06T17:45:27.124+00:00",
            "isTestContent": false,
            "custom": {
                "offer": "chinesemythology"
            }
        }
    }]
}
```
