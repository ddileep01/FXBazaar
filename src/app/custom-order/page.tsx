"use client";
import { useState } from "react";
import Link from "next/link";
import { CheckCircle, Clock, MessageCircle, Zap, ArrowRight, Send } from "lucide-react";

const WHATSAPP_NUMBER = "918500656300";

const steps = [
  { n: "01", title: "Describe Your Idea", desc: "Fill out the form with what you have in mind — occasion, style, and any references." },
  { n: "02", title: "Get a Quote",        desc: "We review your requirements and send a price quote on WhatsApp within 2 hours." },
  { n: "03", title: "We Create It",       desc: "Once you confirm, we start building your custom video from scratch." },
  { n: "04", title: "Receive & Pay",      desc: "You receive the finished video on WhatsApp. Approve it, pay, and it's yours!" },
];

export default function CustomOrderPage() {
  const [form, setForm] = useState({ name: "", whatsapp: "", description: "", deadline: "", references: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi! I want a custom video:\n\n*Name:* ${form.name}\n*My WhatsApp:* ${form.whatsapp}\n\n*What I Need:*\n${form.description}\n\n` +
      (form.deadline ? `*Deadline:* ${form.deadline}\n\n` : "") +
      (form.references ? `*References:* ${form.references}\n\n` : "") +
      `Please share a quote!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-indigo-400" />
          </div>
          <h1 className="text-3xl font-black mb-3 text-white">WhatsApp Opened!</h1>
          <p className="text-white/50 text-sm mb-8 leading-relaxed">
            Your request is pre-filled. Send the message and we&apos;ll get back with a quote within <strong className="text-indigo-400">2 hours</strong>.
          </p>
          <Link href="/" className="neo-btn-yellow px-6 py-3 gap-2 text-sm">
            Back to Home <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="neo-badge inline-flex items-center gap-1.5 px-3 py-1.5 mb-4">
            <Zap className="w-3 h-3" /> Custom Video Service
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-3">Order a Custom Video</h1>
          <p className="text-white/50 text-sm max-w-lg">Don&apos;t see what you need in our templates? Tell us your idea and we&apos;ll create a completely custom video for you — any occasion, any style.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Process Steps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {steps.map((p, idx) => (
            <div key={p.n} className="flex flex-col">
              <div className="relative h-12 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-black text-base relative z-10">
                  {p.n}
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[23px] border-t border-dashed border-white/20" style={{ left: "52px", right: "-20px" }} />
                )}
              </div>
              <div className="neo-card p-4 flex-1">
                <h3 className="text-sm font-bold mb-1 text-white">{p.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-white/65 mb-1.5 uppercase tracking-wide">Your Name *</label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange}
                    placeholder="Full name" className="neo-input w-full px-4 py-3 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-white/65 mb-1.5 uppercase tracking-wide">WhatsApp Number *</label>
                  <input type="tel" name="whatsapp" required value={form.whatsapp} onChange={handleChange}
                    placeholder="e.g. 9876543210" className="neo-input w-full px-4 py-3 text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-white/65 mb-1.5 uppercase tracking-wide">Describe Your Video *</label>
                <textarea name="description" required rows={5} value={form.description} onChange={handleChange}
                  placeholder="What type of video? What occasion? What mood, style, colors? The more detail, the better."
                  className="neo-input w-full px-4 py-3 text-sm resize-none" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-white/65 mb-1.5 uppercase tracking-wide">Deadline <span className="text-white/30 font-normal normal-case">(optional)</span></label>
                  <input type="text" name="deadline" value={form.deadline} onChange={handleChange}
                    placeholder="e.g. Within 3 days" className="neo-input w-full px-4 py-3 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-white/65 mb-1.5 uppercase tracking-wide">References <span className="text-white/30 font-normal normal-case">(optional)</span></label>
                  <input type="text" name="references" value={form.references} onChange={handleChange}
                    placeholder="YouTube, Instagram links..." className="neo-input w-full px-4 py-3 text-sm" />
                </div>
              </div>

              <button type="submit" className="neo-btn-yellow w-full py-3.5 justify-center gap-2 text-sm">
                <Send className="w-4 h-4" /> Send Request on WhatsApp
              </button>
              <p className="text-xs text-white/35 text-center font-medium">We&apos;ll review and share a fair quote. Pay only after you approve the video.</p>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="neo-card p-5" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.18), rgba(139,92,246,0.12))" }}>
              <h3 className="font-bold text-sm text-white mb-4 uppercase tracking-wide">What&apos;s Included</h3>
              <ul className="space-y-2.5">
                {["Unlimited revisions until approved", "High quality video export", "Delivered via WhatsApp", "Quick turnaround", "Dedicated support"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-xs text-white/65">
                    <CheckCircle className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="neo-card p-5">
              <h3 className="font-bold text-sm text-white mb-3 flex items-center gap-2 uppercase tracking-wide">
                <Clock className="w-4 h-4 text-indigo-400" /> Response Time
              </h3>
              <p className="text-xs text-white/50 leading-relaxed">
                We respond to all custom requests within <strong className="text-white">2 hours</strong> during business hours. Pricing is based on complexity — we&apos;ll share a fair quote.
              </p>
            </div>

            <div className="neo-card p-5">
              <h3 className="font-bold text-sm text-white mb-3 flex items-center gap-2 uppercase tracking-wide">
                <MessageCircle className="w-4 h-4 text-green-400" /> Direct WhatsApp
              </h3>
              <p className="text-xs text-white/50 mb-4">Prefer to chat directly? Message us now.</p>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
                className="neo-btn-dark w-full py-2.5 justify-center gap-2 text-xs">
                <MessageCircle className="w-3.5 h-3.5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
