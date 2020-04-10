import vueSounds from "./utils/index";

// This is your plugin object. It can be exported to be used anywhere.
const VueSounds = {
    // The install method is all that needs to exist on the plugin object.
    // It takes the global Vue object as well as user-defined options.
    install(Vue, store, options) {
        Vue.prototype.$sounds = new vueSounds(store, options);
    }
};

export default VueSounds;
