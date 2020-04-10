import add from "./add";
import getSound from "./getSound";
import storeModule from "./store";

class VueSounds {
    constructor(store, options) {
        //create a new store module:
        store.registerModule("VueSounds", storeModule);

        this.store = store;
        this.getSound = getSound;
        this.add = add;

        //add sounds to the store:
        let sounds = typeof options === "undefined" ? undefined : options.sounds;
        if (sounds && sounds.length > 0)
            this.store.dispatch("addSounds", ...sounds);
    }
}

export default VueSounds;
