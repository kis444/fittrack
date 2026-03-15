import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import Task from "@/models/Task";
import NutritionLog from "@/models/NutritionLog";
import WeightEntry from "@/models/WeightEntry";
import User from "@/models/User";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await dbConnect();
  const userId = (session.user as { id: string }).id;

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const todayEnd = new Date();
  todayEnd.setHours(23, 59, 59, 999);

  const [user, todayTasks, todayNutrition, latestWeight, monthWeights] = await Promise.all([
    User.findById(userId),
    Task.find({ userId, date: { $gte: todayStart, $lte: todayEnd } }),
    NutritionLog.find({ userId, date: { $gte: todayStart, $lte: todayEnd } }),
    WeightEntry.findOne({ userId }).sort({ date: -1 }),
    WeightEntry.find({
      userId,
      date: {
        $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        $lte: todayEnd,
      },
    }).sort({ date: 1 }),
  ]);

  const caloriesBurned = todayTasks
    .filter((t) => t.completed)
    .reduce((sum, t) => sum + t.caloriesBurned, 0);

  const caloriesToday = todayNutrition.reduce((sum, n) => sum + n.totalCalories, 0);
  const proteinToday = todayNutrition.reduce((sum, n) => sum + n.totalProtein, 0);

  return NextResponse.json({
    currentWeight: latestWeight?.weight ?? null,
    caloriesToday,
    caloriesBurnedToday: caloriesBurned,
    netCalories: caloriesToday - caloriesBurned,
    proteinToday,
    weightGoal: user?.weightGoal ?? null,
    startWeight: user?.startWeight ?? null,
    dailyCalorieTarget: user?.dailyCalorieTarget ?? 2000,
    proteinTarget: user?.proteinTarget ?? 150,
    monthWeights: monthWeights.map((w) => ({
      date: w.date,
      weight: w.weight,
    })),
    todayTasks,
    todayNutrition,
  });
}
