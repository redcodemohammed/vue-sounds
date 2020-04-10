import Player from "../classes/player";

/**
 * @param {String} audioName - The name of the audio clip you want to get.
 */
export default function (audioName) {
    //check if the name is valid:
    if (typeof audioName !== "string" || audioName.length <= 0) {
        throw new Error("Invalid audioName");
    }

    // find the audio object:
    let audioObject = this.store.getters.getSingleSound(audioName);
    if (!audioObject) throw new Error("No such an audio clip, try to add it first");

    return new Player(audioObject.url);
}
