"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Star, Trophy, Users } from "lucide-react";
import { cn } from "@/lib/cn";

interface StaffMember {
  nickname: string;
  name: string;
  role: string;
  desc: string;
  photo?: string;
  initials: string;
  roleColor: string;
  borderColor: string;
  department: string;
  focus: string;
  quote: string;
}

const staff: StaffMember[] = [
  {
    nickname: "LiderTKZ",
    name: "Alex Lima",
    role: "Fundador & CEO",
    desc: "Visionário por trás da organização TKZ",
    photo: "/Staff/Alex Lima.png",
    initials: "AL",
    roleColor: "text-accent",
    borderColor: "border-accent/40",
    department: "Direção",
    focus: "Visão, marca e comunidade",
    quote: "Construindo a ponte entre a resenha e o competitivo.",
  },
  {
    nickname: "Marlon",
    name: "Marlon Brito",
    role: "Administrador",
    desc: "Responsável pela gestão da equipe e projetos",
    photo: "/Staff/Marlon Brito.jpeg",
    initials: "MB",
    roleColor: "text-green-400",
    borderColor: "border-green-400/40",
    department: "Operação",
    focus: "Gestão e projetos",
    quote: "Organização para transformar ideia em calendário.",
  },
  {
    nickname: "Yoshi",
    name: "Washington Fernandes",
    role: "Coach & Administrador",
    desc: "Treinador da nossa equipe principal e gestor operacional",
    photo: "/Staff/Washington Fernandes.jpeg",
    initials: "WY",
    roleColor: "text-purple-400",
    borderColor: "border-purple-400/40",
    department: "Competitivo",
    focus: "Treino, rotina e performance",
    quote: "Disciplina para competir em outro nível.",
  },
  {
    nickname: "Diego",
    name: "Diego",
    role: "Administrador",
    desc: "Gerencia as operações diárias da organização",
    photo: "/Staff/Diego.jpeg",
    initials: "DI",
    roleColor: "text-green-400",
    borderColor: "border-green-400/40",
    department: "Operação",
    focus: "Rotina e suporte interno",
    quote: "Base forte para a equipe render no dia a dia.",
  },
  {
    nickname: "Marley",
    name: "Marley Brito",
    role: "Administrador",
    desc: "Responsável pela administração e organização da equipe",
    photo: "/Staff/Marley Brito.jpeg",
    initials: "MR",
    roleColor: "text-green-400",
    borderColor: "border-green-400/40",
    department: "Administração",
    focus: "Organização e processos",
    quote: "Cuidando dos bastidores para o jogo acontecer.",
  },

  {
    nickname: "William",
    name: "William Roberto",
    role: "Psicólogo do E-sports",
    desc: "Oferece suporte mental e estratégico aos nossos atletas",
    photo: "/Staff/William Roberto Psicólogo.png",
    initials: "WR",
    roleColor: "text-yellow-400",
    borderColor: "border-yellow-400/40",
    department: "Saúde & suporte",
    focus: "Mentalidade competitiva",
    quote: "Performance também se treina fora da tela.",
  },
];

const staffPillars = [
  {
    label: "Direção",
    desc: "Visão, comunidade e posicionamento da TKZ.",
    icon: <Trophy className="h-5 w-5" />,
    accent: "text-accent",
  },
  {
    label: "Operação",
    desc: "Calendário, gestão e sustentação dos projetos.",
    icon: <Users className="h-5 w-5" />,
    accent: "text-green-300",
  },
  {
    label: "Competitivo",
    desc: "Treino, rotina, estratégia e performance.",
    icon: <Award className="h-5 w-5" />,
    accent: "text-purple-300",
  },
  {
    label: "Suporte",
    desc: "Apoio mental e evolução humana dos atletas.",
    icon: <Star className="h-5 w-5" />,
    accent: "text-yellow-300",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  },
};

