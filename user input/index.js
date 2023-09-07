// How to accept user input

// EASY WAY with a window prompt

// let username = window.prompt("What is your name?");
// console.log(username);

// DIFFICULT WAY HTMI textbox

let username;
document.getElementById("mybutton").onclick=function(){

    username=document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("mylabel").innerHTML="Hello "+username;
}
