---
permalink: /api/
---
## Welcome
I created an easy to use JSON API for easy access to Minecraft [Pocket Edition] information.

---

Every endpoint is located in `http://peapi.thediamondyt.tk`, and every endpoint can be accessed directly from the browser.
<br>
### Getting the latest beta
```
GET /latest-beta.json
```

##### Response
```
{
    "name": "Minecraft 1.2 build 3",
    "codename": "The Better Together Update",
    "version": "1.2.0.9",
    "info_url": "http://peapi.thediamondyt.tk/v/1.2.0.9/info.json"
}
```

* `name`: The full name of that specific game version  
* `codename`: The codename of the version. Not all versions will have a codename however  
* `version`: The game version  
* `info_url`: The URL to the full information on that specific version  

<br>
### Getting specific version info
```
GET /v/{version}/info.json
```

##### Response
```
{
    "name": "Minecraft: Pocket Edition 1.2 build 3",
    "codename": "The Better Together Update",
    "type": "snapshot",
    "platforms": [
        "Android",
        "UWP"
    ],
    "release_dates": {
        "Android": "August 8, 2017",
        "UWP": "August 8, 2017"
    },
    "has_realms": true,
    "changelog_url": "http://peapi.thediamondyt.tk/v/1.2.0.9/changelog.json",
    "protocol_url": "http://peapi.thediamondyt.tk/v/1.2.0.9/protocol.json",
    "wiki_url": "https://minecraft.gamepedia.com/Pocket_Edition_1.2_build_3"
}
```

* `name`: The full name of that specific game version  
* `codename`: The codename of the version. Not all versions will have a codename however  
* `type`: The type of release  
  * `alpha`: Alpha versions of the game prior to 1.0  
  * `snapshot`: Beta builds  
  * `release`: A release build of the game after alpha stage  
* `platforms`: The platforms that specific game update will run on  
* `release_dates`: The release dates for the game version on each platform  
* `has_realms`: Whether or not the game contains realms  
* `has_old_realms`: Whether or not the game contains the old realms (0.7.4 - 0.8.1)   
* `changelog_url`: The URL to the game version changelog  
* `wiki_url`: The URL to the Minecraft Wiki entry for the game version  
