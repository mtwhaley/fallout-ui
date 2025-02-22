import SettlementOverview from "./SettlementOverview";
import SettlementDetails from "./SettlementDetails";

const SettlementController = ({ settlements, area }) => {
  const maxSettlers = 18;
  const errorColor = "#ff5555";

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
      <SettlementDetails />
      <SettlementOverview
        settlements={settlements}
        maxSettlers={maxSettlers}
        isIncomplete={isIncomplete}
        errorColor={errorColor}
        area={area}
      />
    </>
  );
};
export default SettlementController;
