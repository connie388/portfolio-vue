module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    theme: {
      screens: {
        xxs: "540px",
      },
    },

    extend: {
      //https://blog.logrocket.com/creating-custom-animations-tailwind-css/
      animation: {
        shine: "shine 1s",
        "waving-hand": "wave 2s linear infinite",
      },
      //for gradient hover effect
      // refer to https://birdeatsbug.com/blog/creating-hover-effects-with-tailwind-css
      backgroundSize: {
        "size-200": "200% 200%",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },

        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
    },
  },
};
