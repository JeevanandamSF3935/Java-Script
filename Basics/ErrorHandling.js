try{
    var numerator = Number(prompt("Enter numerator"));
    var denominator = Number(prompt("Enter denominator"));
    Divide(numerator,denominator);
}catch(e){
    document.write(e.error+"<br/>");
    document.write(e.message);
}finally{
    document.write("<br/>This is finally block");
}
//user defined exception
function Divide(numerator,denominator){
    if(denominator==0){
        throw {
            Error: "Divided by 0",
            message:"Cannot divide by 0"
        }
    }
    else{
        document.write("<br/> The result is "+numerator/denominator);
    }
}