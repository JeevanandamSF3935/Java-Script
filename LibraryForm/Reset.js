function ResetDocument(){
    var department_error = document.getElementById("department_error");
    var book_error = document.getElementById("book_error");
    var authormail_error = document.getElementById("authormail_error");
    var authorname_error = document.getElementById("authorname_error");
    var publish_error = document.getElementById("publish_error");
    var price_error = document.getElementById("price_error");
    department_error.textContent="";
    book_error.textContent="";
    authormail_error.textContent="";
    authorname_error.textContent="";
    publish_error.textContent="";
    price_error.textContent="";
}