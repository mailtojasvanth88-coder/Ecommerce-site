let productContainer = document.getElementById("products");
let search = document.getElementById("search");
let productlist = productContainer.querySelectorAll("div");
search.addEventListener("keyup", function(){

let enteredvalue = event.target.value.toUpperCase()
for(count=0;count<productlist.length;count=count+1)
{
    let productname = productlist[count].querySelector("p").textContent
    if(productname.toUpperCase().indexOf(enteredvalue)<0)
    {
        productlist[count].style.display="none"
    }
    else
    {
        productlist[count].style.display="block"
    }
}
})