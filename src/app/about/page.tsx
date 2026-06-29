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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0C0A08]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1920&h=1080&fit=crop&auto=format)" }}
      />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="font-[family-name:var(--font-hero)] text-[clamp(4rem,12vw,10rem)] leading-none tracking-[0.08em] text-[#D4AF37] opacity-[0.08] select-none block mb-4">
              S
            </span>
            <h1 className="font-[family-name:var(--font-hero)] text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-[0.05em] text-[#F5F0E8] mt-2">
              Our Story
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="section-divider my-0" />

      <section className="relative py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative">
            <span
              className="absolute -top-20 -left-6 sm:-left-12 font-[family-name:var(--font-hero)] text-[clamp(12rem,30vw,24rem)] leading-none tracking-[0.05em] text-[#D4AF37] opacity-[0.04] select-none pointer-events-none"
            >
              18
            </span>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={0}
              >
                <p className="text-[#F5F0E8]/60 text-sm sm:text-base leading-[1.8]">
                  Eighteen Stories was born from a simple belief &mdash; that
                  Bharuch deserved a space where coffee was more than caffeine.
                  A place where every cup came with a story, and every guest
                  left with one too.
                </p>
                <p className="text-[#F5F0E8]/60 text-sm sm:text-base leading-[1.8] mt-6">
                  We wanted a room where you could stay. Where the lighting was
                  warm enough to read by and the music was quiet enough to
                  think. A sanctuary on Tavra Road, away from the rush.
                </p>
                <p className="text-[#F5F0E8]/60 text-sm sm:text-base leading-[1.8] mt-6">
                  Named for the eighteen stories that live within these walls
                  &mdash; yours, ours, and the ones still being written &mdash; we
                  opened our doors with a conviction that great coffee, done
                  right, builds community.
                </p>
              </motion.div>

              <motion.div
                className="bg-[#161310] border border-[#D4AF37]/10 p-8 sm:p-10 flex items-center justify-center min-h-[300px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={1}
              >
                <blockquote className="font-[family-name:var(--font-sub)] text-2xl sm:text-3xl italic leading-[1.4] text-[#D4AF37] text-center">
                  &ldquo;Coffee is a language.
                  <br />
                  We speak it fluently.&rdquo;
                </blockquote>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider my-0" />

      <section className="relative py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="max-w-2xl mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <span className="font-[family-name:var(--font-nav)] text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]/60">
              Our Philosophy
            </span>
            <h2 className="font-[family-name:var(--font-sub)] text-3xl sm:text-4xl italic leading-[1.2] text-[#F5F0E8] mt-4">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Slow Excellence",
                desc: "We believe in the unhurried. In taking the time to dial in a shot, to let a conversation breathe, to sit with a book and let the evening unfold.",
              },
              {
                title: "Warm Welcome",
                desc: "You are not a customer. You are a guest. Whether it is your first pour-over or your hundredth, you are welcome at our table.",
              },
              {
                title: "Uncompromising Craft",
                desc: "From bean to cup, every decision respects the craft and the person drinking it. We do not cut corners. We do not rush.",
              },
              {
                title: "Community First",
                desc: "This is a living room for Bharuch. We host open mic nights, local art, book swaps, and quiet corners for those who need them.",
              },
            ].map((val, i) => (
              <motion.div
                key={val.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="p-8 bg-[#161310] border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-500 group"
              >
                <h3 className="font-[family-name:var(--font-sub)] text-xl text-[#F5F0E8] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {val.title}
                </h3>
                <p className="text-[#F5F0E8]/40 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider my-0" />

      <section className="relative py-32 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <span className="font-[family-name:var(--font-hero)] text-[clamp(8rem,20vw,16rem)] leading-none tracking-[0.05em] text-[#D4AF37] opacity-[0.06] select-none block mb-6">
              18
            </span>
            <h2 className="font-[family-name:var(--font-sub)] text-3xl sm:text-4xl italic leading-[1.2] text-[#F5F0E8] mb-6">
              Come find your story
            </h2>
            <p className="text-[#F5F0E8]/40 text-sm max-w-md mx-auto mb-10 leading-relaxed">
              Open late on Tavra Road. The espresso is always flowing.
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
    </div>
  );
}
