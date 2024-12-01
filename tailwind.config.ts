import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-color":"#000000"
        // "other":"#0dfjod"
      },
        screens: {
          'max-lg': { 'max': '952px' },
          'max-858': { 'max': '858px' }, // Use valid key name without square brackets
        }
        ,
      variants: {
        backgoundColor:['responsive','hover','focus','active'],
        fontsize:['responsive','hover']
      }
    },
  },
  plugins: [],
} satisfies Config;
