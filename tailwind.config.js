// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00ffff", // Cian neón
        secondary: "#3b82f6", // Azul brillante
        dark: "#0a0a0a", // Fondo radiológico
        accent: "#ff007f", // Magenta tenue
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(0,255,255,0.6)",
      },
    },
  },
  plugins: [],
};
