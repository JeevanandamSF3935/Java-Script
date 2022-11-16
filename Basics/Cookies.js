window.onload = function(){
    if(document.cookie.length != 0){
        var cookieString = document.cookie;
        var colorNameArray = cookieString.split('=',',');
        document.bgColor = colorNameArray[1];
        document.getElementById("colorselection").value = colorNameArray[1];
    }
}
function SetColour(){
    var selectedColor = document.getElementById("colorselection").value;
    if(selectedColor != "Select Color"){
        document.bgColor = selectedColor;
        var cookieString = "color="+selectedColor+"expires=Wed 16 Nov 2022 03:00:00 UTC,path=/";
        document.cookie = cookieString;
    }
    else{
        document.bgColor = "white";
        document.cookie = "color=white,expires=Wed 16 Nov 2022 03:00:00 UTC,path=/";
    }
}