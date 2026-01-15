import { create } from "zustand";
import { fetchQuizzesApi, startQuizApi } from "../api/quiz.api";

interface Quiz {
  id: number;
  title: string;
  description: string;
  difficulty: string;
}

interface QuizState {
  quizzes: Quiz[];
  loading: boolean;
  fetchQuizzes: () => Promise<void>;
  startQuiz: (quizId: number) => Promise<number>;
}

export const useQuizStore = create<QuizState>((set) => ({
  quizzes: [],
  loading: false,

  fetchQuizzes: async () => {
    set({ loading: true });
    const res = await fetchQuizzesApi();
    set({ quizzes: res.data, loading: false });
  },

  startQuiz: async (quizId) => {
    const res = await startQuizApi(quizId);
    return res.data.id; 
  },
}));
