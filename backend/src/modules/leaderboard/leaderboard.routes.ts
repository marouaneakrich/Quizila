import { Router } from "express";
import { LeaderboardController } from "./leaderboard.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

router.get("/global", LeaderboardController.global);
router.get("/me", authMiddleware, LeaderboardController.me);

export default router;
