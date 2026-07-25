/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FCFAF4",
          100: "#F8F3E9",
          200: "#F1E9D8",
          300: "#E7DBC3",
        },
        sage: {
          100: "#E6EDE1",
          200: "#CBD8C1",
          300: "#A9BE9B",
          400: "#8AA378",
          500: "#6E8A5C",
          600: "#57724A",
          700: "#435A39",
        },
        cool: {
          100: "#E4F2F8",
          200: "#C2E4F1",
          300: "#96D0E7",
          400: "#63B7D9",
          500: "#3E9FC9",
          600: "#2C82A8",
        },
        ink: {
          DEFAULT: "#2C332A",
          soft: "#55604F",
          faint: "#8A917F",
        },
      },
      fontFamily: {
        head: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        body: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 8px rgba(67, 90, 57, 0.06)",
        md2: "0 10px 30px rgba(67, 90, 57, 0.10)",
        lg2: "0 24px 60px rgba(67, 90, 57, 0.14)",
      },
      borderRadius: {
        xl2: "20px",
        "2xl2": "32px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
