import Link from "next/link";
import { Star, Clock, ArrowUpRight } from "lucide-react";
import type { VideoTemplate } from "@/lib/data";

export default function TemplateCard({ template }: { template: VideoTemplate }) {
  return (
    <Link href={`/templates/${template.id}`} className="group block">
      <div className="neo-card neo-card-hover h-full flex flex-col overflow-hidden">
        {/* Thumbnail */}
        <div className="relative aspect-video bg-[#F5F1E8] border-b-2 border-[#111] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-md border-2 border-[#111] bg-white flex items-center justify-center shadow-[3px_3px_0_#111] group-hover:shadow-[1px_1px_0_#111] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-100">
              <Star className="w-6 h-6 text-[#2563EB]" />
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
            {template.isBestseller && (
              <span className="neo-badge bg-[#DBEAFE] border-[#2563EB] text-[#2563EB] px-2 py-0.5">Bestseller</span>
            )}
            {template.isNew && (
              <span className="neo-badge bg-[#111] text-white px-2 py-0.5">New</span>
            )}
          </div>

          {/* Delivery time */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1 border-2 border-[#111] bg-white text-[10px] font-bold px-2 py-1 rounded-md shadow-[2px_2px_0_#111]">
            <Clock className="w-2.5 h-2.5" />
            {template.deliveryTime}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-2">
            <Star className="w-3 h-3 text-[#2563EB] fill-[#2563EB]" />
            <span className="text-xs font-bold text-[#111]">{template.rating}</span>
            <span className="text-xs text-zinc-400">({template.orders} orders)</span>
          </div>

          {/* Title */}
          <h3 className="text-sm font-black text-[#111] leading-snug mb-2 group-hover:text-[#2563EB] transition-colors line-clamp-2 flex-1">
            {template.title}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-3">
            {template.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[10px] font-semibold text-zinc-500 bg-[#F5F1E8] border border-[#ddd] px-1.5 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto pt-3 border-t-2 border-[#111] flex items-center justify-between">
            <span className="text-xs font-black text-[#2563EB] uppercase tracking-wide">Get Quote</span>
            <div className="w-7 h-7 rounded-md border-2 border-[#111] bg-[#F5F1E8] flex items-center justify-center shadow-[2px_2px_0_#111] group-hover:shadow-[1px_1px_0_#111] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-100">
              <ArrowUpRight className="w-3.5 h-3.5 text-[#111]" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
