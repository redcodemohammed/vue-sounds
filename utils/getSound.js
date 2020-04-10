/**
 *
 * @param {String} audioName
 *
 */
import Player from "../classes/player";

export default function (audioName) {
    if (typeof audioName !== "string" || audioName.length <= 0) {
        throw new Error("Invalid audioName");
    }
    // find the audio object:
    let audioObject = this.store.getters.getSingleSound(audioName);
    return new Player(audioObject.url);
}
