"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userReturnSchema = exports.userUpdateSchema = exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    name: zod_1.z.string(),
    password: zod_1.z.string(),
    email: zod_1.z.string().email(),
    nickname: zod_1.z.string(),
    picture: zod_1.z.string(),
});
exports.userUpdateSchema = exports.userSchema.partial();
exports.userReturnSchema = exports.userSchema
    .omit({ password: true })
    .extend({ id: zod_1.z.string(), scores: zod_1.z.array(zod_1.z.number()).optional() });
