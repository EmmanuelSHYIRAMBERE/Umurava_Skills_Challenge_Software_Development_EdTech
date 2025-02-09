import mongoose, { Schema, Document } from "mongoose";

// Interface for subtasks
interface ISubtask {
  title: string;
  description?: string;
  url?: string;
  note?: string;
}

// Interface for tasks
interface ITask {
  title: string;
  description?: string;
  subtasks?: ISubtask[];
  url?: string;
  note?: string;
}

// Main challenge interface
export interface IChallenge extends Document {
  _id: Schema.Types.ObjectId;
  title: string;
  deadline: Date;
  duration: string;
  moneyPrize: number;
  contactEmail: string;
  projectDescription: string;
  projectBrief: string;
  projectDescriptionTasks: string;
  tasks: ITask[];
  skillsNeeded: string[];
  seniority: "Junior" | "Intermediate" | "Senior";
  isOpen: boolean;
  status: "open" | "completed";
  type: "Challenge" | "Hackathon";
  keyInstructions: string;
  participants: Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

// Subtask Schema
const SubtaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String },
  note: { type: String },
});

// Task Schema
const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  subtasks: [SubtaskSchema],
  url: { type: String },
  note: { type: String },
});

// Main Challenge Schema
const ChallengeSchema = new Schema<IChallenge>(
  {
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
    participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export const Challenge = mongoose.model<IChallenge>(
  "Challenge",
  ChallengeSchema
);
