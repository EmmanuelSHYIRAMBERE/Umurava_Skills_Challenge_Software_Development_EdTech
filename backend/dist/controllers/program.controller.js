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
exports.ProgramController = void 0;
const program_service_1 = require("../services/program.service");
const errorhandler_utils_1 = __importStar(require("../utils/errorhandler.utils"));
class ProgramController {
    constructor() {
        this.createProgram = (0, errorhandler_utils_1.catchAsyncError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const programData = req.body;
            const newProgram = yield this.programService.createProgram(programData);
            res.status(201).json({ program: newProgram });
        }));
        this.getPrograms = (0, errorhandler_utils_1.catchAsyncError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const programs = yield this.programService.getPrograms();
            res.status(200).json({ programs });
        }));
        this.getProgramById = (0, errorhandler_utils_1.catchAsyncError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const programId = req.params.id;
            const program = yield this.programService.getProgramById(programId);
            if (!program) {
                return next(new errorhandler_utils_1.default({ message: "Program not found", statusCode: 404 }));
            }
            res.status(200).json({ program });
        }));
        this.updateProgram = (0, errorhandler_utils_1.catchAsyncError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const programId = req.params.id;
            const updateData = req.body;
            const updatedProgram = yield this.programService.updateProgram(programId, updateData);
            if (!updatedProgram) {
                return next(new errorhandler_utils_1.default({ message: "Program not found", statusCode: 404 }));
            }
            res.status(200).json({ program: updatedProgram });
        }));
        this.deleteProgram = (0, errorhandler_utils_1.catchAsyncError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const programId = req.params.id;
            const deletedProgram = yield this.programService.deleteProgram(programId);
            if (!deletedProgram) {
                return next(new errorhandler_utils_1.default({ message: "Program not found", statusCode: 404 }));
            }
            res.status(200).json({ message: "Program deleted successfully" });
        }));
        this.programService = new program_service_1.ProgramService();
    }
}
exports.ProgramController = ProgramController;
//# sourceMappingURL=program.controller.js.map