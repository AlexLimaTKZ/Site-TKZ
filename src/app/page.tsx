"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tag, ArrowRight, Award, Gamepad2, Play, Star, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { StatsCounter } from "@/components/StatsCounter";
import { HeroCarousel } from "@/components/HeroCarousel";
import { TiltCard } from "@/components/TiltCard";

const conquistas = [
  {
    image: "/images/conquistas/campeao-invicto.png",
    title: "Campeão Invicto",
    desc: "Copa Nordeste - Piauí",
    badge: "Invicto",
    type: "Domínio regional",
    accent: "from-yellow-400/25",
  },
  {
    image: "/images/conquistas/tricampeao.png",
    title: "Tricampeão",
    desc: "Fase de Acesso Liga GG",
    badge: "3x",
    type: "Sequência histórica",
    accent: "from-accent/25",
  },
  {
    image: "/images/conquistas/campeao-serie-c.png",
    title: "Campeão Série C",
    desc: "Liga GG",
    badge: "Título",
    type: "Campanha vencedora",
    accent: "from-emerald-400/20",
  },
  {
    image: "/images/conquistas/vice-campeao-serie-b.png",
    title: "Vice Campeão Série B",
    desc: "Liga GG",
    badge: "Pódio",
    type: "Acesso competitivo",
    accent: "from-slate-200/20",
  },
  {
    image: "/images/conquistas/campeao-serie-a.png",
    title: "Acesso à Série A",
    desc: "Liga GG",
    badge: "Elite",
    type: "Novo patamar",
    accent: "from-purple-400/20",
  },
];

const novidades = [
  {
    tag: "Equipes",
    time: "Competitivo",
    title: "Base regional com ambição nacional",
    desc: "A TKZ segue valorizando jogadores do Piauí e do Nordeste, conectando talento local a torneios, treinos e oportunidades reais no cenário competitivo.",
    href: "/times",
    accent: "text-yellow-300",
    glow: "from-yellow-300/15",
    border: "hover:border-yellow-300/45",
  },
  {
    tag: "Comunidade",
    time: "Discord",
    title: "A porta de entrada é a comunidade",
    desc: "O Discord reúne avisos, resenha, chamadas para jogar, eventos e bastidores da organização para quem quer acompanhar ou se aproximar da TKZ.",
    href: "/comunidade",
    accent: "text-discord",
    glow: "from-discord/20",
    border: "hover:border-discord/50",
  },
  {
    tag: "Creators",
    time: "Ao vivo",
    title: "Streamers levando a TKZ para novas telas",
    desc: "Criadores da casa produzem conteúdo em Twitch e TikTok, aproximando a torcida da rotina, dos jogos e da personalidade da organização.",
    href: "/streamers",
    accent: "text-twitch",
    glow: "from-twitch/20",
    border: "hover:border-twitch/50",
  },
];

const videos = [
  { id: "XjvRtAW5yIE", title: "TKZ Highlights #1" },
  { id: "vZKF7XjEpfw", title: "TKZ Highlights #2" },
  { id: "VDlae12y4AA", title: "TKZ Highlights #3" },
];

const modalidades = [
  {
    name: "League of Legends",
    label: "MOBA PC",
    desc: "Estratégia, macrojogo e competição em equipe no cenário que molda a base da TKZ.",
    href: "/times",
    icon: <Trophy className="h-5 w-5" />,
    accent: "text-yellow-300",
    border: "hover:border-yellow-300/50",
    glow: "from-yellow-300/20",
  },
  {
    name: "Wild Rift",
    label: "Mobile",
    desc: "Velocidade, rotação e mecânica para levar o competitivo também para o mobile.",
    href: "/times",
    icon: <Gamepad2 className="h-5 w-5" />,
    accent: "text-accent",
    border: "hover:border-accent/50",
    glow: "from-accent/20",
  },
  {
    name: "Teamfight Tactics",
    label: "Auto battler",
    desc: "Leitura de meta, adaptação e tomada de decisão para quem vence antes da luta começar.",
    href: "/comunidade",
    icon: <Star className="h-5 w-5" />,
    accent: "text-purple-300",
    border: "hover:border-purple-300/50",
    glow: "from-purple-400/20",
  },
  {
    name: "eFootball",
    label: "Esporte digital",
    desc: "Resenha, rivalidade e técnica para aproximar a comunidade do futebol competitivo.",
    href: "/streamers",
    icon: <Award className="h-5 w-5" />,
    accent: "text-emerald-300",
    border: "hover:border-emerald-300/50",
    glow: "from-emerald-400/20",
  },
];

