"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
require("dotenv/config");
mongoose_1.default
    .connect(process.env.DATABASE_URL)
    .then(() => {
    console.log("Database conected");
    app_1.default.listen(3000, () => console.log("App started"));
})
    .catch((e) => {
    console.log(e);
});
