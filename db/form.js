import Form from "../models/Form";
export default {
  async create(data) {
    const formData = new Form({
      formName: data.formName,
      name: data.name,
      lastName: data.lastName,
      firstName: data.firstName,
      email: data.email,
      phone: data.phone,
      message: data.message,
      shoot: data.shoot,
      venue: data.venue,
      date: data.date,
      referrer: data.referrer
    });

    let save = await new Promise((resolve, reject) => {
      formData.save().then((doc, err) => {
        if (err) return reject(err);
        resolve(doc);
      });
    });
    return save;
  },
  async getAll() {
    let all = await new Promise((resolve, reject) => {
      Form.find({}, (err, docs) => {
        if (err) reject(err);
        resolve(docs);
      });
    });
    return all;
  }
};
