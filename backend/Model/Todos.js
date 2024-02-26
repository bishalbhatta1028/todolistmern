const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TodosSchema = new Schema({
 
  title: String,
 
});
const Todos = mongoose.model("todos",TodoSchema);
module.exports=  Todos