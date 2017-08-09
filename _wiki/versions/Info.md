---
title: Minecraft Pocket Edition
permalink: /wiki/versions/
shortname: versions
---
# Minecraft: Pocket Edition
Click the version of your choice to view method dumps from libminecraftpe.so.

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
