/**
 * @swagger
 * /handledata:
 *   post:
 *     summary: Create a new user and send an email
 *     description: This endpoint allows a user to submit their name, email, and message, stores the data, and sends an email using NodeMailer.

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

/**
 * @swagger
 * /resume:
 *   get:
 *     summary: Download the resume file
 *     description: This endpoint allows users to download the resume in PDF format.
 *     responses:
 *       200:
 *         description: Successfully downloaded the resume file
 *         content:
 *           application/pdf:
 *             schema:
 *               type: string
 *               format: binary
 *       500:
 *         description: Internal server error or error during file download
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                   example: Error downloading the file.
 */


const express = require("express")
const router = express.Router();
const {handledata,resume}=require("../Controller/handlestore")
router.post('/feedback', handledata)
router.get('/resumedata',resume)
module.exports=router