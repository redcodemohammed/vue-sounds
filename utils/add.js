/**
 *
 * @param {String} audioName
 * @param {String} url
 */
export default function (audioName, url) {
    if (typeof audioName !== "string" || audioName.length <= 0) {
        throw new Error("Invalid audioName");
    }
    if (typeof url !== "string" || url.length <= 0) {
        throw new Error("Invalid audioName");
    }

    //add it to the store:
    this.store.dispatch("addSound", {
        name: audioName,
        url
    });
}
