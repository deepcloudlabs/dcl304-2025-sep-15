let meyveler = [
  "elma", "arMUt", "domates", "karpuz", "kiraz",
  "portakal", "mUz", "çilek", "şeftali", "naR"
];

for (let meyve of meyveler){
    if(meyve.match(/^[a-zA-ZğüşiöçİĞÜŞÖÇ]{3}$/)){
        console.log(meyve);
    }
}