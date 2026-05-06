'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Code2, Layers, Rocket, TrendingUp } from 'lucide-react'

const stats = [
  { value: '8+', label: 'Tecnologias' },
  { value: '6+', label: 'Projetos Planejados' },
  { value: '100%', label: 'Comprometimento' },
  { value: '∞', label: 'Vontade de Aprender' },
]

const highlights = [
  {
    icon: Code2,
    title: 'Código com Propósito',
    desc: 'Escrevo código limpo, organizado e orientado a boas práticas — porque software bem escrito é software que escala.',
  },
  {
    icon: Layers,
    title: 'Visão Full-Stack',
    desc: 'Aprendendo do banco de dados à interface, entendendo o ciclo completo de uma aplicação e como cada camada se conecta.',
  },
  {
    icon: Rocket,
    title: 'Projetos Práticos',
    desc: 'Aprendo construindo — cada projeto é uma oportunidade de integrar APIs reais, resolver problemas concretos e evoluir.',
  },
  {
    icon: TrendingUp,
    title: 'Evolução Contínua',
    desc: 'Tecnologia não para e eu também não. Estou sempre estudando, experimentando e buscando o próximo nível.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sobre" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="orb w-[400px] h-[400px] bg-violet-600/10 top-0 right-0" style={{ filter: 'blur(100px)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-sm text-primary">01.</span>
          <span className="text-sm font-medium text-ink-secondary uppercase tracking-widest">Sobre Mim</span>
          <div className="flex-1 h-px bg-border max-w-[60px]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-syne font-bold text-4xl md:text-5xl text-ink-primary mb-16"
        >
          Quem sou <span className="text-gradient">eu</span>
        </motion.h2>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left — photo + stats */}
          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            {/* Profile photo */}
            <motion.div variants={fadeUp} className="relative">
              <div className="w-56 h-56 rounded-2xl bg-gradient-primary p-[2px] shadow-glow-md">
                <div className="relative w-full h-full rounded-2xl bg-bg-card overflow-hidden">
                  <Image
                    src="/img78.png"
                    alt="Gabriel Hubiner Oliveira"
                    fill
                    sizes="224px"
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-3 -right-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-card border border-emerald-500/30 text-xs font-medium text-emerald-400 shadow-card">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Disponível
              </div>
            </motion.div>

            {/* Stats grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3 w-full">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-4 rounded-xl bg-bg-card border border-border text-center card-glow"
                >
                  <div className="font-syne font-bold text-2xl text-gradient mb-0.5">{s.value}</div>
                  <div className="text-xs text-ink-secondary">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — bio + highlights */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {/* Bio text */}
            <motion.div variants={fadeUp} className="space-y-4 mb-10">
              <p className="text-ink-secondary text-base leading-relaxed">
                Sou Gabriel, desenvolvedor com interesse genuíno em construir soluções que funcionem — não apenas
                no papel, mas na prática. Trabalho com{' '}
                <span className="text-ink-primary font-medium">
                  Java, Python, JavaScript, React, Next.js, Node.js, MySQL, Docker e Git
                </span>
                , e estou sempre explorando como cada tecnologia pode contribuir para uma solução mais completa.
              </p>

              <p className="text-ink-secondary text-base leading-relaxed">
                Hoje, meu foco está em integrar APIs reais e transformar dados em interfaces claras, fluidas e
                úteis — onde o backend sustenta a lógica e o frontend traduz tudo em experiência. Para mim, um bom
                projeto é aquele que entrega valor de ponta a ponta: precisa ser{' '}
                <span className="text-ink-primary font-medium">funcional, legível e publicável</span>.
              </p>

              <p className="text-ink-secondary text-base leading-relaxed">
                Sou comprometido com boas práticas: código organizado, versionamento correto com Git, separação
                de responsabilidades e atenção aos detalhes. Cada linha escrita é uma oportunidade de
                aprender melhor.
              </p>
            </motion.div>

            {/* Highlights grid */}
            <motion.div variants={container} className="grid sm:grid-cols-2 gap-4">
              {highlights.map((h) => (
                <motion.div
                  key={h.title}
                  variants={fadeUp}
                  className="p-5 rounded-xl bg-bg-card border border-border card-glow group h-full flex flex-col"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary-muted flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <h.icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-syne font-semibold text-sm text-ink-primary mb-1.5">{h.title}</h3>
                  <p className="text-xs text-ink-secondary leading-relaxed flex-1">{h.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
