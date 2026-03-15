"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, Scale, TrendingDown, TrendingUp } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import Modal from "@/components/ui/Modal";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import WeightChart from "@/components/charts/WeightChart";
import CaloriesChart from "@/components/charts/CaloriesChart";
import { IWeightEntry } from "@/types";
import { formatDate } from "@/lib/utils";

export default function ProgressPage() {
  const [weights, setWeights] = useState<IWeightEntry[]>([]);
  const [analytics, setAnalytics] = useState<{ nutritionTimeline: { date: string; calories: number }[]; taskTimeline: { caloriesBurned: number; date: string }[] } | null>(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ weight: "", date: new Date().toISOString().split("T")[0], notes: "" });
  const [saving, setSaving] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const [wRes, aRes] = await Promise.all([
      fetch("/api/weight?limit=90"),
      fetch("/api/analytics?period=month"),
    ]);
    if (wRes.ok) setWeights(await wRes.json());
    if (aRes.ok) setAnalytics(await aRes.json());
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await fetch("/api/weight", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ weight: parseFloat(form.weight), date: form.date, notes: form.notes }),
    });
    setSaving(false);
    setModalOpen(false);
    setForm({ weight: "", date: new Date().toISOString().split("T")[0], notes: "" });
    fetchData();
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/weight/${id}`, { method: "DELETE" });
    fetchData();
  };

  const latestWeight = weights[weights.length - 1]?.weight;
  const firstWeight = weights[0]?.weight;
  const weightChange = latestWeight && firstWeight ? +(latestWeight - firstWeight).toFixed(1) : null;

  // Merge calories eaten and burned by date
  const caloriesData = (analytics?.nutritionTimeline || []).map((d) => {
    const dayBurned = (analytics?.taskTimeline || [])
      .filter((t) => new Date(t.date).toISOString().split("T")[0] === d.date)
      .reduce((s, t) => s + t.caloriesBurned, 0);
    return { date: d.date, calories: d.calories, burned: dayBurned };
  });

  return (
    <div>
      <PageHeader
        title="Progress"
        subtitle="Track your long-term weight and calorie trends"
        action={
          <button onClick={() => setModalOpen(true)} className="btn-primary flex items-center gap-2">
            <Plus className="w-4 h-4" /> Log Weight
          </button>
        }
      />

      {loading ? <LoadingSpinner /> : (
        <div className="space-y-6">
          {/* Summary stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="card text-center">
              <p className="text-xs font-semibold text-neutral uppercase tracking-wider mb-1">Current Weight</p>
              <p className="text-3xl font-bold text-secondary">{latestWeight ?? "—"}</p>
              <p className="text-sm text-neutral">kg</p>
            </div>
            <div className="card text-center">
              <p className="text-xs font-semibold text-neutral uppercase tracking-wider mb-1">90-Day Change</p>
              <div className="flex items-center justify-center gap-2">
                <p className={`text-3xl font-bold ${weightChange === null ? "text-neutral" : weightChange <= 0 ? "text-emerald-500" : "text-red-400"}`}>
                  {weightChange !== null ? (weightChange > 0 ? `+${weightChange}` : weightChange) : "—"}
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
              <p className="text-xs font-semibold text-neutral uppercase tracking-wider mb-1">Entries Logged</p>
              <p className="text-3xl font-bold text-secondary">{weights.length}</p>
              <p className="text-sm text-neutral">weigh-ins</p>
            </div>
          </div>

          {/* Weight chart */}
          <div className="card">
            <h2 className="font-semibold text-secondary mb-4">Weight Over Time</h2>
            {weights.length >= 2 ? (
              <WeightChart data={weights.map((w) => ({ date: w.date, weight: w.weight }))} />
            ) : (
              <div className="h-48 flex items-center justify-center text-neutral text-sm">
                Log at least 2 weight entries to see the chart
              </div>
            )}
          </div>

          {/* Calories chart */}
          {caloriesData.length > 0 && (
            <div className="card">
              <h2 className="font-semibold text-secondary mb-4">Calories Eaten vs Burned (30 days)</h2>
              <CaloriesChart data={caloriesData} />
            </div>
          )}

          {/* Weight log table */}
          {weights.length > 0 && (
            <div className="card overflow-hidden p-0">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-secondary">Weight Log</h2>
              </div>
              <div className="divide-y divide-gray-50 max-h-80 overflow-y-auto">
                {[...weights].reverse().map((entry) => (
                  <div key={entry._id} className="flex items-center justify-between px-6 py-3 hover:bg-gray-50/50 group">
                    <div>
                      <p className="text-sm font-semibold text-secondary">{entry.weight} kg</p>
                      {entry.notes && <p className="text-xs text-neutral">{entry.notes}</p>}
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
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Log Weight" size="sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">Weight (kg)</label>
            <input
              type="number"
              className="input"
              value={form.weight}
              onChange={(e) => setForm({ ...form, weight: e.target.value })}
              placeholder="e.g. 72.5"
              step="0.1"
              min={20}
              required
            />
          </div>
          <div>
            <label className="label">Date</label>
            <input type="date" className="input" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
          </div>
          <div>
            <label className="label">Notes (optional)</label>
            <input className="input" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Feeling great!" />
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={() => setModalOpen(false)} className="btn-ghost flex-1">Cancel</button>
            <button type="submit" className="btn-primary flex-1" disabled={saving}>
              {saving ? "Saving…" : "Log Weight"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
