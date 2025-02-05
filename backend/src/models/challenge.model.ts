import mongoose, { Schema, Document } from "mongoose";

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
