function delay(runMe) {
    setTimeout(() => {
        runMe();
    }, 1000)
}

function runMe() {
    console.log("I will run after 1 seconds");
}

delay(runMe);