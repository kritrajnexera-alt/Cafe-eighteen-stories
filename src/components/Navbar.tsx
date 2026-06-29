"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0C0A08]/95 backdrop-blur-xl border-b border-[#D4AF37]/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-[1px] h-5 bg-[#D4AF37]/50" />
            <span className="font-[family-name:var(--font-nav)] text-[11px] tracking-[0.3em] uppercase text-[#F5F0E8]">
              Eighteen <span className="text-[#D4AF37]">Stories</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-[family-name:var(--font-nav)] text-[11px] tracking-[0.3em] uppercase transition-colors duration-500 ${
                    isActive
                      ? "text-[#D4AF37]"
                      : "text-[#F5F0E8]/40 hover:text-[#F5F0E8]/80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[#D4AF37] focus-visible:outline-offset-2 rounded"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <div className="relative w-5 h-3">
              <motion.span
                className="absolute left-0 top-0 w-full h-[1px] bg-[#F5F0E8] origin-center"
                animate={open ? { rotate: 45, top: 6 } : { rotate: 0, top: 0 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                style={{ willChange: "transform" }}
              />
              <motion.span
                className="absolute left-0 top-[6px] w-full h-[1px] bg-[#F5F0E8]"
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 bottom-0 w-full h-[1px] bg-[#F5F0E8] origin-center"
                animate={open ? { rotate: -45, bottom: 6 } : { rotate: 0, bottom: 0 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                style={{ willChange: "transform" }}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="md:hidden border-t border-[#D4AF37]/10 overflow-hidden"
            style={{ willChange: "transform" }}
          >
            <div className="px-6 py-8 space-y-4">
              {links.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block font-[family-name:var(--font-nav)] text-[11px] tracking-[0.3em] uppercase transition-all duration-300 ${
                        isActive
                          ? "text-[#D4AF37]"
                          : "text-[#F5F0E8]/40 hover:text-[#F5F0E8]/80"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
