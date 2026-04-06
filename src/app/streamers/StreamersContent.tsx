"use client";

import { motion } from "framer-motion";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { ExternalLink, Users } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";
import Image from "next/image";

const streamers = [
  {
    initials: "AL",
    name: "Alex Lima",
    tag: "LiderTKZ",
    photo: "/Staff/Alex Lima.png",
    bio: "Salve! Sou Alex Lima. Fundador da TKZ E-sports — direto de Teresina pro mundo. Top 1 Rammus, otaku raiz e pensador noturno, apaixonado por filosofia, psicologia e tudo que mexe com o cérebro. Tryhard nos games e na vida, sempre buscando o próximo nível com sabedoria, intensidade.",
    stats: "2.000 seguidores na Twitch",
    platform: "Twitch",
    platformColor: "bg-twitch",
    platformHover: "hover:bg-twitch/80",
    link: "https://www.twitch.tv/LiderTKZ",
    gradient: "from-twitch to-purple-700",
  },
  {
    initials: "MB",
    name: "Marlon Brito",
    tag: "TKZ Caveiro",
    photo: "/Staff/Marlon Brito.jpeg",
    bio: "Marlon Brito, mais conhecido como TKZ Caveiro, faz lives em sua grande maioria de eFootball, com resenha garantida, muita zoeira e diversão. Acompanhe suas lives de Domingo a Sexta toda noite no Tiktok.",
    stats: "",
    platform: "TikTok",
    platformColor: "bg-bg border border-text/20",
    platformHover: "hover:bg-text/10",
    link: "https://www.tiktok.com/@marlonbritobjj",
    gradient: "from-pink-500 to-red-500",
  },
  {
    initials: "MR",
    name: "Marley Brito",
    tag: "Mulambo Games",
    photo: "/Staff/Marley Brito.jpeg",
    bio: "Marley Brito, o Mulambo Games, é o streamer que enfrenta os horrores dos games de terror com coragem (e sustos!). Especialista em Resident Evil e outros títulos de horror, suas lives no TikTok garantem adrenalina, risadas e muita tensão.",
    stats: "",
    platform: "TikTok",
    platformColor: "bg-bg border border-text/20",
    platformHover: "hover:bg-text/10",
    link: "https://www.tiktok.com/@mulambogames",
    gradient: "from-emerald-500 to-green-700",
  },
];

export function StreamersContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden px-6 py-24">
        <motion.div
          className="absolute h-[400px] w-[400px] rounded-full bg-twitch/10 blur-[100px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <div className="relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-handwriting text-lg text-twitch/70"
          >
            Creators
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-6xl tracking-tight sm:text-7xl"
          >
            Nossos Streamers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-lg text-lg text-text-secondary"
          >
            Conheça os talentos que levam a TKZ para o mundo!
          </motion.p>
        </div>
      </section>

      {/* Streamers Grid */}
      <AnimatedSection className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {streamers.map((streamer) => (
            <AnimatedItem key={streamer.name}>
              <TiltCard className="group relative flex h-full flex-col rounded-2xl border border-border bg-bg-element p-8 transition-all hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,204,255,0.1)]">
                {/* LIVE Badge for Twitch streamers */}
                {streamer.platform === "Twitch" && (
                  <span className="absolute -top-3 right-4 flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-0.5 text-xs font-semibold text-red-400">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                    </span>
                    LIVE
                  </span>
                )}

                {/* Avatar */}
                <div className="relative mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full ring-2 ring-accent/30 ring-offset-2 ring-offset-bg-element transition-transform group-hover:scale-105">
                  <Image
                    src={streamer.photo}
                    alt={`Foto de ${streamer.name}, streamer da TKZ E-SPORTS`}
                    fill
                    className="object-cover object-top"
                    sizes="112px"
                  />
                </div>

                {/* Info */}
                <h3 className="text-center text-2xl font-bold tracking-tight">{streamer.name}</h3>
                <p className="mb-4 text-center font-semibold text-twitch">{streamer.tag}</p>
                <p className="mb-6 flex-grow text-sm leading-relaxed text-text-secondary">{streamer.bio}</p>

                {/* Stats */}
                {streamer.stats && (
                  <div className="mb-4 flex items-center justify-center gap-2 text-sm text-text-muted">
                    <Users className="h-4 w-4" />
                    {streamer.stats}
                  </div>
                )}

                {/* CTA */}
                <a
                  href={streamer.link}
                  target="_blank"
                  className={`flex items-center justify-center gap-2 rounded-xl ${streamer.platformColor} ${streamer.platformHover} px-6 py-3 font-semibold text-text transition-all`}
                >
                  <ExternalLink className="h-4 w-4" />
                  Assistir na {streamer.platform}
                </a>
              </TiltCard>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}
