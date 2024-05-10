import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "640px",
        md: "1000px",
        lg: "1024px",
        xl: "1280px",
      },
      spacing: {
        "100": "36rem",
        "90": "22rem",
      },
      colors: {
        cos: "#6fc276",
        customBlue: "#003f82",
        customBtnBlue: '#1f416c',
        customGreen: "#40c483",
        nxtGreen:"#00b059",
        coolGray: "#5f5f5f",
        bg:"#f0f6f9"
      },
      transitionDuration: {
        '2000': '2000ms' // Adding 2000ms as a custom duration
      }
    },
  },
  plugins: [require("tailwindcss-animated"), require("taos/plugin")],
};
export default config;
