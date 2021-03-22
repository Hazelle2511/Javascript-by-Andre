let dom = document.getElementsByTagName("h1");
dom = document.getElementsByClassName("second");
dom = document.getElementById("first");
dom = document.getElementsByClassName("second")[0];

//RECOMMENDED
dom = document.querySelector("h1");
dom = document.querySelector("li");
dom = document.querySelectorAll("li");
dom = document.querySelectorAll("h1, li");
dom = document.querySelector("li").getAttribute("random");
dom = document.querySelector("li").setAttribute("random", "1000");

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
li = document.querySelector("li").classList.add("classTitle");
li = document.querySelector("li").classList.remove("classTitle");
li = document.querySelector("li").classList.add("done");
li = document.querySelector("li").classList.toggle("done");

//Bonus
//innerHTML//dangerous
let h1;
h1 = document.querySelector("h1").innerHTML = "<strong>!!!!!!</strong>";

//parent element
li = document.querySelectorAll("li")[1];
li = document.querySelectorAll("li")[1].parentElement;
li = document.querySelectorAll("li")[1].parentElement.parentElement;

//children
li = document.querySelectorAll("li")[1].parentElement.parentElement.children;
console.log(li);

//IT IS  IMPORTANT TO CACHE SELECTORS IN VARIABLES
// var h1 = document.querySelector("h1");

//For button

// var button = document.getElementsByTagName("button");
//Returns an array the getElementsByTagName. You cant use method on array
var button = document.getElementsByTagName("button")[0];

button.addEventListener("mouseenter", function () {
  console.log("click!!!!");
});
