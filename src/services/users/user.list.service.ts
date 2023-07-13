import User from "../../models/users/users.model";

export const listUserService = async () => {
  return await User.find({});
};
