let numbers = [42, 23, 8, 15, 16, 4, 15];
console.log(numbers.indexOf(15,0)); // 3
console.log(numbers.indexOf(15,4)); // 6
console.log(numbers.indexOf(56)); // -1
console.log(numbers.includes(15)); // true
console.log(numbers.includes(56)); // false
numbers.splice(3,2)
console.log(numbers); // [ 42, 23, 8, 4, 15 ]
let sliced_numbers = numbers.slice(1,4)
console.log(sliced_numbers); // [ 23, 8, 4 ]
numbers.splice(0)
console.log(numbers);
