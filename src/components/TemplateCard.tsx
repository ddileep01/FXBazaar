import Link from "next/link";
import { Star, Clock, ArrowUpRight, Play } from "lucide-react";
import type { VideoTemplate } from "@/lib/data";

export default function TemplateCard({ template }: { template: VideoTemplate }) {
  return (
    <Link href={`/templates/${template.id}`} className="group block">
      <div className="neo-card neo-card-hover h-full flex flex-col overflow-hidden">
        {/* Thumbnail */}
        <div
          className="relative aspect-video overflow-hidden rounded-t-[15px]"
          style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.3) 0%, rgba(139,92,246,0.2) 55%, rgba(244,114,182,0.15) 100%)" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-indigo-500/30 group-hover:border-indigo-500/40 transition-all duration-300">
              <Play className="w-5 h-5 text-white/70 group-hover:text-white fill-white/40 group-hover:fill-white/80 transition-colors" />
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
            {template.isBestseller && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 uppercase tracking-wide">
                Bestseller
              </span>
            )}
            {template.isNew && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 uppercase tracking-wide">
                New
              </span>
            )}
          </div>

          {/* Delivery time */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/40 backdrop-blur-sm border border-white/15 text-[10px] font-bold px-2 py-1 rounded-lg text-white/80">
            <Clock className="w-2.5 h-2.5" />
            {template.deliveryTime}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-2">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span className="text-xs font-bold text-white">{template.rating}</span>
            <span className="text-xs text-white/35">({template.orders} orders)</span>
          </div>

          {/* Title */}
          <h3 className="text-sm font-bold text-white leading-snug mb-2 group-hover:text-indigo-300 transition-colors line-clamp-2 flex-1">
            {template.title}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-3">
            {template.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[10px] font-medium text-white/40 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded-md">
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wide">Get Quote</span>
            <div className="w-7 h-7 rounded-lg bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center group-hover:bg-indigo-500/30 group-hover:border-indigo-500/40 transition-all duration-200">
              <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
