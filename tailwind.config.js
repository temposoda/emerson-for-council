/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        garden: {
          "color-scheme": "light",
          primary: "rgb(92, 127, 103)",
          secondary: "rgb(236, 244, 231)",
          accent: "rgb(250, 229, 229)",
          neutral: "rgb(93, 86, 86)",
          "neutral-content": "rgb(233, 231, 231)",
          "base-100": "rgb(233, 231, 231)",
          "base-content": "rgb(16, 15, 15)",
        },
      },
    ],
  },
};
