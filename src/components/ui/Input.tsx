import { ChangeEvent } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  label?: string;
  name?: string;
  id?: string;
}

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  label,
  name,
  id,
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
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={twMerge(
          clsx(
            "w-full rounded-lg border bg-white px-4 py-3 text-sm text-zinc-900",
            "transition-colors duration-200",
            "placeholder:text-zinc-400 focus:outline-none focus:ring-2",
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
              : "border-zinc-300 focus:border-primary focus:ring-primary/20"
          )
        )}
      />

      {error ? <p className="mt-1 text-sm text-red-600">{error}</p> : null}
    </div>
  );
}
