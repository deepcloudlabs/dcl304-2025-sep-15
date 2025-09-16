let numbers = [4, 8, 15, 16, 23, 42]
let lost = [...numbers]; // array cloning!
console.log(numbers)
console.log(lost)
numbers[2]++;
console.log(numbers)
console.log(lost)
