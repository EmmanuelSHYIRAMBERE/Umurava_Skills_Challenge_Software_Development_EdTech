import mongoose, { Schema, Document } from "mongoose";

export interface ISettings extends Document {
  _id: Schema.Types.ObjectId;
  theme: "light" | "dark";
  language: string;
  userId: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const SettingsSchema = new Schema<ISettings>(
  {
    theme: {
      type: String,
      required: true,
      default: "light",
      enum: ["light", "dark"],
    },
    language: { type: String, required: true, default: "en" },
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  },
  { timestamps: true }
);

export const Settings = mongoose.model<ISettings>("Settings", SettingsSchema);
