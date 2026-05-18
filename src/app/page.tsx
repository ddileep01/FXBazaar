import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Star,
  QrCode,
  Smartphone,
  CheckCircle,
  TrendingUp,
  Zap,
  Shield,
  Film,
  Search,
  Sparkles,
  Send,
  Rocket,
} from "lucide-react";
import TemplateCard from "@/components/TemplateCard";
import CategoryIcon from "@/components/CategoryIcon";
import { vnTemplates, videoCategories, categoryMeta, stats, testimonials } from "@/lib/data";
import type { VideoCategory } from "@/lib/data";

const featuredTemplates = vnTemplates.filter((t) => t.isFeatured).slice(0, 6);

const howItWorks = [
  {
    step: "01",
    icon: <Search className="w-5 h-5" />,
    title: "Browse & Choose",
    desc: "Pick from 500+ VN templates across Travel, Wedding, Birthday, Couple and more categories.",
    color: "bg-violet-50 text-violet-600 border-violet-100",
  },
  {
    step: "02",
    icon: <Shield className="w-5 h-5" />,
    title: "Pay Securely",
    desc: "Pay a small amount via UPI or WhatsApp. Starting at just ₹49.",
    color: "bg-cyan-50 text-cyan-600 border-cyan-100",
  },
  {
    step: "03",
    icon: <QrCode className="w-5 h-5" />,
    title: "Get Your QR Code",
    desc: "Receive your unique VN template QR code on WhatsApp within 15 minutes of payment.",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    step: "04",
    icon: <Film className="w-5 h-5" />,
    title: "Scan, Edit & Post",
    desc: "Open VN app → tap + → QR Code → scan → add your footage → export and go viral!",
    color: "bg-pink-50 text-pink-600 border-pink-100",
  },
];

