"use client";

import { motion } from "framer-motion";

const ease = [0.32, 0.72, 0, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.8, ease },
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
    value: "Mon &mdash; Sun: 9AM &mdash; 11PM\nFri &mdash; Sat: 9AM &mdash; 1AM",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0C0A08]">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="font-[family-name:var(--font-hero)] text-[clamp(4rem,12vw,10rem)] leading-none tracking-[0.08em] text-[#D4AF37] opacity-[0.08] select-none block mb-4">
              C
            </span>
            <h1 className="font-[family-name:var(--font-hero)] text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-[0.05em] text-[#F5F0E8] mt-2">
              Find Us
            </h1>
            <p className="text-[#F5F0E8]/40 text-sm mt-4 max-w-md leading-relaxed">
              Tavra Road, Bharuch. Pull up a chair &mdash; the door is always
              open.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider my-0" />

      <section className="relative py-16 pb-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              className="space-y-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={0}
            >
              {details.map((item) => (
                <div key={item.label}>
                  <h3 className="font-[family-name:var(--font-nav)] text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]/60 mb-2">
                    {item.label}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-[#F5F0E8]/60 hover:text-[#D4AF37] text-sm leading-relaxed transition-colors duration-300 block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      className="text-[#F5F0E8]/60 text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.value }}
                    />
                  )}
                </div>
              ))}

              <div className="pt-4">
                <h3 className="font-[family-name:var(--font-nav)] text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]/60 mb-3">
                  Find us on Zomato
                </h3>
                <a
                  href="https://zomato.com/bharuch/eighteen-stories-tavra-road"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#D4AF37]/20 text-[#D4AF37] text-[11px] tracking-[0.2em] uppercase font-[family-name:var(--font-nav)] hover:bg-[#D4AF37] hover:text-[#0C0A08] transition-all duration-500"
                >
                  Order on Zomato
                </a>
              </div>
            </motion.div>

            <motion.div
              className="space-y-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={1}
            >
              <div className="bg-[#161310] border border-[#D4AF37]/10 aspect-[16/9] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5!2d73.0!3d21.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQyJzAwLjAiTiA3M8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eighteen Stories location on Tavra Road, Bharuch"
                  className="opacity-60 hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              <div className="text-center">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-7 py-3 border border-[#D4AF37]/40 text-[#D4AF37] font-[family-name:var(--font-nav)] text-[11px] tracking-[0.3em] uppercase transition-all duration-500 hover:bg-[#D4AF37] hover:text-[#0C0A08]"
                >
                  <span>WhatsApp inquiry</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
