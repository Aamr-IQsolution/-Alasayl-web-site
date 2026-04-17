import { ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={twMerge(
        clsx(
          "rounded-lg bg-white p-6 shadow-md transition-shadow duration-200 hover:shadow-lg",
          className
        )
      )}
    >
      {children}
    </div>
  );
}
