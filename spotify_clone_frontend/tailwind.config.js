/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: "#1DB954",
          black: "#0B0B0F",
          panel: "#121218",
          panel2: "#181826",
          text: "#EDEDED",
          muted: "#A7A7A7"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)"
      },
      keyframes: {
        floatIn: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        floatIn: "floatIn 260ms ease-out"
      }
    }
  },
  plugins: []
};
