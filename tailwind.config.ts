import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
      },
      colors: {
        brand: {
          bg:      '#0A0A0F',
          surface: '#111118',
          border:  '#1E1E2A',
          accent:  '#6C63FF',
          accent2: '#00E5A0',
          muted:   '#3A3A4A',
          text:    '#E8E8F0',
          subtle:  '#9696B0',
        },
      },
    },
  },
  plugins: [],
}
export default config
