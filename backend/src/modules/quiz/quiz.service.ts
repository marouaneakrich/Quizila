import prisma from "../../config/prisma";
import { CreateQuizDTO, UpdateQuizDTO } from "./quiz.types";

export class QuizService {
  static create(data: CreateQuizDTO, userId: number) {
    return prisma.quiz.create({
      data: {
        ...data,
        createdBy: userId,
      },
    });
  }

  static findAll() {
    return prisma.quiz.findMany({
      where: { isActive: true },
      include: { category: true },
    });
  }

  static findById(id: number) {
    return prisma.quiz.findUnique({
      where: { id },
      include: { category: true },
    });
  }

  static update(id: number, data: UpdateQuizDTO) {
    return prisma.quiz.update({
      where: { id },
      data,
    });
  }

  static delete(id: number) {
    return prisma.quiz.delete({
      where: { id },
    });
  }
}
