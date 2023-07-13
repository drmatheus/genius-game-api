import User from "../../models/users/users.model";

export const retrieveUserService = async (userId: string) => {
  return await User.findOne({ _id: userId });
};
