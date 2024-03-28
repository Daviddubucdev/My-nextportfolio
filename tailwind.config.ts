/** @type {import('tailwindcss').Config} */


import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgbanner': "url('./app/public/image/backgroundft.png')",
      }
    },
  },
  plugins: [],
};
export default config;
