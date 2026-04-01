"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Particles } from "@/components/Particles";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    label: "Desde 2014",
    title: "E-SPORTS",
    subtitle: "A organização que está revolucionando o cenário competitivo brasileiro.",
    cta: { text: "Entrar no Discord", href: "https://discord.gg/5CnzeWUJPG" },
    gradient: "from-accent/20 via-transparent to-transparent",
  },
  {
    label: "Série A — Liga GG",
    title: "CAMPEÕES",
    subtitle: "Do WhatsApp à elite. Tricampeões da Fase de Acesso, campeões invictos da Copa Nordeste.",
    cta: { text: "Ver Conquistas", href: "/#conquistas" },
    gradient: "from-yellow-500/15 via-transparent to-transparent",
  },
  {
    label: "Ao Vivo",
    title: "STREAMERS",
    subtitle: "Acompanhe nossos criadores de conteúdo na Twitch e TikTok.",
    cta: { text: "Assistir Agora", href: "/streamers" },
    gradient: "from-twitch/20 via-transparent to-transparent",
  },
];

export function HeroCarousel() {
  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[600px] overflow-hidden">
      {/* Particles background */}
      <Particles count={50} />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,204,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,204,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-text/30 !w-3 !h-3 !rounded-full !transition-all !duration-300",
          bulletActiveClass: "!bg-accent !w-8 !rounded-full",
        }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="flex h-full items-center justify-center px-6">
              {/* Slide glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />

              <motion.div
                className="absolute h-[500px] w-[500px] rounded-full bg-accent/8 blur-[120px]"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Logo */}
                <Image
                  src="/images/LogoTKZ.png"
                  alt="Logo TKZ E-SPORTS"
                  width={300}
                  height={300}
                  className="mb-0 h-auto w-[200px] drop-shadow-[0_0_40px_rgba(0,204,255,0.3)] sm:w-[280px]"
                  priority={i === 0}
                />

                {/* Label */}
                <p className="-mt-8 font-handwriting text-lg text-accent/70">
                  {slide.label}
                </p>

                {/* Title */}
                <h1 className="mt-2 font-display text-7xl tracking-tight sm:text-8xl md:text-9xl">
                  <span className="bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent">
                    {slide.title}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-4 max-w-lg text-lg text-text-secondary sm:text-xl">
                  {slide.subtitle}
                </p>

                {/* CTA */}
                <div className="mt-8">
                  <a
                    href={slide.cta.href}
                    target={slide.cta.href.startsWith("http") ? "_blank" : undefined}
                    className="rounded-xl bg-accent px-8 py-3 font-semibold text-bg transition-all hover:bg-accent-dark hover:shadow-[0_0_30px_rgba(0,204,255,0.4)]"
                  >
                    {slide.cta.text}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom gradient fade to content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
    </section>
  );
}
