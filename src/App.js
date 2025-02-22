import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import { ThemeProvider } from "@mui/material";
import theme from "./Theme";
import SettlementController from "./Settlements/SettlementController";
import AreaSelector from "./Settlements/AreaSelector";
import LoadingSpinner from "./LoadingSpinner";

export default function App() {
  const [areaIndex, setAreaIndex] = useState(0);
  const areas = ["Commonwealth", "Far Harbor", "Nuka-World", "all"];
  const handleAreaChange = (event, newIndex) => {
    setAreaIndex(newIndex);
  };
  useEffect(() => {
    setAreaIndex(areas.indexOf("Commonwealth"));
  }, []);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <LoadingSpinner />
        <AreaSelector
          areas={areas}
          selectedIndex={areaIndex}
          onAreaChange={handleAreaChange}
        />
        <SettlementController area={areas[areaIndex]} />
      </ThemeProvider>
    </div>
  );
}
