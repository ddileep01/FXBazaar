import Link from "next/link";
import {
  ArrowRight, Star, CheckCircle, Clock, MessageCircle,
  Pencil, Video, ThumbsUp, Zap, Shield, ArrowUpRight,
} from "lucide-react";
import TemplateCard from "@/components/TemplateCard";
import ScrollReveal from "@/components/ScrollReveal";
import MarqueeTicker from "@/components/MarqueeTicker";
import AnimatedCounter from "@/components/AnimatedCounter";
import TiltCard from "@/components/TiltCard";
import { videoTemplates, stats, testimonials } from "@/lib/data";

const featuredTemplates = videoTemplates.filter((t) => t.isFeatured).slice(0, 6);

const howItWorks = [
  { step: "01", icon: <Video className="w-4 h-4" />,         title: "Browse Templates", desc: "Explore 17 video styles for weddings, birthdays, festivals, and more." },
  { step: "02", icon: <MessageCircle className="w-4 h-4" />, title: "Place Your Order",  desc: "Click Order Now, fill in your details — names, dates, venue — and send via WhatsApp." },
  { step: "03", icon: <Pencil className="w-4 h-4" />,        title: "We Edit for You",   desc: "We replace all dummy data with your real details and craft a personalised video." },
  { step: "04", icon: <ThumbsUp className="w-4 h-4" />,      title: "Receive & Pay",     desc: "Receive the finished video on WhatsApp. Approve it, pay, and share with everyone!" },
];

