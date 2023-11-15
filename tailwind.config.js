/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      blur: {
        xs: "1px",
      },
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        cyberpunk: {
          primary: "#48ffd0",
          secondary: "#f8f00b",
          accent: "#f43e9f",
          neutral: "#000000",
          "base-100": "#fff",
        },
      },
    ],
  },
};
