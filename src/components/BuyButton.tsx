"use client";
import { useState } from "react";
import { ShoppingCart, X, MessageCircle, QrCode, Copy, Check, Zap } from "lucide-react";
import type { VNTemplate } from "@/lib/data";

const WHATSAPP_NUMBER = "8500656300";
const UPI_ID = "8500656300@pthdfc";

export default function BuyButton({ template }: { template: VNTemplate }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const whatsappMsg = encodeURIComponent(
    `Hi! I want to buy the VN template:\n\n*${template.title}* — ₹${template.price}\n\nPlease share payment details and QR code after confirmation.`
  );

  const copyUPI = async () => {
    await navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 text-white font-bold text-sm transition-all hover:shadow-lg hover:shadow-violet-500/25"
      >
        <ShoppingCart className="w-4 h-4" />
        Buy Now — ₹{template.price}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="bg-white rounded-t-3xl sm:rounded-2xl w-full sm:max-w-sm shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                  <QrCode className="w-4 h-4 text-violet-600" />
                </div>
                <span className="font-bold text-zinc-900 text-sm">Complete Purchase</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-zinc-200 transition-colors"
              >
                <X className="w-4 h-4 text-zinc-500" />
              </button>
            </div>

            <div className="p-5 space-y-4">
              {/* Template info */}
              <div className="p-3.5 rounded-xl bg-violet-50 border border-violet-100">
                <div className="text-xs text-zinc-500 mb-0.5">Template</div>
                <div className="font-semibold text-zinc-800 text-sm leading-snug">{template.title}</div>
                <div className="flex items-baseline gap-2 mt-1.5">
                  <span className="text-2xl font-extrabold text-violet-600">₹{template.price}</span>
                  {template.originalPrice && (
                    <span className="text-sm text-zinc-400 line-through">₹{template.originalPrice}</span>
                  )}
                </div>
              </div>

              {/* UPI payment */}
              <div>
                <div className="text-xs font-semibold text-zinc-500 mb-2 uppercase tracking-wide">Pay via UPI</div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-zinc-200">
                  <span className="text-sm font-mono text-zinc-800 flex-1">{UPI_ID}</span>
                  <button
                    onClick={copyUPI}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-violet-50 hover:bg-violet-100 text-violet-600 text-xs font-semibold transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-zinc-100" />
                <span className="text-xs text-zinc-400 font-medium">OR</span>
                <div className="flex-1 h-px bg-zinc-100" />
              </div>

              {/* WhatsApp button */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Order via WhatsApp
              </a>

              {/* Info */}
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-amber-50 border border-amber-100">
                <Zap className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800 leading-relaxed">
                  After payment, share your <strong>UPI transaction ID</strong> on WhatsApp. Your VN template QR code will be sent within <strong>15 minutes</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
