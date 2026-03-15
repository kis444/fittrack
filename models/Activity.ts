import mongoose, { Document, Schema } from "mongoose";

export interface IActivityDocument extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  caloriesPer10Min: number;
  category: string;
  createdAt: Date;
}

const ActivitySchema = new Schema<IActivityDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true, trim: true },
    caloriesPer10Min: { type: Number, required: true, min: 0 },
    category: {
      type: String,
      enum: ["cardio", "strength", "flexibility", "sports", "daily", "other"],
      default: "other",
    },
  },
  { timestamps: true }
);

ActivitySchema.index({ userId: 1, name: 1 });

export default mongoose.models.Activity || mongoose.model<IActivityDocument>("Activity", ActivitySchema);
