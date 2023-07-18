"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const error_1 = require("../error");
const jsonwebtoken_1 = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
    if (!req.headers.authorization) {
        throw new error_1.AppError("Missing bearer token", 401);
    }
    const token = req.headers.authorization.split(" ")[1];
    res.locals.tokenData = (0, jsonwebtoken_1.verify)(token, process.env.SECRET_KEY);
    next();
};
exports.verifyToken = verifyToken;
