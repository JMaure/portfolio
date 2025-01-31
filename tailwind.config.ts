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
      },
    },
  },
  daisyui: {
    themes: [
      {
        grayblue: {
          primary: "#5C8ABF",
          "primary-content": "#F5F7FA",
          secondary: "#4A6572",
          "secondary-content": "#E2E8F0",
          accent: "#334155",
          "accent-content": "#FFFFFF",
          neutral: "#1F2937",
          "neutral-content": "#AAAA",
          "base-100": "#11182A",
          "base-200": "#17202F",
          "base-300": "#1E283B",
          "base-content": "#D1D5D8",
          info: "#3ABFF8",
          "info-content": "#001A21",
          success: "#36D399",
          "success-content": "#001307",
          warning: "#FBBD23",
          "warning-content": "#141100",
          error: "#F87272",
          "error-content": "#140000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
} satisfies Config;
