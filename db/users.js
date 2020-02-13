import Nedb from "../models/Nedb";
const db = Nedb.db;

class User {
  constructor(data) {
    this.id = data.id;
    this.username = data.username;
    this.name = data.name;
    this.created = new Date().toISOString();
    this.password = data.password;
  }
}

export default {
  async findByUserName(user) {
    return await new Promise((resolve, reject) => {
      db.find({ username: user }, (err, doc) => {
        if (err) reject(err);
        resolve(doc);
      });
    });
  },
  async findById(id) {
    return await new Promise((resolve, reject) => {
      db.find({ _id: id }, (err, doc) => {
        if (err) reject(err);
        resolve(doc);
      });
    });
  },
  async create({ id, username, name, password }) {
    return await new Promise((resolve, reject) => {
      const user = new User({
        id,
        username,
        name,
        password
      });
      console.log("user", user);
      db.insert(user, (err, doc) => {
        if (err) reject(err);
        resolve(doc);
      });
    });
  }
};
