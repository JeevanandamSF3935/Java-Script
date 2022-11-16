//Conditional
//If-Else
document.write("<h1>If_else-Exercise</h1>");
var num1 = 5,num2 = 6;
if(num1 > 0){
    if(num1%2==0){
        document.write("<h3>Number is positive and even number</h3>");
    }
    else{
        document.write("<h3>Number is positive and odd number</h3>");
    }
}
else if(num1 < 0){
    document.write("Number is negative");
}
else{
    document.write("Number is neither negative nor positive");
}
//Switch
document.write("<h1>Switch-Exercise</h1>");
var choice = 1;
switch(choice){
    case 1:
    {
        document.write("Sunday<br>");
        break;
    }
    case 2:
    {
        document.write("Monday");
        break;
    }
    case 3:
    {
        document.write("Tuesday");
        break;
    }
    case 4:
    {
        document.write("Wednesday");
        break;
    }
    case 5:
    {
        document.write("Thursday");
        break;
    }
    case 6:
    {
        document.write("Friday");
        break;
    }
    case 7:
    {
        document.write("Saturday");
        break;
    }
    default:
    {
        document.write("Invalid choice");
        break;
    }
}