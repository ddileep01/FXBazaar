"use client";
import { useState } from "react";
import { CheckCircle, Clock, Layers, MessageCircle, Zap, ArrowRight } from "lucide-react";

const softwareOptions = ["After Effects", "Premiere Pro", "VN Mobile", "CapCut", "DaVinci Resolve", "Other"];
const projectTypes = [
  "YouTube Intro/Outro",
  "Logo Animation",
  "Lower Thirds Pack",
  "Transitions Pack",
  "Social Media Template",
  "Wedding Highlight",
  "Brand Identity Pack",
  "VN/Mobile Code",
  "Custom Animation",
  "Other",
];

const process = [
  {
    step: "01",
    title: "Submit Your Request",
    desc: "Fill out the form below with your project details, reference, and deadline.",
  },
  {
    step: "02",
    title: "Get a Quote",
    desc: "We&apos;ll review your requirements and send a price quote within 2 hours.",
  },
  {
    step: "03",
    title: "We Start Building",
    desc: "Once approved, our team begins crafting your custom template.",
  },
  {
    step: "04",
    title: "Delivered to You",
    desc: "Your template is delivered via WhatsApp/email with a free revision included.",
  },
];

export default function CustomOrderPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    software: "",
    projectType: "",
    description: "",
    deadline: "",
    budget: "",
    references: "",
  });
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
          <h1 className="text-2xl font-extrabold mb-3 text-zinc-900">Order Request Received!</h1>
          <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
            Thanks <span className="text-zinc-900 font-medium">{form.name}</span>! We&apos;ve received your custom order request. Our team will review it and contact you within <strong className="text-violet-600">2 hours</strong> via WhatsApp or email.
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
      {/* Header */}
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-600 text-xs font-semibold mb-4">
          <Layers className="w-3.5 h-3.5" />
          Custom Template Service
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-zinc-900">
          Order a Custom Template
        </h1>
        <p className="text-zinc-500 leading-relaxed">
          Need something built from scratch for your brand? Tell us exactly what you want and we&apos;ll craft it for you — After Effects, Premiere Pro, VN codes, or anything in between.
        </p>
      </div>

      {/* Process Steps */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        {process.map((p) => (
          <div key={p.step} className="p-4 rounded-xl bg-white border border-violet-100 shadow-sm">
            <div className="text-2xl font-black text-violet-200 mb-3">{p.step}</div>
            <h3 className="text-sm font-semibold mb-1 text-zinc-900">{p.title}</h3>
            <p className="text-xs text-zinc-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: p.desc }} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-zinc-600 mb-1.5">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
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
              <label className="block text-xs font-semibold text-zinc-600 mb-1.5">WhatsApp Number *</label>
              <input
                type="tel"
                name="whatsapp"
                required
                value={form.whatsapp}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-100 transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-zinc-600 mb-1.5">Software / Platform *</label>
                <select
                  name="software"
                  required
                  value={form.software}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-200 text-sm text-zinc-700 focus:outline-none focus:border-violet-400 transition-colors cursor-pointer"
                >
                  <option value="">Select software</option>
                  {softwareOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-600 mb-1.5">Project Type *</label>
                <select
                  name="projectType"
                  required
                  value={form.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-200 text-sm text-zinc-700 focus:outline-none focus:border-violet-400 transition-colors cursor-pointer"
                >
                  <option value="">Select type</option>
                  {projectTypes.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-600 mb-1.5">Project Description *</label>
              <textarea
                name="description"
                required
                rows={4}
                value={form.description}
                onChange={handleChange}
                placeholder="Describe your project in detail — style, mood, colors, text, duration, how it should be used, etc."
                className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-100 transition-colors resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-zinc-600 mb-1.5">Deadline</label>
                <input
                  type="text"
                  name="deadline"
                  value={form.deadline}
                  onChange={handleChange}
                  placeholder="e.g. Within 3 days"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-100 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-600 mb-1.5">Budget (₹)</label>
                <input
                  type="text"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  placeholder="e.g. ₹500 - ₹2000"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-100 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-600 mb-1.5">Reference Links / Inspiration</label>
              <textarea
                name="references"
                rows={2}
                value={form.references}
                onChange={handleChange}
                placeholder="YouTube links, Instagram posts, or describe the vibe you want..."
                className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-100 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-violet-500/25 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Submit Custom Order Request
            </button>
          </form>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="p-5 rounded-xl bg-white border border-violet-100 shadow-sm">
            <h3 className="font-semibold text-sm mb-4 flex items-center gap-2 text-zinc-900">
              <Zap className="w-4 h-4 text-violet-500" /> Pricing Guide
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                ["VN / CapCut Code", "₹200 – ₹500"],
                ["Logo Animation", "₹400 – ₹900"],
                ["Intro / Outro", "₹500 – ₹1,200"],
                ["Lower Thirds Pack", "₹600 – ₹1,500"],
                ["Transitions Pack", "₹800 – ₹2,000"],
                ["Full Brand Pack", "₹2,000 – ₹5,000"],
              ].map(([type, price]) => (
                <li key={type} className="flex items-center justify-between">
                  <span className="text-zinc-500">{type}</span>
                  <span className="text-violet-600 font-semibold">{price}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-zinc-400 mt-4">* Final price depends on complexity and deadline.</p>
          </div>

          <div className="p-5 rounded-xl bg-violet-50 border border-violet-200">
            <h3 className="font-semibold text-sm mb-3 text-violet-700">What&apos;s Included</h3>
            <ul className="space-y-2">
              {[
                "1 free revision included",
                "Source file (.aep / .prproj)",
                "Tutorial on how to use",
                "Delivered in 24–48 hrs",
                "WhatsApp support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-violet-700">
                  <CheckCircle className="w-3.5 h-3.5 text-violet-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-white border border-violet-100 shadow-sm">
            <h3 className="font-semibold text-sm mb-2 flex items-center gap-2 text-zinc-900">
              <Clock className="w-4 h-4 text-cyan-500" /> Quick Response
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              We respond to all custom order requests within <strong className="text-zinc-900">2 hours</strong> during business hours. Emergency delivery available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
