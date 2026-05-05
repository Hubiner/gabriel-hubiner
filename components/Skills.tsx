'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillCategories } from '@/data/skills'

const levelDots = { learning: 1, intermediate: 2, proficient: 3 }
const levelLabel = { learning: 'Aprendendo', intermediate: 'Intermediário', proficient: 'Proficiente' }

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-35" />
      <div
        className="orb w-[600px] h-[600px] bg-primary/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ filter: 'blur(130px)' }}
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
          <span className="font-mono text-sm text-primary">02.</span>
          <span className="text-sm font-medium text-ink-secondary uppercase tracking-widest">Habilidades</span>
          <div className="flex-1 h-px bg-border max-w-[60px]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-syne font-bold text-4xl md:text-5xl text-ink-primary mb-4"
        >
          Stack & <span className="text-gradient">Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-ink-secondary text-base mb-10 max-w-xl"
        >
          Tecnologias que uso no dia a dia, organizadas por área — cada skill com seu nível atual de domínio.
        </motion.p>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-6 mb-12"
        >
          {(['learning', 'intermediate', 'proficient'] as const).map((level) => (
            <div key={level} className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      i <= levelDots[level] ? 'bg-primary' : 'bg-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-ink-muted">{levelLabel[level]}</span>
            </div>
          ))}
        </motion.div>

        {/* Categories grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-5"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={fadeUp}
              className={`relative p-6 rounded-2xl bg-bg-card border ${cat.borderColor} transition-all duration-300 group overflow-hidden h-full min-h-[220px]`}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = `0 8px 60px ${cat.glowColor}`
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = ''
                el.style.transform = ''
              }}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-bg-base/60 border border-border flex items-center justify-center text-xl">
                    {cat.icon}
                  </div>
                  <h3 className="font-syne font-semibold text-lg text-ink-primary">{cat.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-base/50 border border-border/60 hover:border-border-hover transition-colors"
                    >
                      <span className="text-sm text-ink-secondary">{skill.name}</span>
                      {skill.level && (
                        <div className="flex gap-0.5 ml-0.5">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className={`w-1 h-1 rounded-full ${
                                i <= levelDots[skill.level!] ? 'bg-primary' : 'bg-border'
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
