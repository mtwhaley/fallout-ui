import React from "react";
import Header from "./Header/Header";
import { ThemeProvider } from "@mui/material";
import theme from "./Theme";
import SettlementController from "./Settlements/SettlementController";
export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <SettlementController />
      </ThemeProvider>
    </div>
  );
}
