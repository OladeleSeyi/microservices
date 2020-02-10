import mongoose from "mongoose";
const Schema = mongoose.Schema;
const submissionSchema = new Schema({
  formName: String,
  lastName: String,
  firstName: String,
  email: String,
  phone: String,
  message: String,
  shoot: String,
  venue: String,
  date: String,
  extras: String
});

const Submission = mongoose.model("Submission", submissionSchema);
module.exports = Submission;
