/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",  // adjust if you're using other folders
    "../../packages/ui/**/*.{js,ts,jsx,tsx}"  // if using shared UI package
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

