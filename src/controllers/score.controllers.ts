import { Request, Response } from "express";
import { createScoreService } from "../services/scores/score.create.service";
import { retriveScoreService } from "../services/scores/score.retrive.service";

export const scoreCreateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await createScoreService(
    res.locals.tokenData.sub,
    req.body.score
  );
  return res.status(201).json(user);
};

export const scoreRetrieveController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userScores = await retriveScoreService();
  return res.status(200).json(userScores);
};
