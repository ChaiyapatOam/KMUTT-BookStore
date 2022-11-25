/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: "#343C44",
        navbar: "#969A9E",
        orange: "#FA4616",
        sub: ""
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
