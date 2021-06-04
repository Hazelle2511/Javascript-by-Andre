
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
// const mapArray = array.map(num => {
//     return num * 2
// })
//Better way
const mapArray = array.map(num => num * 2)
console.log(`Map ${mapArray}`)
//Filter
const filterArray = array.filter(num =>  num > 5);
console.log('filter', filterArray);
//Reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0)
console.log('Reduce', reduceArray)

//152 Advanced Objects
//referenced type
var object1 = { value: 10};
var object2 = object1;
var object3 = {value: 10}

//Because object1 and object2 has the same box1, while object3 has box2
object1===object2
true
object1===object3
false
//Arrays are just objects at the end of the day
[]===[]//False
//context vs scope

//Scope is created with curly functions {} while
//Context tells you where you are within the object
//this is the window
//this just refer to what object is inside of
console.log(this)
console.log(this === window)
this.alert('hello')

//another example
function a() {
    console.log(this)
}
a() //the result is window

window.a()//same result

//another example
const object4 = {
    a:function() {
        console.log(this)
    }
}
object4.a()

//instantiation is for reusing code
//if we use class, we must use constructor
class Player {
    constructor(name, type) {
        console.log('Player', this)
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi, I am ${this.name}. I am ${this.type}`)
    }
}

//Everytime we extends, we need to use extension by using super() so that you have an access on the Player
class Wizard extends Player{
    
    constructor(name, type) {
       
        super(name, type)
         console.log('Wizard', this)
    }
    play() {
        console.log(`Hello, I'm ${this.type}`)
    }
}

const wizard = new Wizard('Shelly', 'Healer')
const wizard2 = new Wizard('Shawn', 'Dark Magic')


//154 Pass By Value(Primitive type like numbers string, etc) vs Pass by Reference(Objects)

//pass by value, we copy the values
var a = 5;
var b= a;
b++;

console.log(a)//5
console.log(b)//6


//pass by reference, we dont copy the values, we update it
//It's good because we are saving space for memory

let obj1 = {name: 'Yao', password: '123'}
let obj2 = obj1;
obj2.password = 'easypeasy';

console.log(obj1)//{name: 'Yao', password: 'easypeasy'}
console.log(obj2)//{name: 'Yao', password: 'easypeasy'}


//also in array
let c = [1,2,3,4]
let d = c;
d.push(12455);
console.log(c);//[1, 2, 3, 4, 12455]
console.log(d); //[1, 2, 3, 4, 12455]

//but if you dont want to update the previous value
let c = [1,2,3,4]
let d= [].concat(c);
d.push(12455);
console.log(c);//[1, 2, 3, 4]
console.log(d); [1, 2, 3, 4, 12455]


//also in object

let obj = {a: 'a', b: 'b', c: 'c'};
// let clone = Object.assign({}, obj);

//another way to clone is to use spread operator
let clone = {...obj}

obj.c = 5;
console.log(clone);

//but if you want to updata the value
let obj = {a: 'a', b: 'b', c: 'c'};
let clone = obj;

obj.c = 5;
console.log(clone);


//Complete code
let obj = {a: 'a', b: 'b', c: {
    deep: 'Try to clone me'
}};
let clone1 = obj;
let clone = Object.assign({}, obj);
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj))

obj.c.deep = 'hahaha';
console.log('Updated',clone1);
console.log('ShallowClone',clone);
console.log('ShallowClone',clone2);
console.log('Deep Clone', superClone)


//155 TYPE COERCION
1=='1'//tRUE
1==='1'//FALSE

if(1 ) { //equivalent to true
    console.log(5)
}//result is 5.

if(0) {//equivalent to false
    console.log(5)
}//result is undefined

-0 === +0 //true but thery are different
Object.is(-0,+0)// false


//157 ES7

const pets = ['dogs', 'cats', 'bats'];
pets.includes('dogs')

const square = (x) => x**2;
square(5)


//158 ES8

// .padStart();
// .padEnd();

