import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        violet: {
          '50': '#faf4ff',
          '100': '#f3e8ff',
          '200': '#e8d0fe',
          '300': '#d9abfc',
          '400': '#c47af8',
          '500': '#a847ee',
          '600': '#8e27d2',
          '700': '#781dae',
          '800': '#641a8e',
          '900': '#561a75',
          '950': '#240335',
        },
        cyber: {
          glow: '#a847ee',
          dark: '#0f0721',
          grid: '#2a1957',
        },
        neon: {
          primary: '#a847ee',
          secondary: '#2de2e6',
          accent: '#ff3864',
          dark: '#0a0514'
        }
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(to right, rgba(42, 25, 87, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(42, 25, 87, 0.1) 1px, transparent 1px)',
        'hero-gradient': 'radial-gradient(circle at top center, rgba(168, 71, 238, 0.2) 0%, rgba(15, 7, 33, 0.8) 50%)',
        'glow-gradient': 'linear-gradient(90deg, #c47af8 0%, #8e27d2 50%, #a847ee 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(168, 71, 238, 0.1) 0%, rgba(42, 25, 87, 0.2) 100%)',
        'hero-glow': 'radial-gradient(circle at center, rgba(168, 71, 238, 0.4) 0%, rgba(15, 7, 33, 0.2) 70%)',
        'neon-glow': 'linear-gradient(90deg, #c47af8 0%, #8e27d2 50%, #a847ee 100%)',
        'card-shine': 'linear-gradient(145deg, rgba(168, 71, 238, 0.2) 0%, rgba(42, 25, 87, 0.4) 100%)',
        'noise': 'url("/noise.png")',
        'matrix-bg': 'linear-gradient(180deg, rgba(15, 7, 33, 0) 0%, #0f0721 100%)',
        'glow-border': 'linear-gradient(90deg, transparent, #a847ee, transparent)',
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-shine': 'linear-gradient(45deg, transparent 25%, rgba(168, 71, 238, 0.1) 50%, transparent 75%)',
        'cyber-mask': 'linear-gradient(110deg, #000 0%, transparent 40%, transparent 60%, #000 100%)',
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'neon': '0 0 20px rgba(168, 71, 238, 0.3), 0 0 40px rgba(168, 71, 238, 0.1)',
        'neon-strong': '0 0 30px rgba(168, 71, 238, 0.5), 0 0 60px rgba(168, 71, 238, 0.2)',
        'neon-text': '0 0 10px rgba(168, 71, 238, 0.8)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'matrix-flow': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'border-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'cyber-glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-5px, 2px)' },
          '66%': { transform: 'translate(5px, -2px)' },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 3s ease-in-out infinite',
        'matrix': 'matrix-flow 20s linear infinite',
        'glow': 'glow-pulse 3s ease-in-out infinite',
        'border-flow': 'border-flow 3s linear infinite',
        'cyber-glitch': 'cyber-glitch 0.3s ease-in-out infinite',
        'text-shimmer': 'text-shimmer 2s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
