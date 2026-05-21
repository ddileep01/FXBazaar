import Link from "next/link";
import {
  Zap, Star, Users, ArrowRight, MessageCircle, Clock,
  CheckCircle, Video, Heart, Gift, Crown, Briefcase,
  Sparkles, Quote, Pencil, Shield,
} from "lucide-react";
import { stats, testimonials } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import MarqueeTicker from "@/components/MarqueeTicker";
import AnimatedCounter from "@/components/AnimatedCounter";
import TiltCard from "@/components/TiltCard";

const timeline = [
  { year: "2022", title: "Started Editing",            desc: "Began creating personalised videos for local clients — weddings, birthdays, and events — learning the craft hands-on.", current: false },
  { year: "2023", title: "Growing Orders",              desc: "Word spread through WhatsApp. Started receiving regular orders for invitation videos, festival greetings, and anniversary reels.", current: false },
  { year: "2024", title: "Scaling Up",                  desc: "Demand grew steadily. Expanded into business promos, festival greetings, and reels — handling hundreds of orders every month.", current: false },
  { year: "2025", title: "First Orders, Great Reviews",  desc: "Began receiving real customer orders — weddings, birthdays, and business promos — with 100% satisfaction on every delivery.", current: false },
  { year: "2026", title: "FXBazaar Officially Launched",desc: "Launched FXBazaar in May 2026 as a dedicated branded service — bringing professional personalised video editing to everyone in India.", current: true },
];

const videosWeCreate = [
  { icon: <Crown className="w-5 h-5" />,    title: "Wedding Invitations",      desc: "Cinematic & traditional invite videos for all communities." },
  { icon: <Gift className="w-5 h-5" />,     title: "Birthday Celebrations",    desc: "From kids' parties to milestone 50th birthdays." },
  { icon: <Heart className="w-5 h-5" />,    title: "Anniversary & Engagement", desc: "Romantic reels and ceremony invites with heartfelt messages." },
  { icon: <Sparkles className="w-5 h-5" />, title: "Festival Greetings",       desc: "Diwali, Holi, Eid, Christmas — for individuals and businesses." },
  { icon: <Briefcase className="w-5 h-5" />,title: "Business Promos",          desc: "Promotional reels for products, services, and brand announcements." },
  { icon: <Video className="w-5 h-5" />,    title: "Reels & Short Videos",     desc: "Instagram Reels and YouTube Shorts with your footage." },
  { icon: <Star className="w-5 h-5" />,     title: "Naming Ceremonies",        desc: "Gentle Naamkaran invitation videos with traditional elements." },
  { icon: <Users className="w-5 h-5" />,    title: "Farewell & Tributes",      desc: "Touching farewell montages for colleagues, teachers, and friends." },
];

const whyChooseUs = [
  { icon: <Clock className="w-4 h-4" />,        title: "Fast Delivery",       desc: "Most videos delivered within 24 hours." },
  { icon: <CheckCircle className="w-4 h-4" />,  title: "Pay After Approval",  desc: "You only pay once you're happy with the video." },
  { icon: <MessageCircle className="w-4 h-4" />,title: "WhatsApp First",      desc: "All orders and delivery handled over WhatsApp." },
  { icon: <Pencil className="w-4 h-4" />,       title: "Unlimited Revisions", desc: "We refine until it's exactly what you envisioned." },
];

