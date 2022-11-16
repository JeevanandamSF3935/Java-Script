function OnOver(){
    var collect = document.getElementById("btn");
    collect.style.background='blue';
    collect.style.color='yellow';
}
function OnOut(){
    var collect = document.getElementById("btn");
    collect.style.background='black';
    collect.style.color='white';
}
function OnClick(){
    if(confirm("Are you sure you want to submit ?")){
        alert("You selected ok!");
        return true;
    }
    else{
        alert("You selected cancel!");
        return false;
    }
}
function OnTyping(elementId){
    var collect = document.getElementById(elementId);
    collect.style.background="white";
    if(collect.value==""){
        collect.style.background="red";
    }
    else{
        collect.style.background="green";
    }
}