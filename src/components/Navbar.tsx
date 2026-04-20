"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/templates", label: "Templates" },
  { href: "/custom-order", label: "Custom Order" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md border-b border-violet-100 shadow-lg shadow-violet-100/40" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <Image
            src="/FXBazaar logo png cropped.png"
            alt="FXBazaar"
            width={180}
            height={44}
            className="h-11 w-auto object-contain transition-opacity group-hover:opacity-85"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-violet-600 bg-violet-50"
                  : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/custom-order"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 text-white text-sm font-semibold transition-opacity"
          >
            Get Custom Order
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-b border-violet-100">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-violet-600 bg-violet-50"
                    : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/custom-order"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 text-white text-sm font-semibold transition-opacity text-center"
            >
              Get Custom Order
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
