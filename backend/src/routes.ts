import { Router } from "express";
import authRoutes from "./modules/auth/auth.routes";
import quizRoutes from "./modules/quiz/quiz.routes";
import attemptRoutes from "./modules/attempt/attempt.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/quizzes", quizRoutes);
router.use("/attempts", attemptRoutes);

export default router;
