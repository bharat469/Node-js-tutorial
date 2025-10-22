const express = require("express");

const port = 8000;

const app = express();

app.get("/", (req, res) => {
  res.send(`This is Home page and my name is ${req.query.myName}`);
});

app.get("/about", (req, res) => {
  res.send("THIS IS ABOUT PAGE");
});

app.listen(port, () => console.log("SERVER HAS BEEN STARTED"));
