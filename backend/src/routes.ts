import { Router } from "express";
import authRoutes from "./modules/auth/auth.routes";
import quizRoutes from "./modules/quiz/quiz.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/quizzes", quizRoutes);

export default router;
