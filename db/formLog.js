import Nedb from "../models/Nedb";

let db2 = Nedb.db2;

export default {
  async createLog(data) {
    return db2.insert(data, (err, doc) => {
      if (err) Promise.reject(err);
      Promise.resolve(true);
    });
  },
  async droppedLog() {
    return await new Promise((resolve, reject) => {
      db2.find({}, (err, docs) => {
        if (err) reject(err);
        resolve(docs);
      });
    });
  }
};
