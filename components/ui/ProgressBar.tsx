import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number; // 0–100
  label?: string;
  color?: string;
  height?: "sm" | "md" | "lg";
  showValue?: boolean;
  className?: string;
}

export default function ProgressBar({
  value,
  label,
  color = "bg-primary",
  height = "md",
  showValue = false,
  className,
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  const heights = { sm: "h-1.5", md: "h-2.5", lg: "h-4" };

  return (
    <div className={cn("w-full", className)}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-xs font-medium text-neutral">{label}</span>}
          {showValue && <span className="text-xs font-bold text-secondary">{clamped.toFixed(0)}%</span>}
        </div>
      )}
      <div className={cn("w-full bg-gray-100 rounded-full overflow-hidden", heights[height])}>
        <div
          className={cn("rounded-full transition-all duration-700 ease-out", color, heights[height])}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
