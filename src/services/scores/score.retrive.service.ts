import User from "../../models/users/users.model";

export const retriveScoreService = async (): Promise<any> => {
  return await User.aggregate([
    { $unwind: "$scores" },
    { $sort: { scores: -1 } },
    {
      $group: {
        _id: "$_id",
        name: { $first: "$nickname" },
        picture: { $first: "$picture" },
        highestScore: { $first: "$scores" },
        timesPlayed: { $sum: 1 },
      },
    },
    { $sort: { highestScore: -1 } },
  ]);
};
