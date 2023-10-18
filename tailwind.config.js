/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          100: "#282828",
          200: "#001b39",
          300: "rgba(0, 0, 0, 0.05)",
        },
        darkslategray: {
          100: "#4a4a4a",
          200: "#393939",
          300: "#36373a",
        },
        dimgray: {
          100: "#6b6c6e",
          200: "#5f6368",
          300: "#535353",
        },
        gainsboro: {
          100: "#dee1e6",
          200: "#d9d9d9",
        },
        whitesmoke: {
          100: "#f1f3f4",
          200: "#eee",
        },
        limegreen: "#22cb58",
        forestgreen: "#3eaf3f",
        goldenrod: {
          100: "#ffbc4f",
          200: "#e1a325",
        },
        tomato: {
          100: "#ff5e5d",
          200: "#e14942",
        },
        black: "#000",
        orange: "#fbbc04",
        mediumorchid: "#c33eb3",
        khaki: "#ffd266",
        cornflowerblue: "#3f7ccd",
        darkslateblue: "#00458e",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
        poppins: "Poppins",
        inter: "Inter",
        "alumni-sans-inline-one": "'Alumni Sans Inline One'",
      },
      borderRadius: {
        xl: "20px",
        "8xs": "5px",
        "3xs": "10px",
        "4xs-5": "8.5px",
        "5xs-9": "7.9px",
        "6xs-4": "6.4px",
      },
    },
    fontSize: {
      xs: "12px",
      "13xl": "32px",
      base: "16px",
      lg: "18px",
      sm: "14px",
      xl: "20px",
      "2xs-6": "10.6px",
      smi: "13px",
      "2xs": "11px",
      "base-9": "15.9px",
      inherit: "inherit",
    },
  },
  plugins: [],
};
