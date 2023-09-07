// spread operator = allows an iterable such as an
//                  array or string to be expanded
//                  in places where zero or more
//                  arguments are expected
//                  (unpacks the elements)
/*
let numbers=[1,2,3,4,5,6,7,8,9];
let maximum = Math.max(...numbers);
console. log(maximum);
*/

let class1=["spongebob","patrick","sandy"];
let class2=["squidward","mr.krabs","plankton"];

class1.push(...class2);  //class2 elemanları ayrılarak eklenir

console.log(...class1);  //çıktıda her eleman ayrık durur
