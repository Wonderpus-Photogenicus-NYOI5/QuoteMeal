const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');

const PORT = 3000;

// ********Controller********
const userController = require('./controller/userController');

// ********Mongo connection********
const mongoURI = require(path.join(__dirname, 'mongoURI.js'));
const db = mongoose.connection;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'QuoteMeal'
});

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Connected to database successfully");
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ********TEST********
const test = ['this', 'is', 'a', 'test'];

app.get('/api/test', (req, res) => {
  console.log('received test request');
  return res.status(200).json(test);
});

// ********Routes********
// login or signup
app.post('/api/user', ** ENTER MIDDLEWARE HERE **, (req, res) => {
  console.log('request received');
  return res.status(200).json();
});

// update fave recipes
app.patch('/api', ** ENTER MIDDLEWARE HERE **, (req, res) => {
  console.log('request received')
  return res.status(200).json();
});

// delete a recipe
app.delete('/api', ** ENTER MIDDLWARE HERE **, (req, res) => {
  console.log('request received')
  return res.status(200).json();
});


app.get("/", (req, res) => {
    res.status(200);
  });


// Serve webpack bundle
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use("/", express.static(path.join(__dirname, './public/index.html')));

//global error handler
app.use((err, req, res, next) => {
    let defaultErr = {
      log: "Express error handler caught unknown middleware error",
      status: 400,
      message: { err: "An error occurred" },
    };
    let errorObj = Object.assign(defaultErr, err);
    console.log(errorObj);
    return res.sendStatus(500);
  });

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
module.exports = app;