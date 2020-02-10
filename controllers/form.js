import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError
} from "../utils/errors";
import db from "../db";

export default {
  async addForm(req, res) {
    let data = req.body;

    if (!data.formName) throw new UnauthorizedError("Invalid form submition");
    if (!data.firstName)
      throw new BadRequestError("Please fill the form Properly");
    const form = await db.forms.create(data);

    if (form) {
      res.status(200).json({ message: "Form Submitted  saved!" });
    } else {
      throw new BadRequestError("An error occured while saving the form");
    }
  },
  async getForm(req, res) {
    const { id } = req.params;
    console.log(id);
    if (!id) throw new BadRequestError("Invalid ID ");
    const form = await db.forms.getOne(id);
    if (!form) throw new NotFoundError("Form Not Found");
    return res.status(200).json({ form });
  },
  async getAllForms(req, res) {
    const forms = await db.forms.getAll();
    console.log(forms);
    return res.json({ forms });
  }
};
