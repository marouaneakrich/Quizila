import { create } from "zustand";
import { answerQuestionApi } from "../api/attempt.api";

interface Question {
  id: number;
  question: string;
  options: string[];
}

interface GameState {
  questions: Question[];
  currentIndex: number;
  score: number;
  setQuestions: (q: Question[]) => void;
  answer: (
    attemptId: number,
    questionId: number,
    answer: number
  ) => Promise<boolean>;
  next: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  questions: [],
  currentIndex: 0,
  score: 0,

  setQuestions: (q) => set({ questions: q }),

  answer: async (attemptId, questionId, answer) => {
    const res = await answerQuestionApi(
      attemptId,
      questionId,
      answer
    );

    if (res.data.correct) {
      set(state => ({ score: state.score + 1 }));
    }

    return res.data.correct;
  },
  reset: () =>
    set({
      questions: [],
      currentIndex: 0,
      score: 0,
    }),

  next: () =>
    set(state => ({
      currentIndex: state.currentIndex + 1,
    })),
}));
