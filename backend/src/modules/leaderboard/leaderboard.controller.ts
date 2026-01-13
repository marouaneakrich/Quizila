import { Request, Response } from "express";
import { LeaderboardService } from "./leaderboard.service";

export class LeaderboardController {
  static async global(req: Request, res: Response) {
    const limit = Number(req.query.limit) || 10;
    const leaderboard = await LeaderboardService.global(limit);
    res.json(leaderboard);
  }

  static async me(req: Request, res: Response) {
    const stats = await LeaderboardService.userStats(req.user.userId);
    res.json(stats);
  }
}
