"use strict";
const x = 10;
console.log(x);
function sayName(firstName) {
    console.log(`My name is ${firstName}`);
}
sayName("Himanshu");
// sayName(10);  This woun't work
function sayMyname(firstName, lastName) {
    console.log("My name is " + firstName + " " + lastName);
}
sayMyname(10, "Himanshu");
sayMyname("Himanshu", "Dangwal");
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    return false;
}
console.log(isLegal(19));
function delay(runMe) {
    setTimeout(() => {
        runMe();
    }, 1000);
}
function runMe() {
    console.log("I will run after 1 seconds");
}
delay(runMe);
