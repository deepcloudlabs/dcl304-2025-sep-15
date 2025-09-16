//14:35
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
    
    create_random_digit = (min,max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    create_secret = (level) => {
        const digits = [this.create_random_digit(1,9)];
        while(digits.length < level) {
            const digit = this.create_random_digit(0,9);
            if(digits.includes(digit)) continue;
            digits.push(digit);
        }
        return Number(digits.join(''));
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