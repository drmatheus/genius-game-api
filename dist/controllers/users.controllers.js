"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userUpdateController = exports.userDestroyController = exports.userLoggedRetrieveController = exports.userRetrieveController = exports.userListController = exports.userPictureController = exports.userCreateController = void 0;
const user_create_service_1 = require("../services/users/user.create.service");
const user_list_service_1 = require("../services/users/user.list.service");
const user_destroy_service_1 = require("../services/users/user.destroy.service");
const user_update_service_1 = require("../services/users/user.update.service");
const user_retrieve_service_1 = require("../services/users/user.retrieve.service");
const userCreateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield (0, user_create_service_1.createUserService)(req.body);
    return res.status(201).json(newUser);
});
exports.userCreateController = userCreateController;
const userPictureController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { location, etag } = req.file;
    return res.status(201).send({ location, etag });
});
exports.userPictureController = userPictureController;
const userListController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, user_list_service_1.listUserService)();
    return res.status(200).json(users);
});
exports.userListController = userListController;
const userRetrieveController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, user_retrieve_service_1.retrieveUserService)(req.params.id);
    return res.status(200).json(user);
});
exports.userRetrieveController = userRetrieveController;
const userLoggedRetrieveController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, user_retrieve_service_1.retrieveUserService)(res.locals.tokenData.sub);
    return res.status(200).json(user);
});
exports.userLoggedRetrieveController = userLoggedRetrieveController;
const userDestroyController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, user_destroy_service_1.destroyUserService)(req.params.id);
    return res.status(204).json();
});
exports.userDestroyController = userDestroyController;
const userUpdateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield (0, user_update_service_1.updateUserService)(req.params.id, req.body);
    return res.status(200).json(updatedUser);
});
exports.userUpdateController = userUpdateController;
