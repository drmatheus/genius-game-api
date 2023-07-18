"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrors = exports.AppError = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const zod_1 = require("zod");
class AppError extends Error {
    constructor(message, statusCodes = 400) {
        super();
        this.message = message;
        this.statusCode = statusCodes;
    }
}
exports.AppError = AppError;
const handleErrors = (error, _, res, __) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).send({ message: error.message });
    }
    if (error instanceof zod_1.ZodError) {
        return res.status(400).send({ message: error.flatten().fieldErrors });
    }
    if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
        return res.status(401).send({ message: error.message });
    }
    console.log(error);
    return res.status(500).send({ message: "Internal error server." });
};
exports.handleErrors = handleErrors;
