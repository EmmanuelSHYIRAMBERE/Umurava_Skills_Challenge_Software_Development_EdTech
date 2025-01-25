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
exports.HelpCenterService = void 0;
const help_center_model_1 = require("../models/help-center.model");
class HelpCenterService {
    createHelpCenterItem(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newHelpCenterItem = yield help_center_model_1.HelpCenter.create(data);
            return newHelpCenterItem;
        });
    }
    getHelpCenterItems() {
        return __awaiter(this, void 0, void 0, function* () {
            const helpCenterItems = yield help_center_model_1.HelpCenter.find({});
            return helpCenterItems;
        });
    }
    getHelpCenterItemById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const helpCenterItem = yield help_center_model_1.HelpCenter.findById(id);
            return helpCenterItem;
        });
    }
    updateHelpCenterItem(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedHelpCenterItem = yield help_center_model_1.HelpCenter.findByIdAndUpdate(id, data, {
                new: true,
            });
            return updatedHelpCenterItem;
        });
    }
    deleteHelpCenterItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedHelpCenterItem = yield help_center_model_1.HelpCenter.findByIdAndDelete(id);
            return deletedHelpCenterItem;
        });
    }
}
exports.HelpCenterService = HelpCenterService;
//# sourceMappingURL=help-center.service.js.map