class View {
    constructor() {
        this.level = document.querySelector("#level");
        this.lives = document.querySelector("#lives");
        this.tries = document.querySelector("#tries");
        this.timeout = document.querySelector("#timeout");
        this.guess = document.querySelector("#guess");
        this.moves = document.querySelector("#moves");
        this.playButton = document.querySelector("#play");
        //TODO: handle other view elements
    }

    refresh = (mastermind) => {
        this.lives.innerHTML = mastermind.lives;
        this.level.innerHTML = mastermind.level;
        this.tries.innerHTML = mastermind.tries;
        this.timeout.innerHTML = mastermind.counter;
        this.clear(this.moves);
        for (let move of mastermind.moves) {
            let rows= this.moves.insertRow();
            let cellGuess= rows.insertCell(0);
            cellGuess.appendChild(
                document.createTextNode(move.guess)
            );
            let cellMessage= rows.insertCell(1);
            cellMessage.appendChild(
                document.createTextNode(move.evaluation)
            );
        }
        //TODO: handle other view elements
    }

    clear = (element) => {
        let node = element;
        while (element.hasChildNodes()) {
            if (node.hasChildNodes()) {
                node = node.lastChild;
            } else {
                node = node.parentNode;
                node.removeChild(node.lastChild);
            }
        }
    }

    init = (mastermind) => {
        this.mastermind = mastermind;
        this.playButton.addEventListener("click", this.play);
    }
    play = (event) => {
        this.mastermind.play(Number(this.guess.value));
    }
}