import { useEffect, useState } from "react";
import SettlementOverview from "./SettlementOverview";

const SettlementController = () => {
  const [Settlements, setSettlements] = useState([]);

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
  });

  return <SettlementOverview settlements={Settlements} />;
};
export default SettlementController;
