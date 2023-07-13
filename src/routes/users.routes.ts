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
import { verifyIsAdminOrHimself } from "../middlewares/verifyIsAdminOrHimself.middleware copy";

export const userRoutes: Router = Router();

userRoutes.post("/", verifyBody(userSchema), userCreateController);
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
  verifyBody(userUpdateSchema),
  userUpdateController
);
