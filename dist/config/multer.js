"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerConfig = exports.storageTypes = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const crypto_1 = __importDefault(require("crypto"));
const multer_s3_1 = __importDefault(require("multer-s3"));
const error_1 = require("../error");
// import {s3} as aws from "aws-sdk";
// import {S3} from "@aws-sdk/client-s3";
const { S3 } = require("@aws-sdk/client-s3");
exports.storageTypes = {
    local: multer_1.default.diskStorage({
        destination: (_, __, callback) => callback(null, path_1.default.resolve("src", "temp", "images")),
        filename: (_, file, callback) => crypto_1.default.randomBytes(16, (error, hash) => {
            if (error)
                callback(error);
            const fileName = `${hash.toString("hex")}-${file.originalname}`;
            callback(null, fileName);
        }),
    }),
    s3: (0, multer_s3_1.default)({
        s3: new S3(),
        bucket: "genius-game-profiles",
        contentType: multer_s3_1.default.AUTO_CONTENT_TYPE,
        acl: "public-read",
        key: (_, file, callback) => crypto_1.default.randomBytes(16, (error, hash) => {
            if (error)
                callback(error);
            const fileName = `${hash.toString("hex")}-${file.originalname}`;
            callback(null, fileName);
        }),
    }),
};
exports.multerConfig = {
    dest: path_1.default.resolve("src", "temp", "images"),
    storage: exports.storageTypes.s3,
    limits: {
        fileSize: 3 * 1024 * 1024,
    },
    fileFilter: (req, file, callback) => {
        const allowedMimes = ["image/jpeg", "image/pjpeg", "image/png"];
        if (allowedMimes.includes(file.mimetype)) {
            callback(null, true);
        }
        else {
            callback(new error_1.AppError("Invalid file type", 400));
        }
    },
};
