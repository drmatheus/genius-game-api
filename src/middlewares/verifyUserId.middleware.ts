import { NextFunction, Request, Response } from "express";
import User from "../models/users/users.model";
import { AppError } from "../error";

export const verifyUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validId = await User.find({ _id: req.params.id });
  if (!validId) {
    throw new AppError("Invalid user id", 404);
  }
  next();
};
