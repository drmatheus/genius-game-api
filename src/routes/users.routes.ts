import { Router } from "express";
import {
  userCreateController,
  userDestroyController,
  userListController,
  userRetrieveController,
  userUpdateController,
} from "../controllers/users.controllers";
import { userSchema, userUpdateSchema } from "../schemas/users.schema";
import { verifyBody } from "../middlewares/verifyBody.middleware";
import { verifyUserId } from "../middlewares/verifyUserId.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyIsAdminOrHimself } from "../middlewares/verifyIsAdminOrHimself.middleware";
import { verifyEmailAndNickname } from "../middlewares/verifyEmailAndNickname.middleware";

export const userRoutes: Router = Router();

userRoutes.post(
  "/",
  verifyBody(userSchema),
  verifyEmailAndNickname,
  userCreateController
);
userRoutes.get("/:id", verifyUserId, userRetrieveController);
userRoutes.get("/", userListController);
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
