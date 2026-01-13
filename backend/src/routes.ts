import { Router } from "express";
import authRoutes from "./modules/auth/auth.routes";
import quizRoutes from "./modules/quiz/quiz.routes";
import attemptRoutes from "./modules/attempt/attempt.routes";
import leaderboardRoutes from "./modules/leaderboard/leaderboard.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/quizzes", quizRoutes);
router.use("/attempts", attemptRoutes);
router.use("/leaderboard", leaderboardRoutes);

export default router;
