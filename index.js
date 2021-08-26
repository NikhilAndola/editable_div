console.log("How to make a editable div");

// creating a new element 
let divElem = document.createElement("div");

// creating a text node and checking it with local Storage.
let val = localStorage.getItem("text");
    let text;
    if (val == null){
        text = document.createTextNode("This is my element. Click to edit it.");
    } else {
        text = document.createTextNode(val);
    }

// setting attributes for created div (divElem)
divElem.setAttribute("id","elem");
divElem.setAttribute("class","elem");
divElem.setAttribute("style","border:2px solid red; width: 254px; margin:34px; padding: 23px;");

// inserting the text into divElem using appendChild.
divElem.appendChild(text);

// Grabbing the elements from DOM.
let container = document.querySelector(".container");
let first = document.getElementById("myFirst");

// inserting the element before element with id myFirst
container.insertBefore(divElem, first); 
console.log(divElem, container, first);

// Adding event listener to divElem.

divElem.addEventListener("click", () => {
    let noTextArea = document.getElementsByClassName("textarea").length;
    if(noTextArea == 0){
        let html = elem.innerHTML;
        divElem.innerHTML = `<textarea id="textarea" class="textarea" rows="3">${html}</textarea>`
    }
    // Listen for the blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener("blur", () => {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    })
    
})


