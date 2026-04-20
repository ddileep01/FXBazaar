"use client";
import { useState } from "react";
import { Mail, MessageCircle, Star, Tv, CheckCircle, ArrowRight, Clock } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-5">
            <CheckCircle className="w-8 h-8 text-emerald-500" />
          </div>
          <h1 className="text-2xl font-extrabold mb-3 text-zinc-900">Message Sent!</h1>
          <p className="text-zinc-500 text-sm mb-6">
            Thanks for reaching out! We&apos;ll get back to you within <strong className="text-violet-600">24 hours</strong>.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 text-white font-semibold text-sm transition-all"
          >
            Back to Home <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <div className="max-w-xl mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 text-zinc-900">Get In Touch</h1>
        <p className="text-zinc-500 text-sm leading-relaxed">
          Have a question about a template? Want to discuss a custom project? Or just want to say hi? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-zinc-600 mb-1.5">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-100 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-600 mb-1.5">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-100 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-600 mb-1.5">Subject *</label>
              <select
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-200 text-sm text-zinc-700 focus:outline-none focus:border-violet-400 transition-colors cursor-pointer"
              >
                <option value="">Select a subject</option>
                <option value="template-support">Template Support</option>
                <option value="custom-order">Custom Order Inquiry</option>
                <option value="payment">Payment Issue</option>
                <option value="collaboration">Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-600 mb-1.5">Message *</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-100 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-violet-500/25 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Sidebar */}
        <div className="space-y-5">
          <div className="p-5 rounded-xl bg-white border border-violet-100 shadow-sm">
            <h3 className="font-semibold text-sm mb-4 text-zinc-900">Quick Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@fxbazaar.com"
                className="flex items-center gap-3 text-sm text-zinc-500 hover:text-zinc-900 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-100 transition-colors border border-violet-100">
                  <Mail className="w-4 h-4" />
                </div>
                contact@fxbazaar.com
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-sm text-zinc-500 hover:text-zinc-900 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors border border-emerald-100">
                  <MessageCircle className="w-4 h-4" />
                </div>
                WhatsApp (Fastest)
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-sm text-zinc-500 hover:text-zinc-900 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-100 transition-colors border border-pink-100">
                  <Star className="w-4 h-4" />
                </div>
                @fxbazaar
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-sm text-zinc-500 hover:text-zinc-900 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-100 transition-colors border border-cyan-100">
                  <Tv className="w-4 h-4" />
                </div>
                FXBazaar on YouTube
              </a>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-violet-100 shadow-sm">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2 text-zinc-900">
              <Clock className="w-4 h-4 text-cyan-500" /> Response Times
            </h3>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li className="flex justify-between">
                <span>WhatsApp</span>
                <span className="text-emerald-600 font-medium">Within 1 hour</span>
              </li>
              <li className="flex justify-between">
                <span>Email</span>
                <span className="text-yellow-500 font-medium">Within 24 hours</span>
              </li>
              <li className="flex justify-between">
                <span>Custom Orders</span>
                <span className="text-violet-600 font-medium">Within 2 hours</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-violet-50 border border-violet-200">
            <h3 className="font-semibold text-sm mb-2 text-violet-700">Need a Template Fast?</h3>
            <p className="text-xs text-violet-600/70 mb-3 leading-relaxed">
              For urgent custom orders or quick template support, WhatsApp is the fastest way to reach us.
            </p>
            <a
              href="/custom-order"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-600 hover:text-violet-700 transition-colors"
            >
              Place Custom Order <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
