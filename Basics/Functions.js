document.write("<h1>Functions</h1>");
function Add(a,b){
    var total = a + b;
    return total;
}
var total = Add("Hi"," Friends");
document.write(`<h2>The output is : ${total}</h2>`);
var sum = Add(2,5);
document.write(`<h2>The sum is : ${sum}</h2>`);