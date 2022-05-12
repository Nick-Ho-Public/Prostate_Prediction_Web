import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    h3: {
      fontSize: "2rem",
    },
    fontFamily: ['"Recursive"', "serif"].join(","),
  },
});

export default theme;
