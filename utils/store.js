export default {
    state: {
        sounds: []
    },
    getters: {
        getAllSounds(state) {
            return state.sounds;
        },
        getSingleSound: state => name => state.sounds.find(sound => sound.name === name)
    },
    actions: {
        addSounds({ commit }, ...sound) {
            commit("addSounds", ...sound)
        }
    },
    mutations: {
        addSounds(state, ...sound) {
            state.sounds.push(...sound);
        }
    }
}
