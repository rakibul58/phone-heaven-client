/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#390099",
          "secondary": "#9e0059",
          "accent": "#FF0054",
          "neutral": "#251C31",
          "base-100": "#242A42",
          "info": "#FF5400",
          "success": "#18AA6D",
          "warning": "#EBB842",
          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
