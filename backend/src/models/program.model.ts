import mongoose, { Schema, Document } from "mongoose";

export interface IProgram extends Document {
  _id: Schema.Types.ObjectId;
  name: string;
  description: string;
  type: "Learning Institution" | "Other";
  challenges: Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const ProgramSchema = new Schema<IProgram>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: {
      type: String,
      required: true,
      enum: ["Learning Institution", "Other"],
    },
    challenges: [{ type: Schema.Types.ObjectId, ref: "Challenge" }],
  },
  { timestamps: true }
);

export const Program = mongoose.model<IProgram>("Program", ProgramSchema);
