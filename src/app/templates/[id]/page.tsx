import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Star, CheckCircle, Download, Layers, MessageCircle, ShoppingCart } from "lucide-react";
import { templates } from "@/lib/data";
import TemplateCard from "@/components/TemplateCard";

interface Props {
  params: Promise<{ id: string }>;
}

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

export async function generateStaticParams() {
  return templates.map((t) => ({ id: t.id }));
}

export default async function TemplateDetailPage({ params }: Props) {
  const { id } = await params;
  const template = templates.find((t) => t.id === id);

  if (!template) notFound();

  const related = templates
    .filter((t) => t.category === template.category && t.id !== template.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <Link
        href="/templates"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-violet-600 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Templates
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Preview */}
        <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-violet-50 to-cyan-50 aspect-video flex items-center justify-center border border-violet-100">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-violet-100 flex items-center justify-center mx-auto mb-4">
              <Layers className="w-9 h-9 text-violet-500" />
            </div>
            <p className="text-zinc-400 text-sm">Preview coming soon</p>
          </div>
        </div>

        {/* Info */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md ${categoryColors[template.category]}`}>
              {categoryIcons[template.category] && (
                <Image src={categoryIcons[template.category]} alt={template.category} width={14} height={14} className="w-3.5 h-3.5 object-contain" />
              )}
              {template.category}
            </span>
            {template.isBestseller && (
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white">BESTSELLER</span>
            )}
            {template.isNew && (
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500 text-white">NEW</span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold mb-3 leading-tight text-zinc-900">{template.title}</h1>

          <div className="flex items-center gap-4 mb-5">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(template.rating) ? "text-yellow-400 fill-yellow-400" : "text-zinc-300"}`}
                />
              ))}
              <span className="text-sm text-zinc-500 ml-1">{template.rating}</span>
            </div>
            <span className="text-zinc-300 text-sm">•</span>
            <span className="text-sm text-zinc-500">{template.sales} sales</span>
          </div>

          <p className="text-zinc-500 text-sm leading-relaxed mb-6">{template.description}</p>

          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-3 text-zinc-700">What&apos;s Included</h3>
            <ul className="space-y-2">
              {template.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-zinc-600">
                  <CheckCircle className="w-4 h-4 text-violet-500 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {template.tags.map((tag) => (
              <span key={tag} className="text-xs text-zinc-500 bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-md">
                #{tag}
              </span>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-violet-50/60 border border-violet-100 mb-5">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl font-extrabold text-zinc-900">₹{template.price * 83}</span>
              {template.originalPrice && (
                <>
                  <span className="text-lg text-zinc-400 line-through">₹{template.originalPrice * 83}</span>
                  <span className="text-sm text-emerald-600 font-semibold bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded">
                    {Math.round((1 - template.price / template.originalPrice) * 100)}% OFF
                  </span>
                </>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-violet-500/25"
              >
                <ShoppingCart className="w-4 h-4" />
                Buy Now — ₹{template.price * 83}
              </Link>
              <Link
                href="/custom-order"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-violet-200 hover:border-violet-400 hover:bg-violet-50 text-zinc-600 hover:text-violet-700 font-medium text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Customize
              </Link>
            </div>
            <div className="flex items-center gap-2 mt-3 text-xs text-zinc-400">
              <Download className="w-3.5 h-3.5" />
              Instant delivery after payment confirmation
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div>
          <h2 className="text-lg font-bold mb-5 text-zinc-900">More {template.category} Templates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((t) => (
              <TemplateCard key={t.id} template={t} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
