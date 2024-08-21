
document.getElementById("getData").addEventListener('click',async ()=>{
    console.log("Hello");
    const data = await fetch("http://localhost:8080/api/data")
    const jsonData = await data.json();
    console.log(jsonData)

    const arr = jsonData.data;
    console.log(arr)

    const olElement = document.getElementById('addMe');
    arr.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `Name: ${item.name}, Email: ${item.email}`;
        olElement.appendChild(li);
    });
})