"use client";

import { motion } from "framer-motion";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { TiltCard } from "@/components/TiltCard";

const staff = [
  { initials: "AL", name: "Alex 'Twitch LiderTKZ' Lima", role: "Fundador & CEO", desc: "Visionário por trás da organização TKZ", roleColor: "text-accent", gradient: "from-accent to-cyan-700" },
  { initials: "MB", name: "Marlon Brito", role: "Administrador", desc: "Responsável pela gestão da equipe e projetos", roleColor: "text-green-400", gradient: "from-green-500 to-emerald-700" },
  { initials: "WY", name: "Washington 'Yoshi' Fernandes", role: "Coach", desc: "Treinador da nossa equipe principal", roleColor: "text-text", gradient: "from-gray-400 to-gray-600" },
  { initials: "DI", name: "Diego", role: "Administrador", desc: "Gerencia as operações diárias da organização", roleColor: "text-green-400", gradient: "from-green-500 to-emerald-700" },
  { initials: "CL", name: "Claudio", role: "Coach Assistente", desc: "Apoia o coach principal no desenvolvimento dos jogadores", roleColor: "text-text", gradient: "from-gray-400 to-gray-600" },
  { initials: "WI", name: "William", role: "Psicólogo do E-sports", desc: "Oferece suporte mental e estratégico aos nossos atletas", roleColor: "text-yellow-400", gradient: "from-yellow-500 to-amber-700" },
];

export function StaffContent() {
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
            Our Team
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-6xl tracking-tight sm:text-7xl"
          >
            Nossa Equipe
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-lg text-lg text-text-secondary"
          >
            Os profissionais por trás do sucesso da TKZ
          </motion.p>
        </div>
      </section>

      {/* Staff Grid */}
      <AnimatedSection className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {staff.map((member) => (
            <AnimatedItem key={member.name}>
              <TiltCard className="group flex flex-col items-center rounded-2xl border border-border bg-bg-element p-8 text-center transition-all hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,204,255,0.1)]">
                <div className={`mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${member.gradient} text-2xl font-bold text-white shadow-lg transition-transform group-hover:scale-105`}>
                  {member.initials}
                </div>
                <h3 className="text-lg font-bold tracking-tight">{member.name}</h3>
                <span className={`mt-1 text-sm font-semibold ${member.roleColor}`}>{member.role}</span>
                <p className="mt-2 text-sm text-text-secondary">{member.desc}</p>
              </TiltCard>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}
