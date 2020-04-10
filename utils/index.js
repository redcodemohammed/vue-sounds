import add from "./add";
import play from "./play";
import storeModule from "./store";

class VueSounds {
    constructor(store) {
        //create a new store module:
        store.registerModule("VueSounds", storeModule);
        this.store = store;
        this.play = play;
        this.add = add;
    }
}

export default VueSounds;
