import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        bg: '#040D1A',
        accent: '#06FFA5',
        emerald: '#10B981',
        cyan: '#06B6D4',
        muted: '#64748B',
      },
      animation: {
        'float-a': 'floatA 7s ease-in-out infinite',
        'float-b': 'floatB 9s ease-in-out infinite 1.5s',
        'float-c': 'floatA 11s ease-in-out infinite 3s',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 30s linear infinite',
        'scan-line': 'scanLine 5s linear infinite',
        'grad-shift': 'gradShift 10s ease infinite',
      },
      keyframes: {
        floatA: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-22px) rotate(8deg)' },
        },
        floatB: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(-5deg)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.75' },
        },
        rotateSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        scanLine: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
        gradShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(6,255,165,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(6,255,165,0.025) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '60px 60px',
      },
    },
  },
  plugins: [],
};
export default config;
