import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError
} from "../utils/errors";

export default {
  async addSubmission(req, res) {
    let { data } = req.body;
  },
  async getSubmission(req, res) {
    res.send("TDB");
  },
  async getAllSubmissions(req, res) {
    res.send("TBD");
  }
};
