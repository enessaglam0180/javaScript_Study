// variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function(){}

// global variable = is declared outside any function
// (if global, var will CHANGE browser's window properties) Global değişken var olarak tanımlanırsa console'a window yazıp bakılabilir.


let name="Bro";

doSomething() ;
function doSomething(){
    for(var i =1; i <= 3; i++){
    // console. log(i);
    }
}
//console.log(i);