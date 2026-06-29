import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eighteen Stories | Premium Cafe Bharuch",
  description:
    "Eighteen Stories. One Unforgettable Experience. A premium literary cafe on Tavra Road, Bharuch — where every cup tells a story.",
  openGraph: {
    title: "Eighteen Stories",
    description: "Premium Cafe on Tavra Road, Bharuch",
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
      className={`${spaceGrotesk.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#1C0F0A] text-[#F5F0EB] antialiased overflow-x-hidden">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
