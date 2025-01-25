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
exports.HelpCenterController = void 0;
const help_center_service_1 = require("../services/help-center.service");
class HelpCenterController {
    constructor() {
        this.createHelpCenterItem = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const newHelpCenterItem = yield this.helpCenterService.createHelpCenterItem(req.body);
                res.status(201).json(newHelpCenterItem);
            }
            catch (error) {
                next(error);
            }
        });
        this.getHelpCenterItems = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const helpCenterItems = yield this.helpCenterService.getHelpCenterItems();
                res.status(200).json(helpCenterItems);
            }
            catch (error) {
                next(error);
            }
        });
        this.getHelpCenterItemById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const helpCenterItem = yield this.helpCenterService.getHelpCenterItemById(id);
                if (!helpCenterItem) {
                    res.status(404).json({ message: "Help Center item not found" });
                    return;
                }
                res.status(200).json(helpCenterItem);
            }
            catch (error) {
                next(error);
            }
        });
        this.updateHelpCenterItem = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const updatedHelpCenterItem = yield this.helpCenterService.updateHelpCenterItem(id, req.body);
                if (!updatedHelpCenterItem) {
                    res.status(404).json({ message: "Help Center item not found" });
                    return;
                }
                res.status(200).json(updatedHelpCenterItem);
            }
            catch (error) {
                next(error);
            }
        });
        this.deleteHelpCenterItem = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const deletedHelpCenterItem = yield this.helpCenterService.deleteHelpCenterItem(id);
                if (!deletedHelpCenterItem) {
                    res.status(404).json({ message: "Help Center item not found" });
                    return;
                }
                res.status(200).json({ message: "Help Center item deleted" });
            }
            catch (error) {
                next(error);
            }
        });
        this.helpCenterService = new help_center_service_1.HelpCenterService();
    }
}
exports.HelpCenterController = HelpCenterController;
//# sourceMappingURL=help-center.controller.js.map