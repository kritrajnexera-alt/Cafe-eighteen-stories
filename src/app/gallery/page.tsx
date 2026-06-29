"use client";

import { motion } from "framer-motion";

const images = [
  { src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=1000&fit=crop&auto=format", label: "The Bar", span: "lg:col-span-2 lg:row-span-2" },
  { src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=600&h=450&fit=crop&auto=format", label: "Pour Over" },
  { src: "https://images.unsplash.com/photo-1470337458703-46a1758b2d8c?w=600&h=450&fit=crop&auto=format", label: "Corner Seat" },
  { src: "https://images.unsplash.com/photo-1502741224143-f90302d4aa70?w=600&h=450&fit=crop&auto=format", label: "Late Night" },
  { src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&h=450&fit=crop&auto=format", label: "Espresso" },
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=900&fit=crop&auto=format", label: "The Patio", span: "lg:row-span-2" },
  { src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&h=450&fit=crop&auto=format", label: "Details" },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const ease = [0.32, 0.72, 0, 1] as const;

const itemVar = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#0C0A08]">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            <span className="font-[family-name:var(--font-hero)] text-[clamp(4rem,12vw,10rem)] leading-none tracking-[0.08em] text-[#D4AF37] opacity-[0.08] select-none block mb-4">
              G
            </span>
            <h1 className="font-[family-name:var(--font-hero)] text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-[0.05em] text-[#F5F0E8] mt-2">
              The Visual Diary
            </h1>
            <p className="text-[#F5F0E8]/40 text-sm mt-4 max-w-md leading-relaxed">
              A glimpse into the world of Eighteen Stories &mdash; captured in
              light, shadow, and gold.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider my-0" />

      <section className="relative py-16 pb-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-auto"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {images.map((img) => (
              <motion.div
                key={img.label}
                variants={itemVar}
                className={`group relative overflow-hidden bg-[#161310] border border-[#D4AF37]/10 ${img.span || ""}`}
              >
                <div
                  className="aspect-[4/3] sm:aspect-auto sm:min-h-[280px] lg:min-h-[320px] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${img.src})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A08]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="font-[family-name:var(--font-nav)] text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]">
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={itemVar}
          >
            <p className="text-[#F5F0E8]/30 text-sm font-[family-name:var(--font-sub)] italic mb-4">
              Follow us for daily stories
            </p>
            <a
              href="https://instagram.com/eighteenstories"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-[#D4AF37] font-[family-name:var(--font-nav)] text-[11px] tracking-[0.3em] uppercase transition-all duration-500 hover:text-[#F5F0E8]"
            >
              <span>@eighteenstories</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
