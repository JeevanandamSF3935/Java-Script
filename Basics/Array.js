//Array
document.write("<h1>Array-Exercise</h1>");
let names = new Array("Jeeva","Vikram","Kishore");
for(var property in names){
    document.write(`Index : ${property}; Value : ${names[property]}<br/>`);
}