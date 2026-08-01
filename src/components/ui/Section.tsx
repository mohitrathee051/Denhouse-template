import { cn } from "@/lib/helpers";
import type { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: "white" | "offwhite" | "primary";
}

const toneStyles = {
  white: "bg-white",
  offwhite: "bg-offwhite",
  primary: "bg-primary text-white",
};

export default function Section({ className, tone = "white", children, ...props }: SectionProps) {
  return (
    <section className={cn("py-16 sm:py-20 lg:py-24", toneStyles[tone], className)} {...props}>
      {children}
    </section>
  );
}
