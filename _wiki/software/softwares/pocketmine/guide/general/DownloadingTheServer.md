---
title: PocketMine-MP Guide - Downloading the server
permalink: /wiki/software/pocketmine/guides/downloading-the-server/
---
## Downloading the server
---
### Installing PHP
To run PocketMine-MP, you are required to have PHP 7.0 >= installed with the neccersary extensions. If not, you can compile it yourself or download a pre-compiled binary.

* Linux
  * [Script](https://raw.githubusercontent.com/pmmp/php-build-scripts/master/compile.sh)  
  * [Binary (32 bit)](https://bintray.com/pocketmine/PocketMine/download_file?file_path=PHP_7.0.6_x86_Linux.tar.gz)  
  * [Binary (64 bit)](https://bintray.com/pocketmine/PocketMine/download_file?file_path=PHP_7.0.6_x86-64_Linux.tar.gz)  
  
* Windows
  * [Powershell Script](https://raw.githubusercontent.com/pmmp/php-build-scripts/master/windows-binaries.ps1)  
  * [Binary (32 bit)](https://bintray.com/pocketmine/PocketMine/download_file?file_path=PHP_7.0.3_x86_Windows.tar.gz)  
  * [Binary (64 bit)](https://bintray.com/pocketmine/PocketMine/download_file?file_path=PHP_7.0.3_x64_Windows.tar.gz)  
  
  
### Installing PocketMine-MP
There are a few ways you can download PocketMine-MP. 

**Compile from source**  
You can compile directly from source code in the [Github repository](https://github.com/pmmp/PocketMine-MP). You can also run the server directly from source without compiling to a phar, just follow the steps untill step 3.

1. Clone the repository recursively. `git clone --recursive https://github.com/pmmp/PocketMine-MP`  
2. Enter the repository when it finishes cloning. `cd PocketMine-MP`  
3. Run the server by executing the `start.sh` (Linux) or `start.cmd` or `start.ps1` (Windows).
4. Stop the server by typing `stop` in console.
5. Install the latest [DevTools](https://github.com/pmmp/PocketMine-DevTools) and place it in the plugins directory.
6. Start the server again like in step 3.
7. Type 'makeserver' in console then you're done!
  
**Installing from Poggit**  
[Poggit](https://poggit.pmmp.io/) is the official plugin repository for PocketMine-MP. It also hosts bleeding-edge builds of [the server phar](https://poggit.pmmp.io/ci/pmmp/PocketMine-MP/~?branch=master).
  
**Windows installer**  
[TheDeibo](https://forums.pmmp.io/members/thedeibo.11/) made a simple PocketMine installer for Windows to ease the setup of the server. Here is [the forum thread](https://forums.pmmp.io/threads/pocketmine-mp-1-6-2-installer-windows.2022/) which contains download links and instructions.
