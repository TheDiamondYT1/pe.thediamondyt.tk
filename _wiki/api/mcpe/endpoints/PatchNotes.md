---
title: MCPE API | Patch Notes
permalink: /wiki/api/mcpe/patch-notes/
shortname: Patch Notes
---
## Patch Notes
This endpoint returns the patch notes for the specified client version. 

It requires 2 seperate requests to actually obtain the content.

|Host|Authentication|
|----|--------------|
|xforge.xboxlive.com:443|No|

### Making the requests
This may be slightly harder for beginners, and i haven't it explained it that well. You have been warned.

First, we make a `POST` request with some basic information.

#### Constructing the JSON payload
  
```
POST /v1/catalog/items/search
```
  
##### Headers
```
Content-Type: application/json
```
  
##### Payload
```json
{
    "count":true,
    "filter":{
        "contentType":"PatchNotes",
        "platforms":[
            "minecraft"
        ],
        "tags":[
            "{clientVersion}"
        ],
        "titleId":"896928775"
    }
}
```
  
**Explained**  
* `{clientVersion}` is the version of the client.  
  
Once you have done that, you will get a response that looks somewhat like the following:

```json
{
    "count":1,
    "facets":null,
    "results":[
        {
            "score":1.0,
            "document":{
                "documentId":"G009SWL69327_ModSkuId_",
                "productId":"G009SWL69327",
                "title":"1.0.6 Update",
                "description":"",
                "contentType":"PatchNotes",
                "titleIds":[
                    896928775
                ],
                "platforms":[
                    "minecraft"
                ],
                "tags":[
                    "1.0.6",
                    "1.0.6_development"
                ],
                "version":"1",
                "parentIds":[

                ],
                "visibility":"Public",
                "creatorId":"2535448579972708",
                "creatorGamertag":"DampKeyboard157",
                "thumbnailUrl":"https://ugcorigin.s-microsoft.com/12/67f58e36-06ab-4639-97dd-4a51ac1df0d7/550/profile.jpg",
                "creationDate":"2017-04-06T17:36:18.257+00:00",
                "lastModifiedDate":"2017-04-06T17:45:27.124+00:00",
                "isTestContent":false,
                "custom":{
                    "offer":"chinesemythology"
                }
            }
        }
    ]
}
```

##### Explained
* `productId` is the resource id of the patch notes content, see below  
* `title` is the title displayed in the patch notes screen  
* `creatorGamertag` is the xbox live gamertag of the content author  
* `offer` is the offer to be displayed in the top right corner of the patch notes screen  
  
<br>
Now we can get ready to make the `GET` request. In the JSON that we just received, find the `productId` field and add it to the URL as shown below.

*xforge.xboxlive.com:443/v1/catalog/items/{productId}*

Im not sure what the product id is, so heres an example one from the client: `G009SWJHK75F`.
  
```
GET /v1/catalog/items/{productId}
```

##### Headers
```http
Content-Type: application/json
```

which returns something like

```json
{
    "id":"G009SWL69327",
    "title":{
        "neutral":"1.0.6 Update"
    },
    "description":{
        "neutral":""
    },
    "contentType":"PatchNotes",
    "titleIds":[
        896928775
    ],
    "platforms":[
        "minecraft"
    ],
    "tags":[
        "1.0.6",
        "1.0.6_development"
    ],
    "sandbox":"RETAIL",
    "version":"1",
    "minimumClientVersion":null,
    "parentIds":null,
    "creationDate":"2017-04-06T17:36:18.2575164+00:00",
    "lastModifiedDate":"2017-04-06T17:45:27.1240322+00:00",
    "startDate":"2017-04-06T17:36:18.2575164+00:00",
    "visibility":1,
    "contentUrls":[
        "https://ugcorigin.s-microsoft.com/15/26576bf3-0000-0000-7a48-6505c52535f9/680/mod.mod"
    ],
    "contents":[
        {
            "contentId":"26576bf3-0000-0000-7a48-6505c52535f9",
            "contentType":"publicmod",
            "contentUri":"https://ugcorigin.s-microsoft.com/15/26576bf3-0000-0000-7a48-6505c52535f9/680/mod.mod"
        }
    ],
    "creatorId":"2535448579972708",
    "creatorGamertag":"DampKeyboard157",
    "isTestContent":false,
    "images":[
        {
            "uri":"https://ugcorigin.s-microsoft.com/12/67f58e36-06ab-4639-97dd-4a51ac1df0d7/550/profile.jpg",
            "imagePurpose":"Thumbnail",
            "height":-1,
            "width":-1,
            "fileSizeInBytes":-1
        }
    ],
    "commerce":{

    },
    "custom":{
        "offer":"chinesemythology"
    }
}
```
  
Now we can get the compressed patch note files. In the JSON we just received, find the `contentUrls` array and download the file from the URL provided.

The file downloaded is actually a compressed zip file, despite the exstension being `.mod`, so just rename it.
