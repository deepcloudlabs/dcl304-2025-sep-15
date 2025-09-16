function fun({x,y,radius=0}){
    console.log(arguments.length)
    return x + y * radius;
}
let circle = {x: 100, y: 200, radius: 1_000, pen: {color: "red", width: 5}}
console.log(fun(circle))
console.log(fun({y: 100, x: 200, radius: 100}))