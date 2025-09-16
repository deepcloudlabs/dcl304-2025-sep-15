function fun(x,y,z){
    if(arguments.length !== 3)
        throw "wrong number of arguments";
    for (let arg of arguments){
        console.log(arg);
    }
    console.log(arguments[1]); // second argument/parameter
    return x + y * z ; // know-how
}

// application
console.log(fun(1,2,3)); // x=1,y=2,z=3 -> 7
console.log(fun()); // "wrong number of arguments"
console.log(fun(1,2,3,9)); // x=1,y=2,z=3 -> "wrong number of arguments"

