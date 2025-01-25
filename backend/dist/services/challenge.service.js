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
exports.ChallengeService = void 0;
const challenge_model_1 = require("../models/challenge.model");
class ChallengeService {
    createChallenge(challengeData) {
        return __awaiter(this, void 0, void 0, function* () {
            const newChallenge = yield challenge_model_1.Challenge.create(challengeData);
            return newChallenge;
        });
    }
    getAllChallenges() {
        return __awaiter(this, void 0, void 0, function* () {
            const allChallenges = yield challenge_model_1.Challenge.find({});
            return allChallenges;
        });
    }
    getChallengeById(challengeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const challenge = yield challenge_model_1.Challenge.findById(challengeId);
            return challenge;
        });
    }
    updateChallenge(challengeId, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedChallenge = yield challenge_model_1.Challenge.findByIdAndUpdate(challengeId, updateData, {
                new: true,
            });
            return updatedChallenge;
        });
    }
    deleteChallenge(challengeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedChallenge = yield challenge_model_1.Challenge.findByIdAndDelete(challengeId);
            return deletedChallenge;
        });
    }
}
exports.ChallengeService = ChallengeService;
//# sourceMappingURL=challenge.service.js.map