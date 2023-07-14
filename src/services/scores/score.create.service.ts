import { TUserReturn, TUserUpdate } from "../../interfaces";
import User from "../../models/users/users.model";
import { userReturnSchema } from "../../schemas/users.schema";

export const createScoreService = async (
  userId: string,
  score: number
): Promise<TUserReturn> => {
  return userReturnSchema.parse(
    await User.findOneAndUpdate(
      { _id: userId },
      { $push: { scores: score } },
      { new: true }
    )
  );
};
