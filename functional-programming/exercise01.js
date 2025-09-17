let employees = [
    {"fullname": "jack shephard", "department": "Sales", "salary": 100000, "year": 1978, "fulltime": true},
    {"fullname": "kate austen", "department": "IT", "salary": 200000, "year": 1985, "fulltime": false},
    {"fullname": "ben linus", "department": "Finance", "salary": 150000, "year": 1967, "fulltime": true},
    {"fullname": "james sawyer", "department": "HR", "salary": 70000, "year": 1979, "fulltime": true},
    {"fullname": "kim kwon", "department": "Sales", "salary": 120000, "year": 1986, "fulltime": true},
    {"fullname": "sun kwon", "department": "IT", "salary": 200000, "year": 1984, "fulltime": false},
    {"fullname": "hugo reyes", "department": "IT", "salary": 120000, "year": 1992, "fulltime": true}
];

// imperative programming
let total_full_time_it_salaries = 0;
for (let employee of employees) {
    if (employee.department === "IT") {
        if (employee.fulltime) {
            let salary = employee.salary;
            total_full_time_it_salaries += salary;
        }
    }
}
console.log(total_full_time_it_salaries);
// select sum(salary)
// from employees
// where department = "IT" and fulltime
// declarative programming -> SQL, functional programming
const if_it_employee = employee => employee.department === "IT";
const if_full_time_employee = employee => employee.fulltime;
const to_salary = employee => employee.salary;
const to_sum = (a, b) => a + b;
total_full_time_it_salaries =
employees.filter(if_it_employee)
         .filter(if_full_time_employee)
         .map(to_salary)
         .reduce(to_sum, 0);
console.log(total_full_time_it_salaries);
// C#   -> LINQ
// Java -> Stream API
// C++  -> Ranges API
// Python -> map/reduce -> generator function  -> lazy evaluation, immutability
// JS     -> map/reduce -> generator function ?
