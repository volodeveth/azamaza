"use client";

import { useState, useRef } from "react";
import { serviceTypes } from "@/data/categories";
import { useClickOutside } from "@/hooks/useClickOutside";
import { SearchIcon } from "@/components/ui/Icons";
import {
  BsSuitcaseLg,
  BsCamera,
  BsPeople,
  BsPhone,
  BsFuelPump,
  BsTaxiFront,
  BsCupHot,
  BsBusFront,
  BsBuilding,
  BsShopWindow,
  BsTags,
  BsRepeat,
  BsDatabase,
} from "react-icons/bs";

const serviceTypeIcons: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Excursion: BsSuitcaseLg,
  Photography: BsCamera,
  Meet: BsPeople,
  "App Subscription": BsPhone,
  Fueling: BsFuelPump,
  Taxi: BsTaxiFront,
  Restaurants: BsCupHot,
  Transfer: BsBusFront,
  Hotels: BsBuilding,
  Marketplaces: BsShopWindow,
  Coupon: BsTags,
  Rent: BsRepeat,
  "Referral program": BsDatabase,
};

interface ServiceTypeDropdownProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function ServiceTypeDropdown({ value, onChange, error }: ServiceTypeDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
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
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        className={`flex w-full items-center text-left ${error ? "ring-2 ring-red-400" : ""}`}
        style={{
          height: "42px",
          backgroundColor: "#F8FAFC",
          borderRadius: "8px",
          padding: "0 4px",
          gap: "4px",
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Service type"
        aria-invalid={!!error}
      >
        <div className="flex shrink-0 items-center justify-center" style={{ width: "40px", height: "40px" }}>
          <SearchIcon size={24} color="#364153" />
        </div>

        <span
          className="flex-1"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: value ? 500 : 400,
            lineHeight: "20px",
            color: value ? "#364153" : "#4A5565",
          }}
        >
          {value || "A service, a meeting, an offer"}
        </span>

        <div className="flex shrink-0 items-center justify-center" style={{ width: "40px", height: "40px" }}>
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          >
            <path d="M1 1l6 7 6-7" stroke="#4A5565" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <ul
          className="absolute top-full left-0 z-30 mt-1 w-full overflow-auto rounded-lg bg-white py-2 shadow-lg ring-1 ring-black/10"
          role="listbox"
          aria-label="Service types"
          style={{ maxHeight: "340px" }}
        >
          {serviceTypes.map((type) => {
            const IconComponent = serviceTypeIcons[type];
            return (
              <li
                key={type}
                role="option"
                aria-selected={value === type}
                tabIndex={0}
                onClick={() => handleSelect(type)}
                onKeyDown={(e) => handleItemKeyDown(e, type)}
                className="flex cursor-pointer items-center transition-colors hover:bg-blue-50"
                style={{
                  padding: "14px 20px",
                  gap: "12px",
                  color: value === type ? "#006CE4" : "#364153",
                  fontWeight: value === type ? 500 : 400,
                  backgroundColor: value === type ? "rgba(0, 108, 228, 0.1)" : undefined,
                  fontFamily: "Inter, sans-serif",
                  fontSize: "18px",
                  lineHeight: "24px",
                }}
              >
                {IconComponent && <IconComponent size={24} color={value === type ? "#006CE4" : "#6B7280"} />}
                {type}
              </li>
            );
          })}
        </ul>
      )}

      {error && <p className="mt-1 pl-2 text-xs text-red-300">{error}</p>}
    </div>
  );
}
