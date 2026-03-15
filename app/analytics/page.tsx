"use client";

import { useEffect, useState } from "react";
import { Flame, Beef, Zap, CheckSquare, TrendingDown, TrendingUp } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import StatCard from "@/components/ui/StatCard";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import CaloriesChart from "@/components/charts/CaloriesChart";
import WeightChart from "@/components/charts/WeightChart";
import ProgressBar from "@/components/ui/ProgressBar";

interface AnalyticsData {
  avgCalories: number;
  avgProtein: number;
  avgCaloriesBurned: number;
  completionRate: number;
  weightChange: number | null;
  totalTasks: number;
  completedTasks: number;
  nutritionTimeline: { date: string; calories: number; protein: number }[];
  weightTimeline: { date: string; weight: number }[];
}

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [period, setPeriod] = useState<"week" | "month">("week");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/analytics?period=${period}`)
      .then((r) => r.json())
      .then((d) => { setData(d); setLoading(false); });
  }, [period]);

  const periodLabel = period === "week" ? "Last 7 days" : "Last 30 days";

  return (
    <div>
      <PageHeader
        title="Analytics"
        subtitle="Insights into your health and fitness trends"
        action={
          <div className="flex gap-1 p-1 bg-gray-100 rounded-xl">
            {(["week", "month"] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  period === p ? "bg-white text-secondary shadow-sm" : "text-neutral hover:text-secondary"
                }`}
              >
                {p === "week" ? "Week" : "Month"}
              </button>
            ))}
          </div>
        }
      />

      {loading ? <LoadingSpinner /> : !data ? null : (
        <div className="space-y-6">
          <p className="text-sm text-neutral -mt-4">{periodLabel}</p>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4">
            <StatCard
              label="Avg Calories Eaten"
              value={data.avgCalories}
              unit="kcal/day"
              icon={Flame}
              iconBg="bg-orange-50"
              iconColor="text-orange-400"
            />
            <StatCard
              label="Avg Calories Burned"
              value={data.avgCaloriesBurned}
              unit="kcal/day"
              icon={Zap}
              iconBg="bg-emerald-50"
              iconColor="text-emerald-500"
            />
            <StatCard
              label="Avg Protein"
              value={data.avgProtein}
              unit="g/day"
              icon={Beef}
              iconBg="bg-purple-50"
              iconColor="text-purple-500"
            />
            <StatCard
              label="Task Completion"
              value={data.completionRate}
              unit="%"
              icon={CheckSquare}
              iconBg="bg-blush"
              iconColor="text-primary"
            />
          </div>

          {/* Weight change card */}
          {data.weightChange !== null && (
            <div className="card flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${data.weightChange <= 0 ? "bg-emerald-50" : "bg-red-50"}`}>
                {data.weightChange <= 0
                  ? <TrendingDown className="w-6 h-6 text-emerald-500" />
                  : <TrendingUp className="w-6 h-6 text-red-400" />
                }
              </div>
              <div>
                <p className="text-xs font-semibold text-neutral uppercase tracking-wider">Weight Change</p>
                <p className={`text-2xl font-bold ${data.weightChange <= 0 ? "text-emerald-500" : "text-red-400"}`}>
                  {data.weightChange > 0 ? "+" : ""}{data.weightChange} kg
                </p>
                <p className="text-xs text-neutral">{periodLabel}</p>
              </div>
              <div className="ml-8 flex-1">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-neutral">Tasks completed</span>
                  <span className="text-secondary font-semibold">{data.completedTasks} / {data.totalTasks}</span>
                </div>
                <ProgressBar value={data.completionRate} color="bg-primary" />
              </div>
            </div>
          )}

          {/* Charts */}
          <div className="grid grid-cols-2 gap-6">
            <div className="card">
              <h2 className="font-semibold text-secondary mb-4">Calorie Trend</h2>
              {data.nutritionTimeline.length > 0 ? (
                <CaloriesChart data={data.nutritionTimeline.map((d) => ({ date: d.date, calories: d.calories }))} />
              ) : (
                <div className="h-48 flex items-center justify-center text-sm text-neutral">No nutrition data yet</div>
              )}
            </div>

            <div className="card">
              <h2 className="font-semibold text-secondary mb-4">Weight Trend</h2>
              {data.weightTimeline.length >= 2 ? (
                <WeightChart data={data.weightTimeline} />
              ) : (
                <div className="h-48 flex items-center justify-center text-sm text-neutral">Not enough weight data yet</div>
              )}
            </div>
          </div>

          {/* Nutrition breakdown */}
          {data.nutritionTimeline.length > 0 && (
            <div className="card">
              <h2 className="font-semibold text-secondary mb-4">Daily Nutrition Log</h2>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {[...data.nutritionTimeline].reverse().map((d) => (
                  <div key={d.date} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <p className="text-sm font-medium text-secondary">
                      {new Date(d.date).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
                    </p>
                    <div className="flex gap-4 text-sm">
                      <span className="text-primary font-semibold">{d.calories} kcal</span>
                      <span className="text-neutral">{d.protein}g protein</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
