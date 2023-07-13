import { Request, Response } from "express";
import { createUserService } from "../services/users/user.create.service";
import { listUserService } from "../services/users/user.list.service";
import { destroyUserService } from "../services/users/destroy.update.service";
import { updateUserService } from "../services/users/user.update.service";
import { retrieveUserService } from "../services/users/user.retrieve.service";

export const userCreateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = await createUserService(req.body);

  return res.status(201).json(newUser);
};

export const userListController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await listUserService();

  return res.status(200).json(users);
};

export const userRetrieveController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await retrieveUserService(req.params.id);
  return res.status(200).json(user);
};

export const userDestroyController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await destroyUserService(req.params.id);
  return res.status(204).json();
};

export const userUpdateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const updatedUser = await updateUserService(req.params.id, req.body);

  return res.status(200).json(updatedUser);
};
