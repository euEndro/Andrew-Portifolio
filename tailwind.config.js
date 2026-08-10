/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Petrona"', 'Georgia', 'serif'],
        serif: ['"Petrona"', 'Georgia', 'serif'],
        mono: ['"Fragment Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        malachite: {
          DEFAULT: '#12271f',
          mid: '#1f3a2e',
          deep: '#081911',
        },
        jade: {
          DEFAULT: '#7fae9b',
          deep: '#2f5c46',
        },
        cinnabar: {
          DEFAULT: '#c4463a',
          deep: '#9c342b',
        },
        bone: {
          DEFAULT: '#f3e9d6',
          dim: '#cbbfa4',
        },
        celadon: '#d9e3d6',
        terra: '#e2a08c',
        ink: {
          DEFAULT: '#0a140f',
          dim: '#3f5449',
        },
      },
      borderRadius: {
        none: '0px',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
}
