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
    extend: {},
  },
  plugins: [],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  // other options ...
  plugins: [
    require('flowbite/plugin')
  ],
  content: [
    // other files...
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
}

