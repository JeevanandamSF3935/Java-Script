function OnClickValidate()
{
    var department = document.getElementById("departments").value;
    var book = document.getElementById("book").value;
    var authorMail = document.getElementById("authormail").value;
    var authorName = document.getElementById("authorname").value;
    var published = document.getElementById("publish").value;
    var price = document.getElementById("price").value;
    if(CheckDepartmentError(department)&&CheckBookError(book)&&CheckAuthorMail(authorMail)&&CheckAuthorName(authorName)&&CheckPublishError(published)&&CheckPriceError(price)){
        alert("Successfully Added!");
        localStorage.setItem('department',department);
        localStorage.setItem('bookname',book);
        localStorage.setItem('authormail',authorMail);
        localStorage.setItem('authorname',authorName);
        localStorage.setItem('publish',published);
        localStorage.setItem('price',price);
        return true;
    }
    else{
        return false;
    }
}

function CheckDepartmentError(department){
    var department_error = document.getElementById("department_error");
    if(department=="Department"){
        department_error.textContent="Department should be selected";
        department_error.style.color="red";
        return false;
    }
    else{
        department_error.textContent="";
        return true;
    }
}

function CheckBookError(book){
    var test = /^[A-Za-z]+$/;
    var book_error = document.getElementById("book_error");
        if(book==""){
            book_error.textContent="Book should not be empty";
            book_error.style.color="red";
            return false;
        }
        else if(!test.test(book)){
            book_error.textContent="Book name should not have numeric values";
            book_error.style.color="red";
            return false;
        }
        else if(book.length > 50){
            book_error.textContent="Length of book name should not exceed 50";
            book_error.style.color="red";
            return false;
        }
        else{
            book_error.textContent="";
            return true;
        }
}

function CheckAuthorMail(authorMail){
    var test = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var authormail_error = document.getElementById("authormail_error");
    if(authorMail==""){
        authormail_error.textContent="Author mail should not be empty";
        authormail_error.style.color="red";
        return false;
    }
    else if(!test.test(authorMail)){
        authormail_error.textContent="Author mail should be in correct format";
        authormail_error.style.color="red";
        return false;
    }
    else{
        authormail_error.textContent="";
        return true;
    }
}

function CheckAuthorName(authorName){
    var re = /^[A-Za-z]+$/;
    var authorname_error = document.getElementById("authorname_error");
    if(authorName==""){
        authorname_error.textContent="Author name should not be empty";
        authorname_error.style.color="red";
        return false;
    }
    else if(!re.test(authorName)){
        authorname_error.textContent="Author name should not have numeric values";
        authorname_error.style.color="red";
        return false;
    }
    else if(authorName.length > 50){
        authorname_error.textContent="Length of author name should not exceed 50";
        authorname_error.style.color="red";
        return false;
    }
    else{
        authorname_error.textContent="";
        return true;
    }
}

function CheckPublishError(published){
    var test = /^[0-9]+$/;
    var date = new Date(published);
    published = date.getUTCFullYear();
    var dt= new Date();
    var dateNow = dt.getUTCFullYear();
    var publish_error = document.getElementById("publish_error");
    if(published==""){
        publish_error.textContent="Published should not be empty";
        publish_error.style.color="red";
        return false;
    }
    else if(!test.test(published)){
        publish_error.textContent="Published should not have alphabets";
        publish_error.style.color="red";
        return false;
    }
    else if(published>dateNow){
        publish_error.textContent="Published should not be more than present year";
        publish_error.style.color="red";
        return false;
    }
    else{
        publish_error.textContent="";
        return true;
    }
}

function CheckPriceError(price){
    var re = /^[0-9]+$/;
    var price_error = document.getElementById("price_error");
    if(price==""){
        price_error.textContent="Price should not be empty";
        price_error.style.color="red";
        return false;
    }
    else if(!re.test(price)){
        price_error.textContent="Price should not have text";
        price_error.style.color="red";
        return false;
    }
    else{
        price_error.textContent="";
        return true;
    }
}
