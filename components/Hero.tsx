'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, FileDown, Eye } from 'lucide-react'

const floatingCards = [
  { code: 'const dev = new Engineer()', delay: 0, x: '-8%', y: '20%' },
  { code: 'await api.fetch(data)', delay: 0.4, x: '85%', y: '28%' },
  { code: 'git commit -m "feat: 🚀"', delay: 0.8, x: '78%', y: '65%' },
  { code: 'docker compose up', delay: 1.2, x: '-5%', y: '68%' },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Glow orbs */}
      <div
        className="orb w-[600px] h-[600px] bg-primary/20 top-[-200px] left-1/2 -translate-x-1/2 animate-glow-pulse"
        style={{ filter: 'blur(120px)' }}
      />
      <div
        className="orb w-[300px] h-[300px] bg-accent/15 bottom-[10%] right-[5%]"
        style={{ filter: 'blur(80px)' }}
      />
      <div
        className="orb w-[200px] h-[200px] bg-violet-500/15 top-[20%] left-[5%]"
        style={{ filter: 'blur(70px)' }}
      />

      {/* Floating code snippets */}
      {floatingCards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: card.delay + 0.8, duration: 0.5 }}
          className="absolute hidden lg:block animate-float"
          style={{
            left: card.x,
            top: card.y,
            animationDelay: `${card.delay}s`,
          }}
        >
          <div className="px-4 py-2.5 rounded-lg bg-bg-card/80 border border-border/60 backdrop-blur-sm shadow-card">
            <code className="font-mono text-xs text-accent/80">{card.code}</code>
          </div>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Terminal badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-bg-card border border-primary/25 shadow-glow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-sm text-primary/90">&lt;</span>
            <span className="font-mono text-sm font-medium text-ink-primary">Developer Engineer</span>
            <span className="font-mono text-sm text-primary/90">/&gt;</span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-syne font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] mb-6"
        >
          Gabriel{' '}
          <span className="text-gradient">Hubiner</span>
          <br />
          <span className="text-ink-primary">Oliveira</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-dm text-lg sm:text-xl text-ink-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Construindo interfaces modernas e integrando APIs para transformar dados
          em experiências digitais com propósito. Full-stack, orientado a entregas,
          em evolução constante.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#projetos"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-white bg-gradient-primary shadow-glow-md hover:shadow-glow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            <Eye size={18} />
            Ver Projetos
          </a>

          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-ink-primary bg-bg-card border border-border hover:border-primary/40 hover:bg-bg-card-hover hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            <Linkedin size={18} />
            Entrar em Contato
          </a>

          <a
            href="/cv-placeholder.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-accent border border-accent/25 bg-accent-muted hover:bg-accent/15 hover:border-accent/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            <FileDown size={18} />
            Baixar Currículo
          </a>
        </motion.div>

        {/* Social quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg text-ink-muted hover:text-ink-primary hover:bg-bg-card transition-all duration-200 hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg text-ink-muted hover:text-ink-primary hover:bg-bg-card transition-all duration-200 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <div className="w-px h-5 bg-border" />
          <span className="text-sm text-ink-muted font-mono">Disponível para oportunidades</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-muted"
      >
        <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
