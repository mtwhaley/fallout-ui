import SettlementOverview from "./SettlementOverview";
import SettlementDetails from "./SettlementDetails";
import { useState } from "react";

const SettlementController = ({ settlements, area }) => {
  const [detailSettlement, setDetailSettlement] = useState(settlements[0]);
  const maxSettlers = 18;

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
    <>
      <SettlementDetails settlement={settlements[1]} />
      <SettlementOverview
        settlements={settlements}
        maxSettlers={maxSettlers}
        isIncomplete={isIncomplete}
        area={area}
      />
    </>
  );
};
export default SettlementController;
