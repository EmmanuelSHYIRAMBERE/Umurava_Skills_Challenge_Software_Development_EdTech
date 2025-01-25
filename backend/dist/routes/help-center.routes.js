"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const help_center_controller_1 = require("../controllers/help-center.controller");
const helpCenterRouter = express_1.default.Router();
const helpCenterController = new help_center_controller_1.HelpCenterController();
helpCenterRouter.post("/", helpCenterController.createHelpCenterItem);
helpCenterRouter.get("/", helpCenterController.getHelpCenterItems);
helpCenterRouter.get("/:id", helpCenterController.getHelpCenterItemById);
helpCenterRouter.put("/:id", helpCenterController.updateHelpCenterItem);
helpCenterRouter.delete("/:id", helpCenterController.deleteHelpCenterItem);
exports.default = helpCenterRouter;
//# sourceMappingURL=help-center.routes.js.map