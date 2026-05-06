export interface Project {
  id: number
  title: string
  description: string
  stack: string[]
  repoUrl: string
  siteUrl: string
  color: string
  icon: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Vantage',
    description:
      'Plataforma full-stack que organiza dados em dashboards interativos, com foco em clareza visual e suporte à tomada de decisão.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/Hubiner/vantage',
    siteUrl: 'https://vantage-nu-lime.vercel.app/',
    color: '#6366f1',
    icon: '📊',
  },
  {
    id: 2,
    title: 'Odds',
    description:
      'Aplicação de análise e visualização de odds esportivas, com comparativos, filtros e interface enxuta orientada a performance.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/Hubiner/Odds',
    siteUrl: 'https://odds-one.vercel.app/#landing',
    color: '#10b981',
    icon: '🎯',
  },
  {
    id: 3,
    title: 'Lume Atelier',
    description:
      'Site institucional para atelier criativo: identidade visual marcante, animações suaves e apresentação de portfolio com foco estético.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/Hubiner/LumeAtelier',
    siteUrl: 'https://lume-atelier.vercel.app/',
    color: '#c084fc',
    icon: '✨',
  },
  {
    id: 4,
    title: 'Atelie Digital',
    description:
      'Estúdio digital online com showcase de serviços, fluxo de contato integrado e experiência fluida em todos os dispositivos.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/Hubiner/AtelieDigital',
    siteUrl: 'https://atelie-digital-khaki.vercel.app/',
    color: '#ec4899',
    icon: '🎨',
  },
  {
    id: 5,
    title: 'Orby Bank',
    description:
      'Interface de banco digital moderna com dashboard de saldo, transações e cartões, priorizando UX limpa e responsividade.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/Hubiner/OrbyBank',
    siteUrl: 'https://orby-bank.vercel.app/',
    color: '#22d3ee',
    icon: '🏦',
  },
  {
    id: 6,
    title: 'Nova Sprint Academy',
    description:
      'Plataforma de cursos e trilhas de aprendizado com catálogo organizado por área, progresso por módulo e área do aluno.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/Hubiner/NovaSprintAcademy',
    siteUrl: 'https://nova-sprint-academy.vercel.app/',
    color: '#f59e0b',
    icon: '🎓',
  },
  {
    id: 7,
    title: 'PulseStack',
    description:
      'Aplicação web voltada a visualização de dados em tempo real, com dashboards dinâmicos e foco em legibilidade técnica.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/Hubiner/PulseStack',
    siteUrl: 'https://pulse-stack-eight.vercel.app/',
    color: '#8b5cf6',
    icon: '📡',
  },
  {
    id: 8,
    title: 'Atrio Reserve',
    description:
      'Sistema de reservas com seleção de datas, calendário interativo e fluxo completo de booking ponta a ponta.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/Hubiner/AtrioReserve',
    siteUrl: 'https://atrio-reserve.vercel.app/',
    color: '#14b8a6',
    icon: '🏨',
  },
  {
    id: 9,
    title: 'Nova Rota Studio',
    description:
      'Site institucional de estúdio criativo, com showcase de projetos, identidade forte e narrativa visual envolvente.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/Hubiner/NovaRotaStudio',
    siteUrl: 'https://nova-rota-studio.vercel.app/',
    color: '#f472b6',
    icon: '🗺️',
  },
]
