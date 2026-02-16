"use client";

import { useRef } from "react";
import { CalendarIcon } from "@/components/ui/Icons";

interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function DatePicker({ value, onChange, error }: DatePickerProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const formatDisplayDate = (dateStr: string): string => {
    if (!dateStr) return "";
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleClick = () => {
    inputRef.current?.showPicker?.();
    inputRef.current?.focus();
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className={`relative flex h-[42px] w-full items-center gap-1 rounded-lg bg-input-bg px-1 text-left ${
          error ? "ring-2 ring-red-400" : ""
        }`}
        aria-label="Date of service"
        aria-invalid={!!error}
      >
        {/* Leading icon */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center">
          <CalendarIcon size={24} color="#364153" />
        </div>

        {/* Display text */}
        <span
          className={`flex-1 font-inter text-base font-normal ${
            value ? "text-text-dark" : "text-text-gray"
          }`}
        >
          {value ? formatDisplayDate(value) : "Date of use of the service"}
        </span>

        {/* Hidden native date input */}
        <input
          ref={inputRef}
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          aria-label="Select date"
          min={new Date().toISOString().split("T")[0]}
        />
      </button>
      {error && <p className="mt-1 pl-2 text-xs text-red-300">{error}</p>}
    </div>
  );
}
