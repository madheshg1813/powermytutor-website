import type { Config } from 'tailwindcss';

// Same brand tokens as the app (power-my-tutor/tailwind.config.ts), so the site and the product read as one.
const config: Config = {
  content: { relative: true, files: ['./src/**/*.{ts,tsx}'] },
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1C1917',
          soft: '#44403C',
          muted: '#78716C',
          faint: '#A8A29E',
        },
        // Warm white page, with a slightly deeper cream for alternating bands.
        paper: '#FDFBF7',
        cream: { soft: '#F5F1EA', line: '#EAE4DA' },
        brand: { DEFAULT: '#EA5A2A', hover: '#D64C1F', tint: '#FDEEE7' },
        green: { DEFAULT: '#168A4C', tint: '#E8F3EA' },
      },
      fontFamily: {
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '1200px' },
      boxShadow: {
        soft: '0 1px 2px rgba(28,25,23,0.04), 0 8px 24px -14px rgba(28,25,23,0.14)',
        lift: '0 2px 4px rgba(28,25,23,0.04), 0 18px 36px -18px rgba(28,25,23,0.24)',
        shot: '0 0 0 1px rgba(28,25,23,0.03), 0 2px 4px rgba(28,25,23,0.05), 0 36px 80px -32px rgba(28,25,23,0.38)',
        glow: '0 1px 0 rgba(255,255,255,0.28) inset, 0 1px 2px rgba(28,25,23,0.16), 0 10px 24px -10px rgba(234,90,42,0.55)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        rise: {
          from: { opacity: '0', transform: 'translateY(22px) scale(0.985)' },
          to: { opacity: '1', transform: 'none' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.75', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        rise: 'rise 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        breathe: 'breathe 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
