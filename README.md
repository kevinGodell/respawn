# respawn

**respawn** is a simple command line app that launches a child process and automatically re-spawns it if it exits.
Nodejs is packaged inside the app and does not need to be installed separately.
No fancy interface, commands, or logging.
Just start it and forget about it.

#### Why was this made?
I had a very specific use case where I was deploying a packaged nodejs app and needed a way to make sure that it stays running and restarts if exiting.
I wanted to use `pm2` but that would have required npm to be installed and I was trying to keep things light.
After 2 minutes of writing some code, **respawn** was born. 

### Installation
**respawn** has been packaged into an executable using [pkg](https://github.com/zeit/pkg).
The current binaries can be found on the [releases](https://github.com/kevinGodell/respawn/releases/tag/v0.0.1) page.
* For command line installation, see the following steps.

###### Downloading zipped archive
```
//linux
wget https://github.com/kevinGodell/respawn/releases/download/v0.0.1/respawn-linux-x64.zip

//mac
curl -L -O https://github.com/kevinGodell/respawn/releases/download/v0.0.1/respawn-macos-x64.zip
```

###### Extracting zipped archive
```
//linux
unzip respawn-linux-x64.zip

//mac
unzip respawn-macos-x64.zip
```

### Usage

###### Use the app on the command line to launch another executable
```
//linux
./ffmpeg-streamer-linux-x64 <path-to-executable> <params to be passed to exectuable> &(run in background)

//mac
./ffmpeg-streamer-macos-x64 <path-to-executable> <params to be passed to exectuable> &(run in background)
```

###### Real world example from a linux server
**ffmpeg-streamer-linux-x64** is launched in the background and has **3000** and **development** passed to it as parameters
```
./respawn-linux-x64 ./ffmpeg-streamer-linux-x64 3000 development &
```

After launching, **respawn** will listen for the child process to exit.
If exiting, the child process will automatically be respawned after 10 seconds.

#### Development

###### Clone the repo and move into the newly created directory
```
git clone https://github.com/kevinGodell/respawn.git && cd respawn
```

###### Install the module dependencies
```
npm install
```

###### Start the app in development mode
```
npm run dev
```

###### Build the binaries
```
npm run dist:pkg
```

#### Feature requests and problems
If you have an idea for a new feature or have a problem, please do not hesitate to open an [issue](https://github.com/kevinGodell/respawn/issues).
For problems, please include information about what operating system the app is running on and what executable you are spawning with it.
Any additional details would be helpful.

#### TODO
* [ ] Add command line parameters to customize it

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
