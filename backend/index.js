const express = require("express");
const mongoose = require("mongoose");
require("./Model/Todos");
const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/todos")
  .then(() => console.log("Connected!"));
app.get("/add", (req, res) => {
  const task = req.body.task;
  res.send("hello world");
});
app.listen(8000, () => {
  console.log("Server started");
});
