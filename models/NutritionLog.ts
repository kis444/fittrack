import mongoose, { Document, Schema } from "mongoose";

export interface IMealEntryDocument {
  foodId?: mongoose.Types.ObjectId;
  foodName: string;
  amount: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface INutritionLogDocument extends Document {
  userId: mongoose.Types.ObjectId;
  date: Date;
  mealType: "breakfast" | "lunch" | "dinner" | "snack";
  entries: IMealEntryDocument[];
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  createdAt: Date;
}

const MealEntrySchema = new Schema<IMealEntryDocument>({
  foodId: { type: Schema.Types.ObjectId, ref: "Food" },
  foodName: { type: String, required: true },
  amount: { type: Number, required: true },
  calories: { type: Number, required: true },
  protein: { type: Number, default: 0 },
  carbs: { type: Number, default: 0 },
  fat: { type: Number, default: 0 },
});

const NutritionLogSchema = new Schema<INutritionLogDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: Date, required: true },
    mealType: {
      type: String,
      enum: ["breakfast", "lunch", "dinner", "snack"],
      required: true,
    },
    entries: [MealEntrySchema],
    totalCalories: { type: Number, default: 0 },
    totalProtein: { type: Number, default: 0 },
    totalCarbs: { type: Number, default: 0 },
    totalFat: { type: Number, default: 0 },
  },
  { timestamps: true }
);

NutritionLogSchema.index({ userId: 1, date: -1 });

export default mongoose.models.NutritionLog ||
  mongoose.model<INutritionLogDocument>("NutritionLog", NutritionLogSchema);
