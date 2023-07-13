import { NextFunction, Request, Response } from "express";
import User from "../models/users/users.model";
import { AppError } from "../error";

export const verifyEmailAndNickname = async (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  const userByEmail = req.body.email
    ? await User.findOne({ email: req.body.email })
    : false;
  const userByNickname = req.body.nickname
    ? await User.findOne({ nickname: req.body.nickname })
    : false;

  if (userByNickname && userByEmail) {
    throw new AppError("Email and nickname are unvaliable", 409);
  }

  if (userByNickname) {
    throw new AppError("Nickname is unavailable", 409);
  }

  if (userByEmail) {
    throw new AppError("Email is unavailable", 409);
  }

  return next();
};
