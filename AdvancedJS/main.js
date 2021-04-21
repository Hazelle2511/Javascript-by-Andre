
// //Scope
// var b = "Can I access this?";

// function bb() {
//      b = "hello"
// }

// // console.log(b);

// bb();
// console.log(b);


//Scope(window)

var fun = "Bonjourno";

function funFunction() {
    var fun = "Hi";
    console.log(1,fun);
}


function funerFunction() {
    var fun = "Bonjour";
    console.log(2, fun)
}

function funestFunction() {
   fun = "Ahhh";
    console.log(3, fun);
}

console.log("window", fun);
funFunction();
funerFunction();
funestFunction();
console.log(fun)


//144. Advanced Control Flow

//condition ? expr1 : expr2


//ternary operator
function areYouaFan(boolean) {
    return boolean;
}

var  answer = areYouaFan(true)? 'Yes, I am fan of LBJ' :  'Not at all';

var automatedAnswer = "Your player #  is" + ( areYouaFan(true) ? "23" :"isInvalid");


function validate() {
    if(areYouaFan(true)) {
        return "Yes, I am fan of LBJ"
    }

    else {
        return "Not at all"
    }
}

var answer1 = validate();

//Switch

function moveCommand(direction) {
    var whatHappens;
    switch(direction) {
        case "forward":
            whatHappens = "You arrived home";
            break;
        
        case "backward":
            whatHappens = "You encountered a bull";
            break;
        
        case "right":
            whatHappens = "You found a river";
        break;

        case "left":
            whatHappens = "You run into a troll";
            break;
        default:
            whatHappens = "Please enter a valid direction";

    }
    return whatHappens;
}

//146 ES5 and </ES6>

//using var, the result will be true for both sides 
// while let, the result are inside is true, outside is false, because
//whenever we are using a bracket with let, it produces another/new scope
//const cannot be updated
// const player = "Hazelle";
// let experience = 100;
// let  wizardLevel = false;


// if(experience > 90) {
//     let  wizardLevel = true;
//     console.log('inside', wizardLevel);
// }

// console.log('outside', wizardLevel);


// //const cannot reassign the variable but can change the property

// const obj = {
//  player: "Hazelle",
// experience: 100,
//  wizardLevel: false
// }

// console.log(obj)

// //Destructuring
// const object = {
//  player: "Hazelle",
// experience: 100,
//  wizardLevel: false
// }

// const player = obj.player;
// const wizardLevel = obj.wizardLevel;
// let experience = obj.experience;

// //To make it short

// const {player, wizardLevel} = obj;
// let {experience} = obj;

// //Another ways to do object properties

// const name = "john snow";

// const objt = {
//     [name]: "hello",
//     [1 + 2]: "hihi"
// }

// //Anothe way

// const a = "bobby";
// const b = 200;
// const c = true;

// const obje = {
//     a: a,
//     b: b,
//     c: c
// }

// console.log(obje)

//if the declaration and value are the same, do this instead
const a = "bobby";
const b = 200;
const c = true;

const obje = {
     a,
     b,
     c
}

console.log(obje)

//Template Strings
// const name = "Sally";
// const age = 34;
// const pet = "dog";
//const greeting = "Hello " + name + " you seem to de doing " + greeting;

// const greetingBest = `Hello ${name}, you seem to be ${age - 14}. What a lovely ${pet}`
// console.log(greetingBest)


//default arguments

function greet(name='', age = 30, pet = 'cat') {

return `Hello ${name}, you seem to be ${age - 14}. What a lovely ${pet}`
}

console.log(greet('Hazelle', 15, 'dog' ))

//Symbol is used for mostly unique types, it is used as modifier identity like object properties

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

console.log(sym2 === sym3);


//Arrow function 
function add1(a,b) {
    return a + b;

}

//Arrow function

//if you have a single return
const add2 = (a, b) => a + b;

console.log(add2(5,5))

//if you have multiple returns
const add3 = (a,b) => {
    return a + b;
}


//148 Advanced Functions
// first() {
// var greet = 'Hi';
// function second() {
//     alert(greet);
// }
// return second;
// }

// var newFunc = first();
// newFunc();

//Transform to Modern
const first = () => {
const greet = 'Hi';
const second = () => {
    const name = "bobby"
    alert(greet);
}
return second;
}

const newFunc = first();
newFunc();

//Closures = a function ran. the function executed. It's never going to run again
//BUT it's going to remember that there are references to those variables
//so the child scope always has access to the parent scope


//Currying
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4) //a is 3 and b is 4
const multiply5 =  curriedMultiply(5);

//Compose
const compose = (f,g) => a => f(g(a));
//Result would be const compose = (f,g) => a =>f(g(5))
// const compose = (sum,sum) => a =>f((6))
// const compose = (sum,sum) => a =>f((7))
const sum = (num) => num + 1;
console.log(compose(sum,sum)(5))

//Avoiding side effects, functional purity called determinism
// Must not accept the outside world;
var a= 1;
function b() {
    a = 2;
}


//150  Advanced Arrays
//Result is undefined
// const array = [1,5,16,26,10];
// const newArray = array.forEach(num => {
//     num * 2
// });
// console.log(newArray);

//Instead

//Foreach just iterates the collection of array and applied the operation on the element
const array = [1,5,16,26,10];
double = [];
const newArray = array.forEach(num => {
    double.push(num * 2)
});
console.log(`forEAch ${double}`);

//Map, filter, REduce, Most important methods
//Map expects a return or result/ always a return element
const mapArray = array.map((num) => {
    return num * 2
})
console.log(`Map ${mapArray}`)