console.log("Code starts here")

let ans = 0;
for(let i=0;i<10;i++){
    ans += i;
}

console.log(ans)

function dummy(){
    console.log("I'm a dummy function")
}

setTimeout(dummy,2000)
console.log("I'm at the last line of the code")