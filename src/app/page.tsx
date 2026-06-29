"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.32, 0.72, 0, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease },
  }),
};

const letterReveal = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

export default function Home() {
  const headline = ["EIGHTEEN", "STORIES."];

  return (
    <>
      <section className="relative min-h-[100dvh] flex items-center bg-[#0C0A08] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&h=1080&fit=crop&auto=format)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0A08] via-[#0C0A08]/80 to-[#0C0A08]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.06)_0%,_transparent_70%)]" />

        <span
          className="absolute top-24 left-6 sm:left-12 font-[family-name:var(--font-hero)] text-[clamp(5rem,20vw,14rem)] leading-none tracking-[0.08em] text-[#D4AF37] opacity-[0.08] select-none pointer-events-none"
        >
          01
        </span>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full pt-32 pb-16">
          <div className="max-w-4xl">
            {headline.map((word, wi) => (
              <div key={word} className="overflow-hidden">
                <motion.h1
                  className="font-[family-name:var(--font-hero)] text-[clamp(3rem,12vw,6rem)] leading-[1] tracking-[0.05em] text-[#F5F0E8]"
                  initial="hidden"
                  animate="visible"
                  variants={letterReveal}
                  custom={wi}
                >
                  {word}
                </motion.h1>
              </div>
            ))}

            <motion.p
              className="mt-6 text-[#F5F0E8]/50 text-sm sm:text-base max-w-md leading-relaxed font-[family-name:var(--font-sub)] italic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease }}
            >
              Tavra Road, Bharuch &middot; A premium cafe experience
            </motion.p>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease }}
            >
              <Link
                href="/menu"
                className="group inline-flex items-center gap-3 px-7 py-3 border border-[#D4AF37]/40 text-[#D4AF37] font-[family-name:var(--font-nav)] text-[11px] tracking-[0.3em] uppercase transition-all duration-500 hover:bg-[#D4AF37] hover:text-[#0C0A08]"
              >
                <span>Begin your story</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{ delay: 1.2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </motion.div>
      </section>

      <div className="section-divider my-0" />

      <section className="relative py-32 sm:py-40 bg-[#0C0A08] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <span
              className="block font-[family-name:var(--font-hero)] text-[clamp(4rem,15vw,10rem)] leading-none tracking-[0.08em] text-[#D4AF37] opacity-[0.06] select-none mb-8"
            >
              02
            </span>
            <blockquote className="font-[family-name:var(--font-sub)] text-2xl sm:text-3xl md:text-4xl italic leading-[1.4] text-[#F5F0E8]">
              &ldquo;Every cup has a story.
              <br />
              Every visit, a chapter.&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      <div className="section-divider my-0" />

      <section className="relative py-32 bg-[#0C0A08] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={0}
            >
              <span className="font-[family-name:var(--font-hero)] text-[clamp(3rem,10vw,8rem)] leading-none tracking-[0.08em] text-[#D4AF37] opacity-[0.08] select-none block mb-6">
                03
              </span>
              <h2 className="font-[family-name:var(--font-sub)] text-3xl sm:text-4xl italic leading-[1.2] text-[#F5F0E8] mb-12">
                From Our Kitchen
              </h2>

              <div className="space-y-6">
                {[
                  { name: "Cold Brew", price: "₹180", desc: "16-hour steep, single origin" },
                  { name: "Signature Waffle", price: "₹220", desc: "Golden, crisp, with honey butter" },
                  { name: "Truffle Pasta", price: "₹320", desc: "Wild mushroom, parmesan, herbs" },
                ].map((item) => (
                  <div key={item.name} className="group">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-[family-name:var(--font-sub)] text-lg text-[#F5F0E8]">{item.name}</span>
                      <span className="text-[#D4AF37] text-sm">{item.price}</span>
                    </div>
                    <p className="text-[#F5F0E8]/30 text-xs tracking-wide">{item.desc}</p>
                    <div className="gold-underline h-[1px] mt-3" />
                  </div>
                ))}
              </div>

              <motion.div
                className="mt-10"
                initial={{ opacity: 0 }}
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={0}
              >
                <Link
                  href="/menu"
                  className="group inline-flex items-center gap-3 text-[#D4AF37] font-[family-name:var(--font-nav)] text-[11px] tracking-[0.3em] uppercase transition-all duration-500 hover:text-[#F5F0E8]"
                >
                  <span>Read full menu</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="hidden lg:block relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={1}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=900&fit=crop&auto=format)" }}
              />
              <div className="aspect-[4/5] w-full bg-[#161310] border border-[#D4AF37]/10" />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider my-0" />

      <section className="relative py-32 bg-[#0C0A08] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <span className="font-[family-name:var(--font-hero)] text-[clamp(3rem,10vw,8rem)] leading-none tracking-[0.08em] text-[#D4AF37] opacity-[0.08] select-none block mb-6">
              04
            </span>
            <h2 className="font-[family-name:var(--font-sub)] text-3xl sm:text-4xl italic leading-[1.2] text-[#F5F0E8]">
              The Atmosphere
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=700&fit=crop&auto=format", label: "The Bar" },
              { src: "https://images.unsplash.com/photo-1528696892704-5e1122852276?w=600&h=700&fit=crop&auto=format", label: "The Corner" },
              { src: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&h=700&fit=crop&auto=format", label: "The Light" },
              { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=700&fit=crop&auto=format", label: "The Details" },
            ].map((img, i) => (
              <motion.div
                key={img.label}
                className="group relative aspect-[3/4] bg-[#161310] overflow-hidden border border-[#D4AF37]/10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${img.src})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A08]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="font-[family-name:var(--font-nav)] text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]">
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={0}
          >
            <p className="text-[#F5F0E8]/30 text-sm font-[family-name:var(--font-sub)] italic mb-4">
              Follow our story on Instagram
            </p>
            <a
              href="https://instagram.com/eighteenstories"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-[#D4AF37] font-[family-name:var(--font-nav)] text-[11px] tracking-[0.3em] uppercase transition-all duration-500 hover:text-[#F5F0E8]"
            >
              <span>@eighteenstories</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      <div className="section-divider my-0" />

      <section className="relative py-32 bg-[#0C0A08] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="font-[family-name:var(--font-sub)] text-3xl sm:text-4xl italic leading-[1.2] text-[#F5F0E8] mb-6">
              Your table is waiting
            </h2>
            <p className="text-[#F5F0E8]/40 text-sm max-w-md mx-auto mb-10 leading-relaxed">
              Tavra Road, Bharuch. Open late, every day.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-7 py-3 border border-[#D4AF37]/40 text-[#D4AF37] font-[family-name:var(--font-nav)] text-[11px] tracking-[0.3em] uppercase transition-all duration-500 hover:bg-[#D4AF37] hover:text-[#0C0A08]"
            >
              <span>Find us</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
