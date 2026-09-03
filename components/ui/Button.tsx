import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children, href, onClick, variant = "primary", size = "md",
  external = false, className, type = "button", disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base active:scale-[0.97]";

  const variants = {
    primary:
      "relative overflow-hidden bg-gradient-to-r from-accent to-cyan-300 text-bg-base hover:shadow-glow-accent before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity",
    outline:
      "border border-accent/50 text-accent hover:bg-accent/8 hover:border-accent hover:shadow-glow-accent",
    ghost:
      "text-muted hover:text-white hover:bg-white/5",
  };

  const sizes = { sm: "px-4 py-2 text-xs", md: "px-5 py-2.5 text-sm", lg: "px-7 py-3.5 text-sm" };

  const classes = cn(base, variants[variant], sizes[size], disabled && "opacity-50 cursor-not-allowed pointer-events-none", className);

  if (href) {
    return (
      <Link href={href} className={classes} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
