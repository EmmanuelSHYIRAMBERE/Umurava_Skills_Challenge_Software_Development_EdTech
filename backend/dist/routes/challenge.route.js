"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const challenge_controller_1 = require("../controllers/challenge.controller");
const tokenverification_middleware_1 = require("../middlewares/tokenverification.middleware");
const challengeRouter = express_1.default.Router();
const challengeControllerInstance = new challenge_controller_1.ChallengeController();
challengeRouter.post("/", tokenverification_middleware_1.verifyAccessToken, challengeControllerInstance.createChallenge);
challengeRouter.get("/open", challengeControllerInstance.getOpenChallenges);
challengeRouter.get("/", tokenverification_middleware_1.verifyAccessToken, challengeControllerInstance.getChallenges);
challengeRouter.get("/:id", tokenverification_middleware_1.verifyAccessToken, challengeControllerInstance.getChallengeById);
challengeRouter.put("/:id", tokenverification_middleware_1.verifyAccessToken, challengeControllerInstance.updateChallenge);
challengeRouter.delete("/:id", tokenverification_middleware_1.verifyAccessToken, challengeControllerInstance.deleteChallenge);
exports.default = challengeRouter;
//# sourceMappingURL=challenge.route.js.map