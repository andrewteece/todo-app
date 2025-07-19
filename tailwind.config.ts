/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2563eb', // blue-600
          light: '#3b82f6', // blue-500
        },
        base: {
          light: '#ffffff',
          dark: '#0f172a', // slate-900
        },
        foreground: {
          light: '#1e293b', // slate-800
          dark: '#f1f5f9', // slate-100
        },
        muted: {
          light: '#64748b', // slate-500
          dark: '#94a3b8', // slate-400
        },
        card: {
          light: '#f8fafc', // slate-50
          dark: '#1e293b', // slate-800
        },
      },
    },
  },
  plugins: [],
};
