import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        't-dark': '#101010',
        't-dark-text': '#262A41',
        't-gray': '#404852',
        't-blue': '#32A7E2', //tasks
        't-purple': '#B548C6',
        't-orange': '#FF8700', //workout
        't-red': '#DC3434', //messages
        't-green': '#4BA83D' //remind
      },
      scale: {
        '99': '0.99',
        '102': '1.02',
      }
    },
  },
  plugins: [],
};
export default config;
