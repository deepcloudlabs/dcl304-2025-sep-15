function fun(x, y, z) {
    if ( z === 0)
        throw "z cannot be zero"; // (1) error
    return x + y * z; // (2): success
    // generator function: yield (3) // success -> lazy evaluation
}


let result = fun(1, 2, 3);

console.log(result);

try{
    result = fun(1, 2, 0);
}catch (e) {
    console.log(e);
}
