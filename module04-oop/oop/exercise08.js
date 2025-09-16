class Account {
    constructor(iban,balance) {
        this.iban = iban;
        this.balance = balance;
    }

    withdraw(amount) {
        console.log("Account's withdraw is running...");
    }
    deposit(amount) {
        console.log("Account's deposit is running...");
    }
}

class CheckingAccount extends Account {
    constructor(iban,balance,overdraft_amount) {
        super(iban,balance);
        this.overdraft_amount = overdraft_amount;
    }

    withdraw(amount) {
        console.log("CheckingAccount's withdraw is running...");

    }

}

let accounts = [];
accounts.push(new Account("TR1", 100_000));
accounts.push(new CheckingAccount("TR2", 200_000, 1_000));
accounts.push(new Account("TR3", 300_000));
accounts.push(new CheckingAccount("TR4", 400_000, 5_000));
for (let account of accounts) {
    account.withdraw(750);
}
