function Show(){
    var imagediv=document.getElementById("showimagediv");
    var datadiv=document.getElementById("showdatadiv");
    var copyrightdiv=document.getElementById("showcopyrightdiv");
    imagediv.style.display='block';
    datadiv.style.display='block';
    copyrightdiv.style.display='block';

    var department = document.getElementById("depatmentshow");
    var book = document.getElementById("bookshow");
    var authorMail = document.getElementById("authormailshow");
    var authorName = document.getElementById("authornameshow");
    var published = document.getElementById("publishshow");
    var price = document.getElementById("priceshow");
    department.innerHTML=localStorage.getItem('department');
    book.innerHTML=localStorage.getItem('bookname');
    authorMail.innerHTML=localStorage.getItem('authormail');
    authorName.innerHTML=localStorage.getItem('authorname');
    published.innerHTML=localStorage.getItem('publish');
    price.innerHTML=localStorage.getItem('price');
}