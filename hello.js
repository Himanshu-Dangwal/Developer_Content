/*

///////////// ****** CALLBACK ****** /////////////

console.log("Hello");

//Callback Functions::

function calculcator(a,b,operation){
    return operation(a,b);
}

function sum(a,b) {
    return a+b;
}

function sub(a,b){
    return a-b;
}

console.log(calculcator(10,12,sum));
console.log(calculcator(10,12,sub));

*/


// setTimeout to create a timer from 30 to 0;
/*

let start = 30;

function display() {
    if (start < 0) return; // Stop if the countdown is complete
    console.log(start);
    start -= 1;
    setTimeout(display, 1000); // Schedule the next call in 1 second
}

setTimeout(display, 1000); // Initial call to start the countdown


*/
