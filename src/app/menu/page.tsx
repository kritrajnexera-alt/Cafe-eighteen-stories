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

const chapters = [
  {
    number: "I",
    title: "Cold Beverages",
    items: [
      { name: "Cold Brew", price: "₹180" },
      { name: "Iced Latte", price: "₹200" },
      { name: "Iced Matcha", price: "₹220" },
      { name: "Lemon Mint Cooler", price: "₹180" },
      { name: "Berry Smoothie", price: "₹250" },
    ],
  },
  {
    number: "II",
    title: "Hot Brews",
    items: [
      { name: "House Espresso", price: "₹150" },
      { name: "Americano", price: "₹170" },
      { name: "Cappuccino", price: "₹200" },
      { name: "Flat White", price: "₹220" },
      { name: "Pour Over", price: "₹280" },
    ],
  },
  {
    number: "III",
    title: "Food & Bites",
    items: [
      { name: "Truffle Pasta", price: "₹320" },
      { name: "Grilled Sandwich", price: "₹250" },
      { name: "Arancini", price: "₹280" },
      { name: "Caprese Salad", price: "₹280" },
      { name: "Fries with Dip", price: "₹180" },
    ],
  },
  {
    number: "IV",
    title: "Desserts",
    items: [
      { name: "Signature Waffle", price: "₹220" },
      { name: "Tiramisu", price: "₹250" },
      { name: "Molten Lava Cake", price: "₹280" },
      { name: "Panna Cotta", price: "₹250" },
      { name: "Affogato", price: "₹220" },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#0C0A08]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&h=1080&fit=crop&auto=format)" }}
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
              M
            </span>
            <h1 className="font-[family-name:var(--font-hero)] text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-[0.05em] text-[#F5F0E8] mt-2">
              The Menu
            </h1>
            <p className="text-[#F5F0E8]/40 text-sm mt-4 max-w-md leading-relaxed">
              Every item crafted with intention. Premium ingredients, honest
              prices.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider my-0" />

      <section className="relative py-16 pb-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {chapters.map((chapter, ci) => (
              <motion.div
                key={chapter.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={ci}
              >
                <span className="font-[family-name:var(--font-hero)] text-[#D4AF37]/20 text-sm tracking-[0.15em]">
                  Chapter {chapter.number}
                </span>
                <h2 className="font-[family-name:var(--font-sub)] text-2xl italic text-[#F5F0E8] mt-1 mb-8 pb-4 border-b border-[#D4AF37]/10">
                  {chapter.title}
                </h2>
                <div className="space-y-5">
                  {chapter.items.map((item) => (
                    <div key={item.name} className="group flex items-center justify-between gap-4 pb-4 border-b border-[#D4AF37]/5">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-[family-name:var(--font-sub)] text-base text-[#F5F0E8] group-hover:text-[#D4AF37] transition-colors duration-300">
                            {item.name}
                          </span>
                          <span className="text-[#D4AF37] text-sm ml-4">{item.price}</span>
                        </div>
                        <div className="gold-underline h-[1px] mt-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
