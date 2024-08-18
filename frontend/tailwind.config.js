/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      'background': "url('/frontend/public/images/desert_blur.jpg')"
    },
  },
  plugins: [],
}

