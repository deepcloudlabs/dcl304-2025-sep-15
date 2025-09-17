let numbers = new Array(4, 8, 15, 16, 23, 42);
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers.length) // 6
numbers[100] = 100;
console.log(numbers.length) // 101
console.log(numbers[99]);
numbers[-20] = 20;
console.log(numbers.length) // 101
console.log(numbers[-20]); // 20
console.log(numbers["-20"]); // 20
console.log(numbers["100"]); // 100
numbers[3.1415] = "jack bauer";
console.log(numbers[3.1415]); // jack bauer
console.log(numbers.length) // 101
console.log(numbers)
x = {}
x[3.1415] = "pi";
console.log(x)
for (let i = 0; i < numbers.length; i++) { // array
    console.log(numbers[i]);
}

for (let i in numbers) { // object + array
    console.log(i,numbers[i]);
}

for (let number of numbers) { // array
    console.log(number);
}

numbers.forEach(function(number) {console.log(number);}); // array