// Example:
// 'Title'.padStart(10)
// "     Title"
// 'Title'.padEnd(10)
// "Title     "

const fun = (a,b,c,d,) => {
    console.log(a)
}

fun(1,2,3,4,)

//Object.entries
//Object.values
//Object.keys

//Object keys

let obj = {
    username0: 'Santa',
    username1: 'Rodulf',
    username2: 'Mr. Grinch'
}

Object.keys(obj).forEach((key,index)=> {
    console.log(key, obj[key])
});

//Result
// username0 Santa
// username1 Rodulf
// username2 Mr. Grinch

//Object.values

Object.values(obj).forEach(value => {
    console.log(value)
})

//Result
// Santa
//  Rodulf
//   Mr. Grinch

//Object.entries

Object.entries(obj).forEach(value => {
    console.log(value)
})

//Result
// (2) ["username0", "Santa"]
//  (2) ["username1", "Rodulf"]
//  (2) ["username2", "Mr. Grinch"]

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '')
})

//Result
//  ["Santa0", "Rodulf1", "Mr. Grinch2"]


//162 <ES10
//Flat cleans up the data

const array = [1, [2,3], [4,5]];
array.flat()//can also means array.flat(1);
// Result (5) [1, 2, 3, 4, 5]

const array2 = [1, 2, [3,4, [5]]]
array2.flat(2);

// Result (5) [1, 2, 3, 4, 5]

const array3 = [[1,2], 3,4, [5,6],[[[[7]]], 8],[9,10]];
array3.flat(50);//50 because we have nestedarray < 50 
//Result (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const entries = ['bobo', 'sally',,,,,'cindy'];
    entries.flat();
//RESULT (3) ["bobo", "sally", "cindy"]

//flatMap() combination of function flat and map

const array3Chaos = array3.flatMap(num => num +7);
//Result 
//(6) ["1,27", 10, 11, "5,67", "7,87", "9,107"]


//Trim function
const useremail = '   camacho.hazelle@gmail.com';
const useremail2 = 'mael.parois@gmail.com   '

console.log(useremail.trimStart());
console.log(useremail2.trimEnd());

//The result will be no blank spaces;

//FormEntries makes the array turn into objects

const userProfiles = [['BronTheMvp', 35], ['KdtheSnake', 30], ['KawaiitheRobot', 28]];
Object.fromEntries(userProfiles)

//REsult
// BronTheMvp: 35
// KawaiitheRobot: 28
// KdtheSnake: 30

//On es8 the equivant of this function is Object.entries
//It came from object.entries
const userProfiles = [['BronTheMvp', 35], ['KdtheSnake', 30], ['KawaiitheRobot', 28]];
const obj = Object.fromEntries(userProfiles);
Object.entries(obj);


//try and catch functiont

try {
    4+5
} catch {

}

//9

//

try {
    true+'hi'
} catch {
    console.log('you messed up')
}

//'truehi' because of type coercion

try {
 bob +'hi'
} catch {
    console.log('you messed up')
}

//you messed up

//Back then, you need to add error
try {
 bob +'hi'
} catch(error) {
    console.log('you messed up' + error)
}

//Result you messed upReferenceError: bob is not defined

//164 Advance loops

const fruits = ['mango', 'grapes', 'strawberry'];


//for loop
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

//for each
fruits.forEach(item => {
    console.log(item)
    // return item;
})

//for of 

//iterating
//arrays

for(item of fruits) {
    console.log(item)
}

//strings

for(item of 'fruits') {
    console.log(item)
}

//for in 
//works for objects
//enumerating

const detailedFruits = {
    mango: 5,
    grapes: 10,
    strawberry: 15
}

for(item in detailedFruits) {
    console.log(item);
}


//166 ES20 Part 1;

//BigInt
//Nullish coalescing operator ??
//Optional chaining operator .?

//BigInt 
//is used when we want to use a number larger thatn max_safe_integer and we wanna do some calculations with it

