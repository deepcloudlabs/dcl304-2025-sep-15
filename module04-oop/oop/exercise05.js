class Account {
    #iban;
    #balance;

    constructor(iban, balance) {
        this.#iban = iban;
        this.#balance = balance;
    }

    get iban() {
        return this.#iban;
    }

    set iban(new_iban) {
        if (new_iban === this.#iban)
            throw "No change!";
        if (!/^TR\d+$/.test(new_iban))
            throw "Invalid iban!";
        this.#iban = new_iban;
    }

    get balance() {
        return this.#balance;
    }

    withdraw(amount) {
        if (amount <= 0) throw "Amount must be a positive integer";
        if (amount >= this.#balance) throw `Amount must be less than or equal to ${this.#balance}`;
        this.#balance -= amount;
    }

    deposit(amount) {
        if (amount <= 0) throw "Amount must be a positive integer";
        this.#balance += amount;
    }
}

const acc1 = new Account("TR1", 100_000);
const acc2 = new Account("TR2", 200_000);
//acc1.#balance -= 1_000_000_000;
console.log(acc1.balance);
console.log(acc1.iban);
acc1.iban = "TR234243";
console.log(acc1.iban,acc1.balance);
//acc1.withdraw(1_000_000);