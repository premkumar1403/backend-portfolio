const express = require("express")
const router = express.Router();
const {handledata,resume}=require("../Controller/handlestore")
router.post('/feedback', handledata)
router.get('/resumedata',resume)
module.exports=router