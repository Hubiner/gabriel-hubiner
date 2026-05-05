'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '@/data/projects'

const PAGE_SIZE = 6

export default function Projects() {
  const [page, setPage] = useState(1)

  const totalPages = Math.max(1, Math.ceil(projects.length / PAGE_SIZE))
  const visible = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE
    return projects.slice(start, start + PAGE_SIZE)
  }, [page])

  const goTo = (next: number) => {
    if (next < 1 || next > totalPages) return
    setPage(next)
    document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

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
          className="text-ink-secondary text-base mb-12 max-w-xl"
        >
          Projetos reais, em produção — cada um com propósito claro, stack bem definida e foco em resultado.
        </motion.p>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
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
                </div>

                {/* Content */}
                <h3 className="font-syne font-semibold text-base text-ink-primary mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-ink-secondary text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

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
                    href={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-ink-muted hover:text-primary transition-colors duration-200"
                  >
                    <ExternalLink size={13} />
                    Site
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.nav
            aria-label="Paginação de projetos"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mt-12"
          >
            <button
              type="button"
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
              aria-label="Página anterior"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-bg-card border border-border text-ink-secondary hover:text-ink-primary hover:border-border-hover disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => {
              const isActive = n === page
              return (
                <button
                  key={n}
                  type="button"
                  onClick={() => goTo(n)}
                  aria-label={`Ir para página ${n}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium border transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-muted text-primary border-primary/30 shadow-glow-sm'
                      : 'bg-bg-card text-ink-secondary border-border hover:border-border-hover hover:text-ink-primary'
                  }`}
                >
                  {n}
                </button>
              )
            })}

            <button
              type="button"
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages}
              aria-label="Próxima página"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-bg-card border border-border text-ink-secondary hover:text-ink-primary hover:border-border-hover disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronRight size={16} />
            </button>
          </motion.nav>
        )}
      </div>
    </section>
  )
}
