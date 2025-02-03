import mongoose, { Schema, Document } from "mongoose";

export interface IChallenge extends Document {
  _id: Schema.Types.ObjectId;
  title: string;
  deadline: Date;
  duration: string;
  moneyPrize: number;
  contactEmail: string;
  description: string;
  projectBrief: string;
  projectDescriptionTasks: string;
  skills: string[];
  seniority: "Junior" | "Intermediate" | "Senior";
  timeline: number;
  isOpen: boolean;
  status: "open" | "completed";
  type: "Challenge" | "Hackathon";
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
    description: { type: String },
    projectBrief: { type: String, required: true, maxlength: 50 },
    projectDescriptionTasks: { type: String, required: true, maxlength: 500 },
    skills: [{ type: String }],
    seniority: {
      type: String,
      required: true,
      enum: ["Junior", "Intermediate", "Senior"],
    },
    timeline: { type: Number },
    isOpen: { type: Boolean, default: true },
    status: { type: String, enum: ["open", "completed"], default: "open" },
    type: { type: String, required: true, enum: ["Challenge", "Hackathon"] },
  },
  { timestamps: true }
);

export const Challenge = mongoose.model<IChallenge>(
  "Challenge",
  ChallengeSchema
);
