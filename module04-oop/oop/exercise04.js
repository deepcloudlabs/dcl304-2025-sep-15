class Employee {
    constructor({identity, full_name, salary, iban, department, full_time}) {
        this.identity = identity;
        this.full_name = full_name;
        this.salary = salary;
        this.iban = iban;
        this.department = department;
        this.full_time = full_time;
        // this.sayHello = this.sayHello.bind(this);
        // this.increaseSalary = this.increaseSalary.bind(this);
    }

    increaseSalary = (percentage) => {
        this.salary = this.salary * (1 + percentage / 100);
    }

    sayHello = () => {
        //console.log(this)
        console.log(`Hello, ${this.full_name}!`);
    }
}

let kate = new Employee({
    identity: "1111111110",
    full_name: "kate austen",
    salary: 2000000,
    iban: "TR2",
    department: "SALES",
    full_time: false
});
kate.increaseSalary(50);
setInterval(kate.sayHello, 1_000)


