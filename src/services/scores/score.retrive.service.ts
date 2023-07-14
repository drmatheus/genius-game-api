import User from "../../models/users/users.model";

export const retriveScoreService = async (): Promise<any> => {
  return await User.aggregate([
    { $unwind: "$scores" },
    { $sort: { scores: -1 } },
    {
      $group: {
        _id: "$_id",
        name: { $first: "$name" },
        highestScore: { $first: "$scores" },
      },
    },
    { $sort: { highestScore: -1 } },
  ]);
};
