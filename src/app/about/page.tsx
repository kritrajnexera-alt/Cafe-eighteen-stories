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

const values = [
  {
    title: "Slow Living",
    desc: "We believe in the unhurried. In taking the time to dial in a shot, to let a conversation breathe, to sit with a book and let the evening unfold.",
  },
  {
    title: "Radical Hospitality",
    desc: "You are not a customer. You are a guest. Whether it is your first pour-over or your hundredth, you are welcome at our table.",
  },
  {
    title: "Craft Without Compromise",
    desc: "From bean to cup, every decision respects the product and the person drinking it. We do not cut corners. We do not rush the shot.",
  },
  {
    title: "Community Over Commerce",
    desc: "This is a living room for Bharuch. We host open mic nights, local art, book swaps, and quiet corners for those who need them.",
  },
];

const timeline = [
  { year: "2025", event: "The dream took shape — a vision for Bharuch's first literary cafe" },
  { year: "2025", event: "Found the perfect spot on Tavra Road; began building the space" },
  { year: "2025", event: "Eighteen Stories opened its doors to the city" },
  { year: "2025", event: "Listed on Zomato; became Bharuch's most-talked-about new destination" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1C0F0A]">
      <section className="relative pt-16 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(232,160,69,0.08)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="text-[#E8A045] text-[11px] uppercase tracking-[0.25em] font-medium">
              Our Story
            </span>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-[#F5F0EB] mt-4">
              A Room Called{" "}
              <span className="text-[#E8A045]">Home</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={0}
            >
              <p className="text-[#F5F0EB]/70 text-sm sm:text-base leading-[1.8]">
                Eighteen Stories was born from a simple belief — that Bharuch
                deserved a space where coffee was more than caffeine. A place
                where every cup came with a story, and every guest left with one
                too.
              </p>
              <p className="text-[#F5F0EB]/70 text-sm sm:text-base leading-[1.8] mt-6">
                We wanted a room where you could stay. Where the lighting was
                warm enough to read by and the music was loud enough to feel but
                quiet enough to think. A sanctuary on Tavra Road, away from the
                rush.
              </p>
              <p className="text-[#F5F0EB]/70 text-sm sm:text-base leading-[1.8] mt-6">
                Named for the eighteen stories that live within these walls —
                yours, ours, and the ones still being written — we opened our
                doors with a single espresso machine and a conviction that
                great coffee, done right, builds community.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#2A1A10] rounded-2xl border border-[#3A2518]/50 p-8 sm:p-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={1}
            >
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[#F5F0EB] mb-8">
                Our Journey
              </h3>
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div key={`${item.year}-${i}`} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-[#E8A045] mt-1.5" />
                      {i < timeline.length - 1 && (
                        <div className="w-px flex-1 bg-[#3A2518]/50 mt-2" />
                      )}
                    </div>
                    <div>
                      <span className="font-[family-name:var(--font-heading)] text-sm font-bold text-[#E8A045]">
                        {item.year}
                      </span>
                      <p className="text-[#F5F0EB]/60 text-sm mt-1 leading-relaxed">
                        {item.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 overflow-hidden">
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
              Our Values
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold leading-[1.1] tracking-tight text-[#F5F0EB] mt-4">
              What We Stand{" "}
              <span className="text-[#E8A045]">For</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="group p-8 bg-[#2A1A10] rounded-2xl border border-[#3A2518]/50 hover:border-[#E8A045]/20 transition-all duration-500"
              >
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[#F5F0EB] mb-3 group-hover:text-[#E8A045] transition-colors duration-300">
                  {val.title}
                </h3>
                <p className="text-[#F5F0EB]/60 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-[#F5F0EB] mb-6">
              Come find your{" "}
              <span className="text-[#E8A045]">story</span>
            </h2>
            <p className="text-[#F5F0EB]/70 text-base max-w-lg mx-auto mb-10 leading-relaxed">
              We are open till late. The espresso is always flowing, and there
              is always a seat waiting for you on Tavra Road.
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
    </div>
  );
}
