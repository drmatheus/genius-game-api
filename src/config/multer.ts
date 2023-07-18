import multer from "multer";
import path from "path";
import crypto from "crypto";
import multerS3 from "multer-s3";
import { Request } from "express";
import { AppError } from "../error";
// import {s3} as aws from "aws-sdk";
// import {S3} from "@aws-sdk/client-s3";

const { S3 } = require("@aws-sdk/client-s3");

export const storageTypes = {
  local: multer.diskStorage({
    destination: (_: Request, __: any, callback: any): void =>
      callback(null, path.resolve("src", "temp", "images")),
    filename: (_: Request, file: any, callback: any): void =>
      crypto.randomBytes(16, (error, hash) => {
        if (error) callback(error);
        const fileName = `${hash.toString("hex")}-${file.originalname}`;
        callback(null, fileName);
      }),
  }),

  s3: multerS3({
    s3: new S3(),
    bucket: "genius-game-profiles",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: (_: Request, file: any, callback: any) =>
      crypto.randomBytes(16, (error, hash) => {
        if (error) callback(error);
        const fileName = `${hash.toString("hex")}-${file.originalname}`;
        callback(null, fileName);
      }),
  }),
};

export const multerConfig = {
  dest: path.resolve("src", "temp", "images"),
  storage: storageTypes.s3,
  limits: {
    fileSize: 3 * 1024 * 1024,
  },
  fileFilter: (req: Request, file: any, callback: any) => {
    const allowedMimes = ["image/jpeg", "image/pjpeg", "image/png"];
    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new AppError("Invalid file type", 400));
    }
  },
};
