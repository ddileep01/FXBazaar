"use client";
import { useState, useMemo } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import TemplateCard from "@/components/TemplateCard";
import { videoTemplates } from "@/lib/data";
import { Suspense } from "react";

function TemplatesContent() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"popular" | "newest">("popular");

  const filtered = useMemo(() => {
    let list = videoTemplates;
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((t) => t.title.toLowerCase().includes(q) || t.tags.some((tag) => tag.includes(q)));
    }
    if (sortBy === "newest") return [...list.filter((t) => t.isNew), ...list.filter((t) => !t.isNew)];
    return [...list].sort((a, b) => b.orders - a.orders);
  }, [search, sortBy]);

  return (
    <div className="pt-16 min-h-screen">
      {/* Page header */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="neo-badge inline-flex px-3 py-1.5 mb-4">All Templates</div>
              <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                Video Templates
              </h1>
              <p className="text-white/45 text-sm mt-2 font-medium">
                {filtered.length} template{filtered.length !== 1 ? "s" : ""} — search by title to find yours
              </p>
            </div>

            {/* Sort */}
            <div className="flex gap-2">
              {(["popular", "newest"] as const).map((opt) => (
                <button key={opt} onClick={() => setSortBy(opt)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wide rounded-lg transition-all ${
                    sortBy === opt
                      ? "bg-indigo-500/25 text-indigo-300 border border-indigo-500/40"
                      : "bg-white/5 text-white/55 border border-white/15 hover:bg-white/10 hover:text-white"
                  }`}>
                  {opt === "popular" ? "Most Popular" : "Newest"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search */}
        <div className="relative max-w-md mb-10">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input
            type="text"
            placeholder="Search by video title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="neo-input w-full pl-10 pr-10 py-3 text-sm"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/35 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((t) => (
              <TemplateCard key={t.id} template={t} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-5">
              <Search className="w-9 h-9 text-white/25" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-white">No templates found</h3>
            <p className="text-sm text-white/50 mb-6">Try a different search term.</p>
            <button onClick={() => setSearch("")} className="neo-btn-yellow px-5 py-2.5 gap-2 text-sm">
              Clear Search <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TemplatesPage() {
  return <Suspense><TemplatesContent /></Suspense>;
}
