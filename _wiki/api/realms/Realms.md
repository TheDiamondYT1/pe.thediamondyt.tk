---
title: Realms API
permalink: /wiki/api/realms/
---
## Realms API
Mojang have a private API for interacting with their Realms servers. Here i will try to work out what all the fields mean so people can make their own API clients.  
Unfortunatly this requires Xbox Live authentication, and i don't know how to do that.

### Endpoints

* [Client Compatible](client-compatible/)
* [List Worlds](list-worlds/)  
* [New Trial](new-trial/)  
* [List Endpoints](list-endpoints/)  
* [Pending Invites Count](invites-count/)  
   
   
### Example Xbox Live Token

```
XBL3.0 x=14239793951149710649;eyJlbmMiOiJBMTI4Q0JDK0hTMjU2IiwiYWxnIjoiUlNBLU9BRVAiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJ4NXQiOiJfd3lzeEV6dHY4UmdGLWl4cjltdy1LTTNaUG8ifQ.ukquE9SJ9sCC4RbbT9rcm87a4lsIJf2acSVS6ju24V3O_RsiDtauBoweXoBhIZ4NPcO_wJLosBsesWxqI8pv04C4JYD2mOKYoohF5SrQXJxBoGhBBeK_qINsqP5jWaHEvceBecZ2FjT3NogFD8cO2TwUxCTdX58nVL5-h5uEOPnVFF_gn5N3b4GBX8T5vtw1-NUdtZrNp9wQ6fMVgpy5NrfEGEsCKFsTImchlX-0lXQ_nBMjcjUqbtZDVE8DIgw1q88zSBuwDTFCST0jibRfE5M990E3HT1ag8uYPjJ8sxFkNm6vwUVPHbAo9pmr_izIoeBNjo4gA-p7Z4DFhPey8A.L3XUgFNrhdN3223R8XUdAA.r7tlpE6cM-1eaA-OsGRclb65jwa4YVEN_BxpkqSaOYhamQ1u0_GltZj3HE9hhBrb8_DV_RvnB92jHGQfs1j6Ma_qVCsFmta6hm_DpW-C_o_7InukJn_HDuavIH6Xp6-IlW3Nf_2cr5cAgFodx58GRSM0-UsVw0BcrYE9JgxYIDor7z6kdmSeqO-6n59D8DKwaVwniuwTBvH2bjzPgggWA0SxV4O52uZE4DvUGzeKJe0QguR66BPS0IrK6v9sbZ70weDfvHe6x4xP9RwR4LNhuIqgAUkXuaCUJwV4Gh5Eon3FuJRP6M4xPBTgSlAQbW5ZMWIuTSgxx6i_ZSfGA4JizKM8kiIb9WPr1stafn2xyLFhHK8GPt-HKhCaZInw66CFraumKa-YqM0m_rao2STWRkP7ywz7YLycdeYM1YDACovg91-RcyB1NTMQ3BsjDihPc3FVJKLFWQ_dn7suOfIWUk0OdKwrM1te3jvedP7rjG52MPW_IjN4Nkyv-6fjSlThxewOSngpz0WyU-_V48_fMHj3911BiYzWa4-lC2QSMo0_EfochA6kmcqLVL9khmXXinTn738vxgIgKf_c5kqhIsUVZ6jPejYNs4f_OIP1u9Fb4Rb5oZ2vtHj2JSkT--3HOMJJW-_txG1Xt9mZWkIbaWbsuMLbZDA6ZcLz1AvvjX3f6ibx9i9pLTDajUa1YEGT90QT_x5xOvq6cetWloe_ZpT7kfYGBTf-UO0zwuXS7Q3sLzTaO7xTYHePmE3ICO4bTT51jmLYD69h5O-jZTlgXWB2DXF3-lT0Bncfvl588D7XHdV6japUZ2ogkKPDINDrI5tB0hxCz2HtF1oK8J-OAl6xa-f5J_ZJ_4gTsGIAbtdBeLTQruLn7SU0xSG2QZkjOCB0DTu85w6pJAOjbtr1pUxBASI5_3lW0D3_6XSkXR3M-NC0YaVvZAEb5J_ILiTjyDOP-2vPwzxYq83CsYtPiohNqqNOv7y9UAH4cue4avAPLaPOovuGpMh364iT1iGqnw3gv_k4jESsVD99TKhrpVc33liGocMgXI00C7sMM6ldv7knGplS_Dcfyv8f9PaWn5g2mHBOMQ_5Oi3ul15tnaNtqzhx24HSf5oy-IYwanlqGn7t_GIBg5j-qA-EdQzGRsYijHAQpDrTovJ0URsB036SlDkpV35JqdwI6zyBbGeF5uRkIhNQDecqhRUOvMdDNb6RgoKUfySKpF793RMwbRiBJKAYFe3PjFMSXRG2JBFztKWfcWkTES671Axpp1OQsbj9KVB9eHiYqxRW5cMBhsdq6yPaYPKiIzcWOPVVg8vy2kiyTtVyiz1oJSX4Y6px6XjmZ_5yLLy4aSFtajQYG_zuVVwrj7Fdopj72SNku9FtCnfYH0978uqcDXVAAVWvpxGY74wFspokQLL8rFb_BtTMdYhhXffEVm5GJy8-oV6vt_HJx-davUcGPtHYSLGBIX-31CfpQEtEXO5rXrk6kwtabXb1d0YInsX7XrEVMRnFHpqCuMrvbvkktikB9zq-_ooujfCqZ2fYO-wbRBy1U4EL6KSeRg2hSZekUFCxKoBhDE7Q5Dud-Qg6PNmu1OHtiaOX7NNz4jJpM9cw601IZJvCmvIukvd-VmAwSGKxATiOQ8faWcKmwxI9Q8QAmHOZ6pbhsZOQ_l492Aj_AIuiPAs_sV9lJRAJe1Pmn3keWmk.KE6owm_0qN7iq_9J18IMgBhAEMdLNQ0lA7q3pynMGdA
```
   
**TODO: REMOVE**

{:.table}
{:.table-bordered}
|Path|Description|
|----|-----------|
|/worlds/{id}|**TODO**|
|/archive/download/world/{id}/1/latest|**TODO**|
|/activities/live/players|**TODO**|
|/invites/pending|**TODO**|
  
`Host: payments.realms.minecraft.net:443`  

{:.table}
{:.table-bordered}
|Path|Description|
|----|-----------|
|/status|**TODO**|
 
I am not completely sure if any of this information is correct.
