const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const todoRoute = require("../routes/todo")
const app = express();
app.use(cors())

const PORT = 8080;
const URI = "mongodb://localhost:27017/"

async function connectToMongo(){
    mongoose.set("strictQuery",false);

    try{
        await mongoose.connect(URI)
        console.log("Successfully connected to the database");
    }catch (err){
        console.log(`Error connecting to the database ${err.message}`)
    }
}

connectToMongo().catch(err => console.log("Some internal error"))

app.get("/",(req,res)=>{
    res.send("I'm an express server from a new branch");
})

app.use("/api/todo",todoRoute)

app.listen(PORT,(req,res)=>{
    console.log(`Server started at PORT ${PORT}`);
})
