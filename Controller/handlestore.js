const user = require("../Model/user.js")
const path = require("path")
const nodemailer=require("nodemailer")

/**
 * @swagger
 * /handledata:
 *   post:
 *     summary: Create a new user and send an email
 *     description: This endpoint allows a user to submit their name, email, and message, stores the data, and sends an email using NodeMailer.
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - message
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 description: The user's email address.
 *                 example: john.doe@example.com
 *               message:
 *                 type: string
 *                 description: The message the user wants to send.
 *                 example: Hello, I am interested in your services.
 *     responses:
 *       200:
 *         description: User created successfully, email sent.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message.
 *                   example: success
 *                 data:
 *                   type: object
 *                   description: The newly created user data.
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: The ID of the new user.
 *                       example: 507f191e810c19729de860ea
 *                     name:
 *                       type: string
 *                       description: The name of the new user.
 *                       example: John Doe
 *                     email:
 *                       type: string
 *                       description: The email of the new user.
 *                       example: john.doe@example.com
 *                     message:
 *                       type: string
 *                       description: The message from the new user.
 *                       example: Hello, I am interested in your services.
 *       500:
 *         description: Internal server error or validation error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                   example: Internal server error
 */
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
          to: `prekumar21cse@gmail.com`, // list of receivers
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
