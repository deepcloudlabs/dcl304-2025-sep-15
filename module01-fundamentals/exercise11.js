let names = ['John', 'Ali', 'Jane', 'Şule', 'Şima', 'Bob', 'Alice',"Zehra"];
console.log(names);
names.sort()
console.log(names);
names.sort(function(name1,name2){
    return name1.localeCompare(name2,'tr-TR');
})
console.log(names);


