import mongoose from "mongoose";
const Schema = mongoose.Schema;
const formSchema = new Schema({
  formName: String,
  lastName: String,
  firstName: String,
  email: String,
  phone: String,
  message: String,
  shoot: String,
  venue: String,
  date: String,
  referrer: String
});

const Form = mongoose.model("Form", formSchema);

export default Form;
