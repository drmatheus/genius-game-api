import { NextFunction, Request, Response } from "express";
import { JsonWebTokenError } from "jsonwebtoken";
import { ZodError } from "zod";

export class AppError extends Error {
  message: string;
  statusCode: number;

  constructor(message: string, statusCodes: number = 400) {
    super();
    this.message = message;
    this.statusCode = statusCodes;
  }
}

export const handleErrors = (
  error: Error,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).send({ message: error.message });
  }

  if (error instanceof ZodError) {
    return res.status(400).send({ message: error.flatten().fieldErrors });
  }

  if (error instanceof JsonWebTokenError) {
    return res.status(401).send({ message: error.message });
  }

  console.log(error);
  return res.status(500).send({ message: "Internal error server." });
};
