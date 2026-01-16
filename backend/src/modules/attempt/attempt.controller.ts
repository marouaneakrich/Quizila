import { Request, Response } from "express";
import { AttemptService } from "./attempt.service.js";

export class AttemptController {
  static async start(req: Request, res: Response) {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });
    const attempt = await AttemptService.start(
      req.user.userId,
      Number(req.params.quizId)
    );
    res.status(201).json(attempt);
  }

  static async answer(req: Request, res: Response) {
    const result = await AttemptService.answer(
      Number(req.params.attemptId),
      Number(req.params.questionId),
      req.body.answer
    );
    res.json(result);
  }
}
