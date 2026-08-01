import Link from "next/link";
import { cn } from "@/lib/helpers";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps | "href"> & {
    href?: undefined;
  };

interface ButtonAsLink extends BaseProps {
  href: string;
  target?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-dark",
  secondary: "bg-primary text-white hover:bg-primary-light",
  outline: "border border-white/40 text-white hover:bg-white hover:text-primary",
  ghost: "text-primary hover:bg-primary/5",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none disabled:translate-y-0";

export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", children, className, icon } = props;
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} target={props.target} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  // Keep component-only props out of the native button's attribute spread.
  const buttonProps: Partial<ButtonAsButton> = { ...(props as ButtonAsButton) };
  delete buttonProps.href;
  delete buttonProps.variant;
  delete buttonProps.size;
  delete buttonProps.children;
  delete buttonProps.className;
  delete buttonProps.icon;

  return (
    <button
      {...(buttonProps as ButtonHTMLAttributes<HTMLButtonElement>)}
      className={classes}
      type={buttonProps.type ?? "button"}
    >
      {children}
      {icon}
    </button>
  );
}
