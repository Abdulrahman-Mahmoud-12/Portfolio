import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  number,
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "relative mb-16 md:mb-20",
        align === "center" && "text-center",
        className
      )}
    >
      {/* Giant ghost number — engineering blueprint aesthetic */}
      {number && (
        <span
          aria-hidden="true"
          className={cn(
            "absolute -top-6 pointer-events-none select-none font-display font-black leading-none",
            "text-[6rem] sm:text-[8rem] text-white/[0.03]",
            align === "center" ? "left-1/2 -translate-x-1/2" : "-left-2"
          )}
        >
          {number}
        </span>
      )}

      {/* Section label */}
      {number && (
        <div
          className={cn(
            "flex items-center gap-3 mb-4",
            align === "center" && "justify-center"
          )}
        >
          <span className="text-accent font-mono text-sm font-semibold tracking-widest">
            {number.padStart(2, "0")}
          </span>
          <div className="h-px w-10 bg-gradient-to-r from-accent/60 to-transparent" />
        </div>
      )}

      {/* Main title */}
      <h2
        className={cn(
          "font-display font-bold leading-tight",
          "text-3xl sm:text-4xl md:text-5xl text-white"
        )}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-muted text-base leading-relaxed max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
