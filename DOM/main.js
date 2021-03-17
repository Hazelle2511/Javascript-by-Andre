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

dom = document.querySelector("h1").style.backgroundColor = "yellow";
console.log(dom);
