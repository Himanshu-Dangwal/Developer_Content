const cart = ["Apple","Shoes","Racket","Sunscreen"]

//Consumer (Front End)
const promise = createOrder(cart);
promise.then(function(orderId){
    proceedToPayment(orderId);
})

//Producer (Backend Part)

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        //validate Cart
        //Insert Data into DB
        //retun order ID

        if(!isValidate(cart)){
            const err = new Error("Cart is invalid");
            reject(err);
        }

        const orderID = getID();
        if(orderID){
            resolve(orderID);
        }
    });
}