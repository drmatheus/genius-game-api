"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyBody = void 0;
const verifyBody = (schema) => (req, res, next) => {
    req.body = schema.parse(req.body);
    next();
};
exports.verifyBody = verifyBody;
