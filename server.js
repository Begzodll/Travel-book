const express = require("express");
const connectDB = require("./config/db");
const app = express();
require("dotenv").config();

// connectDB
connectDB();

app.get("/", (req, res) => {
  res.send("Hello ");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT} port`)
);
