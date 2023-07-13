import { Router } from "express";
import { verifyBody } from "../middlewares/verifyBody.middleware";
import { loginSchema } from "../schemas/login.schema";
import { loginCreateController } from "../controllers/login.controllers";

export const loginRoutes: Router = Router();

loginRoutes.post("/", verifyBody(loginSchema), loginCreateController);
