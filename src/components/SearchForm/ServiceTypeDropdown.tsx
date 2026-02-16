"use client";

import { useState, useRef } from "react";
import { serviceTypes } from "@/data/categories";
import { useClickOutside } from "@/hooks/useClickOutside";
import { ChevronDownIcon } from "@/components/ui/Icons";
import ImageOverlay from "@/components/ui/ImageOverlay";

interface ServiceTypeDropdownProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function ServiceTypeDropdown({ value, onChange, error }: ServiceTypeDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false), isOpen);

  const handleSelect = (type: string) => {
    onChange(type);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleItemKeyDown = (e: React.KeyboardEvent, type: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSelect(type);
    }
  };

  return (
    <>
      <div ref={dropdownRef} className="relative">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          onKeyDown={handleKeyDown}
          className={`flex h-[42px] w-full items-center gap-1 rounded-lg bg-input-bg px-1 text-left ${
            error ? "ring-2 ring-red-400" : ""
          }`}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label="Service type"
          aria-invalid={!!error}
        >
          {/* Leading icon */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="#364153" strokeWidth="2" />
              <path d="M16 16l4.5 4.5" stroke="#364153" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Value or placeholder */}
          <span
            className={`flex-1 font-inter text-sm font-medium ${
              value ? "text-text-dark" : "text-text-gray"
            }`}
          >
            {value || "A service, a meeting, an offer"}
          </span>

          {/* Trailing chevron */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center">
            <ChevronDownIcon
              size={20}
              color="#4A5565"
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </div>
        </button>

        {/* Dropdown list */}
        {isOpen && (
          <ul
            className="absolute top-full left-0 z-30 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 shadow-lg ring-1 ring-black/10"
            role="listbox"
            aria-label="Service types"
          >
            {serviceTypes.map((type) => (
              <li
                key={type}
                role="option"
                aria-selected={value === type}
                tabIndex={0}
                onClick={() => handleSelect(type)}
                onKeyDown={(e) => handleItemKeyDown(e, type)}
                className={`cursor-pointer px-4 py-2.5 font-inter text-sm transition-colors hover:bg-primary-blue/5 ${
                  value === type ? "bg-primary-blue/10 font-medium text-primary-blue" : "text-text-dark"
                }`}
              >
                {type}
              </li>
            ))}
          </ul>
        )}

        {error && <p className="mt-1 pl-2 text-xs text-red-300">{error}</p>}
      </div>

      {/* Full popup image (alternative view) */}
      <ImageOverlay
        src="/images/popup.png"
        alt="Service categories"
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}
