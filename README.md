# vue-sounds
A Vue.js plugin to play sounds.
>Easy to add sounds to your components.

## Installation
```bash
npm install vue-sounds --save
```
Or with yarn

```bash
yarn add vue-sounds
```

## Setup
```js
import Vue from 'vue'
import store from './store'
import sounds from "vue-sounds";
Vue.use(sounds, store);
```
## Usage
### Adding audio clip
There are two methods to do that
#### Adding then when the user enters the website
You pass them in the option parameter
```js
Vue.use(sounds, store, {
    sounds:[
        {name:"", url:""},
        ....
    ]
});
```
Note that name field must be unique for every audio clip.

#### Dynamically adding clips
In any components you will have access to ```$sounds``` object:
```js
this.$sounds.add("name", "url");
```
## The $sounds object
This will give you access to these methods:
**Method**|**Parameters**|**Return type**|**Description**
----|----|----|----
get   | soundName {string} | ```Player``` object | this will search for an audio with the given name and returns a player object for that audio clip.
add  | soundName {string} and url {string} | ```void```| it will add a new audio clip to the store.
getAll   | no parameters| Array with {name, url} objects |returns all of the audio clips in the store.

### Play sounds
Before you can play sounds you have to create a ```Player``` object to do so, the plugin gives you access to ```get``` method
```js
this.$sounds.get("name");
```
This will return a Player object that gives you access to these method:
**Method**|**Parameters**|**Return type**|**Description**
----|----|----|----
play   | no parameters| ```Promise<void>```|play the clip.
pause  | no parameters| ```Promise<void>```|pause the clip.
stop   | no parameters| ```Promise<void>```|stops the clip.
volume | optional vol {Number} range (0-1) | number | sets the volume to vol and returns it, if vol is undefined returns the current volume.

It will also throw an error if you try to get a clip that doesn't exist.
