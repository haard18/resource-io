const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      }
    },
    keyframes: {
      aurora: {
        from: {
          backgroundPosition: "50% 50%, 50% 50%",
        },
        to: {
          backgroundPosition: "350% 50%, 350% 50%",
        },
      },
    },
    screens: {
      'mobile': '340px',
      // => @media (min-width: 340px) { ... }

      'laptop': '540px',
      // => @media (min-width: 540px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }

      'large': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [addVariablesForColors],
}
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}