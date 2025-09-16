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

    create_random_digit = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    create_secret = (level) => {
        const digits = [this.create_random_digit(1, 9)];
        while (digits.length < level) {
            const digit = this.create_random_digit(0, 9);
            if (digits.includes(digit)) continue;
            digits.push(digit);
        }
        return Number(digits.join(''));
    }

    create_move = ({guess, secret}) => {
        let [perfect_match, partial_match] = this.evaluate(guess, secret);
        let evaluation_message = this.create_evaluation_message({perfect_match, partial_match});
        return new Move(guess, perfect_match, partial_match, evaluation_message);
    }

    evaluate(guess, secret) {
        let guess_as_string = guess.toString();
        let secret_as_string = secret.toString();
        let perfect_match = 0;
        let partial_match = 0;
        for (let i = 0; i < secret_as_string.length; i++) {
            let s = secret_as_string.charAt(i);
            for (let j = 0; j < guess_as_string.length; j++) {
                let g = guess_as_string.charAt(j);
                if (g === s) {
                    if (i === j) {
                        perfect_match++;
                    } else {
                        partial_match++;
                    }
                }
            }
        }
        return [perfect_match, partial_match];
    }

    play = (guess) => {
        this.tries++;
        if (guess === this.secret) {
            this.level++;
            this.initialize_game_level({level: this.level});
        } else {
            this.moves.push(this.create_move({
                secret: this.secret,
                guess
            }));
        }
        this.update_view();
    }

    countdown = () => {
        this.counter--;
        //TODO: decrement counter and develop game logic
        this.update_view();
    }

    create_evaluation_message = ({perfect_match, partial_match}) => {
        if (perfect_match === 0 && partial_match === 0) {
            return "No match";
        }
        let evaluation = "";
        if (partial_match > 0) {
            evaluation = `-${partial_match}`;
        }
        if (perfect_match > 0) {
            evaluation = `${evaluation}+${perfect_match}`;
        }
        return evaluation;
    }
}