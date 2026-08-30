/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Custom brand colors for Krishna Selection House.
      // Using named colors (instead of raw hex codes everywhere in our
      // components) makes it easy to re-theme the whole site from one place.
      colors: {
        maroon: {
          DEFAULT: "#7A1E3C",
          dark: "#5C1730",
          light: "#9A2E4E",
        },
        marigold: {
          DEFAULT: "#E8A33D",
          light: "#F3C578",
        },
        teal: {
          DEFAULT: "#1F5C55",
          dark: "#164541",
        },
        ivory: "#FBF6EC",
        blush: "#F3E4D8",
        charcoal: "#2B211D",
      },
      fontFamily: {
        // "display" = headings, "body" = paragraphs and UI text.
        // Loaded via Google Fonts link tag in index.html.
        display: ["Fraunces", "serif"],
        body: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
