import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent";
}

export default function Tag({
  children,
  className,
  variant = "default",
}: TagProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 rounded-full text-xs font-medium border transition-colors",
        variant === "default"
          ? "bg-surface border-white/10 text-muted hover:border-accent/40 hover:text-accent"
          : "bg-accent/10 border-accent/30 text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
