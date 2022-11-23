/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        bikersOceanTheme: {
          primary: "#C3151D",
          secondary: "#5045a5",
          accent: "#8039ba",
          "base-100": "#E8E9ED",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
