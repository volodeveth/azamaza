"use client";

import { LocationIcon, CloseIcon } from "@/components/ui/Icons";

interface DestinationInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function DestinationInput({ value, onChange, error }: DestinationInputProps) {
  return (
    <div>
      <div
        className={`flex items-center ${error ? "ring-2 ring-red-400" : ""}`}
        style={{
          height: "42px",
          backgroundColor: "#F8FAFC",
          borderRadius: "8px",
          padding: "0 4px",
          gap: "4px",
        }}
      >
        <div className="flex shrink-0 items-center justify-center" style={{ width: "40px", height: "40px" }}>
          <LocationIcon size={24} color="#364153" />
        </div>

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Destination, city, address"
          className="h-full flex-1 bg-transparent outline-none"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
            color: "#364153",
          }}
          aria-label="Destination"
          aria-invalid={!!error}
        />

        <div className="flex shrink-0 items-center justify-center" style={{ width: "40px", height: "40px" }}>
          <button
            type="button"
            onClick={() => value && onChange("")}
            className="flex items-center justify-center rounded-full transition-colors hover:bg-black/5"
            style={{ width: "32px", height: "32px" }}
            aria-label="Clear destination"
          >
            <CloseIcon size={24} color="#4A5565" />
          </button>
        </div>
      </div>
      {error && <p className="mt-1 pl-2 text-xs text-red-300">{error}</p>}
    </div>
  );
}
