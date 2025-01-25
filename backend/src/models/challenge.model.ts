import mongoose, { Schema, Document } from "mongoose";

export interface IChallenge extends Document {
  _id: Schema.Types.ObjectId;
  title: string;
  description: string;
  skills: string[];
  seniority: "Junior" | "Intermediate" | "Senior";
  timeline: number; // in days
  moneyPrize: number;
  isOpen: boolean;
  status: "open" | "completed";
  type: "Challenge" | "Hackathon";
  createdAt: Date;
  updatedAt: Date;
}

const ChallengeSchema = new Schema<IChallenge>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    skills: [{ type: String }],
    seniority: {
      type: String,
      required: true,
      enum: ["Junior", "Intermediate", "Senior"],
    },
    timeline: { type: Number, required: true },
    moneyPrize: { type: Number, required: true },
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
