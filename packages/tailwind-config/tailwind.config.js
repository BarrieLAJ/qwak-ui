const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#062347",
        secondary: colors.red[500],
        textSecondary: colors.white,
        textPrimary: colors.white
      },
    },
    data: {
      activeTab: 'state~="active"',
      inactiveTab: 'state~="inactive"'
    }
  },
  plugins: [],
};
