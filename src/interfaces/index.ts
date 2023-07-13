import { z } from "zod";
import {
  userSchema,
  userUpdateSchema,
  userReturnSchema,
} from "../schemas/users.schema";
import { loginSchema } from "../schemas/login.schema";

export type TUserCreate = z.infer<typeof userSchema>;
export type TUserReturn = z.infer<typeof userReturnSchema>;
export type TUserUpdate = z.infer<typeof userUpdateSchema>;

export type TLogin = z.infer<typeof loginSchema>;
export type TToken = { token: string };
