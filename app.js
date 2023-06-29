const express = require("express");
const multer = require("multer");
// IT GIVES PERMISSION DENIED if I changed dest below to "/backend/uploads/"
const upload = multer({ dest: "./backend/uploads" });

const app = express();

// simple in-memory database
const sgfs = [];

app.post("/upload", upload.array("file", 10), (req, res) => {
  // req.files is an array of files uploaded
  // req.body will contain the text fields, if there were any
  console.log(req.files); // output is seen in the terminal

  // add each uploaded file to the database
  req.files.forEach((file) => {
    sgfs.push({
      // below line was this:
      // originalname: file.originalname,
      originalname: file.originalname.replace(".sgf", ".txt"),
      uploadDate: new Date(),
    });
  });

  // res.json({ message: "File(s) uploaded!", count: req.files.length });
});

app.get("/sgfs", (req, res) => {
  // return a list of all uploaded SGFs
  res.json(sgfs);
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
