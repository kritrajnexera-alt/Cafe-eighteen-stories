"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.32, 0.72, 0, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease,
    },
  }),
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export default function Home() {
  return (
    <>
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#1C0F0A]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,160,69,0.12)_0%,_transparent_70%)]" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#E8A045]/5 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#E8A045]/5 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#E8A045]/30 bg-[#E8A045]/10 text-[#E8A045] text-[11px] uppercase tracking-[0.25em] font-medium mb-8">
              The Midnight Espresso Bar
            </span>
          </motion.div>

          <motion.h1
            className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-[#F5F0EB] mb-6 text-balance"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease }}
          >
            Where Every Cup
            <br />
            <span className="text-[#E8A045]">Tells a Story</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-[#F5F0EB]/70 max-w-xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease }}
          >
            Eighteen Stories. One Unforgettable Experience. A premium hideaway
            on Tavra Road, Bharuch — slow sips, late conversations, and crafted
            coffee that lingers.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8, ease }}
          >
            <Link
              href="/menu"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#E8A045] text-[#1C0F0A] font-[family-name:var(--font-body)] font-semibold text-sm overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-[#E8A045]/25 focus-visible:outline-2 focus-visible:outline-[#F5F0EB] focus-visible:outline-offset-2"
            >
              <span className="relative z-10">Explore Menu</span>
              <span className="relative z-10 w-6 h-6 rounded-full bg-[#1C0F0A]/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1C0F0A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link
              href="/about"
              className="px-8 py-3.5 rounded-full border border-[#3A2518] text-[#F5F0EB]/80 hover:text-[#F5F0EB] hover:border-[#F5F0EB]/30 text-sm font-[family-name:var(--font-body)] font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#E8A045] focus-visible:outline-offset-2"
            >
              Our Story
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#E8A045"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </motion.div>
      </section>

      <section className="relative py-16 sm:py-20 overflow-hidden bg-[#1C0F0A] border-y border-[#3A2518]/30">
        <div className="flex whitespace-nowrap">
          <div className="flex items-center gap-12 animate-marquee">
            {Array.from({ length: 2 }).map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-12">
                {[
                  "Espresso",
                  "Cold Brew",
                  "Matcha",
                  "Late Nights",
                  "Slow Sips",
                  "Craft Coffee",
                  "Warm Lights",
                  "Good Music",
                  "Eighteen Stories",
                  "The Midnight Bar",
                  "Pure Origin",
                  "House Roast",
                  "Ceremonial",
                  "Quiet Hours",
                ].map((item, i) => (
                  <span
                    key={`${setIdx}-${i}`}
                    className="text-[#E8A045]/70 font-[family-name:var(--font-heading)] text-sm sm:text-base uppercase tracking-[0.15em] font-medium"
                  >
                    {item}
                    <span className="inline-block mx-12 text-[#3A2518]">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 overflow-hidden bg-[#1C0F0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <span className="text-[#E8A045] text-[11px] uppercase tracking-[0.25em] font-medium">
              Our Ethos
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-[#F5F0EB] mt-4">
              Crafted in the <span className="text-[#E8A045]">Quiet Hours</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                number: "01",
                title: "The Roast",
                description:
                  "Every batch is small, every origin intentional. We source the finest single-origin beans, roasted to order to unlock the full character of each varietal.",
              },
              {
                number: "02",
                title: "The Pour",
                description:
                  "Precision in every brew. From pour-over to espresso, our baristas train for months to master the craft. Each drink is dialled by hand, never rushed.",
              },
              {
                number: "03",
                title: "The Space",
                description:
                  "Warm amber light, deep mahogany, and stories on every wall. A room designed for conversation, creativity, and the quiet joy of being exactly where you should be.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={cardItem}
                className="group relative p-8 sm:p-10 bg-[#2A1A10] rounded-2xl border border-[#3A2518]/50 hover:border-[#E8A045]/20 transition-all duration-500"
              >
                <span className="text-[#E8A045]/20 font-[family-name:var(--font-heading)] text-5xl font-bold block mb-6">
                  {item.number}
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[#F5F0EB] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#F5F0EB]/60 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E8A045]/0 group-hover:bg-[#E8A045]/40 rounded-full transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 overflow-hidden bg-[#1C0F0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <span className="text-[#E8A045] text-[11px] uppercase tracking-[0.25em] font-medium">
              Voices
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-[#F5F0EB] mt-4">
              What They <span className="text-[#E8A045]">Say</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                quote: "Finally, a place in Bharuch where the coffee is as good as the atmosphere. I come here to read, to write, to just be.",
                author: "Kavya M.",
                role: "Regular & Writer",
              },
              {
                quote: "Their cold brew is something else. It is not just a drink — it is the reason I look forward to weekends now.",
                author: "Rohan S.",
                role: "Coffee Enthusiast",
              },
              {
                quote: "Eighteen Stories has become the heartbeat of Tavra Road. The vibe, the music, the people — it is pure magic.",
                author: "Ananya P.",
                role: "Creative Director",
              },
            ].map((item) => (
              <motion.div
                key={item.author}
                variants={cardItem}
                className="relative p-8 bg-[#2A1A10] rounded-2xl border border-[#3A2518]/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E8A045"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-4 opacity-50"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
                <blockquote className="text-[#F5F0EB]/70 text-sm leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="border-t border-[#3A2518]/50 pt-4">
                  <p className="font-[family-name:var(--font-heading)] text-sm font-semibold text-[#F5F0EB]">
                    {item.author}
                  </p>
                  <p className="text-[#F5F0EB]/50 text-xs mt-0.5">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 overflow-hidden bg-[#1C0F0A]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,160,69,0.08)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <span className="text-[#E8A045] text-[11px] uppercase tracking-[0.25em] font-medium">
              Reserve Your Seat
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-[#F5F0EB] mt-4 mb-6">
              The Night Is <span className="text-[#E8A045]">Young</span>
            </h2>
            <p className="text-[#F5F0EB]/70 text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              Step in from the bustle of Tavra Road. We keep the lights on and
              the espresso running until the last chapter is closed.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#E8A045] text-[#1C0F0A] font-[family-name:var(--font-body)] font-semibold text-sm transition-all duration-500 hover:shadow-lg hover:shadow-[#E8A045]/25 focus-visible:outline-2 focus-visible:outline-[#F5F0EB] focus-visible:outline-offset-2"
            >
              <span>Find Us</span>
              <span className="w-6 h-6 rounded-full bg-[#1C0F0A]/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1C0F0A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
