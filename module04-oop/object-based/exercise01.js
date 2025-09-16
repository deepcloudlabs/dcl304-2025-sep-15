let jack = {
    first_name: 'Jack',
    last_name: 'Bauer',
    identity: 1234567890,
    salary: 1000000,
    iban: "TR1",
    email: "jack.bauer@mail.com",
    birth_year: 1968,
    greet: function() {
        console.log(`Hello, ${this.first_name}, ${this.last_name}!`);
    }
}
console.log(jack.birth_year);
jack.greet();