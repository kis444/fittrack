"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { formatShortDate } from "@/lib/utils";

interface WeightChartProps {
  data: { date: string | Date; weight: number }[];
}

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: { value: number }[]; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-xl shadow-card-hover border border-gray-100 px-3 py-2">
        <p className="text-xs text-neutral">{label}</p>
        <p className="text-sm font-bold text-secondary">{payload[0].value} kg</p>
      </div>
    );
  }
  return null;
};

export default function WeightChart({ data }: WeightChartProps) {
  const formatted = data.map((d) => ({
    ...d,
    date: formatShortDate(d.date),
  }));

  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={formatted} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="weightGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4E5282" stopOpacity={0.12} />
            <stop offset="95%" stopColor="#4E5282" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
        <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#8C92AC" }} axisLine={false} tickLine={false} />
        <YAxis
          tick={{ fontSize: 11, fill: "#8C92AC" }}
          axisLine={false}
          tickLine={false}
          domain={["dataMin - 1", "dataMax + 1"]}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="weight"
          stroke="#4E5282"
          strokeWidth={2.5}
          fill="url(#weightGrad)"
          dot={false}
          activeDot={{ r: 5, fill: "#4E5282", strokeWidth: 0 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
