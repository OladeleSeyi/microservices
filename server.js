import express from "express";
import bodyParser from "body-parser";
import keys from "./config/keys";

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(keys.PORT, () => {
  console.log(`The server is spinning at port  ${process.env.PORT}`);
});
