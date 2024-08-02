const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDB } = require("./config/db.js");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// *******Dont touch above **********

// add your routes here import here, also add here

//eg.
//route import
const propertyRouter = require("./routes/propertyRoutes.js");

//route declaration
//http://localhost:8000/api/v1/property/add-property
app.use("/api/v1/property", propertyRouter);

// *******Dont touch below **********
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`✌ server is running on port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB Connection Failed !!", error);
  });
