'use client'

import { motion } from 'framer-motion'
import { BookOpen, Target, ArrowRight } from 'lucide-react'

const currentLearning = [
  {
    name: 'TypeScript Avançado',
    desc: 'Tipos utilitários, generics, type guards e boas práticas',
    progress: 60,
    color: '#6366f1',
  },
  {
    name: 'Spring Boot',
    desc: 'Construindo APIs REST robustas e escaláveis com Java',
    progress: 35,
    color: '#10b981',
  },
  {
    name: 'Docker',
    desc: 'Containerização, ambientes reproduzíveis e docker-compose',
    progress: 25,
    color: '#22d3ee',
  },
  {
    name: 'Linux / Bash',
    desc: 'Linha de comando, scripts de automação e administração básica',
    progress: 20,
    color: '#f59e0b',
  },
]

const goals = [
  { tech: 'AWS Cloud', desc: 'EC2, S3, Lambda e fundamentos de cloud', quarter: 'Q3 2025', color: '#f59e0b' },
  { tech: 'CI/CD Pipeline', desc: 'GitHub Actions e automação de deploy', quarter: 'Q3 2025', color: '#22d3ee' },
  { tech: 'React Native', desc: 'Apps mobile multiplataforma com React', quarter: 'Q4 2025', color: '#6366f1' },
  { tech: 'Microservices', desc: 'Arquitetura distribuída com Spring Cloud', quarter: 'Q1 2026', color: '#8b5cf6' },
  { tech: 'PostgreSQL', desc: 'Banco relacional avançado e otimizações', quarter: 'Q2 2026', color: '#10b981' },
  { tech: 'Kubernetes', desc: 'Orquestração de containers em produção', quarter: 'Q3 2026', color: '#ec4899' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div
        className="orb w-[500px] h-[500px] bg-violet-600/10 top-[-80px] right-[-80px]"
        style={{ filter: 'blur(120px)' }}
      />
      <div
        className="orb w-[300px] h-[300px] bg-accent/8 bottom-0 left-0"
        style={{ filter: 'blur(100px)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-sm text-primary">04.</span>
          <span className="text-sm font-medium text-ink-secondary uppercase tracking-widest">Roadmap</span>
          <div className="flex-1 h-px bg-border max-w-[60px]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-syne font-bold text-4xl md:text-5xl text-ink-primary mb-4"
        >
          Sempre em <span className="text-gradient">evolução</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-ink-secondary text-base mb-16 max-w-xl"
        >
          Tecnologia não para — e eu também não. O que estou estudando agora e onde quero chegar.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Learning now */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-9 h-9 rounded-lg bg-primary-muted flex items-center justify-center">
                <BookOpen size={17} className="text-primary" />
              </div>
              <h3 className="font-syne font-semibold text-xl text-ink-primary">Aprendendo Agora</h3>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-4"
            >
              {currentLearning.map((item) => (
                <motion.div
                  key={item.name}
                  variants={fadeUp}
                  className="p-5 rounded-xl bg-bg-card border border-border card-glow"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-syne font-semibold text-sm text-ink-primary">{item.name}</span>
                    <span className="font-mono text-xs text-ink-muted">{item.progress}%</span>
                  </div>
                  <p className="text-xs text-ink-secondary mb-3 leading-relaxed">{item.desc}</p>
                  <div className="h-1.5 w-full rounded-full bg-bg-base overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                      className="h-full rounded-full"
                      style={{ background: item.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Goals */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-9 h-9 rounded-lg bg-accent-muted flex items-center justify-center">
                <Target size={17} className="text-accent" />
              </div>
              <h3 className="font-syne font-semibold text-xl text-ink-primary">Próximos Objetivos</h3>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid grid-cols-2 gap-3"
            >
              {goals.map((goal) => (
                <motion.div
                  key={goal.tech}
                  variants={fadeUp}
                  className="relative p-4 rounded-xl bg-bg-card border border-border card-glow overflow-hidden group"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: `linear-gradient(90deg, ${goal.color}, transparent 70%)` }}
                  />
                  <div className="flex items-center gap-1.5 mb-2">
                    <ArrowRight size={11} style={{ color: goal.color }} />
                    <span className="font-mono text-xs font-medium" style={{ color: goal.color }}>
                      {goal.quarter}
                    </span>
                  </div>
                  <h4 className="font-syne font-semibold text-sm text-ink-primary mb-1">{goal.tech}</h4>
                  <p className="text-xs text-ink-secondary leading-relaxed">{goal.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
