import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Space_Grotesk, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-hero",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-sub",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-nav",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eighteen Stories | Premium Literary Cafe, Bharuch",
  description:
    "Eighteen Stories. One Unforgettable Experience. A premium literary cafe on Tavra Road, Bharuch — where every cup tells a story.",
  openGraph: {
    title: "Eighteen Stories",
    description: "Premium Literary Cafe on Tavra Road, Bharuch",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${spaceGrotesk.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#0C0A08] text-[#F5F0E8] antialiased overflow-x-hidden font-[family-name:var(--font-body)]">
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
