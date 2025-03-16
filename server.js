const express = require("express");
const app = express();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
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
    });
  });

app.use("/", userouter);

const options = { 
  swaggerDefinition: {
    openapi: '3.0.0', 
    info: {
      title: "Portfolio Api Documentation",
      version: '1.0.0',
      description: "Api about portfolios"
    }, 
  },
  apis: ['./Router/*.js'],
};
const swaggerSpec = swaggerJsdoc(options)
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec))

app.listen(4000, () => {
  console.log("server running");
});
