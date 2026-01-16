import { Request, Response } from "express";
import { LeaderboardService } from "./leaderboard.service.js";

export class LeaderboardController {
  static async global(req: Request, res: Response) {
    const limit = Number(req.query.limit) || 10;
    const leaderboard = await LeaderboardService.global(limit);
    res.json(leaderboard);
  }

  static async me(req: Request, res: Response) {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });
    const stats = await LeaderboardService.userStats(req.user.userId);
    res.json(stats);
  }
}
