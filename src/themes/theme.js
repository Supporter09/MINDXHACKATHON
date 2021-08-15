import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      light: "#F4F6F7",
    },
    secondary: {
      main: "#3EDAD6",
    },
  },
  typography: {
    h1: {
      fontFamily: "Open Sans, sans-serif",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "48px",
      textAlign: "center",
      color: "#000",
    },
    h2: {
      fontFamily: "Open Sans, sans-serif",
      fontStyle: "normal",
      fontSize: "42px !important",
      lineHeight: "48px",
      textAlign: "center",
      color: "#000",
    },
    body1: {
      fontFamily: "Open Sans, sans-serif",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "18px",
      lineHeight: "24px",
      textAlign: "center",
      color: "#000000",
      margin: "15px 0",
    },
    body2: {
      fontFamily: "Open Sans, sans-serif",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "18px",
      textAlign: "center",
      color: "#000000",
    },
  },
});

export default theme;
