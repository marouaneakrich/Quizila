export interface AIQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface GenerateQuestionsInput {
  topic: string;
  difficulty: "easy" | "medium" | "hard";
  count: number;
}
