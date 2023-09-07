// date object = represents a moment in time 
//               since epoch (reference point)

let date;

date = new Date(0);
date = new Date();
date = new Date(2022, 3, 4, 18, 10, 2, 3);
date = new Date("April 20, 2022 16:20:10:02");
/*
let year = date.getFullYear();
let month = date.getMonth();
let dayOfWeek = date.getDay();
let dayofMonth = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let milliSeconds = date.getMilliseconds();

console.log(year);
console.log(month);
console.log(dayOfWeek);
console.log(dayofMonth);
console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(milliSeconds);

date.setFullYear(2023);
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(59);
date.setSeconds(59);
date.setMilliseconds(0);
*/
//date = date.toLocalString();

document.getElementById("myLabel").innerHTML=formatTime(date);

function formatDate(date) {
    let year=date.getFullYear();
    let month=date.getMonth();
    let day=date.getDate();

    return `${month}/${day}/${year}`
}
function formatTime(date) {
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let amOrPm=hours >= 12 ? "PM":"AM";

    hours=(hours % 12) || 12;

    return `${hours}:${minutes}:${seconds} ${amOrPm}`
}