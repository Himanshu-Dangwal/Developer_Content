const express = require('express');

const {getData} = require("../controller/dataController")
const router = express.Router();

router.get("/",getData);

module.exports = router;