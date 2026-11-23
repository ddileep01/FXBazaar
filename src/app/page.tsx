import Image from "next/image";
import { EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, showcase, testimonials, toEmbed, whatsappLink } from "@/lib/site";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.44 9.43m8.03-17.46A11.3 11.3 0 0 0 12.05.7C5.79.7.7 5.79.7 12.04c0 2 .52 3.95 1.52 5.66L.6 23.3l5.72-1.5a11.3 11.3 0 0 0 5.72 1.46h.01c6.25 0 11.34-5.09 11.35-11.34 0-3.03-1.18-5.88-3.32-8.02" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MailIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </svg>
  );
}

// Mixed-up order (fixed, so it stays the same on every visit), dealt into 3 rows.
const shuffled = testimonials
  .map((t, i) => ({ t, k: (i * 7 + 3) % testimonials.length }))
  .sort((a, b) => a.k - b.k)
  .map(({ t }) => t);
const reviewRows = [0, 1, 2].map((r) => shuffled.filter((_, i) => i % 3 === r));

export default function Home() {
  const items = showcase.flatMap((s, i) => {
    const embed = toEmbed(s.url);
    return embed ? [{ ...s, ...embed, label: s.title ?? `No. ${String(i + 1).padStart(2, "0")}` }] : [];
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/85 backdrop-blur-md border-b border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          <a href="#" aria-label="FXBazaar home">
            <Image
              src="/FXBazaar logo png cropped.png"
              alt="FXBazaar"
              width={180}
              height={45}
              priority
              className="h-10 w-auto object-contain mix-blend-multiply"
            />
          </a>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#work" className="hidden sm:inline text-muted hover:text-violet transition-colors">Templates</a>
            <a href="#kind-words" className="hidden sm:inline text-muted hover:text-violet transition-colors">Reviews</a>
            <a href="#contact" className="hidden sm:inline text-muted hover:text-violet transition-colors">Contact</a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] shadow-md shadow-magenta/25 hover:shadow-lg hover:shadow-magenta/35 transition-shadow"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" /> Order
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Intro */}
        <section className="hero-wash">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-24 pb-24 text-center">
            <p className="inline-block rounded-full bg-violet/10 text-violet text-[11px] font-medium uppercase tracking-[0.3em] px-4 py-1.5 mb-7">
              Personalised Video Templates
            </p>
            <h1 className="font-serif text-5xl sm:text-7xl leading-[1.05] font-medium">
              Moments, <em className="italic font-normal text-brand pr-1">beautifully</em> told.
            </h1>
            <p className="mt-8 text-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Wedding invitations, birthday wishes, festival greetings and more — personalised with your
              details and delivered on WhatsApp.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#work"
                className="w-full sm:w-auto rounded-full bg-brand text-white px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] shadow-lg shadow-magenta/25 hover:shadow-xl hover:shadow-magenta/35 transition-shadow"
              >
                View Templates
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white border border-line px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] hover:border-[#25D366] hover:text-[#128C7E] transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" /> Message Us
              </a>
            </div>
            <p className="mt-8 text-xs text-muted">
              <span className="text-orange">★★★★★</span>&nbsp; Loved by our clients · Pay only after you approve
            </p>
          </div>
        </section>

        {/* Showcase */}
        <section id="work" className="scroll-mt-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
            <div className="flex items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-violet mb-3">The Collection</p>
                <h2 className="font-serif text-4xl sm:text-5xl font-medium">Our Work</h2>
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 text-sm text-magenta hover:text-violet border-b border-magenta/30 hover:border-violet pb-1 transition-colors"
              >
                <InstagramIcon /> See all on Instagram
              </a>
            </div>

            {items.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item) => (
                  <figure key={item.src} className="flex flex-col">
                    <div className="rounded-2xl p-[2px] bg-line hover:bg-brand shadow-sm hover:shadow-xl hover:shadow-violet/15 transition-shadow">
                      <div className="rounded-[14px] bg-white overflow-hidden">
                        <iframe
                          src={item.src}
                          title={`FXBazaar template ${item.label}`}
                          loading="lazy"
                          scrolling="no"
                          allowFullScreen
                          className="w-full block"
                          style={{ height: item.isReel ? 640 : 520, border: 0 }}
                        />
                      </div>
                    </div>
                    <figcaption className="flex items-center justify-between gap-4 pt-4 px-1">
                      <span className="font-serif text-xl">{item.label}</span>
                      <a
                        href={whatsappLink(
                          item.title
                            ? `Hi FXBazaar! I'd like to order the "${item.title}" template.\n${item.url}`
                            : `Hi FXBazaar! I'd like to order this template:\n${item.url}`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/10 text-[#128C7E] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] hover:bg-[#25D366] hover:text-white transition-colors"
                      >
                        <WhatsAppIcon className="w-3 h-3" /> Order
                      </a>
                    </figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl hero-wash border border-line py-20 px-6 text-center">
                <p className="font-serif text-2xl mb-3">Our latest templates live on Instagram.</p>
                <p className="text-muted text-sm mb-8">Browse the full collection and message us the one you love.</p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em]"
                >
                  <InstagramIcon className="w-3.5 h-3.5" /> {INSTAGRAM_HANDLE}
                </a>
              </div>
            )}

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden mt-10 flex items-center justify-center gap-2 text-sm text-magenta"
            >
              <InstagramIcon /> See all on Instagram
            </a>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-gradient-to-b from-violet/[0.06] to-transparent border-y border-line">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 text-center">
            {[
              ["I", "Choose", "Pick a template you love.", "bg-violet"],
              ["II", "Message", "Send your names, dates & details on WhatsApp.", "bg-magenta"],
              ["III", "Receive", "Get your video. Pay only after you approve.", "bg-orange"],
            ].map(([n, title, desc, color]) => (
              <div key={n}>
                <p className={`mx-auto mb-4 w-12 h-12 rounded-full ${color} text-white font-serif italic text-lg flex items-center justify-center shadow-md`}>
                  {n}
                </p>
                <h3 className="font-serif text-2xl mb-2">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="kind-words" className="scroll-mt-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-20">
            <div className="text-center mb-12">
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-magenta mb-3">Wall of Love</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium">Kind Words</h2>
            </div>
          </div>
          <div className="marquee overflow-hidden pb-20 space-y-5">
            {reviewRows.map((row, r) => (
              <div
                key={r}
                className={`marquee-track flex w-max ${r % 2 ? "marquee-reverse" : ""}`}
                style={{ animationDuration: `${[90, 110, 100][r]}s` }}
              >
                {[...row, ...row].map((t, i) => (
                  <figure
                    key={i}
                    aria-hidden={i >= row.length}
                    className="w-[280px] sm:w-[320px] shrink-0 mr-5 flex flex-col rounded-2xl brand-border px-5 py-4 shadow-sm"
                  >
                    <blockquote className="font-serif text-[15px] leading-snug flex-1">
                      <span aria-hidden="true" className="font-serif text-2xl leading-none text-brand mr-1 align-[-0.2em]">&ldquo;</span>
                      {t.message}
                    </blockquote>
                    <figcaption className="mt-3 flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-full bg-brand text-white text-xs font-medium flex items-center justify-center">
                        {t.name.replace(/^(Dr\.|[A-Z]\.)\s*/, "").charAt(0)}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.22em] text-muted">{t.name}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative overflow-hidden bg-ink text-white">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(30rem 18rem at 15% 0%, rgb(124 58 237 / 0.55), transparent 70%), radial-gradient(28rem 18rem at 90% 100%, rgb(249 115 22 / 0.4), transparent 70%), radial-gradient(22rem 14rem at 70% 10%, rgb(217 70 239 / 0.35), transparent 70%)",
            }}
          />
          <div className="relative max-w-3xl mx-auto px-5 sm:px-8 py-24 text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/70 mb-6">Get in Touch</p>
            <h2 className="font-serif text-4xl sm:text-6xl font-medium leading-tight">
              Let&rsquo;s make <em className="italic font-normal text-brand pr-1">yours.</em>
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed">Message us on WhatsApp — we usually reply within the hour.</p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] text-white px-10 py-4 text-xs font-medium uppercase tracking-[0.2em] shadow-lg shadow-[#25D366]/30 hover:bg-[#1fb857] transition-colors"
            >
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
            <div className="mt-12 flex items-center justify-center gap-4">
              {[
                { href: INSTAGRAM_URL, label: "Instagram", icon: <InstagramIcon />, hover: "hover:bg-gradient-to-tr hover:from-orange hover:via-magenta hover:to-violet" },
                { href: whatsappLink(), label: "WhatsApp", icon: <WhatsAppIcon />, hover: "hover:bg-[#25D366]" },
                { href: `mailto:${EMAIL}`, label: "Email", icon: <MailIcon />, hover: "hover:bg-cyan" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-11 h-11 rounded-full border border-white/25 flex items-center justify-center hover:border-transparent transition-colors ${s.hover}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-white/50">
        <div className="h-[3px] bg-brand" />
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-6 text-xs flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} FXBazaar</p>
          <p className="font-serif italic text-sm">Personalised videos, delivered to WhatsApp.</p>
        </div>
      </footer>
    </div>
  );
}
