import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type LoadingSize = "default" | "small";

interface LoadingProps {
  size?: LoadingSize;
  className?: string;
}

const sizeClasses: Record<LoadingSize, string> = {
  default: "h-8 w-8 border-[3px]",
  small: "h-4 w-4 border-2",
};

export default function Loading({ size = "default", className }: LoadingProps) {
  return (
    <span
      className={twMerge(
        clsx(
          "inline-block animate-spin rounded-full border-primary border-t-transparent",
          sizeClasses[size],
          className
        )
      )}
      role="status"
      aria-label="Loading"
    />
  );
}
