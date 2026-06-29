"use client";

import { motion } from "framer-motion";

const images = [
  {
    label: "The Bar",
    desc: "Warm amber light on mahogany",
    gradient: "from-[#2A1A10] via-[#3A2518] to-[#4A3020]",
    icon: "☕",
  },
  {
    label: "Pour Over",
    desc: "Precision in every brew",
    gradient: "from-[#1C0F0A] via-[#3A2518] to-[#2A1A10]",
    icon: "⚗️",
  },
  {
    label: "Corner Seat",
    desc: "Where stories begin",
    gradient: "from-[#2A1A10] via-[#4A3020] to-[#1C0F0A]",
    icon: "🪔",
  },
  {
    label: "Late Night",
    desc: "Quiet hours after dark",
    gradient: "from-[#1A0D08] via-[#2A1A10] to-[#3A2518]",
    icon: "🌙",
  },
  {
    label: "Espresso",
    desc: "Golden crema, perfect extraction",
    gradient: "from-[#3A2518] via-[#2A1A10] to-[#1C0F0A]",
    icon: "🍂",
  },
  {
    label: "The Patio",
    desc: "Under the city lights",
    gradient: "from-[#1C0F0A] via-[#2A1A10] to-[#4A3020]",
    icon: "🌟",
  },
];

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const ease = [0.32, 0.72, 0, 1] as const;

const itemVar = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export default function GalleryPage() {
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
              The Visual Diary
            </span>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-[#F5F0EB] mt-4">
              Through the <span className="text-[#E8A045]">Lens</span>
            </h1>
            <p className="text-[#F5F0EB]/70 text-sm sm:text-base mt-4 max-w-md leading-relaxed">
              A glimpse into the world of Eighteen Stories — captured in light,
              shadow, and amber tones. Real photos coming soon.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {images.map((img) => (
              <motion.div
                key={img.label}
                variants={itemVar}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#3A2518]/50"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${img.gradient}`} />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,160,69,0.08)_0%,_transparent_60%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F0A]/70 via-transparent to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-[5]">
                  <span className="text-6xl sm:text-7xl opacity-40 select-none">
                    {img.icon}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[#F5F0EB] group-hover:text-[#E8A045] transition-colors duration-300">
                    {img.label}
                  </h3>
                  <p className="text-[#F5F0EB]/60 text-xs mt-1">{img.desc}</p>
                </div>
                <div className="absolute inset-0 bg-[#E8A045]/0 group-hover:bg-[#E8A045]/5 transition-all duration-500 z-10" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
