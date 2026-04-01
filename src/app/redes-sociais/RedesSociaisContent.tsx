"use client";

import { motion } from "framer-motion";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { ExternalLink, MessageCircle, Check } from "lucide-react";

const platforms = [
  {
    name: "Discord",
    desc: "Junte-se à nossa comunidade no Discord para interagir com outros fãs e jogadores.",
    features: ["Chat exclusivo com a equipe", "Notícias e atualizações em primeira mão", "Eventos e sorteios", "Canais de voz para jogar com a comunidade"],
    href: "https://discord.gg/5CnzeWUJPG",
    gradient: "from-discord to-indigo-700",
    btnColor: "bg-discord hover:bg-discord/80",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
        <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    desc: "Siga-nos no Instagram para fotos, vídeos e os bastidores da TKZ E-SPORTS.",
    features: ["Fotos e vídeos exclusivos", "Stories diários da equipe", "Cobertura de eventos", "Interação direta com os jogadores"],
    href: "https://www.instagram.com/esportstkz/",
    gradient: "from-instagram to-purple-700",
    btnColor: "bg-instagram hover:bg-instagram/80",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    desc: "Receba as últimas notícias e comunicados importantes diretamente no seu WhatsApp.",
    features: ["Alertas de jogos e transmissões", "Notícias urgentes da TKZ", "Comunicados de eventos", "Conteúdo exclusivo para membros"],
    href: "https://chat.whatsapp.com/DsFyAlmyLEg0JF1dylfsvs",
    gradient: "from-whatsapp to-green-700",
    btnColor: "bg-whatsapp hover:bg-whatsapp/80",
    icon: <MessageCircle className="h-8 w-8" />,
  },
];

export function RedesSociaisContent() {
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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl tracking-tight sm:text-7xl"
          >
            Nossas Redes Sociais
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-lg text-lg text-text-secondary"
          >
            Conecte-se com a TKZ
          </motion.p>
        </div>
      </section>

      {/* Cards */}
      <AnimatedSection className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {platforms.map((platform) => (
            <AnimatedItem key={platform.name}>
              <motion.div
                className="group flex h-full flex-col items-center rounded-2xl border border-border bg-bg-element p-8 text-center transition-all hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,204,255,0.1)]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icon */}
                <div className={`mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${platform.gradient} text-white shadow-lg`}>
                  {platform.icon}
                </div>

                <h3 className="text-2xl font-bold tracking-tight">{platform.name}</h3>
                <p className="mt-2 text-sm text-text-secondary">{platform.desc}</p>

                {/* Features */}
                <div className="mt-6 w-full text-left">
                  <h4 className="mb-2 text-sm font-semibold">O que você encontra:</h4>
                  <ul className="space-y-2">
                    {platform.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href={platform.href}
                  target="_blank"
                  className={`mt-auto flex w-full items-center justify-center gap-2 rounded-xl ${platform.btnColor} px-6 py-3 font-semibold text-white transition-all mt-6`}
                >
                  <ExternalLink className="h-4 w-4" />
                  Acessar {platform.name}
                </a>
              </motion.div>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}
