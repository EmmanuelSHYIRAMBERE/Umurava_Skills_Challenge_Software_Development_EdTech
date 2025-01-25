"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const setting_controller_1 = require("../controllers/setting.controller");
const tokenverification_middleware_1 = require("../middlewares/tokenverification.middleware");
const settingsRouter = express_1.default.Router();
const settingsControllerInstance = new setting_controller_1.settingsController();
settingsRouter.post("/", tokenverification_middleware_1.verifyAccessToken, settingsControllerInstance.createSettings);
settingsRouter.get("/:userId", tokenverification_middleware_1.verifyAccessToken, settingsControllerInstance.getSettings);
settingsRouter.put("/:userId", tokenverification_middleware_1.verifyAccessToken, settingsControllerInstance.updateSettings);
exports.default = settingsRouter;
//# sourceMappingURL=setting.route.js.map