const express = require("express")
const dataRoute = require("../routes/dataRoute")
const app = express()
const PORT = 8080;

app.get("/",(req,res)=>{
    res.send("Hello I'm up and running");
})

app.use("/api/data",dataRoute);

app.listen(PORT,(req,res)=>{
    console.log(`Server started at PORT ${PORT}`)
})

