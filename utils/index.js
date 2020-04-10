import add from "./add";
import get from "./get";
import storeModule from "./store";
import getAll from "./getAll";

class VueSounds {
    constructor(store, options) {
        //make sure there is a store:
        if (typeof store !== "object") {
            throw new Error("Please pass a valid vuex store to the plugin.");
        }

        //create a new store module:
        store.registerModule("VueSounds", storeModule);

        this.store = store;
        this.get = get;
        this.add = add;
        this.getAll = getAll;

        //add sounds to the store:
        let sounds = typeof options === "undefined" ? undefined : options.sounds;
        if (sounds && sounds.length > 0)
            sounds.forEach(sound => this.add(sound.name, sound.url));
    }
}

export default VueSounds;
