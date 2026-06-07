"use client";

import Image from "next/image";
import { Particles } from "@/components/Particles";

export function HeroBanner() {
  return (
    <section className="relative w-full aspect-video sm:aspect-auto sm:h-[calc(100svh-80px)] sm:min-h-[600px] overflow-hidden bg-[#0a0e17]">
      {/* Particles background */}
      <Particles count={50} />

      {/* SEO: h1 visually hidden */}
      <h1 className="sr-only">TKZ E-Sports — Organização de E-Sports do Piauí</h1>

      {/* Banner full-bleed */}
      <div className="relative flex h-full w-full items-center justify-center">
        <Image
          src="/images/banner1.jpg"
          alt="Jersey TKZ Origens - Edição Limitada - Camisa oficial TKZ E-Sports com design exclusivo"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Bottom gradient fade to content */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-32 bg-gradient-to-t from-bg to-transparent" />
    </section>
  );
}
