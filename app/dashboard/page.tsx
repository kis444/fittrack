"use client";

import { useEffect, useState } from "react";
import { Scale, Flame, Zap, TrendingDown, Beef, Plus, CheckCircle2, Circle } from "lucide-react";
import StatCard from "@/components/ui/StatCard";
import WeightChart from "@/components/charts/WeightChart";
import ProgressBar from "@/components/ui/ProgressBar";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { progressPercentage, formatDate } from "@/lib/utils";
import { ITask, INutritionLog } from "@/types";

interface DashboardData {
  currentWeight: number | null;
  caloriesToday: number;
  caloriesBurnedToday: number;
  netCalories: number;
  proteinToday: number;
  weightGoal: number | null;
  startWeight: number | null;
  dailyCalorieTarget: number;
  proteinTarget: number;
  monthWeights: { date: string; weight: number }[];
  todayTasks: ITask[];
  todayNutrition: INutritionLog[];
}

const MEAL_LABELS: Record<string, string> = {
  breakfast: "Breakfast",
  lunch: "Lunch",
  dinner: "Dinner",
  snack: "Snacks",
};

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const res = await fetch("/api/dashboard");
    if (res.ok) setData(await res.json());
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const toggleTask = async (task: ITask) => {
    await fetch(`/api/tasks/${task._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !task.completed }),
    });
    fetchData();
  };

  if (loading) return <LoadingSpinner />;

  const today = formatDate(new Date());
  const calorieProgress = data ? (data.caloriesToday / data.dailyCalorieTarget) * 100 : 0;
  const proteinProgress = data ? (data.proteinToday / data.proteinTarget) * 100 : 0;
  const weightProgress =
    data?.currentWeight && data?.startWeight && data?.weightGoal
      ? progressPercentage(data.currentWeight, data.startWeight, data.weightGoal)
      : 0;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="text-sm text-neutral mb-0.5">{today}</p>
        <h1 className="text-2xl font-bold text-secondary tracking-tight">Good day! Here&apos;s your overview</h1>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard
          label="Current Weight"
          value={data?.currentWeight ?? "—"}
          unit={data?.currentWeight ? "kg" : ""}
          icon={Scale}
          iconBg="bg-blush"
          iconColor="text-primary"
        />
        <StatCard
          label="Calories Eaten"
          value={data?.caloriesToday ?? 0}
          unit="kcal"
          icon={Flame}
          iconBg="bg-orange-50"
          iconColor="text-orange-400"
        />
        <StatCard
          label="Calories Burned"
          value={data?.caloriesBurnedToday ?? 0}
          unit="kcal"
          icon={Zap}
          iconBg="bg-emerald-50"
          iconColor="text-emerald-500"
        />
        <StatCard
          label="Net Calories"
          value={data?.netCalories ?? 0}
          unit="kcal"
          icon={TrendingDown}
          iconBg="bg-sky-50"
          iconColor="text-sky-500"
        />
        <StatCard
          label="Protein Today"
          value={data?.proteinToday ?? 0}
          unit="g"
          icon={Beef}
          iconBg="bg-purple-50"
          iconColor="text-purple-500"
        />
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Weight chart */}
        <div className="col-span-2 card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-secondary">Weight This Month</h2>
            {data?.currentWeight && (
              <span className="text-sm text-neutral">{data.currentWeight} kg</span>
            )}
          </div>
          {data?.monthWeights && data.monthWeights.length > 0 ? (
            <WeightChart data={data.monthWeights} />
          ) : (
            <div className="h-48 flex items-center justify-center text-neutral text-sm">
              No weight entries this month
            </div>
          )}
        </div>

        {/* Goal progress */}
        <div className="card space-y-5">
          <h2 className="font-semibold text-secondary">Goal Progress</h2>

          <div className="p-4 rounded-xl bg-blush/50 space-y-1">
            <div className="flex justify-between text-xs text-neutral">
              <span>Start: {data?.startWeight ?? "—"} kg</span>
              <span>Goal: {data?.weightGoal ?? "—"} kg</span>
            </div>
            <div className="text-center py-1">
              <span className="text-2xl font-bold text-secondary">{data?.currentWeight ?? "—"}</span>
              <span className="text-sm text-neutral ml-1">kg now</span>
            </div>
            <ProgressBar value={weightProgress} showValue color="bg-primary" />
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-neutral font-medium">Calories</span>
                <span className="text-secondary font-semibold">{data?.caloriesToday} / {data?.dailyCalorieTarget} kcal</span>
              </div>
              <ProgressBar
                value={calorieProgress}
                color={calorieProgress > 100 ? "bg-red-400" : "bg-accent-dark"}
              />
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-neutral font-medium">Protein</span>
                <span className="text-secondary font-semibold">{data?.proteinToday}g / {data?.proteinTarget}g</span>
              </div>
              <ProgressBar value={proteinProgress} color="bg-purple-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Tasks + Meals */}
      <div className="grid grid-cols-2 gap-6">
        {/* Today's Tasks */}
        <div className="card">
          <h2 className="font-semibold text-secondary mb-4">Today&apos;s Activities</h2>
          {data?.todayTasks && data.todayTasks.length > 0 ? (
            <div className="space-y-2">
              {data.todayTasks.map((task) => (
                <div
                  key={task._id}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => toggleTask(task)}
                >
                  <button className="flex-shrink-0 text-primary">
                    {task.completed
                      ? <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      : <Circle className="w-5 h-5 text-gray-300" />
                    }
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium truncate ${task.completed ? "line-through text-neutral" : "text-secondary"}`}>
                      {task.activityName}
                    </p>
                    <p className="text-xs text-neutral">{task.startTime} · {task.duration} min</p>
                  </div>
                  <span className="text-xs font-semibold text-primary bg-blush px-2 py-0.5 rounded-full">
                    {task.caloriesBurned} kcal
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-neutral text-center py-6">No activities planned for today</p>
          )}
        </div>

        {/* Today's Meals */}
        <div className="card">
          <h2 className="font-semibold text-secondary mb-4">Today&apos;s Nutrition</h2>
          {data?.todayNutrition && data.todayNutrition.length > 0 ? (
            <div className="space-y-3">
              {data.todayNutrition.map((log) => (
                <div key={log._id} className="p-3 rounded-xl bg-gray-50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
                      {MEAL_LABELS[log.mealType] || log.mealType}
                    </span>
                    <span className="text-xs font-bold text-primary">{log.totalCalories} kcal</span>
                  </div>
                  <div className="flex gap-3 text-xs text-neutral">
                    <span>P: {log.totalProtein}g</span>
                    <span>C: {log.totalCarbs}g</span>
                    <span>F: {log.totalFat}g</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-neutral text-center py-6">No meals logged today</p>
          )}
        </div>
      </div>
    </div>
  );
}
