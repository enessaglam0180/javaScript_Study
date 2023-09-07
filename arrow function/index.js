// arrow function = conpact alternative to a traditional function expression
//      =>


//you need curly braces {} if your function uses more than 1 statement.
// const greeting=(userName) => console.log(`Hello ${userName}`);

// greeting("Bro");


// const percent = function(x,y){
//     return ( x / y ) * 100; 
// }

// const percent =(x,y) => x / y * 100;

// console.log(`${percent(45, 50)}%`);

let grades=[100,50,90,60,80,70];

// grades.sort(descending);
// grades.forEach(print);

// function descending(x,y) {
//     return y - x ;
// }

// function print(element){
//     console.log(element);
// }

//we change the code to function expression

// grades.sort(function(x,y){
//     return y-x;
// });
// grades.forEach(function(element){
//     console.log(element);
// });

//then we can change it to arrow function

grades.sort((x,y) => y - x);
grades.forEach((element) => console.log(element));

