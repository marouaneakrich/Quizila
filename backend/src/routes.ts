import { Router } from "express";
import authRoutes from "./modules/auth/auth.routes.js";
import quizRoutes from "./modules/quiz/quiz.routes.js";
import attemptRoutes from "./modules/attempt/attempt.routes.js";
import leaderboardRoutes from "./modules/leaderboard/leaderboard.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/quizzes", quizRoutes);
router.use("/attempts", attemptRoutes);
router.use("/leaderboard", leaderboardRoutes);

export default router;
