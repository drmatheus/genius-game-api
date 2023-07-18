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
exports.updateUserService = void 0;
const users_model_1 = __importDefault(require("../../models/users/users.model"));
const users_schema_1 = require("../../schemas/users.schema");
const updateUserService = (userId, data) => __awaiter(void 0, void 0, void 0, function* () {
    return users_schema_1.userReturnSchema.parse(yield users_model_1.default.findOneAndUpdate({ _id: userId }, data, { new: true }));
});
exports.updateUserService = updateUserService;
