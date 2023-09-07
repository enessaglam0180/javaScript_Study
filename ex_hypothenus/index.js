let a;
let b;
let c;
/*
a=window.prompt("What is one side of triangle:");
a=Number(a);

b=window.prompt("What is another side of triangle:");
b=Number(b);

c=Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
console.log("The hypothenuse is: ",c);
*/

document.getElementById("submitButton").onclick=function(){
    a=document.getElementById("aTextBox").value;
    a=Number(a);

    b=document.getElementById("bTextBox").value;
    b=Number(b);

    c=Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

    document.getElementById("clabel").innerHTML="Side c = "+c;
}
