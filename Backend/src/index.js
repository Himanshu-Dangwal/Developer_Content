const express = require("express")
const app = express();

const PORT = 8080;

app.get("/",(req,res)=>{
    res.send("I'm an express server");
})

app.listen(PORT,(req,res)=>{
    console.log(`Server started at PORT ${PORT}`);
})