//Scope chain and Lexical environment
function a(){
    c();
    function c(){
        console.log(b);
    }
    var b = 30;
}

var b = 10;
a();

//Scope checking

var temp;
function test(){
    temp = 100;
    console.log(temp);
}

test();