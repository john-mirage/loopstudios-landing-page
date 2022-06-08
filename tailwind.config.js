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
    extend: {},
  },
  plugins: [],
}
