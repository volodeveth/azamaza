"use client";

import { useState, useCallback } from "react";
import { SearchFormData } from "@/types";
import { useSearch } from "@/hooks/useSearch";
import DestinationInput from "./DestinationInput";
import ServiceTypeDropdown from "./ServiceTypeDropdown";
import DatePicker from "./DatePicker";
import SearchResults from "@/components/SearchResults/SearchResults";

export default function SearchForm() {
  const [formData, setFormData] = useState<SearchFormData>({
    destination: "",
    serviceType: "",
    date: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof SearchFormData, string>>>({});
  const { results, isLoading, error, isSuccess, submitSearch, reset } = useSearch();

  const updateField = useCallback(
    <K extends keyof SearchFormData>(field: K, value: SearchFormData[K]) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    },
    []
  );

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof SearchFormData, string>> = {};

    if (!formData.destination.trim()) {
      newErrors.destination = "Please enter a destination";
    }
    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service type";
    }
    if (!formData.date) {
      newErrors.date = "Please select a date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    await submitSearch(formData);
  };

  const handleReset = () => {
    setFormData({ destination: "", serviceType: "", date: "" });
    setErrors({});
    reset();
  };

  return (
    <div className="px-4 pb-6">
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col gap-2 rounded-2xl bg-search-blue p-2">
          {/* Inputs */}
          <div className="flex flex-col gap-2">
            <DestinationInput
              value={formData.destination}
              onChange={(val) => updateField("destination", val)}
              error={errors.destination}
            />
            <ServiceTypeDropdown
              value={formData.serviceType}
              onChange={(val) => updateField("serviceType", val)}
              error={errors.serviceType}
            />
            <DatePicker
              value={formData.date}
              onChange={(val) => updateField("date", val)}
              error={errors.date}
            />
          </div>

          {/* Search button */}
          <button
            type="submit"
            disabled={isLoading}
            className="flex h-10 w-full items-center justify-center rounded-full bg-yellow font-inter text-sm font-semibold text-text-dark transition-all hover:brightness-105 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                  <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                </svg>
                Searching...
              </div>
            ) : (
              "Search"
            )}
          </button>
        </div>
      </form>

      {/* Error message */}
      {error && (
        <div className="mt-3 rounded-lg bg-red-50 p-3 text-sm text-red-600" role="alert">
          {error}
        </div>
      )}

      {/* Search results */}
      {isSuccess && (
        <SearchResults results={results} onReset={handleReset} />
      )}
    </div>
  );
}
