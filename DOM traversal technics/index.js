let element = document.querySelector("#fruit");
let childeren = Array.from(element.children);

childeren.forEach(child => child.style.backgroundColor="cyan");

// .firstElementChild
// .lastE1ementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)