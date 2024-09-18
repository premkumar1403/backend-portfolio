const user = require("../Model/user.js")
const path=require("path")
exports.handledata = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newuser = await user.create({ name, email, message })
          res.status(200).json({
            message: "success",
            data: newuser,
          });
    }
    catch (error) {
        res.json({
             message:error.message
         })
    }
}

exports.download = async (req,res) => {
  res.download(path.join(__dirname,"../Views/prem_resume.pdf"));
    
}