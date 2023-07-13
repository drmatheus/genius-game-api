import { z } from "zod";

export const loginSchema = z
  .object({
    email: z.string().email().optional(),
    nickname: z.string().optional(),
    password: z.string(),
  })
  .refine(
    (data: any) => {
      const keys = Object.keys(data);
      const hasEmail = keys.includes("email");
      const hasNickname = keys.includes("nickname");
      return hasEmail || hasNickname;
    },
    {
      message: "Email or nickname must be informed",
      path: ["email", "nickname"],
    }
  );
