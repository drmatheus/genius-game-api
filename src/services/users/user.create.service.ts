import { TUserCreate, TUserReturn } from "../../interfaces";
import User from "../../models/users/users.model";
import { userReturnSchema } from "../../schemas/users.schema";

export const createUserService = async (
  data: TUserCreate
): Promise<TUserReturn> => {
  return userReturnSchema.parse(await User.create(data));
};
