"use client";

import { useEffect, useState } from "react";
import { Plus, ChevronLeft, ChevronRight, CheckCircle2, Circle, Trash2 } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import Modal from "@/components/ui/Modal";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import EmptyState from "@/components/ui/EmptyState";
import { ITask, IActivity } from "@/types";
import { getWeekDates } from "@/lib/utils";
import { CalendarDays } from "lucide-react";

const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function PlannerPage() {
  const [weekStart, setWeekStart] = useState(() => {
    const dates = getWeekDates(new Date());
    return dates[0];
  });
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [form, setForm] = useState({
    activityName: "",
    activityId: "",
    date: "",
    startTime: "08:00",
    duration: 30,
    caloriesBurned: 0,
    notes: "",
  });
  const [saving, setSaving] = useState(false);

  const weekDates = getWeekDates(weekStart);

  const fetchData = async () => {
    setLoading(true);
    const from = weekDates[0].toISOString().split("T")[0];
    const to = weekDates[6].toISOString().split("T")[0];
    const [tRes, aRes] = await Promise.all([
      fetch(`/api/tasks?dateFrom=${from}&dateTo=${to}`),
      fetch("/api/activities"),
    ]);
    if (tRes.ok) setTasks(await tRes.json());
    if (aRes.ok) setActivities(await aRes.json());
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, [weekStart]);

  const openModal = (date: Date) => {
    setSelectedDate(date);
    setForm({ ...form, date: date.toISOString().split("T")[0] });
    setModalOpen(true);
  };

  const handleActivityChange = (id: string) => {
    const act = activities.find((a) => a._id === id);
    setForm({
      ...form,
      activityId: id,
      activityName: act?.name || "",
      caloriesBurned: act ? Math.round((act.caloriesPer10Min * form.duration) / 10) : 0,
    });
  };

  const handleDurationChange = (dur: number) => {
    const act = activities.find((a) => a._id === form.activityId);
    setForm({
      ...form,
      duration: dur,
      caloriesBurned: act ? Math.round((act.caloriesPer10Min * dur) / 10) : form.caloriesBurned,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSaving(false);
    setModalOpen(false);
    fetchData();
  };

  const toggleTask = async (task: ITask) => {
    await fetch(`/api/tasks/${task._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !task.completed }),
    });
    fetchData();
  };

  const deleteTask = async (id: string) => {
    await fetch(`/api/tasks/${id}`, { method: "DELETE" });
    fetchData();
  };

  const prevWeek = () => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() - 7);
    setWeekStart(d);
  };

  const nextWeek = () => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + 7);
    setWeekStart(d);
  };

  const getTasksForDate = (date: Date) =>
    tasks.filter((t) => new Date(t.date).toDateString() === date.toDateString());

  const isToday = (date: Date) => date.toDateString() === new Date().toDateString();

  return (
    <div>
      <PageHeader
        title="Weekly Planner"
        subtitle="Plan and track your workouts and activities"
      />

      {/* Week navigation */}
      <div className="flex items-center gap-4 mb-6">
        <button onClick={prevWeek} className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50">
          <ChevronLeft className="w-4 h-4 text-neutral" />
        </button>
        <span className="text-sm font-semibold text-secondary">
          {weekDates[0].toLocaleDateString("en-US", { month: "short", day: "numeric" })} –{" "}
          {weekDates[6].toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
        </span>
        <button onClick={nextWeek} className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50">
          <ChevronRight className="w-4 h-4 text-neutral" />
        </button>
      </div>

      {loading ? <LoadingSpinner /> : (
        <div className="grid grid-cols-7 gap-3">
          {weekDates.map((date, i) => {
            const dayTasks = getTasksForDate(date);
            return (
              <div key={i} className={`rounded-2xl border ${isToday(date) ? "border-primary/30 bg-blush/30" : "border-gray-100 bg-white"} p-3 min-h-48`}>
                <div className="text-center mb-3">
                  <p className="text-xs font-semibold text-neutral uppercase tracking-wider">{DAY_LABELS[i]}</p>
                  <p className={`text-lg font-bold mt-0.5 ${isToday(date) ? "text-primary" : "text-secondary"}`}>
                    {date.getDate()}
                  </p>
                </div>

                <div className="space-y-1.5">
                  {dayTasks.map((task) => (
                    <div
                      key={task._id}
                      className="group p-2 rounded-xl bg-white shadow-soft text-xs hover:shadow-card transition-shadow"
                    >
                      <div className="flex items-start justify-between gap-1">
                        <button onClick={() => toggleTask(task)} className="flex-shrink-0 mt-0.5">
                          {task.completed
                            ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                            : <Circle className="w-3.5 h-3.5 text-gray-300" />
                          }
                        </button>
                        <div className="flex-1 min-w-0">
                          <p className={`font-medium truncate leading-tight ${task.completed ? "line-through text-neutral" : "text-secondary"}`}>
                            {task.activityName}
                          </p>
                          <p className="text-neutral mt-0.5">{task.startTime} · {task.duration}m</p>
                          <p className="text-primary font-semibold mt-0.5">{task.caloriesBurned} kcal</p>
                        </div>
                        <button
                          onClick={() => deleteTask(task._id)}
                          className="opacity-0 group-hover:opacity-100 flex-shrink-0 text-gray-300 hover:text-red-400 transition-all"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => openModal(date)}
                  className="w-full mt-2 text-xs text-neutral hover:text-primary flex items-center justify-center gap-1 py-1.5 rounded-lg hover:bg-white transition-colors"
                >
                  <Plus className="w-3 h-3" />
                  Add
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Add Task Modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={`Add Activity — ${selectedDate?.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })}`}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">Activity</label>
            <select
              className="input"
              value={form.activityId}
              onChange={(e) => handleActivityChange(e.target.value)}
            >
              <option value="">Select activity…</option>
              {activities.map((a) => (
                <option key={a._id} value={a._id}>{a.name}</option>
              ))}
              <option value="custom">Custom…</option>
            </select>
          </div>

          {(form.activityId === "custom" || !form.activityId) && (
            <div>
              <label className="label">Activity Name</label>
              <input
                className="input"
                value={form.activityName}
                onChange={(e) => setForm({ ...form, activityName: e.target.value })}
                placeholder="e.g. Morning run"
                required
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="label">Start Time</label>
              <input
                type="time"
                className="input"
                value={form.startTime}
                onChange={(e) => setForm({ ...form, startTime: e.target.value })}
              />
            </div>
            <div>
              <label className="label">Duration (min)</label>
              <input
                type="number"
                className="input"
                value={form.duration}
                onChange={(e) => handleDurationChange(parseInt(e.target.value) || 0)}
                min={1}
              />
            </div>
          </div>

          <div>
            <label className="label">Calories Burned</label>
            <input
              type="number"
              className="input"
              value={form.caloriesBurned}
              onChange={(e) => setForm({ ...form, caloriesBurned: parseInt(e.target.value) || 0 })}
              min={0}
            />
          </div>

          <div>
            <label className="label">Notes (optional)</label>
            <input
              className="input"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Any notes…"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={() => setModalOpen(false)} className="btn-ghost flex-1">Cancel</button>
            <button type="submit" className="btn-primary flex-1" disabled={saving}>
              {saving ? "Saving…" : "Add Activity"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
