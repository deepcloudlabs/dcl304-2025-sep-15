class Mastermind {
    constructor(view) {
        this.initialize_game_level({level: 3});
        this.timerId = setInterval(this.countdown, 1_000);
        this.view = view;
    }

    initialize_game_level = ({level}) => {
        this.level = level;
        this.secret = this.create_secret(this.level);
        this.lives = 3;
        this.tries = 0;
        this.counter = 60;
        this.max_moves = 10;
        this.moves = [];
    }

    update_view = () => {
        this.view.refresh(this);
    }

    create_secret = (level) => {
        //TODO: create an integer with distinct #level digits
        return 549;
    }

    play = (guess) => {
        this.tries++;
        //TODO: develop game logic
        this.update_view();
    }

    countdown = () => {
        this.counter--;
        //TODO: decrement counter and develop game logic
        this.update_view();
    }
}