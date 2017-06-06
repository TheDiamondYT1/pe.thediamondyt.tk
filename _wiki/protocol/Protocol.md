---
title: MCPE Protocol
permalink: /wiki/protocol/
---
## MCPE Protocol
Minecraft: Pocket Edition uses UDP for networking, unlike Minecraft Java Edition which uses TCP. It is rumoured that Mojang will make the switch to TCP in a future update.
  
The client listens for Local Area Network (LAN) servers on port **19132**. If you wish to join a server on another port, you must manually add it at in the servers screen.

---

### Login Sequence
1. **C->S** Login  
2. **S->C** Play Status (0) (LOGIN_SUCCESS)  
3. **S->C** Resource Packs Info  
4. **C->S** Resource Pack Client Response (Wrapped in a Batch packet)  
5. **S->C** Start Game   

// TODO: finish

---

Older client versions do not have a different version fot each beta build, which can get confusing. Keep that in mind.  

{:.table}
{:.table-bordered}
|Client Version|Network Version|Protocol Version|
|--------------|------------|----------------|
|v1.1.0.9|1.1.0.9|112|
|v1.1.0.8|1.1.0.8|111|
|v1.1.0.5|[1.1.0.5](1.1.0.5/)|110|
|v1.1.0.4|1.1.0.4|110|
|v1.1.0.3|[1.1.0.3](1.1.0.3/)|110|
|v1.1.0.0|[1.1.0.0](1.1.0.0/)|110|
|v1.0.7|1.0.7|107|
|v1.0.6|1.0.6.52|106|
|v1.0.6|1.0.6.0|105|
|v1.0.5|[1.0.5.0](1.0.5/)|105|
|v1.0.4|1.0.4.11|102|
||0.15.0.1|81|
||0.14.3.0|70|
||0.14.2.0|60|
||0.14.0.7|45|
||0.14.0.1|41|
|v0.13.0 alpha|0.13.0|38|
|v0.12.1 alpha|0.12.1|34|
|v0.11.0 alpha build 11|0.11.0.11|26|
|v0.11.0 alpha build 10|0.11.0.10|25|
|v0.11.0 alpha build 9|0.11.0.9|25|
|v0.11.0 alpha build 8|0.11.0.8|25|
|v0.11.0 alpha build 7|0.11.0.7|24|
|v0.11.0 alpha build 6|0.11.0.6|23|
|v0.11.0 alpha build 5|0.11.0.5|23|
||0.10.0|21|
||0.10.0|20|
|v0.10.0 alpha build 2|0.10.0.2|19|
|v0.9.5 alpha|0.9.5|18|
|v0.9.4 alpha|0.9.4|17|
|v0.9.0 alpha build 7|0.9.0.7|16|
|v0.9.0 alpha build 2|0.9.0.2|15|
|v0.8.0 alpha|0.8.0|14|
|v0.7.6 alpha|0.7.6|12|
|v0.7.5 alpha|0.7.5|12|
|v0.7.4 alpha|0.7.4|12|

### RakNet Packets
  
//TODO

