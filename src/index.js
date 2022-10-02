const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/product");
require("dotenv").config();
const userRoutes = require("./routes/product");
const app = express();


//middleware
app.use(express.json());
app.use(express.static("public"));
app.use(router);
//routes
app.get("/", (req, res) => {
  res.send("welcome to my api");
});

//mongodb connection
mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("🟢 DB Connected");
    app.listen({ port: process.env.PORT }, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("There was an error on the DB connection method.");
    console.log(err);
  });