"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-geist-mono)",
  },
  components: {
    MuiStack: {
      defaultProps: {
        spacing: 2,
      },
    },
    MuiCard: {
      defaultProps: { variant: "outlined" },
      styleOverrides: {
        root: {
          padding: 20,
        },
      },
    },
    MuiTextField: {
      defaultProps: { size: "small" },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "small",
        disableElevation: true,
      },
    },
  },
});

export default theme;
