let dom = document.getElementsByTagName("h1");
dom = document.getElementsByClassName("second");
dom = document.getElementById("first");
dom = document.getElementsByClassName("second")[0];
// console.log(dom)

//RECOMMENDED
dom = document.querySelector("h1");
dom = document.querySelector("li");
dom = document.querySelectorAll("li");
dom = document.querySelectorAll("h1, li");
dom = document.querySelector("li").getAttribute("random");
dom = document.querySelector("li").setAttribute("random", "1000");

// console.log(dom)
//Changing styles
//style.{property}//ok

// dom = document.querySelector("h1").style.backgroundColor = "yellow";
// console.log(dom);

//className//best

// var h1 = document.querySelector("h1");
// h1.className = "classTitle";

//classList//best
let li;
li = document.querySelector("li").classList;
// console.log(li)
li = document.querySelector("li").classList.add("classTitle");
// console.log(li)
li = document.querySelector("li").classList.remove("classTitle");
li = document.querySelector("li").classList.add("done");
li = document.querySelector("li").classList.toggle("done");

// //Bonus
// //innerHTML//dangerous
// let h1;
// h1 = document.querySelector("h1").innerHTML = "<strong>!!!!!!</strong>";

// //parent element
// li = document.querySelectorAll("li")[1];
// li = document.querySelectorAll("li")[1].parentElement;
// li = document.querySelectorAll("li")[1].parentElement.parentElement;

// //children
// li = document.querySelectorAll("li")[1].parentElement.parentElement.children;
// console.log(li);

//IT IS  IMPORTANT TO CACHE SELECTORS IN VARIABLES
// var h1 = document.querySelector("h1");

//134 DOM EVENTS
//For button

// var button = document.getElementsByTagName("button");
//Returns an array the getElementsByTagName. You cant use method on array
// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseenter", function () {
//   console.log("click!!!!");
// });

//

// // First version of code or long version
// const button = document.getElementById("enter");
// const input = document.getElementById("userinput");
// const ul = document.querySelector("ul");

// button.addEventListener("click", function () {
 
//   if(input.value.length > 0 ) {
//   const li = document.createElement("li");

//    li.appendChild(document.createTextNode(input.value));
//   ul.appendChild(li);
//   input.value = "";
//   }

// });

// //We can also use event.which besides event.keyCode
// input.addEventListener("keypress", function (event) {

//   // console.log(event)
//   if(input.value.length > 0 && event.keyCode === 13) {
//   const li = document.createElement("li");
//    li.appendChild(document.createTextNode(input.value));
//   ul.appendChild(li);
//   input.value = "";
//   }

// });


//To make it more shorter 

const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if(inputLength() > 0 ) {
   createListElement();
  }

}

function addListAfterKeypress(event) {
  if(inputLength() > 0 && event.keyCode === 13) {
  createListElement();
  }

}

button.addEventListener("click", addListAfterClick);


input.addEventListener("keypress", addListAfterKeypress);