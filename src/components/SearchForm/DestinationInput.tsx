"use client";

import { PersonIcon, CloseIcon } from "@/components/ui/Icons";

interface DestinationInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function DestinationInput({ value, onChange, error }: DestinationInputProps) {
  return (
    <div>
      <div
        className={`flex h-[42px] items-center gap-1 rounded-lg bg-input-bg px-1 ${
          error ? "ring-2 ring-red-400" : ""
        }`}
      >
        {/* Leading icon */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center">
          <PersonIcon size={24} color="#364153" />
        </div>

        {/* Input */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Destination, city, address"
          className="h-full flex-1 bg-transparent font-inter text-sm font-normal text-text-dark placeholder:text-text-gray outline-none"
          aria-label="Destination"
          aria-invalid={!!error}
        />

        {/* Clear button */}
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-black/5"
            aria-label="Clear destination"
          >
            <CloseIcon size={18} color="#4A5565" />
          </button>
        )}
      </div>
      {error && <p className="mt-1 pl-2 text-xs text-red-300">{error}</p>}
    </div>
  );
}
