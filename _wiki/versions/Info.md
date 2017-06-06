---
title: Minecraft Pocket Edition
permalink: /wiki/versions/
---
# Minecraft: Pocket Edition
Click the version of your choice to view method dumps from libminecraftpe.so.

{:.table}
{:.table-bordered}
|Version|
|-------|
|[v1.1.0.9](1.1.0.9/)|
|[v1.1.0.8](1.1.0.8/)|
|[v1.1.0.0](1.1.0.0/)|
|[v0.8.0 alpha](0.8.0/)|
|[v0.7.4 alpha](0.7.4/)|
|[v0.2.0 alpha](0.2.0/)|
|[v0.1.3 alpha](0.1.3/)|
|[v0.1.2 alpha](0.1.2/)|
|[v0.1.1 alpha](0.1.1/)|

### Realms alpha

{:.table}
{:.table-bordered}
|Version|
|-------|
|[Realms alpha build 4](0.15.0.a4/)|
  
### Demo

{:.table}
{:.table-bordered}
|Version|
|-------|
|[v0.2.1 alpha build 2](demo/0.2.1.2)|

---

### How to create a dump
I simply went in my Android Linux terminal and typed the following.

##### Full Dump

```bash
nm -DC libminecraftpe.so > fulldump.txt
```

##### Packet Dump
To dump blocks and items i just changed 'Packet' to 'Tile' or 'Item'.

```bash
nm -DC libminecraftpe.so | grep "Packet::" > packetdump.txt
```

You can also generate a pack dump with *only* the packet names by using

```bash
nm -DC libminecraftpe.so | grep "~*Packet()" > packetdump.txt
```

To get packet id's (but takes a long time). You will have to do some digging to find the packet id's from the dump, though.

```bash
objdump -b elf32-littlearm -Cd libminecraftpe.so | grep -A 5 '<*Packet::getId()' > fullpacketdump.txt
```
