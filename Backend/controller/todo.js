const Todo = require("../model/Todo")

module.exports.addTodo = async (req,res) => {
    const {title,description} = req.body;

    try{
        const newTodo = new Todo({
            title,
            description
        })
        await newTodo.save();
        console.log("To do successfully saved")
        res.status(201).json({message:"Todo added successfullt",todo:newTodo})
    }catch(err){
        console.log("Error adding to the database");
        res.status(500).json({message : "Internal Server Error"})
    }
}

module.exports.getTodos = async (req,res) => {
    const todos = await Todo.find({});
    res.status(201).json(todos)
}