const Todo = require("../model/Todo")

module.exports.addTodo = async (req,res) => {
    const title = req.body.title;
    const description = req.body.description;

    try{
        const newTodo = new Todo({
            title : title,
            description : description
        })
        await newTodo.save();
        console.log("To do successfully saved")
    }catch(err){
        console.log("Error adding to the database");
        res.status(500).json({message : "Internal Server Error"})
    }
}

module.exports.getTodos = async () => {
    const todos = await Todo.find({});
    res.status(201).json(todos)
}