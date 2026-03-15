import mongoose, { Document, Schema } from "mongoose";

export interface IWeightEntryDocument extends Document {
  userId: mongoose.Types.ObjectId;
  weight: number;
  date: Date;
  notes?: string;
  createdAt: Date;
}

const WeightEntrySchema = new Schema<IWeightEntryDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    weight: { type: Number, required: true, min: 0 },
    date: { type: Date, required: true },
    notes: { type: String, trim: true },
  },
  { timestamps: true }
);

WeightEntrySchema.index({ userId: 1, date: -1 });

export default mongoose.models.WeightEntry || mongoose.model<IWeightEntryDocument>("WeightEntry", WeightEntrySchema);
