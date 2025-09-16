let numbers = new Array(4, 8, 15, 16, 23, 42);
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers.length)
numbers[100] = 100;
console.log(numbers.length)
console.log(numbers[99]);
numbers[-20] = 20;
console.log(numbers.length)
console.log(numbers[-20]);
console.log(numbers["-20"]);
console.log(numbers["100"]);
numbers[3.1415] = "jack bauer";
console.log(numbers[3.1415]);
console.log(numbers.length)
console.log(typeof(numbers))
