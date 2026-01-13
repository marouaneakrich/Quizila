import { Router } from "express";
import { AttemptController } from "./attempt.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { validate } from "../../middlewares/validate.middleware";
import { answerSchema } from "./attempt.schema"

const router = Router();

/**
 * @swagger
 * /attempts/start/{quizId}:
 *   post:
 *     summary: Start AI-generated quiz
 *     tags: [Quiz Attempts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: quizId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       201:
 *         description: Quiz attempt started
 */
router.post(
  "/start/:quizId",
  authMiddleware,
  AttemptController.start
);
/**
 * @swagger
 * /attempts/answer/{attemptId}/{questionId}:
 *   post:
 *     summary: Answer a QCM question
 *     tags: [Quiz Attempts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               answer:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: Answer result
 */

router.post(
  "/answer/:attemptId/:questionId",
  authMiddleware,
  validate(answerSchema),
  AttemptController.answer
);

router.post(
  "/answer/:attemptId/:questionId",
  authMiddleware,
  AttemptController.answer
);

export default router;
