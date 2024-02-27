const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Todos = require("./Model/Todos");
require("./Model/Todos");
const app = express();
app.use(express.json());
app.use(cors());
mongoose
  .connect("mongodb://127.0.0.1:27017/todos")
  .then(() => console.log("Connected!"));
app.get("/add", (req, res) => {
  Todos.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});
app.post("/add", (req, res) => {
  const task = req.body.task;
  Todos.create({
    task: task,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});
app.listen(8000, () => {
  console.log("Server started");
});
