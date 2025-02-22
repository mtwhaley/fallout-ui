import { createTheme } from "@mui/material";
import util from "./Util";

const theme = createTheme({
  typography: {
    fontFamily: "Arial",
  },
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: util.colors.overviewTable.header, // Example color
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          "& .MuiTableRow-root:hover": {
            backgroundColor: util.colors.overviewTable.rowHover,
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
