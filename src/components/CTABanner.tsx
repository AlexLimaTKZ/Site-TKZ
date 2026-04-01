"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden border-t border-border/50 bg-gradient-to-br from-bg-element via-bg to-bg-element">
      {/* Glow */}
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-20 text-center lg:flex-row lg:text-left">
        {/* Text */}
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-2 font-handwriting text-lg text-accent"
          >
            Comunidade TKZ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl tracking-tight sm:text-5xl"
          >
            Faça Parte da Nossa Comunidade
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-lg text-text-secondary"
          >
            Receba notícias, resultados de campeonatos e conteúdo exclusivo.
            Junte-se a milhares de fãs que acompanham a TKZ.
          </motion.p>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="flex-1 rounded-xl border border-border bg-bg-element px-5 py-3.5 text-sm text-text outline-none transition-all placeholder:text-text-muted focus:border-accent focus:shadow-[0_0_20px_rgba(0,204,255,0.15)]"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-bg transition-all hover:bg-accent-dark hover:shadow-[0_0_30px_rgba(0,204,255,0.4)]"
          >
            <Send className="h-4 w-4" />
            Inscrever
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
