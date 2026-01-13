import { Router } from "express";
import { AttemptController } from "./attempt.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { validate } from "../../middlewares/validate.middleware";
import { answerSchema } from "./attempt.schema"

const router = Router();

router.post(
  "/start/:quizId",
  authMiddleware,
  AttemptController.start
);

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
