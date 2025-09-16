class Employee {
    constructor({identity, full_name, salary, iban, department, full_time}) {
        this.identity = identity;
        this.full_name = full_name;
        this.salary = salary;
        this.iban = iban;
        this.department = department;
        this.full_time = full_time;
    }

    increaseSalary(percentage) {
        this.salary = this.salary * (1 + percentage / 100);
    }

    sayHello() {
        console.log(`Hello, ${this.full_name}!`);
    }
}

let jack = new Employee({
    identity: "1234567890",
    full_name: "jack bauer",
    salary: 1000000,
    iban: "TR1",
    department: "IT",
    full_time: true
});

let kate = new Employee({
    identity: "1111111110",
    full_name: "kate austen",
    salary: 2000000,
    iban: "TR2",
    department: "SALES",
    full_time: false
});

jack.sayHello();
jack.increaseSalary(40);
kate.sayHello();
jack.increaseSalary(80);
console.log(jack)
console.log(kate)
