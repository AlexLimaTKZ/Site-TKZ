"use client";

import { motion } from "framer-motion";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { Gamepad2 } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";

const lolPlayers = [
  { initials: "CN", name: "cNr#hanny", role: "Toplaner", color: "from-red-500 to-orange-500", badge: null },
  { initials: "PP", name: "Pompon#Tenza", role: "Jungler", color: "from-green-500 to-emerald-500", badge: null },
  { initials: "ZY", name: "Zeyus#fun", role: "Midlaner", color: "from-blue-500 to-cyan-500", badge: "⭐ Capitão" },
  { initials: "GZ", name: "Gz 十#Demon", role: "Adcarry", color: "from-purple-500 to-pink-500", badge: null },
  { initials: "VT", name: "vitim perturbado#sup", role: "Support", color: "from-yellow-500 to-amber-500", badge: null },
  { initials: "XX", name: "xxingliing#BR1", role: "Reserva", color: "from-gray-500 to-slate-500", badge: null },
];

export function TimesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden px-6 py-24">
        <motion.div
          className="absolute h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <div className="relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-handwriting text-lg text-accent/70"
          >
            Roster Oficial
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-6xl tracking-tight sm:text-7xl"
          >
            Nossas Equipes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-lg text-lg text-text-secondary"
          >
            Conheça os jogadores que representam a TKZ E-SPORTS
          </motion.p>
        </div>
      </section>

      {/* League of Legends */}
      <AnimatedSection className="mx-auto max-w-5xl px-6 pb-24">
        <AnimatedItem>
          <div className="mb-8 flex flex-col items-center justify-center gap-2">
            <span className="rounded-full border border-accent/30 bg-accent-glow px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
              🏆 Série A — Liga GG
            </span>
            <div className="flex items-center gap-3">
              <Gamepad2 className="h-8 w-8 text-accent" />
              <h2 className="font-display text-4xl tracking-tight text-accent">League of Legends</h2>
            </div>
          </div>
        </AnimatedItem>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lolPlayers.map((player) => (
            <AnimatedItem key={player.name}>
              <TiltCard className="group relative flex flex-col items-center rounded-2xl border border-border bg-bg-element p-8 text-center transition-all hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,204,255,0.1)]">
                {player.badge && (
                  <span className="absolute -top-3 right-4 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-0.5 text-xs font-semibold text-yellow-400">
                    {player.badge}
                  </span>
                )}
                <div className={`mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${player.color} text-2xl font-bold text-white shadow-lg ring-2 ring-bg ring-offset-2 ring-offset-bg-element transition-transform group-hover:scale-105`}>
                  {player.initials}
                </div>
                <h3 className="text-lg font-bold tracking-tight">{player.name}</h3>
                <span className="mt-1 inline-block rounded-full bg-accent-glow px-3 py-1 text-xs font-semibold text-accent">
                  {player.role}
                </span>
              </TiltCard>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}
