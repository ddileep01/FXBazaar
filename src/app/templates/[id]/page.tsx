import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Star, CheckCircle, Clock, MessageCircle } from "lucide-react";
import { videoTemplates } from "@/lib/data";
import TemplateCard from "@/components/TemplateCard";
import OrderButton from "@/components/OrderButton";

interface Props { params: Promise<{ id: string }>; }

export async function generateStaticParams() {
  return videoTemplates.map((t) => ({ id: t.id }));
}

export default async function TemplateDetailPage({ params }: Props) {
  const { id } = await params;
  const template = videoTemplates.find((t) => t.id === id);
  if (!template) notFound();

  const related = videoTemplates.filter((t) => t.id !== template.id).slice(0, 4);

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link href="/templates" className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-indigo-300 mb-10 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Templates
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Left */}
          <div className="flex flex-col gap-5">
            {/* Preview */}
            <div className="neo-card aspect-video flex items-center justify-center relative overflow-hidden rounded-2xl" style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.25) 0%, rgba(139,92,246,0.18) 50%, rgba(244,114,182,0.12) 100%)"
            }}>
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <Star className="w-10 h-10 text-indigo-400" />
                </div>
                <p className="text-white/50 text-sm font-medium">Preview coming soon</p>
                <p className="text-white/30 text-xs mt-1">Order to get your personalised version</p>
              </div>
              {/* Badges */}
              <div className="absolute top-3 left-3 flex gap-2">
                {template.isBestseller && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 uppercase tracking-wide">Bestseller</span>
                )}
                {template.isNew && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 uppercase tracking-wide">New</span>
                )}
              </div>
            </div>

            {/* What we personalise */}
            <div className="neo-card p-5">
              <h3 className="font-bold text-sm text-white mb-4 uppercase tracking-wide">What We&apos;ll Personalise for You</h3>
              <ul className="space-y-2.5">
                {template.whatWeEdit.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/65">
                    <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">{template.title}</h1>

            {/* Metrics row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="flex items-center gap-1.5 bg-amber-400/15 border border-amber-400/30 px-3 py-1.5 rounded-lg">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="text-xs font-bold text-amber-300">{template.rating}</span>
              </div>
              <div className="bg-white/6 border border-white/12 px-3 py-1.5 rounded-lg text-xs font-medium text-white/55">
                {template.orders} orders
              </div>
              <div className="flex items-center gap-1.5 bg-indigo-500/15 border border-indigo-500/30 px-3 py-1.5 rounded-lg text-xs font-bold text-indigo-300">
                <Clock className="w-3.5 h-3.5" /> {template.deliveryTime}
              </div>
            </div>

            <p className="text-white/55 text-sm leading-relaxed mb-6 border-l-[2px] border-indigo-500 pl-4">{template.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {template.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium text-white/40 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">#{tag}</span>
              ))}
            </div>

            {/* Order box */}
            <div className="neo-card p-6">
              <div className="text-xs font-bold text-white/35 uppercase tracking-widest mb-1">Pricing</div>
              <div className="text-lg font-black text-white mb-1">Based on complexity</div>
              <p className="text-xs text-white/40 mb-5 leading-relaxed">
                We send a fair quote on WhatsApp after reviewing your requirements. Pay only after approval.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <OrderButton template={template} />
                <Link href="/contact"
                  className="neo-btn-outline flex-shrink-0 flex items-center justify-center gap-2 px-5 py-3.5 text-sm">
                  <MessageCircle className="w-4 h-4" /> Ask a Question
                </Link>
              </div>
              <p className="text-xs text-white/35 mt-4 flex items-center gap-1.5">
                <Clock className="w-3 h-3" /> Delivered within {template.deliveryTime} of confirmation
              </p>
            </div>
          </div>
        </div>

        {/* More Templates */}
        {related.length > 0 && (
          <div className="border-t border-white/10 pt-14">
            <h2 className="text-2xl font-black text-white mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((t) => <TemplateCard key={t.id} template={t} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
