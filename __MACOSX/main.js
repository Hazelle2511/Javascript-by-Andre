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

//ES5
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

//120Data Structures: Arrays

var listAnimals = ["cat", "dog", "pig", "monkey"];
console.log(listAnimals[0]);

// var listAnimals = [["cat", "dog", "pig", "monkey"]];
// console.log(listAnimals[0][1]);

//Exercice 6

var array = ["Bananas", "Apples", "Oranges", "Blueberries"];

let trial;
trial = array;

trial = array.shift();
trial = array.sort();
trial = array.push("Kiwi");
trial = array.shift();
trial = array.reverse();

console.log(trial);

//
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(array2[1][1][0]);

/**
 * Syntax
array.splice(index, howmany, item1, ....., itemX)
Parameter Values
Parameter 	Description
index 	Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array
howmany 	Optional. The number of items to be removed. If set to 0, no items will be removed
item1, ..., itemX 	Optional. The new item(s) to be added to the array
 */

//122. Data Structures: Objects

var user = {
  name: "Mael",
  age: 32,
  hobby: "cooking",
  isMarried: true,
  spells: ["abracadabra", "shazam"],
  shout: function () {
    console.log("AHHHH!!!");
  },
};

// var array = ["banana", "pineapple", "apple"];

var list = [
  { username: "Hazelle", password: "pass" },
  {
    username: "Mael",
    password: "word",
  },
];

//var emptyObj = {};
//you can assign a property here like:
// emptyObj.name = "Andy"

//var nullObj = null;
//you cannot assign a property here
//nullObj.name = "Andy";
//the result would be Cannot set property of null

//Exercice 7;

const facebook = {
  username: "Mael",
  password: "Mael",
};

// const database = [
//   {
//     username: "Mael",
//     password: "Mael",
//   },
//   {
//     username: "Hazelle",
//     password: "Hazelle",
//   },
// ];

// const newsfeed = [
//   { username: "Hazelle", timeline: "time" },
//   { username: "Mael", timeline: "time" },
// ];

//124 Build Facebook

// const database = [
//   {
//     username: "Mael",
//     password: "Mael",
//   },
//   {
//     username: "Hazelle",
//     password: "Hazelle",
//   },
// ];

// const newsfeed = [
//   { username: "Hazelle", timeline: "Time flies" },
//   { username: "Mael", timeline: "I want to be web developer" },
// ];

// const userNamePrompt = prompt("What is your username?");
// const passwordPrompt = prompt("What is your password?");

// function signIn(uname, pass) {
//   if (uname === database[0].username && pass === database[0].password) {
//     console.log(newsfeed);
//   } else {
//     console.log("You are not registered");
//   }
// }
// signIn(userNamePrompt, passwordPrompt);

//125 JavaScript Technology
//function declaration
function declaration() {}

//function expression
const expression = function () {};

//exprerssion
// 1 + 3;
// var a = 2;
// return true;

//calling or invoking a function
// alert();
// newFunction(param1, param2);

//assign a variable
// var a = true;

//function vs method

function thisIsFunction() {}

thisIsFunction();

//method

// const object = {
//   thisIsMethod: method() {

//   }
// }

// object.thisIsMethod()

//126 LOOPS

var todos = [
  "eat breakfast",
  "take a shower",
  "read a book",
  "exercice",
  "go to class",
];
var todosImportant = [
  "eat breakfast!",
  "take a shower!",
  "read a book!",
  "exercice!",
  "go to class!",
];

// for (var i = 0; i < todos.length; i++) {
//   // console.log(todos[i] + "!");

//   //to always have a ! on console
//   todos[i] = todos[i] + "!";
//   //will not work because the target value is string
//   // todos[i].pop();

//   //, you need to target the array like: but it will delete half of the array
//   todos.pop();

// }

//To delete all
// var todoslength = todos.length;

// for (var i = 0; i < todoslength; i++) {
//   todos.pop();
// }

// //while
// var counterOne = 0;
// while (counterOne < 10) {
//   console.log(counterOne);
//   counterOne++;
// }

// var counterTwo = 10;
// while (counterTwo > 0) {
//   console.log("while", counterTwo);
//   counterTwo--;
// }

//do while
// var counterThree = 10;
// do {
//   console.log("do while", counterThree);
//   counterThree--;
// } while (counterThree > 0);

//For
var todoslength = todos.length;
// for (var i = 0; i < todoslength; i++) {
//   console.log("for", todos[i], i);
// }

//for each

// todos.forEach(function (todo) {
//   console.log("for each", todo);
// });

//another way to do for each

// function logTodos(todo, i) {
//   console.log(todo, i);
// }
// todos.forEach(logTodos);
// todosImportant.forEach(logTodos);

//Exercice 2 : Build Facebook 2

const database = [
  {
    username: "Mael",
    password: "Mael",
  },
  {
    username: "Hazelle",
    password: "Hazelle",
  },
  {
    username: "elle",
    password: "elle",
  },
];

const newsfeed = [
  { username: "Hazelle", timeline: "Time flies" },
  { username: "Mael", timeline: "I want to be web developer" },
];

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  // console.log(isUserValid(username, password));

  if (isUserValid(username, password)) {
    console.log(newsfeed);
  } else {
    alert("Sorry, wrong username and password");
  }

  // if (uname === database[0].username && pass === database[0].password) {
  //   console.log(newsfeed);
  // } else {
  //   console.log("You are not registered");
  // }
}
var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

signIn(userNamePrompt, passwordPrompt);
