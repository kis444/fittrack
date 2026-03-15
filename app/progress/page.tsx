"use client";

import { useEffect, useState, useMemo } from "react";
import { Plus, Trash2, TrendingDown, TrendingUp } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import Modal from "@/components/ui/Modal";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import WeightChart from "@/components/charts/WeightChart";
import CaloriesChart from "@/components/charts/CaloriesChart";
import { IWeightEntry } from "@/types";
import { formatDate } from "@/lib/utils";

type Period = "all" | "1y" | "6m" | "3m" | "1m";

const PERIODS: { key: Period; label: string; short: string }[] = [
  { key: "all", label: "All time",     short: "All" },
  { key: "1y",  label: "Last year",    short: "1Y"  },
  { key: "6m",  label: "Last 6 months",short: "6M"  },
  { key: "3m",  label: "Last 3 months",short: "3M"  },
  { key: "1m",  label: "Last month",   short: "1M"  },
];

const CHANGE_LABELS: Record<Period, string> = {
  all: "All-time change",
  "1y": "1-year change",
  "6m": "6-month change",
  "3m": "3-month change",
  "1m": "Monthly change",
};

function filterWeights(weights: IWeightEntry[], period: Period): IWeightEntry[] {
  if (!weights.length || period === "all") return weights;
  const cutoff = new Date();
  if (period === "1y") cutoff.setFullYear(cutoff.getFullYear() - 1);
  if (period === "6m") cutoff.setMonth(cutoff.getMonth() - 6);
  if (period === "3m") cutoff.setMonth(cutoff.getMonth() - 3);
  if (period === "1m") cutoff.setMonth(cutoff.getMonth() - 1);
  cutoff.setHours(0, 0, 0, 0);
  return weights.filter((w) => new Date(w.date) >= cutoff);
}

