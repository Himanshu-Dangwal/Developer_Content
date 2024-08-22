const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title : {
        type : String,
        min : 3
    },

    description : {
        type : String,
        min : 5
    }
},{timestamps:true})

module.exports = mongoose.model('Todo',todoSchema)