import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        dm: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-fira-code)', 'monospace'],
      },
      colors: {
        bg: {
          base: '#020205',
          surface: '#08080e',
          card: '#0d0d18',
          'card-hover': '#131322',
        },
        border: {
          DEFAULT: '#1a1a2e',
          hover: '#2e2e50',
          glow: 'rgba(99, 102, 241, 0.4)',
        },
        primary: {
          DEFAULT: '#6366f1',
          hover: '#4f46e5',
          muted: 'rgba(99, 102, 241, 0.12)',
        },
        accent: {
          DEFAULT: '#22d3ee',
          muted: 'rgba(34, 211, 238, 0.12)',
        },
        emerald: {
          glow: 'rgba(16, 185, 129, 0.2)',
        },
        ink: {
          primary: '#f0f0f8',
          secondary: '#8080a0',
          muted: '#45455f',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        'gradient-accent': 'linear-gradient(135deg, #22d3ee, #6366f1)',
        'gradient-card': 'linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.06))',
        'gradient-hero': 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(99,102,241,0.25), transparent)',
      },
      animation: {
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'float': 'float 7s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'scan-line': 'scanLine 3s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(1deg)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(99, 102, 241, 0.3)',
        'glow-md': '0 0 30px rgba(99, 102, 241, 0.4)',
        'glow-lg': '0 0 60px rgba(99, 102, 241, 0.3)',
        'card': '0 4px 40px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 8px 60px rgba(99, 102, 241, 0.2)',
        'accent': '0 0 30px rgba(34, 211, 238, 0.3)',
      },
    },
  },
  plugins: [],
}

export default config
