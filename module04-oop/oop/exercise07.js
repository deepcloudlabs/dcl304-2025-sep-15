class Animal {
    constructor(...args) {
        this.legs = args[0].legs;
    }

    walk() {
        console.log(`Animal with ${this.legs} legs is walking now...`);
    }

    eat() {
        throw new Error(`You should implement play in ${this.constructor.name}`);
    }

};

let Pet = (Base) => class extends Base {
    constructor(...args) {
        super(...args);
        this.name = args[0].name;
    }

    play() {
        throw new Error(`You should implement play in ${this.constructor.name}`);
    }

};

class Spider extends Animal {
    constructor() {
        super({legs: 8});
    }

    eat() {
        console.log(`Animal with ${this.legs} legs is eating now...`);
    }
}

class Cat extends Pet(Animal) {
    constructor({name = "Tekir"}) {
        super({legs: 4, name});
    }

    play() {
        console.log(`${this.name} is playing now...`);
    }

    eat() {
        console.log(`${this.name} is eating now...`);
    }
}

let animals = [
    new Cat({name: "Tekir"}),
    new Spider(),
    new Cat({name: "Garfield"})
]

for (let animal of animals) {
    animal.walk();
    animal.eat();
    if (typeof animal.play === "function") {
        animal.play();
    }
}
