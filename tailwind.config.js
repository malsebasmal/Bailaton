const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        org: "#ff930f",
        ylw: "#fff95b"
      },
      dropShadow: {
        org: "0px 0px 5px #ff930f"
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    require("tailwindcss-animated")
  ],
};