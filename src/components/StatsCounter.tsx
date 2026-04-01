"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCounter(end: number, duration: number = 2, inView: boolean = false) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return count;
}

const stats = [
  { value: 2014, label: "Fundação", prefix: "", suffix: "" },
  { value: 5, label: "Títulos Conquistados", prefix: "", suffix: "+" },
  { value: 2000, label: "Seguidores", prefix: "", suffix: "+" },
  { value: 10, label: "Atletas Ativos", prefix: "", suffix: "+" },
];

export function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-border/50 bg-bg-element/50 px-6 py-20">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <CounterCard key={i} stat={stat} index={i} inView={isInView} />
        ))}
      </div>
    </section>
  );
}

function CounterCard({
  stat,
  index,
  inView,
}: {
  stat: (typeof stats)[number];
  index: number;
  inView: boolean;
}) {
  const count = useCounter(stat.value, 2.5, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="flex flex-col items-center text-center"
    >
      <span className="font-display text-5xl tracking-tight text-accent sm:text-6xl">
        {stat.prefix}
        {count.toLocaleString("pt-BR")}
        {stat.suffix}
      </span>
      <span className="mt-2 text-sm font-medium uppercase tracking-widest text-text-secondary">
        {stat.label}
      </span>
    </motion.div>
  );
}
