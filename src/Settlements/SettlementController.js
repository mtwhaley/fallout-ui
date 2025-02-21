import { useEffect, useState } from "react";
import SettlementOverview from "./SettlementOverview";

const SettlementController = () => {
  const [settlements, setSettlements] = useState([]);
  const maxSettlers = 18;
  const errorColor = "#ff5555";

  useEffect(() => {
    fetch("https://localhost:5001/settlement/")
      .then((response) => {
        if (!response.ok) {
          console.log(response);
          throw new Error("network response error");
        }
        return response.json();
      })
      .then((data) => {
        setSettlements(data);
      });
  }, []);

  const isIncomplete = (settlement) => {
    const completionKeys = ["walls", "defenses", "armored", "weaponized"];
    const reducedValue = completionKeys
      .map((key) => settlement[key] === true)
      .reduce((reducedVal, currentVal) => {
        if (currentVal === false || currentVal === null) return false;
        return reducedVal;
      });
    return !reducedValue;
  };

  return (
    <SettlementOverview
      settlements={settlements}
      maxSettlers={maxSettlers}
      isIncomplete={isIncomplete}
      errorColor={errorColor}
    />
  );
};
export default SettlementController;
