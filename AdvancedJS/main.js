
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
