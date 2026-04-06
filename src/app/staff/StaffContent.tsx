"use client";

import { motion } from "framer-motion";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import Image from "next/image";

interface StaffMember {
  nickname: string;
  name: string;
  role: string;
  desc: string;
  photo?: string;
  initials: string;
  roleColor: string;
  borderColor: string;
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
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="group relative"
    >
      {/* Glow behind */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

      {/* Card */}
      <div
        className={`relative flex flex-col overflow-hidden rounded-2xl border ${member.borderColor} bg-gradient-to-b from-bg-element to-[#0d0f11] transition-all duration-500 group-hover:border-opacity-80 group-hover:shadow-[0_0_40px_rgba(0,0,0,0.5)]`}
      >
        {/* Photo area */}
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          {member.photo ? (
            <>
              <Image
                src={member.photo}
                alt={`Foto de ${member.name}, ${member.role} da TKZ E-SPORTS`}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f11] via-[#0d0f11]/40 to-transparent" />
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
              className={`inline-block rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur-md ${member.roleColor}`}
            >
              {member.role}
            </span>
          </div>
        </div>

        {/* Info section */}
        <div className="relative z-10 -mt-2 px-5 pb-5">
          {/* Nickname */}
          <h3 className="font-display text-3xl italic tracking-tight">
            {member.nickname}
          </h3>

          {/* Real name */}
          <p className="mt-0.5 text-sm text-text-secondary">{member.name}</p>

          {/* Description */}
          <p className="mt-2 text-xs leading-relaxed text-text-muted">
            {member.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

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
      <section className="mx-auto max-w-6xl px-6 pb-24">
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
