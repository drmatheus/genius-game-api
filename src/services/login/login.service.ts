import { compare } from "bcryptjs";
import { AppError } from "../../error";
import { TLogin, TToken } from "../../interfaces";
import User from "../../models/users/users.model";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const loginUserService = async (data: TLogin): Promise<TToken> => {
  const user = await User.findOne({
    $or: [{ email: data.email }, { nickname: data.nickname }],
  });

  if (!user) {
    throw new AppError("Incorrect credentials", 401);
  }

  const correctPass: boolean = await compare(data.password, user.password);

  if (!correctPass) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign({}, process.env.SECRET_KEY!, {
    expiresIn: "24h",
    subject: user.id.toString(),
  });

  return { token: token };
};
