import { GenerateQuestionsInput, AIQuestion } from "./ai.types";
import { generateQcmPrompt } from "./ai.prompt";

export class AIService {
  static async generateQuestions(
    input: GenerateQuestionsInput
  ): Promise<AIQuestion[]> {
    /**
     * MOCK for now
     * Later → OpenAI / Ollama / Claude / Local LLM
     */
    return [
      {
        question: `What is ${input.topic}?`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswerIndex: 1,
      },
    ];
  }
}
