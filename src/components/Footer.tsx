import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle, QrCode, Tv } from "lucide-react";
import { videoCategories, categoryMeta } from "@/lib/data";
import type { VideoCategory } from "@/lib/data";
import CategoryIcon from "@/components/CategoryIcon";

const browseCategories = (videoCategories.filter((c) => c !== "All") as VideoCategory[]).slice(0, 6);

export default function Footer() {
  return (
    <footer className="border-t border-violet-100 bg-violet-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-flex mb-4">
              <Image
                src="/FXBazaar logo png cropped.png"
                alt="FXBazaar"
                width={180}
                height={44}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mb-2">
              Premium VN video editing templates for every occasion. Pay once, scan the QR in your VN app, add footage, and go viral.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium mb-5">
              <QrCode className="w-3.5 h-3.5" />
              Instant QR delivery on WhatsApp
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white hover:bg-violet-100 hover:text-violet-600 flex items-center justify-center text-zinc-400 transition-colors border border-violet-100"
                aria-label="Instagram"
              >
                <Tv className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@fxbazaar.com"
                className="w-9 h-9 rounded-xl bg-white hover:bg-violet-100 hover:text-violet-600 flex items-center justify-center text-zinc-400 transition-colors border border-violet-100"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white hover:bg-emerald-100 hover:text-emerald-600 flex items-center justify-center text-zinc-400 transition-colors border border-violet-100"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Browse by Category */}
          <div>
            <h4 className="text-sm font-bold text-zinc-900 mb-4">Browse Templates</h4>
            <ul className="space-y-2">
              {browseCategories.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/templates?category=${encodeURIComponent(cat)}`}
                    className="text-sm text-zinc-500 hover:text-violet-600 transition-colors flex items-center gap-1.5"
                  >
                    <CategoryIcon category={cat} className={`w-3.5 h-3.5 ${categoryMeta[cat].color}`} />
                    {cat}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/templates" className="text-sm text-violet-600 hover:text-violet-700 font-medium transition-colors">
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-zinc-900 mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "All Templates", href: "/templates" },
                { label: "Custom Order", href: "/custom-order" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-violet-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-violet-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-400">
            © {new Date().getFullYear()} FXBazaar. All rights reserved.
          </p>
          <p className="text-xs text-zinc-400">
            The easiest way to create viral reels with VN app.
          </p>
        </div>
      </div>
    </footer>
  );
}
