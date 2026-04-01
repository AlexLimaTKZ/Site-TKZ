"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Particles } from "@/components/Particles";

export default function NotFoundPage() {
  return (
    <section className="relative flex min-h-[calc(100vh-200px)] items-center justify-center overflow-hidden px-6">
      <Particles count={30} />

      {/* Glow */}
      <motion.div
        className="absolute h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center">
        {/* Glitch Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-[10rem] leading-none tracking-tight text-accent/20 sm:text-[14rem]">
            404
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="-mt-8 font-handwriting text-2xl text-accent"
        >
          Oops! Página não encontrada
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-4 max-w-md text-text-secondary"
        >
          Parece que você se perdeu no mapa. A página que procura não existe ou foi movida.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-bg transition-all hover:bg-accent-dark hover:shadow-[0_0_30px_rgba(0,204,255,0.4)]"
          >
            <Home className="h-4 w-4" />
            Voltar ao Início
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-semibold text-text-secondary transition-all hover:border-accent hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Página Anterior
          </button>
        </motion.div>
      </div>
    </section>
  );
}
