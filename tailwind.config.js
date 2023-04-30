/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#F5B23C",
        secondary: "#C6A76A",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-image":
              "linear-gradient(to top left, var(--tw-gradient-stops))",
          },
          "12%": {
            "background-image":
              "linear-gradient(to top, var(--tw-gradient-stops))",
          },
          "24%": {
            "background-image":
              "linear-gradient(to top right, var(--tw-gradient-stops))",
          },
          "36%": {
            "background-image":
              "linear-gradient(to right, var(--tw-gradient-stops))",
          },
          "48%": {
            "background-image":
              "linear-gradient(to bottom right, var(--tw-gradient-stops))",
          },
          "60%": {
            "background-image":
              "linear-gradient(to bottom, var(--tw-gradient-stops))",
          },
          "72%": {
            "background-image":
              "linear-gradient(to bottom left, var(--tw-gradient-stops))",
          },
          "84%": {
            "background-image":
              "linear-gradient(to left, var(--tw-gradient-stops))",
          },
        },
      },
      animation: {
        "bg-gradient": "gradient 1.5s linear infinite ",
      },
    },
  },
  plugins: [],
};

// background-image: linear-gradient(to right, var(--tw-gradient-stops))
