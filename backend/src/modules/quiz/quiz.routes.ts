import { Router } from "express";
import { QuizController } from "./quiz.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { createQuizSchema, updateQuizSchema } from "./quiz.schema.js";

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
