// 4 + 5;
// if (4 + 5 === 9) {
//   alert("You are smart");
// }

///118 Functions

//Function Declaration

function sayHello() {
  console.log("Hello");
}
sayHello();

//Function Expression
//Anonymous Function
var sayBye = function () {
  console.log("bye");
};

sayBye();

function sing(song) {
  console.log(song);
}

sing("Thank You Next");
sing("Thank You Next");

// function multiply(a, b) {
//   console.log(a, b);
//   return a * b;
// }
// multiply(5, 10);

//
function multiply(a, b) {
  if (a > 10 || b > 10) {
    return "that's too hard";
  } else {
    return a * b;
  }
}

//
function multiply(a, b) {
  return a * b;
}
alert(multiply(5, 10));

//
