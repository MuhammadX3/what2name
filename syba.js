/* Finding html elements */

// getElementById
const find = document.getElementById("soul");
console.log(find);

// getElementByTagName
const tagged = document.getElementsByTagName("h1");
console.log(tagged);

// getElementByClassName

const getClass = document.getElementsByClassName("nett");
console.log(getClass);

/* Changing html elements */

// InnerHtml

find.innerHTML = "ho";

// Attribute

// find.attributes =

// Style property

find.style = "color: tan";

// SetAttribute

// find.setAttribute();

/* Adding and Deleting Elements */

// createElements

const body = document.body;
const newDiv = document.createElement("div");
newDiv.innerText = "Mabu";

body.append(newDiv);

// removeChild

newDiv.remove();

/* Adding Events Handlers */

const pace = (document.getElementById("corpse").onclick = function () {});

const change = (document.getElementById("soul").innerHTML = "WASSAP");

const tube = (document.getElementById("corpse").attributes = "h2");

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
