export interface IUser {
  _id: string;
  name: string;
  email: string;
  password?: string;
  weightGoal?: number;
  startWeight?: number;
  dailyCalorieTarget?: number;
  proteinTarget?: number;
  createdAt: string;
  updatedAt: string;
}

export interface IActivity {
  _id: string;
  userId: string;
  name: string;
  caloriesPer10Min: number;
  category: "cardio" | "strength" | "flexibility" | "sports" | "daily" | "other";
  createdAt: string;
}

export interface ITask {
  _id: string;
  userId: string;
  activityId?: string;
  activityName: string;
  date: string;
  startTime: string;
  duration: number; // minutes
  caloriesBurned: number;
  completed: boolean;
  notes?: string;
  createdAt: string;
}

export interface IFood {
  _id: string;
  userId: string;
  name: string;
  brand?: string;
  calories: number; // per 100g
  protein: number;
  carbs: number;
  fat: number;
  servingSize?: number; // grams
  createdAt: string;
}

export interface IMealEntry {
  foodId: string;
  foodName: string;
  amount: number; // grams
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface IRecipe {
  _id: string;
  userId: string;
  name: string;
  description?: string;
  ingredients: {
    foodId?: string;
    name: string;
    amount: number;
    unit: string;
  }[];
  instructions: string;
  servings: number;
  caloriesPerServing: number;
  protein: number;
  carbs: number;
  fat: number;
  tags?: string[];
  createdAt: string;
}

export interface IWeightEntry {
  _id: string;
  userId: string;
  weight: number;
  date: string;
  notes?: string;
  createdAt: string;
}

export interface INutritionLog {
  _id: string;
  userId: string;
  date: string;
  mealType: "breakfast" | "lunch" | "dinner" | "snack";
  entries: IMealEntry[];
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  createdAt: string;
}

export interface DashboardStats {
  currentWeight: number | null;
  caloriesToday: number;
  caloriesBurnedToday: number;
  netCalories: number;
  proteinToday: number;
  weightGoal: number | null;
  startWeight: number | null;
  dailyCalorieTarget: number;
}
