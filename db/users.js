import db from "../models/User";

class User {
  constructor(data) {
    this.id = data.id;
    this.username = data.username;
    this.name = data.name;
    this.getPassword = function() {
      return data.password;
    };
  }
}

export const findByUserName = async user => {
  return await new Promise((resolve, reject) => {
    db.find({ user }, (err, doc) => {
      if (err) reject(err);
      resolve(doc);
    });
  });
};

export const create = async ({ id, username, name, password }) => {
  return await new Promise((resolve, reject) => {
    const user = new User({
      id,
      username,
      name,
      password
    });
    db.insert(user, (err, doc) => {
      if (err) reject(err);
      resolve(doc);
    });
  });
};
export default {
  async findByUserName(user) {
    return await new Promise((resolve, reject) => {
      db.find({ user }, (err, doc) => {
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
      db.insert(user, (err, doc) => {
        if (err) reject(err);
        resolve(doc);
      });
    });
  }
};
