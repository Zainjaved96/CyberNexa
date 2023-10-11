import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3b82f6",
          secondary: "#34d399",
          accent: "#b3f3fc",
          neutral: "#261d35",
          "base-100": "#1f2937",
          info: "#9bbdf8",
          success: "#16a34a",
          warning: "#e68c1e",
          error: "#e94744",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
export default config;
