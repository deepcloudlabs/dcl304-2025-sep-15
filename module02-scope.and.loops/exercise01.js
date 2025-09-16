x = 42; // global variable

function fun() {
   var y = 108; // var -> it is a local variable
}

function gun(){
    var y = 0; // local variable
    y++;
}

console.log(x);
fun()
gun()
console.log(y);