import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",   // 12px
          small: "0.875rem", // 14px
          medium: "0.9375rem", // 15px
          large: "1.125rem", // 18px
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "4px", 
          medium: "6px", 
          large: "8px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
            primary: {
              50: "#eef6ff",
              100: "#d8eaff",
              200: "#b8daff",
              300: "#85c2ff",
              400: "#4aa3ff",
              500: "#2186ff",
              600: "#0967f5",
              700: "#0552e1",
              800: "#0a46b6",
              900: "#0f3c8f",
              950: "#0a2657",
              DEFAULT: "#0967f5",
              foreground: "#ffffff"
            }
          }
        }
      }
    })
  ]
}
