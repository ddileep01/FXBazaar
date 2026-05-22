"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, MessageCircle, CheckCircle, ArrowRight, Clock, Send } from "lucide-react";

const WHATSAPP_NUMBER = "918500656300";

const subjects = ["Template Support", "Custom Order Inquiry", "Payment Issue", "Collaboration", "Other"];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("https://formspree.io/f/mzdwrnbo", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-16 bg-[#F5F1E8]">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-md border-2 border-[#111] bg-[#DBEAFE] shadow-[4px_4px_0_#111] flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#2563EB]" />
          </div>
          <h1 className="text-3xl font-black mb-3 text-[#111]">Message Sent!</h1>
          <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
            Thanks for reaching out! We&apos;ll get back to you within <strong className="text-[#2563EB]">24 hours</strong>.
          </p>
          <Link href="/" className="neo-btn-yellow px-6 py-3 gap-2 text-sm">
            Back to Home <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 bg-[#F5F1E8] min-h-screen">
      {/* Page header */}
      <div className="border-b-2 border-[#111] bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="neo-badge inline-flex bg-[#DBEAFE] border-[#2563EB] text-[#2563EB] px-3 py-1.5 mb-4">Contact Us</div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#111] leading-tight mb-3">Get In Touch</h1>
          <p className="text-zinc-500 text-sm max-w-md">Have a question about a template? Want to discuss a custom project? We&apos;d love to hear from you.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { label: "Your Name", name: "name", type: "text", placeholder: "Full name" },
                  { label: "Email Address", name: "email", type: "email", placeholder: "you@email.com" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-xs font-black text-[#111] mb-1.5 uppercase tracking-wide">{f.label} *</label>
                    <input type={f.type} name={f.name} required
                      value={form[f.name as keyof typeof form]} onChange={handleChange}
                      placeholder={f.placeholder}
                      className="neo-input w-full px-4 py-3 text-sm placeholder-zinc-400" />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-black text-[#111] mb-1.5 uppercase tracking-wide">Subject *</label>
                <select name="subject" required value={form.subject} onChange={handleChange}
                  className="neo-input w-full px-4 py-3 text-sm text-[#111] cursor-pointer">
                  <option value="">Select a subject</option>
                  {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-black text-[#111] mb-1.5 uppercase tracking-wide">Message *</label>
                <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  className="neo-input w-full px-4 py-3 text-sm placeholder-zinc-400 resize-none" />
              </div>

              {error && (
                <p className="text-xs text-red-600 font-semibold text-center">
                  Something went wrong. Please try again or contact us on WhatsApp.
                </p>
              )}
              <button type="submit" disabled={loading} className="neo-btn-yellow w-full py-3.5 justify-center gap-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed">
                <Send className="w-4 h-4" />
                {loading ? "Sending…" : "Send Message"}
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Quick contact */}
            <div className="neo-card p-5">
              <h3 className="font-black text-sm text-[#111] mb-4 uppercase tracking-wide">Quick Contact</h3>
              <div className="space-y-3">
                <a href="mailto:dileep18052001@gmail.com"
                  className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-md border-2 border-[#111] bg-[#DBEAFE] flex items-center justify-center text-[#2563EB] flex-shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors shadow-[2px_2px_0_#111]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-zinc-500 group-hover:text-[#111] font-medium transition-colors">dileep18052001@gmail.com</span>
                </a>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-md border-2 border-[#111] bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] flex-shrink-0 group-hover:bg-[#16A34A] group-hover:text-white transition-colors shadow-[2px_2px_0_#111]">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-zinc-500 group-hover:text-[#111] font-medium transition-colors">WhatsApp (Fastest)</span>
                </a>
              </div>
            </div>

            {/* Response times */}
            <div className="neo-card p-5">
              <h3 className="font-black text-sm text-[#111] mb-4 uppercase tracking-wide flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#2563EB]" /> Response Times
              </h3>
              <div className="space-y-3">
                {[
                  { channel: "WhatsApp", time: "Within 1 hour", color: "text-[#16A34A]" },
                  { channel: "Email", time: "Within 24 hours", color: "text-[#2563EB]" },
                  { channel: "Custom Orders", time: "Within 2 hours", color: "text-[#2563EB]" },
                ].map((r) => (
                  <div key={r.channel} className="flex items-center justify-between py-2 border-b border-zinc-100 last:border-0">
                    <span className="text-xs text-zinc-500 font-medium">{r.channel}</span>
                    <span className={`text-xs font-black ${r.color}`}>{r.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct order */}
            <div className="neo-card p-5 bg-[#111]">
              <h3 className="font-black text-sm text-white mb-2">Need a Video Fast?</h3>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">For quick orders, WhatsApp is the fastest way to reach us and get started.</p>
              <Link href="/templates" className="neo-btn-yellow w-full py-2.5 justify-center gap-2 text-xs">
                Browse Templates <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
