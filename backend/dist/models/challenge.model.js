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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenge = void 0;
const mongoose_1 = __importStar(require("mongoose"));
// Subtask Schema
const SubtaskSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String },
    url: { type: String },
    note: { type: String },
});
// Task Schema
const TaskSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String },
    subtasks: [SubtaskSchema],
    url: { type: String },
    note: { type: String },
});
// Main Challenge Schema
const ChallengeSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    deadline: { type: Date, required: true },
    duration: { type: String, required: true },
    moneyPrize: { type: Number, required: true },
    contactEmail: { type: String, required: true },
    projectDescription: { type: String },
    projectBrief: { type: String, required: true, maxlength: 50 },
    projectDescriptionTasks: { type: String, required: true, maxlength: 500 },
    tasks: [TaskSchema],
    skillsNeeded: [{ type: String }],
    seniority: {
        type: String,
        required: true,
        enum: ["Junior", "Intermediate", "Senior"],
    },
    isOpen: { type: Boolean, default: true },
    status: { type: String, enum: ["open", "completed"], default: "open" },
    type: { type: String, required: true, enum: ["Challenge", "Hackathon"] },
    keyInstructions: { type: String, required: true },
    participants: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "User" }],
}, { timestamps: true });
exports.Challenge = mongoose_1.default.model("Challenge", ChallengeSchema);
//# sourceMappingURL=challenge.model.js.map