let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function* filtreleme(veriler,filter_fun) {
    console.log("filtreleme fonksiyonu calisti");
    for (const veri of veriler) {
        if (filter_fun(veri)) {
            console.log(`yielding ${veri} in filtreleme...`);
            yield veri;
        }
    }
}

function* donustur(veriler,filter_map) {
    console.log("donustur fonksiyonu calisti");
    for (const veri of veriler) {
            console.log(`yielding ${veri} in donustur...`);
            yield filter_map(veri);
    }
}

console.log("uygulama calisti");
for (let cift_sayi of donustur(filtreleme(numbers, (sayi) => sayi % 2 === 0),n => n**3)){
    console.log(`in for loop: ${cift_sayi}`);
}
console.log("uygulama sonlandi");
