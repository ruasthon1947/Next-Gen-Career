import React, { useState, useRef, useEffect } from "react";

export function GoogleSearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showBox, setShowBox] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResults(null);
    setShowBox(false);
    try {
      const res = await fetch("/api/google-search?q=" + encodeURIComponent(query));
      const contentType = res.headers.get("content-type");
      if (!res.ok) {
        let errorText = await res.text();
        setError(`Error: ${res.status} ${res.statusText}${errorText ? ` - ${errorText}` : ''}`);
        setShowBox(true);
        return;
      }
      if (contentType && contentType.includes("text/html")) {
        setError("404 Not Found: The search API endpoint is missing or misconfigured.");
        setShowBox(true);
        return;
      }
      const data = await res.json();
      setResults(data.response);
      setShowBox(true);
    } catch (err: any) {
      setError(`Network or server error: ${err?.message || err}`);
      setShowBox(true);
    } finally {
      setLoading(false);
    }
  }

  // Minimize box on outside click
  useEffect(() => {
    if (!showBox) return;
    function handleClick(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setShowBox(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showBox]);

  return (
    <div className="flex flex-col items-start min-w-[220px] max-w-xs relative">
      <form onSubmit={handleSearch} className="flex items-center w-full gap-2">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Ask AI..."
          className="rounded-l-md border border-gray-300 dark:border-gray-700 bg-background px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary w-36 md:w-48 lg:w-56"
        />
        <button
          type="submit"
          className="rounded-r-md bg-primary text-white px-3 py-1.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
          disabled={loading || !query.trim()}
        >
          ASK AI
        </button>
      </form>
      {loading && <div className="text-xs mt-2 text-muted-foreground">Searching...</div>}
      {showBox && (
        <div ref={boxRef} className="absolute left-0 top-12 z-50 w-full bg-background border border-muted-foreground/30 rounded shadow-lg p-2 flex flex-col gap-2 animate-fade-in">
          <button
            className="self-end text-xs text-muted-foreground hover:text-primary px-2 py-0.5 rounded border border-transparent hover:border-primary/30 bg-muted"
            onClick={() => setShowBox(false)}
            aria-label="Close search results"
          >
            &#8592; Back
          </button>
          {error && (
            <div className="text-xs text-red-500 whitespace-pre-line border border-red-300 bg-red-50 rounded p-2 max-h-32 overflow-y-auto">{error}</div>
          )}
          {results && (
            <>
              {results.search_answer && (
                <div className="p-2 rounded bg-muted text-xs max-h-32 overflow-y-auto w-full border border-primary/40 shadow-inner mb-2">
                  <div className="font-semibold mb-1 text-primary">Report Answer:</div>
                  <div className="whitespace-pre-line">{results.search_answer}</div>
                </div>
              )}
              {(Array.isArray(results.search_results) && results.search_results.length > 0) && (
                <div className="p-2 rounded bg-muted text-xs max-h-48 overflow-y-auto w-full border border-muted-foreground/20">
                  <div className="font-semibold mb-1">Top Results:</div>
                  <ul className="space-y-1">
                    {results.search_results.map((item: any, idx: number) => (
                      <li key={idx}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