//Sample on console
//typeof 1n 
//result will be bigInt
//Number.MAX_SAFE_INTEGER
//9007199254740991
//9007199254740991 + 1 
//9007199254740992 -> Good result
//9007199254740991 + 10
//9007199254741000 -> Bad result so bigInt will enter 
//9007199254741000 - 1
//9007199254741000

let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}
let andrei_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 6,
        weight: 8,
        
    }
}

// let weight = will_pokemon.pikachu.weight;
// console.log('weight', weight)

// let raichu_weight = andrei_pokemon.pikachu.weight;
// console.log('weight', weight)


//166 ES20 Part 2;

//Its complicate so the solution for this is option chaining operator
// if(andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight) {
//     let weight2 = andrei_pokemon.pikachu.weight
//     console.log(weight2)
// } else {
//     let weight2 = undefined;
//     console.log(weight2)
// }

//optional chaining operator ?.
let weight3 = andrei_pokemon?.pikachu?.weight
console.log(weight3)

//166 ES20 Part 3;


let andrei_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 6,
        weight: 8,
        power: '' // || false || 0, result will be no power still
        
    }
}
let power = andrei_pokemon?.pikachu?.power || 'no power'
console.log(power)

//Nullish coaleshing operator ?? will be uselful if you want to use || or operator
let andrei_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 6,
        weight: 8,
        power: 0
        
    }
}
let power = andrei_pokemon?.pikachu?.power ?? 'no power';
console.log(power);


//171 Debugging
const flattened =[[0,1],[2,3],[4,5]].reduce((a,b) =>a.concat(b), []) 

//To debug
const flattened = [[0,1],[2,3],[4,5]].reduce(
    (accumulator, array)=> {
    console.log('Array',array);
    console.log('Accumulator', accumulator)
    return accumulator.concat(array)
},[])


//Second way to debug
const flattened = [[0,1],[2,3],[4,5]].reduce(
    (accumulator, array)=> {
    debugger;
    return [].concat([0,1])
},[])

const flattened = [[0,1],[2,3],[4,5]].reduce(
    (accumulator, array)=> {
    debugger;
    return accumulator.concat(array)
},[])

//172 How JS works?
// Program allocates memory and  parse and execute
//JS Engine consist of two parts:
//Memory Heap and Call Stack
//Memory Heap allocate a memory like:
//const a = 1; const b= 10; const c = 100; 
//But it will cause memory leak that is why global variables are bad

//Call Stack reads and executes our scripts
console.log('1');
console.log('2');
console.log('3');

//Another example

const one = () => {
    const two = () => {
        console.log('4')
    }
    two()
}
//console.Log('4')
//two()
//one()
//CallStack will run upwards and remove downwards and will be empty

//JS is a single threaded langage that can be non blocking
//single threaded means one call stack only, it can run at a time
//Other languages has multiple call stack called multi threaded and the problem here is you 
//will be running on deadlocks
//while single threaded runs single at the time, more controllable
//Asynchronous means line 1 gets executed, after line 2, 

//To create stock overflow
//Use recursion, a function that calls itself
function foo() {
    foo()
}
foo() //you keep adding foo with your call stack and will cause stock overflow


//To prevent stack overflow, you need to use asynchronous

console.log('1');
setTimeout(()=> {
console.log('2')
}, 2000 ); //even if you declare it on 0 instead of 2000, same result
console.log('3');

//Result is 1, 3, 2

//For JS scripts to run we need engine and js runtime environment which is part of navigateur
//On top of the engine, there are: web apis(DOM, AJAX, Timeout), Event Loop and Callback Que(Onclick, onLoad, onDone)

//Sample:

setTimeout(()=> {
console.log('2')
}, 2000 );//
//CALL STACK

setTimeout()
//WEB API

callback()
//CALLBACK QUE


//EVENT LOOP
//Will look if the the call stack is empty or if theres on callback que, if there is
//the callback() in callback que will go to call stack and run it and then it will remove it on callback que