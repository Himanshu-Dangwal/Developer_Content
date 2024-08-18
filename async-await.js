/*  Part 1

async function getData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello I'm a promise");
        }, 5000);
    });
}



async function handlePromise(){
    const value = await getData();
    console.log(value)
}

handlePromise()

// const dataPromise = getData()
// dataPromise.then((data)=> console.log(data))

console.log("I am here at the end")

*/

//Part 2

const p1 = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve("I'm p1 and I am resolved")
    },5000)
}) 
const p2 = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve("I'm p2 and I am resolved")
    },8000)
}) 


async function check(){
    console.log("Hello World");
    const pr1 = await p1;
    console.log("I'm here");

    const pr2 = await p2;
    console.log("I'm finally here");
}

check();


