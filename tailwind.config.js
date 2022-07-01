/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          black: {
            veryDark: "#141414",
            dark: "#222",
            light: "#333",
          },
          white: {
            veryDark: "#94A3B8",
            dark: "#E5E5E5",
            light: "#FFF",
          },
          green: {
            dark: "#B5c101",
            light: "#E1F11E",
          },
          blue: {
            dark: "#1890FF",
            light: "#66B5FF",
          },
        },
      },
    },
  },
  plugins: [],
};
