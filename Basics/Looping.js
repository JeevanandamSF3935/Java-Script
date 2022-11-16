//Looping
//For Loop
document.write("<h1>For_loop-Exercise</h1>");
const myArray = ["a","b","c"];
for(let i=0;i<myArray.length;i++){
    document.write(`Index : ${i}; Value : ${myArray[i]}<br/>`);
}
//While
document.write("<h1>While-Exercise</h1>");
let i = 0;
while(i<myArray.length){
    document.write(`Index : ${i}; Value : ${myArray[i]}<br/>`);
    i++;
}
//Do-While
document.write("<h1>Do_While-Exercise</h1>");
i=0;
do{
    document.write(`Index : ${i}; Value : ${myArray[i]}<br/>`);
    i++;
}while(i<myArray.length);
//For-Each
document.write("<h1>For_Each-Exercise</h1>");
myArray.forEach(function(element,index){
    document.write(`Index : ${index}; Value : ${element}<br/>`);
});
//For-Of
document.write("<h1>For_Of-Exercise</h1>");
for(var [index,element] of myArray.entries()){
    document.write(`Index : ${index}; Value : ${element}<br/>`);
};
//For-In
document.write("<h1>For_In-Exercise</h1>");
for(var property in myArray){
    document.write(`Index : ${property}; Value : ${myArray[property]}<br/>`);
}