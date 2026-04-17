import { SelectHTMLAttributes } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "id" | "children"> {
  options: SelectOption[];
  error?: string;
  label?: string;
  id?: string;
}

export default function Select({
  options,
  error,
  label,
  name,
  id,
  className,
  ...props
}: SelectProps) {
  const selectId = id ?? name;

  return (
    <div className="w-full">
      {label ? (
        <label htmlFor={selectId} className="mb-2 block text-sm font-medium text-zinc-800">
          {label}
        </label>
      ) : null}

      <select
        id={selectId}
        name={name}
        className={twMerge(
          clsx(
            "w-full rounded-lg border bg-white px-4 py-3 text-sm text-zinc-900",
            "transition-colors duration-200",
            "focus:outline-none focus:ring-2",
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
              : "border-zinc-300 focus:border-primary focus:ring-primary/20"
          ),
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error ? <p className="mt-1 text-sm text-red-600">{error}</p> : null}
    </div>
  );
}
