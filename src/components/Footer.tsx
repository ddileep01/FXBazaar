import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111] border-t-2 border-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-flex mb-5">
              <Image src="/FXBazaar logo png cropped.png" alt="FXBazaar" width={160} height={40} className="h-10 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mb-5">
              Professional video editing service for every occasion. Order a template, we personalise it and deliver on WhatsApp.
            </p>
            <div className="inline-flex items-center gap-1.5 border border-[#2563EB] text-[#93C5FD] text-xs font-bold px-3 py-1.5 rounded-md mb-6">
              Pay only after you approve the video
            </div>
            <div className="flex items-center gap-3">
              <a href="mailto:dileep18052001@gmail.com"
                className="w-10 h-10 rounded-md border-2 border-[#333] bg-[#1a1a1a] hover:border-[#2563EB] hover:text-[#93C5FD] flex items-center justify-center text-zinc-400 transition-colors"
                aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
              <a href="https://wa.me/918500656300" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-md border-2 border-[#333] bg-[#1a1a1a] hover:border-[#25D366] hover:text-[#25D366] flex items-center justify-center text-zinc-400 transition-colors"
                aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/fx_bazaar/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-md border-2 border-[#333] bg-[#1a1a1a] hover:border-[#E1306C] hover:text-[#E1306C] flex items-center justify-center text-zinc-400 transition-colors"
                aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black text-white mb-5 uppercase tracking-wider">Templates</h4>
            <ul className="space-y-3">
              {[
                { label: "All Templates", href: "/templates" },
                { label: "Wedding Invitations", href: "/templates" },
                { label: "Birthday Videos", href: "/templates" },
                { label: "Festival Greetings", href: "/templates" },
                { label: "Business Promos", href: "/templates" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-zinc-400 hover:text-[#93C5FD] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black text-white mb-5 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Custom Order", href: "/custom-order" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-zinc-400 hover:text-[#93C5FD] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#333] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">© {new Date().getFullYear()} FXBazaar. All rights reserved.</p>
          <p className="text-xs text-zinc-600">Professional video editing, delivered to your WhatsApp.</p>
        </div>
      </div>
    </footer>
  );
}
