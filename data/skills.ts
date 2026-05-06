export interface Skill {
  name: string
  level?: 'learning' | 'intermediate' | 'proficient'
}

export interface SkillCategory {
  id: string
  title: string
  icon: string
  color: string
  borderColor: string
  glowColor: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend',
    icon: '⚙️',
    color: 'from-violet-500/20 to-purple-500/20',
    borderColor: 'border-violet-500/20 hover:border-violet-400/40',
    glowColor: 'rgba(139, 92, 246, 0.15)',
    skills: [
      { name: 'Node.js', level: 'intermediate' },
      { name: 'Java', level: 'proficient' },
      { name: 'Python', level: 'intermediate' },
      { name: 'REST APIs', level: 'proficient' },
      { name: 'Spring Boot', level: 'intermediate' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: '⚡',
    color: 'from-sky-500/20 to-indigo-500/20',
    borderColor: 'border-sky-500/20 hover:border-sky-400/40',
    glowColor: 'rgba(14, 165, 233, 0.15)',
    skills: [
      { name: 'React', level: 'proficient' },
      { name: 'Next.js', level: 'proficient' },
      { name: 'TypeScript', level: 'intermediate' },
      { name: 'JavaScript', level: 'proficient' },
      { name: 'HTML', level: 'proficient' },
      { name: 'CSS', level: 'proficient' },
      { name: 'Tailwind CSS', level: 'intermediate' },
    ],
  },
  {
    id: 'database',
    title: 'Banco de Dados',
    icon: '🗄️',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/20 hover:border-emerald-400/40',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    skills: [
      { name: 'MySQL', level: 'proficient' },
      { name: 'SQL', level: 'intermediate' },
      { name: 'Modelagem de Dados', level: 'intermediate' },
    ],
  },
  {
    id: 'devops',
    title: 'Ferramentas & DevOps',
    icon: '🛠️',
    color: 'from-orange-500/20 to-amber-500/20',
    borderColor: 'border-orange-500/20 hover:border-orange-400/40',
    glowColor: 'rgba(249, 115, 22, 0.15)',
    skills: [
      { name: 'Git', level: 'proficient' },
      { name: 'GitHub', level: 'proficient' },
      { name: 'Docker', level: 'learning' },
      { name: 'Vercel', level: 'intermediate' },
      { name: 'Linux', level: 'learning' },
    ],
  },
]
