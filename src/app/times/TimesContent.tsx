"use client";

import { motion } from "framer-motion";
import { Gamepad2, Clock } from "lucide-react";

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

      {/* Em Breve */}
      <section className="mx-auto max-w-3xl px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col items-center rounded-2xl border border-border bg-bg-element p-12 text-center sm:p-16"
        >
          {/* Glow */}
          <div className="absolute -inset-1 -z-10 rounded-2xl bg-accent/5 blur-2xl" />

          {/* Icon pulse */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-accent/20 bg-accent/5"
          >
            <Gamepad2 className="h-10 w-10 text-accent" />
          </motion.div>

          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
            Em Breve
          </h2>

          <p className="mx-auto mt-4 max-w-md text-text-secondary">
            Nosso time está sendo formado e em breve entraremos em atividade.
            Fique ligado nas nossas redes sociais para novidades!
          </p>

          {/* Status badge */}
          <div className="mt-8 flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 px-5 py-2">
            <Clock className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-400">
              Preparando o roster
            </span>
          </div>
        </motion.div>
      </section>
    </>
  );
}
