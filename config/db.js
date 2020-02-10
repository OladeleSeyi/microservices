import mongoose from "mongoose";
import keys from "./keys";
const uri = process.env.MONGO_URI || keys.mongodb;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    reconnectTries: 2
  })
  .then(() => {
    console.log(`MongoDb is succesfully connnected to ${uri}`);
  })
  .catch(err => {
    console.log("db connection", err);
  });
