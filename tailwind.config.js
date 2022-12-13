module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    theme: {
      screens: {
        xxs: "540px",
      },
    },
  },
  // content: ["./node_modules/flowbite/**/*.js"],
  variants: {
    extend: {},
  },
  // plugins: [require("flowbite/plugin")], // refer https://flowbite.com/docs/getting-started/quickstart/
};
