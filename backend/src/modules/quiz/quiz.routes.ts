import { Router } from "express";
import { QuizController } from "./quiz.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { validate } from "../../middlewares/validate.middleware";
import { createQuizSchema, updateQuizSchema } from "./quiz.schema";

const router = Router();

router.get("/", QuizController.findAll);
router.get("/:id", QuizController.findOne);

router.post(
  "/",
  authMiddleware,
  validate(createQuizSchema),
  QuizController.create
);

router.put(
  "/:id",
  authMiddleware,
  validate(updateQuizSchema),
  QuizController.update
);

router.delete("/:id", authMiddleware, QuizController.remove);

export default router;