const proximosPassos = [
  {
    title: "Quero jogar",
    desc: "Acompanhe peneiras, treinos e chamadas para partidas com a comunidade.",
    action: "Ver times",
    href: "/times",
    accent: "text-yellow-300",
    marker: "bg-yellow-300",
  },
  {
    title: "Quero acompanhar",
    desc: "Entre nos canais oficiais para receber bastidores, avisos e transmissões.",
    action: "Entrar na comunidade",
    href: "/comunidade",
    accent: "text-discord",
    marker: "bg-discord",
  },
  {
    title: "Quero apoiar",
    desc: "Associe sua marca a atletas, conteúdo e eventos da TKZ.",
    action: "Falar com a TKZ",
    href: "/#parceiros",
    accent: "text-accent",
    marker: "bg-accent",
  },
];

function HighlightVideoCard({ video }: { video: (typeof videos)[number] }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      className="group overflow-hidden rounded-2xl border border-border bg-bg-element transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,204,255,0.12)]"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative aspect-video">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?rel=0&autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="relative h-full w-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            aria-label={`Assistir ${video.title}`}
          >
            <Image
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt={`Thumbnail do vídeo ${video.title}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/35 to-transparent" />
            <div className="absolute inset-0 bg-accent/0 transition-colors duration-300 group-hover:bg-accent/10" />

            <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary backdrop-blur-md">
              Highlight
            </span>

            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/40 bg-accent text-bg shadow-[0_0_32px_rgba(0,204,255,0.35)] transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-1 h-7 w-7 fill-current" />
            </span>

            <span className="absolute bottom-4 left-4 right-4 text-base font-bold tracking-tight text-text">
              {video.title}
            </span>
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Modalidades */}
      <AnimatedSection className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:items-end">
          <AnimatedItem>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent/70">Modalidades</p>
            <h2 className="mt-2 font-display text-5xl tracking-tight sm:text-6xl">Onde a TKZ Joga</h2>
            <p className="mt-4 max-w-md text-text-secondary">
              A identidade da TKZ passa por competição, comunidade e conteúdo. Cada modalidade abre uma porta diferente
              para jogar, torcer ou acompanhar.
            </p>
          </AnimatedItem>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {modalidades.map((modalidade, i) => (
              <AnimatedItem key={modalidade.name}>
                <Link
                  href={modalidade.href}
                  className={`group relative flex min-h-44 overflow-hidden rounded-2xl border border-border bg-bg-element p-5 transition-all duration-300 hover:-translate-y-1 ${modalidade.border} hover:shadow-[0_0_32px_rgba(0,204,255,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50`}
                >
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${modalidade.glow} via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100`} />
                  <div className="relative flex w-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/35 ${modalidade.accent}`}>
                        {modalidade.icon}
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="mt-7">
                      <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${modalidade.accent}`}>{modalidade.label}</p>
                      <h3 className="mt-1 text-2xl font-bold tracking-tight text-text transition-colors group-hover:text-accent">
                        {modalidade.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">{modalidade.desc}</p>
                    </div>
                  </div>
                </Link>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* TKZ em Ação */}
      <AnimatedSection className="px-6 py-24">
        <AnimatedItem>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-accent/70">Highlights</p>
          <h2 className="text-center font-display text-5xl tracking-tight sm:text-6xl">TKZ em Ação</h2>
          <p className="mx-auto mb-12 mt-2 max-w-md text-center text-text-secondary">
            Assista aos nossos melhores momentos
          </p>
        </AnimatedItem>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {videos.map((video) => (
            <AnimatedItem key={video.id}>
              <HighlightVideoCard video={video} />
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>

      {/* Conquistas */}
      <AnimatedSection id="conquistas" className="scroll-mt-28 px-6 py-24">
        <AnimatedItem>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-accent/70">Hall da Fama</p>
          <h2 className="text-center font-display text-5xl tracking-tight sm:text-6xl">Nossas Conquistas</h2>
          <p className="mx-auto mb-12 mt-2 max-w-md text-center text-text-secondary">
            Os títulos que marcam nossa história
          </p>
        </AnimatedItem>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {conquistas.map((c, i) => (
            <AnimatedItem key={i}>
              <TiltCard className="group relative h-full overflow-hidden rounded-2xl border border-border bg-bg-element transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_36px_rgba(0,204,255,0.14)]">
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.accent} via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100`} />

                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={c.image}
                    alt={`${c.title} - ${c.desc}, conquista da TKZ E-SPORTS`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-yellow-300/30 bg-black/55 px-3 py-1 text-xs font-bold uppercase tracking-widest text-yellow-200 backdrop-blur-md">
                    <Trophy className="h-3.5 w-3.5" />
                    {c.badge}
                  </div>

                  <div className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-xs font-bold text-text-secondary backdrop-blur-md">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-bg-element via-bg-element/45 to-transparent" />
                </div>

                <div className="relative -mt-3 flex h-[168px] flex-col px-6 pb-6">
                  <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent-glow px-3 py-1 text-xs font-semibold text-accent">
                    {i < 2 ? <Star className="h-3.5 w-3.5" /> : <Award className="h-3.5 w-3.5" />}
                    {c.type}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-accent">{c.title}</h3>
                  <p className="mt-1 text-sm text-text-secondary">{c.desc}</p>

                  <div className="mt-auto flex items-center justify-between border-t border-border/70 pt-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">Hall da Fama</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-bold text-text-secondary">
                      TKZ
                    </span>
                  </div>
                </div>
              </TiltCard>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Novidades */}
      <AnimatedSection className="px-6 py-24">
        <AnimatedItem>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-accent/70">Por dentro da TKZ</p>
          <h2 className="text-center font-display text-5xl tracking-tight sm:text-6xl">Novidades da TKZ</h2>
          <p className="mx-auto mb-12 mt-2 max-w-md text-center text-text-secondary">
            O que move nossa organização dentro e fora dos campeonatos
          </p>
        </AnimatedItem>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {novidades.map((n, i) => (
            <AnimatedItem key={i}>
              <TiltCard className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-element p-6 transition-all duration-300 hover:-translate-y-1 ${n.border} hover:shadow-[0_0_30px_rgba(0,204,255,0.12)]`}>
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${n.glow} via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                <Link href={n.href} className="flex h-full flex-col rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
                  <div className="mb-3 flex items-center gap-3">
                    <span className={`inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold ${n.accent}`}>
                      <Tag className="h-3 w-3" />
                      {n.tag}
                    </span>
                    <span className="text-xs text-text-muted">{n.time}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold leading-tight tracking-tight">{n.title}</h3>
                  <p className="mb-4 flex-grow text-sm leading-relaxed text-text-secondary">{n.desc}</p>
                  <span className={`inline-flex items-center gap-1 text-sm font-semibold ${n.accent} transition-all group-hover:gap-2`}>
                    Saiba mais <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </TiltCard>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>

      {/* Próximos passos */}
      <AnimatedSection className="px-6 py-20">
        <AnimatedItem>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-accent/70">Seu caminho</p>
          <h2 className="text-center font-display text-5xl tracking-tight sm:text-6xl">Como se Aproximar</h2>
          <p className="mx-auto mb-12 mt-2 max-w-md text-center text-text-secondary">
            Escolha o melhor ponto de entrada para viver a TKZ de perto
          </p>
        </AnimatedItem>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
          {proximosPassos.map((step) => (
            <AnimatedItem key={step.title}>
              <Link
                href={step.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-bg-element p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,204,255,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                <span className={`mb-5 h-1 w-14 rounded-full ${step.marker} transition-all duration-300 group-hover:w-24`} />
                <h3 className="text-xl font-bold tracking-tight">{step.title}</h3>
                <p className="mt-2 flex-grow text-sm leading-relaxed text-text-secondary">{step.desc}</p>
                <span className={`mt-6 inline-flex items-center gap-1 text-sm font-semibold ${step.accent} transition-all group-hover:gap-2`}>
                  {step.action} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>

      {/* Parceiros */}
      <AnimatedSection id="parceiros" className="px-6 py-24">
        <AnimatedItem>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-accent/70">Sponsors</p>
          <h2 className="text-center font-display text-5xl tracking-tight sm:text-6xl">Parceiros</h2>
          <p className="mx-auto mb-12 mt-2 max-w-md text-center text-text-secondary">
            Marcas que confiam na TKZ
          </p>
        </AnimatedItem>

        <AnimatedItem>
          <motion.div
            className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-2xl border border-border bg-bg-element p-8 text-center transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_36px_rgba(0,204,255,0.12)] sm:p-10"
            whileHover={{ scale: 1.01 }}
          >
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Associe sua marca à evolução da TKZ</h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary">
                A TKZ conecta competição, comunidade e conteúdo. Estamos abertos a marcas que queiram apoiar atletas,
                transmissões, eventos locais e projetos digitais com presença real junto ao público gamer.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.instagram.com/esportstkz/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-bg transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-[0_0_30px_rgba(0,204,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                Falar pelo Instagram
              </a>
              <a
                href="https://discord.gg/5CnzeWUJPG"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border px-6 py-3 text-sm font-semibold text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                Conhecer comunidade
              </a>
            </div>
          </motion.div>
        </AnimatedItem>
      </AnimatedSection>
    </>
  );
}
