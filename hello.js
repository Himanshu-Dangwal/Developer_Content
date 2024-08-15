console.log("Hello");

//Callback Functions::

function calculcator(a,b,operation){
    return operation(a,b);
}

function sum(a,b) {
    return a+b;
}

function sub(a,b){
    return a-b;
}

console.log(calculcator(10,12,sum));
console.log(calculcator(10,12,sub));
