import add from "./add";
import getSound from "./getSound";
import storeModule from "./store";

class VueSounds {
    constructor(store, options) {
        //make sure there is a store:
        if (typeof store !== "object") {
            throw new Error("Please pass a valid vuex store to the plugin.");
        }

        //create a new store module:
        store.registerModule("VueSounds", storeModule);

        this.store = store;
        this.getSound = getSound;
        this.add = add;

        //add sounds to the store:
        let sounds = typeof options === "undefined" ? undefined : options.sounds;
        if (sounds && sounds.length > 0)
            sounds.forEach(sound => this.add(sound.name, sound.url));
    }
}

export default VueSounds;
