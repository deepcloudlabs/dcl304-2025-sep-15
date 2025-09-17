let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function* filtreleme(veriler,filter_fun) {
    console.log("filtreleme fonksiyonu calisti");
    for (const veri of veriler) {
        if (filter_fun(veri)) {
            yield veri;
        }
    }
}

console.log("uygulama calisti");
let cift_sayilar = filtreleme(numbers, (sayi) => sayi % 2 === 0);
while(true){
    let {value, done} = cift_sayilar.next();
    if (done) break;
    console.log(value);
}
console.log("uygulama sonlandi");
