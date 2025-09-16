let numbers = [42, 23, 8, 15, 16, 4];
function numeric_order(a, b) {
    if (a < b)
        return -1;
    if (a === b)
        return 0;
    return +1;
}
function numeric_asc_order(a, b) {
    return a-b;
}

function numeric_desc_order(a, b) {
    return b-a;
}

console.log(numbers);
numbers.sort(numeric_desc_order) // Higher Order Function
numbers.sort(function numeric_asc_order(a, b) {
    return a-b;
})
              // lambda expression: anonymous function, arrow function
numbers.sort((a, b) => b-a);
console.log(numbers);
