import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import { ThemeProvider } from "@mui/material";
import theme from "./Theme";
import SettlementController from "./Settlements/SettlementController";
import AreaSelector from "./Settlements/AreaSelector";
import LoadingSpinner from "./LoadingSpinner";

export default function App() {
  const [settlements, setSettlements] = useState({
    isLoading: true,
    response: [],
  });
  const [areaIndex, setAreaIndex] = useState(0);
  const areas = ["Commonwealth", "Far Harbor", "Nuka-World", "all"];

  const handleAreaChange = (event, newIndex) => {
    setAreaIndex(newIndex);
  };

  useEffect(() => {
    fetch("https://localhost:5001/settlement/")
      .then((response) => {
        if (!response.ok) {
          setSettlements({ isLoading: false, response: [] });
          throw new Error("network response error");
        }
        return response.json();
      })
      .then((data) => {
        setSettlements({ isLoading: false, response: data });
      });
  }, []);

  useEffect(() => {
    setAreaIndex(areas.indexOf("Commonwealth"));
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <AreaSelector
          areas={areas}
          selectedIndex={areaIndex}
          onAreaChange={handleAreaChange}
        />
        {settlements.isLoading ? (
          <LoadingSpinner />
        ) : (
          <SettlementController
            settlements={settlements.response}
            area={areas[areaIndex]}
          />
        )}
      </ThemeProvider>
    </div>
  );
}
