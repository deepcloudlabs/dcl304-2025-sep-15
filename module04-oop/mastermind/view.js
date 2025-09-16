class View {
    constructor() {
        this.level = document.querySelector("#level");
        this.lives = document.querySelector("#lives");
        this.tries = document.querySelector("#tries");
        this.timeout = document.querySelector("#timeout");
        this.guess = document.querySelector("#guess");
        this.playButton = document.querySelector("#play");
        //TODO: handle other view elements
    }

    refresh = (mastermind) => {
        this.lives.innerHTML = mastermind.lives;
        this.level.innerHTML = mastermind.level;
        this.tries.innerHTML = mastermind.tries;
        this.timeout.innerHTML = mastermind.counter;
        //TODO: handle other view elements
    }
    init = (mastermind) => {
        this.mastermind = mastermind;
        this.playButton.addEventListener("click",this.play);
    }
    play = (event) => {
        console.log("Play button is clicked");
        this.mastermind.play(Number(this.guess.value));
    }
}