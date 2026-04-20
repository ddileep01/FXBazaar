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
  title: "FXBazaar — Premium Video Editing Templates",
  description:
    "Professional After Effects, Premiere Pro, and VN mobile editing templates. Custom video editing solutions for creators and brands.",
  keywords: "after effects templates, premiere pro templates, VN templates, video editing, motion graphics, custom video editing",
  openGraph: {
    title: "FXBazaar — Premium Video Editing Templates",
    description: "Professional video editing templates for creators and brands.",
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
