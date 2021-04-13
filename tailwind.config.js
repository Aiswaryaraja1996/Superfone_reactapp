module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        3: "3px",
      },
      height: {
        "screen/3": "calc(100vh / 1.35)",
        95: "95%",
        full: "100%",
      },
      colors: {
        violet: "#AA30C8",
        blues: "#3059C8",
        blues1: "#3059C8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
