import mongoose from "mongoose";
const Schema = mongoose.Schema;
const formSchema = new Schema({
  formName: String,
  name: String,
  lastName: String,
  firstName: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  shoot: String,
  venue: String,
  date: String,
  referrer: String,
  createdAt: { type: Date, default: Date.now() }
});

const Form = mongoose.model("Form", formSchema);

export default Form;
