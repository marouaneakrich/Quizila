import api from "./client";

export const answerQuestionApi = (
  attemptId: number,
  questionId: number,
  answer: number
) =>
  api.post(
    `/attempts/answer/${attemptId}/${questionId}`,
    { answer }
  );
