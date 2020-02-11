import Datastore from "nedb";
import path from "path";

const db = new Datastore({ filename: "./users.db", autoload: true });

let admin = {
  id: "lala",
  username: "admin",
  name: "administrator",
  password: "hashed(pass)"
};

export default db;
