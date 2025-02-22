import SettlementOverview from "./SettlementOverview";
import SettlementDetails from "./SettlementDetails";
import { useState } from "react";

const SettlementController = ({ settlements, area }) => {
  const [detailSettlement, setDetailSettlement] = useState(undefined);
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

  const openDetailModal = (settlement) => {
    setDetailSettlement(settlement);
  };

  const handleCloseModal = () => {
    setDetailSettlement(undefined);
  };

  return (
    <>
      {detailSettlement !== undefined && (
        <SettlementDetails
          settlement={detailSettlement}
          onClose={handleCloseModal}
        />
      )}
      <SettlementOverview
        settlements={settlements}
        maxSettlers={maxSettlers}
        isIncomplete={isIncomplete}
        area={area}
        openDetailModal={openDetailModal}
      />
    </>
  );
};
export default SettlementController;
