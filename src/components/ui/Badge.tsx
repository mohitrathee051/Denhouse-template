import { cn } from "@/lib/helpers";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "accent" | "primary" | "white";
  className?: string;
}

const variantStyles = {
  accent: "bg-accent/10 text-accent-dark",
  primary: "bg-primary/10 text-primary",
  white: "bg-white/90 text-primary",
};

export default function Badge({ children, variant = "accent", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
