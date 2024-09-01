const x: number = 10;
console.log(x);

function sayName(firstName: string) {
    console.log(`My name is ${firstName}`);
}

sayName("Himanshu");
// sayName(10);  This woun't work


function sayMyname(firstName: any, lastName: string) {
    console.log("My name is " + firstName + " " + lastName);
}

sayMyname(10, "Himanshu");
sayMyname("Himanshu", "Dangwal");


function isLegal(age: number): boolean {
    if (age > 18) {
        return true;
    }
    return false;
}

console.log(isLegal(19));

//One more way
// function delay(runMe : () => void)

function delay(runMe: Function) {
    setTimeout(() => {
        runMe();
    }, 1000)
}

function runMe() {
    console.log("I will run after 1 seconds");
}

delay(runMe);


function isLegalUser(user: {
    firstName: string;
    lastName: string;
    age: number
}) {
    if (user.age > 18) {
        return true;
    }
    return false;
}

console.log(isLegalUser({
    firstName: "Himanshu",
    lastName: "Dangwal",
    age: 17
}))