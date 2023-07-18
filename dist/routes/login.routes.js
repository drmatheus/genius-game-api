"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoutes = void 0;
const express_1 = require("express");
const verifyBody_middleware_1 = require("../middlewares/verifyBody.middleware");
const login_schema_1 = require("../schemas/login.schema");
const login_controllers_1 = require("../controllers/login.controllers");
exports.loginRoutes = (0, express_1.Router)();
exports.loginRoutes.post("/", (0, verifyBody_middleware_1.verifyBody)(login_schema_1.loginSchema), login_controllers_1.loginCreateController);
