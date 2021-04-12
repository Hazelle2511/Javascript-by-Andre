
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
const player = "Hazelle";
let experience = 100;
let  wizardLevel = false;


if(experience > 90) {
    let  wizardLevel = true;
    console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel);