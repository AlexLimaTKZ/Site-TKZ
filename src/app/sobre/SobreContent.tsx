"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/AnimatedSection";

const timelineEvents = [
  {
    year: "2014",
    title: "A Semente",
    desc: "O que nasceu no final de 2014 como um simples grupo de WhatsApp, através da amizade e pela paixão de jogar juntos, carregava a semente de algo grandioso.",
  },
  {
    year: "2020",
    title: "A Evolução",
    desc: "Por seis anos, essa chama cresceu organicamente, até que em 2020, a TKZ evoluiu, deixando de ser apenas um grupo de amigos do WhatsApp para se tornar uma organização de e-sports semi-profissional.",
  },
  {
    year: "2020",
    title: "Tricampeões",
    desc: "Nossa entrada no cenário competitivo foi imediata e destruidora. Miramos a Liga GG e nos tornamos tricampeões da fase de acesso, provando nossa força de forma incontestável.",
  },
  {
    year: "2021",
    title: "Copa Nordeste — Invictos",
    desc: "Levamos nossa bandeira para a Copa Nordeste, etapa Piauí, e dominamos a competição. Varremos nossos adversários e conquistamos o título de forma invicta.",
  },
  {
    year: "2022",
    title: "Reconhecimento",
    desc: "O orgulho de vestir nosso primeiro uniforme oficial e a emoção de ver nossa história sendo contada para milhares, com entrevistas em rádios e programas de TV. A TKZ não era mais uma promessa; era uma realidade.",
  },
  {
    year: "2023",
    title: "Série B — Vice campeões",
    desc: "A acirrada Série B da Liga GG. Batalhamos jogo a jogo, em uma campanha de resiliência e estratégia, que nos levou ao pódio com o segundo lugar. Essa prata carimbou nosso passaporte para o nível mais alto.",
  },
  {
    year: "Hoje",
    title: "Série A — Liga GG",
    desc: "Do WhatsApp à Série A da Liga GG. Somos uma referência, uma potência construída sobre alicerces de lealdade e um histórico de conquistas inesquecíveis.",
  },
];

export function SobreContent() {
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-handwriting text-lg text-accent/70"
          >
            Nossa Jornada
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-6xl tracking-tight sm:text-7xl"
          >
            Nossa História
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-lg text-lg text-text-secondary"
          >
            A jornada da TKZ E-SPORTS, de um sonho à realidade.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="relative">
          {/* Line */}
          <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-accent/50 via-border to-transparent sm:left-1/2" />

          {timelineEvents.map((event, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className={`relative mb-12 flex flex-col gap-4 pl-20 sm:flex-row sm:gap-8 sm:pl-0 ${i % 2 === 0 ? "sm:flex-row-reverse sm:text-right" : ""}`}>
                {/* Dot */}
                <div className="absolute left-6 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-bg sm:left-1/2 sm:-translate-x-1/2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>

                {/* Year */}
                <div className="flex-shrink-0 sm:w-1/2">
                  <span className="font-display text-3xl text-accent">{event.year}</span>
                </div>

                {/* Content */}
                <div className="sm:w-1/2">
                  <motion.div
                    className="rounded-2xl border border-border bg-bg-element p-6 transition-all hover:border-accent/30 hover:shadow-[0_0_30px_rgba(0,204,255,0.08)]"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="mb-2 text-xl font-bold tracking-tight">{event.title}</h3>
                    <p className="text-sm leading-relaxed text-text-secondary">{event.desc}</p>
                  </motion.div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
