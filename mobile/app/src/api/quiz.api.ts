import api from "./client";

export const fetchQuizzesApi = () =>
  api.get("/quizzes");

export const startQuizApi = (quizId: number) =>
  api.post(`/attempts/start/${quizId}`);
