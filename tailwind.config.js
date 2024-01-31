/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    
    extend: {
      colors: {
        primary: '#d6c315',
        secondary: '#d66215'
      },
    },
  },

  plugins: [
    require('flowbite/plugin')
  ],
  content: [
    // other files...
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
}

