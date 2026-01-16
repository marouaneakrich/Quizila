import prisma from "../../config/prisma.js";
import { AIService } from "../ai/ai.service.js";

export class AttemptService {
  static async start(
    userId: number,
    quizId: number
  ) {
    const quiz = await prisma.quiz.findUnique({
      where: { id: quizId },
    });

    if (!quiz) throw new Error("Quiz not found");

    const questions = await AIService.generateQuestions({
      topic: quiz.title,
      difficulty: "medium",
      count: 5,
    });

    const attempt = await prisma.quizAttempt.create({
      data: {
        userId,
        quizId,
        questions: {
          create: questions.map(q => ({
            question: q.question,
            options: q.options,
            correctIndex: q.correctAnswerIndex,
          })),
        },
      },
      include: { questions: true },
    });

    return attempt;
  }

  static async answer(
    attemptId: number,
    questionId: number,
    answer: number
  ) {
    const question = await prisma.attemptQuestion.findUnique({
      where: { id: questionId },
    });

    if (!question) throw new Error("Question not found");

    const isCorrect = question.correctIndex === answer;

    await prisma.attemptQuestion.update({
      where: { id: questionId },
      data: { userAnswer: answer },
    });

    if (isCorrect) {
      await prisma.quizAttempt.update({
        where: { id: attemptId },
        data: { score: { increment: 1 } },
      });
    }

    return { correct: isCorrect };
  }
}
