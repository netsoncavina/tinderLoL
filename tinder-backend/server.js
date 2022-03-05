const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv/config");
app.use(bodyParser.json());
app.use(cors());

// Import routes
const usersRoute = require("./routes/users");

// Middleware
app.use("/users", usersRoute);

app.get("/", (req, res) => {
  res.send("Helloooow");
});

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to MongoDB");
  }
});

// Start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
