import { TUserReturn, TUserUpdate } from "../../interfaces";
import User from "../../models/users/users.model";
import { userReturnSchema } from "../../schemas/users.schema";

export const updateUserService = async (
  userId: string,
  data: TUserUpdate
): Promise<TUserReturn> => {
  return userReturnSchema.parse(
    await User.findOneAndUpdate({ _id: userId }, data, { new: true })
  );
};
