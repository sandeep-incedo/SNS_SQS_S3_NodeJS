//const aws = require("aws-sdk");
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send('Hello, world!');  
});

app.listen(3000, () => {
  console.log("Server listing at port 3000");
});
