const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv").config();
app.use(express.static("react-frontend/build"));
const port = process.env.PORT || "80";
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/react-frontend/build/index.html"));
});

app.listen(port, () => {
  console.log("App started!!");
});
