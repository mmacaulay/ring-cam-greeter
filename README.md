# Ring Cam Greeter

A silly experiment built with [ring-client-api](https://github.com/dgreif/ring) where the goal was to play spooky sounds for kids trick or treating at my house. When the camera detects human motion, it plays a (scary) sound. 🎃

## Setup


### Refresh token
Follow the instructions [here](https://github.com/dgreif/ring/wiki/Refresh-Tokens) to generate a refresh token (I followed the second option with `homebridge-ring`). Create a file `config/env/production.json` which mirrors `config/default.json` and replace the `refreshToken` value with the output from the above steps.

### Ring config 
This tool operates on a single Ring `location` and a single `camera` at that location. You'll need to get the ids for both of them. Once you have the refresh token above, you can dump your Ring data to stdout by running:
 ```
 NODE_ENV=production npm run ring-data
 ```
Find the id of the location you want to use (if you have more than one) and update the `locationIds` config value.

Find the id of the camera you want to use (within the previously selected location), and update the `cameraId` config value.

 ### Sound config

There are two modes for playing sounds: the Apple `say` command, and a recorded audio file.

#### Apple `say`

[This article](https://support.apple.com/en-ca/guide/mac-help/mchlp2290/mac) has more info on the `say` command and how to manage the available voices.

* Set the `sound.mode` config value to `voice`
* Set the `voice` config value to something spooky (any of the "Novelty" voices is a good choice)
* Set the `message` config value to something hilarious for the voice to say

#### Recordings

Plays an audio file directly through the camera (assuming it has a speaker, I think most of them do?).

* Set the `sound.mode` config value to `recording`
* Create a directory within the repo (default `sounds`), and then set the `sound.recordingsDir` config value.
* Add an audio file to `recordingsDir` and then set `recordingFile` to the name of that file (default `test.m4a`).
* By default, the recording will stop playing after 10 seconds. If you to play something longer, change `sound.recordingMaxDuration` to the desired value in milliseconds.

**How to make recordings?** I used the MacOS Voice Memos app to record myself saying something, the UI is a little unintuitive but you can then drag the recording directly into the folder where you want it to go.

### Running it

Once you've completed all the steps as above, putting the configuration into `config/env/production.json`, you can run the app with:

```
NODE_ENV=production npm start
```