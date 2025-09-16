function fun(x,y,z){
    return x + y * z;
}

console.log(fun()); // x,y,z: undefined -> NaN
console.log(fun(1)); // x=1,y,z=undefined -> NaN
console.log(fun(1,2)); // x=1,y=2,z=undefined -> NaN
console.log(fun(1,2,3)); // x=1,y=2,z=3 -> 7
console.log(fun(1,2,3,4,5,6,7)); // x=1,y=2,z=3 -> 7

