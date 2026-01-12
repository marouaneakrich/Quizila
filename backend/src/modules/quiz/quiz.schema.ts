import { z } from "zod";

export const createQuizSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  categoryId: z.number().int(),
});

export const updateQuizSchema = z.object({
  title: z.string().min(3).optional(),
  description: z.string().min(10).optional(),
  isActive: z.boolean().optional(),
});
