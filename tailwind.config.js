/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#fbbf24',
          dark: '#d97706',
        },
        secondary: '#1A1A2E',
        accent: '#fbbf24',
        background: '#0f172a',
        surface: '#1e293b',
        'surface-light': '#334155',
        'text-primary': '#f8fafc',
        'text-secondary': '#94a3b8',
        success: '#22c55e',
        error: '#ef4444',
        whatsapp: '#25D366',
        pending: '#f59e0b',
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'card': '8px',
        'button': '12px',
        'modal': '16px',
      },
      minHeight: {
        'touch': '44px',
      },
    },
  },
  plugins: [],
}
