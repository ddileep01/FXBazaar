"use client";
import { useState } from "react";
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
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F1E8] border-b-2 border-[#111]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/FXBazaar logo png cropped.png"
            alt="FXBazaar"
            width={160}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${
                pathname === link.href
                  ? "bg-[#111] text-white"
                  : "text-[#111] hover:bg-[#111]/8"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          <Link href="/templates" className="neo-btn-yellow px-4 py-2 text-sm gap-2">
            Order a Video
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-md border-2 border-[#111] bg-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#F5F1E8] border-b-2 border-[#111]">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-semibold transition-all ${
                  pathname === link.href
                    ? "bg-[#111] text-white"
                    : "text-[#111] hover:bg-[#111]/8"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/templates"
              onClick={() => setOpen(false)}
              className="neo-btn-yellow mt-2 px-4 py-3 justify-center text-sm"
            >
              Order a Video
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
