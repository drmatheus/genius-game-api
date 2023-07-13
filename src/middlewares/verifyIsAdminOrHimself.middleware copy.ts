import { NextFunction, Request, Response } from "express";
import User from "../models/users/users.model";
import { AppError } from "../error";

export const verifyIsAdminOrHimself = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.params.id && res.locals.tokenData.sub == req.params.id) return next();

  const user = await User.findOne({ _id: res.locals.tokenData.sub });

  if (user!.admin) return next();

  throw new AppError("Insufficient permission", 403);
};
