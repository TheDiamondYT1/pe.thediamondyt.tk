---
title: MCPE API | Resource Pack Info
permalink: /wiki/api/mcpe/resource-pack-info/
shortname: Resource Pack Info
---
## Resource Pack Info

---

|Host|Authentication|
|----|--------------|
|xforge.xboxlive.com|No|
  
### Constructing the request
```
GET /v1/catalog/items/{id}/
```

##### Explained
`{id}` is the id of the resource pack

For example, for the Plastic Texture Pack: `G009SWJHK75F`
  
##### Headers
```
Content-Type: application/json
```
  
<br>
### Example Response

```json
{
    "id": "G009SWJHK75F",
    "title": {
        "neutral": "Plastic Texture Pack"
    },
    "description": {
        "neutral": "Make your worlds simple, colorful and vibrant!"
    },
    "contentType": "MarketplaceDurableCatalog_V1",
    "titleIds": [
        1651113805,
        1944307183,
        1739947436,
        1909043648,
        1810924247,
        896928775,
        1916611344
    ],
    "platforms": [
        "android.amazonappstore",
        "android.googleplay",
        "appletv.store",
        "ios.store",
        "oculus.store.rift",
        "oculus.store.gearvr",
        "uwp.store",
        "uwp.store.mobile"
    ],
    "tags": [
        "resourcepack",
        "featured",
        "123dd57a-226f-4895-a1bc-b3b69d3f44dd"
    ],
    "sandbox": "RETAIL",
    "version": "1",
    "minimumClientVersion": null,
    "parentIds": null,
    "creationDate": "2017-04-19T00:22:36.9283895+00:00",
    "lastModifiedDate": "2017-04-19T00:34:07.8587081+00:00",
    "startDate": "2017-04-04T15:10:05+00:00",
    "visibility": 1,
    "contentUrls": [
        "https://ugcorigin.s-microsoft.com/15/186d2821-0000-0000-7a48-6505c7a838f9/680/mod.mod"
    ],
    "contents": [
    {
        "contentId": "186d2821-0000-0000-7a48-6505c7a838f9",
        "contentType": "publicmod",
        "contentUri": "https://ugcorigin.s-microsoft.com/15/186d2821-0000-0000-7a48-6505c7a838f9/680/mod.mod"
    }],
    "creatorId": "2535448579972708",
    "creatorGamertag": "DampKeyboard157",
    "isTestContent": false,
    "images":
    [{
        "uri": "https://ugcorigin.s-microsoft.com/12/a6f803cf-2d3f-42ad-90c5-2bbb828f6cc4/550/profile.jpg",
        "imagePurpose": "Thumbnail",
        "height" :-1,
        "width":-1,
        "fileSizeInBytes":-1
    },
    {
        "uri": "https://ugcorigin.s-microsoft.com/12/4d8d310a-e466-4442-aabf-94e6cdf9f958/550/profile.jpg",
        "imagePurpose": "screenshot",
        "height": -1,
        "width": -1,
        "fileSizeInBytes": -1
    },
    {
        "uri": "https://ugcorigin.s-microsoft.com/12/2a7af9ed-1199-40b7-bb2b-2134e53ad3e8/550/profile.jpg",
        "imagePurpose": "screenshot",
        "height": -1,
        "width": -1,
        "fileSizeInBytes": -1
    },
    {
        "uri": "https://ugcorigin.s-microsoft.com/12/93d309e4-6b55-4024-b239-ea681fb5286c/550/profile.jpg",
        "imagePurpose": "screenshot",
        "height": -1,
        "width": -1,
        "fileSizeInBytes": -1
    },
    {
        "uri": "https://ugcorigin.s-microsoft.com/12/3c7af4e7-6cfe-4dd7-9677-3b281015dcf8/550/profile.jpg",
        "imagePurpose": "screenshot",
        "height": -1,
        "width": -1,
        "fileSizeInBytes": -1
    },
    {
        "uri": "https://ugcorigin.s-microsoft.com/12/afb5e1a0-d215-4dc2-9136-1616fec4d3a2/550/profile.jpg",
        "imagePurpose": "screenshot",
        "height": -1,
        "width": -1,
        "fileSizeInBytes": -1
    },
    {
        "uri": "https://ugcorigin.s-microsoft.com/12/aed98f93-8019-434f-902d-702cd9707ce5/550/profile.jpg",
        "imagePurpose": "packicon",
        "height": -1,
        "width": -1,
        "fileSizeInBytes": -1
    }],
    "commerce": {
        "spiVirtualCommerce": {
            "prices": [
            {
                "listPrice": 480.0,
                "msrp": 480.0,
                "currencyCode": "XMC"
            }],
            "custom": null
        }
    },
    "custom": {
        "storePriority": 2,
        "packIdentity": [
        {
            "version": "0.0.1",
            "uuid": "123dd57a-226f-4895-a1bc-b3b69d3f44dd"
        }],
        "minClientVersion": "1.1.0-beta",
        "price": 480,
        "creatorName": "Minecraft"
    }
}
```
