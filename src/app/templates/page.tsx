"use client";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import TemplateCard from "@/components/TemplateCard";
import { templates, categories } from "@/lib/data";
import { Suspense } from "react";

function TemplatesContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<"popular" | "newest" | "price-asc" | "price-desc">("popular");

  const filtered = useMemo(() => {
    let list = templates;

    if (activeCategory !== "All") {
      list = list.filter((t) => t.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.includes(q)) ||
          t.category.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case "newest":
        return [...list].filter((t) => t.isNew).concat(list.filter((t) => !t.isNew));
      case "price-asc":
        return [...list].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...list].sort((a, b) => b.price - a.price);
      default:
        return [...list].sort((a, b) => b.sales - a.sales);
    }
  }, [search, activeCategory, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-2 text-zinc-900">All Templates</h1>
        <p className="text-zinc-500 text-sm">
          {filtered.length} template{filtered.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search templates..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-white border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-200 transition-colors"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-zinc-400" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="bg-white border border-zinc-200 text-sm text-zinc-700 rounded-lg px-3 py-2.5 focus:outline-none focus:border-violet-400 cursor-pointer"
          >
            <option value="popular">Most Popular</option>
            <option value="newest">Newest First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-sm"
                : "bg-white border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-violet-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((t) => (
            <TemplateCard key={t.id} template={t} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="w-16 h-16 rounded-full bg-violet-50 border border-violet-100 flex items-center justify-center mx-auto mb-4">
            <Search className="w-7 h-7 text-violet-400" />
          </div>
          <h3 className="font-semibold mb-2 text-zinc-900">No templates found</h3>
          <p className="text-sm text-zinc-500">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}

export default function TemplatesPage() {
  return (
    <Suspense>
      <TemplatesContent />
    </Suspense>
  );
}
