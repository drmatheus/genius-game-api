import User from "../../models/users/users.model";

export const destroyUserService = async (userId: string): Promise<void> => {
  await User.deleteOne({ _id: userId });
};
