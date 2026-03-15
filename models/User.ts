import mongoose, { Document, Schema } from "mongoose";

export interface IUserDocument extends Document {
  name: string;
  email: string;
  password: string;
  weightGoal?: number;
  startWeight?: number;
  dailyCalorieTarget: number;
  proteinTarget: number;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUserDocument>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, select: false },
    weightGoal: { type: Number },
    startWeight: { type: Number },
    dailyCalorieTarget: { type: Number, default: 2000 },
    proteinTarget: { type: Number, default: 150 },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model<IUserDocument>("User", UserSchema);
