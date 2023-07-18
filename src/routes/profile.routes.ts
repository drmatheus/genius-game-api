import { Router } from "express";
import { userLoggedRetrieveController } from "../controllers/users.controllers";
import { verifyToken } from "../middlewares/verifyToken.middleware";

export const profileRoutes = Router();

profileRoutes.get("/", verifyToken, userLoggedRetrieveController);
