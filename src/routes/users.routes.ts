import { Request, Response, Router } from "express";
import {
  userCreateController,
  userDestroyController,
  userListController,
  userRetrieveController,
  userUpdateController,
  userPictureController,
} from "../controllers/users.controllers";
import { userSchema, userUpdateSchema } from "../schemas/users.schema";
import { verifyBody } from "../middlewares/verifyBody.middleware";
import { verifyUserId } from "../middlewares/verifyUserId.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyIsAdminOrHimself } from "../middlewares/verifyIsAdminOrHimself.middleware";
import { verifyEmailAndNickname } from "../middlewares/verifyEmailAndNickname.middleware";
import multer from "multer";
import { multerConfig } from "../config/multer";
export const userRoutes: Router = Router();

userRoutes.post(
  "/picture",
  multer(multerConfig).single("file"),
  userPictureController
);
userRoutes.post(
  "/",
  verifyBody(userSchema),
  verifyEmailAndNickname,
  userCreateController
);
userRoutes.get("/:id", verifyUserId, userRetrieveController);
userRoutes.get("/", verifyToken, userListController);
userRoutes.delete(
  "/:id",
  verifyToken,
  verifyIsAdminOrHimself,
  verifyUserId,
  userDestroyController
);
userRoutes.patch(
  "/:id",
  verifyToken,
  verifyIsAdminOrHimself,
  verifyEmailAndNickname,
  verifyBody(userUpdateSchema),
  userUpdateController
);
