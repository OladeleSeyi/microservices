import { Router } from "express";

import FormController from "../controllers/form";

const router = Router();

router.post("/form", FormController.addForm);
router.get("/form", FormController.getAllForms);
router.get("/form/:id", FormController.getForm);

export default router;
