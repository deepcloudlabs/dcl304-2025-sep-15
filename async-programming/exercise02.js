function fun(){
    if (Math.random() > 0.5)
        throw "Ooopss";
    return 42;
}

function gun(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5)
                reject("Ooopss");
            resolve(42);
        }, 10_000)
    })
}
console.log("Application is started!");
let result = fun();
console.log("fun() is returned!");
gun().then(result => console.log(result))
     .catch(error => console.error(error))
    .finally(() => console.log("Done"));
console.log("Application is completed!");
