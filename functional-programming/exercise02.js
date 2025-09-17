let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtreleme(veriler,filter_fun) {
    const filtrelenmis_veriler = [];
    for (const veri of veriler) {
        if (filter_fun(veri)) {
            filtrelenmis_veriler.push(veri);
        }
    }
    return filtrelenmis_veriler;
}

let cift_sayilar = filtreleme(numbers, (sayi) => sayi % 2 === 0);
for (const sayi of cift_sayilar) {
    console.log(sayi);
}