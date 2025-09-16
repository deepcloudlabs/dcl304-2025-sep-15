function fun(x,y,z,t=0){
    return x + y * z - t; // know-how
}

// application
console.log(fun(1,2,3)); // x=1,y=2,z=3,t=0 -> 7
console.log(fun(1,2,3,9)); // x=1,y=2,z=3,t=9 -> -2

