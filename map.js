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