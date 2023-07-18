"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = void 0;
const zod_1 = require("zod");
exports.loginSchema = zod_1.z
    .object({
    email: zod_1.z.string().email().optional(),
    nickname: zod_1.z.string().optional(),
    password: zod_1.z.string(),
})
    .refine((data) => {
    const keys = Object.keys(data);
    const hasEmail = keys.includes("email");
    const hasNickname = keys.includes("nickname");
    return hasEmail || hasNickname;
}, {
    message: "Email or nickname must be informed",
    path: ["email", "nickname"],
});
