//A variable is a container for storing data
//A variable behaves as if it was the value that it contains

//Two steps:
//1. Declaration (var, let, const)
//2. Assignment ( = assignment operator)

let =firstname="Enes";  //string
let age=21;             //numbers
let student=true;       //booleans

console.log("Hello ",firstname)
console.log("You are ",age," years old")
console.log("Enrolled",student)

document.getElementById("p1").innerHTML="Hello "+firstname;
document.getElementById("p2").innerHTML="You are "+age+" years old";
document.getElementById("p3").innerHTML="Enrolled "+student;
