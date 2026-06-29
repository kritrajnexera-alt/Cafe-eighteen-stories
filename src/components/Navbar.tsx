"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1C0F0A]/90 backdrop-blur-xl border-b border-[#3A2518]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="w-9 h-9 rounded-full bg-[#E8A045] flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: "transform" }}
            >
              <span className="text-[#1C0F0A] text-sm font-bold font-[family-name:var(--font-heading)]">18</span>
            </motion.div>
            <span className="font-[family-name:var(--font-heading)] text-lg tracking-tight text-[#F5F0EB]">
              Eighteen <span className="text-[#E8A045]">Stories</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-[family-name:var(--font-body)] font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-[#E8A045]"
                      : "text-[#F5F0EB]/70 hover:text-[#F5F0EB]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#E8A045] rounded-full"
                      style={{ willChange: "transform" }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[#E8A045] focus-visible:outline-offset-2 rounded"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <div className="relative w-5 h-4">
              <motion.span
                className="absolute left-0 top-0 w-full h-[2px] bg-[#F5F0EB] rounded-full origin-center"
                animate={open ? { rotate: 45, top: 7 } : { rotate: 0, top: 0 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                style={{ willChange: "transform" }}
              />
              <motion.span
                className="absolute left-0 top-[7px] w-full h-[2px] bg-[#F5F0EB] rounded-full"
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F5F0EB] rounded-full origin-center"
                animate={open ? { rotate: -45, bottom: 7 } : { rotate: 0, bottom: 0 }}
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
            className="md:hidden border-t border-[#3A2518]/50 overflow-hidden"
            style={{ willChange: "transform" }}
          >
            <div className="px-4 py-6 space-y-2">
              {links.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm font-[family-name:var(--font-body)] font-medium transition-all duration-300 ${
                        isActive
                          ? "text-[#E8A045] bg-[#E8A045]/10"
                          : "text-[#F5F0EB]/70 hover:text-[#F5F0EB] hover:bg-[#2A1A10]"
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
