// console.log("Hello World");

/*Hoisting in Javascript

dummy();
console.log(x);

var x = 7;

function dummy(){
    console.log("I'm a dummy functiom");
    return;
}

*/

//Scope chain and Lexical environment
function a(){
    c();
    function c(){
        console.log(b);
    }
    var b = 30;
}

var b = 10;
a();