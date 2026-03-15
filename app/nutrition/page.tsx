"use client";

import { useEffect, useState } from "react";
import { Plus, Search, Pencil, Trash2, Salad } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import Modal from "@/components/ui/Modal";
import EmptyState from "@/components/ui/EmptyState";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { IFood } from "@/types";

const emptyForm = { name: "", brand: "", calories: 0, protein: 0, carbs: 0, fat: 0, servingSize: 100 };

export default function NutritionPage() {
  const [foods, setFoods] = useState<IFood[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<IFood | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const fetchFoods = async () => {
    setLoading(true);
    const q = search ? `?search=${encodeURIComponent(search)}` : "";
    const res = await fetch(`/api/foods${q}`);
    if (res.ok) setFoods(await res.json());
    setLoading(false);
  };

  useEffect(() => { fetchFoods(); }, [search]);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setModalOpen(true);
  };

  const openEdit = (food: IFood) => {
    setEditing(food);
    setForm({ name: food.name, brand: food.brand || "", calories: food.calories, protein: food.protein, carbs: food.carbs, fat: food.fat, servingSize: food.servingSize || 100 });
    setModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    if (editing) {
      await fetch(`/api/foods/${editing._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } else {
      await fetch("/api/foods", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    }
    setSaving(false);
    setModalOpen(false);
    fetchFoods();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this food?")) return;
    await fetch(`/api/foods/${id}`, { method: "DELETE" });
    fetchFoods();
  };

  const fieldChange = (field: string, value: string | number) =>
    setForm((f) => ({ ...f, [field]: value }));

  return (
    <div>
      <PageHeader
        title="Food Database"
        subtitle="Your personal nutrition library — per 100g values"
        action={
          <button onClick={openCreate} className="btn-primary flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Food
          </button>
        }
      />

      {/* Search */}
      <div className="relative mb-6 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral" />
        <input
          className="input pl-9"
          placeholder="Search foods…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : foods.length === 0 ? (
        <EmptyState
          icon={Salad}
          title="No foods yet"
          description="Build your personal food database to quickly log meals and track nutrition."
          action={
            <button onClick={openCreate} className="btn-primary flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add Food
            </button>
          }
        />
      ) : (
        <div className="card overflow-hidden p-0">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-semibold text-neutral uppercase tracking-wider px-6 py-4">Product</th>
                <th className="text-right text-xs font-semibold text-neutral uppercase tracking-wider px-4 py-4">Calories</th>
                <th className="text-right text-xs font-semibold text-neutral uppercase tracking-wider px-4 py-4">Protein</th>
                <th className="text-right text-xs font-semibold text-neutral uppercase tracking-wider px-4 py-4">Carbs</th>
                <th className="text-right text-xs font-semibold text-neutral uppercase tracking-wider px-4 py-4">Fat</th>
                <th className="px-6 py-4" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {foods.map((food) => (
                <tr key={food._id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-secondary">{food.name}</p>
                    {food.brand && <p className="text-xs text-neutral">{food.brand}</p>}
                  </td>
                  <td className="px-4 py-4 text-right">
                    <span className="text-sm font-bold text-primary">{food.calories}</span>
                    <span className="text-xs text-neutral ml-1">kcal</span>
                  </td>
                  <td className="px-4 py-4 text-right text-sm text-secondary">{food.protein}g</td>
                  <td className="px-4 py-4 text-right text-sm text-secondary">{food.carbs}g</td>
                  <td className="px-4 py-4 text-right text-sm text-secondary">{food.fat}g</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => openEdit(food)} className="w-8 h-8 rounded-lg hover:bg-blush flex items-center justify-center text-neutral hover:text-primary transition-colors">
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button onClick={() => handleDelete(food._id)} className="w-8 h-8 rounded-lg hover:bg-red-50 flex items-center justify-center text-neutral hover:text-red-400 transition-colors">
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

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? "Edit Food" : "Add Food"} size="md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <label className="label">Product Name</label>
              <input className="input" value={form.name} onChange={(e) => fieldChange("name", e.target.value)} placeholder="e.g. Chicken Breast" required />
            </div>
            <div className="col-span-2">
              <label className="label">Brand (optional)</label>
              <input className="input" value={form.brand} onChange={(e) => fieldChange("brand", e.target.value)} placeholder="e.g. Tyson" />
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-xs font-semibold text-neutral uppercase tracking-wider mb-3">Per 100g</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="label">Calories (kcal)</label>
                <input type="number" className="input" value={form.calories} onChange={(e) => fieldChange("calories", parseFloat(e.target.value) || 0)} min={0} required />
              </div>
              <div>
                <label className="label">Protein (g)</label>
                <input type="number" className="input" value={form.protein} onChange={(e) => fieldChange("protein", parseFloat(e.target.value) || 0)} min={0} step="0.1" required />
              </div>
              <div>
                <label className="label">Carbs (g)</label>
                <input type="number" className="input" value={form.carbs} onChange={(e) => fieldChange("carbs", parseFloat(e.target.value) || 0)} min={0} step="0.1" required />
              </div>
              <div>
                <label className="label">Fat (g)</label>
                <input type="number" className="input" value={form.fat} onChange={(e) => fieldChange("fat", parseFloat(e.target.value) || 0)} min={0} step="0.1" required />
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={() => setModalOpen(false)} className="btn-ghost flex-1">Cancel</button>
            <button type="submit" className="btn-primary flex-1" disabled={saving}>
              {saving ? "Saving…" : editing ? "Save Changes" : "Add Food"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
