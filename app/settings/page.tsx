"use client";

import { useEffect, useState } from "react";
import { User, Lock, Target, Save } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

interface SettingsForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  weightGoal: string;
  startWeight: string;
  dailyCalorieTarget: string;
  proteinTarget: string;
}

export default function SettingsPage() {
  const [form, setForm] = useState<SettingsForm>({
    name: "", email: "", password: "", confirmPassword: "",
    weightGoal: "", startWeight: "", dailyCalorieTarget: "2000", proteinTarget: "150",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    fetch("/api/settings").then((r) => r.json()).then((data) => {
      setForm((f) => ({
        ...f,
        name: data.name || "",
        email: data.email || "",
        weightGoal: data.weightGoal?.toString() || "",
        startWeight: data.startWeight?.toString() || "",
        dailyCalorieTarget: data.dailyCalorieTarget?.toString() || "2000",
        proteinTarget: data.proteinTarget?.toString() || "150",
      }));
      setLoading(false);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (form.password && form.password !== form.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match." });
      return;
    }

    setSaving(true);
    const payload: Record<string, unknown> = {
      name: form.name,
      weightGoal: form.weightGoal ? parseFloat(form.weightGoal) : undefined,
      startWeight: form.startWeight ? parseFloat(form.startWeight) : undefined,
      dailyCalorieTarget: parseInt(form.dailyCalorieTarget),
      proteinTarget: parseInt(form.proteinTarget),
    };
    if (form.password) payload.password = form.password;

    const res = await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setSaving(false);
    if (res.ok) {
      setMessage({ type: "success", text: "Settings saved successfully." });
      setForm((f) => ({ ...f, password: "", confirmPassword: "" }));
    } else {
      setMessage({ type: "error", text: "Failed to save settings." });
    }
  };

  const field = (key: keyof SettingsForm, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  if (loading) return <LoadingSpinner />;

  return (
    <div className="max-w-2xl">
      <PageHeader title="Settings" subtitle="Manage your profile and health targets" />

      {message && (
        <div className={`mb-6 px-4 py-3 rounded-xl text-sm font-medium ${
          message.type === "success" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-red-50 text-red-500 border border-red-100"
        }`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile */}
        <div className="card">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 rounded-xl bg-blush flex items-center justify-center">
              <User className="w-4 h-4 text-primary" />
            </div>
            <h2 className="font-semibold text-secondary">Profile</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="label">Full Name</label>
              <input className="input" value={form.name} onChange={(e) => field("name", e.target.value)} required />
            </div>
            <div className="col-span-2">
              <label className="label">Email</label>
              <input className="input bg-gray-50 cursor-not-allowed" value={form.email} readOnly />
              <p className="text-xs text-neutral mt-1">Email cannot be changed</p>
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="card">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 rounded-xl bg-blush flex items-center justify-center">
              <Lock className="w-4 h-4 text-primary" />
            </div>
            <h2 className="font-semibold text-secondary">Change Password</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label">New Password</label>
              <input type="password" className="input" value={form.password} onChange={(e) => field("password", e.target.value)} placeholder="Leave blank to keep current" minLength={6} />
            </div>
            <div>
              <label className="label">Confirm Password</label>
              <input type="password" className="input" value={form.confirmPassword} onChange={(e) => field("confirmPassword", e.target.value)} placeholder="Repeat new password" />
            </div>
          </div>
        </div>

        {/* Health Goals */}
        <div className="card">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 rounded-xl bg-blush flex items-center justify-center">
              <Target className="w-4 h-4 text-primary" />
            </div>
            <h2 className="font-semibold text-secondary">Health Goals</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label">Starting Weight (kg)</label>
              <input type="number" step="0.1" className="input" value={form.startWeight} onChange={(e) => field("startWeight", e.target.value)} placeholder="e.g. 85.0" />
            </div>
            <div>
              <label className="label">Goal Weight (kg)</label>
              <input type="number" step="0.1" className="input" value={form.weightGoal} onChange={(e) => field("weightGoal", e.target.value)} placeholder="e.g. 70.0" />
            </div>
            <div>
              <label className="label">Daily Calorie Target (kcal)</label>
              <input type="number" className="input" value={form.dailyCalorieTarget} onChange={(e) => field("dailyCalorieTarget", e.target.value)} min={500} required />
            </div>
            <div>
              <label className="label">Daily Protein Target (g)</label>
              <input type="number" className="input" value={form.proteinTarget} onChange={(e) => field("proteinTarget", e.target.value)} min={10} required />
            </div>
          </div>
        </div>

        <button type="submit" className="btn-primary flex items-center gap-2 px-8" disabled={saving}>
          <Save className="w-4 h-4" />
          {saving ? "Saving…" : "Save Settings"}
        </button>
      </form>
    </div>
  );
}