const whyUs = [
  { icon: <Clock className="w-5 h-5" />,  title: "Fast Delivery",       desc: "Most orders within 24 hours. Urgent delivery in as little as 6 hours." },
  { icon: <Pencil className="w-5 h-5" />, title: "Unlimited Revisions", desc: "We refine until you're completely happy. No extra charge for revisions." },
  { icon: <Shield className="w-5 h-5" />, title: "Pay After Approval",  desc: "You only pay once you've seen and approved the final video. Zero risk." },
  { icon: <Zap className="w-5 h-5" />,    title: "WhatsApp Delivery",   desc: "No app downloads. Everything handled over WhatsApp — simple and fast." },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-center">

            <div>
              <div className="hero-badge-anim inline-flex items-center gap-2 neo-badge px-3 py-1.5 mb-8">
                <Zap className="w-3 h-3" />
                35+ Videos Delivered Across India
              </div>

              <h1 className="hero-title-anim text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] font-black leading-[0.88] tracking-tight text-white mb-6">
                PROFES&shy;SIONAL
                <br />
                <span className="grad-text">VIDEOS,</span>{" "}MADE
                <br />
                FOR YOU.
              </h1>

              <p className="hero-sub-anim text-base text-white/55 mb-8 max-w-md border-l-[2px] border-indigo-500 pl-4 leading-relaxed">
                Browse templates → order with your details → receive your personalised video on WhatsApp within 24 hours. Pay only after you approve.
              </p>

              <div className="hero-cta-anim flex flex-wrap gap-4 mb-10">
                <Link href="/templates" className="neo-btn-yellow px-6 py-3.5 gap-2 text-sm">
                  Browse Templates <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="#how-it-works" className="neo-btn-outline px-6 py-3.5 gap-2 text-sm">
                  How It Works
                </a>
              </div>

              <div className="hero-social-anim flex items-center gap-6 flex-wrap">
                <div className="flex -space-x-2">
                  {["PR", "SK", "MI", "AP"].map((a, i) => (
                    <div key={i} className="w-9 h-9 rounded-full bg-indigo-500/20 border-2 border-[#060611] flex items-center justify-center text-[10px] font-black text-indigo-300">
                      {a}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-white/40 mt-0.5 font-medium">Loved by our early customers</p>
                </div>
              </div>
            </div>

            {/* Bento card */}
            <TiltCard className="relative hidden lg:block p-5 hero-card-anim" maxTilt={8}>
              <div className="neo-card p-6 relative z-10">
                <div className="text-xs font-bold uppercase tracking-widest text-white/35 mb-3">Top Ordered</div>
                <div className="space-y-2 mb-5">
                  {["Elegant Wedding Invitation", "Grand Birthday Celebration", "Business Promo Reel", "Diwali Wishes Video"].map((title) => (
                    <div key={title} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                      <span className="text-sm font-semibold text-white">{title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/25 flex-shrink-0" />
                    </div>
                  ))}
                </div>
                <Link href="/templates" className="neo-btn-yellow px-4 py-2.5 text-xs gap-1.5 justify-center w-full">
                  See All Templates <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="badge-glow-pulse absolute -bottom-4 -right-4 rounded-xl px-4 py-3 z-20 bg-gradient-to-br from-indigo-500 to-purple-600 border border-indigo-400/30 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-white" />
                  <span className="text-sm font-black text-white">24hr Delivery</span>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 rounded-xl px-4 py-2 z-20 bg-gradient-to-br from-purple-500 to-pink-500 border border-purple-400/30 backdrop-blur-sm">
                <span className="text-xs font-black text-white uppercase tracking-wide">Pay After Approval</span>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ─── Marquee ticker ─── */}
      <MarqueeTicker />

      {/* ─── Stats ─── */}
      <section className="bg-white/[0.03] border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 80}>
                <div className="text-center px-6 py-8">
                  <div className="text-3xl sm:text-4xl font-black mb-1 grad-text">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-xs text-white/40 font-semibold uppercase tracking-widest">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <div className="neo-badge inline-flex items-center gap-1.5 px-3 py-1.5 mb-4">
                <Zap className="w-3 h-3" /> 4-Step Process
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">How It Works</h2>
            </div>
            <p className="text-sm text-white/45 max-w-xs">From browsing to receiving your personalised video in under 24 hours.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {howItWorks.map((step, idx) => (
            <ScrollReveal key={step.step} delay={idx * 100}>
              <TiltCard className="flex flex-col h-full">
                <div className="relative h-12 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center z-10 relative font-black text-base">
                    {step.step}
                  </div>
                  {idx < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-[23px] border-t border-dashed border-white/20" style={{ left: "52px", right: "-20px" }} />
                  )}
                </div>
                <div className="neo-card p-5 flex-1 cursor-default">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center mb-3">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-sm mb-2 text-white">{step.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{step.desc}</p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── Featured Templates ─── */}
      <section className="border-t border-white/[0.08] bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <div className="neo-badge inline-flex px-3 py-1.5 mb-4">Most Ordered</div>
                <h2 className="text-3xl sm:text-4xl font-black text-white">Featured Templates</h2>
              </div>
              <Link href="/templates" className="neo-btn-yellow px-5 py-2.5 gap-2 text-sm self-start sm:self-auto">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredTemplates.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 80}>
                <TiltCard>
                  <TemplateCard template={t} />
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Us ─── */}
      <section className="border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">Why Customers Choose Us</h2>
              <p className="text-white/50 text-sm max-w-md mx-auto">We handle all the editing. You just share your details and enjoy your video.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 90}>
                <TiltCard>
                  <div className="neo-card p-6 h-full">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-sm mb-2 text-white">{item.title}</h3>
                    <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="border-t border-white/[0.08] bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">What Customers Say</h2>
              <p className="text-sm text-white/40 font-medium">Real reviews from real customers across India</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 80}>
                <TiltCard>
                  <div className="neo-card p-5 flex flex-col gap-4 border-l-2 border-indigo-500/50 h-full">
                    <div className="flex items-center gap-0.5">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                    <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                      <div className="w-9 h-9 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-[10px] font-black text-indigo-300 flex-shrink-0">
                        {t.avatar}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{t.name}</div>
                        <div className="text-[10px] text-white/35 font-medium">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="border-t border-white/[0.08] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(99,102,241,0.18), transparent 70%)"
        }} />
        <div className="max-w-3xl mx-auto px-4 py-24 text-center relative">
          <ScrollReveal>
            <div className="neo-badge inline-flex items-center gap-1.5 px-3 py-1.5 mb-6">
              <Video className="w-3 h-3" /> Start Your Order
            </div>
            <h2 className="text-3xl sm:text-5xl font-black mb-5 text-white leading-tight">
              Ready to Order<br />Your Video?
            </h2>
            <p className="text-white/50 text-sm mb-10 max-w-sm mx-auto leading-relaxed">
              Browse 17 templates, pick your style, place an order with your details, and get a personalised video on WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/templates" className="neo-btn-yellow px-8 py-4 gap-2 text-base">
                Browse Templates <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="neo-btn-outline px-8 py-4 text-base gap-2">
                <MessageCircle className="w-5 h-5" /> Contact Us
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2 mt-8 text-xs text-white/40">
              <CheckCircle className="w-3.5 h-3.5 text-indigo-400" />
              Pay only after you approve the video
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
