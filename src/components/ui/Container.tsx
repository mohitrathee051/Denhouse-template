import { cn } from "@/lib/helpers";
import type { HTMLAttributes } from "react";

export default function Container({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mx-auto w-full max-w-container px-5 sm:px-8 lg:px-10", className)} {...props}>
      {children}
    </div>
  );
}
