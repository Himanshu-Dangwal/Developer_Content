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


