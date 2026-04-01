"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <section className="relative flex min-h-[calc(100vh-200px)] items-center justify-center overflow-hidden px-6">
      {/* Animated glow */}
      <motion.div
        className="absolute h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent-glow"
        >
          <Lock className="h-10 w-10 text-accent" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-7xl tracking-tight text-accent sm:text-8xl"
        >
          Em Breve
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-4 max-w-md text-lg text-text-secondary"
        >
          Nosso sistema de login e cadastro está sendo preparado. Fique de olho!
        </motion.p>
      </div>
    </section>
  );
}
