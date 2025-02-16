'use strict'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-gradient': 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 100%)',
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        neon: "0 0 10px #e600ff, 0 0 40px #e600ff, 0 0 80px #e600ff",
        softGlow: "0px 0px 10px rgba(255, 105, 180, 0.6)",
      },
      colors: {
        'pattern-light': '#000000',
        'pattern-dark': '#b91c1c',
      },
      borderColor: {
        DEFAULT: '#1f2937',
      },
      animation: {
        pulseGlow: "pulseGlow 1.5s infinite alternate",
      },
      keyframes: {
        pulseGlow: {
          "0%": { boxShadow: "0 0 10px #e600ff" },
          "100%": { boxShadow: "0 0 20px #ff00ff, 0 0 30px #ff00ff" },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
