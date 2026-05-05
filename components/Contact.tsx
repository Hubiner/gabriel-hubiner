'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Github, Linkedin, Mail, Send, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react'

const socialLinks = [
  {
    Icon: Github,
    label: 'GitHub',
    handle: '@gabrielhubiner',
    href: 'https://github.com/gabrielhubiner',
    iconBg: 'bg-primary-muted group-hover:bg-primary/20',
    iconColor: 'text-primary',
  },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    handle: 'Gabriel Hubiner Oliveira',
    href: 'https://linkedin.com/in/gabrielhubiner',
    iconBg: 'bg-sky-500/10 group-hover:bg-sky-500/20',
    iconColor: 'text-sky-400',
  },
  {
    Icon: Mail,
    label: 'E-mail',
    handle: 'gabrielhubinerr@gmail.com',
    href: 'mailto:gabrielhubinerr@gmail.com',
    iconBg: 'bg-accent-muted group-hover:bg-accent/20',
    iconColor: 'text-accent',
  },
  {
    Icon: MessageCircle,
    label: 'WhatsApp',
    handle: 'Enviar mensagem',
    href: 'https://wa.me/5500000000000',
    iconBg: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
    iconColor: 'text-emerald-400',
  },
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-bg-card border border-border text-sm text-ink-primary placeholder:text-ink-muted focus:outline-none focus:border-primary/50 focus:shadow-glow-sm transition-all duration-200'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [state, setState] = useState<FormState>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setState('loading')

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      setState('success')
      formRef.current.reset()
    } catch {
      setState('error')
    } finally {
      setTimeout(() => setState('idle'), 5000)
    }
  }

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
          <span className="font-mono text-sm text-primary">05.</span>
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
          Disponível para freela, oportunidades e parcerias. Me manda uma mensagem — respondo rápido.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
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

            <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 mt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-sm text-emerald-400 font-medium">Disponível para novas oportunidades</span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-7 rounded-2xl bg-bg-card border border-border"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-ink-secondary uppercase tracking-wide">Nome</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Seu nome"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-ink-secondary uppercase tracking-wide">E-mail</label>
                  <input
                    type="email"
                    name="reply_to"
                    required
                    placeholder="seu@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-ink-secondary uppercase tracking-wide">Assunto</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Em que posso ajudar?"
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-ink-secondary uppercase tracking-wide">Mensagem</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Conte um pouco sobre o seu projeto ou oportunidade..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={state === 'loading' || state === 'success'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-primary shadow-glow-sm hover:shadow-glow-md hover:opacity-95 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
              >
                {state === 'loading' && (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    Enviando...
                  </>
                )}
                {state === 'success' && (
                  <>
                    <CheckCircle size={18} />
                    Mensagem enviada!
                  </>
                )}
                {(state === 'idle' || state === 'error') && (
                  <>
                    <Send size={18} />
                    Enviar Mensagem
                  </>
                )}
              </button>

              {state === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-red-400"
                >
                  <AlertCircle size={15} />
                  Erro ao enviar. Tente pelo e-mail diretamente.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
