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

const categories = [
  {
    name: "Espresso",
    items: [
      { name: "House Espresso", price: "₹295", desc: "Single-origin, dark chocolate & cedar notes" },
      { name: "Doppio", price: "₹350", desc: "Double shot, straight up" },
      { name: "Cortado", price: "₹325", desc: "Equal parts espresso & steamed milk" },
      { name: "Flat White", price: "₹375", desc: "Double ristretto, silky microfoam" },
      { name: "Espresso Martini", price: "₹595", desc: "Espresso, vodka, Kahlúa, shaken" },
    ],
  },
  {
    name: "Filter",
    items: [
      { name: "V60 Pour Over", price: "₹395", desc: "Single-origin, rotating weekly" },
      { name: "AeroPress", price: "₹350", desc: "Clean, bright, full-bodied" },
      { name: "Cold Brew", price: "₹375", desc: "16-hour steep, served over a single cube" },
      { name: "Nitro Cold Brew", price: "₹425", desc: "Velvety smooth, nitrogen-infused" },
      { name: "Japanese Iced Coffee", price: "₹375", desc: "Flash-brewed over ice" },
    ],
  },
  {
    name: "Not Coffee",
    items: [
      { name: "Matcha Latte", price: "₹375", desc: "Ceremonial grade, whisked to order" },
      { name: "Hojicha Latte", price: "₹350", desc: "Roasted green tea, toasted & nutty" },
      { name: "Dark Chocolate", price: "₹325", desc: "72% single-origin, steamed with oat milk" },
      { name: "Masala Chai", price: "₹295", desc: "House blend, simmered with spices" },
      { name: "Earl Grey", price: "₹250", desc: "Bergamot, served loose-leaf" },
    ],
  },
  {
    name: "Bites",
    items: [
      { name: "Butter Croissant", price: "₹295", desc: "Layered, golden, made in-house" },
      { name: "Pistachio Bun", price: "₹325", desc: "With orange blossom glaze" },
      { name: "Banana Bread", price: "₹295", desc: "Salted honey butter on the side" },
      { name: "Avocado Toast", price: "₹425", desc: "Sourdough, chili flakes, lime" },
      { name: "Tiramisu", price: "₹395", desc: "Classic, espresso-soaked" },
    ],
  },
];

export default function MenuPage() {
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
              The Menu
            </span>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-[#F5F0EB] mt-4">
              What We <span className="text-[#E8A045]">Pour</span>
            </h1>
            <p className="text-[#F5F0EB]/70 text-sm sm:text-base mt-4 max-w-md leading-relaxed">
              Every drink and bite made with intention. Premium craft at honest prices.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {categories.map((category, catIdx) => (
              <motion.div
                key={category.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={catIdx}
              >
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#F5F0EB] mb-8 pb-4 border-b border-[#3A2518]/50">
                  <span className="text-[#E8A045]">/</span> {category.name}
                </h2>
                <div className="space-y-6">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="group flex items-start justify-between gap-4 pb-4 border-b border-[#3A2518]/20"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#F5F0EB] group-hover:text-[#E8A045] transition-colors duration-300">
                            {item.name}
                          </h3>
                          <span className="text-[#E8A045] font-[family-name:var(--font-heading)] text-sm font-semibold whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-[#F5F0EB]/60 text-xs leading-relaxed">
                          {item.desc}
                        </p>
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
