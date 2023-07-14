import { Router } from "express";
import { verifyBody } from "../middlewares/verifyBody.middleware";
import { scoreSchema } from "../schemas/score.schema";
import {
  scoreCreateController,
  scoreRetrieveController,
} from "../controllers/score.controllers";
import { verifyToken } from "../middlewares/verifyToken.middleware";

export const scoreRoutes: Router = Router();

scoreRoutes.post(
  "/",
  verifyToken,
  verifyBody(scoreSchema),
  scoreCreateController
);

scoreRoutes.get("/", scoreRetrieveController);
