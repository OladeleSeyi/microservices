import Datastore from "nedb";
import bcrypt from "bcrypt";
import path from "path";
const db = new Datastore({ filename: process.env.NEDB, autoload: true });

let pass = bcrypt.hashSync(process.env.ADMIN_PASS, 10);

let admin = {
  id: "lala",
  username: "admin",
  name: "administrator",
  password: pass
};
db.insert(admin, (err, doc) => {
  console.log("done");
});

export default db;