export default function ProgressPage() {
  const [allWeights, setAllWeights] = useState<IWeightEntry[]>([]);
  const [analytics, setAnalytics]   = useState<{
    nutritionTimeline: { date: string; calories: number }[];
    taskTimeline: { caloriesBurned: number; date: string }[];
  } | null>(null);
  const [loading, setLoading]   = useState(true);
  const [period, setPeriod]     = useState<Period>("3m");
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({
    weight: "",
    date: new Date().toISOString().split("T")[0],
    notes: "",
  });
  const [saving, setSaving] = useState(false);

  const fetchData = async () => {
    const [wRes, aRes] = await Promise.all([
      fetch("/api/weight?all=true"),
      fetch("/api/analytics?period=month"),
    ]);
    if (wRes.ok) setAllWeights(await wRes.json());
    if (aRes.ok) setAnalytics(await aRes.json());
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const filteredWeights = useMemo(
    () => filterWeights(allWeights, period),
    [allWeights, period]
  );

  const latestWeight = allWeights[allWeights.length - 1]?.weight ?? null;
  const periodFirst  = filteredWeights[0]?.weight ?? null;
  const periodLast   = filteredWeights[filteredWeights.length - 1]?.weight ?? null;
  const weightChange =
    periodFirst !== null && periodLast !== null && filteredWeights.length >= 2
      ? +(periodLast - periodFirst).toFixed(1)
      : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await fetch("/api/weight", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        weight: parseFloat(form.weight),
        date: form.date,
        notes: form.notes,
      }),
    });
    setSaving(false);
    setModalOpen(false);
    setForm({ weight: "", date: new Date().toISOString().split("T")[0], notes: "" });
    fetchData();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this entry?")) return;
    await fetch(`/api/weight/${id}`, { method: "DELETE" });
    fetchData();
  };

  const caloriesData = (analytics?.nutritionTimeline || []).map((d) => {
    const burned = (analytics?.taskTimeline || [])
      .filter((t) => new Date(t.date).toISOString().split("T")[0] === d.date)
      .reduce((s, t) => s + t.caloriesBurned, 0);
    return { date: d.date, calories: d.calories, burned };
  });

  return (
    <div>
      <PageHeader
        title="Progress"
        subtitle="Track your weight and calorie trends over time"
        action={
          <button onClick={() => setModalOpen(true)} className="btn-primary flex items-center gap-2">
            <Plus className="w-4 h-4" /> Log Weight
          </button>
        }
      />

      {loading ? <LoadingSpinner /> : (
        <div className="space-y-6">

          {/* Period selector */}
          <div className="flex items-center gap-1 p-1 bg-white rounded-2xl shadow-soft w-fit">
            {PERIODS.map(({ key, label, short }) => (
              <button
                key={key}
                onClick={() => setPeriod(key)}
                title={label}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  period === key
                    ? "bg-primary text-white shadow-sm"
                    : "text-neutral hover:text-secondary hover:bg-gray-50"
                }`}
              >
                {short}
              </button>
            ))}
          </div>

          {/* Period context */}
          {filteredWeights.length > 0 && (
            <p className="text-xs text-neutral -mt-2">
              From{" "}
              <span className="font-semibold text-secondary">
                {formatDate(filteredWeights[0].date)}
              </span>{" "}
              → today &nbsp;·&nbsp; {filteredWeights.length} entries
            </p>
          )}

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="card text-center">
              <p className="text-xs font-semibold text-neutral uppercase tracking-wider mb-1">
                Current Weight
              </p>
              <p className="text-3xl font-bold text-secondary">{latestWeight ?? "—"}</p>
              <p className="text-sm text-neutral">kg</p>
            </div>

            <div className="card text-center">
              <p className="text-xs font-semibold text-neutral uppercase tracking-wider mb-1">
                {CHANGE_LABELS[period]}
              </p>
              <div className="flex items-center justify-center gap-2">
                <p className={`text-3xl font-bold ${
                  weightChange === null ? "text-neutral"
                    : weightChange <= 0 ? "text-emerald-500"
                    : "text-red-400"
                }`}>
                  {weightChange !== null
                    ? (weightChange > 0 ? `+${weightChange}` : weightChange)
                    : "—"}
                </p>
                {weightChange !== null && (
                  weightChange <= 0
                    ? <TrendingDown className="w-5 h-5 text-emerald-500" />
                    : <TrendingUp className="w-5 h-5 text-red-400" />
                )}
              </div>
              <p className="text-sm text-neutral">kg</p>
            </div>

            <div className="card text-center">
              <p className="text-xs font-semibold text-neutral uppercase tracking-wider mb-1">
                Entries in Period
              </p>
              <p className="text-3xl font-bold text-secondary">{filteredWeights.length}</p>
              <p className="text-sm text-neutral">of {allWeights.length} total</p>
            </div>
          </div>

          {/* Weight chart */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-secondary">
                Weight — {PERIODS.find((p) => p.key === period)?.label}
              </h2>
              {weightChange !== null && (
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  weightChange <= 0 ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-400"
                }`}>
                  {weightChange > 0 ? "+" : ""}{weightChange} kg
                </span>
              )}
            </div>
            {filteredWeights.length >= 2 ? (
              <WeightChart data={filteredWeights.map((w) => ({ date: w.date, weight: w.weight }))} />
            ) : (
              <div className="h-48 flex items-center justify-center text-neutral text-sm">
                {filteredWeights.length === 0
                  ? "No entries in this period — try a wider range"
                  : "Log at least 2 entries to see the chart"}
              </div>
            )}
          </div>

          {/* Calories chart */}
          {caloriesData.length > 0 && (
            <div className="card">
              <h2 className="font-semibold text-secondary mb-4">
                Calories Eaten vs Burned (last 30 days)
              </h2>
              <CaloriesChart data={caloriesData} />
            </div>
          )}

          {/* Full weight log */}
          {allWeights.length > 0 && (
            <div className="card overflow-hidden p-0">
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-semibold text-secondary">Weight Log</h2>
                <span className="text-xs text-neutral">{allWeights.length} entries</span>
              </div>
              <div className="divide-y divide-gray-50 max-h-96 overflow-y-auto">
                {[...allWeights].reverse().map((entry) => {
                  const inPeriod = filteredWeights.some((w) => w._id === entry._id);
                  return (
                    <div
                      key={entry._id}
                      className={`flex items-center justify-between px-6 py-3 group hover:bg-gray-50/50 transition-colors ${
                        !inPeriod ? "opacity-35" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          inPeriod ? "bg-primary" : "bg-gray-200"
                        }`} />
                        <div>
                          <p className="text-sm font-semibold text-secondary">{entry.weight} kg</p>
                          {entry.notes && <p className="text-xs text-neutral">{entry.notes}</p>}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="text-xs text-neutral">{formatDate(entry.date)}</p>
                        <button
                          onClick={() => handleDelete(entry._id)}
                          className="opacity-0 group-hover:opacity-100 w-7 h-7 rounded-lg hover:bg-red-50 flex items-center justify-center text-neutral hover:text-red-400 transition-all"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Log Weight Modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Log Weight" size="sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">Weight (kg)</label>
            <input
              type="number" className="input" value={form.weight}
              onChange={(e) => setForm({ ...form, weight: e.target.value })}
              placeholder="e.g. 72.5" step="0.1" min={20} required
            />
          </div>
          <div>
            <label className="label">Date</label>
            <input
              type="date" className="input" value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })} required
            />
          </div>
          <div>
            <label className="label">Notes (optional)</label>
            <input
              className="input" value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Feeling great!"
            />
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={() => setModalOpen(false)} className="btn-ghost flex-1">
              Cancel
            </button>
            <button type="submit" className="btn-primary flex-1" disabled={saving}>
              {saving ? "Saving…" : "Log Weight"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}