const Joi = require("joi")

module.exports.todoSchema = Joi.object({
    title : Joi.string().min(3),
    description : Joi.string().min(5)
})