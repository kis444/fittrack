"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { formatShortDate } from "@/lib/utils";

interface CaloriesChartProps {
  data: { date: string | Date; calories: number; burned?: number }[];
}

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: { name: string; value: number; fill: string }[]; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-xl shadow-card-hover border border-gray-100 px-3 py-2 space-y-1">
        <p className="text-xs text-neutral mb-1">{label}</p>
        {payload.map((p) => (
          <p key={p.name} className="text-xs font-semibold" style={{ color: p.fill }}>
            {p.name}: {p.value} kcal
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function CaloriesChart({ data }: CaloriesChartProps) {
  const formatted = data.map((d) => ({
    ...d,
    date: formatShortDate(d.date),
  }));

  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={formatted} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barGap={4}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
        <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#8C92AC" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: "#8C92AC" }} axisLine={false} tickLine={false} />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f9f9fb" }} />
        <Bar dataKey="calories" name="Eaten" fill="#FFBFCB" radius={[4, 4, 0, 0]} maxBarSize={28} />
        <Bar dataKey="burned" name="Burned" fill="#4E5282" radius={[4, 4, 0, 0]} maxBarSize={28} />
      </BarChart>
    </ResponsiveContainer>
  );
}
