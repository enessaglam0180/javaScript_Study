/*
let element=document.getElementById("myTitle");
element.style.backgroundColor="lightgreen";
*/
/*
let fruits = document.getElementsByName("fruits");

fruits.forEach(fruit => {
    if (fruit.checked) {
        console.log(fruit.value);
    }
})
*/

// let vegetables=document.getElementsByTagName("li");
// vegetables[2].style.backgroundColor="lightgreen";

// let desserts=document.getElementsByClassName("desserts");
// desserts[1].style.backgroundColor="blue";

// let element=document.querySelector(".desserts"); //select first element of group
// element.style.backgroundColor="lightgreen";

let element=document.querySelector("[for]"); //select first element written by "for"
element.style.backgroundColor="lightgreen";

let elements=document.querySelectorAll(".desserts");
elements.forEach(element => {
    element.style.backgroundColor="lightgreen"; 
})