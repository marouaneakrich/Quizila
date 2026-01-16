import { Request, Response } from "express";
import { QuizService } from "./quiz.service.js";

export class QuizController {
  static async create(req: Request, res: Response) {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });
    const quiz = await QuizService.create(
      req.body,
      req.user.userId
    );
    res.status(201).json(quiz);
  }

  static async findAll(_: Request, res: Response) {
    const quizzes = await QuizService.findAll();
    res.json(quizzes);
  }

  static async findOne(req: Request, res: Response) {
    const quiz = await QuizService.findById(Number(req.params.id));
    res.json(quiz);
  }

  static async update(req: Request, res: Response) {
    const quiz = await QuizService.update(
      Number(req.params.id),
      req.body
    );
    res.json(quiz);
  }

  static async remove(req: Request, res: Response) {
    await QuizService.delete(Number(req.params.id));
    res.status(204).send();
  }
}
