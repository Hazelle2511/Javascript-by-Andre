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
  //the a and b here are parameters
  if (a > 10 || b > 10) {
    return "that's too hard";
  } else {
    return a * b;
  }
}

//
// function multiply(a, b) {
//   return a * b;
// }
// alert(multiply(5, 10)); //The 5 and 10 here are arguments

//

//Exercice 5//

//Function Declaration
// function checkDriverAge() {
//   var age = prompt("What is your age?");

//   if (Number(age < 18)) {
//     alert("Sorry, you are too yound to drive this car. Powering off");
//   } else if (Number(age) > 18) {
//     alert("Powering On. Enjoy the ride!");
//   } else if (Number(age) === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
//   }
// }

//Function expression
// const âge = function checkDriverAge1(age) {
//   if (age < 18) {
//     console.log("Sorry, you are too young to drive this car. Powering off");
//   } else if (age > 18) {
//     console.log("Powering On. Enjoy the ride!");
//   } else if (age === 18) {
//     console.log(
//       "Congratulations on your first year of driving. Enjoy the ride!"
//     );
//   }
// };

// âge(5);
// âge(18);

function checkDriverAge(age) {
  if (age < 18) {
    console.log("Sorry, you are too young to drive this car. Powering off");
  } else if (age > 18) {
    console.log("Powering On. Enjoy the ride!");
  } else if (age === 18) {
    console.log(
      "Congratulations on your first year of driving. Enjoy the ride!"
    );
  }
}

checkDriverAge(66);
checkDriverAge(6);
