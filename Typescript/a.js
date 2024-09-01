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
