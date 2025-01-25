import mongoose, { Schema, Document } from "mongoose";

export interface IHelpCenter extends Document {
  _id: Schema.Types.ObjectId;
  title: string;
  content: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const HelpCenterSchema = new Schema<IHelpCenter>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

export const HelpCenter = mongoose.model<IHelpCenter>(
  "HelpCenter",
  HelpCenterSchema
);
