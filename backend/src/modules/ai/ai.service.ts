import { GenerateQuestionsInput, AIQuestion } from "./ai.types.js";
import { generateQcmPrompt } from "./ai.prompt.js";

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
