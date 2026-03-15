import mongoose, { Document, Schema } from "mongoose";

export interface ITaskDocument extends Document {
  userId: mongoose.Types.ObjectId;
  activityId?: mongoose.Types.ObjectId;
  activityName: string;
  date: Date;
  startTime: string;
  duration: number;
  caloriesBurned: number;
  completed: boolean;
  notes?: string;
  createdAt: Date;
}

const TaskSchema = new Schema<ITaskDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    activityId: { type: Schema.Types.ObjectId, ref: "Activity" },
    activityName: { type: String, required: true, trim: true },
    date: { type: Date, required: true },
    startTime: { type: String, default: "08:00" },
    duration: { type: Number, required: true, min: 1 }, // minutes
    caloriesBurned: { type: Number, default: 0 },
    completed: { type: Boolean, default: false },
    notes: { type: String, trim: true },
  },
  { timestamps: true }
);

TaskSchema.index({ userId: 1, date: 1 });

export default mongoose.models.Task || mongoose.model<ITaskDocument>("Task", TaskSchema);
