import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import Task from "@/models/Task";
import NutritionLog from "@/models/NutritionLog";
import WeightEntry from "@/models/WeightEntry";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const period = searchParams.get("period") || "week"; // week | month

  await dbConnect();
  const userId = (session.user as { id: string }).id;

  const now = new Date();
  const start = new Date();
  if (period === "week") {
    start.setDate(now.getDate() - 7);
  } else {
    start.setDate(now.getDate() - 30);
  }

  const [tasks, nutritionLogs, weightEntries] = await Promise.all([
    Task.find({ userId, date: { $gte: start } }).sort({ date: 1 }),
    NutritionLog.find({ userId, date: { $gte: start } }).sort({ date: 1 }),
    WeightEntry.find({ userId, date: { $gte: start } }).sort({ date: 1 }),
  ]);

  // Group nutrition by date
  const nutritionByDate: Record<string, { calories: number; protein: number; carbs: number; fat: number }> = {};
  for (const log of nutritionLogs) {
    const key = new Date(log.date).toISOString().split("T")[0];
    if (!nutritionByDate[key]) nutritionByDate[key] = { calories: 0, protein: 0, carbs: 0, fat: 0 };
    nutritionByDate[key].calories += log.totalCalories;
    nutritionByDate[key].protein += log.totalProtein;
    nutritionByDate[key].carbs += log.totalCarbs;
    nutritionByDate[key].fat += log.totalFat;
  }

  const days = Object.keys(nutritionByDate).length || 1;
  const avgCalories = Object.values(nutritionByDate).reduce((s, d) => s + d.calories, 0) / days;
  const avgProtein = Object.values(nutritionByDate).reduce((s, d) => s + d.protein, 0) / days;

  // Task completion rate
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const avgCaloriesBurned = totalTasks > 0
    ? tasks.filter((t) => t.completed).reduce((s, t) => s + t.caloriesBurned, 0) / days
    : 0;

  // Weight change
  const firstWeight = weightEntries[0]?.weight ?? null;
  const lastWeight = weightEntries[weightEntries.length - 1]?.weight ?? null;
  const weightChange = firstWeight && lastWeight ? +(lastWeight - firstWeight).toFixed(1) : null;

  return NextResponse.json({
    avgCalories: Math.round(avgCalories),
    avgProtein: Math.round(avgProtein),
    avgCaloriesBurned: Math.round(avgCaloriesBurned),
    completionRate,
    weightChange,
    totalTasks,
    completedTasks,
    nutritionTimeline: Object.entries(nutritionByDate).map(([date, data]) => ({ date, ...data })),
    weightTimeline: weightEntries.map((w) => ({ date: w.date, weight: w.weight })),
    taskTimeline: tasks,
  });
}
