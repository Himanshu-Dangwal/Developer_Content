const express = require("express")
const {addTodo,getTodos} = require("../controller/todo")
const {validate} = require("../middleware/validate")
const router = express.Router();

router.get("/",getTodos);

router.post("/",validate,addTodo);

module.exports = router;