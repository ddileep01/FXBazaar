import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingCart, Layers } from "lucide-react";
import type { Template } from "@/lib/data";

const categoryColors: Record<string, string> = {
  "After Effects": "text-blue-600 bg-blue-50",
  "Premiere Pro": "text-violet-600 bg-violet-50",
  "VN Mobile": "text-emerald-600 bg-emerald-50",
  CapCut: "text-pink-600 bg-pink-50",
};

const categoryIcons: Record<string, string> = {
  "After Effects": "/Adobe_After_Effects_CC_2026_icon.svg.png",
  "Premiere Pro": "/Adobe_Premiere_Pro_CC_icon.svg.png",
  "VN Mobile": "/vn_logo.jpg",
  CapCut: "/capcut-logo-on-transparent-white-background-free-vector.jpg",
};

export default function TemplateCard({ template }: { template: Template }) {
  return (
    <Link href={`/templates/${template.id}`} className="group block">
      <div className="rounded-xl overflow-hidden bg-white card-border transition-all duration-300 h-full flex flex-col shadow-sm">
        <div className="relative aspect-video bg-gradient-to-br from-violet-50 to-cyan-50 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-violet-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Layers className="w-7 h-7 text-violet-500" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-60" />

          <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
            {template.isBestseller && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white">
                BESTSELLER
              </span>
            )}
            {template.isNew && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-white">
                NEW
              </span>
            )}
          </div>

          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-1.5 bg-gradient-to-r from-violet-600 to-cyan-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg">
              <ShoppingCart className="w-3 h-3" />
              Get Template
            </div>
          </div>
        </div>

        <div className="p-4 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className={`flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md ${categoryColors[template.category]}`}>
              {categoryIcons[template.category] && (
                <Image src={categoryIcons[template.category]} alt={template.category} width={12} height={12} className="w-3 h-3 object-contain" />
              )}
              {template.category}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <span className="text-xs text-zinc-500">{template.rating}</span>
              <span className="text-xs text-zinc-400">({template.sales})</span>
            </div>
          </div>

          <h3 className="text-sm font-semibold text-zinc-900 leading-snug mb-1 group-hover:text-violet-600 transition-colors line-clamp-2 flex-1">
            {template.title}
          </h3>

          <div className="flex flex-wrap gap-1 my-2">
            {template.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[10px] text-zinc-500 bg-zinc-50 border border-zinc-100 px-1.5 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between mt-auto pt-2 border-t border-zinc-100">
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-bold text-zinc-900">₹{template.price * 83}</span>
              {template.originalPrice && (
                <span className="text-xs text-zinc-400 line-through">₹{template.originalPrice * 83}</span>
              )}
            </div>
            {template.originalPrice && (
              <span className="text-xs text-emerald-600 font-semibold">
                {Math.round((1 - template.price / template.originalPrice) * 100)}% OFF
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
