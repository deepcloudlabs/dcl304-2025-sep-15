async function gun() {
    if (Math.random() > 0.5)
        throw "Ooopss";
    return 42;
}

console.log("Application is started!");
gun().then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log("Done"));
console.log("gun() is returned!");
console.log("Application is completed!");
