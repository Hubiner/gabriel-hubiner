import type { Metadata } from 'next'
import { Syne, DM_Sans, Fira_Code } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Gabriel Hubiner Oliveira — Developer Engineer',
  description:
    'Portfólio profissional de Gabriel Hubiner Oliveira — Developer Engineer com foco em soluções práticas usando React, Next.js, Node.js, Java e Python.',
  keywords: [
    'Developer Engineer',
    'Gabriel Hubiner Oliveira',
    'Portfolio',
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Java',
    'Python',
    'Node.js',
  ],
  authors: [{ name: 'Gabriel Hubiner Oliveira' }],
  openGraph: {
    title: 'Gabriel Hubiner Oliveira — Developer Engineer',
    description:
      'Developer Engineer com foco em interfaces modernas, integrações práticas e soluções que transformam dados em valor.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gabriel Hubiner Oliveira — Developer Engineer',
    description:
      'Developer Engineer com foco em interfaces modernas, integrações práticas e soluções que transformam dados em valor.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${syne.variable} ${dmSans.variable} ${firaCode.variable} font-dm bg-bg-base text-ink-primary antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
