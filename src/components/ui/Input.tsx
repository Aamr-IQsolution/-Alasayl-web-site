import { InputHTMLAttributes } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  error?: string;
  label?: string;
  id?: string;
}

export default function Input({
  type = "text",
  error,
  label,
  name,
  id,
  className,
  ...props
}: InputProps) {
  const inputId = id ?? name;

  return (
    <div className="w-full">
      {label ? (
        <label htmlFor={inputId} className="mb-2 block text-sm font-medium text-zinc-800">
          {label}
        </label>
      ) : null}

      <input
        id={inputId}
        name={name}
        type={type}
        className={twMerge(
          clsx(
            "w-full rounded-lg border bg-white px-4 py-3 text-sm text-zinc-900",
            "transition-colors duration-200",
            "placeholder:text-zinc-400 focus:outline-none focus:ring-2",
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
              : "border-zinc-300 focus:border-primary focus:ring-primary/20"
          ),
          className
        )}
        {...props}
      />

      {error ? <p className="mt-1 text-sm text-red-600">{error}</p> : null}
    </div>
  );
}
