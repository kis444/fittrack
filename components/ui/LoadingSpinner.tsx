import { cn } from "@/lib/utils";

export default function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center py-12", className)}>
      <div className="w-8 h-8 border-2 border-gray-200 border-t-primary rounded-full animate-spin" />
    </div>
  );
}
