import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary/40",
  secondary:
    "bg-secondary text-white hover:bg-secondary-dark focus-visible:ring-secondary/40",
  outline:
    "border border-primary text-primary hover:bg-primary/10 focus-visible:ring-primary/30",
  ghost: "text-primary hover:bg-primary/10 focus-visible:ring-primary/30",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  disabled,
  onClick,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = twMerge(
    clsx(
      "inline-flex items-center justify-center rounded-xl font-medium",
      "transition-all duration-200 ease-in-out",
      "focus-visible:outline-none focus-visible:ring-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      variantClasses[variant],
      sizeClasses[size],
      className
    )
  );

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
