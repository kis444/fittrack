import mongoose, { Document, Schema } from "mongoose";

export interface IFoodDocument extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  brand?: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  servingSize?: number;
  createdAt: Date;
}

const FoodSchema = new Schema<IFoodDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true, trim: true },
    brand: { type: String, trim: true },
    calories: { type: Number, required: true, min: 0 },
    protein: { type: Number, required: true, min: 0 },
    carbs: { type: Number, required: true, min: 0 },
    fat: { type: Number, required: true, min: 0 },
    servingSize: { type: Number, default: 100 },
  },
  { timestamps: true }
);

FoodSchema.index({ userId: 1, name: "text" });

export default mongoose.models.Food || mongoose.model<IFoodDocument>("Food", FoodSchema);
