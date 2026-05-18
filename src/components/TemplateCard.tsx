import Link from "next/link";
import { Star, QrCode, Film } from "lucide-react";
import type { VNTemplate } from "@/lib/data";
import { categoryMeta } from "@/lib/data";
import CategoryIcon from "@/components/CategoryIcon";

export default function TemplateCard({ template }: { template: VNTemplate }) {
  const meta = categoryMeta[template.videoCategory];

  return (
    <Link href={`/templates/${template.id}`} className="group block">
      <div className="rounded-2xl overflow-hidden bg-white card-border transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-md">
        {/* Thumbnail area */}
        <div className="relative aspect-[9/16] max-h-64 sm:aspect-video sm:max-h-none bg-gradient-to-br from-violet-50 via-fuchsia-50 to-cyan-50 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${meta.bg}`}>
              <CategoryIcon category={template.videoCategory} className={`w-8 h-8 ${meta.color}`} />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Badges */}
          <div className="absolute top-2.5 left-2.5 flex gap-1.5 flex-wrap">
            {template.isBestseller && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-sm">
                BESTSELLER
              </span>
            )}
            {template.isNew && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-white shadow-sm">
                NEW
              </span>
            )}
          </div>

          {/* Clip count badge */}
          <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 bg-black/60 text-white text-[10px] font-medium px-2 py-1 rounded-full backdrop-blur-sm">
            <Film className="w-2.5 h-2.5" />
            {template.clipCount} clips · {template.duration}
          </div>

          {/* Hover overlay */}
          <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-1.5 bg-gradient-to-r from-violet-600 to-cyan-500 text-white px-2.5 py-1.5 rounded-lg text-xs font-semibold shadow-lg">
              <QrCode className="w-3 h-3" />
              Get QR
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          {/* Category + Rating */}
          <div className="flex items-center justify-between mb-2">
            <span className={`flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md border ${meta.color} ${meta.bg}`}>
              <CategoryIcon category={template.videoCategory} className="w-3 h-3" />
              {template.videoCategory}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <span className="text-xs text-zinc-500">{template.rating}</span>
              <span className="text-xs text-zinc-400">({template.sales})</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-sm font-semibold text-zinc-900 leading-snug mb-2 group-hover:text-violet-600 transition-colors line-clamp-2 flex-1">
            {template.title}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-3">
            {template.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[10px] text-zinc-500 bg-zinc-50 border border-zinc-100 px-1.5 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mt-auto pt-2.5 border-t border-zinc-100">
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-extrabold text-zinc-900">₹{template.price}</span>
              {template.originalPrice && (
                <span className="text-xs text-zinc-400 line-through">₹{template.originalPrice}</span>
              )}
            </div>
            {template.originalPrice && (
              <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
                {Math.round((1 - template.price / template.originalPrice) * 100)}% OFF
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