function StaffCard({ member }: { member: StaffMember }) {
  const isFounder = member.role.includes("Fundador");

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={isFounder ? "group relative lg:col-span-2" : "group relative"}
    >
      {/* Glow behind */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-accent/20 to-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

      {/* Card */}
      <div
        className={cn("relative flex h-full flex-col overflow-hidden rounded-2xl border bg-gradient-to-b from-bg-element to-[#0d0f11] transition-all duration-500 group-hover:border-opacity-90 group-hover:shadow-[0_0_40px_rgba(0,204,255,0.1)]", member.borderColor)}
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_34%,rgba(0,204,255,0.08))] opacity-40" />

        {/* Photo area */}
        <div className={cn("relative w-full overflow-hidden", isFounder ? "aspect-[16/9] sm:aspect-[2/1]" : "aspect-[3/4]")}>
          {member.photo ? (
            <>
              <Image
                src={member.photo}
                alt={`Foto de ${member.name}, ${member.role} da TKZ E-SPORTS`}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f11] via-[#0d0f11]/45 to-transparent" />
            </>
          ) : (
            /* Placeholder for members without photos */
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-bg-element to-[#0d0f11]">
              <span className="text-6xl font-bold text-text-muted/30">
                {member.initials}
              </span>
            </div>
          )}

          {/* Role badge */}
          <div className="absolute left-3 top-3 z-10">
            <span
              className={cn("inline-block rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur-md", member.roleColor)}
            >
              {member.department}
            </span>
          </div>

          <div className="absolute bottom-3 right-3 z-10 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-text-secondary backdrop-blur-md">
            TKZ Staff
          </div>
        </div>

        {/* Info section */}
        <div className="relative z-10 flex flex-1 flex-col px-5 pb-5 pt-4">
          {/* Nickname */}
          <h3 className="font-display text-4xl italic tracking-tight transition-colors duration-300 group-hover:text-accent">
            {member.nickname}
          </h3>

          {/* Real name */}
          <p className="mt-0.5 text-sm font-semibold text-text-secondary">{member.name}</p>

          <p className={cn("mt-2 text-xs font-bold uppercase tracking-[0.2em]", member.roleColor)}>{member.role}</p>

          {/* Description */}
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">{member.desc}</p>

          <p className="mt-4 border-l-2 border-accent/50 pl-3 text-sm leading-relaxed text-text">
            {member.quote}
          </p>

          <div className="mt-auto flex items-center justify-between border-t border-border/70 pt-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">Foco</span>
            <span className="text-right text-xs font-semibold text-text-secondary">{member.focus}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function StaffContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24">
        <motion.div
          className="absolute left-1/2 top-12 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/5 blur-[100px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-bold uppercase tracking-[0.2em] text-accent"
            >
              Staff TKZ
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-2 font-display text-6xl tracking-tight sm:text-8xl"
            >
              Nossa Equipe
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 max-w-2xl text-xl leading-relaxed text-text-secondary"
            >
              Direção, operação, competitivo e suporte trabalhando para transformar comunidade em estrutura.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl border border-border bg-bg-element p-6 sm:p-7"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Estrutura interna</p>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {staffPillars.map((pillar) => (
                <div key={pillar.label} className="rounded-xl border border-border/70 bg-bg p-5">
                  <div className={cn("mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/5", pillar.accent)}>
                    {pillar.icon}
                  </div>
                  <h2 className="text-lg font-bold tracking-tight text-text">{pillar.label}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-8 flex flex-col justify-between gap-3 border-b border-border pb-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent/70">Roster administrativo</p>
            <h2 className="mt-1 font-display text-4xl tracking-tight sm:text-5xl">Quem Faz Acontecer</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-text-secondary">
            Cada função sustenta uma parte da experiência TKZ: gestão, treino, bastidores e cuidado com pessoas.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {staff.map((member) => (
            <StaffCard key={member.name} member={member} />
          ))}
        </motion.div>
      </section>
    </>
  );
}
