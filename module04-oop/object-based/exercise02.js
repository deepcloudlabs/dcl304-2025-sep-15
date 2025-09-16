jack = {}
jack.first_name = "Jack";
jack.last_name = "Bauer";
jack.salary = 100000;
jack.iban = "TR1"
jack.birth_year = 1968;
jack.greet = function () {
    console.log(`Hello, ${this.first_name}, ${this.last_name}!`);
}
console.log(jack.birth_year);
jack.greet();