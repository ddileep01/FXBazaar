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
  title: "FXBazaar — Premium VN Templates | Scan QR & Edit",
  description:
    "Buy premium VN video editing templates for Travel, Wedding, Birthday, Couple, Friendship & more. Pay once, get your QR code, scan in VN app and go viral.",
  keywords: "VN templates, VN QR code, vn editor templates, instagram reels templates, travel reel template, wedding reel, birthday video template, couple reel",
  openGraph: {
    title: "FXBazaar — Premium VN Templates",
    description: "Pay once, get QR code, scan in VN app and go viral. 500+ templates for every occasion.",
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
