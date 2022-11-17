/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      body: ["Inter"],
      sans: ["Inter"],
      serif: ["Inter"],
      mono: ["Inter"],
    },
    container: {
      // padding: "20px",
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1170px",
        "2xl": "1536px",
      },
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
