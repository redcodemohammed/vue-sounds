/**
 * @param {String} audioName - A unique name for the audio clip.
 * @param {String} url - A url that leads to the audio file.
 */
export default function (audioName, url) {
    //check if the name is valid:
    if (typeof audioName !== "string" || audioName.length <= 0) {
        throw new Error("Invalid audioName");
    }

    //check if the name is not used before:
    if (this.store.getters.getSingleSound(audioName)) {
        throw new Error("The name of each audio must be unique");
    }

    let urlRegEx = /https?:\/\/(www\.)[-a-zA-Z0-9\@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()\@:%_\+.~#?&//=]*)/gi;
    if (typeof url !== "string" || url.length <= 0 || !urlRegEx.test(url)) {
        throw new Error("Invalid url");
    }

    //add it to the store:
    this.store.dispatch("addSounds", {
        name: audioName,
        url
    });
}
