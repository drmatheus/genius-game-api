"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRoutes = void 0;
const express_1 = require("express");
const users_controllers_1 = require("../controllers/users.controllers");
const verifyToken_middleware_1 = require("../middlewares/verifyToken.middleware");
exports.profileRoutes = (0, express_1.Router)();
exports.profileRoutes.get("/", verifyToken_middleware_1.verifyToken, users_controllers_1.userLoggedRetrieveController);
