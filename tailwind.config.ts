import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#08111f",
          card: "#101b2d",
          line: "#23314a",
          accent: "#50d2a0",
          muted: "#99a8bf"
        }
      }
    }
  },
  plugins: []
};

export default config;