const whyUs = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "No Editing Skills Needed",
    desc: "Just add your footage to the pre-built template. The transitions, effects, and color grade are already done.",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Works on Any Phone",
    desc: "VN app is free on iOS & Android. Our templates work seamlessly on all devices.",
  },
  {
    icon: <QrCode className="w-5 h-5" />,
    title: "Instant QR Delivery",
    desc: "Get your template QR code on WhatsApp within 15 minutes after payment. No waiting.",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "100% Template Guarantee",
    desc: "Not satisfied? We'll fix it or replace it. Every template comes with our quality promise.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden hero-glow">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-violet-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-500/6 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-600 text-xs font-semibold mb-6">
                <TrendingUp className="w-3.5 h-3.5" />
                500+ Premium VN Templates Available
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight mb-5 text-zinc-900">
                Pro VN Templates.{" "}
                <span className="gradient-text">Just Scan</span>
                <br />
                & <span className="gradient-text">Edit.</span>
              </h1>

              <p className="text-lg text-zinc-500 leading-relaxed mb-8 max-w-lg">
                Pay once. Get a QR code. Scan it in the VN app, drop in your footage, and publish a viral reel — no editing skills needed.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link
                  href="/templates"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 text-white font-bold text-sm transition-all hover:shadow-lg hover:shadow-violet-500/25"
                >
                  Browse All Templates
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#how-it-works"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-violet-200 hover:border-violet-400 hover:bg-violet-50 text-zinc-700 font-semibold text-sm transition-all"
                >
                  <QrCode className="w-4 h-4" />
                  How It Works
                </a>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {["PS", "RV", "AS", "KM"].map((a, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                    >
                      {a}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs text-zinc-500 mt-0.5">80,000+ creators love FXBazaar</p>
                </div>
              </div>
            </div>

            {/* Right — VN app mockup / promo card */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-72">
                {/* Phone mockup */}
                <div className="relative bg-zinc-900 rounded-[2.5rem] p-3 shadow-2xl border-2 border-zinc-700">
                  <div className="bg-gradient-to-br from-violet-900 via-fuchsia-900 to-cyan-900 rounded-[2rem] aspect-[9/19] overflow-hidden relative">
                    {/* VN app UI simulation */}
                    <div className="absolute inset-0 p-4 flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <Image src="/vn_logo.jpg" alt="VN" width={32} height={32} className="w-8 h-8 rounded-lg" />
                        <span className="text-white/80 text-xs font-medium">VN Editor</span>
                        <QrCode className="w-5 h-5 text-white/60" />
                      </div>
                      <div className="flex-1 flex flex-col items-center justify-center gap-3">
                        <Sparkles className="w-10 h-10 text-violet-400 animate-bounce" />
                        <div className="text-center">
                          <div className="text-white font-bold text-sm">Template Loaded!</div>
                          <div className="text-white/60 text-xs mt-1">Add your footage & post</div>
                        </div>
                        <div className="w-full bg-white/10 rounded-xl p-2 mt-2">
                          <div className="flex gap-1.5 mb-1.5">
                            {[...Array(5)].map((_, i) => (
                              <div key={i} className="flex-1 h-8 bg-white/20 rounded-lg" />
                            ))}
                          </div>
                          <div className="h-1.5 bg-violet-400 rounded-full" />
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <div className="flex-1 bg-white/10 rounded-xl py-2 text-white text-xs font-medium text-center">
                          Export
                        </div>
                        <div className="flex-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-xl py-2 text-white text-xs font-bold text-center">
                          Share <Send className="w-3 h-3 inline ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -left-10 top-16 bg-white rounded-xl px-3 py-2 shadow-lg border border-violet-100 flex items-center gap-2 text-xs">
                  <QrCode className="w-4 h-4 text-violet-600" />
                  <span className="font-semibold text-zinc-700">QR Delivered!</span>
                </div>
                <div className="absolute -right-8 bottom-24 bg-white rounded-xl px-3 py-2 shadow-lg border border-emerald-100 flex items-center gap-2 text-xs">
                  <span className="text-emerald-500 font-bold">+500K</span>
                  <span className="text-zinc-500 flex items-center gap-1">views <TrendingUp className="w-3 h-3 text-red-500" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-violet-100 bg-violet-50/50">
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

      {/* How It Works */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-600 text-xs font-semibold mb-4">
            <Zap className="w-3.5 h-3.5" />
            Simple 4-Step Process
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-zinc-900">How It Works</h2>
          <p className="text-zinc-500 text-sm max-w-md mx-auto">
            From browsing to publishing your viral reel in under 20 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {howItWorks.map((step, idx) => (
            <div key={step.step} className="flex flex-col">
              {/* Icon only row — connector line runs purely between icon edges */}
              <div className="relative h-10 mb-4">
                <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center border relative z-10 ${step.color}`}>
                  {step.icon}
                </div>
                {idx < howItWorks.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-[19px] border-t-2 border-dashed border-violet-200"
                    style={{ left: "44px", right: "-20px" }}
                  />
                )}
              </div>
              {/* Card — step number lives here, away from the line */}
              <div className="p-5 rounded-2xl bg-white card-border shadow-sm flex-1">
                <span className="text-xs font-bold text-violet-400 mb-3 block">STEP {step.step}</span>
                <h3 className="font-bold text-sm mb-2 text-zinc-900">{step.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* VN app download note */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 p-4 rounded-2xl bg-zinc-50 border border-zinc-200 max-w-lg mx-auto">
          <Image src="/vn_logo.jpg" alt="VN App" width={40} height={40} className="w-10 h-10 rounded-xl" />
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-zinc-800">Download VN Video Editor (free)</p>
            <p className="text-xs text-zinc-500">Available on iOS App Store & Google Play Store</p>
          </div>
          <div className="flex gap-2 ml-auto">
            <a
              href="https://apps.apple.com/us/app/vn-video-editor/id1343581380"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-black hover:bg-zinc-800 text-white px-3 py-1.5 rounded-lg font-medium transition-colors"
            >
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.frontrow.vlog&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg font-medium transition-colors"
            >
              Play Store
            </a>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="border-y border-violet-100 bg-violet-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-900">Browse by Category</h2>
              <p className="text-sm text-zinc-500 mt-1">Find the perfect template for your video</p>
            </div>
            <Link href="/templates" className="text-sm text-violet-600 hover:text-violet-700 flex items-center gap-1 font-medium">
              View All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {(videoCategories.filter((c) => c !== "All") as VideoCategory[]).map((cat) => {
              const meta = categoryMeta[cat];
              const count = vnTemplates.filter((t) => t.videoCategory === cat).length;
              return (
                <Link
                  key={cat}
                  href={`/templates?category=${encodeURIComponent(cat)}`}
                  className={`group flex flex-col items-center gap-2 p-4 rounded-2xl bg-white border transition-all duration-200 hover:shadow-md hover:scale-[1.02] ${meta.bg}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${meta.bg}`}>
                    <CategoryIcon category={cat} className={`w-5 h-5 ${meta.color}`} />
                  </div>
                  <span className={`text-sm font-bold ${meta.color}`}>{cat}</span>
                  <span className="text-[11px] text-zinc-400">{count} template{count !== 1 ? "s" : ""}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-900">Featured Templates</h2>
            <p className="text-sm text-zinc-500 mt-1">Bestsellers loved by 80,000+ creators</p>
          </div>
          <Link href="/templates" className="text-sm text-violet-600 hover:text-violet-700 flex items-center gap-1 font-medium">
            View All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredTemplates.map((t) => (
            <TemplateCard key={t.id} template={t} />
          ))}
        </div>
      </section>

      {/* Why FXBazaar */}
      <section className="border-y border-violet-100 bg-violet-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-zinc-900">Why Creators Choose FXBazaar</h2>
            <p className="text-zinc-500 text-sm max-w-md mx-auto">
              The easiest way to make professional-looking reels — even if you&apos;ve never edited before.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((item) => (
              <div key={item.title} className="p-5 rounded-2xl bg-white card-border shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4 border border-violet-100">
                  {item.icon}
                </div>
                <h3 className="font-bold text-sm mb-2 text-zinc-900">{item.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-zinc-900">What Creators Say</h2>
          <p className="text-sm text-zinc-500">Real reviews from real creators</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="p-5 rounded-2xl bg-white card-border shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-3 border-t border-zinc-100">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-[10px] font-bold text-white">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-900">{t.name}</div>
                  <div className="text-[10px] text-zinc-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-violet-100 bg-gradient-to-b from-violet-50/40 to-white">
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <Rocket className="w-12 h-12 text-violet-500 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-zinc-900">
            Ready to Go Viral?
          </h2>
          <p className="text-zinc-500 text-sm mb-8 max-w-sm mx-auto">
            Browse 500+ VN templates across 10 categories. Pay once, get your QR, start editing in minutes.
          </p>
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 text-white font-bold text-base transition-all hover:shadow-lg hover:shadow-violet-500/25"
          >
            Browse All Templates
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
