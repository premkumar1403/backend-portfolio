const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
const userouter = require("./Router/routes.js");
app.use(express.json());
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("db connected successfully");
  })
  .catch((error) => {
    res.json({
      message: error.message,
    })
    
       
  });

app.use("/", userouter);

app.listen(4000, () => {
  console.log("server running");
});
