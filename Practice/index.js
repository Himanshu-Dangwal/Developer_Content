console.log("Hello");

let obj1 = {
    firstName: "Himanshu",
    lastName: "Dangwal",
    printName: function (hometown) {
        console.log(`Object is ${this.firstName} ${this.lastName} and lives in ${hometown}`)
    }
}
// function printName(hometown) {
//     console.log(`Object is ${this.firstName} ${this.lastName} and lives in ${hometown}`)
// }

obj1.printName("Dehradun");

let obj2 = {
    firstName: "Amit",
    lastName: "Chauhan"
}

obj1.printName.call(obj2, "USA");

//Call method (Function borrowing)



//Bind Method
let printFullNameBinded = obj1.printName.bind(obj2, "USA");
console.log(printFullNameBinded)
printFullNameBinded()



//Curying in JS

/* 1. Using bind method
let multiply = function (x, y) { console.log(x * y); }

let multiplyBy2 = multiply.bind(this, 2);
multiplyBy2(3);

*/

// Using closures

let multiply = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

let multiplyBy3 = multiply(3);
multiplyBy3(4);