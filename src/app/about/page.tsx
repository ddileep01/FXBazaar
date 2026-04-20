import Link from "next/link";
import { Zap, Layers, Star, Users, ArrowRight, Monitor, Smartphone } from "lucide-react";
import { stats } from "@/lib/data";

const timeline = [
  { year: "2022", title: "Started Editing", desc: "Began creating video edits for local clients and social media pages, mastering After Effects and Premiere Pro." },
  { year: "2023", title: "First Templates", desc: "Built reusable motion graphic templates and started sharing VN codes with the mobile editing community." },
  { year: "2024", title: "FXBazaar Launched", desc: "Officially launched FXBazaar as a dedicated marketplace for premium video editing templates." },
  { year: "2025", title: "5K+ Creators Served", desc: "Grew to serve over 5,000 creators, brands, and videographers across India." },
];

const skills = [
  { name: "After Effects", level: 95 },
  { name: "Premiere Pro", level: 92 },
  { name: "VN Mobile", level: 90 },
  { name: "CapCut", level: 88 },
  { name: "DaVinci Resolve", level: 80 },
  { name: "Photoshop", level: 75 },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-violet-100">
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-600 text-xs font-semibold mb-6">
              <Zap className="w-3.5 h-3.5" />
              The Story Behind FXBazaar
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-5 text-zinc-900">
              Built by a Creator,{" "}
              <span className="gradient-text">For Creators.</span>
            </h1>
            <p className="text-zinc-500 leading-relaxed text-base">
              FXBazaar was born from one simple frustration — great video editing templates were either too expensive, too generic, or didn&apos;t fit the way Indian creators actually edit. So we built our own.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-violet-100 bg-violet-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold gradient-text">{stat.value}</div>
                <div className="text-xs sm:text-sm text-zinc-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-5 text-zinc-900">Our Story</h2>
            <div className="space-y-4 text-zinc-500 text-sm leading-relaxed">
              <p>
                FXBazaar started as a personal project — a folder of custom After Effects templates built for my own YouTube channel. When other creators started asking where they could get similar templates, FXBazaar became a real business.
              </p>
              <p>
                We specialize in creating professional-grade motion graphic templates that are actually affordable and made for how modern creators work — fast turnarounds, mobile editing support, and designs that actually fit trending aesthetics.
              </p>
              <p>
                From full brand identity packs in After Effects to simple VN codes for mobile editors, every template at FXBazaar is built with attention to detail and tested on real content before it&apos;s listed.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h2 className="text-2xl font-bold mb-5 text-zinc-900">Journey</h2>
            <div className="space-y-5">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-violet-50 border border-violet-200 flex items-center justify-center text-xs font-bold text-violet-600 flex-shrink-0">
                      {item.year.slice(2)}
                    </div>
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-violet-100 mt-2" />}
                  </div>
                  <div className="pb-5">
                    <div className="text-xs text-violet-600 font-semibold mb-0.5">{item.year}</div>
                    <h3 className="text-sm font-semibold mb-1 text-zinc-900">{item.title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-y border-violet-100 bg-violet-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-8 text-zinc-900">Technical Expertise</h2>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-zinc-700">{skill.name}</span>
                    <span className="text-xs text-zinc-400">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-violet-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-zinc-900">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              icon: <Monitor className="w-6 h-6" />,
              title: "Desktop Templates",
              desc: "After Effects & Premiere Pro templates for professional YouTube, film, and brand video work.",
            },
            {
              icon: <Smartphone className="w-6 h-6" />,
              title: "Mobile Codes",
              desc: "VN and CapCut codes for mobile creators who need pro-quality edits on the go.",
            },
            {
              icon: <Layers className="w-6 h-6" />,
              title: "Custom Orders",
              desc: "Fully bespoke templates built to your brand identity, aesthetic, and exact specifications.",
            },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-xl bg-white card-border transition-all duration-300 text-center shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mx-auto mb-4 border border-violet-100">
                {item.icon}
              </div>
              <h3 className="font-semibold mb-2 text-zinc-900">{item.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-violet-100 bg-violet-50/40">
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <Star className="w-8 h-8 text-violet-500 mx-auto mb-4" />
          <h2 className="text-2xl font-extrabold mb-3 text-zinc-900">Work With Us</h2>
          <p className="text-zinc-500 text-sm mb-6">
            Whether you need ready-made templates or a fully custom solution, we&apos;re here to help your content stand out.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/templates"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 text-white font-semibold text-sm transition-all"
            >
              Browse Templates <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/custom-order"
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-violet-200 hover:border-violet-400 hover:bg-violet-50 text-zinc-700 font-semibold text-sm transition-all"
            >
              <Users className="w-4 h-4" /> Custom Order
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
