import { Router } from "express";

import FormController from "../controllers/form";
import AuthController from "../controllers/auth";

const router = Router();
const authRouter = Router();

router.use("/auth", authRouter);

authRouter.post("/register", AuthController.register);
authRouter.post("/login", AuthController.login);
authRouter.get("/me", AuthController.authenticate, AuthController.getMe);

router.post("/auth", AuthController.register);
router.post("/login", AuthController.login);

router.post("/form", FormController.addForm);
router.get("/form", FormController.getAllForms);
router.get("/form/:id", FormController.getForm);

export default router;
