const express = require("express")
const router = express.Router();
const {handledata,download}=require("../Controller/handlestore")
router.post('/feedback', handledata)
router.get('/download',download)
module.exports=router