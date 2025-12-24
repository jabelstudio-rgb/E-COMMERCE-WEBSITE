import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e6f6ed",
          100: "#c3e8d1",
          500: "#1f8a4c",
          700: "#106136"
        }
      }
    }
  },
  plugins: []
};

export default config;
