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


exports.resume = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "../Views/prem_resume.pdf");
    res.download(filePath, "prem_resume.pdf", (err) => {
      if (err) {
        console.error("Error downloading the file:", err);
        res.status(500).send("Error downloading the file.");
      }
    });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).send("Internal server error.");
  }
};
