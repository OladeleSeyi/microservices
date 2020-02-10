import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError
} from "../utils/errors";

export default {
  async addForm(req, res) {
    let data = req.body;
    if (!data.formName) throw new BadRequestError("Invalid form submiton");
    res.send("TBD!");
  },
  async getForm(req, res) {
    res.send("TDB");
  },
  async getAllForms(req, res) {
    res.send("TBD");
  }
};
