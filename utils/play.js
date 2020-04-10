/**
 *
 * @param {String} audioName
 *
 */
export default function (audioName) {
    if (typeof audioName !== "string" || audioName.length <= 0) {
        throw new Error("Invalid audioName");
    }
}
