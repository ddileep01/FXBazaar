"use client";
import { useState } from "react";
import { ShoppingBag, X, MessageCircle, Send } from "lucide-react";
import type { VideoTemplate } from "@/lib/data";

const WHATSAPP_NUMBER = "918500656300";

export default function OrderButton({ template }: { template: VideoTemplate }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", whatsapp: "", details: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi! I want to order a video:\n\n*Template:* ${template.title}\n\n*My Name:* ${form.name}\n*My WhatsApp:* ${form.whatsapp}\n\n*My Details:*\n${form.details}\n\n` +
      (form.notes ? `*Special Notes:* ${form.notes}\n\n` : "") +
      `Please confirm and share a quote!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const close = () => { setOpen(false); setSubmitted(false); setForm({ name: "", whatsapp: "", details: "", notes: "" }); };

  const detailsPlaceholder = template.whatWeEdit.map((item) => `${item}: `).join("\n");

  return (
    <>
      <button onClick={() => setOpen(true)}
        className="neo-btn-yellow flex-1 flex items-center justify-center gap-2 px-5 py-3.5 text-sm">
        <ShoppingBag className="w-4 h-4" /> Order This Video
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70"
          onClick={(e) => e.target === e.currentTarget && close()}>
          <div className="bg-white border-2 border-[#111] shadow-[6px_6px_0_#111] rounded-lg w-full sm:max-w-md max-h-[92vh] flex flex-col overflow-hidden">

            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b-2 border-[#111] flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-md border-2 border-[#111] bg-[#2563EB] flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4 text-[#111]" />
                </div>
                <span className="font-black text-[#111] text-sm">Place Your Order</span>
              </div>
              <button onClick={close} className="w-8 h-8 rounded-md border-2 border-[#111] flex items-center justify-center hover:bg-[#F5F1E8] transition-colors">
                <X className="w-4 h-4 text-[#111]" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 p-5 space-y-4">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-md border-2 border-[#111] bg-[#2563EB] shadow-[3px_3px_0_#111] flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-[#111]" />
                  </div>
                  <h3 className="font-black text-[#111] mb-2">WhatsApp Opened!</h3>
                  <p className="text-sm text-zinc-500 mb-5">Send the message and we&apos;ll confirm and share a quote within minutes.</p>
                  <button onClick={close} className="neo-btn-outline px-6 py-2.5 text-sm">Close</button>
                </div>
              ) : (
                <>
                  {/* Template summary */}
                  <div className="p-3.5 rounded-md border-2 border-[#111] bg-[#F5F1E8] shadow-[2px_2px_0_#111]">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-0.5">Ordering</div>
                    <div className="font-black text-[#111] text-sm">{template.title}</div>
                    <div className="text-xs text-[#2563EB] font-bold mt-1">Delivery: {template.deliveryTime} · Quote on WhatsApp</div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { label: "Your Name", name: "name", type: "text", placeholder: "Enter your name", required: true },
                      { label: "Your WhatsApp", name: "whatsapp", type: "tel", placeholder: "e.g. 9876543210", required: true },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-xs font-black text-[#111] mb-1.5 uppercase tracking-wide">{field.label} {field.required && "*"}</label>
                        <input type={field.type} name={field.name} required={field.required}
                          value={form[field.name as keyof typeof form]} onChange={handleChange}
                          placeholder={field.placeholder}
                          className="neo-input w-full px-3.5 py-2.5 text-sm placeholder-zinc-400" />
                      </div>
                    ))}

                    <div>
                      <label className="block text-xs font-black text-[#111] mb-1.5 uppercase tracking-wide">Your Details *</label>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {template.whatWeEdit.map((item) => (
                          <span key={item} className="text-[10px] bg-[#DBEAFE] border border-[#2563EB] text-[#2563EB] px-2 py-0.5 rounded font-bold">{item}</span>
                        ))}
                      </div>
                      <textarea name="details" required rows={5} value={form.details} onChange={handleChange}
                        placeholder={detailsPlaceholder}
                        className="neo-input w-full px-3.5 py-2.5 text-xs font-mono placeholder-zinc-400 resize-none" />
                    </div>

                    <div>
                      <label className="block text-xs font-black text-[#111] mb-1.5 uppercase tracking-wide">Special Notes <span className="text-zinc-400 normal-case font-normal">(optional)</span></label>
                      <textarea name="notes" rows={2} value={form.notes} onChange={handleChange}
                        placeholder="Font, color, music, style preferences..."
                        className="neo-input w-full px-3.5 py-2.5 text-sm placeholder-zinc-400 resize-none" />
                    </div>

                    <button type="submit" className="neo-btn-yellow w-full py-3.5 justify-center gap-2 text-sm">
                      <Send className="w-4 h-4" /> Send Order on WhatsApp
                    </button>

                    <p className="text-[11px] text-zinc-400 text-center font-medium">
                      We&apos;ll confirm and quote on WhatsApp. Pay only after you approve the video.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
