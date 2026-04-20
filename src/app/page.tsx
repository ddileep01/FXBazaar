import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Star,
  Zap,
  Layers,
  Smartphone,
  Monitor,
  Palette,
  CheckCircle,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react";
import TemplateCard from "@/components/TemplateCard";
import { templates, stats, testimonials } from "@/lib/data";

const featuredTemplates = templates.filter((t) => t.isFeatured).slice(0, 6);

const softwareList = [
  { name: "After Effects", img: "/Adobe_After_Effects_CC_2026_icon.svg.png" },
  { name: "Premiere Pro", img: "/Adobe_Premiere_Pro_CC_icon.svg.png" },
  { name: "VN Mobile", img: "/vn_logo.jpg" },
  { name: "CapCut", img: "/capcut-logo-on-transparent-white-background-free-vector.jpg" },
];

const whyUs = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Instant Delivery",
    desc: "Download your templates immediately after purchase. No waiting, no hassle.",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Fully Customizable",
    desc: "Every template is built to be edited easily — swap colors, fonts, and assets in minutes.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Commercial License",
    desc: "Use templates for client projects and commercial work without any restrictions.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Custom Orders in 48h",
    desc: "Need something unique? Order a custom template and get it delivered within 48 hours.",
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
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-600 text-xs font-semibold mb-6">
              <TrendingUp className="w-3.5 h-3.5" />
              200+ Premium Templates Available
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6 text-zinc-900">
              Edit Like a{" "}
              <span className="gradient-text">Pro.</span>
              <br />
              Templates Built for{" "}
              <span className="gradient-text">Creators.</span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-500 leading-relaxed mb-8 max-w-xl">
              Premium After Effects, Premiere Pro & mobile VN templates for YouTube creators, filmmakers, and brands. Instant download or fully custom-built for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/templates"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-violet-500/25"
              >
                Browse Templates
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/custom-order"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-violet-200 hover:border-violet-400 hover:bg-violet-50 text-zinc-700 font-semibold text-sm transition-all"
              >
                Get Custom Order
              </Link>
            </div>

            <div className="flex items-center gap-6 mt-10">
              <div className="flex -space-x-2">
                {["AM", "PS", "RV", "SN"].map((a, i) => (
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
                <p className="text-xs text-zinc-500 mt-0.5">5000+ satisfied creators</p>
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

      {/* Software Supported */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">Templates For Every Tool</h2>
          <Link href="/templates" className="text-sm text-violet-600 hover:text-violet-700 flex items-center gap-1">
            View All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {softwareList.map((sw) => (
            <Link
              key={sw.name}
              href={`/templates?category=${encodeURIComponent(sw.name)}`}
              className="group p-5 rounded-xl bg-white card-border transition-all duration-300 flex flex-col items-center gap-3 text-center shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-sm border border-zinc-100 overflow-hidden">
                <Image src={sw.img} alt={sw.name} width={48} height={48} className="w-10 h-10 object-contain" />
              </div>
              <span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">{sw.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Templates */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">Featured Templates</h2>
            <p className="text-sm text-zinc-500 mt-1">Handpicked bestsellers loved by creators</p>
          </div>
          <Link href="/templates" className="text-sm text-violet-600 hover:text-violet-700 flex items-center gap-1">
            View All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredTemplates.map((t) => (
            <TemplateCard key={t.id} template={t} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-y border-violet-100 bg-violet-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-zinc-900">Why Creators Choose FXBazaar</h2>
            <p className="text-zinc-500 text-sm max-w-md mx-auto">
              We don&apos;t just sell templates — we deliver tools that make your content stand out.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((item) => (
              <div key={item.title} className="p-5 rounded-xl bg-white card-border transition-all duration-300 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center mb-4 border border-violet-100">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-sm mb-2 text-zinc-900">{item.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-violet-600 to-cyan-500 p-8 sm:p-12">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-pink-400/20 rounded-full blur-2xl" />
          </div>
          <div className="relative max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold mb-4">
              <Layers className="w-3.5 h-3.5" />
              Custom Template Service
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white">
              Need Something Unique?
            </h2>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Can&apos;t find what you&apos;re looking for? Tell us your vision — we&apos;ll build a custom After Effects, Premiere Pro, or mobile template tailored exactly to your brand.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {["Brand Identity", "YouTube Intros", "Wedding Reels", "Social Media Kits", "VN Codes"].map((tag) => (
                <span key={tag} className="flex items-center gap-1.5 text-xs text-white bg-white/15 px-3 py-1.5 rounded-full">
                  <CheckCircle className="w-3 h-3" /> {tag}
                </span>
              ))}
            </div>
            <Link
              href="/custom-order"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-violet-700 font-semibold text-sm transition-all hover:shadow-lg hover:bg-violet-50"
            >
              Request Custom Order
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-zinc-900">What Creators Say</h2>
          <p className="text-sm text-zinc-500">Real reviews from real creators</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="p-5 rounded-xl bg-white card-border transition-all duration-300 flex flex-col gap-4 shadow-sm">
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
                  <div className="text-xs font-semibold text-zinc-900">{t.name}</div>
                  <div className="text-[10px] text-zinc-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-violet-100 bg-violet-50/40">
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-zinc-900">
            Ready to Level Up Your Edits?
          </h2>
          <p className="text-zinc-500 text-sm mb-8">
            Browse 200+ professional templates or get a custom one built for your brand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/templates"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-violet-500/25"
            >
              <Monitor className="w-4 h-4" />
              Browse All Templates
            </Link>
            <Link
              href="/custom-order"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-violet-200 hover:border-violet-400 text-zinc-700 font-semibold text-sm transition-all hover:bg-violet-50"
            >
              <Smartphone className="w-4 h-4" />
              Custom Order
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
