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
        className={`relative flex w-full items-center text-left ${error ? "ring-2 ring-red-400" : ""}`}
        style={{
          height: "42px",
          backgroundColor: "#F8FAFC",
          borderRadius: "8px",
          padding: "0 4px",
          gap: "4px",
        }}
        aria-label="Date of service"
        aria-invalid={!!error}
      >
        <div className="flex shrink-0 items-center justify-center" style={{ width: "40px", height: "40px" }}>
          <CalendarIcon size={24} color="#364153" />
        </div>

        <span
          className="flex-1"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            color: value ? "#364153" : "#4A5565",
          }}
        >
          {value ? formatDisplayDate(value) : "Date of use of the service"}
        </span>

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
