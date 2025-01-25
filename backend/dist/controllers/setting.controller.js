"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.settingsController = void 0;
const setting_service_1 = require("../services/setting.service");
const validators_1 = require("../utils/validators");
const errorhandler_utils_1 = __importStar(require("../utils/errorhandler.utils"));
class settingsController {
    constructor() {
        this.createSettings = (0, errorhandler_utils_1.catchAsyncError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const userId = req.user._id;
            const { error } = validators_1.settingsValidationSchema.validate(req.body, {
                abortEarly: false,
            });
            if (error) {
                const errorMessage = error.details.map((err) => err.message).join(", ");
                return next(new errorhandler_utils_1.default({
                    message: errorMessage,
                    statusCode: 400,
                }));
            }
            // Append the userId to the request body
            req.body.userId = userId;
            const settings = yield this.settingsService.CreateSettings(req.body);
            if (!settings) {
                return next(new errorhandler_utils_1.default({
                    message: "Failed to create settings",
                    statusCode: 500,
                }));
            }
            res.status(201).json({ settings });
        }));
        this.getSettings = (0, errorhandler_utils_1.catchAsyncError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.userId;
            const settings = yield this.settingsService.GetSettingsByUserId(userId);
            if (!settings) {
                return next(new errorhandler_utils_1.default({
                    message: "Settings not found",
                    statusCode: 404,
                }));
            }
            res.status(200).json({ settings });
        }));
        this.updateSettings = (0, errorhandler_utils_1.catchAsyncError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.userId;
            const updateData = req.body;
            const { error } = validators_1.settingsValidationSchema.validate(updateData, {
                abortEarly: false,
            });
            if (error) {
                const errorMessage = error.details.map((err) => err.message).join(", ");
                return next(new errorhandler_utils_1.default({
                    message: errorMessage,
                    statusCode: 400,
                }));
            }
            const updatedSettings = yield this.settingsService.UpdateSettings(userId, updateData);
            if (!updatedSettings) {
                return next(new errorhandler_utils_1.default({
                    message: "Settings not found",
                    statusCode: 404,
                }));
            }
            res.status(200).json({ settings: updatedSettings });
        }));
        this.settingsService = new setting_service_1.SettingsService();
    }
}
exports.settingsController = settingsController;
//# sourceMappingURL=setting.controller.js.map