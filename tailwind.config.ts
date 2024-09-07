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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        "5%": "5vh",
        "10%": "10vh",
        "75%": "75vh",
        "80%": "80vh"
      },
      width: {
        "25%": "25vw",
        "50%": "50vw",
        "75%": "75vw",
        "100%": "100vw",
        "250px": "200px"
      }
    },
  },
  plugins: [],
};
export default config;
