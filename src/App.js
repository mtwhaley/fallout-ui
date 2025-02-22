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
  const [areas, setAreas] = useState({ isLoading: true, response: [] });
  const [areaIndex, setAreaIndex] = useState(0);

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
    fetch("https://localhost:5001/area/")
      .then((response) => {
        if (!response.ok) {
          setAreas({ isLoading: false, response: [] });
          throw new Error("network response error");
        }
        return response.json();
      })
      .then((data) => {
        const areaList = data.map((area) => area.name);
        const optionList = [...areaList, "all"];
        setAreas({ isLoading: false, response: optionList });
        setAreaIndex(optionList.indexOf("Commonwealth"));
      });
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        {areas.isLoading ? (
          <LoadingSpinner card={{ height: "3em" }} />
        ) : (
          <AreaSelector
            areas={areas.response}
            selectedIndex={areaIndex}
            onAreaChange={handleAreaChange}
          />
        )}
        {settlements.isLoading ? (
          <LoadingSpinner />
        ) : (
          <SettlementController
            settlements={settlements.response}
            area={areas.response[areaIndex]}
          />
        )}
      </ThemeProvider>
    </div>
  );
}
