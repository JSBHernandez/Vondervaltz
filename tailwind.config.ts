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
        'subtle-float': 'subtleFloat 3s infinite ease-in-out alternate',
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
        subtleFloat: { // NUEVOS KEYFRAMES
          '0%': { transform: 'translateY(0px) rotateX(60deg) rotateZ(var(--initial-z-rot, 0deg))', opacity: '0.6' },
          '50%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-20px) rotateX(60deg) rotateZ(calc(var(--initial-z-rot, 0deg) + 5deg))', opacity: '0.6' },
        },
        
      },
      boxShadow: {
        'glow-blue': '0 0 15px 5px rgba(59, 130, 246, 0.4)', // Sombra de resplandor azul
        'glow-accent': '0 0 15px 5px rgba(0, 229, 255, 0.4)',
      },
      backgroundImage: {
        'gradient-futuristic': 'linear-gradient(135deg, #0D1117 0%, #161B22 50%, #001D3D 100%)',
        // NUEVO: Resplandor azulado sutil para el fondo del hero
        'hero-glow-background': 'radial-gradient(ellipse at 50% 50%, rgba(29, 78, 216, 0.10) 0%, rgba(13, 17, 23, 0) 70%)',
        // NUEVO: Para los objetos flotantes (ejemplo)
        'object-gradient': 'linear-gradient(145deg, theme("colors.brand-blue-light / 70%"), theme("colors.brand-blue / 90%"))',
      },
    },
  },

  plugins: [

  ],
};

export default config;