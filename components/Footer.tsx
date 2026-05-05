import { Github, Linkedin, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Contato', href: '#contato' },
]

const socials = [
  { Icon: Github, href: 'https://github.com/gabrielhubiner', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://linkedin.com/in/gabrielhubiner', label: 'LinkedIn' },
  { Icon: Mail, href: 'mailto:gabrielhubinerr@gmail.com', label: 'E-mail' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-syne font-bold text-2xl tracking-tight">
              <span className="text-gradient">GH</span>
              <span className="text-ink-primary">.</span>
            </span>
            <span className="text-xs text-ink-muted font-mono">Gabriel Hubiner Oliveira</span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-muted hover:text-ink-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-lg text-ink-muted hover:text-ink-primary hover:bg-bg-card border border-transparent hover:border-border transition-all duration-200"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-xs text-ink-muted">
            © {new Date().getFullYear()} Gabriel Hubiner Oliveira. Todos os direitos reservados.
          </span>
          <span className="text-xs text-ink-muted font-mono">
            Feito com Next.js · Tailwind · Framer Motion
          </span>
        </div>
      </div>
    </footer>
  )
}
