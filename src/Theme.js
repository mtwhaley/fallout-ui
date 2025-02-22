import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Arial",
  },
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#168a2b", // Example color
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          "& .MuiTableRow-root:hover": {
            backgroundColor: "#c5edcc",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: "black", // Default header cell text color
          fontWeight: "bold",
          letterSpacing: "0.05em",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          marginTop: "0.5em",
        },
      },
    },
  },
});

export default theme;
