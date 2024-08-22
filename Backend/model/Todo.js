const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title : {
        type : string,
        min : 3
    },

    description : {
        type : string,
        min : 5
    }
},{timestamps:true})

module.exports = mongoose.model('Todo',todoSchema)