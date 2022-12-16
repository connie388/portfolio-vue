module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xxxs: "360px",
      xxs: "410px",
      xs: "540px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      custombp: { raw: "(min-height: 600px),(min-width:1024px)" },
    },

    fontSize: {
      xs: "0.75rem",
      sm: "0.8rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },

    extend: {
      //https://blog.logrocket.com/creating-custom-animations-tailwind-css/
      animation: {
        shine: "shine 1s",
        waving: "wave 2s linear infinite",
        "fade-in-right": "fade-in-right 1s ease-out",
        "fade-in-left": "fade-in-left 1s ease-out",
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

        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
    },
  },
};
