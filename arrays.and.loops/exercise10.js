let numbers = [4,8,15,16,23,42];
// external/explicit loop #1
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// external/explicit loop #2
for (let i in numbers) {
    console.log(numbers[i]);
}
// external/explicit loop #3
for (let number of numbers) {
    console.log(number);
}
// internal/implicit loop #4
numbers.forEach(function(number) {console.log(number);});
numbers.forEach(number => console.log(number));