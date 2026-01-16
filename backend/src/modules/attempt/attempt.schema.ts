import { z } from "zod";

export const answerSchema = z.object({
  body: z.object({
    answer: z.number().min(0).max(3),
  }),
});
