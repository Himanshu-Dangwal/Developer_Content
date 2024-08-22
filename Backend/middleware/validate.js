const {todoSchema} = require("./joiSchema")

module.exports.validate = (req,res,next) => {
    const {error} = todoSchema.validate(req.body)
    if(error){
        res.status(400).json({message:"There is some error in the data to be added",err:error})
    }else{
        next()
    }
}