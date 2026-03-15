import mongoose, { Document, Schema } from "mongoose";

export interface IRecipeDocument extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  description?: string;
  ingredients: {
    name: string;
    amount: number;
    unit: string;
    foodId?: mongoose.Types.ObjectId;
  }[];
  instructions: string;
  servings: number;
  caloriesPerServing: number;
  protein: number;
  carbs: number;
  fat: number;
  tags?: string[];
  createdAt: Date;
}

const IngredientSchema = new Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  unit: { type: String, required: true },
  foodId: { type: Schema.Types.ObjectId, ref: "Food" },
});

const RecipeSchema = new Schema<IRecipeDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    ingredients: [IngredientSchema],
    instructions: { type: String, required: true },
    servings: { type: Number, required: true, min: 1 },
    caloriesPerServing: { type: Number, required: true, min: 0 },
    protein: { type: Number, default: 0 },
    carbs: { type: Number, default: 0 },
    fat: { type: Number, default: 0 },
    tags: [{ type: String, trim: true }],
  },
  { timestamps: true }
);

RecipeSchema.index({ userId: 1, name: "text" });

export default mongoose.models.Recipe || mongoose.model<IRecipeDocument>("Recipe", RecipeSchema);
