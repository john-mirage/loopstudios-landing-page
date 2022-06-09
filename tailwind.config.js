const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "white": "hsl(0, 0%, 100%)",
      "black": "hsl(0, 0%, 0%)",
      "dark-gray": "hsl(0, 0%, 55%)",
      "very-dark-gray": "hsl(0, 0%, 41%)",
      "overlay": "rgba(0, 0, 0, 0.7)",
      "transparent": "transparent",
    },
    spacing: {
      "0": "0rem",
      "8": "0.8rem",
      "16": "1.6rem",
      "20": "2rem",
      "24": "2.4rem",
      "28": "2.8rem",
      "32": "3.2rem",
      "40": "4rem",
      "48": "4.8rem",
      "72": "7.2rem",
      "92": "9.2rem",
      "96": "9.6rem",
      "120": "12rem",
      "132": "13.2rem",
      "156": "15.6rem",
      "650": "65rem",
    },
    fontFamily: {
      "alata": [
        "Alata",
        ...defaultTheme.fontFamily.sans,
      ],
      "josefin": [
        "Josefin Sans",
        ...defaultTheme.fontFamily.sans,
      ],
    },
    fontSize: {
      "h1": ["2.8rem", { lineHeight: "4rem" }],
      "h2": ["4rem", { lineHeight: "3.8rem" }],
      "h3": ["3.2rem", { lineHeight: "3.2rem" }],
      "h4": ["2.4rem", { lineHeight: "2.4rem" }],
      "p": ["1.5rem", { lineHeight: "2.5rem" }],
      "button": ["1.6rem", { lineHeight: "2.4rem" }],
    },
    letterSpacing: {
      "button": "0.05rem",
    },
    extend: {},
  },
  plugins: [],
}
