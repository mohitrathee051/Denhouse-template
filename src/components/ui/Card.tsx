import { cn } from "@/lib/helpers";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverLift?: boolean;
}

export default function Card({ className, hoverLift = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white shadow-card overflow-hidden",
        hoverLift && "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cardHover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
