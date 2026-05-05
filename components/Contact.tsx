'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MessageCircle, Clock, MapPin, Briefcase, Zap } from 'lucide-react'

const socialLinks = [
  {
    Icon: Github,
    label: 'GitHub',
    handle: '@hubiner',
    href: 'https://github.com/hubiner',
    iconBg: 'bg-primary-muted group-hover:bg-primary/20',
    iconColor: 'text-primary',
  },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    handle: 'Gabriel Hubiner Oliveira',
    href: 'https://www.linkedin.com/in/gabriel-hubiner/',
    iconBg: 'bg-sky-500/10 group-hover:bg-sky-500/20',
    iconColor: 'text-sky-400',
  },
  {
    Icon: Mail,
    label: 'E-mail',
    handle: 'gabriel.hubiner.work@gmail.com',
    href: 'mailto:gabriel.hubiner.work@gmail.com',
    iconBg: 'bg-accent-muted group-hover:bg-accent/20',
    iconColor: 'text-accent',
  },
  {
    Icon: MessageCircle,
    label: 'WhatsApp',
    handle: 'Abrir conversa',
    href: 'https://wa.me/5531998456074',
    iconBg: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
    iconColor: 'text-emerald-400',
  },
]

const statusLines = [
  { Icon: Zap, label: 'status', value: 'disponível para novos projetos', valueClass: 'text-emerald-400' },
  { Icon: Clock, label: 'response_time', value: 'em até 24h', valueClass: 'text-primary' },
  { Icon: Briefcase, label: 'work_mode', value: 'remoto · híbrido · freela', valueClass: 'text-accent' },
  { Icon: MapPin, label: 'location', value: 'Brasil · BRT (UTC-3)', valueClass: 'text-ink-primary' },
]

export default function Contact() {
  return (
    <section id="contato" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div
        className="orb w-[500px] h-[500px] bg-primary/10 bottom-[-100px] right-[-80px]"
        style={{ filter: 'blur(120px)' }}
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
          <span className="text-sm font-medium text-ink-secondary uppercase tracking-widest">Contato</span>
          <div className="flex-1 h-px bg-border max-w-[60px]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-syne font-bold text-4xl md:text-5xl text-ink-primary mb-4"
        >
          Vamos <span className="text-gradient">conversar</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-ink-secondary text-base mb-14 max-w-xl"
        >
          Tem um projeto em mente, uma oportunidade ou só quer trocar uma ideia sobre tecnologia?
          Escolha o canal que preferir — eu respondo rápido.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Links panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {socialLinks.map(({ Icon, label, handle, href, iconBg, iconColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-border hover:border-primary/30 transition-all duration-300 group card-glow"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-200 ${iconBg}`}>
                  <Icon size={19} className={iconColor} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-primary group-hover:text-gradient transition-all">
                    {label}
                  </div>
                  <div className="text-xs text-ink-muted font-mono mt-0.5">{handle}</div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Terminal status card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl bg-bg-card border border-border overflow-hidden flex flex-col shadow-card"
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 h-9 border-b border-border/60 bg-bg-surface/60">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              <span className="ml-3 font-mono text-xs text-ink-muted">~/contact.sh</span>
            </div>

            {/* Body */}
            <div className="flex-1 p-6 font-mono text-sm space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-primary">$</span>
                <span className="text-ink-primary">./gabriel --status</span>
              </div>

              <div className="space-y-2.5 pl-1">
                {statusLines.map(({ Icon, label, value, valueClass }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon size={14} className="mt-0.5 text-ink-muted shrink-0" />
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <span className="text-ink-muted text-xs">{label}</span>
                      <span className="text-ink-muted">→</span>
                      <span className={`text-sm ${valueClass}`}>{value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-border/40">
                <p className="text-xs text-ink-secondary leading-relaxed">
                  Cada linha de código é um problema resolvido. Se você tem um, eu provavelmente quero ouvir.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <span className="text-primary">$</span>
                <span className="inline-block w-2 h-4 bg-primary/80 animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
