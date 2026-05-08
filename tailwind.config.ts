import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lagoon: "#0EA5A6",
        ocean: "#063B52",
        coral: "#FF6B5A",
        sun: "#F5B544",
        sand: "#FFF7E6"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(6, 59, 82, 0.12)"
      }
    }
  },
  plugins: []
};
export default config;
