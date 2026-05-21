"use client";
import { useState } from "react";
import { ShoppingCart, X, MessageCircle, Copy, Check, Zap } from "lucide-react";
import type { VideoTemplate } from "@/lib/data";

const WHATSAPP_NUMBER = "8500656300";
const UPI_ID = "8500656300@pthdfc";

export default function BuyButton({ template }: { template: VideoTemplate }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const whatsappMsg = encodeURIComponent(
    `Hi! I want to order the video: *${template.title}*\n\nPlease share details and quote.`
  );

  const copyUPI = async () => {
    await navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}
        className="neo-btn-yellow flex-1 flex items-center justify-center gap-2 px-5 py-3.5 text-sm">
        <ShoppingCart className="w-4 h-4" /> Order Now
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
          <div className="bg-white border-2 border-[#111] shadow-[6px_6px_0_#111] rounded-lg w-full sm:max-w-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b-2 border-[#111]">
              <span className="font-black text-[#111] text-sm">Complete Purchase</span>
              <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-md border-2 border-[#111] flex items-center justify-center">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5 space-y-4">
              <div className="p-3.5 rounded-md border-2 border-[#111] bg-[#DBEAFE] shadow-[2px_2px_0_#111]">
                <div className="font-black text-[#111] text-sm">{template.title}</div>
                <div className="text-xs text-[#2563EB] font-bold mt-1">Quote sent on WhatsApp</div>
              </div>
              <div>
                <div className="text-xs font-black text-[#111] mb-2 uppercase tracking-wide">Pay via UPI</div>
                <div className="flex items-center gap-2 p-3 rounded-md border-2 border-[#111]">
                  <span className="text-sm font-mono text-[#111] flex-1">{UPI_ID}</span>
                  <button onClick={copyUPI} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded neo-btn-yellow text-xs">
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer"
                className="neo-btn-dark w-full py-3.5 justify-center gap-2 text-sm">
                <MessageCircle className="w-4 h-4" /> Order via WhatsApp
              </a>
              <div className="flex items-start gap-2.5 p-3.5 rounded-md border-2 border-[#111] bg-[#F5F1E8]">
                <Zap className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-zinc-600 leading-relaxed">
                  After payment, share your <strong>UPI transaction ID</strong> on WhatsApp. QR code sent within <strong>15 minutes</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
