"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "RAZER" },
  { name: "RED BULL" },
  { name: "LOGITECH G" },
  { name: "CORSAIR" },
  { name: "INTEL" },
  { name: "NVIDIA" },
  { name: "ASUS ROG" },
  { name: "HYPERX" },
];

export function PartnerMarquee() {
  // Repetimos a lista 4 vezes para cobrir larguras de telas ultra-wide (4K+) e evitar vãos vazios
  const list = [...partners, ...partners, ...partners, ...partners];

  return (
    <div className="relative w-full overflow-hidden py-3 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-bg before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-bg after:to-transparent">
      <div className="flex w-max">
        <motion.div
          className="flex gap-16 pr-16"
          animate={{ x: [0, "-25%"] }} // Move exatamente 1 repetição da lista (25% do total de 4x) para loop infinito perfeito
          transition={{
            ease: "linear",
            duration: 20, // Mantém velocidade suave e contínua
            repeat: Infinity,
          }}
        >
          {list.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center font-display text-lg tracking-[0.2em] text-text-secondary/35 transition-all duration-300 hover:scale-105 hover:text-accent hover:drop-shadow-[0_0_8px_rgba(0,204,255,0.4)]"
            >
              {partner.name}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
