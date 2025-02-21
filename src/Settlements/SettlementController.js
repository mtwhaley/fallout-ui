import { useEffect, useState } from "react";
import SettlementOverview from "./SettlementOverview";

const SettlementController = () => {
  const [settlements, setSettlements] = useState([]);
  const maxSettlers = 18;

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

  return (
    <SettlementOverview settlements={settlements} maxSettlers={maxSettlers} />
  );
};
export default SettlementController;
