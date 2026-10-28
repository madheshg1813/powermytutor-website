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
        cream: { soft: '#F5F1EA', line: '#EAE4DA' },
        brand: { DEFAULT: '#EA5A2A', hover: '#D64C1F' },
        green: { DEFAULT: '#168A4C', tint: '#E8F3EA' },
      },
      fontFamily: {
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '1200px' },
      boxShadow: {
        soft: '0 1px 2px rgba(28,25,23,0.04), 0 8px 24px -12px rgba(28,25,23,0.12)',
        lift: '0 2px 4px rgba(28,25,23,0.04), 0 16px 32px -16px rgba(28,25,23,0.22)',
        shot: '0 1px 2px rgba(28,25,23,0.06), 0 24px 60px -24px rgba(28,25,23,0.28)',
      },
    },
  },
  plugins: [],
};

export default config;
