console.log("How to make a editable div");

// creating element and and text node. 
let divElem = document.createElement("div");
let text = document.createTextNode("This is my element. Click to edit it.");

// setting attributes for created div (divElem)
divElem.setAttribute("id","elem");
divElem.setAttribute("class","elem");
divElem.setAttribute("style","border:2px solid red; width: 154px; margin:34px; padding: 23px;");

// inserting the text into divElem using appendChild.
divElem.appendChild(text);

// Grabbing the elements from DOM.
let container = document.querySelector(".container");
let first = document.getElementById("myFirst");

// inserting the element before element with id myFirst
container.insertBefore(divElem, first); 
console.log(divElem, container, first);

Adding



