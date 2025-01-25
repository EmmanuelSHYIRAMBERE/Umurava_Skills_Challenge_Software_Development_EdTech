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
exports.ProgramService = void 0;
const program_model_1 = require("../models/program.model");
class ProgramService {
    createProgram(programData) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProgram = yield program_model_1.Program.create(programData);
            return newProgram;
        });
    }
    getPrograms() {
        return __awaiter(this, void 0, void 0, function* () {
            const programs = yield program_model_1.Program.find({});
            return programs;
        });
    }
    getProgramById(programId) {
        return __awaiter(this, void 0, void 0, function* () {
            const program = yield program_model_1.Program.findById(programId);
            return program;
        });
    }
    updateProgram(programId, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedProgram = yield program_model_1.Program.findByIdAndUpdate(programId, updateData, { new: true });
            return updatedProgram;
        });
    }
    deleteProgram(programId) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedProgram = yield program_model_1.Program.findByIdAndDelete(programId);
            return deletedProgram;
        });
    }
}
exports.ProgramService = ProgramService;
//# sourceMappingURL=program.service.js.map