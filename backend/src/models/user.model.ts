import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  phone: string;
  password: string;
  verified: boolean;
  role: "user" | "admin";
  otp: string | null;
  otpexpire: Date | null;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    verified: { type: Boolean, required: true, default: false },
    role: {
      type: String,
      required: true,
      default: "user",
      enum: ["user", "admin"],
    },
    otp: { type: String, required: false },
    otpexpire: { type: Date, required: false },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", UserSchema);
