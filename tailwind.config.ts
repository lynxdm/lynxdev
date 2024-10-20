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
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      fontFamily: {
        commissioner: "var(--font-commissioner)",
        bebas_neue: "var(--font-bebas-neue)",
        almari: " var(--font-almari)",
        bilbo_swash_caps: "var(--font-bilbo-swash)",
      },
    },
  },
  plugins: [],
};
export default config;
