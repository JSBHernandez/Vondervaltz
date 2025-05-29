import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0D1117', // Un negro azulado profundo
        'brand-dark-secondary': '#161B22', // Un poco más claro para acentos de fondo
        'brand-blue': '#3B82F6', // Azul vibrante principal (Tailwind's blue-500)
        'brand-blue-light': '#60A5FA', // Azul más claro para hover/efectos (Tailwind's blue-400)
        'brand-accent': '#00E5FF', // Un cian o turquesa para acentos brillantes
        'brand-light-text': '#E0E0E0', // Texto principal claro
        'brand-muted-text': '#A0A0A0', // Texto secundario o silenciado
      },
      fontFamily: {
        sans: ['"Exo 2"', 'sans-serif'], // Fuente futurista, asegúrate de importarla
        mono: ['"Roboto Mono"', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'subtle-pulse': 'subtlePulse 2s infinite ease-in-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        subtlePulse: {
          '0%, 100%': { boxShadow: '0 0 10px 0px rgba(59, 130, 246, 0.3)' },
          '50%': { boxShadow: '0 0 20px 5px rgba(59, 130, 246, 0.5)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 15px 5px rgba(59, 130, 246, 0.4)', // Sombra de resplandor azul
        'glow-accent': '0 0 15px 5px rgba(0, 229, 255, 0.4)',
      },
      backgroundImage: {
        'gradient-futuristic': 'linear-gradient(135deg, #0D1117 0%, #161B22 50%, #001D3D 100%)', // Gradiente sutil
      },
    },
  },
  plugins: [

  ],
};

export default config;