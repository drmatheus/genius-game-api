import { z } from "zod";

export const scoreSchema = z.object({
  score: z.number(),
});
