require('dotenv').config();
const express = require("express");
require("express-async-errors");
const morgan = require("morgan");
const cors = require("cors");

const csurf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const { environment } = require("./config");
const isProduction = environment === "production";
// we need to require path for serving static files from the wgo directory
const path = require("path");
// ***************************************

// these 2 below are mine!
// const multer = require("multer");
// IT GIVES PERMISSION DENIED if I changed dest below to "/backend/uploads/"
// needs to be relative to the current folder, which is backend
// ./uploads works great!
// const upload = multer({ dest: "./uploads" });

// ***************************************
// we are already getting all the routes from the folder, so no need to require individual routes
const routes = require("./routes");
const { ValidationError } = require("sequelize");

const app = express();

// Serve static files from the "wgo" directory
app.use("/wgo", express.static(path.join(__dirname, "wgo")));
// Serve static files from the "node_modules" directory
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
// Serve static files from the "uploads" directory
// This allows the server to serve the uploaded SGF files from the "/uploads" URL path
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

// Security Middleware
if (!isProduction) {
  // enable cors only in development
  app.use(cors());
}

// helmet helps set a variety of headers to better secure your app
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin",
  })
);

// Set the _csrf token and create req.csrfToken method
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true,
    },
  })
);

// simple in-memory database
// const sgfs = [];

// app.post("/upload", upload.array("file", 10), (req, res) => {
//   // req.files is an array of files uploaded
//   // req.body will contain the text fields, if there were any
//   console.log(req.files); // output is seen in the terminal

//   // add each uploaded file to the database
//   req.files.forEach((file) => {
//     sgfs.push({
//       // below line was this (parsing text file instead of SGF kept the special Chinese characters!):
//       // originalname: file.originalname,
//       originalname: file.originalname.replace(".sgf", ".txt"),
//       uploadDate: new Date(),
//     });
//   });

//   // res.json({ message: "File(s) uploaded!", count: req.files.length });
// });

app.use(routes);
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = { message: "The requested resource couldn't be found." };
  err.status = 404;
  next(err);
});

// Process sequelize errors
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    let errors = {};
    for (let error of err.errors) {
      errors[error.path] = error.message;
    }
    err.title = "Validation error";
    err.errors = errors;
  }
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;
