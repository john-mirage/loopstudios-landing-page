const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1114px',
    },
    colors: {
      "white": "hsl(0, 0%, 100%)",
      "black": "hsl(0, 0%, 0%)",
      "dark-gray": "hsl(0, 0%, 55%)",
      "very-dark-gray": "hsl(0, 0%, 41%)",
      "overlay": "rgba(0, 0, 0, 0.7)",
      "hero": "rgba(0, 0, 0, 0.5)",
      "transparent": "transparent",
    },
    spacing: {
      "0": "0rem",
      "8": "0.5rem",
      "16": "1rem",
      "20": "1.25rem",
      "24": "1.5rem",
      "28": "1.75rem",
      "32": "2rem",
      "40": "2.5rem",
      "48": "3rem",
      "72": "4.5rem",
      "92": "5.75rem",
      "96": "6rem",
      "120": "7.5rem",
      "132": "8.25rem",
      "156": "9.75rem",
      "160": "10rem",
      "327": "20.4375rem",
      "450": "28.125rem",
      "650": "40.625rem",
      "730": "45.625rem",
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
      "15": ["0.9375rem", { lineHeight: "1.5625rem" }],
      "16": ["1rem", { lineHeight: "1.5rem" }],
      "24": ["1.5rem", { lineHeight: "1.5rem" }],
      "28": ["1.75rem", { lineHeight: "2.5rem" }],
      "32": ["2rem", { lineHeight: "2rem" }],
      "40": ["2.5rem", { lineHeight: "2.375rem" }],
      "48": ["3rem", { lineHeight: "3rem" }],
      "72": ["4.5rem", { lineHeight: "4.375rem" }],
    },
    letterSpacing: {
      "05": "0.03125rem",
    },
    extend: {
      maxWidth: {
        "327": "20.4375rem",
      },
    },
  },
  plugins: [],
}
