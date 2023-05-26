const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express();

app.post("/upload", upload.array("file", 10), (req, res) => {
  // req.files is an array of files uploaded
  // req.body will contain the text fields, if there were any
  console.log(req.files);
  res.send("Files uploaded!");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