export default function AboutPage() {
  return (
    <div className="pt-16 bg-[#F5F1E8]">

      {/* ─── Hero (2-col) ─── */}
      <section className="border-b-2 border-[#111] bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-center">

            {/* Left */}
            <div>
              <div className="hero-badge-anim inline-flex items-center gap-1.5 neo-badge bg-[#DBEAFE] border-[#2563EB] text-[#2563EB] px-3 py-1.5 mb-6">
                <Zap className="w-3 h-3" /> The Story Behind FXBazaar
              </div>
              <h1 className="hero-title-anim text-[3rem] sm:text-[4.5rem] lg:text-[5.5rem] font-black leading-[0.9] tracking-tight text-[#111] mb-6">
                YOUR<br />
                MEMORIES,{" "}
                <span style={{ color: "#2563EB" }}>BEAUTI&shy;FULLY</span>
                <br />
                EDITED.
              </h1>
              <p className="hero-sub-anim text-base text-zinc-500 mb-8 max-w-lg border-l-[3px] border-[#2563EB] pl-4 leading-relaxed">
                FXBazaar is a personal video editing service built to make professional-quality personalised videos accessible to everyone in India — for every occasion, delivered straight to your WhatsApp.
              </p>
              <div className="hero-cta-anim flex flex-wrap gap-4">
                <Link href="/templates" className="neo-btn-yellow px-6 py-3.5 gap-2 text-sm">
                  Browse Templates <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="neo-btn-outline px-6 py-3.5 gap-2 text-sm">
                  <MessageCircle className="w-4 h-4" /> Contact Us
                </Link>
              </div>
            </div>

            {/* Right — bento card */}
            <TiltCard className="relative hidden lg:block p-5 hero-card-anim" maxTilt={8}>
              <div className="neo-card p-6 relative z-10">
                <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-5">Why FXBazaar?</div>
                <div className="space-y-3 mb-6">
                  {[
                    { icon: <Clock className="w-3.5 h-3.5" />,        label: "Delivered within 24 hours" },
                    { icon: <Shield className="w-3.5 h-3.5" />,       label: "Pay only after you approve" },
                    { icon: <MessageCircle className="w-3.5 h-3.5" />,label: "WhatsApp order & delivery" },
                    { icon: <Pencil className="w-3.5 h-3.5" />,       label: "Unlimited free revisions" },
                    { icon: <Star className="w-3.5 h-3.5" />,         label: "100% satisfaction rate" },
                  ].map(({ icon, label }) => (
                    <div key={label} className="flex items-center gap-3 py-2 border-b border-zinc-100 last:border-0">
                      <div className="w-7 h-7 rounded-md border-2 border-[#111] bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center flex-shrink-0">
                        {icon}
                      </div>
                      <span className="text-sm font-semibold text-[#111]">{label}</span>
                    </div>
                  ))}
                </div>
                <Link href="/templates" className="neo-btn-dark px-4 py-2.5 text-xs gap-1.5 justify-center w-full">
                  Start an Order <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="badge-glow-pulse absolute -bottom-4 -right-4 border-2 border-[#111] rounded-lg px-4 py-3 z-20" style={{ background: "#2563EB" }}>
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-white" />
                  <span className="text-sm font-black text-white">35+ Videos</span>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 border-2 border-[#111] rounded-lg px-4 py-2 z-20 shadow-[4px_4px_0_#111]" style={{ background: "#2563EB" }}>
                <span className="text-xs font-black text-white uppercase tracking-wide">Launched May 2026</span>
              </div>
            </TiltCard>

          </div>
        </div>
      </section>

      {/* ─── Marquee ─── */}
      <MarqueeTicker />

      {/* ─── Stats (dark) ─── */}
      <section className="bg-[#111] border-b-2 border-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x-2 divide-[#333]">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 80}>
                <div className="text-center px-6 py-8">
                  <div className="text-3xl sm:text-4xl font-black text-[#93C5FD] mb-1">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-xs text-zinc-400 font-semibold uppercase tracking-widest">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Story + Timeline ─── */}
      <section className="border-b-2 border-[#111] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <div>
                <div className="neo-badge inline-flex bg-[#DBEAFE] border-[#2563EB] text-[#2563EB] px-3 py-1.5 mb-4">Our Story</div>
                <h2 className="text-2xl font-black mb-6 text-[#111] uppercase tracking-tight">How It All Started</h2>
                <div className="space-y-4 text-zinc-500 text-sm leading-relaxed">
                  <p>FXBazaar started as a one-person operation — making wedding invitation videos and birthday celebration reels for friends and local clients. The response was overwhelming.</p>
                  <p>People loved getting a beautiful, personalised video they could share on WhatsApp and Instagram, without needing any editing skills themselves. So we built a proper service around it.</p>
                  <p>Today, FXBazaar handles hundreds of orders every month across India. Every video is hand-crafted by our editor with your personal details, your music preference, and your vision in mind.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div>
                <div className="neo-badge inline-flex bg-[#DBEAFE] border-[#2563EB] text-[#2563EB] px-3 py-1.5 mb-4">Timeline</div>
                <h2 className="text-2xl font-black mb-6 text-[#111] uppercase tracking-tight">Our Journey</h2>
                <div className="space-y-0">
                  {timeline.map((item, i) => (
                    <div key={item.year} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-9 h-9 rounded-md border-2 border-[#111] flex items-center justify-center text-xs font-black flex-shrink-0 shadow-[2px_2px_0_#111] ${item.current ? "bg-[#2563EB] text-white" : "bg-[#DBEAFE] text-[#2563EB]"}`}>
                          {item.year.slice(2)}
                        </div>
                        {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-[#111] mt-1 mb-1 min-h-[2rem]" />}
                      </div>
                      <div className="pb-6">
                        <div className="flex items-center gap-2 mb-0.5">
                          <div className="text-xs text-[#2563EB] font-black uppercase tracking-wide">{item.year}</div>
                          {item.current && (
                            <span className="text-[9px] font-black uppercase tracking-widest bg-[#2563EB] text-white px-1.5 py-0.5 rounded-sm">
                              Now
                            </span>
                          )}
                        </div>
                        <h3 className="text-sm font-black mb-1 text-[#111]">{item.title}</h3>
                        <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Videos We Create ─── */}
      <section className="border-b-2 border-[#111] bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <div className="neo-badge inline-flex bg-[#DBEAFE] border-[#2563EB] text-[#2563EB] px-3 py-1.5 mb-4">Our Work</div>
                <h2 className="text-3xl font-black text-[#111]">Videos We Create</h2>
              </div>
              <p className="text-sm text-zinc-500 max-w-xs">Every video is personalised with your details and delivered on WhatsApp.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {videosWeCreate.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 70}>
                <TiltCard>
                  <div className="neo-card p-5 h-full">
                    <div className="w-10 h-10 rounded-md border-2 border-[#111] bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center mb-4 shadow-[2px_2px_0_#111]">
                      {item.icon}
                    </div>
                    <h3 className="font-black text-sm mb-1.5 text-[#111]">{item.title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="border-b-2 border-[#111] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal>
            <h2 className="text-3xl font-black mb-10 text-center text-[#111]">Why Customers Trust Us</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChooseUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 90}>
                <TiltCard>
                  <div className="neo-card p-5 text-center h-full">
                    <div className="w-10 h-10 rounded-md border-2 border-[#111] bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center mx-auto mb-4 shadow-[2px_2px_0_#111]">
                      {item.icon}
                    </div>
                    <h3 className="font-black text-sm mb-1.5 text-[#111]">{item.title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="border-b-2 border-[#111] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <div className="neo-badge inline-flex items-center gap-1.5 bg-[#DBEAFE] border-[#2563EB] text-[#2563EB] px-3 py-1.5 mb-4">
                  <Star className="w-3 h-3 fill-[#2563EB]" /> Real Reviews
                </div>
                <h2 className="text-3xl font-black text-[#111]">What Customers Say</h2>
              </div>
              <p className="text-sm text-zinc-500 max-w-xs">Verified reviews from customers who ordered videos from us.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 80}>
                <TiltCard>
                  <div className="neo-card flex flex-col p-5 border-l-[5px] h-full" style={{ borderLeftColor: "#2563EB" }}>
                    <Quote className="w-6 h-6 text-[#2563EB] opacity-30 mb-3 flex-shrink-0" />
                    <div className="flex items-center gap-0.5 mb-3">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 text-[#2563EB] fill-[#2563EB]" />
                      ))}
                    </div>
                    <p className="text-sm text-zinc-600 leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                    <div className="flex items-center gap-3 pt-4 mt-4 border-t-2 border-zinc-100">
                      <div className="w-9 h-9 rounded-md border-2 border-[#111] bg-[#111] flex items-center justify-center text-[10px] font-black text-white flex-shrink-0 shadow-[2px_2px_0_#2563EB]">
                        {t.avatar}
                      </div>
                      <div>
                        <div className="text-xs font-black text-[#111]">{t.name}</div>
                        <div className="text-[10px] text-zinc-400 font-medium mt-0.5">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={100}>
            <div className="mt-10 neo-card p-5 bg-[#F5F1E8]">
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-x-2 divide-[#111] text-center">
                {[
                  { value: "5.0 / 5",  label: "Average Rating" },
                  { value: "35+",      label: "Verified Orders" },
                  { value: "100%",     label: "Pay After Approval" },
                  { value: "< 24 hrs", label: "Avg. Delivery" },
                ].map((m) => (
                  <div key={m.label} className="px-4 py-2">
                    <div className="text-xl font-black text-[#2563EB]">{m.value}</div>
                    <div className="text-[11px] text-zinc-500 font-semibold mt-0.5 uppercase tracking-wide">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CTA (dark) ─── */}
      <section className="bg-[#111]">
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <ScrollReveal>
            <div className="w-14 h-14 rounded-md border-2 border-[#2563EB] bg-[#DBEAFE] shadow-[3px_3px_0_#2563EB] flex items-center justify-center mx-auto mb-6">
              <Video className="w-7 h-7 text-[#2563EB]" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black mb-4 text-white leading-tight">Ready to Order<br />Your Video?</h2>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed max-w-sm mx-auto">
              Browse our templates or describe something custom. We&apos;ll quote, create, and deliver.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/templates" className="neo-btn-yellow px-6 py-3.5 gap-2 text-sm">
                Browse Templates <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/custom-order" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-black text-[#111] bg-white border-2 border-white rounded-md shadow-[3px_3px_0_rgba(255,255,255,0.25)] hover:shadow-[1px_1px_0_rgba(255,255,255,0.25)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                <Users className="w-4 h-4" /> Custom Order
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
