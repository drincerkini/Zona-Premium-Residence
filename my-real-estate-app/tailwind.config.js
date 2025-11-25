/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeInSlow: "fadeInSlow 1.2s ease-out forwards",
        fadeOut: "fadeOut 0.5s ease-out forwards",
        fadeInUp: "fadeInUp 1s ease-out 0.3s forwards",
        logoPop: "logoPop 1s ease-out forwards",
        pulseRing: "pulseRing 1.3s ease-in-out infinite",
        fadeOutSlow: "fadeOutSlow 0.8s ease-out forwards",
        bgReveal: "bgReveal 1.6s ease-out forwards",
        logoElegant: "logoElegant 1.2s ease-out forwards",
        buttonFadeUp: "buttonFadeUp 1.2s ease-out 0.4s forwards",
        fadeSlideLeft: "fadeSlideLeft 1s ease-out forwards",
        fadeSlideRight: "fadeSlideRight 1s ease-out forwards",
      },
      keyframes: {
        fadeInSlow: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        logoPop: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "0.7" },
        },
        fadeOutSlow: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0", visibility: "hidden" },
        },
        bgReveal: {
          "0%": { filter: "blur(12px) brightness(0.5)" },
          "100%": { filter: "blur(0px) brightness(1)" },
        },
        logoElegant: {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.92)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        buttonFadeUp: {
          "0%": { opacity: "0", transform: "translateY(25px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeSlideLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeSlideRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
