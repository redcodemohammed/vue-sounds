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
}

export default Player;
