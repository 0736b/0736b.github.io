/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'robotomono': ['Roboto Mono', 'monospace'],
        'rubik' : ['Rubik', 'sans-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
