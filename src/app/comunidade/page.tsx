"use client";

import { motion } from "framer-motion";
import { Camera, MessageCircle, Users } from "lucide-react";

const communityChannels = [
  {
    name: "Discord",
    desc: "Canais de conversa, chamadas para jogar, avisos e bastidores da organização.",
    href: "https://discord.gg/5CnzeWUJPG",
    label: "Entrar no Discord",
  },
  {
    name: "WhatsApp",
    desc: "Comunicados rápidos, convites e novidades para quem quer acompanhar de perto.",
    href: "https://chat.whatsapp.com/DsFyAlmyLEg0JF1dylfsvs",
    label: "Entrar no grupo",
  },
  {
    name: "Instagram",
    desc: "Fotos, vídeos, stories e cobertura visual da rotina da TKZ.",
    href: "https://www.instagram.com/esportstkz/",
    label: "Seguir a TKZ",
  },
];

export default function ComunidadePage() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      {/* Animated glow */}
      <motion.div
        className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent-glow"
        >
          <Users className="h-10 w-10 text-accent" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-7xl tracking-tight text-accent sm:text-8xl"
        >
          Comunidade TKZ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-4 max-w-md text-lg text-text-secondary"
        >
          Entre nos canais oficiais para acompanhar jogos, eventos, peneiras, bastidores e resenha com quem vive a TKZ.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 grid grid-cols-1 gap-5 text-left md:grid-cols-3"
        >
          {communityChannels.map((channel) => (
            <a
              key={channel.name}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-border bg-bg-element p-6 transition-all hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,204,255,0.1)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-glow text-accent">
                {channel.name === "Instagram" ? <Camera className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
              </div>
              <h2 className="text-xl font-bold tracking-tight">{channel.name}</h2>
              <p className="mt-2 flex-grow text-sm leading-relaxed text-text-secondary">{channel.desc}</p>
              <span className="mt-6 text-sm font-semibold text-accent transition-all group-hover:translate-x-1">
                {channel.label}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
