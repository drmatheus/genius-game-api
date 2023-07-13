import { Request, Response } from "express";
import { loginUserService } from "../services/login/login.service";

export const loginCreateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token = await loginUserService(req.body);

  return res.status(201).json(token);
};
