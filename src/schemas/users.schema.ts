import { z } from "zod";

export const userSchema = z.object({
  name: z.string(),
  password: z.string(),
  email: z.string().email(),
  nickname: z.string(),
  picture: z.string(),
});

export const userUpdateSchema = userSchema.partial();

export const userReturnSchema = userSchema
  .omit({ password: true })
  .extend({ id: z.string(), scores: z.array(z.number()).optional() });
