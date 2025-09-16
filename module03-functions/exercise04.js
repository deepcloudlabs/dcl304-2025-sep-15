function fun(x,y,z){
    x = x || 1;
    y = y || 2;
    z = z || 3;
    return x + y * z;
}

console.log(fun()); // x=1,y=2,z=3 -> 7
console.log(fun(1)); // x=1,y=2,z=3 -> 7
console.log(fun(1,2)); // x=1,y=2,z=3 -> 7
console.log(fun(1,2,3,4,5,6,7)); // x=1,y=2,z=3 -> 7

