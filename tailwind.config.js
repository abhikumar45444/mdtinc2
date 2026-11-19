/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        alabaster: '#EAEAEA',
        onyx: '#121212',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tight: '-0.02em',
        wide: '0.08em',
        widest: '0.15em',
      },
    },
  },
  plugins: [],
}
