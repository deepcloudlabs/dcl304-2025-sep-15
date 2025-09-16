function fun() {
    var x = 10;
    for (var i = 0; i < 10; i++) {
        console.log(`[inside the for loop] i=${i}`);
    }
    console.log(`[we left the for loop] i=${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`[inside the for loop] j=${j}`);
    }
    console.log(`[we left the for loop] j=${j}`);
    console.log(x);
}

fun()