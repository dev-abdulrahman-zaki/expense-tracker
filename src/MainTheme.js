const { grey } = require("@mui/material/colors");

const MainTheme = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          liActive: {
            main: grey[300],
          },
        }
      : {
          // palette values for dark mode
          liActive: {
            main: grey[800],
          },
        }),
  },
});

export default MainTheme;