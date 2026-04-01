"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Tag, ArrowRight } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { StatsCounter } from "@/components/StatsCounter";
import { HeroCarousel } from "@/components/HeroCarousel";
import { TiltCard } from "@/components/TiltCard";

const conquistas = [
  { icon: <Trophy className="h-8 w-8" />, title: "Campeão Invicto", desc: "Copa Nordeste - Piauí" },
  { icon: <Medal className="h-8 w-8" />, title: "Tricampeão", desc: "Fase de Acesso Liga GG" },
  { icon: <Trophy className="h-8 w-8" />, title: "Campeão Serie C", desc: "Liga GG" },
  { icon: <Medal className="h-8 w-8" />, title: "Vice Campeão Serie B", desc: "Liga GG" },
  { icon: <Trophy className="h-8 w-8" />, title: "Campeão Serie A", desc: "Liga GG" },
];

const noticias = [
  {
    tag: "Equipes",
    time: "2 horas atrás",
    title: "TKZ Contrata Time 100% de Teresina-PI para Disputar Eventos Locais",
    desc: "Estamos muito felizes em anunciar a contratação de um time completo 100% teresinense para representar a TKZ nos eventos locais e regionais.",
  },
  {
    tag: "Design",
    time: "1 dia atrás",
    title: "Novo Time de Designer: Daniele Araujo e Alisson Kozzu Juntam-se à TKZ",
    desc: "Daniele Araujo e Alisson Kozzu são os novos integrantes do departamento de design da TKZ, trazendo experiência e criatividade.",
  },
  {
    tag: "Administração",
    time: "3 dias atrás",
    title: "Marley Brito Entra na Administração da TKZ",
    desc: "Marley Brito é o novo integrante do time administrativo da TKZ, trazendo sua experiência para fortalecer a gestão.",
  },
];

const videos = [
  { id: "XjvRtAW5yIE", title: "TKZ Highlights #1" },
  { id: "vZKF7XjEpfw", title: "TKZ Highlights #2" },
  { id: "VDlae12y4AA", title: "TKZ Highlights #3" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* TKZ em Ação */}
      <AnimatedSection className="px-6 py-24">
        <AnimatedItem>
          <p className="text-center font-handwriting text-lg text-accent/70">Highlights</p>
          <h2 className="text-center font-display text-5xl tracking-tight sm:text-6xl">TKZ em Ação</h2>
          <p className="mx-auto mb-12 mt-2 max-w-md text-center text-text-secondary">
            Assista aos nossos melhores momentos
          </p>
        </AnimatedItem>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {videos.map((video, i) => (
            <AnimatedItem key={video.id}>
              <motion.div
                className="group overflow-hidden rounded-2xl border border-border bg-bg-element transition-all hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,204,255,0.1)]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0${i === 0 ? "&autoplay=1&mute=1" : ""}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="h-full w-full"
                  />
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>

      {/* Conquistas */}
      <AnimatedSection className="px-6 py-24">
        <AnimatedItem>
          <p className="text-center font-handwriting text-lg text-accent/70">Hall da Fama</p>
          <h2 className="text-center font-display text-5xl tracking-tight sm:text-6xl">Nossas Conquistas</h2>
          <p className="mx-auto mb-12 mt-2 max-w-md text-center text-text-secondary">
            Os títulos que marcam nossa história
          </p>
        </AnimatedItem>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {conquistas.map((c, i) => (
            <AnimatedItem key={i}>
              <TiltCard className="group rounded-2xl border border-border bg-bg-element p-6 transition-all hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,204,255,0.1)]">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent-glow text-accent transition-transform group-hover:scale-110">
                  {c.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight">{c.title}</h3>
                <p className="mt-1 text-sm text-text-secondary">{c.desc}</p>
              </TiltCard>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Notícias */}
      <AnimatedSection className="px-6 py-24">
        <AnimatedItem>
          <p className="text-center font-handwriting text-lg text-accent/70">Fresh News</p>
          <h2 className="text-center font-display text-5xl tracking-tight sm:text-6xl">Últimas Notícias</h2>
          <p className="mx-auto mb-12 mt-2 max-w-md text-center text-text-secondary">
            Fique por dentro de tudo que acontece na TKZ
          </p>
        </AnimatedItem>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {noticias.map((n, i) => (
            <AnimatedItem key={i}>
              <TiltCard className="group flex h-full flex-col rounded-2xl border border-border bg-bg-element p-6 transition-all hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,204,255,0.1)]">
                <div className="mb-3 flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-glow px-3 py-1 text-xs font-semibold text-accent">
                    <Tag className="h-3 w-3" />
                    {n.tag}
                  </span>
                  <span className="text-xs text-text-muted">{n.time}</span>
                </div>
                <h3 className="mb-2 text-lg font-bold leading-tight tracking-tight">{n.title}</h3>
                <p className="mb-4 flex-grow text-sm leading-relaxed text-text-secondary">{n.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-all group-hover:gap-2">
                  Ler mais <ArrowRight className="h-4 w-4" />
                </span>
              </TiltCard>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>

      {/* Parceiros */}
      <AnimatedSection id="parceiros" className="px-6 py-24">
        <AnimatedItem>
          <p className="text-center font-handwriting text-lg text-accent/70">Sponsors</p>
          <h2 className="text-center font-display text-5xl tracking-tight sm:text-6xl">Parceiros</h2>
          <p className="mx-auto mb-12 mt-2 max-w-md text-center text-text-secondary">
            Marcas que confiam na TKZ
          </p>
        </AnimatedItem>

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-5 sm:grid-cols-4">
          {[1, 2, 3, 4].map((p) => (
            <AnimatedItem key={p}>
              <motion.div
                className="flex h-32 items-center justify-center rounded-2xl border border-border/50 bg-bg-element text-xl font-bold text-text-muted transition-all hover:border-accent/30 hover:text-text-secondary"
                whileHover={{ scale: 1.02 }}
              >
                Em breve
              </motion.div>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}
