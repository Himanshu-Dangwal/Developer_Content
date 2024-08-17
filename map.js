const arr = [1,2,3,4,5]


function double(ele){
    return ele*2;
}
const values = arr.map(double);
console.log(values)



const values2 = arr.map((ele)=>{
    return ele*2;
})

console.log(values2)

//Using filter to find the even values

const evenValues = arr.filter((ele)=>{
    return (ele%2 == 0);
})

console.log(evenValues)

//Using reduce to find the sum of all elements of an array

const sum = arr.reduce((acc,curr) => {
    return acc += curr;
},0)

console.log(sum);