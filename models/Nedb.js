import Datastore from "nedb";
import bcrypt from "bcryptjs";

const db = new Datastore({ filename: process.env.NEDB, autoload: true });
const db2 = new Datastore({ filename: process.env.NEDB2, autoload: true });

let pass = bcrypt.hashSync(process.env.ADMIN_PASS, 10);

let admin = {
  id: "lala",
  username: "admin",
  name: "administrator",
  password: pass
};
db.insert(admin, (err, doc) => {
  console.log("Initial Admin done");
});

export default {
  db,
  db2
};
