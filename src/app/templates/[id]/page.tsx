import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Star,
  CheckCircle,
  Film,
  QrCode,
  Lock,
  Smartphone,
  MessageCircle,
  Clock,
} from "lucide-react";
import { vnTemplates, categoryMeta } from "@/lib/data";
import CategoryIcon from "@/components/CategoryIcon";
import TemplateCard from "@/components/TemplateCard";
import BuyButton from "@/components/BuyButton";

interface Props {
  params: Promise<{ id: string }>;
}

const vnSteps = [
  { num: "1", text: "Open VN app on your phone" },
  { num: "2", text: 'Tap the "+" button to create a new project' },
  { num: "3", text: 'Select "QR Code" from the options' },
  { num: "4", text: "Scan the QR code you received" },
  { num: "5", text: "Add your footage to the clip slots" },
  { num: "6", text: "Export and post your viral reel!" },
];

export async function generateStaticParams() {
  return vnTemplates.map((t) => ({ id: t.id }));
}

export default async function TemplateDetailPage({ params }: Props) {
  const { id } = await params;
  const template = vnTemplates.find((t) => t.id === id);

  if (!template) notFound();

  const meta = categoryMeta[template.videoCategory];

  const related = vnTemplates
    .filter((t) => t.videoCategory === template.videoCategory && t.id !== template.id)
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
        {/* Left — Preview + QR locked */}
        <div className="flex flex-col gap-4">
          {/* Preview card */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-violet-50 via-fuchsia-50 to-cyan-50 aspect-video flex items-center justify-center border border-violet-100 relative">
            <div className="text-center">
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 ${meta.bg}`}>
                <CategoryIcon category={template.videoCategory} className={`w-10 h-10 ${meta.color}`} />
              </div>
              <p className="text-zinc-400 text-sm font-medium">{template.title}</p>
              <p className="text-zinc-300 text-xs mt-1">{template.duration} · {template.clipCount} clips</p>
            </div>
          </div>

          {/* QR locked card */}
          <div className="rounded-2xl bg-white border border-violet-100 p-5 flex items-center gap-5 shadow-sm">
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 rounded-xl bg-white border-2 border-violet-100 p-2 relative overflow-hidden">
                <QrCode className="w-full h-full text-zinc-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-[2px]">
                  <Lock className="w-6 h-6 text-violet-500 mb-1" />
                </div>
              </div>
            </div>
            <div>
              <div className="font-bold text-sm text-zinc-900 mb-1">Your VN QR Code</div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Purchase to unlock your unique QR code. Scan it in the VN app to load this template instantly.
              </p>
              <div className="flex items-center gap-1.5 mt-2 text-xs text-emerald-600 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                Delivered within 15 minutes
              </div>
            </div>
          </div>
        </div>

        {/* Right — Info + Buy */}
        <div>
          {/* Badges */}
          <div className="flex items-center gap-2 flex-wrap mb-3">
            <span className={`flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg border ${meta.color} ${meta.bg}`}>
              <CategoryIcon category={template.videoCategory} className="w-3.5 h-3.5" />
              {template.videoCategory}
            </span>
            {template.isBestseller && (
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white">
                BESTSELLER
              </span>
            )}
            {template.isNew && (
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500 text-white">
                NEW
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold mb-3 leading-tight text-zinc-900">
            {template.title}
          </h1>

          {/* Rating + stats */}
          <div className="flex items-center gap-4 mb-5">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(template.rating) ? "text-yellow-400 fill-yellow-400" : "text-zinc-200"}`}
                />
              ))}
              <span className="text-sm text-zinc-500 ml-1">{template.rating}</span>
            </div>
            <span className="text-zinc-200 text-sm">·</span>
            <span className="text-sm text-zinc-500">{template.sales} purchases</span>
            <span className="text-zinc-200 text-sm">·</span>
            <span className="text-sm text-zinc-500">{template.clipCount} clips · {template.duration}</span>
          </div>

          <p className="text-zinc-500 text-sm leading-relaxed mb-5">{template.description}</p>

          {/* Features */}
          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3 text-zinc-700">What&apos;s Included</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {template.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-zinc-600">
                  <CheckCircle className="w-3.5 h-3.5 text-violet-500 flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {template.tags.map((tag) => (
              <span key={tag} className="text-xs text-zinc-500 bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-lg">
                #{tag}
              </span>
            ))}
          </div>

          {/* Price + Buy */}
          <div className="p-5 rounded-2xl bg-violet-50/60 border border-violet-100 mb-5">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl font-extrabold text-zinc-900">₹{template.price}</span>
              {template.originalPrice && (
                <>
                  <span className="text-lg text-zinc-400 line-through">₹{template.originalPrice}</span>
                  <span className="text-sm text-emerald-600 font-bold bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-lg">
                    {Math.round((1 - template.price / template.originalPrice) * 100)}% OFF
                  </span>
                </>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <BuyButton template={template} />
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-violet-200 hover:border-violet-400 hover:bg-violet-50 text-zinc-600 hover:text-violet-700 font-medium text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Ask a Question
              </Link>
            </div>

            <p className="text-xs text-zinc-400 mt-3 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              QR code delivered on WhatsApp within 15 minutes of payment
            </p>
          </div>

          {/* VN app badge */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-zinc-200">
            <Image src="/vn_logo.jpg" alt="VN App" width={36} height={36} className="w-9 h-9 rounded-lg flex-shrink-0" />
            <div className="text-xs text-zinc-600">
              <span className="font-semibold text-zinc-800">Works with VN Video Editor</span> — free app on iOS & Android
            </div>
          </div>
        </div>
      </div>

      {/* How to use VN QR code */}
      <div className="mb-16 p-6 rounded-2xl bg-white border border-violet-100 shadow-sm">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 rounded-xl bg-violet-100 flex items-center justify-center">
            <Smartphone className="w-4 h-4 text-violet-600" />
          </div>
          <h2 className="text-base font-bold text-zinc-900">How to Use Your VN QR Code</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {vnSteps.map((step) => (
            <div key={step.num} className="flex items-start gap-3 p-3 rounded-xl bg-violet-50/50 border border-violet-100">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0">
                {step.num}
              </div>
              <span className="text-sm text-zinc-700">{step.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Related templates */}
      {related.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-5">
            <CategoryIcon category={template.videoCategory} className={`w-5 h-5 ${meta.color}`} />
            <h2 className="text-lg font-bold text-zinc-900">More {template.videoCategory} Templates</h2>
          </div>
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
