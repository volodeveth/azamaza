"use client";

import { SearchResult } from "@/types";

interface SearchResultsProps {
  results: SearchResult[];
  onReset: () => void;
}

export default function SearchResults({ results, onReset }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="mt-4 rounded-xl bg-gray-50 p-6 text-center">
        <p className="text-sm text-text-gray">No results found. Try different search criteria.</p>
        <button
          onClick={onReset}
          className="mt-2 text-sm font-medium text-primary-blue hover:underline"
        >
          Reset search
        </button>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-inter text-lg font-semibold text-text-dark">
          Found {results.length} results
        </h2>
        <button
          onClick={onReset}
          className="text-sm font-medium text-primary-blue hover:underline"
        >
          New search
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {results.map((result) => (
          <article
            key={result.id}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-inter text-sm font-semibold text-text-dark">
                  {result.title}
                </h3>
                <p className="mt-0.5 text-xs text-text-gray">{result.location}</p>
                <span className="mt-1 inline-block rounded-full bg-primary-blue/10 px-2 py-0.5 text-xs font-medium text-primary-blue">
                  {result.category}
                </span>
              </div>
              <div className="text-right">
                <p className="font-inter text-sm font-bold text-text-dark">{result.price}</p>
                <div className="mt-1 flex items-center gap-0.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="#FFDF20">
                    <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7L7 1z" />
                  </svg>
                  <span className="text-xs font-medium text-text-gray">{result.rating}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
