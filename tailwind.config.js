/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
        'fundo': '#7AADB4',
        'header': '#364E57',
        'marrom': '#77433E',
        'amarelo': '#FFF1B2',
      },
    extend: {
      fontFamily: {
        'start': ['"Press Start 2P"', 'system-ui'],
        'ibm': ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

