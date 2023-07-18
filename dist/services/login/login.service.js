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
exports.loginUserService = void 0;
const bcryptjs_1 = require("bcryptjs");
const error_1 = require("../../error");
const users_model_1 = __importDefault(require("../../models/users/users.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const loginUserService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield users_model_1.default.findOne({
        $or: [{ email: data.email }, { nickname: data.nickname }],
    });
    if (!user) {
        throw new error_1.AppError("Incorrect credentials", 401);
    }
    const correctPass = yield (0, bcryptjs_1.compare)(data.password, user.password);
    if (!correctPass) {
        throw new error_1.AppError("Invalid credentials", 401);
    }
    const token = jsonwebtoken_1.default.sign({}, process.env.SECRET_KEY, {
        expiresIn: "24h",
        subject: user.id.toString(),
    });
    return { token: token };
});
exports.loginUserService = loginUserService;
