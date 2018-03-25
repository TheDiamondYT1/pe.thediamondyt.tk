---
title: Minecraft - Pocket Edition REST API
permalink: /wiki/api/
shortname: api
---
There are various APIs that Minecraft: Pocket Edition uses to do stuff such as connect to realms, login to xbox live and more. 
<br> 
I am providing quick links in the nested lists but if you want a full description then click on the heading (Such as Realms API).  
  
* [Realms API](realms/)  
  * [Client Compatible](client-compatible/)
  * [List Worlds](list-worlds/)  
  * [Download World](download-world/)  
  * [Open Realm](open/)  
  * [Close Realm](close/)  
  * [Update Configuration](configuration/)  
  * [New Trial](new-trial/)  
  * [Pending Invites Count](invites-count/)  
<br>

* [General MCPE API](mcpe/)
  * [Get Patch Notes](patch-notes/)  
  * [List Seeds](list-seeds/) (incomplete)
  * [List Endpoints](list-endpoints/)  
<br>

* [Xbox Live API](xboxlive/)  
  * [Authenticate](authenticate/) (incomplete)

---

### How to follow these tutorials
These tutorials can be a bit confusing for beginners, but i will try and explain what to do here. You need *basic* understanding of programs like cURL (or you can use a website like http://hurl.it to use cURl in your browser).

#### The endpoint
On each REST API page you will find a table at the top. It contains the fields "Host" and "Authentication". 

If "Authentication" says "no", you can do the request quite easily. However, if it says "yes", that means you need a valid xbox live authentication token. You can technically capture the traffic from MCPE, grab the token, and leave MCPE running while you make your requests, but thats just annoying.
So for this tutorial i will explain how to make the request if "Authentication" says "no".says

--

The host is the website URL of the API endpoint. Here is an example table:

![table](https://lukeeey.github.io/cdn/pewiki/table.png)

The URL here is `xforge.xboxlive.com`. Remember this.

<br>

#### The request path
Now we will find the request path. You will see something like this on the wiki:

![create request](https://lukeeey.github.io/cdn/pewiki/create-request.png)

In that photo, you see a box saying `POST /v1/catalog/items/search`. POST is the request method that we will be using (it can also be different ones), and `/v1/catalog/items/search` is the request path. Now you can add this on to the URL you already found. So from this example your full URL should be `xforge.xboxlive.com/v1/catalog/items/search`!

Below that box, you will see the text saying "Headers" and a box underneath it. Each line inside that box is a request header.

And below *that* box, you  *may* see the text "Payload". This will only be there if it is a `POST` request. You will notice in the payload theres some curly brackets `{}` with some text inside. In this example it is `{clientVersion}`.
This indicates that you need to change this field, so take a look at the box below that says "Explained" and look for `{clientVersion}`. Do what it says. In this example it gives an example of `1.2.10`.

<br>

#### Getting the response
Regardless of the request type (POST, GET, PUT, etc), you will always get a Response. This is shown in the response box, as shown in the image:

![response}(https://lukeeey.github.io/cdn/pewiki/response.png)

This is obviously a response from a different request (because the one for patch notes is quite long). As you can see, sometimes i will add some text underneath telling you what to do with something in the response. Please listen to this.

---

I'm not very good at writing tutorials, so if you need help contact me [on Twitter](http://twitter.com/TheDiamondYT) or on Discord (lukeeey#2013)