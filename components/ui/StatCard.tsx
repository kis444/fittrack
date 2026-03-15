import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  unit?: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
  trend?: { value: number; label: string };
  className?: string;
}

export default function StatCard({
  label,
  value,
  unit,
  icon: Icon,
  iconColor = "text-primary",
  iconBg = "bg-blush",
  trend,
  className,
}: StatCardProps) {
  return (
    <div className={cn("card hover:shadow-card-hover transition-shadow duration-300", className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold text-neutral uppercase tracking-wider mb-2">{label}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-secondary">{value}</span>
            {unit && <span className="text-sm text-neutral font-medium">{unit}</span>}
          </div>
          {trend && (
            <p className={cn("text-xs mt-1.5 font-medium", trend.value >= 0 ? "text-emerald-500" : "text-red-400")}>
              {trend.value > 0 ? "+" : ""}{trend.value} {trend.label}
            </p>
          )}
        </div>
        <div className={cn("w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0", iconBg)}>
          <Icon className={cn("w-5 h-5", iconColor)} />
        </div>
      </div>
    </div>
  );
}
