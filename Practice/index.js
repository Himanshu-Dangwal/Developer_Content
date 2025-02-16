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