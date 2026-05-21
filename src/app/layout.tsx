import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FXBazaar — Custom Video Editing | Delivered to WhatsApp",
  description:
    "Professional custom video editing for weddings, birthdays, anniversaries, festivals & more. Browse templates, order with your details, we edit & deliver on WhatsApp. Pay after approval.",
  keywords: "wedding invitation video, birthday video, anniversary video, custom video editing, WhatsApp video, FXBazaar, personalised video India",
  openGraph: {
    title: "FXBazaar — Custom Video Editing Service",
    description: "Browse templates, place your order, we edit with your details and deliver on WhatsApp. Pay only after approval.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-white text-zinc-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
