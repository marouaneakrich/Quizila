export const generateQcmPrompt = (
  topic: string,
  difficulty: string,
  count: number
) => `
You are an expert quiz generator.

Generate ${count} multiple-choice questions (QCM) about "${topic}"
Difficulty: ${difficulty}

Rules:
- Each question must have exactly 4 options
- Only ONE option is correct
- Return strict JSON only
- Do NOT explain anything

JSON format:
[
  {
    "question": "Question text",
    "options": ["A", "B", "C", "D"],
    "correctAnswerIndex": 0
  }
]
`;
