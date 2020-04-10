import add from "./add";
import play from "./play";

class VueSounds {
    constructor(store) {
        this.store = store;
        this.play = play;
        this.add = add;
    }
}

export default VueSounds;
