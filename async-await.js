async function getData(){
    return "Hello I'm a promise"
}

// const dataPromise = getData()

// dataPromise.then((data)=> console.log(data))


async function handlePromise(){
    const value = await getData();
    console.log(value)
}

handlePromise()