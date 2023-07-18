"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retriveScoreService = void 0;
const users_model_1 = __importDefault(require("../../models/users/users.model"));
const retriveScoreService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield users_model_1.default.aggregate([
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
});
exports.retriveScoreService = retriveScoreService;
