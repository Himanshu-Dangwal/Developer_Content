// console.log("Hello");

// let obj1 = {
//     firstName: "Himanshu",
//     lastName: "Dangwal",
//     printName: function (hometown) {
//         console.log(`Object is ${this.firstName} ${this.lastName} and lives in ${hometown}`)
//     }
// }
// // function printName(hometown) {
// //     console.log(`Object is ${this.firstName} ${this.lastName} and lives in ${hometown}`)
// // }

// obj1.printName("Dehradun");

// let obj2 = {
//     firstName: "Amit",
//     lastName: "Chauhan"
// }

// obj1.printName.call(obj2, "USA");

// //Call method (Function borrowing)



// //Bind Method
// let printFullNameBinded = obj1.printName.bind(obj2, "USA");
// console.log(printFullNameBinded)
// printFullNameBinded()



// //Curying in JS

// /* 1. Using bind method
// let multiply = function (x, y) { console.log(x * y); }

// let multiplyBy2 = multiply.bind(this, 2);
// multiplyBy2(3);

// */

// Function.prototype.myBind = function (...args) {
//     let functionCallingMyBind = this, boundThis = args[0], params = args.slice(1);
//     return function (...newArgs) {
//         return functionCallingMyBind.apply(boundThis, [...params, ...newArgs]);
//     };
// };

// let multiply = function (x, y) { console.log(x * y); };

// let multiplyBy2 = multiply.myBind(this, 2);
// multiplyBy2(5);



/*

let multiply = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

let multiplyBy3 = multiply(3);
multiplyBy3(4);
*/

// Polyfill for Bind function

























const API_BASE_URL = "https://www.algoexpert.io/api/fe/questions";

async function fetchQuestions() {
    const response = await fetch(API_BASE_URL);
    const questions = await response.json();
    console.log(questions);

    return questions;
}

function getQuestionsByCategory(questions) {
    const questionsByCategory = {};

    questions.forEach((question) => {
        console.log(question)
        if (questionsByCategory.hasOwnProperty(question.category)) {
            questionsByCategory[question.category].push(question);
        } else {
            questionsByCategory[question.category] = [question];
        }
    });

    return questionsByCategory;
}

async function printValues() {
    const questions = await fetchQuestions();
    const questionsByCategory = getQuestionsByCategory(questions);

    for (const [category, questionsArray] of Object.entries(
        questionsByCategory
    )) {
        console.log(category);
        questionsArray.forEach((question) => {
            console.log(question.name);
        });
    }
}

printValues();
