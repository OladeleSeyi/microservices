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
app.get("/loaderio-bb254449d89242298a24bdc22d56f217", (req, res) => {
  res.sendFile(
    path.join(__dirname + "/loaderio-bb254449d89242298a24bdc22d56f217.txt")
  );
});
app.use(routes);

app.listen(keys.PORT, () => {
  console.log(`The server is spinning 🛸 at port  ${process.env.PORT}`);
});
