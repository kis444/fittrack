"use client";

import { useEffect, useState } from "react";
import { Plus, Search, Trash2, BookOpen, ChefHat, Clock, Users } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import Modal from "@/components/ui/Modal";
import EmptyState from "@/components/ui/EmptyState";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import Badge from "@/components/ui/Badge";
import { IRecipe } from "@/types";

interface IngredientRow { name: string; amount: number; unit: string }

const emptyForm = {
  name: "", description: "", instructions: "", servings: 2,
  caloriesPerServing: 0, protein: 0, carbs: 0, fat: 0,
  tags: "" as string,
  ingredients: [{ name: "", amount: 0, unit: "g" }] as IngredientRow[],
};

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [viewRecipe, setViewRecipe] = useState<IRecipe | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const fetchRecipes = async () => {
    setLoading(true);
    const q = search ? `?search=${encodeURIComponent(search)}` : "";
    const res = await fetch(`/api/recipes${q}`);
    if (res.ok) setRecipes(await res.json());
    setLoading(false);
  };

  useEffect(() => { fetchRecipes(); }, [search]);

  const handleAddIngredient = () =>
    setForm((f) => ({ ...f, ingredients: [...f.ingredients, { name: "", amount: 0, unit: "g" }] }));

  const handleIngredientChange = (i: number, field: string, value: string | number) => {
    const updated = [...form.ingredients];
    updated[i] = { ...updated[i], [field]: value };
    setForm((f) => ({ ...f, ingredients: updated }));
  };

  const removeIngredient = (i: number) =>
    setForm((f) => ({ ...f, ingredients: f.ingredients.filter((_, idx) => idx !== i) }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const payload = {
      ...form,
      tags: form.tags ? form.tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
    };
    await fetch("/api/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setSaving(false);
    setModalOpen(false);
    setForm(emptyForm);
    fetchRecipes();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this recipe?")) return;
    await fetch(`/api/recipes/${id}`, { method: "DELETE" });
    fetchRecipes();
  };

  const fieldChange = (field: string, value: string | number) =>
    setForm((f) => ({ ...f, [field]: value }));

  return (
    <div>
      <PageHeader
        title="Recipes"
        subtitle="Your personal recipe collection"
        action={
          <button onClick={() => { setForm(emptyForm); setModalOpen(true); }} className="btn-primary flex items-center gap-2">
            <Plus className="w-4 h-4" /> New Recipe
          </button>
        }
      />

      <div className="relative mb-6 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral" />
        <input className="input pl-9" placeholder="Search recipes…" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : recipes.length === 0 ? (
        <EmptyState
          icon={BookOpen}
          title="No recipes yet"
          description="Create your recipe collection to track meals with detailed nutrition information."
          action={
            <button onClick={() => { setForm(emptyForm); setModalOpen(true); }} className="btn-primary flex items-center gap-2">
              <Plus className="w-4 h-4" /> New Recipe
            </button>
          }
        />
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {recipes.map((recipe) => (
            <div key={recipe._id} className="card hover:shadow-card-hover transition-shadow cursor-pointer group"
              onClick={() => setViewRecipe(recipe)}>
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                  <ChefHat className="w-5 h-5 text-white" />
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); handleDelete(recipe._id); }}
                  className="opacity-0 group-hover:opacity-100 w-7 h-7 rounded-lg hover:bg-red-50 flex items-center justify-center text-neutral hover:text-red-400 transition-all"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <h3 className="font-semibold text-secondary mb-1 line-clamp-2">{recipe.name}</h3>
              {recipe.description && (
                <p className="text-xs text-neutral line-clamp-2 mb-3">{recipe.description}</p>
              )}

              <div className="flex items-center gap-3 text-xs text-neutral mb-3">
                <span className="flex items-center gap-1"><Users className="w-3 h-3" />{recipe.servings} servings</span>
              </div>

              <div className="grid grid-cols-4 gap-1.5 p-3 bg-gray-50 rounded-xl">
                <div className="text-center">
                  <p className="text-xs font-bold text-primary">{recipe.caloriesPerServing}</p>
                  <p className="text-xs text-neutral">kcal</p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold text-secondary">{recipe.protein}g</p>
                  <p className="text-xs text-neutral">prot</p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold text-secondary">{recipe.carbs}g</p>
                  <p className="text-xs text-neutral">carbs</p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold text-secondary">{recipe.fat}g</p>
                  <p className="text-xs text-neutral">fat</p>
                </div>
              </div>

              {recipe.tags && recipe.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {recipe.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="purple" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Create Modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="New Recipe" size="lg">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <label className="label">Recipe Name</label>
              <input className="input" value={form.name} onChange={(e) => fieldChange("name", e.target.value)} placeholder="e.g. Greek Chicken Bowl" required />
            </div>
            <div className="col-span-2">
              <label className="label">Description (optional)</label>
              <input className="input" value={form.description} onChange={(e) => fieldChange("description", e.target.value)} placeholder="Brief description…" />
            </div>
          </div>

          {/* Ingredients */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="label !mb-0">Ingredients</label>
              <button type="button" onClick={handleAddIngredient} className="text-xs text-primary hover:underline flex items-center gap-1">
                <Plus className="w-3 h-3" /> Add
              </button>
            </div>
            <div className="space-y-2">
              {form.ingredients.map((ing, i) => (
                <div key={i} className="flex gap-2">
                  <input className="input flex-1" placeholder="Ingredient" value={ing.name} onChange={(e) => handleIngredientChange(i, "name", e.target.value)} />
                  <input type="number" className="input w-20" placeholder="Amount" value={ing.amount || ""} onChange={(e) => handleIngredientChange(i, "amount", parseFloat(e.target.value) || 0)} min={0} />
                  <select className="input w-20" value={ing.unit} onChange={(e) => handleIngredientChange(i, "unit", e.target.value)}>
                    {["g", "kg", "ml", "l", "tsp", "tbsp", "cup", "pcs"].map((u) => <option key={u}>{u}</option>)}
                  </select>
                  {form.ingredients.length > 1 && (
                    <button type="button" onClick={() => removeIngredient(i)} className="text-neutral hover:text-red-400 transition-colors px-1">✕</button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="label">Instructions</label>
            <textarea
              className="input min-h-24 resize-y"
              value={form.instructions}
              onChange={(e) => fieldChange("instructions", e.target.value)}
              placeholder="Step-by-step instructions…"
              required
            />
          </div>

          <div className="grid grid-cols-5 gap-3 p-4 bg-gray-50 rounded-xl">
            <div>
              <label className="label">Servings</label>
              <input type="number" className="input" value={form.servings} onChange={(e) => fieldChange("servings", parseInt(e.target.value) || 1)} min={1} />
            </div>
            <div>
              <label className="label">Calories</label>
              <input type="number" className="input" value={form.caloriesPerServing} onChange={(e) => fieldChange("caloriesPerServing", parseInt(e.target.value) || 0)} min={0} />
            </div>
            <div>
              <label className="label">Protein (g)</label>
              <input type="number" className="input" value={form.protein} onChange={(e) => fieldChange("protein", parseFloat(e.target.value) || 0)} min={0} step="0.1" />
            </div>
            <div>
              <label className="label">Carbs (g)</label>
              <input type="number" className="input" value={form.carbs} onChange={(e) => fieldChange("carbs", parseFloat(e.target.value) || 0)} min={0} step="0.1" />
            </div>
            <div>
              <label className="label">Fat (g)</label>
              <input type="number" className="input" value={form.fat} onChange={(e) => fieldChange("fat", parseFloat(e.target.value) || 0)} min={0} step="0.1" />
            </div>
          </div>

          <div>
            <label className="label">Tags (comma separated)</label>
            <input className="input" value={form.tags} onChange={(e) => fieldChange("tags", e.target.value)} placeholder="e.g. high-protein, lunch, meal-prep" />
          </div>

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={() => setModalOpen(false)} className="btn-ghost flex-1">Cancel</button>
            <button type="submit" className="btn-primary flex-1" disabled={saving}>
              {saving ? "Saving…" : "Create Recipe"}
            </button>
          </div>
        </form>
      </Modal>

      {/* View Recipe Modal */}
      {viewRecipe && (
        <Modal open={!!viewRecipe} onClose={() => setViewRecipe(null)} title={viewRecipe.name} size="lg">
          <div className="space-y-5">
            {viewRecipe.description && <p className="text-sm text-neutral">{viewRecipe.description}</p>}

            <div className="grid grid-cols-4 gap-3 p-4 bg-blush/50 rounded-xl">
              <div className="text-center">
                <p className="text-xl font-bold text-primary">{viewRecipe.caloriesPerServing}</p>
                <p className="text-xs text-neutral">kcal/serving</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-secondary">{viewRecipe.protein}g</p>
                <p className="text-xs text-neutral">protein</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-secondary">{viewRecipe.carbs}g</p>
                <p className="text-xs text-neutral">carbs</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-secondary">{viewRecipe.fat}g</p>
                <p className="text-xs text-neutral">fat</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-secondary mb-3">Ingredients ({viewRecipe.servings} servings)</h4>
              <ul className="space-y-1.5">
                {viewRecipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-dark flex-shrink-0" />
                    <span className="text-secondary">{ing.name}</span>
                    <span className="text-neutral ml-auto">{ing.amount} {ing.unit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-secondary mb-3">Instructions</h4>
              <p className="text-sm text-secondary leading-relaxed whitespace-pre-line">{viewRecipe.instructions}</p>
            </div>

            {viewRecipe.tags && viewRecipe.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {viewRecipe.tags.map((tag) => <Badge key={tag} variant="purple">{tag}</Badge>)}
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}
