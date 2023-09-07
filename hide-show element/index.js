const myButton=document.querySelector("myButton");
const myImg=document.querySelector("myImg");

myButton.addEventListener("click",() => {

    if (myImg.style.display=="none") { //visibility="hidden"
        myImg.style.display="block"; //visibility="visible"
    } 
    else {
        myImg.style.visibility="hidden";
    }
})