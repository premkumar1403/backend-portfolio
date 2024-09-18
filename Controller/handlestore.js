const user = require("../Model/user.js")

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

exports.download = async (req, res) => {
  try { res.download("../Views/prem_resume.pdf") }
  catch (error) {
    res.status(404).json({message:"File is not found at this time"})
  }
}