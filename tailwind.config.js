/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#F8F4E8",
        blue: "#3498DB",
      },
      fontFamily: {
        body: ["Montserrat"],
      },
      lineHeight: {
        "extra-loose": "60px",
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      fontSize: {
        XXL: "6.8rem",
        XL: "40px",
        ExtraLarge: "6rem",
        MediumLarge: "5.4rem",
        XLarge: "4.2rem",
        Large: "3.5rem",
        Big: "2.3rem",
        Medium: "1.8rem",
        Small: "1.3rem",
        XSMall: "1.1rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/static/assets/why-play-is-importantnarrow.jpg')",
        "game-time": "url('/static/assets/game-time.jpg')",
        tickets: "url('/static/assets/tickets.jpg')",
        "retro-games": "url('/static/assets/retro-games.jpg')",
        retro: "url('/static/assets/retro.jpeg')",
        monopoly: "url('/static/assets/monopoly.png')",
        banner: "url('/static/assets/banner.jpg')",
        teddy: "url('/static/assets/nounours.jpg')",
        gameUp: "url('/static/assets/game.jpg')",
        gameDown: "url('/static/assets/gameboy.jpg')",
        uno: "url('/static/assets/uno.jpg')",
      },
    },
  },
  plugins: [],
};
