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
    <div className="pt-16 bg-[#F5F1E8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link href="/templates" className="inline-flex items-center gap-2 text-sm font-bold text-[#111] hover:text-[#2563EB] mb-10 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Templates
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Left */}
          <div className="flex flex-col gap-5">
            {/* Preview */}
            <div className="neo-card aspect-video flex items-center justify-center bg-white relative overflow-hidden">
              <div className="text-center">
                <div className="w-20 h-20 rounded-md border-2 border-[#111] bg-[#DBEAFE] shadow-[4px_4px_0_#111] flex items-center justify-center mx-auto mb-4">
                  <Star className="w-10 h-10 text-[#2563EB]" />
                </div>
                <p className="text-zinc-400 text-sm font-semibold">Preview coming soon</p>
                <p className="text-zinc-300 text-xs mt-1">Order to get your personalised version</p>
              </div>
              {/* Badges */}
              <div className="absolute top-3 left-3 flex gap-2">
                {template.isBestseller && <span className="neo-badge bg-[#DBEAFE] border-[#2563EB] text-[#2563EB] px-2 py-0.5">Bestseller</span>}
                {template.isNew && <span className="neo-badge bg-[#111] text-white px-2 py-0.5">New</span>}
              </div>
            </div>

            {/* What we personalise */}
            <div className="neo-card p-5">
              <h3 className="font-black text-sm text-[#111] mb-4 uppercase tracking-wide">What We&apos;ll Personalise for You</h3>
              <ul className="space-y-2.5">
                {template.whatWeEdit.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-zinc-600">
                    <CheckCircle className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#111] mb-5 leading-tight">{template.title}</h1>

            {/* Metrics row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="flex items-center gap-1.5 border-2 border-[#111] bg-[#2563EB] px-3 py-1.5 rounded-md shadow-[2px_2px_0_#111]">
                <Star className="w-3.5 h-3.5 text-[#2563EB]" />
                <span className="text-xs font-black text-[#111]">{template.rating}</span>
              </div>
              <div className="border-2 border-[#111] bg-white px-3 py-1.5 rounded-md shadow-[2px_2px_0_#111] text-xs font-black text-[#111]">
                {template.orders} orders
              </div>
              <div className="flex items-center gap-1.5 border-2 border-[#2563EB] bg-[#2563EB] text-white px-3 py-1.5 rounded-md shadow-[2px_2px_0_#111] text-xs font-black">
                <Clock className="w-3.5 h-3.5" /> {template.deliveryTime}
              </div>
            </div>

            <p className="text-zinc-500 text-sm leading-relaxed mb-6 border-l-[3px] border-[#2563EB] pl-4">{template.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {template.tags.map((tag) => (
                <span key={tag} className="neo-badge bg-white px-2.5 py-1">#{tag}</span>
              ))}
            </div>

            {/* Order box */}
            <div className="neo-card p-6 bg-white">
              <div className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-1">Pricing</div>
              <div className="text-lg font-black text-[#111] mb-1">Based on complexity</div>
              <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
                We send a fair quote on WhatsApp after reviewing your requirements. Pay only after approval.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <OrderButton template={template} />
                <Link href="/contact"
                  className="neo-btn-outline flex-shrink-0 flex items-center justify-center gap-2 px-5 py-3.5 text-sm">
                  <MessageCircle className="w-4 h-4" /> Ask a Question
                </Link>
              </div>
              <p className="text-xs text-zinc-400 mt-4 flex items-center gap-1.5">
                <Clock className="w-3 h-3" /> Delivered within {template.deliveryTime} of confirmation
              </p>
            </div>
          </div>
        </div>

        {/* More Templates */}
        {related.length > 0 && (
          <div className="border-t-2 border-[#111] pt-14">
            <h2 className="text-2xl font-black text-[#111] mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((t) => <TemplateCard key={t.id} template={t} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
