const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TodosSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
});
const Todos = mongoose.model("todos", TodosSchema);
module.exports = Todos;
