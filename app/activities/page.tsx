"use client";

import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, Dumbbell } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import Modal from "@/components/ui/Modal";
import EmptyState from "@/components/ui/EmptyState";
import Badge from "@/components/ui/Badge";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { IActivity } from "@/types";

const CATEGORIES = ["cardio", "strength", "flexibility", "sports", "daily", "other"];

const CATEGORY_COLORS: Record<string, "success" | "purple" | "warning" | "pink" | "default" | "danger"> = {
  cardio: "success",
  strength: "purple",
  flexibility: "pink",
  sports: "warning",
  daily: "default",
  other: "default",
};

const DEFAULT_ACTIVITIES: Partial<IActivity>[] = [
  { name: "Brisk Walking", caloriesPer10Min: 45, category: "cardio" },
  { name: "Running", caloriesPer10Min: 95, category: "cardio" },
  { name: "Gym Workout", caloriesPer10Min: 75, category: "strength" },
  { name: "Cycling", caloriesPer10Min: 60, category: "cardio" },
  { name: "Swimming", caloriesPer10Min: 80, category: "cardio" },
  { name: "Yoga", caloriesPer10Min: 25, category: "flexibility" },
  { name: "Cleaning", caloriesPer10Min: 25, category: "daily" },
];

const emptyForm = { name: "", caloriesPer10Min: 0, category: "cardio" };

export default function ActivitiesPage() {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<IActivity | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const fetchActivities = async () => {
    setLoading(true);
    const res = await fetch("/api/activities");
    if (res.ok) setActivities(await res.json());
    setLoading(false);
  };

  useEffect(() => { fetchActivities(); }, []);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setModalOpen(true);
  };

  const openEdit = (activity: IActivity) => {
    setEditing(activity);
    setForm({ name: activity.name, caloriesPer10Min: activity.caloriesPer10Min, category: activity.category });
    setModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    if (editing) {
      await fetch(`/api/activities/${editing._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } else {
      await fetch("/api/activities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    }

    setSaving(false);
    setModalOpen(false);
    fetchActivities();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this activity?")) return;
    await fetch(`/api/activities/${id}`, { method: "DELETE" });
    fetchActivities();
  };

  const seedDefaults = async () => {
    for (const a of DEFAULT_ACTIVITIES) {
      await fetch("/api/activities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(a),
      });
    }
    fetchActivities();
  };

  return (
    <div>
      <PageHeader
        title="Activities"
        subtitle="Manage your personal activity library"
        action={
          <div className="flex gap-2">
            {activities.length === 0 && (
              <button onClick={seedDefaults} className="btn-ghost text-sm">
                Add defaults
              </button>
            )}
            <button onClick={openCreate} className="btn-primary flex items-center gap-2">
              <Plus className="w-4 h-4" />
              New Activity
            </button>
          </div>
        }
      />

      {loading ? (
        <LoadingSpinner />
      ) : activities.length === 0 ? (
        <EmptyState
          icon={Dumbbell}
          title="No activities yet"
          description="Create your activity library to quickly log workouts in your planner."
          action={
            <button onClick={openCreate} className="btn-primary flex items-center gap-2">
              <Plus className="w-4 h-4" /> New Activity
            </button>
          }
        />
      ) : (
        <div className="card overflow-hidden p-0">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-semibold text-neutral uppercase tracking-wider px-6 py-4">Activity</th>
                <th className="text-left text-xs font-semibold text-neutral uppercase tracking-wider px-6 py-4">Category</th>
                <th className="text-right text-xs font-semibold text-neutral uppercase tracking-wider px-6 py-4">kcal / 10 min</th>
                <th className="text-right text-xs font-semibold text-neutral uppercase tracking-wider px-6 py-4">kcal / 30 min</th>
                <th className="text-right text-xs font-semibold text-neutral uppercase tracking-wider px-6 py-4">kcal / 60 min</th>
                <th className="px-6 py-4" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {activities.map((act) => (
                <tr key={act._id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-blush flex items-center justify-center">
                        <Dumbbell className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-secondary">{act.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={CATEGORY_COLORS[act.category] || "default"}>
                      {act.category}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-bold text-secondary">
                    {act.caloriesPer10Min}
                  </td>
                  <td className="px-6 py-4 text-right text-sm text-neutral">
                    {act.caloriesPer10Min * 3}
                  </td>
                  <td className="px-6 py-4 text-right text-sm text-neutral">
                    {act.caloriesPer10Min * 6}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => openEdit(act)}
                        className="w-8 h-8 rounded-lg hover:bg-blush flex items-center justify-center text-neutral hover:text-primary transition-colors"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(act._id)}
                        className="w-8 h-8 rounded-lg hover:bg-red-50 flex items-center justify-center text-neutral hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editing ? "Edit Activity" : "New Activity"}
        size="sm"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">Activity Name</label>
            <input
              className="input"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Brisk Walking"
              required
            />
          </div>
          <div>
            <label className="label">Category</label>
            <select
              className="input"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">Calories per 10 minutes</label>
            <input
              type="number"
              className="input"
              value={form.caloriesPer10Min}
              onChange={(e) => setForm({ ...form, caloriesPer10Min: parseInt(e.target.value) || 0 })}
              min={0}
              required
            />
            <p className="text-xs text-neutral mt-1.5">
              = {form.caloriesPer10Min * 6} kcal per hour
            </p>
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={() => setModalOpen(false)} className="btn-ghost flex-1">Cancel</button>
            <button type="submit" className="btn-primary flex-1" disabled={saving}>
              {saving ? "Saving…" : editing ? "Save Changes" : "Add Activity"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
