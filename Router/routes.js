const express = require("express")
const router = express.Router();
const {handledata}=require("../Controller/handlestore")
router.post('/feedback', handledata)
module.exports=router