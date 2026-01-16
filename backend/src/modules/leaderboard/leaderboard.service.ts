import prisma from "../../config/prisma.js";

export class LeaderboardService {
  static async global(limit = 10) {
    return prisma.quizAttempt.groupBy({
      by: ["userId"],
      _sum: { score: true },
      orderBy: {
        _sum: { score: "desc" },
      },
      take: limit,
    });
  }

  static async userStats(userId: number) {
    const attempts = await prisma.quizAttempt.findMany({
      where: { userId },
      select: {
        score: true,
        createdAt: true,
      },
    });

    const totalScore = attempts.reduce(
      (sum: number, a: { score: number }) => sum + a.score,
      0
    );

    return {
      totalAttempts: attempts.length,
      totalScore,
      history: attempts,
    };
  }
}
