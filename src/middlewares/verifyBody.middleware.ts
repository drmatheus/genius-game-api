import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const verifyBody =
  (schema: z.ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction) => {
    req.body = schema.parse(req.body);
    next();
  };
