class Player {
    constructor(url) {
        this.audio = new Audio(url);
    }
    play() {
        return this.audio.play();
    }

    pause() {
        return this.audio.pause();
    }

    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
    }
    volume(vol) {
        if (!!vol) {
            if (typeof vol !== "number")
                throw new Error("Type of vol must be number");
            else if (vol > 1 || vol < 0)
                throw new Error("vol must be in range 0-1");
            this.audio.volume = vol;
        }
        return this.audio.volume;
    }
}

export default Player;
