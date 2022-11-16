function InputValidate(){
    var firstName = document.getElementById("firstname").value.trim();
    var lastName = document.getElementById("lastname").value.trim();
    var passWord = document.getElementById("password").value.trim();
    if(firstName==""||passWord==""){
        alert("Firstname or password can't be null");
        return false;
    }
    else{
        document.getElementById("span_firstname").innerHTML
        return true;
    }
}