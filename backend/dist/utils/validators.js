"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.programValidationSchema = exports.helpCenterValidationSchema = exports.settingsValidationSchema = exports.challengeValidationSchema = exports.userValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
// User validation schema
exports.userValidationSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    phone: joi_1.default.string().required(),
    password: joi_1.default.string().min(6).required(),
    role: joi_1.default.string().valid("user", "admin").default("user"),
});
// Subtask validation schema
const subtaskValidationSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    description: joi_1.default.string().optional(),
    url: joi_1.default.string().uri().optional(),
    note: joi_1.default.string().optional(),
});
// Task validation schema
const taskValidationSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    description: joi_1.default.string().optional(),
    subtasks: joi_1.default.array().items(subtaskValidationSchema).optional(),
    url: joi_1.default.string().uri().optional(),
    note: joi_1.default.string().optional(),
});
// Challenge validation schema
exports.challengeValidationSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    deadline: joi_1.default.date().optional(),
    duration: joi_1.default.string().optional(),
    moneyPrize: joi_1.default.number().optional(),
    contactEmail: joi_1.default.string().email().optional(),
    projectDescription: joi_1.default.string().optional(),
    projectBrief: joi_1.default.string().required(),
    projectDescriptionTasks: joi_1.default.string().optional(),
    tasks: joi_1.default.array().items(taskValidationSchema).optional(),
    skillsNeeded: joi_1.default.array().items(joi_1.default.string()).optional(),
    seniority: joi_1.default.string().valid("Junior", "Intermediate", "Senior").optional(),
    timeline: joi_1.default.number().optional(),
    isOpen: joi_1.default.boolean().default(true),
    status: joi_1.default.string().valid("open", "completed").default("open"),
    type: joi_1.default.string().valid("Challenge", "Hackathon").optional(),
    keyInstructions: joi_1.default.string().optional(),
    participants: joi_1.default.array().items(joi_1.default.string()).optional(),
});
// Settings validation schema
exports.settingsValidationSchema = joi_1.default.object({
    theme: joi_1.default.string().valid("light", "dark").default("light"),
    language: joi_1.default.string().default("en"),
});
// Help center validation schema
exports.helpCenterValidationSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    content: joi_1.default.string().required(),
    category: joi_1.default.string().required(),
});
// Program validation schema
exports.programValidationSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    type: joi_1.default.string().valid("Learning Institution", "Other").required(),
});
//# sourceMappingURL=validators.js.map