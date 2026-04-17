import { ChangeEvent } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface TextareaProps {
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  label?: string;
  rows?: number;
  maxLength?: number;
  name?: string;
  id?: string;
}

export default function Textarea({
  placeholder,
  value,
  onChange,
  error,
  label,
  rows = 5,
  maxLength,
  name,
  id,
}: TextareaProps) {
  const textareaId = id ?? name;

  return (
    <div className="w-full">
      {label ? (
        <label htmlFor={textareaId} className="mb-2 block text-sm font-medium text-zinc-800">
          {label}
        </label>
      ) : null}

      <textarea
        id={textareaId}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        maxLength={maxLength}
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
