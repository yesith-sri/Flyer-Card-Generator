import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": {
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3d5",
          400: "#627eea",
          500: "#2d3748",
          600: "#1a202c",
          700: "#0f1419",
          800: "#0a0e17",
          900: "#050710",
        },
      },
    },
  },
  plugins: [],
};

export default config;
