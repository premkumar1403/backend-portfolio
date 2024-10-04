const user = require("../Model/user.js")
const path = require("path")
const nodemailer=require("nodemailer")
exports.handledata = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newuser = await user.create({ name, email, message })
        const transporter = nodemailer.createTransport({
        service: "gmail",
        secure: false, // true for port 465, false for other ports
        auth: {
          user: "kumarprem75715@gmail.com",
          pass: "nqepzvucrmflofea",
        },
      });

      
        // send mail with defined transport object
        const info = await transporter.sendMail({
          to: email, // list of receivers
          subject: "Mail from" +name, // Subject line
          text: message, // plain text body
         
        });

      console.log("Message sent: %s", info.messageId);
       res.status(200).json({
         message: "success",
         data: newuser,
       });
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
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
