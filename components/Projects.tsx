'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Calendar, Zap, Clock } from 'lucide-react'
import { projects, ProjectStatus } from '@/data/projects'

const statusConfig: Record<
  ProjectStatus,
  { label: string; classes: string; Icon: typeof Clock }
> = {
  Planejado: { label: 'Planejado', classes: 'text-amber-400 bg-amber-400/8 border-amber-400/20', Icon: Calendar },
  'Em Desenvolvimento': { label: 'Em Dev', classes: 'text-emerald-400 bg-emerald-400/8 border-emerald-400/20', Icon: Zap },
  'Em Breve': { label: 'Em Breve', classes: 'text-sky-400 bg-sky-400/8 border-sky-400/20', Icon: Clock },
}

const filters: Array<{ label: string; value: ProjectStatus | 'Todos' }> = [
  { label: 'Todos', value: 'Todos' },
  { label: 'Em Desenvolvimento', value: 'Em Desenvolvimento' },
  { label: 'Em Breve', value: 'Em Breve' },
  { label: 'Planejado', value: 'Planejado' },
]

export default function Projects() {
  const [active, setActive] = useState<ProjectStatus | 'Todos'>('Todos')

  const filtered = active === 'Todos' ? projects : projects.filter((p) => p.status === active)

  return (
    <section id="projetos" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div
        className="orb w-[450px] h-[450px] bg-accent/8 bottom-0 left-[-100px]"
        style={{ filter: 'blur(110px)' }}
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
          <span className="font-mono text-sm text-primary">03.</span>
          <span className="text-sm font-medium text-ink-secondary uppercase tracking-widest">Projetos</span>
          <div className="flex-1 h-px bg-border max-w-[60px]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-syne font-bold text-4xl md:text-5xl text-ink-primary mb-4"
        >
          O que estou <span className="text-gradient">construindo</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-ink-secondary text-base mb-10 max-w-xl"
        >
          Projetos reais integrando APIs públicas — cada um com propósito claro, stack bem definida e foco em resultado.
        </motion.p>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                active === f.value
                  ? 'bg-primary-muted text-primary border-primary/30 shadow-glow-sm'
                  : 'bg-bg-card text-ink-secondary border-border hover:border-border-hover hover:text-ink-primary'
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const { label, classes, Icon } = statusConfig[project.status]
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="group relative flex flex-col p-6 rounded-2xl bg-bg-card border border-border overflow-hidden transition-all duration-300"
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = project.color + '55'
                    el.style.boxShadow = `0 8px 60px ${project.color}18`
                    el.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = ''
                    el.style.boxShadow = ''
                    el.style.transform = ''
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, ${project.color}, transparent 70%)` }}
                  />

                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                      style={{ background: project.color + '15', border: `1px solid ${project.color}28` }}
                    >
                      {project.icon}
                    </div>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${classes}`}>
                      <Icon size={10} />
                      {label}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-syne font-semibold text-base text-ink-primary mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-ink-secondary text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* API badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-mono text-xs text-ink-muted">API:</span>
                    <span className="font-mono text-xs text-accent/80 bg-accent/5 border border-accent/15 px-2 py-0.5 rounded">
                      {project.api}
                    </span>
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-xs text-ink-secondary bg-bg-surface border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/60">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink-primary transition-colors duration-200"
                    >
                      <Github size={13} />
                      Repositório
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-ink-muted hover:text-primary transition-colors duration-200"
                    >
                      <ExternalLink size={13} />
                      Demo
                    </a>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
