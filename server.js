import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import "express-async-errors";
import cors from "cors";
import keys from "./config/keys";
import routes from "./routes";
import "./db";
import path from "path";

let app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.listen(keys.PORT, () => {
  console.log(`The server is spinning 🛸 at port  ${process.env.PORT}`);
});
