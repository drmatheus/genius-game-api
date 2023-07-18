"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcryptjs_1 = require("bcryptjs");
const { Schema } = mongoose_1.default;
const UserSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    nickname: { type: String, unique: true, required: true },
    picture: { type: String, required: true },
    admin: { type: Boolean, required: false },
    scores: { type: [Number], required: true, default: [] },
});
UserSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    const hashedPassword = (0, bcryptjs_1.hashSync)(this.password, 10);
    this.password = hashedPassword;
    next();
});
const User = mongoose_1.default.model("User", UserSchema);
exports.default = User;
