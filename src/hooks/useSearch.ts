"use client";

import { useState, useCallback } from "react";
import { SearchFormData, SearchResult, ApiResponse } from "@/types";

interface UseSearchReturn {
  results: SearchResult[];
  isLoading: boolean;
  error: string | null;
  isSuccess: boolean;
  submitSearch: (data: SearchFormData) => Promise<void>;
  reset: () => void;
}

export function useSearch(): UseSearchReturn {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const submitSearch = useCallback(async (data: SearchFormData) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);
    setResults([]);

    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result: ApiResponse = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Search failed");
      }

      setResults(result.data || []);
      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setResults([]);
    setIsLoading(false);
    setError(null);
    setIsSuccess(false);
  }, []);

  return { results, isLoading, error, isSuccess, submitSearch, reset };
}
