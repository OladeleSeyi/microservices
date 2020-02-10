import express from "express";
import bodyParser from "body-parser";
import "express-async-errors";
import cors from "cors";
import keys from "./config/keys";
import routes from "./routes";

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.listen(keys.PORT, () => {
  console.log(`The server is spinning at port  ${process.env.PORT}`);
});
