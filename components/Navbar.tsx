'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = links.map((l) => l.href.replace('#', ''))
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-bg-base/80 backdrop-blur-xl border-b border-border/60 shadow-[0_4px_40px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNavClick('#inicio') }}
            className="font-syne font-bold text-xl tracking-tight group"
          >
            <span className="text-gradient">GH</span>
            <span className="text-ink-primary">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className={cn(
                      'relative px-4 py-2 text-sm font-dm font-medium rounded-lg transition-colors duration-200',
                      isActive
                        ? 'text-ink-primary'
                        : 'text-ink-secondary hover:text-ink-primary'
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-primary-muted rounded-lg border border-primary/20"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contato"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contato') }}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-primary rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-glow-sm"
            >
              Contato
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-ink-secondary hover:text-ink-primary hover:bg-bg-surface transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-bg-base/95 backdrop-blur-xl"
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-bg-surface border-l border-border flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-border">
                <span className="font-syne font-bold text-xl">
                  <span className="text-gradient">GH</span>
                  <span className="text-ink-primary">.</span>
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-lg text-ink-secondary hover:text-ink-primary"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 px-4 py-8 flex flex-col gap-2">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className={cn(
                      'px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200',
                      activeSection === link.href.replace('#', '')
                        ? 'bg-primary-muted text-primary border border-primary/20'
                        : 'text-ink-secondary hover:text-ink-primary hover:bg-bg-card'
                    )}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="px-4 pb-8">
                <a
                  href="#contato"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contato') }}
                  className="block w-full text-center px-4 py-3 font-medium text-white bg-gradient-primary rounded-lg hover:opacity-90 transition-opacity"
                >
                  Entrar em Contato
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
