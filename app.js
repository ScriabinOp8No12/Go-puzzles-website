const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express();

app.post("/upload", upload.array("file", 10), (req, res) => {
  // req.files is an array of files uploaded
  // req.body will contain the text fields, if there were any
  console.log(req.files);
  res.send("File(s) uploaded!");
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
