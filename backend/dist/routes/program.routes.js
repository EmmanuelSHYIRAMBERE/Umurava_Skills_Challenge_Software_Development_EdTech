"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const program_controller_1 = require("../controllers/program.controller");
const tokenverification_middleware_1 = require("../middlewares/tokenverification.middleware");
const adminverification_middleware_1 = require("../middlewares/adminverification.middleware");
const programRouter = express_1.default.Router();
const programController = new program_controller_1.ProgramController();
programRouter.post("/", tokenverification_middleware_1.verifyAccessToken, adminverification_middleware_1.adminauthorization, programController.createProgram);
programRouter.get("/", tokenverification_middleware_1.verifyAccessToken, programController.getPrograms);
programRouter.get("/:id", tokenverification_middleware_1.verifyAccessToken, programController.getProgramById);
programRouter.put("/:id", tokenverification_middleware_1.verifyAccessToken, adminverification_middleware_1.adminauthorization, programController.updateProgram);
programRouter.delete("/:id", tokenverification_middleware_1.verifyAccessToken, adminverification_middleware_1.adminauthorization, programController.deleteProgram);
exports.default = programRouter;
//# sourceMappingURL=program.routes.js.map