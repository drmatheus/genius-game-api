"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scoreSchema = void 0;
const zod_1 = require("zod");
exports.scoreSchema = zod_1.z.object({
    score: zod_1.z.number(),
});
