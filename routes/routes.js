import { Router } from "express";

import Submissions from "../controllers/submissions";
import submissions from "../controllers/submissions";

const router = Router();

router.post("/submissions", Submissions.addSubmission);
router.get("./submissions", Submissions.getAllSubmissions);
router.get("/submissions/:id", Submissions.getSubmission);

export default router;
