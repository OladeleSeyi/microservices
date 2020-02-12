import { Router } from "express";

import FormController from "../controllers/form";
import AuthController from "../controllers/auth";

const router = Router();
const authRouter = Router();

router.use("/auth", authRouter);

authRouter.post("/register", AuthController.register);
authRouter.post("/login", AuthController.login);
authRouter.get("/me", AuthController.authenticate, AuthController.getMe);

router.post("/form", FormController.addForm);
router.get("/form", AuthController.authenticate, FormController.getAllForms);
router.get("/form/:id", AuthController.authenticate, FormController.getForm);

export default router;
