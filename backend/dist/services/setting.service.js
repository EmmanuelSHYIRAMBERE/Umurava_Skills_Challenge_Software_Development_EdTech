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
exports.SettingsService = void 0;
const setting_model_1 = require("../models/setting.model");
class SettingsService {
    CreateSettings(settingsData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = settingsData;
            // Check if settings already exist for this user
            const existingSettings = yield setting_model_1.Settings.findOne({ userId });
            if (existingSettings) {
                throw new Error("Settings already exist for this user");
            }
            const newSettings = yield setting_model_1.Settings.create(settingsData);
            return newSettings;
        });
    }
    GetSettingsByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const settings = yield setting_model_1.Settings.findOne({ userId });
            return settings;
        });
    }
    UpdateSettings(userId, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedSettings = yield setting_model_1.Settings.findOneAndUpdate({ userId }, updateData, { new: true });
            return updatedSettings;
        });
    }
}
exports.SettingsService = SettingsService;
//# sourceMappingURL=setting.service.js.map