import { Router } from "express";
import { NotFoundError, APIError } from "../utils/errors";
import routes from "./routes";

const router = Router();
router.get("/", (req, res) => {
  return res.json({ message: "Welcome to the Api. Choose a route" });
});

export default router;
