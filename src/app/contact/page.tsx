"use client";

import { motion } from "framer-motion";

const ease = [0.32, 0.72, 0, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease,
    },
  }),
};

const details = [
  {
    label: "Address",
    value: "Tavra Road, Bharuch, Gujarat 392001",
    href: "https://maps.google.com/?q=Tavra+Road+Bharuch",
  },
  {
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    label: "Email",
    value: "hello@eighteenstories.in",
    href: "mailto:hello@eighteenstories.in",
  },
  {
    label: "Hours",
    value: "Mon — Sun: 9AM — 11PM\nFri — Sat: 9AM — 1AM",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#1C0F0A]">
      <section className="relative pt-16 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(232,160,69,0.08)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="text-[#E8A045] text-[11px] uppercase tracking-[0.25em] font-medium">
              Get in Touch
            </span>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-[#F5F0EB] mt-4">
              Find Your{" "}
              <span className="text-[#E8A045]">Way</span>
            </h1>
            <p className="text-[#F5F0EB]/70 text-sm sm:text-base mt-4 max-w-md leading-relaxed">
              We are on Tavra Road, Bharuch. Pull up a chair — the door is
              always open.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={0}
            >
              {details.map((item) => (
                <div key={item.label}>
                  <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-[#E8A045] uppercase tracking-[0.15em] mb-2">
                    {item.label}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-[#F5F0EB]/70 hover:text-[#E8A045] text-sm leading-relaxed transition-colors duration-300 block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#F5F0EB]/70 text-sm leading-relaxed whitespace-pre-line">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}

              <div className="pt-4">
                <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-[#E8A045] uppercase tracking-[0.15em] mb-3">
                  Find us on Zomato
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E8A045]/10 border border-[#E8A045]/20 text-[#E8A045] text-sm font-medium hover:bg-[#E8A045]/20 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                  Order on Zomato
                </a>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={1}
            >
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#F5F0EB]/60 text-xs uppercase tracking-[0.15em] font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full bg-[#2A1A10] border border-[#3A2518]/50 rounded-xl px-4 py-3 text-[#F5F0EB] text-sm placeholder-[#F5F0EB]/30 focus:outline-none focus:border-[#E8A045]/50 transition-colors duration-300"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#F5F0EB]/60 text-xs uppercase tracking-[0.15em] font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full bg-[#2A1A10] border border-[#3A2518]/50 rounded-xl px-4 py-3 text-[#F5F0EB] text-sm placeholder-[#F5F0EB]/30 focus:outline-none focus:border-[#E8A045]/50 transition-colors duration-300"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[#F5F0EB]/60 text-xs uppercase tracking-[0.15em] font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-[#2A1A10] border border-[#3A2518]/50 rounded-xl px-4 py-3 text-[#F5F0EB] text-sm placeholder-[#F5F0EB]/30 focus:outline-none focus:border-[#E8A045]/50 transition-colors duration-300 resize-none"
                    placeholder="Tell us your story..."
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#E8A045] text-[#1C0F0A] font-[family-name:var(--font-body)] font-semibold text-sm transition-all duration-500 hover:shadow-lg hover:shadow-[#E8A045]/25 focus-visible:outline-2 focus-visible:outline-[#F5F0EB] focus-visible:outline-offset-2"
                >
                  <span>Send Message</span>
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
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
