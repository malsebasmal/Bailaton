const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Playfair Display Variable"', 'serif']
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    require("tailwindcss-animated")
  ],
};